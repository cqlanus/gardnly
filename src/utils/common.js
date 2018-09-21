// @flow
export const createArrayFromNumber = (num: number) => {
    const array = []
    for (let i = 0; i < num; i++) {
        array.push(i)
    }
    return array
}
