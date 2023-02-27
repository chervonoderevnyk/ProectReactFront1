import axios from "axios";

import {baseURL} from "../configs";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();
const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2RjMjhlNjM1YTg5NmNkNjI2OTg3MWQxYTQyNGYzNiIsInN1YiI6IjYzZjVjN2Q5N2RmZGE2MDBiNTMxNDM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ido1sKfnF_SsotkIoA0KAJOd34RhTVgaN9t55cSZxhI`
    return config
})


export {
    apiService,
    history
}


