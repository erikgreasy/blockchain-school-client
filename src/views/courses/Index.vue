<template>
  <div>
    <router-link to="/courses/create" class="btn btn-primary mb-3">Pridať predmet</router-link>
    <CTable align="middle" class="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell>Predmet</CTableHeaderCell>
          <CTableHeaderCell>Akronym</CTableHeaderCell>
          <CTableHeaderCell>Semester</CTableHeaderCell>
          <CTableHeaderCell></CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="item in courses" :key="item.id">
          <CTableDataCell>
            <div>{{ item.name }}</div>
          </CTableDataCell>
          <CTableDataCell>
            {{ item.acronym }}
          </CTableDataCell>
          <CTableDataCell> {{ item.term }} </CTableDataCell>
          <CTableDataCell>
            <div>
              <router-link :to="`/courses/${item.id}`" class="btn btn-sm btn-primary">
                Zobraziť detail
              </router-link>
            </div>
            <!-- <div class="small text-medium-emphasis">Last login</div>
            <strong>{{ course.activity }}</strong> -->
          </CTableDataCell>
        </CTableRow>
        <CTableRow></CTableRow>
      </CTableBody>
    </CTable>
  </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {
  name: 'Courses.index',
  setup() {
    var courses = ref()


    const getCourses = async function() {
      const res = await axios.get('courses')
      courses.value = res.data
      console.log(res)
    }

    onMounted(() => {
      getCourses()
    })
    
    return {
      getCourses,
      courses,
    }
  },
}
</script>
