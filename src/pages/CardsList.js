import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import magicService from '../services/MagicService'

class CardsList extends Component {
  state={
    photos:null,
  }

  async componentDidMount(){
    console.log('montado')
    const newPhotos = await magicService.getAllPhotos()
    console.log(newPhotos)
    this.setState({
      photos:newPhotos,
    })
  }


  render() {
    const {photos} = this.state
    return (
      <section className="photosList">
        
        { photos ? 
          photos.map( (photo,index) => (
          <article key={index}>
            <Link to={`/cards/${photo.id}`} ><img src={photo.thumbnailUrl} alt={photo.title} /></Link>
          </article>
        )) : <p>Loading...</p>
        }
      </section>
    )
  }
}

export default CardsList;
