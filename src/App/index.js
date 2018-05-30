import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'
import Food from '../Food'
import { Main } from './styles'
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    font-family: cursive;
    margin: 0;
    padding:0;
  }
`;

export default class App extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Main>
                <Switch>
                    <Route exact path="/" render={()=><Food {...this.props}/>} />
                </Switch>
            </Main>
        )
    }
}