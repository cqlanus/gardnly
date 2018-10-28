/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {|
  firstName: string,
  lastName: string,
  email: string,
  created: string,
|};

export type UpdateUserInput = {|
  id: string,
  firstName?: ?string,
  lastName?: ?string,
  email?: ?string,
  created?: ?string,
|};

export type DeleteUserInput = {|
  id?: ?string,
|};

export type CreateGardenInput = {|
  created: string,
  name: string,
  location?: ?string,
  zip: string,
  length: number,
  width: number,
  gardenUserId?: ?string,
|};

export type UpdateGardenInput = {|
  id: string,
  created?: ?string,
  name?: ?string,
  location?: ?string,
  zip?: ?string,
  length?: ?number,
  width?: ?number,
  gardenUserId?: ?string,
|};

export type DeleteGardenInput = {|
  id?: ?string,
|};

export type CreateBedInput = {|
  created: string,
  name: string,
  length: number,
  width: number,
  x?: ?number,
  y?: ?number,
  exposure?: ?string,
  bedGardenId?: ?string,
|};

export type UpdateBedInput = {|
  id: string,
  created?: ?string,
  name?: ?string,
  length?: ?number,
  width?: ?number,
  x?: ?number,
  y?: ?number,
  exposure?: ?string,
  bedGardenId?: ?string,
|};

export type DeleteBedInput = {|
  id?: ?string,
|};

export type CreatePlantingInput = {|
  created: string,
  row: number,
  column: number,
  plantingCropId?: ?string,
  plantingBedId?: ?string,
|};

export type UpdatePlantingInput = {|
  id: string,
  created?: ?string,
  row?: ?number,
  column?: ?number,
  plantingCropId?: ?string,
  plantingBedId?: ?string,
|};

export type DeletePlantingInput = {|
  id?: ?string,
|};

export type CreateCropInput = {|
  commonName: string,
  latinName?: ?string,
  family?: ?string,
  seedDepth?: ?number,
  minGermTemp?: ?number,
  maxGermTemp?: ?number,
  minGermTime?: ?number,
  maxGermTime?: ?number,
  sowIndoors?: ?number,
  minSoilPh?: ?number,
  maxSoilPh?: ?number,
  minGrowTemp?: ?number,
  maxGrowTemp?: ?number,
  seedSpacing?: ?number,
  thinTo?: ?number,
  rowSpacing?: ?number,
  waterFreq?: ?Level,
  nitrogenReq?: ?Level,
  phosphorusReq?: ?Level,
  potassiumReq?: ?Level,
  sunExposure?: ?Exposure,
  minFlowerToHarvestTime?: ?number,
  maxFlowerToHarvestTime?: ?number,
  sowIndoorsBeforeLastFrost?: ?number,
  transplantBeforeLastFrost?: ?number,
  sowOutdoorsBeforeLastFrost?: ?number,
  sowOutdoorsBeforeFirstFrost?: ?number,
  minDaysToMaturity?: ?number,
  maxDaysToMaturity?: ?number,
  baseGdd?: ?number,
  gddToMaturity?: ?number,
  numPerSqFt: number,
  image: string,
|};

export type Level =
  "HIGH" |
  "MED" |
  "LOW";


export type Exposure =
  "FULL" |
  "PART" |
  "SHADE";


export type UpdateCropInput = {|
  id: string,
  commonName?: ?string,
  latinName?: ?string,
  family?: ?string,
  seedDepth?: ?number,
  minGermTemp?: ?number,
  maxGermTemp?: ?number,
  minGermTime?: ?number,
  maxGermTime?: ?number,
  sowIndoors?: ?number,
  minSoilPh?: ?number,
  maxSoilPh?: ?number,
  minGrowTemp?: ?number,
  maxGrowTemp?: ?number,
  seedSpacing?: ?number,
  thinTo?: ?number,
  rowSpacing?: ?number,
  waterFreq?: ?Level,
  nitrogenReq?: ?Level,
  phosphorusReq?: ?Level,
  potassiumReq?: ?Level,
  sunExposure?: ?Exposure,
  minFlowerToHarvestTime?: ?number,
  maxFlowerToHarvestTime?: ?number,
  sowIndoorsBeforeLastFrost?: ?number,
  transplantBeforeLastFrost?: ?number,
  sowOutdoorsBeforeLastFrost?: ?number,
  sowOutdoorsBeforeFirstFrost?: ?number,
  minDaysToMaturity?: ?number,
  maxDaysToMaturity?: ?number,
  baseGdd?: ?number,
  gddToMaturity?: ?number,
  numPerSqFt?: ?number,
  image?: ?string,
|};

export type DeleteCropInput = {|
  id?: ?string,
|};

export type ModelUserFilterInput = {|
  id?: ?ModelIDFilterInput,
  firstName?: ?ModelStringFilterInput,
  lastName?: ?ModelStringFilterInput,
  email?: ?ModelStringFilterInput,
  created?: ?ModelStringFilterInput,
  and?: ?Array< ?ModelUserFilterInput >,
  or?: ?Array< ?ModelUserFilterInput >,
  not?: ?ModelUserFilterInput,
|};

export type ModelIDFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type ModelStringFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type ModelGardenFilterInput = {|
  id?: ?ModelIDFilterInput,
  created?: ?ModelStringFilterInput,
  name?: ?ModelStringFilterInput,
  location?: ?ModelStringFilterInput,
  zip?: ?ModelStringFilterInput,
  length?: ?ModelIntFilterInput,
  width?: ?ModelIntFilterInput,
  and?: ?Array< ?ModelGardenFilterInput >,
  or?: ?Array< ?ModelGardenFilterInput >,
  not?: ?ModelGardenFilterInput,
|};

