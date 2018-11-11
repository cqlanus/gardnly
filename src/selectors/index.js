// @flow
import { createSelector } from 'reselect'
import type { State as AuthState } from '../redux/auth'
import type { State as GardenState } from '../redux/garden'
import type { State as BedState } from '../redux/bed'
import type { State as CropState } from '../redux/crop'

type State = {
    auth: AuthState,
    garden: GardenState,
    bed: BedState,
    crop: CropState,
}

/* AUTH */
export const selectUser = (state: State) => state.auth.profile
export const isAuthLoading = (state: State) => state.auth.loading

/* GARDEN */
export const selectGarden = (state: State) => state.garden.currentGarden
export const selectGardens = (state: State) => state.garden.gardens
export const isGardenLoading = (state: State) => state.garden.loading

/* BED */
export const selectBed = (state: State) => state.bed.selectedBed
export const selectBeds = (state: State) => state.bed.beds
export const isBedLoading = (state: State) => state.bed.loading
export const selectGrid = (state: State) =>
    createSelector([selectBed], bed => (bed ? bed.grid : []))

/* CROPS */
export const selectCrops = (state: State) => state.crop.crops
