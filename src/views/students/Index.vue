<template>
  <div>
    <router-link to="/students/create" class="btn btn-primary mb-3">Pridať nového</router-link>
    <CTable align="middle" class="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell class="text-center">
            <CIcon name="cil-people" />
          </CTableHeaderCell>
          <CTableHeaderCell>Používateľ</CTableHeaderCell>
          <CTableHeaderCell class="text-center">Fakulta</CTableHeaderCell>
          <CTableHeaderCell>Študíjny odbor</CTableHeaderCell>
          <CTableHeaderCell></CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="item in tableExample" :key="item.name">
          <CTableDataCell class="text-center">
            <CAvatar size="md" :src="item.avatar.src" :status="item.avatar.status" />
          </CTableDataCell>
          <CTableDataCell>
            <div>{{ item.student.name }}</div>
          </CTableDataCell>
          <CTableDataCell class="text-center">
            {{ item.faculty }}
          </CTableDataCell>
          <CTableDataCell>
            Aplikovaná informatika (API)
          </CTableDataCell>
          <CTableDataCell class="text-center">
            <div>
              <router-link to="/students/id" class="btn btn-sm btn-primary">Zobraziť detail</router-link>
            </div>
            <!-- <div class="small text-medium-emphasis">Last login</div>
            <strong>{{ item.activity }}</strong> -->
          </CTableDataCell>
        </CTableRow>
        <CTableRow></CTableRow>
      </CTableBody>
    </CTable>
  </div>
</template>

<script>
import avatar1 from '@/assets/images/avatars/1.jpg'
import avatar2 from '@/assets/images/avatars/2.jpg'
import avatar3 from '@/assets/images/avatars/3.jpg'
import avatar4 from '@/assets/images/avatars/4.jpg'
import avatar5 from '@/assets/images/avatars/5.jpg'
import avatar6 from '@/assets/images/avatars/6.jpg'

export default {
  name: 'Students.index',
  setup() {

    return {
      tableExample: [
        {
          avatar: { src: avatar1, status: 'success' },
          student: {
            name: 'Yiorgos Avraamu',
            new: true,
            registered: 'Jan 1, 2021',
          },
          country: { name: 'USA', flag: 'cif-us' },
          usage: {
            value: 50,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'success',
          },
          payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
          activity: '10 sec ago',
        },
        {
          avatar: { src: avatar2, status: 'danger' },
          student: {
            name: 'Avram Tarasios',
            new: false,
            registered: 'Jan 1, 2021',
          },
          country: { name: 'Brazil', flag: 'cif-br' },
          faculty: 'FIIT',
           usage: {
            value: 22,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'info',
          },
          payment: { name: 'Visa', icon: 'cib-cc-visa' },
          activity: '5 minutes ago',
        },
        {
          avatar: { src: avatar3, status: 'warning' },
          student: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
          country: { name: 'India', flag: 'cif-in' },
          faculty: 'FEI',
          usage: {
            value: 74,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'warning',
          },
          payment: { name: 'Stripe', icon: 'cib-cc-stripe' },
          activity: '1 hour ago',
        },
        {
          avatar: { src: avatar4, status: 'secondary' },
          student: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
          country: { name: 'France', flag: 'cif-fr' },
          usage: {
            value: 98,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'danger',
          },
          payment: { name: 'PayPal', icon: 'cib-cc-paypal' },
          activity: 'Last month',
        },
        {
          avatar: { src: avatar5, status: 'success' },
          student: {
            name: 'Agapetus Tadeáš',
            new: true,
            registered: 'Jan 1, 2021',
          },
          country: { name: 'Spain', flag: 'cif-es' },
          usage: {
            value: 22,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'primary',
          },
          payment: { name: 'Google Wallet', icon: 'cib-cc-apple-pay' },
          activity: 'Last week',
        },
        {
          avatar: { src: avatar6, status: 'danger' },
          student: {
            name: 'Friderik Dávid',
            new: true,
            registered: 'Jan 1, 2021',
          },
          country: { name: 'Poland', flag: 'cif-pl' },
          usage: {
            value: 43,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'success',
          },
          payment: { name: 'Amex', icon: 'cib-cc-amex' },
          activity: 'Last week',
        },
      ]
    }
  }
}
</script>
