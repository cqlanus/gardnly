/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {|
  firstName: string,
  lastName: string,
  email: string,
|};

export type UpdateUserInput = {|
  id: string,
  firstName?: ?string,
  lastName?: ?string,
  email?: ?string,
|};

export type DeleteUserInput = {|
  id?: ?string,
|};

export type CreateGardenInput = {|
  name: string,
  location?: ?string,
  zip: string,
  length: number,
  width: number,
  gardenUserId?: ?string,
|};

export type UpdateGardenInput = {|
  id: string,
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
  name: string,
  length: number,
  width: number,
  exposure?: ?string,
  bedGardenId?: ?string,
|};

export type UpdateBedInput = {|
  id: string,
  name?: ?string,
  length?: ?number,
  width?: ?number,
  exposure?: ?string,
  bedGardenId?: ?string,
|};

export type DeleteBedInput = {|
  id?: ?string,
|};

export type CreatePlantingInput = {|
  row: number,
  column: number,
  plantingCropId?: ?string,
  plantingBedId?: ?string,
|};

export type UpdatePlantingInput = {|
  id: string,
  row?: ?number,
  column?: ?number,
  plantingCropId?: ?string,
  plantingBedId?: ?string,
|};

export type DeletePlantingInput = {|
  id?: ?string,
|};

export type CreateCropInput = {|
  name: string,
  numPerSqFt: number,
  cropImg: string,
|};

export type UpdateCropInput = {|
  id: string,
  name?: ?string,
  numPerSqFt?: ?number,
  cropImg?: ?string,
|};

export type DeleteCropInput = {|
  id?: ?string,
|};

export type ModelUserFilterInput = {|
  id?: ?ModelIDFilterInput,
  firstName?: ?ModelStringFilterInput,
  lastName?: ?ModelStringFilterInput,
  email?: ?ModelStringFilterInput,
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
  name?: ?ModelStringFilterInput,
  length?: ?ModelIntFilterInput,
  width?: ?ModelIntFilterInput,
  exposure?: ?ModelStringFilterInput,
  and?: ?Array< ?ModelBedFilterInput >,
  or?: ?Array< ?ModelBedFilterInput >,
  not?: ?ModelBedFilterInput,
|};

export type ModelPlantingFilterInput = {|
  id?: ?ModelIDFilterInput,
  row?: ?ModelIntFilterInput,
  column?: ?ModelIntFilterInput,
  and?: ?Array< ?ModelPlantingFilterInput >,
  or?: ?Array< ?ModelPlantingFilterInput >,
  not?: ?ModelPlantingFilterInput,
|};

export type ModelCropFilterInput = {|
  id?: ?ModelIDFilterInput,
  name?: ?ModelStringFilterInput,
  numPerSqFt?: ?ModelIntFilterInput,
  cropImg?: ?ModelStringFilterInput,
  and?: ?Array< ?ModelCropFilterInput >,
  or?: ?Array< ?ModelCropFilterInput >,
  not?: ?ModelCropFilterInput,
|};

