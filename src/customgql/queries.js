export const listGardensCustom = `query ListGardens(
    $filter: ModelGardenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGardens(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        zip
        length
        width
        beds {
          items {
            id
            name
            length
            width
            exposure
          }
          nextToken
        }
      }
      nextToken
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
        plantings {
          items {
            row
            column
            crop {
              name
            }
          }
        }
      }
      nextToken
    }
  }
}
`
