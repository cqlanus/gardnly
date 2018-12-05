// @flow
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
    nextToken
  }
}
`;
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
        invert
        exposure
        hasDropped
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
          invert
          exposure
          hasDropped
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
    created
    name
    length
    width
    x
    y
    invert
    exposure
    hasDropped
    plantings {
      items {
        id
        created
        row
        column
        plantedOn
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
export const listBeds = `query ListBeds($filter: ModelBedFilterInput, $limit: Int, $nextToken: String) {
  listBeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      created
      name
      length
      width
      x
      y
      invert
      exposure
      hasDropped
      plantings {
        items {
          id
          created
          row
          column
          plantedOn
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
    nextToken
  }
}
`;
export const getPlanting = `query GetPlanting($id: ID!) {
  getPlanting(id: $id) {
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
      invert
      exposure
      hasDropped
    }
    row
    column
    plantedOn
    planted
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
        invert
        exposure
        hasDropped
      }
      row
      column
      plantedOn
      planted
    }
    nextToken
  }
}
`;
export const getCrop = `query GetCrop($id: ID!) {
  getCrop(id: $id) {
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
export const listCrops = `query ListCrops(
  $filter: ModelCropFilterInput
  $limit: Int
  $nextToken: String
) {
  listCrops(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
          invert
          exposure
          hasDropped
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
