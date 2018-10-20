// @flow
import { Auth } from 'aws-amplify'

export const getUserEmail = async () => {
    const {
        attributes: { email },
    } = await Auth.currentAuthenticatedUser()
    return email
}
