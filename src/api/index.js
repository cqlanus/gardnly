// @flow
import GardenService from './garden'
import BedService from './bed'
import PlantingService from './planting'
import CropService from './crop'
import AuthService from './auth'

type APIConfig = {
    GardenService: GardenService,
    BedService: BedService,
    PlantingService: PlantingService,
    CropService: CropService,
    AuthService: AuthService,
}

class API {
    gardenService: GardenService
    bedService: BedService
    plantingService: PlantingService
    cropService: CropService
    authService: AuthService

    constructor({
        GardenService,
        BedService,
        PlantingService,
        CropService,
        AuthService,
    }: APIConfig) {
        this.gardenService = GardenService
        this.bedService = BedService
        this.plantingService = PlantingService
        this.cropService = CropService
        this.authService = AuthService
    }
}

const config = {
    GardenService: new GardenService(),
    BedService: new BedService(),
    PlantingService: new PlantingService(),
    CropService: new CropService(),
    AuthService: new AuthService(),
}

const api = new API(config)
export default api
