// @flow

type Action = {
    type: string,
    profile: any,
    error: any,
}

type State = {
    profile: any,
}

const Types = {
    USER_LOADING: 'USER_LOADING',
    USER_SIGNUP_COMPLETE: 'USER_SIGNUP_COMPLETE',
    USER_SIGNUP_FAILED: 'USER_SIGNUP_FAILED',
    USER_LOGIN_COMPLETE: 'USER_LOGIN_COMPLETE',
    USER_LOGIN_FAILED: 'USER_LOGIN_FAILED',
    USER_CONFIRM_SIGNUP_COMPLETE: 'USER_CONFIRM_SIGNUP_COMPLETE',
    USER_CONFIRM_SIGNUP_FAILED: 'USER_CONFIRM_SIGNUP_FAILED',
}

const signUpComplete = (profile: any) => {
    return {
        type: Types.USER_SIGNUP_COMPLETE,
        profile,
    }
}

const signUpFailed = (error: any) => {
    return {
        type: Types.USER_SIGNUP_FAILED,
        error,
    }
}

export const signUp = ({ confirmPassword, ...profile }: any) => (
    dispatch: any,
) => {
    try {
        dispatch(signUpComplete(profile))
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

export const confirmSignup = (confirmCode: string) => (dispatch: any) => {
    try {
        dispatch(confirmSignupComplete())
    } catch (error) {
        dispatch(confirmSignupFailed(error))
    }
}

export const resendConfirmSignup = () => {}

const loginComplete = () => {
    return {
        type: Types.USER_LOGIN_COMPLETE,
    }
}

const loginFailed = error => {
    return {
        type: Types.USER_LOGIN_FAILED,
        error,
    }
}

type LoginValues = {
    email: string,
    password: string,
}
export const login = ({ email, password }: LoginValues) => (dispatch: any) => {
    try {
        dispatch(loginComplete())
    } catch (error) {
        dispatch(loginFailed(error))
    }
}

const initialState = {
    profile: {},
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
            return merge(state, { profile, loading: false })
        }

        default:
            return state
    }
}

export default userReducer
