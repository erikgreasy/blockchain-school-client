<template>
  <div>
    <CCard class="mb-4">
      <CCardBody>
        <CForm @submit.prevent="submitForm">
          <h2 class="mb-3 text-center">Úprava predmetu</h2>
            <CRow>
            <CCol xs>
                <div class="mb-3">
                <CCardText> <strong>Predmet:</strong> {{ course.name }} </CCardText>
                </div>
            </CCol>
            </CRow>
            <CRow>
            <CCol xs>
                <div class="mb-3">
                <CCardText> <strong>Kód predmetu:</strong> {{ course.acronym }} </CCardText>
                </div>
            </CCol>
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
                    :selected="garant._id == course.garant_id"
                  >
                    {{ garant.first_name + ' ' + garant.last_name }}
                  </option>
                </CFormSelect>
              </div>
            </CCol>

            <CCol xs>
              <div class="mb-3">
                <CFormLabel for="lecturer_id">Vyučujúci predmetu</CFormLabel>
                <CFormSelect
                  size="sm"
                  class="mb-3"
                  aria-label="Small select example"
                  v-model="course.lecturer_id"
                >
                  <option>Vyberte vyučujúceho:</option>
                  <option
                    :value="lecturer._id"
                    v-for="lecturer in lecturers"
                    :key="lecturer._id"
                    :selected="lecturer._id == course.lecturer_id"
                  >
                    {{ lecturer.first_name + ' ' + lecturer.last_name }}
                  </option>
                </CFormSelect>
              </div>
            </CCol>
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

          <div class="d-grid">
            <CButton type="submit" color="primary">Uložiť</CButton>
          </div>
        </CForm>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import router from '@/router'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const course = ref({})
    const garants = ref({})
    const lecturers = ref({})

    const route = useRoute()

    const getCourse = async () => {
      const res = await axios.get(`courses/${route.params.id}`)
      course.value = res.data
      console.log(res)
    }

    const getRequiredRoles = async () => {
        const res = await axios.get('users')
      
        console.log(res.data)

        lecturers.value = res.data.filter((el) =>
            el.user_role?.name == 'Lecturer' ||
            el.user_role?.name == 'Dean' ||
            el.user_role?.name == 'Subdean ' ||
            el.user_role?.name == 'Course garant' ||
            el.user_role?.name == 'Programme garant',
        )
        garants.value = res.data.filter(
            (el) => el.user_role?.name == 'Course garant',
        )
        console.log(garants)
    }

    const submitForm = async function () {
      const res = await axios.put(`courses/${route.params.id}`, course.value)
      console.log(res)

      if (res.status === 200) {
        router.push(`/courses/${route.params.id}`)
      }
    }

    onMounted(() => {
      getCourse(),
      getRequiredRoles()
    })

    return {
      course,
      lecturers,
      submitForm,
      garants
    }
  },
}
</script>
