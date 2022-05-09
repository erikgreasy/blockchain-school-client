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
                <CFormLabel for="faculty">Fakulta</CFormLabel>
                <CFormSelect
                  id="faculty"
                  aria-label="Default select example"
                  :options="[
                    'Vyberte fakultu',
                    { label: 'FEI', value: 'fei' },
                    { label: 'FIIT', value: 'fiit' },
                    { label: 'SJF', value: '3', disabled: true },
                  ]"
                >
                </CFormSelect>
              </div>
            </CCol>

            <CCol xs>
              <div class="mb-3">
                <CFormLabel for="garant">Garant predmetu</CFormLabel>
                <CFormSelect
                  id="garant"
                  aria-label="Default select example"
                  :options="[
                    'Vyberte garanta',
                    { label: 'Gabriel Juhas', value: 'gabriel_juhas' },
                    { label: 'Pavol Zajac', value: 'pavol_zajac' },
                    { label: 'Martin Nehez', value: 'martin_nehez' },
                  ]"
                >
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
              <CFormLabel for="prerequisities"
                >Podmienky absolvovania</CFormLabel
              >
              <div
                v-for="item in course.prerequisities"
                :key="item"
                id="prerequisities"
              >
                <CFormInput type="text" v-model="item.name" />
              </div>
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

    const route = useRoute()
    const getCourse = async () => {
      const res = await axios.get(`courses/${route.params.id}`)
      course.value = res.data
      console.log(res)
    }

    const submitForm = async function () {
      const res = await axios.post('courses', course)
      console.log(res)

      if (res.status === 200) {
        router.push('/courses')
      }
    }

    onMounted(() => {
      getCourse()
    })

    return {
      course,
      submitForm,
    }
  },
}
</script>
