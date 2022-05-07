<template>
  <div>
   <h1>Detail predmetu: { nazov predmetu }</h1>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol md="9">
            <CCardText> <strong>Predmet:</strong> {{ course.name }} </CCardText>
            <CCardText> <strong>Kód predmetu:</strong> {{ course.acronym }} </CCardText>
            <CCardText> <strong>Univerzita:</strong> {{ course.university }} </CCardText>
            <CCardText>
              <strong>Fakulta:</strong> {{ course.faculty }}
            </CCardText>
            <CCardText>
              <strong>Semester:</strong> {{ course.term }}
            </CCardText>
            <CCardText>
              <strong>Garant:</strong> {{ course.garant }}
            </CCardText>
            <CCardText>
              <strong>Popis:</strong> {{ course.description }}
            </CCardText>
            <CCardText>
              <strong>Podmienky absolvovania:</strong> {{ course.passConditions }}
            </CCardText>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // setup() {
  //   // await axios.get('http://ais.reydifox.eu:5000/courses/1')
  //   // console.log(course)
  //   return {
  //       course: {
  //           name: 'Databázové systémy',
  //           acronym: 'DBS',
  //           university: 'Slovenská technická univerzita',
  //           faculty: 'Fakulta elektrotechniky a informatiky',
  //           term: 'Letný semester',
  //           garant: 'Gabo Juhás',
  //           description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
  //           passConditions: 'V priebehu semestra budú 4 programovacie zadania po 10 bodov, na získanie hodnotenia A je potrebné získať najmenej 92 bodov, na získanie hodnotenia B najmenej 83 bodov, na hodnotenie C najmenej 74 bodov, na hodnotenie D najmenej 65 bodov a na hodnotenie E najmenej 56 bodov. Kredity sa neudelia študentovi, ktorý zo 4 zadaní získa menej ako 20 bodov.'
  //       },
  //   }
  // }
  data() {
    return {
        course: {
            name: 'Databázové systémy',
            acronym: 'DBS',
            university: 'Slovenská technická univerzita',
            faculty: 'Fakulta elektrotechniky a informatiky',
            term: 'Letný semester',
            garant: 'Gabo Juhás',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
            passConditions: 'V priebehu semestra budú 4 programovacie zadania po 10 bodov, na získanie hodnotenia A je potrebné získať najmenej 92 bodov, na získanie hodnotenia B najmenej 83 bodov, na hodnotenie C najmenej 74 bodov, na hodnotenie D najmenej 65 bodov a na hodnotenie E najmenej 56 bodov. Kredity sa neudelia študentovi, ktorý zo 4 zadaní získa menej ako 20 bodov.'
        },
    }
  },

  methods: {
    async getCourse() {
      const res = await axios.get('http://ais.reydifox.eu:5000/courses/1')
      console.log(res)
    }
  },

  mounted() {
    this.getCourse()
  }
}
</script>
