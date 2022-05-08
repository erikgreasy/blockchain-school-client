<template>
    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">
                <CCol :md="8">
                    <h1 class="text-center">Prihláška na štúdium</h1>
                    <CCardGroup>
                        <CCard class="p-4">
                            <CCardBody>
                                <CForm @submit="sendApplication">
                                    <CRow>
                                        <CCol :xs="6">
                                            <CFormInput placeholder="Krstné meno" />
                                        </CCol>
                                        <CCol :xs="6">
                                            <CFormInput placeholder="Priezvisko" />
                                        </CCol>
                                    </CRow>
                                    <div class="text-center mt-3">
                                        <CButton type="submit" color="primary" class="px-4"> Odoslať </CButton>
                                    </div>
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
export default {
    name: 'Login',
    methods: {
        sendApplication() {
            alert('application')
        }
    }
}
</script>
