// @flow
import * as R from 'ramda'

export const arrayify = (num: number, item: any = null): number[] => {
    return Array.from({ length: num }, (v, i) => (item ? item : i))
}

export const mapFormValues = R.curry(
    (
        firstMap: { [string]: any },
        secondMap: { [string]: any },
        key: string,
    ) => {
        return firstMap[key] || secondMap[key]
    },
)

const moduloOne = R.modulo(R.__, 1)
const isTwo = R.equals(2)
const half = R.divide(R.__, 2)
const two = R.always(2)

export const isSquare = R.compose(
    R.equals(0),
    moduloOne,
    Math.sqrt,
)

export const getDivisor = R.cond([
    [isSquare, Math.sqrt],
    [isTwo, two],
    [R.T, half],
])

export const getProps = (name: string, base?: any) => (p: { [string]: any }) =>
    p[name] || base

const toPixels = n => `${n}px`
const mapToPixels = R.map(toPixels)
export const convertLength = R.curry((h: number, g: number) =>
    R.compose(
        R.head,
        mapToPixels,
        Array.of,
        parseInt,
        R.divide(g),
        getDivisor,
    )(h),
)
