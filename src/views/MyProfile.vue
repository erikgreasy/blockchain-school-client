<template>
    <div>
        <div class="d-flex justify-content-between">
            <h1 class="d-inline-block">Môj profil</h1>
            <div>
                <router-link to="/change-password" class="btn btn-secondary mb-3">Zmeniť heslo</router-link>
            </div>
        </div>

        <CCard>
            <CCardBody>
                <CRow>
                    <CCol md="4">
                        <img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="">
                        <h2>{{ `${user.academic_degree} ${user.first_name} ${user.last_name}` }}</h2>
                    </CCol>

                    <CCol md="8">
                        <CCardTitle> Osobné údaje </CCardTitle>
                        <CCardText> <strong>Meno:</strong> {{ `${user.first_name} ${user.last_name}` }} </CCardText>
                        <CCardText> <strong>Email:</strong> {{ user.email }} </CCardText>
                        <CCardText>
                            <strong>Sukromný email:</strong> {{ user.private_email }}
                        </CCardText>
                        <hr>
                        <div v-if="user.address">
                            <CCardTitle> Adresa </CCardTitle>
                            <CCardText>
                                <strong>Krajina:</strong> {{ user.address.county }}
                            </CCardText>
                            <CCardText>
                                <strong>Mesto:</strong> {{ user.address.city }}
                            </CCardText>
                            <CCardText>
                                <strong>PSČ:</strong> {{ user.address.postal_code }}
                            </CCardText>
                            <CCardText>
                                <strong>Ulica a číslo:</strong> {{ `${user.address.street} ${user.address.house_number}` }}
                            </CCardText>
                            <hr />
                            <CCardTitle> Štúdium </CCardTitle>
                            <CCardText>
                                <strong>Titul:</strong> {{ user.academic_degree }}
                            </CCardText>
                        </div>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    </div>
</template> 

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
    name: 'My profile',
    setup() {
        var user = ref({})

        const store = useStore()
        const loggedUser = store.state.loggedUser

        user = loggedUser

        return {
            user,
        }
    },

}
</script>
