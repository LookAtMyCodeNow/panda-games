import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5eae85937b9243cd8c9d4fec8f3a7e48'
    }

});