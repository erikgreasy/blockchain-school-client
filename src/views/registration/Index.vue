<template>
  <div>
    <h1 class="mb-4">Zápis/Registrácia predmetov</h1>
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
            <router-link :to="`/courses/${course._id}`">{{ course.name }}</router-link>
          </CTableDataCell>
          <CTableDataCell>
            {{ course.acronym }}
          </CTableDataCell>
          <CTableDataCell>
            <div>
              <button @click="registerSubject(course._id)" class="btn btn-primary">
                Zapísať predmet
              </button>
            </div>
          </CTableDataCell>
        </CTableRow>
        <CTableRow></CTableRow>
      </CTableBody>
    </CTable>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import axios from 'axios'
import { onMounted } from '@vue/runtime-core'
export default {
  name: 'Registration.index',
  setup() {
    const courses = ref([])



    const getCourses = async () => {
      const res = await axios.get('courses')
      console.log(res)

      courses.value = res.data
    }

    const registerSubject = async () => {
      alert('register')
    }

    onMounted(() => {
      getCourses()
    })

    return {
      courses,
      registerSubject,
    }
  },
}
</script>
