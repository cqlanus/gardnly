// @flow
import type { CropPosition } from '../data/bed'
import * as R from 'ramda'
import { isSquare, getDivisor, convertLength, arrayify } from './common'

const getRowsAndColumns = (numPerSqFt: number) => {
    const divisor = getDivisor(numPerSqFt)
    if (isSquare(numPerSqFt)) {
        return { rows: divisor, columns: divisor }
    } else {
        return { rows: 2, columns: divisor }
    }
}

const getGridFractionString = (num: number) => {
    const string = arrayify(num, '1fr')
    return string.join(' ')
}

export const defineCropHeightWidth = (numPerSqFt: number, grid: number) => {
    const width = convertLength(numPerSqFt, grid)
    const height = width
    return { width, height }
}

export const defineCropGridStyles = (numPerSqFt: number) => {
    const { rows, columns } = getRowsAndColumns(numPerSqFt)
    return {
        columns: getGridFractionString(columns),
        rows: getGridFractionString(rows),
    }
}

const atStart = R.curry((row, column) => {
    const START = 0
    return row === START && column === START
})

const point = (r1, r2, c1, c2) => ({
    row: r1 + r2,
    column: c1 + c2,
})

export const getNeighbors = ({ row, column }: CropPosition) => {
    const rows = arrayify(2)
    const columns = arrayify(2)

    const neighbors = rows.reduce((acc, r) => {
        return acc.concat(
            columns.reduce((a, c) => {
                const p = point(r, row, c, column)
                return atStart(r, c) ? a : a.concat(p)
            }, []),
        )
    }, [])
    return neighbors
}

const arrayIncludes = (
    obj: CropPosition,
    arr: Array<CropPosition>,
): boolean => {
    const str = JSON.stringify(arr)
    const strObj = JSON.stringify(obj)
    return str.includes(strObj)
}

export const isOver = (props: {
    neighbors: Array<CropPosition>,
    position: CropPosition,
}): boolean => {
    const { neighbors, position } = props
    return arrayIncludes(position, neighbors)
}
