<template>
  <div>
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
        <CTableRow v-for="item in courses" :key="item._id">
          <CTableDataCell>
            <div>{{ item.name }}</div>
          </CTableDataCell>
          <CTableDataCell>
            {{ item.acronym }}
          </CTableDataCell>
          <CTableDataCell> {{ item.trimester }} </CTableDataCell>
          <CTableDataCell>
            <div class="d-flex align-items-center justify-content-center">
              <router-link :to="`/courses/${item._id}`" class="btn btn-sm btn-primary me-3">
                Zobraziť detail
              </router-link>
              <a href="#" @click.prevent="deleteCourse(item._id)" class="text-danger">
                <CIcon :icon="cilTrash" size="md"/>
              </a>
            </div>
          </CTableDataCell>
        </CTableRow>
        <CTableRow></CTableRow>
      </CTableBody>
    </CTable>
  </div>
</template>

<script>
import { cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    var courses = ref()
    const store = useStore()

    const getCourses = async function() {
      const res = await axios.get('courses')
      courses.value = res.data.filter(el => (el?.garant_id == store.state.loggedUser._id || el?.teacher_id == store.state.loggedUser._id))
      console.log(res)
    }

    onMounted(() => {
      getCourses()
    })
    
    return {
      getCourses,
      courses,
      CIcon,
      cilTrash
    }
  },
}
</script>
