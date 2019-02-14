// @flow
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateGarden = `subscription OnCreateGarden {
  onCreateGarden {
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
    updates {
      items {
        id
        created
      }
      nextToken
    }
  }
}
`;
export const onUpdateGarden = `subscription OnUpdateGarden {
  onUpdateGarden {
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
    updates {
      items {
        id
        created
      }
      nextToken
    }
  }
}
`;
export const onDeleteGarden = `subscription OnDeleteGarden {
  onDeleteGarden {
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
    updates {
      items {
        id
        created
      }
      nextToken
    }
  }
}
`;
export const onCreateBed = `subscription OnCreateBed {
  onCreateBed {
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
    updates {
      items {
        id
        created
      }
      nextToken
    }
  }
}
`;
export const onUpdateBed = `subscription OnUpdateBed {
  onUpdateBed {
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
    updates {
      items {
        id
        created
      }
      nextToken
    }
  }
}
`;
export const onDeleteBed = `subscription OnDeleteBed {
  onDeleteBed {
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
    updates {
      items {
        id
        created
      }
      nextToken
    }
  }
}
`;
export const onCreateBedUpdate = `subscription OnCreateBedUpdate {
  onCreateBedUpdate {
    id
    created
    type
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
export const onUpdateBedUpdate = `subscription OnUpdateBedUpdate {
  onUpdateBedUpdate {
    id
    created
    type
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
export const onDeleteBedUpdate = `subscription OnDeleteBedUpdate {
  onDeleteBedUpdate {
    id
    created
    type
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
export const onCreatePlanting = `subscription OnCreatePlanting {
  onCreatePlanting {
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
export const onUpdatePlanting = `subscription OnUpdatePlanting {
  onUpdatePlanting {
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
export const onDeletePlanting = `subscription OnDeletePlanting {
  onDeletePlanting {
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
export const onCreateCrop = `subscription OnCreateCrop {
  onCreateCrop {
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
export const onUpdateCrop = `subscription OnUpdateCrop {
  onUpdateCrop {
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
export const onDeleteCrop = `subscription OnDeleteCrop {
  onDeleteCrop {
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
