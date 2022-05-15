<template>
    <div>
        <CTable align="middle" class="mb-0 border" hover responsive>
            <CTableHead color="light">
                <CTableRow>
                    <CTableHeaderCell class="text-center">
                        <!-- <CIcon name="cil-people" /> -->
                        Predmet
                    </CTableHeaderCell>
                    <CTableHeaderCell>
                        Hodnotenie
                    </CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow v-for="course in courses" :key="course.id">
                    <CTableDataCell>
                        <div>
                            <router-link :to="`/courses/${course.id}`">
                                {{ course.name }}
                            </router-link>
                        </div>
                    </CTableDataCell>
                    <CTableDataCell>
                        <div>{{ course.grade || 'N/A' }}</div>
                    </CTableDataCell>
                </CTableRow>
                <CTableRow></CTableRow>
            </CTableBody>
        </CTable>
    </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'

export default {
    name: 'E-Index',
    setup() {
        var courses = ref()
        const store = useStore()
        const loggedUser = store.state.loggedUser

        const  getCourses = async () => {
            const res = await axios.get(`courses/${loggedUser._id}/student_courses`)
            console.log(res.data)
            courses.value = res.data
        }

        onMounted(() => {
            getCourses()
        })

        return {
            courses,
            getCourses,
        }
    },
    
}
</script>
