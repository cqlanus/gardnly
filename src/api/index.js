// @flow
import GardenService from './garden'

type APIConfig = {
    GardenService: GardenService
}

class API {
    gardenService: GardenService
    constructor({ GardenService }: APIConfig) {
        this.gardenService = GardenService
    }
}

const config = {
    GardenService: new GardenService()
}

const api = new API(config)
export default api