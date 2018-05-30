import React, { Component } from 'react'
import {
    RestaurantBox,
    RestaurantBoxWrapper,
    Name
} from './styles'

export default function Restaurant(props){
    return (
        <RestaurantBoxWrapper onClick={props.onClick}>
            <RestaurantBox img={props.restaurant.picture}/>
            <Name>{props.restaurant.name}</Name>
        </RestaurantBoxWrapper>
 
    )
}