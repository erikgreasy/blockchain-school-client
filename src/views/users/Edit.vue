<template>
    <div>
        <CCard class="mb-4">
            <CCardBody>
                <CForm @submit.prevent="submitForm">
                    <CFormSelect size="sm" class="mb-3" aria-label="Small select example" v-model="user.user_role_id">
                        <option>Vyberte user rolu:</option>
                        <option :value="role._id" v-for="role in roles" :key="role._id">{{ role.name }}</option>
                    </CFormSelect>
                    <h2 class="mb-3 text-center">Osobné údaje</h2>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="first_name">Meno</CFormLabel>
                                <CFormInput type="text" v-model="user.first_name" id="first_name" />
                            </div>
                        </CCol>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="last_name">Priezvisko</CFormLabel>
                                <CFormInput type="text" v-model="user.last_name" id="last_name" />
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
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="privateEmail">Titul</CFormLabel>
                                <CFormInput type="text" v-model="user.academic_degree" id="privateEmail" />
                            </div>
                        </CCol>
                        <CCol xs>
                            <div class="mb-3">
                                <CFormLabel for="password">Heslo</CFormLabel>
                                <CFormInput type="text" v-model="user.password" id="password" />
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
import {onMounted, ref} from 'vue'
import axios from 'axios'
import router from '@/router'
import { useRoute } from 'vue-router'

export default {
    name: 'users.create',
    setup() {
        const user = ref({})

        const roles = ref([])

        const route = useRoute()


        const submitForm = async () => {
            const res = await axios.put(`users/${route.params.id}`, user.value)
            console.log(res)
            router.push('/users')
        }

        const getUser = async () => {
            const res = await axios.get(`users/${route.params.id}`)
            console.log(res)
            user.value = res.data
            user.value.password = ''
        }

        const getRoles = async () => {
            const res = await axios.get('roles')
            console.log(res)
            roles.value = res.data
        }


        onMounted(() => {
            getRoles()
            getUser()
        })

        return {
            user,
            submitForm,
            roles,
        }
    }
}
</script>