export type ModelIntFilterInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  contains?: ?number,
  notContains?: ?number,
  between?: ?Array< ?number >,
|};

export type ModelBedFilterInput = {|
  id?: ?ModelIDFilterInput,
  created?: ?ModelStringFilterInput,
  name?: ?ModelStringFilterInput,
  length?: ?ModelIntFilterInput,
  width?: ?ModelIntFilterInput,
  x?: ?ModelIntFilterInput,
  y?: ?ModelIntFilterInput,
  exposure?: ?ModelStringFilterInput,
  and?: ?Array< ?ModelBedFilterInput >,
  or?: ?Array< ?ModelBedFilterInput >,
  not?: ?ModelBedFilterInput,
|};

export type ModelPlantingFilterInput = {|
  id?: ?ModelIDFilterInput,
  created?: ?ModelStringFilterInput,
  row?: ?ModelIntFilterInput,
  column?: ?ModelIntFilterInput,
  and?: ?Array< ?ModelPlantingFilterInput >,
  or?: ?Array< ?ModelPlantingFilterInput >,
  not?: ?ModelPlantingFilterInput,
|};

export type ModelCropFilterInput = {|
  id?: ?ModelIDFilterInput,
  commonName?: ?ModelStringFilterInput,
  latinName?: ?ModelStringFilterInput,
  family?: ?ModelStringFilterInput,
  seedDepth?: ?ModelFloatFilterInput,
  minGermTemp?: ?ModelIntFilterInput,
  maxGermTemp?: ?ModelIntFilterInput,
  minGermTime?: ?ModelIntFilterInput,
  maxGermTime?: ?ModelIntFilterInput,
  sowIndoors?: ?ModelIntFilterInput,
  minSoilPh?: ?ModelFloatFilterInput,
  maxSoilPh?: ?ModelFloatFilterInput,
  minGrowTemp?: ?ModelIntFilterInput,
  maxGrowTemp?: ?ModelIntFilterInput,
  seedSpacing?: ?ModelIntFilterInput,
  thinTo?: ?ModelIntFilterInput,
  rowSpacing?: ?ModelIntFilterInput,
  minFlowerToHarvestTime?: ?ModelIntFilterInput,
  maxFlowerToHarvestTime?: ?ModelIntFilterInput,
  sowIndoorsBeforeLastFrost?: ?ModelIntFilterInput,
  transplantBeforeLastFrost?: ?ModelIntFilterInput,
  sowOutdoorsBeforeLastFrost?: ?ModelIntFilterInput,
  sowOutdoorsBeforeFirstFrost?: ?ModelIntFilterInput,
  minDaysToMaturity?: ?ModelIntFilterInput,
  maxDaysToMaturity?: ?ModelIntFilterInput,
  baseGdd?: ?ModelIntFilterInput,
  gddToMaturity?: ?ModelIntFilterInput,
  numPerSqFt?: ?ModelIntFilterInput,
  image?: ?ModelStringFilterInput,
  and?: ?Array< ?ModelCropFilterInput >,
  or?: ?Array< ?ModelCropFilterInput >,
  not?: ?ModelCropFilterInput,
|};

export type ModelFloatFilterInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  contains?: ?number,
  notContains?: ?number,
  between?: ?Array< ?number >,
|};

export type SearchableGardenFilterInput = {|
  id?: ?SearchableIDFilterInput,
  created?: ?SearchableStringFilterInput,
  name?: ?SearchableStringFilterInput,
  location?: ?SearchableStringFilterInput,
  zip?: ?SearchableStringFilterInput,
  length?: ?SearchableIntFilterInput,
  width?: ?SearchableIntFilterInput,
  and?: ?Array< ?SearchableGardenFilterInput >,
  or?: ?Array< ?SearchableGardenFilterInput >,
  not?: ?SearchableGardenFilterInput,
|};

export type SearchableIDFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  match?: ?string,
  matchPhrase?: ?string,
  matchPhrasePrefix?: ?string,
  multiMatch?: ?string,
  exists?: ?boolean,
  wildcard?: ?string,
  regexp?: ?string,
|};

export type SearchableStringFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  match?: ?string,
  matchPhrase?: ?string,
  matchPhrasePrefix?: ?string,
  multiMatch?: ?string,
  exists?: ?boolean,
  wildcard?: ?string,
  regexp?: ?string,
|};

export type SearchableIntFilterInput = {|
  ne?: ?number,
  gt?: ?number,
  lt?: ?number,
  gte?: ?number,
  lte?: ?number,
  eq?: ?number,
  range?: ?Array< ?number >,
|};

export type SearchableGardenSortInput = {|
  field?: ?SearchableGardenSortableFields,
  direction?: ?SearchableSortDirection,
|};

export type SearchableGardenSortableFields =
  "id" |
  "created" |
  "name" |
  "location" |
  "zip" |
  "length" |
  "width";


export type SearchableSortDirection =
  "asc" |
  "desc";


export type CreateUserMutationVariables = {|
  input: CreateUserInput,
|};

