import axios from 'axios'

const instance = axios.create({
    baseURL: "https://react-my-burger-23fbc.firebaseio.com/"
})

export default instance;