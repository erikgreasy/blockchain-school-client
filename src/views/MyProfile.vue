<template>
    <div>
        <div class="d-flex justify-content-between">
            <h1 class="d-inline-block">Profil Študenta</h1>
            <div>
                <router-link to="/change-password" class="btn btn-secondary mb-3">Zmeniť heslo</router-link>
            </div>
        </div>

        <CCard>
        <CCardBody>
            <CRow>
            <CCol md="4">
                <img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="">
                <h2>{{ `${user.firstName} ${user.lastName}` }}</h2>
                <p><strong>ID:</strong> {{ user.uniqueId }}</p>
            </CCol>

            <CCol md="8">
                <CCardTitle> Osobné údaje </CCardTitle>
                <CCardText> <strong>Meno:</strong> {{ `${user.firstName} ${user.lastName}` }} </CCardText>
                <CCardText> <strong>Email:</strong> {{ user.email }} </CCardText>
                <CCardText>
                <strong>Sukromný email:</strong> {{ user.privateEmail }}
                </CCardText>
                <hr>
                <CCardTitle> Adresa </CCardTitle>
                <CCardText>
                <strong>Krajina:</strong> {{ user.adress.country }}
                </CCardText>
                <CCardText>
                <strong>Mesto:</strong> {{ user.adress.city }}
                </CCardText>
                <CCardText>
                <strong>PSČ:</strong> {{ user.adress.postalCode }}
                </CCardText>
                <CCardText>
                <strong>Ulica a číslo:</strong> {{ `${user.adress.street} ${user.adress.houseNumber}` }}
                </CCardText>
                <hr />
                <CCardTitle> Štúdium </CCardTitle>
                <CCardText>
                <strong>Fakulta:</strong> {{ user.study.faculty }}
                </CCardText>
                <CCardText>
                <strong>Odbor:</strong> {{ user.study.programme }}
                </CCardText>
                <CCardText>
                <strong>Forma:</strong> {{ user.study.form }}
                </CCardText>
                <CCardText>
                <strong>Titul:</strong> {{ user.academicDegree }}
                </CCardText>
            </CCol>
            </CRow>
        </CCardBody>
        </CCard>
    </div>
</template> 

<script>
import avatar1 from '@/assets/images/avatars/1.jpg'

export default {
    name: 'My profile',
    setup() {
        const user = {
            avatar: { src: avatar1, status: 'success' },
            firstName: 'Yiorgos',
            lastName: 'Avraamu',
            email: 'xibrahim@stuba.sk',
            privateEmail: 'ibrahim@gmail.com',
            uniqueId: '123456',
            academicDegree: 'Bc.',
            study: {
            faculty: 'FEI',
            programme: 'Aplikovaná informatika',
            form: 'Denná',
            },
            adress: {
            street: 'Moskovska',
            houseNumber: '23',
            city: 'Zilina',
            postalCode: '50648',
            country: 'Slovensko',
            },
        }

        return {
            user,
        }
    },
    
}
</script>
