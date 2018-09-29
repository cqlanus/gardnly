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

export const isSquare = (n: number) => {
    return n > 0 && Math.sqrt(n) % 1 === 0
}

export const getDivisor = (n: number) => {
    const divisor = isSquare(n) ? Math.sqrt(n) : n === 2 ? 2 : n / 2
    return divisor
}

export const getProps = (name: string, base?: any) => (p: { [string]: any }) =>
    p[name] || base
