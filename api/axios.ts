import axios from 'axios'

const unsplashUrl = 'https://api.unsplash.com'

const unsplashApi = axios.create({
  baseURL: unsplashUrl,
  headers: {
    'Accept-Version': 'v1',
    Authorization: 'Client-ID B8ESLPW9i2WoL_NeKQMqdHuDREz41AUzulEKkDzxzi8',
  }
})

export { unsplashApi }
