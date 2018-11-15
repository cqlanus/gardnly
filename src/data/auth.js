// @flow
import type { Garden } from './garden'

export const AUTH_STATE = {
    SIGN_IN: 'signIn',
    SIGN_UP: 'signUp',
    CONFIRM_SIGN_IN: 'confirmSignIn',
    CONFIRM_SIGN_UP: 'confirmSignUp',
    FORGOT_PASSWORD: 'forgotPassword',
    FORGOT_PASSWORD_RESET: 'forgotPasswordReset',
    SIGNED_IN: 'signedIn',
    VERIFY_CONTACT: 'verifyContact',
}

export type User = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    created: string,
    gardens: { items: Array<Garden> },
}
