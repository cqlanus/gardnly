// @flow
import { API, graphqlOperation } from 'aws-amplify'
import { listCrops } from '../graphql/queries'

const byKey = key => (a, b) => {
    const aVal = a[key].toUpperCase()
    const bVal = b[key].toUpperCase()
    const greater = aVal > bVal
    const less = aVal < bVal
    return greater ? 1 : less ? -1 : 0
}

const byName = byKey('commonName')

class CropService {
    getAll = async () => {
        const { data } = await API.graphql(
            graphqlOperation(listCrops, { limit: 50 }),
        )
        const crops = data.listCrops.items.sort(byName)
        return crops        
    }
}

export default CropService