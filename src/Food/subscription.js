import { gql } from 'apollo-boost';

const DELIVERY_SUBSCRIPTION = gql`
  subscription onDeliveryConfirmed($floor: String!) {
    onDeliveryConfirmed(floor: $floor) {
      id
    }
  }
`;

export default DELIVERY_SUBSCRIPTION