export type SearchableGardenFilterInput = {|
  id?: ?SearchableIDFilterInput,
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
    gardens: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
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
    gardens: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
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
    gardens: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
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
    |},
    beds: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        name: string,
        length: number,
        width: number,
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
    |},
    beds: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        name: string,
        length: number,
        width: number,
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
    |},
    beds: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        name: string,
        length: number,
        width: number,
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
    name: string,
    length: number,
    width: number,
    exposure: ?string,
    plantings: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: ?string,
        row: number,
        column: number,
      |} >,
      nextToken: ?string,
    |},
    garden: ? {|
      __typename: string,
      id: string,
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
    name: string,
    length: number,
    width: number,
    exposure: ?string,
    plantings: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: ?string,
        row: number,
        column: number,
      |} >,
      nextToken: ?string,
    |},
    garden: ? {|
      __typename: string,
      id: string,
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
    name: string,
    length: number,
    width: number,
    exposure: ?string,
    plantings: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: ?string,
        row: number,
        column: number,
      |} >,
      nextToken: ?string,
    |},
    garden: ? {|
      __typename: string,
      id: string,
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
    crop: ? {|
      __typename: string,
      id: string,
      name: string,
      numPerSqFt: number,
      cropImg: string,
    |},
    bed: ? {|
      __typename: string,
      id: string,
      name: string,
      length: number,
      width: number,
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
    crop: ? {|
      __typename: string,
      id: string,
      name: string,
      numPerSqFt: number,
      cropImg: string,
    |},
    bed: ? {|
      __typename: string,
      id: string,
      name: string,
      length: number,
      width: number,
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
    crop: ? {|
      __typename: string,
      id: string,
      name: string,
      numPerSqFt: number,
      cropImg: string,
    |},
    bed: ? {|
      __typename: string,
      id: string,
      name: string,
      length: number,
      width: number,
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
    name: string,
    numPerSqFt: number,
    cropImg: string,
  |},
|};

export type UpdateCropMutationVariables = {|
  input: UpdateCropInput,
|};

export type UpdateCropMutation = {|
  updateCrop: ? {|
    __typename: "Crop",
    id: string,
    name: string,
    numPerSqFt: number,
    cropImg: string,
  |},
|};

export type DeleteCropMutationVariables = {|
  input: DeleteCropInput,
|};

export type DeleteCropMutation = {|
  deleteCrop: ? {|
    __typename: "Crop",
    id: string,
    name: string,
    numPerSqFt: number,
    cropImg: string,
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
    gardens: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
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
      gardens: ? {|
        __typename: string,
        items: ? Array<? {|
          __typename: string,
          id: string,
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
    |},
    beds: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        name: string,
        length: number,
        width: number,
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
      |},
      beds: ? {|
        __typename: string,
        items: ? Array<? {|
          __typename: string,
          id: string,
          name: string,
          length: number,
          width: number,
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
    name: string,
    length: number,
    width: number,
    exposure: ?string,
    plantings: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: ?string,
        row: number,
        column: number,
      |} >,
      nextToken: ?string,
    |},
    garden: ? {|
      __typename: string,
      id: string,
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
      name: string,
      length: number,
      width: number,
      exposure: ?string,
      plantings: ? {|
        __typename: string,
        items: ? Array<? {|
          __typename: string,
          id: ?string,
          row: number,
          column: number,
        |} >,
        nextToken: ?string,
      |},
      garden: ? {|
        __typename: string,
        id: string,
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
    crop: ? {|
      __typename: string,
      id: string,
      name: string,
      numPerSqFt: number,
      cropImg: string,
    |},
    bed: ? {|
      __typename: string,
      id: string,
      name: string,
      length: number,
      width: number,
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
      crop: ? {|
        __typename: string,
        id: string,
        name: string,
        numPerSqFt: number,
        cropImg: string,
      |},
      bed: ? {|
        __typename: string,
        id: string,
        name: string,
        length: number,
        width: number,
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
    name: string,
    numPerSqFt: number,
    cropImg: string,
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
      name: string,
      numPerSqFt: number,
      cropImg: string,
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
      |},
      beds: ? {|
        __typename: string,
        items: ? Array<? {|
          __typename: string,
          id: string,
          name: string,
          length: number,
          width: number,
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
    gardens: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
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
    gardens: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
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
    gardens: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
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
    |},
    beds: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        name: string,
        length: number,
        width: number,
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
    |},
    beds: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        name: string,
        length: number,
        width: number,
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
    |},
    beds: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        name: string,
        length: number,
        width: number,
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
    name: string,
    length: number,
    width: number,
    exposure: ?string,
    plantings: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: ?string,
        row: number,
        column: number,
      |} >,
      nextToken: ?string,
    |},
    garden: ? {|
      __typename: string,
      id: string,
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
    name: string,
    length: number,
    width: number,
    exposure: ?string,
    plantings: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: ?string,
        row: number,
        column: number,
      |} >,
      nextToken: ?string,
    |},
    garden: ? {|
      __typename: string,
      id: string,
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
    name: string,
    length: number,
    width: number,
    exposure: ?string,
    plantings: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: ?string,
        row: number,
        column: number,
      |} >,
      nextToken: ?string,
    |},
    garden: ? {|
      __typename: string,
      id: string,
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
    crop: ? {|
      __typename: string,
      id: string,
      name: string,
      numPerSqFt: number,
      cropImg: string,
    |},
    bed: ? {|
      __typename: string,
      id: string,
      name: string,
      length: number,
      width: number,
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
    crop: ? {|
      __typename: string,
      id: string,
      name: string,
      numPerSqFt: number,
      cropImg: string,
    |},
    bed: ? {|
      __typename: string,
      id: string,
      name: string,
      length: number,
      width: number,
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
    crop: ? {|
      __typename: string,
      id: string,
      name: string,
      numPerSqFt: number,
      cropImg: string,
    |},
    bed: ? {|
      __typename: string,
      id: string,
      name: string,
      length: number,
      width: number,
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
    name: string,
    numPerSqFt: number,
    cropImg: string,
  |},
|};

export type OnUpdateCropSubscription = {|
  onUpdateCrop: ? {|
    __typename: "Crop",
    id: string,
    name: string,
    numPerSqFt: number,
    cropImg: string,
  |},
|};

export type OnDeleteCropSubscription = {|
  onDeleteCrop: ? {|
    __typename: "Crop",
    id: string,
    name: string,
    numPerSqFt: number,
    cropImg: string,
  |},
|};