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
