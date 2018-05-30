import React, { Component } from 'react'
import Restaurant from './restaurant'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'
import ConfirmDelivery from './mutation'
import { Mutation } from "react-apollo";

import {
    RestaurantHolder,
    Main,
    Title
} from './styles'

export default class Restaurants extends Component {
    constructor(props){
        super(props)
    }
    confirmDelivery = async (restaurant) => {
        try{
            const data = await this.props.client.mutate({mutation: ConfirmDelivery, variables:{id:restaurant.id, floor: restaurant.floor}})
            console.log(data)            
        }catch(e){
            console.error(e)
        }
    }
    openConfirmModal = (restaurant) => {
        confirmAlert({
            title: `Confirm delivery for ${restaurant.name}`,
            // message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => this.confirmDelivery(restaurant)
              },
              {
                label: 'No',
                onClick: () => {}
              }
            ]
          })
    }
    render(){
        const res = this.props.restaurants.map(res=>{
            return <Restaurant onClick={this.openConfirmModal.bind(this, res)} key={res.id} restaurant={res}/>
        })
        return (
            <Main>
                <Title>Click on a restaurant to confirm delivery</Title>
                <RestaurantHolder>
                {res}
            </RestaurantHolder>
            </Main>
        )
        
    }
}