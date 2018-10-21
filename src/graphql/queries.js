// @flow
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
`;
export const listUsers = `query ListUsers(
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
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getGarden = `query GetGarden($id: ID!) {
  getGarden(id: $id) {
    id
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
    }
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
}
`;
export const listGardens = `query ListGardens(
  $filter: ModelGardenFilterInput
  $limit: Int
  $nextToken: String
) {
  listGardens(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
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
      }
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
`;
export const getBed = `query GetBed($id: ID!) {
  getBed(id: $id) {
    id
    name
    length
    width
    exposure
    plantings {
      items {
        id
        row
        column
      }
      nextToken
    }
    garden {
      id
      name
      location
      zip
      length
      width
    }
  }
}
`;
export const listBeds = `query ListBeds($filter: ModelBedFilterInput, $limit: Int, $nextToken: String) {
  listBeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      length
      width
      exposure
      plantings {
        items {
          id
          row
          column
        }
        nextToken
      }
      garden {
        id
        name
        location
        zip
        length
        width
      }
    }
    nextToken
  }
}
`;
export const getPlanting = `query GetPlanting($id: ID!) {
  getPlanting(id: $id) {
    id
    crop {
      id
      name
      numPerSqFt
      cropImg
    }
    bed {
      id
      name
      length
      width
      exposure
    }
    row
    column
  }
}
`;
export const listPlantings = `query ListPlantings(
  $filter: ModelPlantingFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlantings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      crop {
        id
        name
        numPerSqFt
        cropImg
      }
      bed {
        id
        name
        length
        width
        exposure
      }
      row
      column
    }
    nextToken
  }
}
`;
export const getCrop = `query GetCrop($id: ID!) {
  getCrop(id: $id) {
    id
    name
    numPerSqFt
    cropImg
  }
}
`;
export const listCrops = `query ListCrops(
  $filter: ModelCropFilterInput
  $limit: Int
  $nextToken: String
) {
  listCrops(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      numPerSqFt
      cropImg
    }
    nextToken
  }
}
`;
export const searchGardens = `query SearchGardens(
  $filter: SearchableGardenFilterInput
  $sort: SearchableGardenSortInput
  $limit: Int
  $nextToken: Int
) {
  searchGardens(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
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
      }
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
`;
