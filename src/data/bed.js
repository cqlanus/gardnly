// @flow

export const createEmptyBed = (rows: number, columns: number) => {
    let array = []
    for (let i = 0; i < rows; i++) {
        let subArray = []
        for (let j = 0; j < columns; j++) {
            subArray.push(undefined)
        }
        array.push(subArray)
    }
    return array
}
