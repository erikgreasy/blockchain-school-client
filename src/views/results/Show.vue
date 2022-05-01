<template>
  <div>
    <CTable align="middle" class="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell>Názov</CTableHeaderCell>
          <CTableHeaderCell>Body</CTableHeaderCell>
          <CTableHeaderCell>Pridané</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="record in gradingRecord" :key="record.name">
          <CTableDataCell>
            {{ record.name }}
          </CTableDataCell>
          <CTableDataCell>
            {{ record.points }}
          </CTableDataCell>
          <CTableDataCell>
            {{ record.created }}
          </CTableDataCell>
        </CTableRow>
        <CTableRow></CTableRow>
      </CTableBody>
    </CTable>
  </div>
</template>

<script>
export default {
  name: 'Results.show',
  setup() {
    return {
      gradingRecord: [
        {
          name: 'Test 1',
          points: '14',
          created: '1.1.2022',
        },
        {
          name: 'Test 2',
          points: '18',
          created: '18.2.2022',
        },
        {
          name: 'Test 3',
          points: '15',
          created: '10.13.2022',
        },
      ],
    }
  },
}
</script>
