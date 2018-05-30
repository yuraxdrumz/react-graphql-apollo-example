import { gql } from 'apollo-boost';

const GET_RESTAURANTS = gql`
  query restaurants($floor: String!){
    restaurants (floor: $floor){
      id
      name
      location
      averageDeliveryTime
      timesOrdered
      picture
      floor
    }
  }
`

export {
    GET_RESTAURANTS
}