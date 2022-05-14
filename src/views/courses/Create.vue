<template>
  <div>
    <CCard class="mb-4">
      <CCardBody>
        <CForm @submit.prevent="submitForm">
          <h2 class="mb-3 text-center">Vytvorenie predmetu</h2>
          <CRow>
            <CCol xs>
              <div class="mb-3">
                <CFormLabel for="name">Názov predmetu</CFormLabel>
                <CFormInput type="text" v-model="course.name" id="name" />
              </div>
            </CCol>
            <CCol xs>
              <div class="mb-3">
                <CFormLabel for="acronym">Kód predmetu</CFormLabel>
                <CFormInput type="text" v-model="course.acronym" id="acronym" />
              </div>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs>
              <div class="mb-3">
                <CFormLabel for="garant_id">Garant predmetu</CFormLabel>
                <CFormSelect
                  size="sm"
                  class="mb-3"
                  aria-label="Small select example"
                  v-model="course.garant_id"
                >
                  <option>Vyberte garanta:</option>
                  <option
                    :value="garant._id"
                    v-for="garant in garants"
                    :key="garant._id"
                  >
                    {{ garant.first_name + ' ' + garant.last_name }}
                  </option>
                </CFormSelect>
              </div>
            </CCol>

            <!-- <CCol xs>
              <multiselect
                v-model="lecturer_id"
                :options="lecturers.value"
                :multiple="true"
                :close-on-select="false"
                :clear-on-select="false"
                :preserve-search="true"
                placeholder="Pick some"
                label="name"
                track-by="_id"
                :preselect-first="true"
              >
              </multiselect>
            </CCol> -->
          </CRow>

          <CRow>
            <div class="mb-3">
              <CFormLabel for="description">Popis</CFormLabel>
              <CFormInput
                type="text"
                v-model="course.description"
                id="description"
              />
            </div>
          </CRow>
          <CRow>
            <div class="mb-3">
              <CFormLabel for="trimester">Semester</CFormLabel>
              <CFormInput
                type="text"
                v-model="course.trimester"
                id="trimester"
              />
            </div>
          </CRow>
          <div class="d-grid">
            <CButton type="submit" color="primary">Uložiť</CButton>
          </div>
        </CForm>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import router from '@/router'
// import Multiselect from 'vue-multiselect'

export default {
  name: 'Courses.create',
  // components: { Multiselect },
  setup() {
    const course = ref({
      garant_id: '',
      lecturer_id: [],
      name: '',
      acronym: '',
      description: '',
      trimester: '',
      prerequisite_course_id: null,
    })

    const submitForm = async function () {
      const res = await axios.post('courses', course.value)
      // console.log(res.data)

      if (res.status === 200) {
        router.push('/courses')
      }
    }

    const garants = ref([])
    const lecturers = ref([])

    const getRequredRoles = async () => {
      const res = await axios.get('users')
      // console.log(res)
      lecturers.value = Array.from(res.data.filter(
        (el) =>
          el.user_role?.name == 'Lecturer' ||
          el.user_role?.name == 'Course garant' ||
          el.user_role?.name == 'Programme garant',
      ))
      garants.value = res.data.filter(
        (el) => el.user_role?.name == 'Course garant',
      )
      console.log(lecturers.value)
    }

    onMounted(() => {
      getRequredRoles()
    })

    return {
      garants,
      lecturers,
      course,
      submitForm,
    }
  },
}
</script>
