// @flow
import { Auth } from 'aws-amplify'
import { toastr } from 'react-redux-toastr'
import { AUTH_STATE } from '../data/auth'

type Action = {
    type: string,
    profile: any,
    error: any,
}

type State = {
    profile: any,
    confirmingSignup: boolean,
}

const Types = {
    USER_LOADING: 'USER_LOADING',
    USER_SIGNUP_COMPLETE: 'USER_SIGNUP_COMPLETE',
    USER_SIGNUP_FAILED: 'USER_SIGNUP_FAILED',
    USER_LOGIN_COMPLETE: 'USER_LOGIN_COMPLETE',
    USER_LOGIN_FAILED: 'USER_LOGIN_FAILED',
    USER_CONFIRM_SIGNUP_COMPLETE: 'USER_CONFIRM_SIGNUP_COMPLETE',
    USER_CONFIRM_SIGNUP_FAILED: 'USER_CONFIRM_SIGNUP_FAILED',
    USER_LOGOUT: 'USER_LOGOUT',
    USER_GET_PROFILE_COMPLETE: 'USER_GET_PROFILE_COMPLETE',
    USER_GET_PROFILE_FAILED: 'USER_GET_PROFILE_FAILED',
    USER_RESEND_CONFIRM_CODE_COMPLETE: 'USER_RESEND_CONFIRM_CODE_COMPLETE',
    USER_RESEND_CONFIRM_CODE_FAILED: 'USER_RESEND_CONFIRM_CODE_FAILED',
    USER_FORGOT_PASSWORD_COMPLETE: 'USER_FORGOT_PASSWORD_COMPLETE',
    USER_FORGOT_PASSWORD_FAILED: 'USER_FORGOT_PASSWORD_FAILED',
    USER_FORGOT_PASSWORD_RESET_COMPLETED:
        'USER_FORGOT_PASSWORD_RESET_COMPLETED',
    USER_FORGOT_PASSWORD_RESET_FAILED: 'USER_FORGOT_PASSWORD_RESET_FAILED',
}

const userLoadingStart = () => {
    return {
        type: Types.USER_LOADING,
    }
}

const signUpComplete = (profile: any) => {
    return {
        type: Types.USER_SIGNUP_COMPLETE,
        profile,
        confirmingSignup: true,
    }
}

const signUpFailed = (error: any) => {
    return {
        type: Types.USER_SIGNUP_FAILED,
        error,
    }
}

export const signUp = (
    { confirmPassword, ...profile }: any,
    onStateChange: (string, any) => void,
) => async (dispatch: any) => {
    try {
        const { email, password, zip, firstName, lastName } = profile
        dispatch(userLoadingStart())
        const data = await Auth.signUp({
            username: email,
            password,
            attributes: {
                email,
                address: zip,
                given_name: firstName,
                family_name: lastName,
            },
        })
        toastr.success('Success')
        onStateChange(AUTH_STATE.CONFIRM_SIGN_UP, data)
        dispatch(signUpComplete(data))
    } catch (error) {
        dispatch(signUpFailed(error))
        toastr.error('Sign up failed', error.message)
    }
}

const confirmSignupComplete = () => {
    return {
        type: Types.USER_CONFIRM_SIGNUP_COMPLETE,
    }
}

const confirmSignupFailed = error => {
    return {
        type: Types.USER_CONFIRM_SIGNUP_FAILED,
        error,
    }
}

export const confirmSignup = (username: string, code: string) => async (
    dispatch: any,
) => {
    try {
        dispatch(userLoadingStart())
        const data = await Auth.confirmSignUp(username, code)
        console.log({ data })
        toastr.success('Success')
        dispatch(confirmSignupComplete())
    } catch (error) {
        dispatch(confirmSignupFailed(error))
        toastr.error('Confirm sign up failed', error.message)
    }
}

export const resendConfirmSignup = () => {}

const loginComplete = (profile: any) => {
    return {
        type: Types.USER_LOGIN_COMPLETE,
        profile,
    }
}

const loginFailed = error => {
    return {
        type: Types.USER_LOGIN_FAILED,
        error,
    }
}

const logoutComplete = () => {
    return {
        type: Types.USER_LOGOUT,
    }
}

export const logout = (onStateChange: (string, any) => void) => async (
    dispatch: any,
) => {
    try {
        dispatch(userLoadingStart())
        await Auth.signOut()
        onStateChange && onStateChange(AUTH_STATE.SIGN_IN, null)
        dispatch(logoutComplete())
    } catch (error) {
        console.log({ error })
    }
}

type LoginValues = {
    email: string,
    password: string,
}
export const login = (
    { email: username, password }: LoginValues,
    onStateChange: (string, any) => void,
) => async (dispatch: any) => {
    try {
        dispatch(userLoadingStart())
        await Auth.signIn(username, password)
        const user = await Auth.currentAuthenticatedUser()
        onStateChange(AUTH_STATE.SIGNED_IN, user)
        toastr.success('Success')
        dispatch(loginComplete(user))
    } catch (error) {
        dispatch(loginFailed(error))
        toastr.error('Log in failed', error.message)
    }
}

