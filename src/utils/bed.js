// @flow
import type { BedRow, BedColumn } from '../data/bed'
import { isSquare, getDivisor } from './common'

export const mapOverRows = (row: number, column: number, crop: any) => (
    r: BedRow,
    idx: number,
) => {
    return row === idx ? r.map(mapOverColumns(column, crop)) : r
}

export const mapOverColumns = (column: number, crop: any) => (
    c: BedColumn,
    idx: number,
) => {
    return column === idx ? crop : c
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

export const defineCropHeightWidth = (numPerSqFt: number, grid: number) => {
    const divisor = getDivisor(numPerSqFt)
    const width = `${parseInt(grid / divisor, 10)}px`
    const height = `${parseInt(grid / divisor, 10)}px`
    return { width, height }
}

export const defineCropGridStyles = (numPerSqFt: number) => {
    const { rows, columns } = getRowsAndColumns(numPerSqFt)
    return {
        columns: getGridFractionString(columns),
        rows: getGridFractionString(rows),
    }
}
