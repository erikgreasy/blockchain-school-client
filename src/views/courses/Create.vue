<template>
    <div>
        <CCard class="mb-4">
            <CCardBody>
                <CForm @submit.prevent="submitForm">
                    <h2 class="mb-3 text-center">Vytvorenie predmetu</h2>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="name">Názov predmetu</CFormLabel>
                                <CFormInput type="text" v-model="course.name" id="name" />
                            </div>
                        </CCol>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="acronym">Kód predmetu</CFormLabel>
                                <CFormInput type="text" v-model="course.acronym" id="acronym" />
                            </div>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="faculty">Fakulta</CFormLabel>
                                <CFormSelect id="faculty"
                                aria-label="Default select example"
                                :options="[
                                    'Vyberte fakultu',
                                    { label: 'FEI', value: 'fei' },
                                    { label: 'FIIT', value: 'fiit' },
                                    { label: 'SJF', value: '3', disabled: true }
                                ]">
                                </CFormSelect>
                            </div>
                        </CCol>

                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="garant">Garant predmetu</CFormLabel>
                                <CFormSelect id="garant"
                                aria-label="Default select example"
                                :options="[
                                    'Vyberte garanta',
                                    { label: 'Gabriel Juhas', value: 'gabriel_juhas' },
                                    { label: 'Pavol Zajac', value: 'pavol_zajac' },
                                    { label: 'Martin Nehez', value: 'martin_nehez' }
                                ]">
                                </CFormSelect>
                            </div>
                        </CCol>
                    </CRow>
     
                    <CRow>
                        <div class="mb-3">
                            <CFormLabel for="description">Popis</CFormLabel>
                            <CFormInput type="text" v-model="course.description" id="description" />
                        </div>
                    </CRow>
                    <CRow>
                        <div class="mb-3">
                            <CFormLabel for="passConditions">Podmienky absolvovania</CFormLabel>
                            <CFormInput type="text" v-model="course.passConditions" id="passConditions" />
                        </div>
                    </CRow>

                    <div class="d-grid">
                        <CButton type="submit" color="primary">Uložiť</CButton>
                    </div>
                </CForm>
            </CCardBody>
        </CCard>
    </div>
</template>

<script>
import {ref} from 'vue'
import axios from 'axios'
import router from '@/router'

export default {
    name: 'Courses.create',
    setup() {
        const course = ref({
            name: '',
            acronym: '',
            semester: '',
            garant: '',
            description: '',
            passConditions: '',
        })

        const submitForm = async function() {
            const res = await axios.post('courses', course)
            console.log(res)

            if( res.status === 200 ) {
                router.push('/courses')
            }
        }

        return {
            course,
            submitForm
        }
    }
}
</script>
