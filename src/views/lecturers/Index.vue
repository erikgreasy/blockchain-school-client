<template>
  <div>
    <CTable align="middle" class="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell>Používateľ</CTableHeaderCell>
          <CTableHeaderCell></CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="item in lecturers" :key="item._id">
          <CTableDataCell>
            <div>
              {{ item.academic_degree + ' ' || '' }}
              {{ item.first_name + ' ' + item.last_name }}</div>
          </CTableDataCell>
          <CTableDataCell class="text-center">
            <div>
              <router-link :to="`/users/${item._id}`" class="btn btn-sm btn-primary me-1">Zobraziť detail</router-link>
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
  name: 'Lecturers.index',
  setup() {
    var lecturers = ref()

    const getLecturers = async () => {
      const res = await axios.get('users')
      console.log(res)
      lecturers.value = res.data.filter(
        (el) =>
          el.user_role?.name == 'Lecturer' ||
          el.user_role?.name == 'Dean' ||
          el.user_role?.name == 'Subdean ' ||
          el.user_role?.name == 'Course garant' ||
          el.user_role?.name == 'Programme garant',
      )
    }

    onMounted(() => {
      getLecturers()
    })


    return {
      lecturers,
    }
  }
}
</script>
