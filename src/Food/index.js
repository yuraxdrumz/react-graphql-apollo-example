import React, { Component } from 'react'
import { Query, Mutation, graphql, compose, withApollo } from 'react-apollo';
import { Main } from './styles'
import Restaurants from '../Restaurants'
import { GET_RESTAURANTS } from './query'
import DELIVERY_SUBSCRIPTION from './subscription'

export default class Food extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Main>
                <Query query={GET_RESTAURANTS} variables={{floor: 15}}>
                    {({ subscribeToMore, loading, error, data }) => {
                    if (loading) return <div>Loading...</div>;
                    if (error) return <div>Error :(</div>;
                    if(data && data.restaurants && Array.isArray(data.restaurants) && data.restaurants.length > 0){
                        return (
                            <Restaurants
                             {...this.props} 
                             subscribeToNewDeliveries = {subscribeToMore({
                                document: DELIVERY_SUBSCRIPTION,
                                variables: { floor: 15 },
                                updateQuery: (prev, { subscriptionData, error, loading }) => {
                                    if(loading) return <div>Loading...</div>
                                    if(error) return <div>Error...</div>
                                  if (!subscriptionData.data) return prev;
                                  const newData = prev.restaurants.filter(res=>res.id!== subscriptionData.data.onDeliveryConfirmed.id)
                                  return {restaurants: newData}
                                }
                              })}
                             restaurants={data.restaurants} />
                        )
                    } else {
                        return <div>No data found</div>
                    }
           
                    }}
                </Query>
            </Main>
        )
    }
}