export const onUpdateBed = `subscription OnUpdateBed {
    onUpdateBed {
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
          crop {
              commonName
              image
              id
              numPerSqFt
          }
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
  `
