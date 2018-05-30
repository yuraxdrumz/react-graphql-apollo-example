import { gql } from 'apollo-boost';

const mutation = gql`
    mutation confirmDelivery($id: String!, $floor: String!){
        confirmDelivery(id: $id, floor: $floor){
            id
            floor
        }
    }
`

export default mutation
