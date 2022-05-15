<template>
  <div>
    <CTable align="middle" class="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell>Predmet</CTableHeaderCell>
          <CTableHeaderCell>Akronym</CTableHeaderCell>
          <CTableHeaderCell></CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="course in courses" :key="course._id">
          <CTableDataCell>
            {{ course.name }}
          </CTableDataCell>
          <CTableDataCell>
            {{ course.acronym }}
          </CTableDataCell>
          <CTableDataCell>
            <div>
              <router-link to="/results/show" class="btn btn-sm btn-primary">
                Zobraziť hodnotenie
              </router-link>
            </div>
          </CTableDataCell>
        </CTableRow>
        <CTableRow></CTableRow>
      </CTableBody>
    </CTable>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"
import axios from 'axios'
import { useStore } from "vuex"

export default {
  name: 'Results.index',
  setup() {
    const courses = ref([])
    const store = useStore()
    const loggedUser = store.state.loggedUser

    const getCourses = async () => {
      const res = await axios.get(`courses/${loggedUser.id}/student_courses`)
      console.log(res)

      courses.value = res.data
    }

    onMounted(() => {
      getCourses()
    })

    return {
      courses,
    }
  },
}
</script>
