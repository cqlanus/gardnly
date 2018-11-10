export const getGarden = `query GetGarden($id: ID!) {
  getGarden(id: $id) {
    id
    created
    name
    location
    zip
    length
    width
    user {
      id
      firstName
      lastName
      email
      created
    }
    beds {
      items {
        id
        created
        name
        length
        width
        x
        y
        exposure
        plantings {
          items {
            crop {
              id
              commonName
              image
            }
          }
        }
      }
      nextToken
    }
  }
}
`
export const listUsersCustom = `query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
            beds {
                items {
                    name
                    length
                    width
                }
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
  `

export const getGardenBeds = `query GetGarden($id: ID!) {
  getGarden(id: $id) {
    beds {
      items {
        id
        created
        name
        length
        width
        exposure,
        plantings(limit: 100) {
          items {
            id
            row
            column
            crop {
              id
              commonName
              image
              numPerSqFt
            }
          }
        }
      }
      nextToken
    }
  }
}
`
