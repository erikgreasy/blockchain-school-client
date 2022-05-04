<template>
    <div>
        <CCard class="mb-4">
            <CCardBody>
                <CForm @submit.prevent="submitForm">
                    <h2 class="mb-3 text-center">Študíjne informácie</h2>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="faculty">Fakulta</CFormLabel>
                                <CFormSelect
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
                                <CFormLabel for="study_type">Stupeň štúdia</CFormLabel>
                                <CFormSelect
                                aria-label="Default select example"
                                :options="[
                                    'Vyberte stupeň štúdia',
                                    { label: 'Bc', value: 'fei' },
                                    { label: 'Ing', value: 'fiit' },
                                    { label: 'PhD', value: '3' }
                                ]">
                                </CFormSelect>
                            </div>
                        </CCol>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="programme">Odbor</CFormLabel>
                                <CFormSelect
                                aria-label="Default select example"
                                :options="[
                                    'Vyberte odbor',
                                    { label: 'Aplikovaná informatika', value: 'api' },
                                    { label: 'Mechatronika', value: 'mech' },
                                ]">
                                </CFormSelect>
                            </div>
                        </CCol>
                    </CRow>
                    <CRow>
                        <div class="mb-3">
                            <CFormLabel for="avatar">Avatar</CFormLabel>
                            <CFormInput type="file" v-model="student.avatar" id="avatar" />
                        </div>
                    </CRow>

                    <hr class="my-5">

                    <h2 class="mb-3 text-center">Osobné údaje</h2>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="name">Meno</CFormLabel>
                                <CFormInput type="text" v-model="student.name" id="name" />
                            </div>
                        </CCol>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="surname">Priezvisko</CFormLabel>
                                <CFormInput type="text" v-model="student.surname" id="surname" />
                            </div>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="name">Email</CFormLabel>
                                <CFormInput type="email" v-model="student.email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </CCol>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="privateEmail">Súkromný email</CFormLabel>
                                <CFormInput type="text" v-model="student.privateEmail" id="privateEmail" />
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
                                <CFormLabel for="postcode">PSČ</CFormLabel>
                                <CFormInput type="text" v-model="student.address.postcode" id="postcode" />
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

export default {
    name: 'Students.create',
    setup() {
        const student = ref({
            name: '',
            surname: '',
            email: '',
            privateEmail: '',
            address: {
                street: '',
                houseNumber: '',
            }
        })

        const submitForm = function() {
            console.log(student)
            alert('submit')
        }

        return {
            student,
            submitForm
        }
    }
}
</script>
