<template>
  <div>
    <router-link to="/students/create" class="btn btn-primary mb-3">Pridať nového</router-link>
    <CTable align="middle" class="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell>Používateľ</CTableHeaderCell>
          <CTableHeaderCell>Študíjny odbor</CTableHeaderCell>
          <CTableHeaderCell></CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="item in students" :key="item.id">
          <CTableDataCell>
            <div>
              {{ item.academic_degree + ' ' || '' }}
              {{ item.first_name + ' ' + item.last_name }}</div>
          </CTableDataCell>
          <CTableDataCell>
            {{ item.study_type }}-{{ item.study_programme }}
          </CTableDataCell>
          <CTableDataCell class="text-center">
            <div>
              <router-link :to="`/students/${item._id}`" class="btn btn-sm btn-primary me-1">Zobraziť detail</router-link>
              <a href="#" @click.prevent="deleteUser(item._id)" class="btn btn-sm btn-danger">Odstrániť</a>
            </div>
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
  name: 'Students.index',
  setup() {
    var students = ref()

    const getStudents = async () => {
      const res = await axios.get('students')
      console.log(res)
      students.value = res.data
    }

    const deleteUser = async (student_id) => {
      if( ! confirm('Naozaj chcete odstrániť?') ) return
      
      const res = await axios.delete(`students/${student_id}`)
      console.log(res)

      getStudents()
    }

    onMounted(() => {
      getStudents()
    })


    return {
      students,
      deleteUser,
    }
  }
}
</script>
