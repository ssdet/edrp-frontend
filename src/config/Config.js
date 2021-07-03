
const GLOBAL_URL = "";

if(process.env.NODE_ENV === 'development') {
    GLOBAL_URL = 'http://localhost:8000/api'
  }
  
  if(process.env.NODE_ENV === 'production') {
    GLOBAL_URL = 'https://api.hnbguiqac.in/api'
  }
// https://corsanywhere.herokuapp.com/https://freereddittesting.000webhostapp.com/api/