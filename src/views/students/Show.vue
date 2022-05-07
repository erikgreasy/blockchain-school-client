<template>
  <div>
    <h1>Profil študenta</h1>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol md="4">
            <img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="">
            <!-- <CAvatar
              size="xl"
              :src="student.avatar.src"
              :status="student.avatar.status"
            /> -->
            <h2>{{ `${student.first_name} ${student.last_name}` }}</h2>
            <p><strong>ID:</strong> {{ student.id }}</p>
          </CCol>

          <CCol md="8">
            <CCardTitle> Osobné údaje </CCardTitle>
            <CCardText> <strong>Meno:</strong> {{ `${student.first_name} ${student.last_name}` }} </CCardText>
            <CCardText> <strong>Email:</strong> {{ student.email }} </CCardText>
            <CCardText>
              <strong>Sukromný email:</strong> {{ student.privateEmail }}
            </CCardText>
            <hr>
            <CCardTitle> Adresa </CCardTitle>
            <CCardText>
              <strong>Krajina:</strong> 
            </CCardText>
            <CCardText>
              <strong>Mesto:</strong> 
            </CCardText>
            <CCardText>
              <strong>PSČ:</strong>
            </CCardText>
            <CCardText>
              <strong>Ulica a číslo:</strong> 
            </CCardText>
            <hr />
            <CCardTitle> Štúdium </CCardTitle>
            <CCardText>
              <strong>Fakulta:</strong> 
            </CCardText>
            <CCardText>
              <strong>Odbor:</strong> {{ student.study_programme }}
            </CCardText>
            <CCardText>
              <strong>Forma:</strong> {{ student.study_form }}
            </CCardText>
            <CCardText>
              <strong>Titul:</strong> 
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
