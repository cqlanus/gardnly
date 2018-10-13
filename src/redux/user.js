// @flow
import { Auth } from 'aws-amplify'

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
        onStateChange('confirmSignUp', data)
        dispatch(signUpComplete(data))
    } catch (error) {
        dispatch(signUpFailed(error))
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
        dispatch(confirmSignupComplete())
    } catch (error) {
        dispatch(confirmSignupFailed(error))
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
        const data = await Auth.signOut()
        console.log({ data })
        onStateChange && onStateChange('signIn', null)
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
        onStateChange('signedIn', user)
        dispatch(loginComplete(user))
    } catch (error) {
        dispatch(loginFailed(error))
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
            return merge(state, { loading: false })
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

        default:
            return state
    }
}

export default userReducer
