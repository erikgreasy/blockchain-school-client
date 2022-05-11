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
            <!-- {{ item.study_type }}-{{ item.study_programme }} --> TODO
          </CTableDataCell>
          <CTableDataCell class="text-center">
            <div>
              <router-link :to="`/users/${item._id}`" class="btn btn-sm btn-primary">Zobraziť detail</router-link>
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

    const getUsers = async () => {
      const res = await axios.get('users')
      console.log(res)
      students.value = res.data
    }

    onMounted(() => {
      getUsers()
    })


    return {
      students,
    }
  }
}
</script>
