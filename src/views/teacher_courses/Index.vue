<template>
  <div>
    <CTable align="middle" class="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell>Predmet</CTableHeaderCell>
          <CTableHeaderCell>Akronym</CTableHeaderCell>
          <CTableHeaderCell>Akcie</CTableHeaderCell>
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
          <CTableDataCell v-if="loggedUser.name == 'course-guarantor'">
            <router-link
              :to="`/courses/${item.id}/edit`"
              class="btn btn-sm btn-primary me-3"
            >
              Upraviť predmet
            </router-link>
          </CTableDataCell>
          <!-- <CTableDataCell> {{ item.term }} </CTableDataCell> -->
          <CTableDataCell>
            <div class="d-flex align-items-center justify-content-center">
              <router-link
                :to="`/courses/${item.id}/students`"
                class="btn btn-sm btn-primary me-3"
              >
                Zobraziť študentov
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
import { cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    var courses = ref()

    const loggedUser = useStore()

    const getCourses = async function () {
      const res = await axios.get(`lecturers/${loggedUser.id}/courses`)
      courses.value = res.data
      console.log(res)
    }

    onMounted(() => {
      getCourses()
    })

    return {
      getCourses,
      courses,
      CIcon,
      cilTrash,
    }
  },
}
</script>
