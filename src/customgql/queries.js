// @flow

export const getUserByEmail = `query GetUserByEmail($email: String!) {
    getUser(email: $email) {
      id
      firstName
      lastName
      email
      gardens {
        items {
          id
          name
          location
          zip
          length
          width
        }
        nextToken
      }
    }
  }
  `
