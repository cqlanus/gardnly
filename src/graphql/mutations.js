// @flow
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createGarden = `mutation CreateGarden($input: CreateGardenInput!) {
  createGarden(input: $input) {
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
export const updateGarden = `mutation UpdateGarden($input: UpdateGardenInput!) {
  updateGarden(input: $input) {
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
export const deleteGarden = `mutation DeleteGarden($input: DeleteGardenInput!) {
  deleteGarden(input: $input) {
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
export const createBed = `mutation CreateBed($input: CreateBedInput!) {
  createBed(input: $input) {
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
export const updateBed = `mutation UpdateBed($input: UpdateBedInput!) {
  updateBed(input: $input) {
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
export const deleteBed = `mutation DeleteBed($input: DeleteBedInput!) {
  deleteBed(input: $input) {
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
export const createPlanting = `mutation CreatePlanting($input: CreatePlantingInput!) {
  createPlanting(input: $input) {
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
export const updatePlanting = `mutation UpdatePlanting($input: UpdatePlantingInput!) {
  updatePlanting(input: $input) {
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
export const deletePlanting = `mutation DeletePlanting($input: DeletePlantingInput!) {
  deletePlanting(input: $input) {
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
export const createCrop = `mutation CreateCrop($input: CreateCropInput!) {
  createCrop(input: $input) {
    id
    name
    numPerSqFt
    cropImg
  }
}
`;
export const updateCrop = `mutation UpdateCrop($input: UpdateCropInput!) {
  updateCrop(input: $input) {
    id
    name
    numPerSqFt
    cropImg
  }
}
`;
export const deleteCrop = `mutation DeleteCrop($input: DeleteCropInput!) {
  deleteCrop(input: $input) {
    id
    name
    numPerSqFt
    cropImg
  }
}
`;
