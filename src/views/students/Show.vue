<template>
  <div>
    <h1>Profil študenta</h1>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol md="4">
            <img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="">

            <h2>{{ `${student.first_name} ${student.last_name}` }}</h2>
          </CCol>

          <CCol md="8">
            <CCardTitle> Osobné údaje </CCardTitle>
            <CCardText> <strong>Meno:</strong> {{ `${student.first_name} ${student.last_name}` }} </CCardText>
            <CCardText> <strong>Email:</strong> {{ student.email }} </CCardText>
            <CCardText>
              <strong>Sukromný email:</strong> {{ student.private_email }}
            </CCardText>
            <hr>
            <CCardTitle> Adresa </CCardTitle>
            <CCardText>
              <strong>Krajina:</strong> {{ student.address?.country }}
            </CCardText>
            <CCardText>
              <strong>Mesto:</strong> {{ student.address?.city }}
            </CCardText>
            <CCardText>
              <strong>PSČ:</strong> {{ student.address?.postal_code }}
            </CCardText>
            <CCardText>
              <strong>Ulica a číslo:</strong> {{ student.address?.street }} {{ student.address?.house_number }}
            </CCardText>
            <hr />
            <CCardTitle> Štúdium </CCardTitle>
            <CCardText>
              <strong>Odbor:</strong> {{ student.study_programme?.name }}
            </CCardText>
            <CCardText>
              <strong>Titul:</strong> {{ student.academic_degree }}
            </CCardText>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import axios from 'axios'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

export default {
  name: 'Students.show',
  setup() {
    var student = ref({})

    const route = useRoute()
    const getStudent = async () => {
      const res = await axios.get(`students/${route.params.id}`)
      console.log(res)
      student.value = res.data
    }

    onMounted(() => {
      getStudent()
    })
    
    return {
      student
    }
  },
}
</script>
