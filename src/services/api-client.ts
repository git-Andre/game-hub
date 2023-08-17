import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'dafc7e61b5294e39a4ce28335e6c8a3c',
    }
});
