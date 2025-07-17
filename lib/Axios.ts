import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://api-shipra-v3.pilleo.ca',
});

export default Axios;