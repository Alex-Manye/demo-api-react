import React, { Component } from 'react'
import magicService from '../services/MagicService'

class CardDetail extends Component {

  state = {
    photo:null,
  }

  async componentDidMount(){
    const {photoId} = this.props.match.params; 
    console.log(photoId);

    const newPhoto = await magicService.getPhoto(photoId);
    console.log(newPhoto);

    this.setState({
      photo:newPhoto
    })
  }

  render() {
    const {photo} = this.state;
    if(photo){
      return (
        <section className="photo-detail">
            <article>
              <img src={photo.url} alt={photo.title} />
              <p>{photo.title}</p>
            </article>
          </section>
      )
    }else{
      return (
        <p>Loading...</p>
      )
    }
  }
}

export default  CardDetail;