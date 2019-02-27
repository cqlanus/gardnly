// @flow
import { createSelector } from 'reselect'
import type { State as AuthState } from '../redux/auth'
import type { State as GardenState } from '../redux/garden'
import type { State as BedState } from '../redux/bed'
import type { State as CropState } from '../redux/crop'
import type { State as PlantingState } from '../redux/planting'
import { createBedFactory } from '../data/bed'

type State = {
    auth: AuthState,
    garden: GardenState,
    bed: BedState,
    crop: CropState,
    planting: PlantingState,
}

/* AUTH */
export const selectUser = (state: State) => state.auth.profile
export const isAuthLoading = (state: State) => state.auth.loading

/* ENTITIES */
const getEntities = (state: State) => state.entities

/* GARDEN */
export const selectGarden = (state: State) => state.garden.currentGarden
export const getCurrentGarden = createSelector(
    [selectGarden, getEntities],
    (current, entities = {}) => {
        if (!current) {
            return null
        }
        // const { result } = current
        const garden = entities.garden[current]
        const beds = garden.beds.items.map(b => entities.bed[b]).map(b => {
            const plantings = b.plantings.items
                .map(p => entities.planting[p])
                .map(p => {
                    const crop = entities.crop[p.crop]
                    return { ...p, crop }
                })
            const updates = b.updates.items.map(u => entities.update[u])
            return { ...b, plantings, updates }
        })
        return { ...garden, beds }
    },
)
export const selectGardens = (state: State) => state.garden.gardens
export const selectAllGardens = createSelector(
    [selectGardens, getEntities],
    (current, entities = {}) => {
        if (!current) {
            return []
        }
        const gardens = current.map(id => entities.garden[id])
        return gardens

    }
)
export const isGardenLoading = (state: State) => state.garden.loading

/* BED */
export const selectBed = (state: State) => state.bed.selectedBed
export const getCurrentBed = createSelector(
    [selectBed, getEntities],
    (current, entities) => {
        if (!current) {
            return null
        }
        const { id } = current
        const bed = entities.bed[id]
        const plantings = bed.plantings.items
            .map(p => entities.planting[p])
            .map(p => {
                const crop = entities.crop[p.crop]
                return { ...p, crop }
            })
        const updates = bed.updates.items.map(u => entities.update[u])
        const builtBed = { ...bed, plantings, updates }
        return createBedFactory(builtBed)
    },
)
export const selectBeds = (state: State) => state.bed.beds
export const getCurrentBeds = createSelector(
    [getCurrentGarden, getEntities],
    (garden, entities) => {
        if (!garden) {
            return []
        }

        const { beds } = garden
        const gardenBeds = beds.map(createBedFactory)
        return gardenBeds
    }
)
export const isBedLoading = (state: State) => state.bed.loading
export const selectGrid = (state: State) =>
    createSelector([selectBed], bed => (bed ? bed.grid : []))
export const selectPlacedBeds = createSelector([selectBeds], beds =>
    beds.filter(b => b.hasDropped),
)
export const selectUnplacedBeds = createSelector([selectBeds], beds =>
    beds.filter(b => !b.hasDropped),
)

/* CROPS */
export const selectCrops = (state: State) => state.crop.crops

/* PlANTINGS */
export const selectPlantingId = (state: State) => state.planting.plantingId
export const selectPlanting = createSelector(
    [selectPlantingId, selectBed],
    (id, bed) => id && bed && bed.plantings.find(p => p.id === id),
)
