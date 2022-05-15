<template>
  <div>
    <router-link to="/users/create" class="btn btn-primary mb-3">Pridať nového</router-link>
    <CTable align="middle" class="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell>Používateľ</CTableHeaderCell>
          <CTableHeaderCell>Rola</CTableHeaderCell>
          <CTableHeaderCell></CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="item in students" :key="item._id">
          <CTableDataCell>
            <div>{{ item.first_name + ' ' + item.last_name }}</div>
          </CTableDataCell>
          <CTableDataCell>
            {{ item.user_role?.name }}
            <!-- {{ item.study_type }}-{{ item.study_programme }} --> 
          </CTableDataCell>
          <CTableDataCell class="text-center">
            <div>
              <router-link :to="`/users/${item._id}`" class="btn btn-sm btn-primary me-2">Zobraziť detail</router-link>
              <router-link :to="`/users/${item._id}/edit`" class="btn btn-sm btn-secondary me-2">Upraviť</router-link>
              <a href="#" @click.prevent="deleteUser(item._id)" class="text-danger">
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
import axios from 'axios'
import CIcon from '@coreui/icons-vue'
import { cilTrash } from '@coreui/icons'
import { onMounted, ref } from 'vue'

export default {
  name: 'Students.index',
  setup() {
    var students = ref()

    const getUsers = async () => {
      const res = await axios.get('users')
      console.log(res)
      students.value = res.data.filter(user => user.user_type == 'faculty_member')
    }

    const deleteUser = async (user_id) => {
      if( ! confirm('Naozaj chcete odstrániť používateľa?') ) return

      const res = await axios.delete(`users/${user_id}`)

      console.log(res)

      getUsers()
    }

    onMounted(() => {
      getUsers()
    })


    return {
      students,
      CIcon, 
      cilTrash,
      deleteUser,
    }
  }
}
</script>
