<template>
  <div>
    <h1>Hodnotenie študenta {{ student.first_name + ' ' + student.last_name }}</h1>
    <CTable align="middle" class="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell>Položka</CTableHeaderCell>
          <CTableHeaderCell>Body</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="point in points" :key="point.created">
          <CTableDataCell>
            xxxx
          </CTableDataCell>
          <CTableDataCell>
            {{ point.score }}
          </CTableDataCell>
        </CTableRow>
        <CTableRow></CTableRow>
      </CTableBody>
    </CTable>

    <CForm @submit.prevent="addRecord" class="mt-4">
      <CRow>
        <CCol>
          <CFormInput type="text" id="name" />
        </CCol>
        <CCol>
          <CFormInput type="text" id="score" v-model="newResult.score" />
        </CCol>
        <CCol>
          <CButton type="submit" color="primary">Pridať</CButton>
        </CCol>
      </CRow>
      
    </CForm>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
  name: 'Students.show',
  setup() {
    var points = ref([])
    var student = ref({})
    var newResult = ref({
      score: '',
    })
    const route = useRoute()

    const getPoints = async () => {
      const res = await axios.get(`results/${route.params.course_id}/${route.params.student_id}`)
      points.value = res.data.grading_records
      console.log(res)
    }

    const addRecord = async () => {
      const res = await axios.post(`results/${route.params.course_id}/${route.params.student_id}`, newResult)
      console.log(res)
      newResult.value = {}
      getPoints()
    }

    const getUser = async () => {
      const res = await axios.get(`students/${route.params.student_id}`)
      student = res.data
    }

    onMounted(() => {
      getPoints()
      getUser()
    })
    
    return {
      points,
      addRecord,
      newResult,
      student,
    }
  },
}
</script>
