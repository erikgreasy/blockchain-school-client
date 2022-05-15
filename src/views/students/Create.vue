<template>
    <div>
        <CCard class="mb-4">
            <CCardBody>
                <CForm @submit.prevent="submitForm">
                    <h2 class="mb-3 text-center">Osobné údaje</h2>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="first_name">Meno</CFormLabel>
                                <CFormInput type="text" v-model="student.first_name" id="first_name" />
                            </div>
                        </CCol>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="last_name">Priezvisko</CFormLabel>
                                <CFormInput type="text" v-model="student.last_name" id="last_name" />
                            </div>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="email">Email</CFormLabel>
                                <CFormInput type="email" v-model="student.email" id="email" />
                            </div>
                        </CCol>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="private_email">Súkromný email</CFormLabel>
                                <CFormInput type="text" v-model="student.private_email" id="private_email" />
                            </div>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="academic_degree">Titul</CFormLabel>
                                <CFormInput type="text" v-model="student.academic_degree" id="academic_degree" />
                            </div>
                        </CCol>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="password">Heslo</CFormLabel>
                                <CFormInput type="text" v-model="student.password" id="password" />
                            </div>
                        </CCol>
                    </CRow>

                    <hr class="my-5">

                    <h2 class="text-center my-3">Adresa</h2>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="street">Ulica</CFormLabel>
                                <CFormInput type="text" v-model="student.address.street" id="street" />
                            </div>
                        </CCol>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="houseNumber">Číslo domu</CFormLabel>
                                <CFormInput type="text" v-model="student.address.houseNumber" id="houseNumber" />
                            </div>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="city">Mesto</CFormLabel>
                                <CFormInput type="text" v-model="student.address.city" id="city" />
                            </div>
                        </CCol>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="postal_code">PSČ</CFormLabel>
                                <CFormInput type="text" v-model="student.address.postal_code" id="postal_code" />
                            </div>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="country">Štát</CFormLabel>
                                <CFormInput type="text" v-model="student.address.country" id="country" />
                            </div>
                        </CCol>
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

export default {
    name: 'Students.create',
    setup() {
        const student = ref({
            first_name: '',
            last_name: '',
            email: '',
            private_email: '',
            academic_degree: '',
            password: '',
            address: {
                street: '',
                house_number: '',
                postal_code: '',
                city: '',
                country: '',
            },
            user_type: 'student',
        })

        const submitForm = async () => {
            console.log(student.value)
            // alert('submit')
            const res = await axios.post('students', student.value)
            console.log(res)
        }

        return {
            student,
            submitForm
        }
    }
}
</script>
