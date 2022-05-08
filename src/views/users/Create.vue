<template>
    <div>
        <CCard class="mb-4">
            <CCardBody>
                <CForm @submit.prevent="submitForm">
                    <h2 class="mb-3 text-center">Osobné údaje</h2>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="name">Meno</CFormLabel>
                                <CFormInput type="text" v-model="user.first_name" id="name" />
                            </div>
                        </CCol>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="surname">Priezvisko</CFormLabel>
                                <CFormInput type="text" v-model="user.last_name" id="surname" />
                            </div>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="name">Email</CFormLabel>
                                <CFormInput type="email" v-model="user.email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </CCol>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="privateEmail">Súkromný email</CFormLabel>
                                <CFormInput type="text" v-model="user.private_email" id="privateEmail" />
                            </div>
                            <div class="mb-3">
                                <CFormLabel for="privateEmail">Titul</CFormLabel>
                                <CFormInput type="text" v-model="user.academic_degree" id="privateEmail" />
                            </div>
                        </CCol>
                    </CRow>

                    <hr class="my-5">

                    <h2 class="text-center my-3">Adresa</h2>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="street">Ulica</CFormLabel>
                                <CFormInput type="text" v-model="user.address.street" id="street" />
                            </div>
                        </CCol>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="houseNumber">Číslo domu</CFormLabel>
                                <CFormInput type="text" v-model="user.address.house_number" id="houseNumber" />
                            </div>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="city">Mesto</CFormLabel>
                                <CFormInput type="text" v-model="user.address.city" id="city" />
                            </div>
                        </CCol>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="postcode">PSČ</CFormLabel>
                                <CFormInput type="text" v-model="user.address.postal_code" id="postcode" />
                            </div>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="country">Štát</CFormLabel>
                                <CFormInput type="text" v-model="user.address.country" id="country" />
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
    name: 'users.create',
    setup() {
        const user = ref({
            first_name: '',
            last_name: '',
            email: '',
            private_email: '',
            academic_degree: '',
            address: {
                street: '',
                house_number: '',
                city: '',
                country: '',
            }
        })

        const submitForm = async () => {
            const res = await axios.post('users', user)
            
            console.log(res)
        }

        return {
            user,
            submitForm
        }
    }
}
</script>
