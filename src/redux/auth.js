// @flow
import { toastr } from 'react-redux-toastr'
import { AUTH_STATE } from '../data/auth'
import { merge } from '../utils/common'
import api from '../api/index'

/* FLOW TYPES */
type Action = {
    type: string,
    profile: any,
    error: any,
}

export type State = {
    profile: any,
    confirmingSignup: boolean,
    loading: boolean,
}

/* ACTION TYPES */
const Types = {
    USER_LOADING: 'USER_LOADING',
    USER_FAILED: 'USER_FAILED',
    USER_SIGNUP_COMPLETE: 'USER_SIGNUP_COMPLETE',
    USER_LOGIN_COMPLETE: 'USER_LOGIN_COMPLETE',
    USER_CONFIRM_SIGNUP_COMPLETE: 'USER_CONFIRM_SIGNUP_COMPLETE',
    USER_LOGOUT: 'USER_LOGOUT',
    USER_GET_PROFILE_COMPLETE: 'USER_GET_PROFILE_COMPLETE',
    USER_RESEND_CONFIRM_CODE_COMPLETE: 'USER_RESEND_CONFIRM_CODE_COMPLETE',
    USER_FORGOT_PASSWORD_COMPLETE: 'USER_FORGOT_PASSWORD_COMPLETE',
    USER_FORGOT_PASSWORD_RESET_COMPLETED:
        'USER_FORGOT_PASSWORD_RESET_COMPLETED',
}

/* ACTIONS & THUNKS */
const userLoadingStart = () => {
    return {
        type: Types.USER_LOADING,
    }
}

const userFailed = error => {
    return {
        type: Types.USER_FAILED,
        error,
    }
}

const signUpComplete = (profile: any) => {
    return {
        type: Types.USER_SIGNUP_COMPLETE,
        profile,
        confirmingSignup: true,
    }
}

export const signUp = (
    { confirmPassword, ...profile }: any,
    onStateChange: (string, any) => void,
) => async (dispatch: any) => {
    try {
        dispatch(userLoadingStart())
        const user = await api.authService.signup(profile)
        toastr.success('Success')
        onStateChange(AUTH_STATE.CONFIRM_SIGN_UP)
        dispatch(signUpComplete(user))
    } catch (error) {
        dispatch(userFailed(error))
        toastr.error('Sign up failed', error.message)
    }
}

const confirmSignupComplete = () => {
    return {
        type: Types.USER_CONFIRM_SIGNUP_COMPLETE,
    }
}

export const confirmSignup = (username: string, code: string) => async (
    dispatch: any,
) => {
    try {
        dispatch(userLoadingStart())
        await api.authService.confirmSignup(username, code)
        toastr.success('Success')
        dispatch(confirmSignupComplete())
    } catch (error) {
        dispatch(userFailed(error))
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
        await api.authService.signOut()
        onStateChange && onStateChange(AUTH_STATE.SIGN_IN, null)
        dispatch(logoutComplete())
    } catch (error) {
        dispatch(userFailed(error))
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
        await api.authService.signIn(username, password)
        const user = await api.authService.get()
        onStateChange(AUTH_STATE.SIGNED_IN)
        toastr.success('Success')
        dispatch(loginComplete(user))
    } catch (error) {
        dispatch(userFailed(error))
        toastr.error('Log in failed', error.message)
    }
}

const getProfileComplete = profile => {
    return {
        type: Types.USER_GET_PROFILE_COMPLETE,
        profile,
    }
}

export const getProfile = () => async (dispatch: any) => {
    try {
        dispatch(userLoadingStart())
        const user = await api.authService.get()
        dispatch(getProfileComplete(user))
    } catch (error) {
        dispatch(userFailed(error))
    }
}

const resendCodeComplete = () => {
    return {
        type: Types.USER_RESEND_CONFIRM_CODE_COMPLETE,
    }
}

export const resendCode = (email: string, resetForm: () => void) => async (
    dispatch: any,
) => {
    try {
        dispatch(userLoadingStart())
        await api.authService.resendCode(email)
        resetForm()
        dispatch(resendCodeComplete())
    } catch (error) {
        dispatch(userFailed(error))
        toastr.error('ERROR', error.message)
    }
}

const forgotPasswordComplete = () => {
    return {
        type: Types.USER_FORGOT_PASSWORD_COMPLETE,
    }
}

export const forgotPassword = (
    email: string,
    onStateChange: string => void,
) => async (dispatch: any) => {
    try {
        dispatch(userLoadingStart())
        await api.authService.forgotPassword(email)
        toastr.success('Success')
        onStateChange(AUTH_STATE.FORGOT_PASSWORD_RESET)
        dispatch(forgotPasswordComplete())
    } catch (error) {
        dispatch(userFailed(error))
        toastr.error('ERROR', error.message)
    }
}

const forgotPasswordResetComplete = () => {
    return {
        type: Types.USER_FORGOT_PASSWORD_RESET_COMPLETED,
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
        await api.authService.forgotPasswordReset(email, confirmCode, password)
        onStateChange(AUTH_STATE.SIGN_IN)
        dispatch(forgotPasswordResetComplete())
    } catch (error) {
        dispatch(userFailed(error))
        toastr.error('Error', error.message)
    }
}

/* INITIAL STATE */
const initialState = {
    profile: null,
    confirmingSignup: false,
    confirmingLogin: false,
    loading: false,
}

/* REDUCER */
const userReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case Types.USER_LOADING: {
            return merge(state, { loading: true })
        }

        case Types.USER_FAILED: {
            return merge(state, { loading: false })
        }

        case Types.USER_SIGNUP_COMPLETE: {
            const { profile } = action
            return merge(state, {
                profile,
                loading: false,
                confirmingSignup: true,
            })
        }

        case Types.USER_CONFIRM_SIGNUP_COMPLETE: {
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

        case Types.USER_FORGOT_PASSWORD_COMPLETE: {
            return merge(state, { loading: false })
        }

        default:
            return state
    }
}

export default userReducer
