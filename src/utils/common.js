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
var isSquare = n => {
    return n > 0 && Math.sqrt(n) % 1 === 0
}

const getDivisor = n => {
    const divisor = isSquare(n) ? Math.sqrt(n) : n === 2 ? 2 : n / 2
    return divisor
}

export const defineCropHeightWidth = (numPerSqFt: number, grid: number) => {
    const divisor = getDivisor(numPerSqFt)
    const width = `${parseInt(grid / divisor, 10)}px`
    const height = `${parseInt(grid / divisor, 10)}px`
    return { width, height }
}

const getRowsAndColumns = (numPerSqFt: number) => {
    const divisor = getDivisor(numPerSqFt)
    if (isSquare(numPerSqFt)) {
        return { rows: divisor, columns: divisor }
    } else {
        return { rows: 2, columns: divisor }
    }
}

const getGridFractionString = (num: number) => {
    let string = []
    for (let i = 0; i < num; i++) {
        string.push('1fr')
    }
    return string.join(' ')
}

export const defineCropGridStyles = (numPerSqFt: number) => {
    const { rows, columns } = getRowsAndColumns(numPerSqFt)
    return {
        gridTemplateColumns: getGridFractionString(columns),
        gridTemplateRows: getGridFractionString(rows),
    }
}
