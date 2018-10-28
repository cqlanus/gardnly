// @flow
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    firstName
    lastName
    email
    created
    gardens {
      items {
        id
        created
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
    created
    gardens {
      items {
        id
        created
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
    created
    gardens {
      items {
        id
        created
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
      }
      nextToken
    }
  }
}
`;
export const updateGarden = `mutation UpdateGarden($input: UpdateGardenInput!) {
  updateGarden(input: $input) {
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
      }
      nextToken
    }
  }
}
`;
export const deleteGarden = `mutation DeleteGarden($input: DeleteGardenInput!) {
  deleteGarden(input: $input) {
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
      }
      nextToken
    }
  }
}
`;
export const createBed = `mutation CreateBed($input: CreateBedInput!) {
  createBed(input: $input) {
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
        id
        created
        row
        column
      }
      nextToken
    }
    garden {
      id
      created
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
    created
    name
    length
    width
    x
    y
    exposure
    plantings {
      items {
        id
        created
        row
        column
      }
      nextToken
    }
    garden {
      id
      created
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
    created
    name
    length
    width
    x
    y
    exposure
    plantings {
      items {
        id
        created
        row
        column
      }
      nextToken
    }
    garden {
      id
      created
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
    created
    crop {
      id
      commonName
      latinName
      family
      seedDepth
      minGermTemp
      maxGermTemp
      minGermTime
      maxGermTime
      sowIndoors
      minSoilPh
      maxSoilPh
      minGrowTemp
      maxGrowTemp
      seedSpacing
      thinTo
      rowSpacing
      minFlowerToHarvestTime
      maxFlowerToHarvestTime
      sowIndoorsBeforeLastFrost
      transplantBeforeLastFrost
      sowOutdoorsBeforeLastFrost
      sowOutdoorsBeforeFirstFrost
      minDaysToMaturity
      maxDaysToMaturity
      baseGdd
      gddToMaturity
      numPerSqFt
      image
    }
    bed {
      id
      created
      name
      length
      width
      x
      y
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
    created
    crop {
      id
      commonName
      latinName
      family
      seedDepth
      minGermTemp
      maxGermTemp
      minGermTime
      maxGermTime
      sowIndoors
      minSoilPh
      maxSoilPh
      minGrowTemp
      maxGrowTemp
      seedSpacing
      thinTo
      rowSpacing
      minFlowerToHarvestTime
      maxFlowerToHarvestTime
      sowIndoorsBeforeLastFrost
      transplantBeforeLastFrost
      sowOutdoorsBeforeLastFrost
      sowOutdoorsBeforeFirstFrost
      minDaysToMaturity
      maxDaysToMaturity
      baseGdd
      gddToMaturity
      numPerSqFt
      image
    }
    bed {
      id
      created
      name
      length
      width
      x
      y
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
    created
    crop {
      id
      commonName
      latinName
      family
      seedDepth
      minGermTemp
      maxGermTemp
      minGermTime
      maxGermTime
      sowIndoors
      minSoilPh
      maxSoilPh
      minGrowTemp
      maxGrowTemp
      seedSpacing
      thinTo
      rowSpacing
      minFlowerToHarvestTime
      maxFlowerToHarvestTime
      sowIndoorsBeforeLastFrost
      transplantBeforeLastFrost
      sowOutdoorsBeforeLastFrost
      sowOutdoorsBeforeFirstFrost
      minDaysToMaturity
      maxDaysToMaturity
      baseGdd
      gddToMaturity
      numPerSqFt
      image
    }
    bed {
      id
      created
      name
      length
      width
      x
      y
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
    commonName
    latinName
    family
    seedDepth
    minGermTemp
    maxGermTemp
    minGermTime
    maxGermTime
    sowIndoors
    minSoilPh
    maxSoilPh
    minGrowTemp
    maxGrowTemp
    seedSpacing
    thinTo
    rowSpacing
    waterFreq
    nitrogenReq
    phosphorusReq
    potassiumReq
    sunExposure
    minFlowerToHarvestTime
    maxFlowerToHarvestTime
    sowIndoorsBeforeLastFrost
    transplantBeforeLastFrost
    sowOutdoorsBeforeLastFrost
    sowOutdoorsBeforeFirstFrost
    minDaysToMaturity
    maxDaysToMaturity
    baseGdd
    gddToMaturity
    numPerSqFt
    image
  }
}
`;
export const updateCrop = `mutation UpdateCrop($input: UpdateCropInput!) {
  updateCrop(input: $input) {
    id
    commonName
    latinName
    family
    seedDepth
    minGermTemp
    maxGermTemp
    minGermTime
    maxGermTime
    sowIndoors
    minSoilPh
    maxSoilPh
    minGrowTemp
    maxGrowTemp
    seedSpacing
    thinTo
    rowSpacing
    waterFreq
    nitrogenReq
    phosphorusReq
    potassiumReq
    sunExposure
    minFlowerToHarvestTime
    maxFlowerToHarvestTime
    sowIndoorsBeforeLastFrost
    transplantBeforeLastFrost
    sowOutdoorsBeforeLastFrost
    sowOutdoorsBeforeFirstFrost
    minDaysToMaturity
    maxDaysToMaturity
    baseGdd
    gddToMaturity
    numPerSqFt
    image
  }
}
`;
export const deleteCrop = `mutation DeleteCrop($input: DeleteCropInput!) {
  deleteCrop(input: $input) {
    id
    commonName
    latinName
    family
    seedDepth
    minGermTemp
    maxGermTemp
    minGermTime
    maxGermTime
    sowIndoors
    minSoilPh
    maxSoilPh
    minGrowTemp
    maxGrowTemp
    seedSpacing
    thinTo
    rowSpacing
    waterFreq
    nitrogenReq
    phosphorusReq
    potassiumReq
    sunExposure
    minFlowerToHarvestTime
    maxFlowerToHarvestTime
    sowIndoorsBeforeLastFrost
    transplantBeforeLastFrost
    sowOutdoorsBeforeLastFrost
    sowOutdoorsBeforeFirstFrost
    minDaysToMaturity
    maxDaysToMaturity
    baseGdd
    gddToMaturity
    numPerSqFt
    image
  }
}
`;
