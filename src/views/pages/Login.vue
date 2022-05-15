<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="5">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm @submit.prevent="login">
                  <h1>Prihlásenie</h1>
                  <p class="text-medium-emphasis">Prihláste sa do svojho účtu</p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput
                      type="email"
                      placeholder="Email"
                      v-model="user.email"
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Heslo"
                      v-model="user.password"
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton type="submit" color="primary" class="px-4"> Login </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import axios from 'axios'

export default {
  setup() {

    const store = useStore()
    const router = useRouter()

    const user = ref({
      email: '',
      password: ''
    })


    const login = async () => {
      const res = await axios.post('login', user.value)
      console.log(res.data.successful == 'True')
      if(res.data.successful == 'True') {

        // console.log(res.data)
        const user_res = await axios.get(`users/${res.data.user._id}`)

        console.log(user_res.data)
        store.commit('logginUser', user_res.data)
        router.push('/')
      } else {
        alert('Prihlasovacie údaje sú nesprávne')
      }
    }

    return {
      login,
      user
    }
  }
}
</script>