export type CreateUserMutation = {|
  createUser: ? {|
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    created: string,
    gardens: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        created: string,
        name: string,
        location: ?string,
        zip: string,
        length: number,
        width: number,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type UpdateUserMutationVariables = {|
  input: UpdateUserInput,
|};

export type UpdateUserMutation = {|
  updateUser: ? {|
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    created: string,
    gardens: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        created: string,
        name: string,
        location: ?string,
        zip: string,
        length: number,
        width: number,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type DeleteUserMutationVariables = {|
  input: DeleteUserInput,
|};

export type DeleteUserMutation = {|
  deleteUser: ? {|
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    created: string,
    gardens: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        created: string,
        name: string,
        location: ?string,
        zip: string,
        length: number,
        width: number,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type CreateGardenMutationVariables = {|
  input: CreateGardenInput,
|};

export type CreateGardenMutation = {|
  createGarden: ? {|
    __typename: "Garden",
    id: string,
    created: string,
    name: string,
    location: ?string,
    zip: string,
    length: number,
    width: number,
    user: ? {|
      __typename: string,
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      created: string,
    |},
    beds: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        created: string,
        name: string,
        length: number,
        width: number,
        x: ?number,
        y: ?number,
        exposure: ?string,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type UpdateGardenMutationVariables = {|
  input: UpdateGardenInput,
|};

export type UpdateGardenMutation = {|
  updateGarden: ? {|
    __typename: "Garden",
    id: string,
    created: string,
    name: string,
    location: ?string,
    zip: string,
    length: number,
    width: number,
    user: ? {|
      __typename: string,
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      created: string,
    |},
    beds: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        created: string,
        name: string,
        length: number,
        width: number,
        x: ?number,
        y: ?number,
        exposure: ?string,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type DeleteGardenMutationVariables = {|
  input: DeleteGardenInput,
|};

export type DeleteGardenMutation = {|
  deleteGarden: ? {|
    __typename: "Garden",
    id: string,
    created: string,
    name: string,
    location: ?string,
    zip: string,
    length: number,
    width: number,
    user: ? {|
      __typename: string,
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      created: string,
    |},
    beds: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        created: string,
        name: string,
        length: number,
        width: number,
        x: ?number,
        y: ?number,
        exposure: ?string,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type CreateBedMutationVariables = {|
  input: CreateBedInput,
|};

export type CreateBedMutation = {|
  createBed: ? {|
    __typename: "Bed",
    id: string,
    created: string,
    name: string,
    length: number,
    width: number,
    x: ?number,
    y: ?number,
    exposure: ?string,
    plantings: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: ?string,
        created: string,
        row: number,
        column: number,
      |} >,
      nextToken: ?string,
    |},
    garden: ? {|
      __typename: string,
      id: string,
      created: string,
      name: string,
      location: ?string,
      zip: string,
      length: number,
      width: number,
    |},
  |},
|};

export type UpdateBedMutationVariables = {|
  input: UpdateBedInput,
|};

export type UpdateBedMutation = {|
  updateBed: ? {|
    __typename: "Bed",
    id: string,
    created: string,
    name: string,
    length: number,
    width: number,
    x: ?number,
    y: ?number,
    exposure: ?string,
    plantings: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: ?string,
        created: string,
        row: number,
        column: number,
      |} >,
      nextToken: ?string,
    |},
    garden: ? {|
      __typename: string,
      id: string,
      created: string,
      name: string,
      location: ?string,
      zip: string,
      length: number,
      width: number,
    |},
  |},
|};

export type DeleteBedMutationVariables = {|
  input: DeleteBedInput,
|};

export type DeleteBedMutation = {|
  deleteBed: ? {|
    __typename: "Bed",
    id: string,
    created: string,
    name: string,
    length: number,
    width: number,
    x: ?number,
    y: ?number,
    exposure: ?string,
    plantings: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: ?string,
        created: string,
        row: number,
        column: number,
      |} >,
      nextToken: ?string,
    |},
    garden: ? {|
      __typename: string,
      id: string,
      created: string,
      name: string,
      location: ?string,
      zip: string,
      length: number,
      width: number,
    |},
  |},
|};

export type CreatePlantingMutationVariables = {|
  input: CreatePlantingInput,
|};

export type CreatePlantingMutation = {|
  createPlanting: ? {|
    __typename: "Planting",
    id: ?string,
    created: string,
    crop: ? {|
      __typename: string,
      id: string,
      commonName: string,
      latinName: ?string,
      family: ?string,
      seedDepth: ?number,
      minGermTemp: ?number,
      maxGermTemp: ?number,
      minGermTime: ?number,
      maxGermTime: ?number,
      sowIndoors: ?number,
      minSoilPh: ?number,
      maxSoilPh: ?number,
      minGrowTemp: ?number,
      maxGrowTemp: ?number,
      seedSpacing: ?number,
      thinTo: ?number,
      rowSpacing: ?number,
      minFlowerToHarvestTime: ?number,
      maxFlowerToHarvestTime: ?number,
      sowIndoorsBeforeLastFrost: ?number,
      transplantBeforeLastFrost: ?number,
      sowOutdoorsBeforeLastFrost: ?number,
      sowOutdoorsBeforeFirstFrost: ?number,
      minDaysToMaturity: ?number,
      maxDaysToMaturity: ?number,
      baseGdd: ?number,
      gddToMaturity: ?number,
      numPerSqFt: number,
      image: string,
    |},
    bed: ? {|
      __typename: string,
      id: string,
      created: string,
      name: string,
      length: number,
      width: number,
      x: ?number,
      y: ?number,
      exposure: ?string,
    |},
    row: number,
    column: number,
  |},
|};

export type UpdatePlantingMutationVariables = {|
  input: UpdatePlantingInput,
|};

export type UpdatePlantingMutation = {|
  updatePlanting: ? {|
    __typename: "Planting",
    id: ?string,
    created: string,
    crop: ? {|
      __typename: string,
      id: string,
      commonName: string,
      latinName: ?string,
      family: ?string,
      seedDepth: ?number,
      minGermTemp: ?number,
      maxGermTemp: ?number,
      minGermTime: ?number,
      maxGermTime: ?number,
      sowIndoors: ?number,
      minSoilPh: ?number,
      maxSoilPh: ?number,
      minGrowTemp: ?number,
      maxGrowTemp: ?number,
      seedSpacing: ?number,
      thinTo: ?number,
      rowSpacing: ?number,
      minFlowerToHarvestTime: ?number,
      maxFlowerToHarvestTime: ?number,
      sowIndoorsBeforeLastFrost: ?number,
      transplantBeforeLastFrost: ?number,
      sowOutdoorsBeforeLastFrost: ?number,
      sowOutdoorsBeforeFirstFrost: ?number,
      minDaysToMaturity: ?number,
      maxDaysToMaturity: ?number,
      baseGdd: ?number,
      gddToMaturity: ?number,
      numPerSqFt: number,
      image: string,
    |},
    bed: ? {|
      __typename: string,
      id: string,
      created: string,
      name: string,
      length: number,
      width: number,
      x: ?number,
      y: ?number,
      exposure: ?string,
    |},
    row: number,
    column: number,
  |},
|};

export type DeletePlantingMutationVariables = {|
  input: DeletePlantingInput,
|};

export type DeletePlantingMutation = {|
  deletePlanting: ? {|
    __typename: "Planting",
    id: ?string,
    created: string,
    crop: ? {|
      __typename: string,
      id: string,
      commonName: string,
      latinName: ?string,
      family: ?string,
      seedDepth: ?number,
      minGermTemp: ?number,
      maxGermTemp: ?number,
      minGermTime: ?number,
      maxGermTime: ?number,
      sowIndoors: ?number,
      minSoilPh: ?number,
      maxSoilPh: ?number,
      minGrowTemp: ?number,
      maxGrowTemp: ?number,
      seedSpacing: ?number,
      thinTo: ?number,
      rowSpacing: ?number,
      minFlowerToHarvestTime: ?number,
      maxFlowerToHarvestTime: ?number,
      sowIndoorsBeforeLastFrost: ?number,
      transplantBeforeLastFrost: ?number,
      sowOutdoorsBeforeLastFrost: ?number,
      sowOutdoorsBeforeFirstFrost: ?number,
      minDaysToMaturity: ?number,
      maxDaysToMaturity: ?number,
      baseGdd: ?number,
      gddToMaturity: ?number,
      numPerSqFt: number,
      image: string,
    |},
    bed: ? {|
      __typename: string,
      id: string,
      created: string,
      name: string,
      length: number,
      width: number,
      x: ?number,
      y: ?number,
      exposure: ?string,
    |},
    row: number,
    column: number,
  |},
|};

export type CreateCropMutationVariables = {|
  input: CreateCropInput,
|};

export type CreateCropMutation = {|
  createCrop: ? {|
    __typename: "Crop",
    id: string,
    commonName: string,
    latinName: ?string,
    family: ?string,
    seedDepth: ?number,
    minGermTemp: ?number,
    maxGermTemp: ?number,
    minGermTime: ?number,
    maxGermTime: ?number,
    sowIndoors: ?number,
    minSoilPh: ?number,
    maxSoilPh: ?number,
    minGrowTemp: ?number,
    maxGrowTemp: ?number,
    seedSpacing: ?number,
    thinTo: ?number,
    rowSpacing: ?number,
    waterFreq: ?Level,
    nitrogenReq: ?Level,
    phosphorusReq: ?Level,
    potassiumReq: ?Level,
    sunExposure: ?Exposure,
    minFlowerToHarvestTime: ?number,
    maxFlowerToHarvestTime: ?number,
    sowIndoorsBeforeLastFrost: ?number,
    transplantBeforeLastFrost: ?number,
    sowOutdoorsBeforeLastFrost: ?number,
    sowOutdoorsBeforeFirstFrost: ?number,
    minDaysToMaturity: ?number,
    maxDaysToMaturity: ?number,
    baseGdd: ?number,
    gddToMaturity: ?number,
    numPerSqFt: number,
    image: string,
  |},
|};

export type UpdateCropMutationVariables = {|
  input: UpdateCropInput,
|};

export type UpdateCropMutation = {|
  updateCrop: ? {|
    __typename: "Crop",
    id: string,
    commonName: string,
    latinName: ?string,
    family: ?string,
    seedDepth: ?number,
    minGermTemp: ?number,
    maxGermTemp: ?number,
    minGermTime: ?number,
    maxGermTime: ?number,
    sowIndoors: ?number,
    minSoilPh: ?number,
    maxSoilPh: ?number,
    minGrowTemp: ?number,
    maxGrowTemp: ?number,
    seedSpacing: ?number,
    thinTo: ?number,
    rowSpacing: ?number,
    waterFreq: ?Level,
    nitrogenReq: ?Level,
    phosphorusReq: ?Level,
    potassiumReq: ?Level,
    sunExposure: ?Exposure,
    minFlowerToHarvestTime: ?number,
    maxFlowerToHarvestTime: ?number,
    sowIndoorsBeforeLastFrost: ?number,
    transplantBeforeLastFrost: ?number,
    sowOutdoorsBeforeLastFrost: ?number,
    sowOutdoorsBeforeFirstFrost: ?number,
    minDaysToMaturity: ?number,
    maxDaysToMaturity: ?number,
    baseGdd: ?number,
    gddToMaturity: ?number,
    numPerSqFt: number,
    image: string,
  |},
|};

export type DeleteCropMutationVariables = {|
  input: DeleteCropInput,
|};

export type DeleteCropMutation = {|
  deleteCrop: ? {|
    __typename: "Crop",
    id: string,
    commonName: string,
    latinName: ?string,
    family: ?string,
    seedDepth: ?number,
    minGermTemp: ?number,
    maxGermTemp: ?number,
    minGermTime: ?number,
    maxGermTime: ?number,
    sowIndoors: ?number,
    minSoilPh: ?number,
    maxSoilPh: ?number,
    minGrowTemp: ?number,
    maxGrowTemp: ?number,
    seedSpacing: ?number,
    thinTo: ?number,
    rowSpacing: ?number,
    waterFreq: ?Level,
    nitrogenReq: ?Level,
    phosphorusReq: ?Level,
    potassiumReq: ?Level,
    sunExposure: ?Exposure,
    minFlowerToHarvestTime: ?number,
    maxFlowerToHarvestTime: ?number,
    sowIndoorsBeforeLastFrost: ?number,
    transplantBeforeLastFrost: ?number,
    sowOutdoorsBeforeLastFrost: ?number,
    sowOutdoorsBeforeFirstFrost: ?number,
    minDaysToMaturity: ?number,
    maxDaysToMaturity: ?number,
    baseGdd: ?number,
    gddToMaturity: ?number,
    numPerSqFt: number,
    image: string,
  |},
|};

export type GetUserQueryVariables = {|
  id: string,
|};

export type GetUserQuery = {|
  getUser: ? {|
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    created: string,
    gardens: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        created: string,
        name: string,
        location: ?string,
        zip: string,
        length: number,
        width: number,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type ListUsersQueryVariables = {|
  filter?: ?ModelUserFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListUsersQuery = {|
  listUsers: ? {|
    __typename: "ModelUserConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      created: string,
      gardens: ? {|
        __typename: string,
        items: ? Array<? {|
          __typename: string,
          id: string,
          created: string,
          name: string,
          location: ?string,
          zip: string,
          length: number,
          width: number,
        |} >,
        nextToken: ?string,
      |},
    |} >,
    nextToken: ?string,
  |},
|};

export type GetGardenQueryVariables = {|
  id: string,
|};

export type GetGardenQuery = {|
  getGarden: ? {|
    __typename: "Garden",
    id: string,
    created: string,
    name: string,
    location: ?string,
    zip: string,
    length: number,
    width: number,
    user: ? {|
      __typename: string,
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      created: string,
    |},
    beds: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        created: string,
        name: string,
        length: number,
        width: number,
        x: ?number,
        y: ?number,
        exposure: ?string,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type ListGardensQueryVariables = {|
  filter?: ?ModelGardenFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListGardensQuery = {|
  listGardens: ? {|
    __typename: "ModelGardenConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      created: string,
      name: string,
      location: ?string,
      zip: string,
      length: number,
      width: number,
      user: ? {|
        __typename: string,
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        created: string,
      |},
      beds: ? {|
        __typename: string,
        items: ? Array<? {|
          __typename: string,
          id: string,
          created: string,
          name: string,
          length: number,
          width: number,
          x: ?number,
          y: ?number,
          exposure: ?string,
        |} >,
        nextToken: ?string,
      |},
    |} >,
    nextToken: ?string,
  |},
|};

export type GetBedQueryVariables = {|
  id: string,
|};

export type GetBedQuery = {|
  getBed: ? {|
    __typename: "Bed",
    id: string,
    created: string,
    name: string,
    length: number,
    width: number,
    x: ?number,
    y: ?number,
    exposure: ?string,
    plantings: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: ?string,
        created: string,
        row: number,
        column: number,
      |} >,
      nextToken: ?string,
    |},
    garden: ? {|
      __typename: string,
      id: string,
      created: string,
      name: string,
      location: ?string,
      zip: string,
      length: number,
      width: number,
    |},
  |},
|};

export type ListBedsQueryVariables = {|
  filter?: ?ModelBedFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListBedsQuery = {|
  listBeds: ? {|
    __typename: "ModelBedConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      created: string,
      name: string,
      length: number,
      width: number,
      x: ?number,
      y: ?number,
      exposure: ?string,
      plantings: ? {|
        __typename: string,
        items: ? Array<? {|
          __typename: string,
          id: ?string,
          created: string,
          row: number,
          column: number,
        |} >,
        nextToken: ?string,
      |},
      garden: ? {|
        __typename: string,
        id: string,
        created: string,
        name: string,
        location: ?string,
        zip: string,
        length: number,
        width: number,
      |},
    |} >,
    nextToken: ?string,
  |},
|};

export type GetPlantingQueryVariables = {|
  id: string,
|};

export type GetPlantingQuery = {|
  getPlanting: ? {|
    __typename: "Planting",
    id: ?string,
    created: string,
    crop: ? {|
      __typename: string,
      id: string,
      commonName: string,
      latinName: ?string,
      family: ?string,
      seedDepth: ?number,
      minGermTemp: ?number,
      maxGermTemp: ?number,
      minGermTime: ?number,
      maxGermTime: ?number,
      sowIndoors: ?number,
      minSoilPh: ?number,
      maxSoilPh: ?number,
      minGrowTemp: ?number,
      maxGrowTemp: ?number,
      seedSpacing: ?number,
      thinTo: ?number,
      rowSpacing: ?number,
      minFlowerToHarvestTime: ?number,
      maxFlowerToHarvestTime: ?number,
      sowIndoorsBeforeLastFrost: ?number,
      transplantBeforeLastFrost: ?number,
      sowOutdoorsBeforeLastFrost: ?number,
      sowOutdoorsBeforeFirstFrost: ?number,
      minDaysToMaturity: ?number,
      maxDaysToMaturity: ?number,
      baseGdd: ?number,
      gddToMaturity: ?number,
      numPerSqFt: number,
      image: string,
    |},
    bed: ? {|
      __typename: string,
      id: string,
      created: string,
      name: string,
      length: number,
      width: number,
      x: ?number,
      y: ?number,
      exposure: ?string,
    |},
    row: number,
    column: number,
  |},
|};

export type ListPlantingsQueryVariables = {|
  filter?: ?ModelPlantingFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListPlantingsQuery = {|
  listPlantings: ? {|
    __typename: "ModelPlantingConnection",
    items: ? Array<? {|
      __typename: string,
      id: ?string,
      created: string,
      crop: ? {|
        __typename: string,
        id: string,
        commonName: string,
        latinName: ?string,
        family: ?string,
        seedDepth: ?number,
        minGermTemp: ?number,
        maxGermTemp: ?number,
        minGermTime: ?number,
        maxGermTime: ?number,
        sowIndoors: ?number,
        minSoilPh: ?number,
        maxSoilPh: ?number,
        minGrowTemp: ?number,
        maxGrowTemp: ?number,
        seedSpacing: ?number,
        thinTo: ?number,
        rowSpacing: ?number,
        minFlowerToHarvestTime: ?number,
        maxFlowerToHarvestTime: ?number,
        sowIndoorsBeforeLastFrost: ?number,
        transplantBeforeLastFrost: ?number,
        sowOutdoorsBeforeLastFrost: ?number,
        sowOutdoorsBeforeFirstFrost: ?number,
        minDaysToMaturity: ?number,
        maxDaysToMaturity: ?number,
        baseGdd: ?number,
        gddToMaturity: ?number,
        numPerSqFt: number,
        image: string,
      |},
      bed: ? {|
        __typename: string,
        id: string,
        created: string,
        name: string,
        length: number,
        width: number,
        x: ?number,
        y: ?number,
        exposure: ?string,
      |},
      row: number,
      column: number,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetCropQueryVariables = {|
  id: string,
|};

export type GetCropQuery = {|
  getCrop: ? {|
    __typename: "Crop",
    id: string,
    commonName: string,
    latinName: ?string,
    family: ?string,
    seedDepth: ?number,
    minGermTemp: ?number,
    maxGermTemp: ?number,
    minGermTime: ?number,
    maxGermTime: ?number,
    sowIndoors: ?number,
    minSoilPh: ?number,
    maxSoilPh: ?number,
    minGrowTemp: ?number,
    maxGrowTemp: ?number,
    seedSpacing: ?number,
    thinTo: ?number,
    rowSpacing: ?number,
    waterFreq: ?Level,
    nitrogenReq: ?Level,
    phosphorusReq: ?Level,
    potassiumReq: ?Level,
    sunExposure: ?Exposure,
    minFlowerToHarvestTime: ?number,
    maxFlowerToHarvestTime: ?number,
    sowIndoorsBeforeLastFrost: ?number,
    transplantBeforeLastFrost: ?number,
    sowOutdoorsBeforeLastFrost: ?number,
    sowOutdoorsBeforeFirstFrost: ?number,
    minDaysToMaturity: ?number,
    maxDaysToMaturity: ?number,
    baseGdd: ?number,
    gddToMaturity: ?number,
    numPerSqFt: number,
    image: string,
  |},
|};

export type ListCropsQueryVariables = {|
  filter?: ?ModelCropFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListCropsQuery = {|
  listCrops: ? {|
    __typename: "ModelCropConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      commonName: string,
      latinName: ?string,
      family: ?string,
      seedDepth: ?number,
      minGermTemp: ?number,
      maxGermTemp: ?number,
      minGermTime: ?number,
      maxGermTime: ?number,
      sowIndoors: ?number,
      minSoilPh: ?number,
      maxSoilPh: ?number,
      minGrowTemp: ?number,
      maxGrowTemp: ?number,
      seedSpacing: ?number,
      thinTo: ?number,
      rowSpacing: ?number,
      waterFreq: ?Level,
      nitrogenReq: ?Level,
      phosphorusReq: ?Level,
      potassiumReq: ?Level,
      sunExposure: ?Exposure,
      minFlowerToHarvestTime: ?number,
      maxFlowerToHarvestTime: ?number,
      sowIndoorsBeforeLastFrost: ?number,
      transplantBeforeLastFrost: ?number,
      sowOutdoorsBeforeLastFrost: ?number,
      sowOutdoorsBeforeFirstFrost: ?number,
      minDaysToMaturity: ?number,
      maxDaysToMaturity: ?number,
      baseGdd: ?number,
      gddToMaturity: ?number,
      numPerSqFt: number,
      image: string,
    |} >,
    nextToken: ?string,
  |},
|};

export type SearchGardensQueryVariables = {|
  filter?: ?SearchableGardenFilterInput,
  sort?: ?SearchableGardenSortInput,
  limit?: ?number,
  nextToken?: ?number,
|};

export type SearchGardensQuery = {|
  searchGardens: ? {|
    __typename: "SearchableGardenConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      created: string,
      name: string,
      location: ?string,
      zip: string,
      length: number,
      width: number,
      user: ? {|
        __typename: string,
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        created: string,
      |},
      beds: ? {|
        __typename: string,
        items: ? Array<? {|
          __typename: string,
          id: string,
          created: string,
          name: string,
          length: number,
          width: number,
          x: ?number,
          y: ?number,
          exposure: ?string,
        |} >,
        nextToken: ?string,
      |},
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateUserSubscription = {|
  onCreateUser: ? {|
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    created: string,
    gardens: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        created: string,
        name: string,
        location: ?string,
        zip: string,
        length: number,
        width: number,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type OnUpdateUserSubscription = {|
  onUpdateUser: ? {|
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    created: string,
    gardens: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        created: string,
        name: string,
        location: ?string,
        zip: string,
        length: number,
        width: number,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type OnDeleteUserSubscription = {|
  onDeleteUser: ? {|
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    created: string,
    gardens: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        created: string,
        name: string,
        location: ?string,
        zip: string,
        length: number,
        width: number,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type OnCreateGardenSubscription = {|
  onCreateGarden: ? {|
    __typename: "Garden",
    id: string,
    created: string,
    name: string,
    location: ?string,
    zip: string,
    length: number,
    width: number,
    user: ? {|
      __typename: string,
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      created: string,
    |},
    beds: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        created: string,
        name: string,
        length: number,
        width: number,
        x: ?number,
        y: ?number,
        exposure: ?string,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type OnUpdateGardenSubscription = {|
  onUpdateGarden: ? {|
    __typename: "Garden",
    id: string,
    created: string,
    name: string,
    location: ?string,
    zip: string,
    length: number,
    width: number,
    user: ? {|
      __typename: string,
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      created: string,
    |},
    beds: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        created: string,
        name: string,
        length: number,
        width: number,
        x: ?number,
        y: ?number,
        exposure: ?string,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type OnDeleteGardenSubscription = {|
  onDeleteGarden: ? {|
    __typename: "Garden",
    id: string,
    created: string,
    name: string,
    location: ?string,
    zip: string,
    length: number,
    width: number,
    user: ? {|
      __typename: string,
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      created: string,
    |},
    beds: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        created: string,
        name: string,
        length: number,
        width: number,
        x: ?number,
        y: ?number,
        exposure: ?string,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type OnCreateBedSubscription = {|
  onCreateBed: ? {|
    __typename: "Bed",
    id: string,
    created: string,
    name: string,
    length: number,
    width: number,
    x: ?number,
    y: ?number,
    exposure: ?string,
    plantings: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: ?string,
        created: string,
        row: number,
        column: number,
      |} >,
      nextToken: ?string,
    |},
    garden: ? {|
      __typename: string,
      id: string,
      created: string,
      name: string,
      location: ?string,
      zip: string,
      length: number,
      width: number,
    |},
  |},
|};

export type OnUpdateBedSubscription = {|
  onUpdateBed: ? {|
    __typename: "Bed",
    id: string,
    created: string,
    name: string,
    length: number,
    width: number,
    x: ?number,
    y: ?number,
    exposure: ?string,
    plantings: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: ?string,
        created: string,
        row: number,
        column: number,
      |} >,
      nextToken: ?string,
    |},
    garden: ? {|
      __typename: string,
      id: string,
      created: string,
      name: string,
      location: ?string,
      zip: string,
      length: number,
      width: number,
    |},
  |},
|};

export type OnDeleteBedSubscription = {|
  onDeleteBed: ? {|
    __typename: "Bed",
    id: string,
    created: string,
    name: string,
    length: number,
    width: number,
    x: ?number,
    y: ?number,
    exposure: ?string,
    plantings: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: ?string,
        created: string,
        row: number,
        column: number,
      |} >,
      nextToken: ?string,
    |},
    garden: ? {|
      __typename: string,
      id: string,
      created: string,
      name: string,
      location: ?string,
      zip: string,
      length: number,
      width: number,
    |},
  |},
|};

export type OnCreatePlantingSubscription = {|
  onCreatePlanting: ? {|
    __typename: "Planting",
    id: ?string,
    created: string,
    crop: ? {|
      __typename: string,
      id: string,
      commonName: string,
      latinName: ?string,
      family: ?string,
      seedDepth: ?number,
      minGermTemp: ?number,
      maxGermTemp: ?number,
      minGermTime: ?number,
      maxGermTime: ?number,
      sowIndoors: ?number,
      minSoilPh: ?number,
      maxSoilPh: ?number,
      minGrowTemp: ?number,
      maxGrowTemp: ?number,
      seedSpacing: ?number,
      thinTo: ?number,
      rowSpacing: ?number,
      minFlowerToHarvestTime: ?number,
      maxFlowerToHarvestTime: ?number,
      sowIndoorsBeforeLastFrost: ?number,
      transplantBeforeLastFrost: ?number,
      sowOutdoorsBeforeLastFrost: ?number,
      sowOutdoorsBeforeFirstFrost: ?number,
      minDaysToMaturity: ?number,
      maxDaysToMaturity: ?number,
      baseGdd: ?number,
      gddToMaturity: ?number,
      numPerSqFt: number,
      image: string,
    |},
    bed: ? {|
      __typename: string,
      id: string,
      created: string,
      name: string,
      length: number,
      width: number,
      x: ?number,
      y: ?number,
      exposure: ?string,
    |},
    row: number,
    column: number,
  |},
|};

export type OnUpdatePlantingSubscription = {|
  onUpdatePlanting: ? {|
    __typename: "Planting",
    id: ?string,
    created: string,
    crop: ? {|
      __typename: string,
      id: string,
      commonName: string,
      latinName: ?string,
      family: ?string,
      seedDepth: ?number,
      minGermTemp: ?number,
      maxGermTemp: ?number,
      minGermTime: ?number,
      maxGermTime: ?number,
      sowIndoors: ?number,
      minSoilPh: ?number,
      maxSoilPh: ?number,
      minGrowTemp: ?number,
      maxGrowTemp: ?number,
      seedSpacing: ?number,
      thinTo: ?number,
      rowSpacing: ?number,
      minFlowerToHarvestTime: ?number,
      maxFlowerToHarvestTime: ?number,
      sowIndoorsBeforeLastFrost: ?number,
      transplantBeforeLastFrost: ?number,
      sowOutdoorsBeforeLastFrost: ?number,
      sowOutdoorsBeforeFirstFrost: ?number,
      minDaysToMaturity: ?number,
      maxDaysToMaturity: ?number,
      baseGdd: ?number,
      gddToMaturity: ?number,
      numPerSqFt: number,
      image: string,
    |},
    bed: ? {|
      __typename: string,
      id: string,
      created: string,
      name: string,
      length: number,
      width: number,
      x: ?number,
      y: ?number,
      exposure: ?string,
    |},
    row: number,
    column: number,
  |},
|};

export type OnDeletePlantingSubscription = {|
  onDeletePlanting: ? {|
    __typename: "Planting",
    id: ?string,
    created: string,
    crop: ? {|
      __typename: string,
      id: string,
      commonName: string,
      latinName: ?string,
      family: ?string,
      seedDepth: ?number,
      minGermTemp: ?number,
      maxGermTemp: ?number,
      minGermTime: ?number,
      maxGermTime: ?number,
      sowIndoors: ?number,
      minSoilPh: ?number,
      maxSoilPh: ?number,
      minGrowTemp: ?number,
      maxGrowTemp: ?number,
      seedSpacing: ?number,
      thinTo: ?number,
      rowSpacing: ?number,
      minFlowerToHarvestTime: ?number,
      maxFlowerToHarvestTime: ?number,
      sowIndoorsBeforeLastFrost: ?number,
      transplantBeforeLastFrost: ?number,
      sowOutdoorsBeforeLastFrost: ?number,
      sowOutdoorsBeforeFirstFrost: ?number,
      minDaysToMaturity: ?number,
      maxDaysToMaturity: ?number,
      baseGdd: ?number,
      gddToMaturity: ?number,
      numPerSqFt: number,
      image: string,
    |},
    bed: ? {|
      __typename: string,
      id: string,
      created: string,
      name: string,
      length: number,
      width: number,
      x: ?number,
      y: ?number,
      exposure: ?string,
    |},
    row: number,
    column: number,
  |},
|};

export type OnCreateCropSubscription = {|
  onCreateCrop: ? {|
    __typename: "Crop",
    id: string,
    commonName: string,
    latinName: ?string,
    family: ?string,
    seedDepth: ?number,
    minGermTemp: ?number,
    maxGermTemp: ?number,
    minGermTime: ?number,
    maxGermTime: ?number,
    sowIndoors: ?number,
    minSoilPh: ?number,
    maxSoilPh: ?number,
    minGrowTemp: ?number,
    maxGrowTemp: ?number,
    seedSpacing: ?number,
    thinTo: ?number,
    rowSpacing: ?number,
    waterFreq: ?Level,
    nitrogenReq: ?Level,
    phosphorusReq: ?Level,
    potassiumReq: ?Level,
    sunExposure: ?Exposure,
    minFlowerToHarvestTime: ?number,
    maxFlowerToHarvestTime: ?number,
    sowIndoorsBeforeLastFrost: ?number,
    transplantBeforeLastFrost: ?number,
    sowOutdoorsBeforeLastFrost: ?number,
    sowOutdoorsBeforeFirstFrost: ?number,
    minDaysToMaturity: ?number,
    maxDaysToMaturity: ?number,
    baseGdd: ?number,
    gddToMaturity: ?number,
    numPerSqFt: number,
    image: string,
  |},
|};

export type OnUpdateCropSubscription = {|
  onUpdateCrop: ? {|
    __typename: "Crop",
    id: string,
    commonName: string,
    latinName: ?string,
    family: ?string,
    seedDepth: ?number,
    minGermTemp: ?number,
    maxGermTemp: ?number,
    minGermTime: ?number,
    maxGermTime: ?number,
    sowIndoors: ?number,
    minSoilPh: ?number,
    maxSoilPh: ?number,
    minGrowTemp: ?number,
    maxGrowTemp: ?number,
    seedSpacing: ?number,
    thinTo: ?number,
    rowSpacing: ?number,
    waterFreq: ?Level,
    nitrogenReq: ?Level,
    phosphorusReq: ?Level,
    potassiumReq: ?Level,
    sunExposure: ?Exposure,
    minFlowerToHarvestTime: ?number,
    maxFlowerToHarvestTime: ?number,
    sowIndoorsBeforeLastFrost: ?number,
    transplantBeforeLastFrost: ?number,
    sowOutdoorsBeforeLastFrost: ?number,
    sowOutdoorsBeforeFirstFrost: ?number,
    minDaysToMaturity: ?number,
    maxDaysToMaturity: ?number,
    baseGdd: ?number,
    gddToMaturity: ?number,
    numPerSqFt: number,
    image: string,
  |},
|};

export type OnDeleteCropSubscription = {|
  onDeleteCrop: ? {|
    __typename: "Crop",
    id: string,
    commonName: string,
    latinName: ?string,
    family: ?string,
    seedDepth: ?number,
    minGermTemp: ?number,
    maxGermTemp: ?number,
    minGermTime: ?number,
    maxGermTime: ?number,
    sowIndoors: ?number,
    minSoilPh: ?number,
    maxSoilPh: ?number,
    minGrowTemp: ?number,
    maxGrowTemp: ?number,
    seedSpacing: ?number,
    thinTo: ?number,
    rowSpacing: ?number,
    waterFreq: ?Level,
    nitrogenReq: ?Level,
    phosphorusReq: ?Level,
    potassiumReq: ?Level,
    sunExposure: ?Exposure,
    minFlowerToHarvestTime: ?number,
    maxFlowerToHarvestTime: ?number,
    sowIndoorsBeforeLastFrost: ?number,
    transplantBeforeLastFrost: ?number,
    sowOutdoorsBeforeLastFrost: ?number,
    sowOutdoorsBeforeFirstFrost: ?number,
    minDaysToMaturity: ?number,
    maxDaysToMaturity: ?number,
    baseGdd: ?number,
    gddToMaturity: ?number,
    numPerSqFt: number,
    image: string,
  |},
|};