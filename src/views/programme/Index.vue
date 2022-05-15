<template>
    <div>
        <CTable align="middle" class="mb-0 border" hover responsive>
            <CTableHead color="light">
                <CTableRow>
                    <CTableHeaderCell>Program</CTableHeaderCell>
                    <CTableHeaderCell>Akronym</CTableHeaderCell>
                    <CTableHeaderCell v-if="show_students"></CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow v-for="item in programmes" :key="item._id">
                    <CTableDataCell>
                        <div>{{ item.name }}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                        {{ item.acronym }}
                    </CTableDataCell>
                    <CTableDataCell v-if="show_students">
                        <router-link :to="`/programme/${item._id}/students`" class="btn btn-secondary btn-sm">Študenti</router-link>
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
    setup() {
        var programmes = ref()

        var show_students = true

        const getProgrammes = async function () {
            const res = await axios.get('programme')
            programmes.value = res.data
            console.log(res)
        }

        onMounted(() => {
            getProgrammes()
        })

        return {
            programmes,
            show_students,
        }
    },
}
</script>
