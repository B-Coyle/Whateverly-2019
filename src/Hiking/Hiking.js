import React, {Component} from 'react';
import './Hiking.scss';
import HikeCard from '../HikeCard/HikeCard.js';

export default class Hiking extends Component {
  constructor(props) {
    super(props);
  }



     render () {
      let Card = this.props.filteredHiking.map((trail) => {
        return (<HikeCard 
          filteredHiking = {trail}
          key = {trail.name}
      />)
    })
         return (
          <section className='hikeCardContainer'>{ Card }</section>
         )
     }
}



