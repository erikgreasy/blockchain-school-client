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
        <CTableRow v-for="course in user.courses" :key="course.id">
          <CTableDataCell>
            <a href="/courses/id">{{ course.name }}</a> 
          </CTableDataCell>
          <CTableDataCell>
            {{ course.acronym }}
          </CTableDataCell>
          <CTableDataCell>
            <div>
              <router-link to="/registration/subject_id" class="btn btn-sm btn-primary">
                Zapísať predmet
              </router-link>
            </div>
          </CTableDataCell>
        </CTableRow>
        <CTableRow></CTableRow>
      </CTableBody>
    </CTable>
  </div>
</template>

<script>
export default {
  name: 'Registration.index',
  setup() {
    return {
      user: {
        term: 'Letný semester 2021',
        adademic: '2021/2022',
        courses: [
          {
            id: '1',
            name: 'Databázové systémy',
            acronym: 'DBS',
          },
          {
            id: '2',
            name: 'Programovanie 1',
            acronym: 'PROG1',
          },
          {
            id: '3',
            name: 'Automaty a formálne jazyky',
            acronym: 'AFJ',
          },
          {
            id: '4',
            name: 'Algoritmy a dátové štruktúry',
            acronym: 'ADS',
          },
        ],
      },
    }
  },
}
</script>