const getProfileComplete = profile => {
    return {
        type: Types.USER_GET_PROFILE_COMPLETE,
        profile,
    }
}

const getProfileFailed = error => {
    return {
        type: Types.USER_GET_PROFILE_FAILED,
        error,
    }
}

export const getProfile = () => async (dispatch: any) => {
    try {
        dispatch(userLoadingStart())
        const profile = await Auth.currentAuthenticatedUser()
        dispatch(getProfileComplete(profile))
    } catch (error) {
        dispatch(getProfileFailed(error))
    }
}

const resendCodeComplete = () => {
    return {
        type: Types.USER_RESEND_CONFIRM_CODE_COMPLETE,
    }
}

const resendCodeFailed = error => {
    return {
        type: Types.USER_RESEND_CONFIRM_CODE_FAILED,
        error,
    }
}

export const resendCode = (email: string, resetForm: () => void) => async (
    dispatch: any,
) => {
    try {
        dispatch(userLoadingStart())
        await Auth.resendSignUp(email)
        resetForm()
        dispatch(resendCodeComplete())
    } catch (error) {
        dispatch(resendCodeFailed(error))
        toastr.error('ERROR', error.message)
    }
}

const forgotPasswordComplete = () => {
    return {
        type: Types.USER_FORGOT_PASSWORD_COMPLETE,
    }
}

const forgotPasswordFailed = error => {
    return {
        type: Types.USER_FORGOT_PASSWORD_FAILED,
        error,
    }
}

export const forgotPassword = (
    email: string,
    onStateChange: string => void,
) => async (dispatch: any) => {
    try {
        dispatch(userLoadingStart())
        await Auth.forgotPassword(email)
        toastr.success('Success')
        onStateChange(AUTH_STATE.FORGOT_PASSWORD_RESET)
        dispatch(forgotPasswordComplete())
    } catch (error) {
        dispatch(forgotPasswordFailed(error))
        toastr.error('ERROR', error.message)
    }
}

const forgotPasswordResetComplete = () => {
    return {
        type: Types.USER_FORGOT_PASSWORD_RESET_COMPLETED,
    }
}

const forgotPasswordResetFailed = error => {
    return {
        type: Types.USER_FORGOT_PASSWORD_RESET_FAILED,
        error,
    }
}

export type ForgotPasswordOptions = {
    email: string,
    password: string,
    confirmCode: string,
}
export const forgotPasswordReset = (
    { email, password, confirmCode }: ForgotPasswordOptions,
    onStateChange: string => void,
) => async (dispatch: any) => {
    try {
        dispatch(userLoadingStart())
        await Auth.forgotPasswordSubmit(email, confirmCode, password)
        onStateChange(AUTH_STATE.SIGN_IN)
        dispatch(forgotPasswordResetComplete())
    } catch (error) {
        dispatch(forgotPasswordResetFailed(error))
        toastr.error('Error', error.message)
    }
}

const initialState = {
    profile: null,
    confirmingSignup: false,
    confirmingLogin: false,
    loading: false,
}

const merge = (obj1: {}, obj2: {}) => {
    return { ...obj1, ...obj2 }
}

const userReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case Types.USER_LOADING: {
            return merge(state, { loading: true })
        }

        case Types.USER_SIGNUP_COMPLETE: {
            const { profile } = action
            return merge(state, {
                profile,
                loading: false,
                confirmingSignup: true,
            })
        }

        case Types.USER_SIGNUP_FAILED: {
            return merge(state, { loading: false })
        }

        case Types.USER_CONFIRM_SIGNUP_COMPLETE: {
            return merge(state, { loading: false })
        }

        case Types.USER_CONFIRM_SIGNUP_FAILED: {
            return merge(state, { loading: false })
        }

        case Types.USER_LOGIN_COMPLETE: {
            const { profile } = action
            return merge(state, {
                profile,
                loading: false,
                confirmingLogin: true,
            })
        }

        case Types.USER_LOGIN_FAILED: {
            return merge(state, { loading: false, error: action.error })
        }

        case Types.USER_LOGOUT: {
            return merge(state, {
                loading: false,
                confirmingLogin: false,
                profile: initialState.profile,
            })
        }

        case Types.USER_GET_PROFILE_COMPLETE: {
            return merge(state, { profile: action.profile, loading: false })
        }

        case Types.USER_GET_PROFILE_FAILED: {
            return merge(state, { loading: false })
        }

        case Types.USER_FORGOT_PASSWORD_COMPLETE: {
            return merge(state, { loading: false })
        }

        case Types.USER_FORGOT_PASSWORD_FAILED: {
            return merge(state, { loading: false })
        }

        default:
            return state
    }
}

export default userReducer
