import React, {Component} from 'react';
import { skinny, slender, sporty, stocky, patchy, plain, spotted, striped } from '../assets/index';

const propertyMap = {
    backgroundColor: {
        black: '#263238',
        white: '#CFD8DC',
        green: '#A5D6A7',
         blue: '#0277BD'
    },
    build: {slender,stocky,sporty,skinny},
    pattern: {plain,striped,spotted,patchy},
    size: {small:100,medium: 140,large: 180,enormous: 220}
};

class DragonAvatar extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props);
    }
    render(){
        const {dragon} = this.props;
        //console.log(dragon);
        //console.log(this.props);
        return (
            <div>
                <span>G{dragon.generationId}, </span>
                <span>I{dragon.dragonId}, </span>

                {dragon.traits.map(trait => trait.traitValue).join(', ')}
            </div>
        )
    }
}

export default DragonAvatar;