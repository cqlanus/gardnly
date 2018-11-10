const plantingsFragment = `plantings {
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

export const onCreatePlanting = `subscription OnCreatePlanting {
  onCreatePlanting {
    id
    created
    crop {
      id
      commonName
    }
    ${bedFragment}
    row
    column
  }
}
`
