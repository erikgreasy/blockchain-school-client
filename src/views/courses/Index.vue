<template>
  <div>
    <router-link to="/courses/create" class="btn btn-primary mb-3">Pridať predmet</router-link
    >
    <CTable align="middle" class="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell>Predmet</CTableHeaderCell>
          <CTableHeaderCell>Akronym</CTableHeaderCell>
          <CTableHeaderCell>Semester</CTableHeaderCell>
          <CTableHeaderCell></CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="item in tableExample" :key="item.course.name">
          <CTableDataCell>
            <div>{{ item.course.name }}</div>
          </CTableDataCell>
          <CTableDataCell>
            {{ item.course.acronym }}
          </CTableDataCell>
          <CTableDataCell> {{ item.course.semester }} </CTableDataCell>
          <CTableDataCell>
            <div>
              <router-link to="/courses/id" class="btn btn-sm btn-primary">
                Zobraziť detail
              </router-link>
            </div>
            <!-- <div class="small text-medium-emphasis">Last login</div>
            <strong>{{ course.activity }}</strong> -->
          </CTableDataCell>
        </CTableRow>
        <CTableRow></CTableRow>
      </CTableBody>
    </CTable>
  </div>
</template>

<script>
export default {
  name: 'Courses.index',
  setup() {
    return {
        tableExample: [
        {
          course: {
            name: 'Databázové systémy',
            acronym: 'DBS',
            semester: 'Letný semester',
            garant: 'Gabo Juhás',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          },
        },
        {
          course: {
            name: 'Programovanie 1',
            acronym: 'PROG1',
            semester: 'Letný semester',
            garant: 'Gabo Juhás',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          },
        },
        {
          course: {
            name: 'Automaty a formálne jazyky',
            acronym: 'AFJ',
            semester: 'Letný semester',
            garant: 'Gabo Juhás',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          },
        },
        {
          course: {
            name: 'Algoritmy a dátové štruktúry',
            acronym: 'ADS',
            semester: 'Letný semester',
            garant: 'Gabo Juhás',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          },
        },
        {
          course: {
            name: 'Bezpečnosť informačných systémov',
            acronym: 'BIS',
            semester: 'Letný semester',
            garant: 'Gabo Juhás',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          },
        },
        {
          course: {
            name: 'Reprezentacia a získavanie znalostí',
            acronym: 'RZZ',
            semester: 'Letný semester',
            garant: 'Gabo Juhás',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          },
        },
        {
          course: {
            name: 'Paralelné programovanie a dist. systémy',
            acronym: 'PPDS',
            semester: 'Letný semester',
            garant: 'Gabo Juhás',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          },
        },
      ]
    }
  },
}
</script>
