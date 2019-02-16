// @flow
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { createUser } from '../graphql/mutations'
import { now } from '../utils/common'
import { getUserEmail } from '../utils/auth'
import { listUsers } from '../graphql/queries'

class AuthService {
    signIn = async (username: string, password: string) => {
        await Auth.signIn(username, password)
    }

    get = async () => {
        const email = await getUserEmail()
        const filter = { email: { eq: email } }

        const { data } = await API.graphql(
            graphqlOperation(listUsers, { filter }),
        )
        const [user] = data.listUsers.items
        return user
    }

    signup = async ({ firstName, lastName, email, password, zip }: any) => {
        await Auth.signUp({
            username: email,
            password,
            attributes: {
                email,
                address: zip,
                given_name: firstName,
                family_name: lastName,
            },
        })

        const input = {
            firstName,
            lastName,
            email,
            created: now(),
        }
        const { data: userData } = await API.graphql(
            graphqlOperation(createUser, { input }),
        )
        return userData.createUser
    }

    confirmSignup = async (username: string, code: string) => {
        await Auth.confirmSignUp(username, code)
    }

    signOut = async () => await Auth.signOut()

    resendCode = async (email: string) => await Auth.resendSignUp(email)

    forgotPassword = async (email: string) => await Auth.forgotPassword(email)

    forgotPasswordReset = async (
        email: string,
        confirmCode: string,
        password: string,
    ) => await Auth.forgotPasswordSubmit(email, confirmCode, password)
}

export default AuthService
