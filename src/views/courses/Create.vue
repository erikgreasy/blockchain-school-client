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
import axios from 'axios'
import router from '@/router'

export default {
  data () {
    return {
      course: {},
      lecturers: {},
      garants: {}
    }
  },
  methods: {
    async submitForm () {
      const res = await axios.post('courses', this.course)
      // console.log(res.data)

      if (res.status === 200) {
        router.push('/courses')
      }
    }
  },
  async mounted () {
      const res = await axios.get('users')
      
      console.log(res)
      this.lecturers = Array.from(res.data.filter(
        (el) =>
          el.user_role?.name == 'Lecturer' ||
          el.user_role?.name == 'Dean' ||
          el.user_role?.name == 'Subdean ' ||
          el.user_role?.name == 'Course garant' ||
          el.user_role?.name == 'Programme garant',
      ))
      this.garants = res.data.filter(
        (el) => el.user_role?.name == 'Course garant',
      )
      console.log(this.lecturers)
    }
}
</script>
