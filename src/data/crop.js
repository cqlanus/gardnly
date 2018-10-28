// @flow

import Images from '../resources/Images'

export const mockCrops = [
    {
        name: 'Strawberry',
        id: '1',
        numPerSqFt: 4,
        cropImg: Images.strawberry,
    },
    {
        name: 'Beet',
        id: '2',
        numPerSqFt: 9,
        cropImg: Images.beet,
    },
    {
        name: 'Tomato',
        id: '3',
        numPerSqFt: 1,
        cropImg:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/005-tomato-1.svg',
    },
    {
        name: 'Peas',
        id: '4',
        numPerSqFt: 9,
        cropImg: Images.peas,
    },
    {
        name: 'Carrot',
        id: '5',
        numPerSqFt: 16,
        cropImg: Images.carrot,
    },
    {
        name: 'Cauliflower',
        id: '6',
        numPerSqFt: 1,
        cropImg: Images.cauliflower,
    },
]

const LEVEL = {
    LOW: 'LOW',
    MED: 'MED',
    HIGH: 'HIGH',
}

const EXPOSURE = {
    FULL: 'FULL',
    PART: 'PART',
    SHADE: 'SHADE',
}

export const crops = [
    {
        commonName: 'Arugula',
        latinName: 'Eruca sativa',
        family: 'Cabbage',
        seedDepth: 0.25,
        minGermTemp: 40,
        maxGermTemp: 55,
        minGermTime: 5,
        maxGermTime: 7,
        sowOutdoorsBeforeLastFrost: 4,
        sowOutdoorsBeforeFirstFrost: 8,
        minSoilPh: 6.0,
        maxSoilPh: 7.0,
        minGrowTemp: 50,
        maxGrowTemp: 65,
        seedSpacing: 1,
        thinTo: 6,
        rowSpacing: 6,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.LOW,
        phosphorusReq: LEVEL.LOW,
        potassiumReq: LEVEL.LOW,
        sunExposure: EXPOSURE.FULL,
        minDaysToMaturity: 20,
        maxDaysToMaturity: 30,
        numPerSqFt: 4,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/Arugula.svg',
    },
    {
        commonName: 'Beans (bush)',
        latinName: 'Phaseolus vulgaris',
        family: 'Pea',
        seedDepth: 1.0,
        minGermTemp: 75,
        maxGermTemp: 85,
        minGermTime: 7,
        maxGermTime: 10,
        sowOutdoorsBeforeLastFrost: 0,
        sowOutdoorsBeforeFirstFrost: 11,
        minSoilPh: 6.5,
        maxSoilPh: 7.5,
        minGrowTemp: 60,
        maxGrowTemp: 65,
        seedSpacing: 4,
        rowSpacing: 8,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.LOW,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        minFlowerToHarvestTime: 10,
        maxFlowerToHarvestTime: 14,
        minDaysToMaturity: 50,
        maxDaysToMaturity: 70,
        numPerSqFt: 9,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/Peas.svg',
    },
    {
        commonName: 'Beans (fava)',
        latinName: 'Vicia faba',
        family: 'Pea',
        seedDepth: 1.0,
        minGermTemp: 55,
        maxGermTemp: 75,
        minGermTime: 7,
        maxGermTime: 10,
        sowOutdoorsBeforeLastFrost: 0,
        sowOutdoorsBeforeFirstFrost: 11,
        minSoilPh: 6.5,
        maxSoilPh: 7.5,
        minGrowTemp: 60,
        maxGrowTemp: 65,
        seedSpacing: 4,
        rowSpacing: 8,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.LOW,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        minFlowerToHarvestTime: 10,
        maxFlowerToHarvestTime: 14,
        baseGdd: 50,
        minDaysToMaturity: 50,
        maxDaysToMaturity: 70,
        numPerSqFt: 9,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/013-peas.svg',
    },
    {
        commonName: 'Beans (pole)',
        latinName: 'Phaseolus vulgaris',
        family: 'Pea',
        seedDepth: 1,
        minGermTemp: 65,
        maxGermTemp: 85,
        minGermTime: 7,
        maxGermTime: 10,
        sowOutdoorsBeforeLastFrost: 0,
        sowOutdoorsBeforeFirstFrost: 11,
        minSoilPh: 6.5,
        maxSoilPh: 7.5,
        minGrowTemp: 60,
        maxGrowTemp: 65,
        seedSpacing: 3,
        waterFreq: LEVEL.MED,
        sunExposure: EXPOSURE.FULL,
        nitrogenReq: LEVEL.LOW,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        minFlowerToHarvestTime: 10,
        maxFlowerToHarvestTime: 14,
        baseGdd: 50,
        minDaysToMaturity: 45,
        maxDaysToMaturity: 60,
        numPerSqFt: 9,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/Raw+Cowpea.svg',
    },
    {
        commonName: 'Beets',
        latinName: 'Beta vulgaris',
        family: 'Beet',
        seedDepth: 0.5,
        minGermTemp: 75,
        maxGermTemp: 85,
        minGermTime: 5,
        sowIndoorsBeforeLastFrost: 5,
        transplantBeforeLastFrost: 2,
        sowOutdoorsBeforeLastFrost: 4,
        sowOutdoorsBeforeFirstFrost: 10,
        minSoilPh: 6.0,
        maxSoilPh: 7.5,
        minGrowTemp: 65,
        maxGrowTemp: 75,
        seedSpacing: 3,
        waterFreq: LEVEL.MED,
        sunExposure: EXPOSURE.FULL,
        nitrogenReq: LEVEL.LOW,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        gddToMaturity: 1253,
        baseGdd: 40,
        minDaysToMaturity: 50,
        maxDaysToMaturity: 70,
        numPerSqFt: 9,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/beet2.svg',
    },
    {
        commonName: 'Broccoli',
        latinName: 'Brassica olerecea',
        family: 'Cabbage',
        seedDepth: 0.25,
        minGermTemp: 68,
        maxGermTemp: 85,
        minGermTime: 4,
        maxGermTime: 7,
        sowIndoorsBeforeLastFrost: 8,
        transplantBeforeLastFrost: 2,
        sowOutdoorsBeforeFirstFrost: 16,
        minSoilPh: 6.5,
        maxSoilPh: 7.5,
        minGrowTemp: 60,
        maxGrowTemp: 65,
        seedSpacing: 16,
        rowSpacing: 12,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.MED,
        phosphorusReq: LEVEL.HIGH,
        potassiumReq: LEVEL.HIGH,
        gddToMaturity: 571,
        baseGdd: 40,
        minDaysToMaturity: 50,
        maxDaysToMaturity: 65,
        numPerSqFt: 1,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/073-broccoli-1.svg',
    },
    {
        commonName: 'Brussels Sprouts',
        latinName: 'Brassica olerecea',
        family: 'Cabbage',
        seedDepth: 0.25,
        minGermTemp: 75,
        maxGermTemp: 85,
        minGermTime: 5,
        maxGermTime: 8,
        sowIndoorsBeforeLastFrost: 6,
        transplantBeforeLastFrost: 2,
        sowOutdoorsBeforeFirstFrost: 16,
        minSoilPh: 6.0,
        maxSoilPh: 6.8,
        minGrowTemp: 60,
        maxGrowTemp: 65,
        seedSpacing: 16,
        rowSpacing: 12,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.MED,
        phosphorusReq: LEVEL.HIGH,
        potassiumReq: LEVEL.HIGH,
        baseGdd: 40,
        minDaysToMaturity: 80,
        maxDaysToMaturity: 100,
        numPerSqFt: 1,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/brussels-sprouts.svg',
    },
    {
        commonName: 'Cabbage',
        latinName: 'Brassica olerecea',
        family: 'Cabbage',
        seedDepth: 0.25,
        minGermTemp: 75,
        maxGermTemp: 85,
        minGermTime: 5,
        maxGermTime: 5,
        sowIndoorsBeforeLastFrost: 6,
        transplantBeforeLastFrost: 2,
        sowOutdoorsBeforeFirstFrost: 12,
        minSoilPh: 6.0,
        maxSoilPh: 7.5,
        minGrowTemp: 60,
        maxGrowTemp: 65,
        seedSpacing: 12,
        rowSpacing: 12,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.HIGH,
        nitrogenReq: LEVEL.HIGH,
        phosphorusReq: LEVEL.HIGH,
        potassiumReq: LEVEL.HIGH,
        baseGdd: 40,
        minDaysToMaturity: 60,
        maxDaysToMaturity: 90,
        numPerSqFt: 1,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/cabbage.svg',
    },
    {
        commonName: 'Carrot',
        latinName: 'Daucus carota',
        family: 'Carrot',
        seedDepth: 0.25,
        minGermTemp: 75,
        minGermTime: 6,
        maxGermTime: 6,
        sowOutdoorsBeforeLastFrost: 2,
        sowOutdoorsBeforeFirstFrost: 12,
        minSoilPh: 5.5,
        maxSoilPh: 6.5,
        minGrowTemp: 60,
        maxGrowTemp: 70,
        seedSpacing: 2,
        rowSpacing: 9,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.MED,
        phosphorusReq: LEVEL.LOW,
        potassiumReq: LEVEL.LOW,
        gddToMaturity: 550,
        baseGdd: 38,
        minDaysToMaturity: 60,
        maxDaysToMaturity: 80,
        numPerSqFt: 16,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/Carrot.svg',
    },
    {
        commonName: 'Cauliflower',
        latinName: 'Brassica olerecea',
        family: 'Cabbage',
        seedDepth: 0.25,
        minGermTemp: 80,
        minGermTime: 6,
        maxGermTime: 6,
        sowIndoorsBeforeLastFrost: 6,
        transplantBeforeLastFrost: 2,
        sowOutdoorsBeforeLastFrost: 0,
        sowOutdoorsBeforeFirstFrost: 12,
        minSoilPh: 6.5,
        maxSoilPh: 7.5,
        minGrowTemp: 60,
        maxGrowTemp: 70,
        seedSpacing: 15,
        rowSpacing: 12,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.HIGH,
        phosphorusReq: LEVEL.HIGH,
        potassiumReq: LEVEL.HIGH,
        baseGdd: 40,
        minDaysToMaturity: 55,
        maxDaysToMaturity: 80,
        numPerSqFt: 1,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/070-cauliflower.svg',
    },
    {
        commonName: 'Celery',
        latinName: 'Apium graveolens',
        family: 'Carrot',
        seedDepth: 0,
        minGermTemp: 70,
        minGermTime: 7,
        sowIndoorsBeforeLastFrost: 10,
        transplantBeforeLastFrost: -1,
        sowOutdoorsBeforeFirstFrost: 20,
        minSoilPh: 6.0,
        maxSoilPh: 7.0,
        minGrowTemp: 60,
        maxGrowTemp: 70,
        seedSpacing: 8,
        rowSpacing: 12,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.HIGH,
        nitrogenReq: LEVEL.HIGH,
        phosphorusReq: LEVEL.HIGH,
        potassiumReq: LEVEL.HIGH,
        minDaysToMaturity: 80,
        maxDaysToMaturity: 100,
        numPerSqFt: 4,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/Celery(1).svg',
    },
    {
        commonName: 'Corn',
        latinName: 'Zea mays',
        family: 'Grass',
        seedDepth: 1.0,
        minGermTemp: 80,
        minGermTime: 4,
        sowOutdoorsBeforeLastFrost: -1,
        sowOutdoorsBeforeFirstFrost: 14,
        minSoilPh: 6.0,
        maxSoilPh: 7.0,
        minGrowTemp: 65,
        maxGrowTemp: 75,
        seedSpacing: 8,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.HIGH,
        nitrogenReq: LEVEL.HIGH,
        phosphorusReq: LEVEL.HIGH,
        potassiumReq: LEVEL.HIGH,
        minFlowerToHarvestTime: 18,
        maxFlowerToHarvestTime: 21,
        gddToMaturity: 1667,
        baseGdd: 50,
        minDaysToMaturity: 70,
        maxDaysToMaturity: 105,
        numPerSqFt: 4,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/036-corn.svg',
    },
    {
        commonName: 'Cucumber',
        latinName: 'Cucumis sativus',
        family: 'Cucumber',
        seedDepth: 0.5,
        minGermTemp: 80,
        maxGermTemp: 95,
        minGermTime: 3,
        maxGermTime: 4,
        sowIndoorsBeforeLastFrost: 3,
        transplantBeforeLastFrost: -2,
        sowOutdoorsBeforeLastFrost: 0,
        sowOutdoorsBeforeFirstFrost: 12,
        minSoilPh: 6.0,
        maxSoilPh: 7.0,
        minGrowTemp: 70,
        maxGrowTemp: 80,
        seedSpacing: 18,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.HIGH,
        nitrogenReq: LEVEL.MED,
        phosphorusReq: LEVEL.HIGH,
        potassiumReq: LEVEL.HIGH,
        minFlowerToHarvestTime: 8,
        maxFlowerToHarvestTime: 10,
        gddToMaturity: 1207,
        baseGdd: 55,
        minDaysToMaturity: 55,
        maxDaysToMaturity: 65,
        numPerSqFt: 2,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/035-cucumber-2.svg',
    },
    {
        commonName: 'Eggplant',
        latinName: 'Solanum melongena',
        family: 'Tomato',
        seedDepth: 0.25,
        minGermTemp: 85,
        minGermTime: 7,
        sowIndoorsBeforeLastFrost: 6,
        transplantBeforeLastFrost: -2,
        sowOutdoorsBeforeFirstFrost: 18,
        minSoilPh: 5.5,
        maxSoilPh: 7.0,
        minGrowTemp: 80,
        maxGrowTemp: 90,
        seedSpacing: 18,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.HIGH,
        nitrogenReq: LEVEL.MED,
        phosphorusReq: LEVEL.HIGH,
        potassiumReq: LEVEL.HIGH,
        minFlowerToHarvestTime: 40,
        maxFlowerToHarvestTime: 50,
        baseGdd: 60,
        minDaysToMaturity: 75,
        maxDaysToMaturity: 90,
        numPerSqFt: 1,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/Eggplant.svg',
    },
    {
        commonName: 'Garlic',
        latinName: 'Allium sativum',
        family: 'Onion',
        seedDepth: 2,
        minGermTemp: 55,
        minGermTime: 0,
        sowOutdoorsBeforeFirstFrost: 10,
        minSoilPh: 6.0,
        maxSoilPh: 7.0,
        minGrowTemp: 55,
        maxGrowTemp: 75,
        seedSpacing: 6,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.LOW,
        nitrogenReq: LEVEL.MED,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        minDaysToMaturity: 90,
        numPerSqFt: 9,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/028-garlic-2.svg',
    },
    {
        commonName: 'Kale',
        latinName: 'Brassica olerecea',
        family: 'Cabbage',
        seedDepth: 0.25,
        minGermTemp: 45,
        maxGermTemp: 95,
        minGermTime: 5,
        maxGermTime: 7,
        sowIndoorsBeforeLastFrost: 6,
        transplantBeforeLastFrost: 2,
        sowOutdoorsBeforeLastFrost: 0,
        sowOutdoorsBeforeFirstFrost: 14,
        minSoilPh: 6.0,
        maxSoilPh: 7.0,
        minGrowTemp: 60,
        maxGrowTemp: 65,
        seedSpacing: 16,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.HIGH,
        nitrogenReq: LEVEL.MED,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        baseGdd: 40,
        minDaysToMaturity: 50,
        maxDaysToMaturity: 70,
        numPerSqFt: 1,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/017-oak.svg',
    },
    {
        commonName: 'Leeks',
        latinName: 'Allium ampeloprasum',
        family: 'Onion',
        seedDepth: 0.25,
        minGermTemp: 75,
        minGermTime: 5,
        maxGermTime: 7,
        sowIndoorsBeforeLastFrost: 8,
        transplantBeforeLastFrost: 2,
        minSoilPh: 6.0,
        maxSoilPh: 7.5,
        minGrowTemp: 60,
        seedSpacing: 6,
        rowSpacing: 12,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.MED,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        baseGdd: 40,
        minDaysToMaturity: 100,
        maxDaysToMaturity: 120,
        numPerSqFt: 9,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/leek.svg',
    },
    {
        commonName: 'Lettuce (leaf)',
        latinName: 'Lactuca sativa',
        family: 'Sunflower',
        seedDepth: 0.25,
        minGermTemp: 40,
        maxGermTemp: 60,
        minGermTime: 7,
        maxGermTime: 14,
        sowIndoorsBeforeLastFrost: 6,
        transplantBeforeLastFrost: 2,
        sowOutdoorsBeforeLastFrost: 0,
        sowOutdoorsBeforeFirstFrost: 11,
        minSoilPh: 6.5,
        maxSoilPh: 7.0,
        minGrowTemp: 55,
        maxGrowTemp: 65,
        seedSpacing: 1,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.HIGH,
        phosphorusReq: LEVEL.HIGH,
        potassiumReq: LEVEL.HIGH,
        baseGdd: 40,
        gddToMaturity: 1367,
        minDaysToMaturity: 45,
        maxDaysToMaturity: 60,
        numPerSqFt: 6,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/lettuce-leaf.svg',
    },
    {
        commonName: 'Lettuce (head)',
        latinName: 'Lactuca sativa',
        family: 'Sunflower',
        seedDepth: 0.25,
        minGermTemp: 40,
        maxGermTemp: 60,
        minGermTime: 7,
        maxGermTime: 14,
        sowIndoorsBeforeLastFrost: 6,
        transplantBeforeLastFrost: 2,
        sowOutdoorsBeforeLastFrost: 0,
        sowOutdoorsBeforeFirstFrost: 12,
        minSoilPh: 6.5,
        maxSoilPh: 7.0,
        minGrowTemp: 55,
        maxGrowTemp: 65,
        seedSpacing: 10,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.HIGH,
        phosphorusReq: LEVEL.HIGH,
        potassiumReq: LEVEL.HIGH,
        baseGdd: 40,
        gddToMaturity: 1367,
        minDaysToMaturity: 60,
        maxDaysToMaturity: 70,
        numPerSqFt: 2,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/022-leaf.svg',
    },
    {
        commonName: 'Melon',
        latinName: 'Cucumis melo',
        family: 'Cucumber',
        seedDepth: 0.5,
        minGermTemp: 80,
        maxGermTemp: 90,
        minGermTime: 3,
        maxGermTime: 5,
        sowIndoorsBeforeLastFrost: 3,
        transplantBeforeLastFrost: -2,
        sowOutdoorsBeforeLastFrost: -2,
        sowOutdoorsBeforeFirstFrost: 16,
        minSoilPh: 6.0,
        maxSoilPh: 7.0,
        minGrowTemp: 70,
        maxGrowTemp: 85,
        seedSpacing: 16,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.LOW,
        phosphorusReq: LEVEL.HIGH,
        potassiumReq: LEVEL.HIGH,
        minFlowerToHarvestTime: 40,
        maxFlowerToHarvestTime: 50,
        baseGdd: 50,
        gddToMaturity: 775,
        minDaysToMaturity: 75,
        maxDaysToMaturity: 100,
        numPerSqFt: 1,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/melon.svg',
    },
    {
        commonName: 'Mustard',
        latinName: 'Brassica juncea',
        family: 'Cabbage',
        seedDepth: 0.25,
        minGermTemp: 65,
        maxGermTemp: 70,
        minGermTime: 4,
        maxGermTime: 6,
        sowIndoorsBeforeLastFrost: 4,
        transplantBeforeLastFrost: 2,
        sowOutdoorsBeforeFirstFrost: 10,
        minSoilPh: 5.5,
        maxSoilPh: 7.0,
        minGrowTemp: 50,
        maxGrowTemp: 60,
        seedSpacing: 6,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.HIGH,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        gddToMaturity: 660,
        baseGdd: 40,
        minDaysToMaturity: 30,
        maxDaysToMaturity: 40,
        numPerSqFt: 4,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/arugula.svg',
    },
    {
        commonName: 'Okra',
        latinName: 'Abelmoschus esculentus',
        family: 'Mallow',
        seedDepth: 0.75,
        minGermTemp: 80,
        maxGermTemp: 95,
        minGermTime: 5,
        maxGermTime: 14,
        sowIndoorsBeforeLastFrost: 5,
        transplantBeforeLastFrost: -1,
        minSoilPh: 6.0,
        maxSoilPh: 8.0,
        minGrowTemp: 70,
        maxGrowTemp: 90,
        seedSpacing: 12,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.LOW,
        nitrogenReq: LEVEL.MED,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        baseGdd: 60,
        minDaysToMaturity: 50,
        maxDaysToMaturity: 65,
        numPerSqFt: 1,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/Ladyfinger.svg',
    },
    {
        commonName: 'Onion',
        latinName: 'Allium cepa',
        family: 'Onion',
        seedDepth: 0.5,
        minGermTemp: 65,
        maxGermTemp: 85,
        minGermTime: 4,
        maxGermTime: 5,
        sowIndoorsBeforeLastFrost: 8,
        transplantBeforeLastFrost: 3,
        minSoilPh: 6.0,
        maxSoilPh: 7.5,
        minGrowTemp: 55,
        maxGrowTemp: 75,
        seedSpacing: 3,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.MED,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        baseGdd: 35,
        gddToMaturity: 600,
        minDaysToMaturity: 100,
        maxDaysToMaturity: 120,
        numPerSqFt: 9,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/016-onion.svg',
    },
    {
        commonName: 'Parsnips',
        latinName: 'Pastinaca sativa',
        family: 'Carrot',
        seedDepth: 0.5,
        minGermTemp: 65,
        maxGermTemp: 75,
        minGermTime: 12,
        maxGermTime: 14,
        sowOutdoorsBeforeLastFrost: 3,
        sowOutdoorsBeforeFirstFrost: 14,
        minSoilPh: 6.0,
        maxSoilPh: 7.0,
        minGrowTemp: 60,
        maxGrowTemp: 65,
        seedSpacing: 4,
        rowSpacing: 4,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.HIGH,
        phosphorusReq: LEVEL.LOW,
        potassiumReq: LEVEL.MED,
        baseGdd: 40,
        minDaysToMaturity: 110,
        maxDaysToMaturity: 130,
        numPerSqFt: 9,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/034-parsnip.svg',
    },
    {
        commonName: 'Peas',
        latinName: 'Pisum sativum',
        family: 'Pea',
        seedDepth: 1,
        minGermTemp: 40,
        maxGermTemp: 75,
        minGermTime: 14,
        sowOutdoorsBeforeLastFrost: 6,
        sowOutdoorsBeforeFirstFrost: 10,
        minSoilPh: 6.0,
        maxSoilPh: 7.0,
        minGrowTemp: 60,
        maxGrowTemp: 65,
        seedSpacing: 1,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.LOW,
        phosphorusReq: LEVEL.LOW,
        potassiumReq: LEVEL.LOW,
        minFlowerToHarvestTime: 8,
        maxFlowerToHarvestTime: 10,
        gddToMaturity: 2381,
        baseGdd: 40,
        minDaysToMaturity: 55,
        maxDaysToMaturity: 85,
        numPerSqFt: 9,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/013-peas.svg',
    },
    {
        commonName: 'Peppers',
        latinName: 'Capsicum annuum',
        family: 'Tomato',
        seedDepth: 0.25,
        minGermTemp: 80,
        maxGermTemp: 85,
        minGermTime: 6,
        maxGermTime: 8,
        sowIndoorsBeforeLastFrost: 8,
        transplantBeforeLastFrost: -2,
        sowOutdoorsBeforeFirstFrost: 16,
        minSoilPh: 5.5,
        maxSoilPh: 7.0,
        minGrowTemp: 70,
        maxGrowTemp: 85,
        seedSpacing: 12,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.MED,
        phosphorusReq: LEVEL.HIGH,
        potassiumReq: LEVEL.HIGH,
        minFlowerToHarvestTime: 40,
        maxFlowerToHarvestTime: 50,
        gddToMaturity: 2021,
        baseGdd: 50,
        minDaysToMaturity: 60,
        maxDaysToMaturity: 90,
        numPerSqFt: 1,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/012-pepper-1.svg',
    },
    {
        commonName: 'Peppers',
        latinName: 'Capsicum annuum',
        family: 'Tomato',
        seedDepth: 0.25,
        minGermTemp: 80,
        maxGermTemp: 85,
        minGermTime: 6,
        maxGermTime: 8,
        sowIndoorsBeforeLastFrost: 8,
        transplantBeforeLastFrost: -2,
        sowOutdoorsBeforeFirstFrost: 16,
        minSoilPh: 5.5,
        maxSoilPh: 7.0,
        minGrowTemp: 70,
        maxGrowTemp: 85,
        seedSpacing: 12,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.MED,
        phosphorusReq: LEVEL.HIGH,
        potassiumReq: LEVEL.HIGH,
        minFlowerToHarvestTime: 40,
        maxFlowerToHarvestTime: 50,
        gddToMaturity: 2021,
        baseGdd: 50,
        minDaysToMaturity: 60,
        maxDaysToMaturity: 90,
        numPerSqFt: 1,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/040-capsicum-1.svg',
    },
    {
        commonName: 'Potatoes',
        latinName: 'Solanum tuberosum',
        family: 'Tomato',
        seedDepth: 4,
        minGermTemp: 45,
        minGermTime: 0,
        sowOutdoorsBeforeLastFrost: 3,
        sowOutdoorsBeforeFirstFrost: 13,
        minSoilPh: 5.0,
        maxSoilPh: 6.5,
        minGrowTemp: 60,
        maxGrowTemp: 65,
        seedSpacing: 12,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.HIGH,
        phosphorusReq: LEVEL.HIGH,
        potassiumReq: LEVEL.HIGH,
        gddToMaturity: 1951,
        baseGdd: 40,
        minDaysToMaturity: 90,
        maxDaysToMaturity: 120,
        numPerSqFt: 4,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/009-potato-1.svg',
    },
    {
        commonName: 'Pumpkins',
        latinName: 'Cucurbita pepo',
        family: 'Cucumber',
        seedDepth: 1,
        minGermTemp: 70,
        maxGermTemp: 90,
        minGermTime: 6,
        maxGermTime: 10,
        sowIndoorsBeforeLastFrost: 4,
        sowOutdoorsBeforeLastFrost: -2,
        sowOutdoorsBeforeFirstFrost: 16,
        minSoilPh: 5.5,
        maxSoilPh: 6.5,
        minGrowTemp: 65,
        maxGrowTemp: 75,
        seedSpacing: 18,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.HIGH,
        nitrogenReq: LEVEL.HIGH,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        minFlowerToHarvestTime: 40,
        maxFlowerToHarvestTime: 60,
        minDaysToMaturity: 85,
        maxDaysToMaturity: 120,
        numPerSqFt: 1,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/008-pumpkin.svg',
    },
    {
        commonName: 'Radishes',
        latinName: 'Raphanus sativus',
        family: 'Cabbage',
        seedDepth: 0.5,
        minGermTemp: 45,
        maxGermTemp: 90,
        minGermTime: 4,
        maxGermTime: 12,
        sowOutdoorsBeforeLastFrost: 3,
        sowOutdoorsBeforeFirstFrost: 8,
        minSoilPh: 6.0,
        maxSoilPh: 7.0,
        minGrowTemp: 60,
        maxGrowTemp: 65,
        seedSpacing: 1,
        thinTo: 4,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.HIGH,
        nitrogenReq: LEVEL.LOW,
        phosphorusReq: LEVEL.LOW,
        potassiumReq: LEVEL.LOW,
        baseGdd: 40,
        minDaysToMaturity: 25,
        maxDaysToMaturity: 40,
        numPerSqFt: 16,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/radish.svg',
    },
    {
        commonName: 'Rhubarb',
        latinName: 'Rheum x culturoum',
        family: 'Buckwheat',
        seedDepth: 3.0,
        minGermTemp: 40,
        maxGermTemp: 60,
        minGermTime: 0,
        sowOutdoorsBeforeFirstFrost: 3,
        minSoilPh: 5.5,
        maxSoilPh: 6.5,
        minGrowTemp: 40,
        maxGrowTemp: 6.5,
        seedSpacing: 24,
        sunExposure: EXPOSURE.PART,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.LOW,
        phosphorusReq: LEVEL.LOW,
        potassiumReq: LEVEL.LOW,
        numPerSqFt: 1,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/Chard.svg',
    },
    {
        commonName: 'Rutabaga',
        latinName: 'Brassica napus',
        family: 'Cabbage',
        seedDepth: 0.5,
        minGermTemp: 60,
        maxGermTemp: 85,
        minGermTime: 3,
        maxGermTime: 5,
        sowOutdoorsBeforeLastFrost: 3,
        minSoilPh: 6.4,
        maxSoilPh: 7.2,
        minGrowTemp: 60,
        maxGrowTemp: 65,
        seedSpacing: 8,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.LOW,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        minDaysToMaturity: 60,
        maxDaysToMaturity: 90,
        numPerSqFt: 9,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/003-turnip-1.svg',
    },
    {
        commonName: 'Spinach',
        latinName: 'Spinacia oleracea',
        family: 'Beet',
        seedDepth: 0.5,
        minGermTemp: 50,
        maxGermTemp: 75,
        minGermTime: 7,
        maxGermTime: 14,
        sowIndoorsBeforeLastFrost: 5,
        transplantBeforeLastFrost: 2,
        sowOutdoorsBeforeFirstFrost: 8,
        sowOutdoorsBeforeLastFrost: 3,
        minSoilPh: 6.5,
        maxSoilPh: 7.5,
        minGrowTemp: 60,
        maxGrowTemp: 65,
        seedSpacing: 12,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.LOW,
        nitrogenReq: LEVEL.MED,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        baseGdd: 40,
        minDaysToMaturity: 45,
        maxDaysToMaturity: 60,
        numPerSqFt: 9,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/Spinach+Leaves.svg',
    },
    {
        commonName: 'Squash (summer)',
        latinName: 'Cucurbita pepo',
        family: 'Cucumber',
        seedDepth: 1.0,
        minGermTemp: 70,
        maxGermTemp: 95,
        minGermTime: 6,
        maxGermTime: 10,
        sowIndoorsBeforeLastFrost: 4,
        transplantBeforeLastFrost: -1,
        sowOutdoorsBeforeFirstFrost: 10,
        minSoilPh: 6.0,
        maxSoilPh: 6.5,
        minGrowTemp: 65,
        maxGrowTemp: 75,
        seedSpacing: 18,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.HIGH,
        nitrogenReq: LEVEL.HIGH,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        minFlowerToHarvestTime: 4,
        maxFlowerToHarvestTime: 5,
        baseGdd: 50,
        minDaysToMaturity: 50,
        maxDaysToMaturity: 60,
        numPerSqFt: 1,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/zuke.svg',
    },
    {
        commonName: 'Squash (winter)',
        latinName: 'Cucurbita spp.',
        family: 'Cucumber',
        seedDepth: 1.0,
        minGermTemp: 70,
        maxGermTemp: 90,
        minGermTime: 6,
        maxGermTime: 10,
        sowIndoorsBeforeLastFrost: 4,
        transplantBeforeLastFrost: -1,
        sowOutdoorsBeforeFirstFrost: 16,
        minSoilPh: 5.5,
        maxSoilPh: 6.5,
        minGrowTemp: 65,
        maxGrowTemp: 75,
        seedSpacing: 18,
        sunExposure: EXPOSURE.PART,
        waterFreq: LEVEL.HIGH,
        nitrogenReq: LEVEL.HIGH,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        minFlowerToHarvestTime: 40,
        maxFlowerToHarvestTime: 60,
        baseGdd: 50,
        minDaysToMaturity: 85,
        maxDaysToMaturity: 120,
        numPerSqFt: 1,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/butternut-squash.svg',
    },
    {
        commonName: 'Strawberries',
        latinName: 'Fragaria spp.',
        family: 'Rose',
        seedDepth: 0,
        minGermTemp: 40,
        maxGermTemp: 60,
        minGermTime: 0,
        sowOutdoorsBeforeLastFrost: 3,
        minSoilPh: 6.0,
        maxSoilPh: 6.8,
        minGrowTemp: 60,
        maxGrowTemp: 80,
        seedSpacing: 12,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.MED,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        baseGdd: 39,
        numPerSqFt: 4,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/006-strawberry-1.svg',
    },
    {
        commonName: 'Sweet Potatoes',
        latinName: 'Ipomoea batatas',
        family: 'Morning glory',
        seedDepth: 0,
        minGermTemp: 0,
        minGermTime: 0,
        sowOutdoorsBeforeLastFrost: -2,
        sowOutdoorsBeforeFirstFrost: 25,
        minSoilPh: 5.5,
        maxSoilPh: 6.5,
        minGrowTemp: 65,
        maxGrowTemp: 90,
        seedSpacing: 18,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.LOW,
        nitrogenReq: LEVEL.LOW,
        phosphorusReq: LEVEL.LOW,
        potassiumReq: LEVEL.LOW,
        baseGdd: 60,
        gddToMaturity: 2600,
        minDaysToMaturity: 100,
        maxDaysToMaturity: 125,
        numPerSqFt: 4,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/potato.svg',
    },
    {
        commonName: 'Swiss Chard',
        latinName: 'Beta vulgaris',
        family: 'Beet',
        seedDepth: 0.5,
        minGermTemp: 50,
        maxGermTemp: 85,
        minGermTime: 5,
        maxGermTime: 7,
        sowIndoorsBeforeLastFrost: 4,
        transplantBeforeLastFrost: 2,
        minSoilPh: 6.0,
        maxSoilPh: 7.0,
        minGrowTemp: 50,
        maxGrowTemp: 70,
        seedSpacing: 8,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.LOW,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        minDaysToMaturity: 50,
        maxDaysToMaturity: 60,
        numPerSqFt: 4,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/Swiss+Chard.svg',
    },
    {
        commonName: 'Tomatillos',
        latinName: 'Physalis ixocarpa',
        family: 'Tomato',
        seedDepth: 0.25,
        minGermTemp: 70,
        maxGermTemp: 80,
        minGermTime: 7,
        maxGermTime: 14,
        sowIndoorsBeforeLastFrost: 4,
        transplantBeforeLastFrost: -2,
        minSoilPh: 6.0,
        maxSoilPh: 7.0,
        minGrowTemp: 60,
        maxGrowTemp: 80,
        seedSpacing: 3,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.LOW,
        phosphorusReq: LEVEL.LOW,
        potassiumReq: LEVEL.LOW,
        minDaysToMaturity: 75,
        maxDaysToMaturity: 100,
        numPerSqFt: 1,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/Hokkaido+Squash.svg',
    },
    {
        commonName: 'Tomatoes',
        latinName: 'Lycoperscium esculentum',
        family: 'Tomato',
        seedDepth: 0.5,
        minGermTemp: 80,
        minGermTime: 6,
        maxGermTime: 8,
        sowIndoorsBeforeLastFrost: 6,
        transplantBeforeLastFrost: -2,
        sowOutdoorsBeforeFirstFrost: 19,
        minSoilPh: 5.8,
        maxSoilPh: 7.0,
        minGrowTemp: 70,
        seedSpacing: 15,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.HIGH,
        nitrogenReq: LEVEL.MED,
        phosphorusReq: LEVEL.HIGH,
        potassiumReq: LEVEL.HIGH,
        minFlowerToHarvestTime: 45,
        maxFlowerToHarvestTime: 50,
        baseGdd: 50,
        gddToMaturity: 1300,
        minDaysToMaturity: 70,
        maxDaysToMaturity: 90,
        numPerSqFt: 1,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/005-tomato-1.svg',
    },
    {
        commonName: 'Turnips',
        latinName: 'Brassica rapa',
        family: 'Cabbage',
        seedDepth: 0.5,
        minGermTemp: 50,
        maxGermTemp: 95,
        minGermTime: 2,
        maxGermTime: 5,
        sowOutdoorsBeforeLastFrost: 3,
        minSoilPh: 5.5,
        maxSoilPh: 6.8,
        minGrowTemp: 40,
        maxGrowTemp: 75,
        seedSpacing: 1,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.LOW,
        phosphorusReq: LEVEL.LOW,
        potassiumReq: LEVEL.LOW,
        minDaysToMaturity: 45,
        maxDaysToMaturity: 70,
        numPerSqFt: 9,
        image: 'https://s3.us-east-2.amazonaws.com/gardnlycrops/Turnip.svg',
    },
    {
        commonName: 'Watermelon',
        latinName: 'Citrullus lanatus',
        family: 'Cucumber',
        seedDepth: 0.5,
        minGermTemp: 80,
        maxGermTemp: 90,
        minGermTime: 3,
        maxGermTime: 10,
        sowIndoorsBeforeLastFrost: 3,
        transplantBeforeLastFrost: -2,
        sowOutdoorsBeforeFirstFrost: 16,
        minSoilPh: 6.0,
        maxSoilPh: 7.0,
        minGrowTemp: 70,
        maxGrowTemp: 85,
        seedSpacing: 18,
        sunExposure: EXPOSURE.FULL,
        waterFreq: LEVEL.MED,
        nitrogenReq: LEVEL.HIGH,
        phosphorusReq: LEVEL.MED,
        potassiumReq: LEVEL.MED,
        minFlowerToHarvestTime: 45,
        maxFlowerToHarvestTime: 60,
        baseGdd: 55,
        minDaysToMaturity: 80,
        maxDaysToMaturity: 100,
        numPerSqFt: 1,
        image:
            'https://s3.us-east-2.amazonaws.com/gardnlycrops/001-watermelon-3.svg',
    },
]
