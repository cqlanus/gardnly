// @flow
import GardenService from './garden'
import BedService from './bed'
import PlantingService from './planting'

type APIConfig = {
    GardenService: GardenService,
    BedService: BedService,
    PlantingService: PlantingService,
}

class API {
    gardenService: GardenService
    bedService: BedService
    plantingService: PlantingService
    
    constructor({ GardenService, BedService, PlantingService }: APIConfig) {
        this.gardenService = GardenService
        this.bedService = BedService
        this.plantingService = PlantingService
    }
}

const config = {
    GardenService: new GardenService(),
    BedService: new BedService(),
    PlantingService: new PlantingService(),
}

const api = new API(config)
export default api