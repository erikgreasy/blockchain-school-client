<template>
    <div>
        <h2>Študenti - {{ course.name }}</h2>
        <CTable align="middle" class="mb-0 border" hover responsive>
            <CTableHead color="light">
                <CTableRow>
                    <CTableHeaderCell>Používateľ</CTableHeaderCell>
                    <CTableHeaderCell>Študíjny odbor</CTableHeaderCell>
                    <CTableHeaderCell></CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow v-for="item in students" :key="item.id">
                    <CTableDataCell>
                        <router-link :to="`/students/${item.id}`" class="me-1">
                            {{ item.first_name + ' ' + item.last_name }}
                        </router-link>
                    </CTableDataCell>
                    <CTableDataCell>
                        {{ item.study_type }}-{{ item.study_programme }}
                    </CTableDataCell>
                    <CTableDataCell class="text-center">
                        <div>
                            <router-link :to="`/students/${item.id}/courses/${course.id}/points`">Hodnotenia</router-link>
                        </div>
                    </CTableDataCell>
                </CTableRow>
                <CTableRow>
                </CTableRow>
            </CTableBody>
        </CTable>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
    data() {
        return {
            students: [],
            course: {}
        }
    },

    methods: {
        async getStudents() {
            const route = useRoute()

            const res = await this.$axios.get(`courses/${route.params.id}/students`)
            this.students = res.data
            console.log(res)
        },

        async getCourse() {
            const route = useRoute()

            const res = await this.$axios.get(`courses/${route.params.id}`)
            this.course = res.data
            console.log(res)
        }
    },

    mounted() {
        this.getCourse()
        this.getStudents()
    }
}
</script>
