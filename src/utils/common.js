// @flow
export const createArrayFromNumber = (num: number) => {
    const array = []
    for (let i = 0; i < num; i++) {
        array.push(i)
    }
    return array
}

export const mapFormValues = (
    firstMap: { [string]: any },
    secondMap: { [string]: any },
    key: string,
) => {
    return firstMap[key] || secondMap[key]
}
