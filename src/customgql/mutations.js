const plantingsFragment = `plantings(limit: $limit) {
    items {
        id
        row
        column
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
