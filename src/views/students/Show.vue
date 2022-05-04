<template>
  <div>
    <h1>Profil Študenta</h1>
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
            <h2>{{ `${student.firstName} ${student.lastName}` }}</h2>
            <p><strong>ID:</strong> {{ student.uniqueId }}</p>
          </CCol>

          <CCol md="8">
            <CCardTitle> Osobné údaje </CCardTitle>
            <CCardText> <strong>Meno:</strong> {{ `${student.firstName} ${student.lastName}` }} </CCardText>
            <CCardText> <strong>Email:</strong> {{ student.email }} </CCardText>
            <CCardText>
              <strong>Sukromný email:</strong> {{ student.privateEmail }}
            </CCardText>
            <hr>
            <CCardTitle> Adresa </CCardTitle>
            <CCardText>
              <strong>Krajina:</strong> {{ student.adress.country }}
            </CCardText>
            <CCardText>
              <strong>Mesto:</strong> {{ student.adress.city }}
            </CCardText>
            <CCardText>
              <strong>PSČ:</strong> {{ student.adress.postalCode }}
            </CCardText>
            <CCardText>
              <strong>Ulica a číslo:</strong> {{ `${student.adress.street} ${student.adress.houseNumber}` }}
            </CCardText>
            <hr />
            <CCardTitle> Štúdium </CCardTitle>
            <CCardText>
              <strong>Fakulta:</strong> {{ student.study.faculty }}
            </CCardText>
            <CCardText>
              <strong>Odbor:</strong> {{ student.study.programme }}
            </CCardText>
            <CCardText>
              <strong>Forma:</strong> {{ student.study.form }}
            </CCardText>
            <CCardText>
              <strong>Titul:</strong> {{ student.academicDegree }}
            </CCardText>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import avatar1 from '@/assets/images/avatars/1.jpg'

export default {
  name: 'Students.show',
  setup() {
    return {
      student: {
        avatar: { src: avatar1, status: 'success' },
        firstName: 'Yiorgos',
        lastName: 'Avraamu',
        email: 'xibrahim@stuba.sk',
        privateEmail: 'ibrahim@gmail.com',
        uniqueId: '123456',
        academicDegree: 'Bc.',
        study: {
          faculty: 'FEI',
          programme: 'Aplikovaná informatika',
          form: 'Denná',
        },
        adress: {
          street: 'Moskovska',
          houseNumber: '23',
          city: 'Zilina',
          postalCode: '50648',
          country: 'Slovensko',
        },
      },
    }
  },
}
</script>
