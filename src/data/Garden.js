// @flow
import type { Bed } from './bed'

export type Garden = {
    id: string,
    name: string,
    length: number,
    width: number,
    location: ?string,
    zipCode: ?string,
    beds: {
        items: Array<Bed>,
    },
    created: string,
}

export const GRID_SQUARE = 30

export const GARDEN_LOCATION = {
    backyard: 'Backyard',
    frontyard: 'Frontyard',
    communityGarden: 'Community Garden',
    other: 'Other',
}
