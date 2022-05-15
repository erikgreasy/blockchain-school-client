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
              <strong v-if="Object.values(student_courses).map(item=>item._id).includes(course._id)">Zapísaný</strong>
              <button v-else @click="registerSubject(course._id)" class="btn btn-primary">
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
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'

export default {
  name: 'Registration.index',
  setup() {
    const courses = ref([])
    const student_courses = ref({})
    const store = useStore()

    const getCourses = async () => {
      const res = await axios.get('courses')
      console.log(res)

      courses.value = res.data
    }

    const registerSubject = async (courseId) => {
      //assign course to student
      const registrationData = {
        "course_id": courseId,
        "student_id": store.state.loggedUser._id
      }
      const res1 = await axios.post('results', registrationData)
      console.log(res1)
      getAssignedCourses()
    }

    const getAssignedCourses = async() => {
      // get students courses 
      const res2 = await axios.get(`courses/${store.state.loggedUser._id}/student_courses`)
      student_courses.value = res2.data
    } 

    onMounted(() => {
      getCourses(),
      getAssignedCourses()
    })

    return {
      getAssignedCourses,
      courses,
      student_courses,
      registerSubject,
    }
  },
}
</script>
