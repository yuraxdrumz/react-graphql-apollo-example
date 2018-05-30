import styled from 'styled-components'

const RestaurantBox = styled.div`
    display:flex;
    flex-direction: column;
    flex:1;
    width:100%;
    height:100%;
    border-radius:50%;
    background-image: url(${props=> props.img});
`

const Name = styled.div`
    overflow: hidden;
    text-align: center;
    width:100%;
    height:30px;
    text-overflow:  ellipsis;
    margin-top:0.5rem;
    font-size: 1.2rem;
    color: white;
    font-family: cursive;
`

const RestaurantBoxWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height:130px;
    width:100px;
    margin:1rem;
    justify-content:center;
    align-items:center;
    border: none; 
    cursor:pointer;
`

const RestaurantHolder = styled.div`
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
`
const Main = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Title = styled.div`
    font-size:2rem;
    color:white;
    display:flex;
    text-align: center;
    width:100%;
    margin-top:1rem;
    justify-content:center;
`

export {
    RestaurantBox,
    RestaurantHolder,
    RestaurantBoxWrapper,
    Name,
    Title,
    Main
}