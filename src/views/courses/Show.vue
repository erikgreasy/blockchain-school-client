<template>
    <div>
        <h1>Detail predmetu: {{ course.name }}</h1>
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
import { useRoute } from 'vue-router'

export default {
    data() {
        return {
            course: {}
        }
    },

    methods: {
        async getCourse() {
            const route = useRoute()

            const res = await this.$axios.get(`courses/${route.params.id}`)
            this.course = res.data
            console.log(res)
        }
    },

    mounted() {
        this.getCourse()
    }
}
</script>
