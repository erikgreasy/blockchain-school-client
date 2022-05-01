<template>
    <div>
        <CForm @submit="changePassword">
            <div class="mb-2">
                <CFormLabel for="current_password">Heslo:</CFormLabel>
                <CFormInput
                    type="password"
                    id="current_password"
                    label="Heslo"
                />
            </div>
            <div class="mb-2">
                <CFormLabel for="new_password">Nové heslo:</CFormLabel>
                <CFormInput
                    type="password"
                    id="new_password"
                />
            </div>
            <div class="mb-2">
                <CFormLabel for="new_password_confirm">Potvrdenie nového heslo:</CFormLabel>
                <CFormInput
                    type="password"
                    id="new_password_confirm"
                />
            </div>
            <CButton type="submit" color="primary" class="mt-3">Zmeniť heslo</CButton>
        </CForm>
    </div>
</template> 

<script>
import router from '@/router'

export default {
    name: 'My profile',
    setup() {
        const changePassword = () => {
            alert('change password')
            return router.push('/my-profile')
        }

        return {
            changePassword,
        }
    },
    
}
</script>
