import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary'

class BurgerBuilder extends Component {
    render() {
        return (
            <Auxiliary>
                <div>Burger (Graphical view)</div>
                <div>Burger controls</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;