<template>
    <div>
        <div>
            <CFormSelect size="sm" class="mb-3" aria-label="Small select example" @change="getCourses">
                <option>Vyberte semester:</option>
                <option value="1">1. BC - Zimný semester</option>
                <option value="2">1. BC - Letný semester</option>
                <option value="3">2. BC - Zimný semester</option>
            </CFormSelect>
            <h1 class="text-center">1. ING</h1>
        </div>
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
                    <!-- <CTableDataCell class="text-center">
                        <CAvatar size="md" :src="item.avatar.src" :status="item.avatar.status" />
                    </CTableDataCell>
                    <CTableDataCell>
                        <div>{{ item.user.name }}</div>
                    </CTableDataCell>
                    <CTableDataCell class="text-center">
                        {{ item.faculty }}
                    </CTableDataCell>
                    <CTableDataCell>
                        Aplikovaná informatika (API)
                    </CTableDataCell> -->
                    
                </CTableRow>
                <CTableRow></CTableRow>
            </CTableBody>
        </CTable>
    </div>
</template>

<script>
import {ref, onMounted} from 'vue'

export default {
    name: 'E-Index',
    setup() {
        var courses = ref()

        const courses1 = [
            {
                id: 25,
                name: 'Paralelné programovanie',
                grade: false,
            },
            {
                id: 28,
                name: 'Matematika 2',
                grade: 'A',
            },
        ]



        const  getCourses = function() {
            courses.value = courses1
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
