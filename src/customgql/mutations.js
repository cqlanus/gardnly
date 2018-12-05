const plantingsFragment = `plantings(limit: $limit) {
    items {
        id
        row
        column
        planted
        plantedOn
        crop {
            commonName
            image
            numPerSqFt
            id
        }
    }
}`

const bedFragment = `bed {
    id
    created
    name
    length
    width
    ${plantingsFragment}
  }`

export const createPlanting = `mutation CreatePlanting($input: CreatePlantingInput!, $limit: Int = 5) {
    createPlanting(input: $input) {
      id
      created
      crop {
        id
        commonName
        latinName
        family
        numPerSqFt
        image
      }
      ${bedFragment}
      row
      column
    }
  }
  `

export const deletePlanting = `mutation DeletePlanting($input: DeletePlantingInput!, $limit: Int = 5) {
    deletePlanting(input: $input) {
      id
      created
      crop {
        id
        commonName
        numPerSqFt
        image
      }
      ${bedFragment}
      row
      column
    }
  }
  `
export const updatePlanting = `mutation UpdatePlanting($input: UpdatePlantingInput!, $limit: Int = 5) {
    updatePlanting(input: $input) {
      id
      created
      crop {
        id
        commonName
        latinName
        numPerSqFt
        image
      }
      ${bedFragment}
      row
      column
    }
  }
  `
