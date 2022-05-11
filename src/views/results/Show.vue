<template>
  <div>
    <CTable align="middle" class="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell>Názov</CTableHeaderCell>
          <CTableHeaderCell>Body</CTableHeaderCell>
          <CTableHeaderCell>Pridané</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="record in gradingRecords" :key="record.name">
          <CTableDataCell>
            {{ record.name }}
          </CTableDataCell>
          <CTableDataCell>
            {{ record.points }}
          </CTableDataCell>
          <CTableDataCell>
            {{ record.created }}
          </CTableDataCell>
        </CTableRow>
        <CTableRow></CTableRow>
      </CTableBody>
    </CTable>
  </div>
</template>

<script>
import axios from 'axios'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

export default {
  name: 'Results.show',
  setup() {
    var gradingRecords = ref({})

    const route = useRoute()
    const getStudent = async () => {
      const res = await axios.get(`/results/${route.params.course_id}/${route.params.student_id}`)
      console.log(res)
      gradingRecords.value = res.data.grading_records
    }

    onMounted(() => {
      getStudent()
    })
    
    return {
      gradingRecords
    }
  },
}
</script>
