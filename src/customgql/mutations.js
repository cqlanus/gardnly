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
      bed {
        id
        created
        name
        length
        width
        plantings(limit: $limit) {
            items {
                row
                column
                crop {
                    commonName
                    image
                    numPerSqFt
                    id
                }
            }
        }
      }
      row
      column
    }
  }
  `
