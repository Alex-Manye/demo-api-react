import axios from 'axios';

class MagicService {
  constructor(){
    this.magicApi = axios.create({
      baseURL:'https://jsonplaceholder.typicode.com',
    })
  }


  getAllPhotos= async() => {
    try{
      const response = await this.magicApi.get('/photos')
      return response.data;

    }catch(error){
      console.log(error)
    }
  }

  getPhoto = async (photoId) => {
    try{
      //const response = await this.magicApi.get('/photos/' + photoId)
      const response = await this.magicApi.get(`/photos/${photoId}`)
      return response.data;
    }catch(error){
      console.log(error)
    }
  }
}

const magicService = new MagicService();

export default magicService;