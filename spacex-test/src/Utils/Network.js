import axios from "axios";

const appClient  = axios.create({
    baseURL:"https://api.spaceXdata.com/v3/launches",
    headers: {
        'Content-Type': 'application/json'
    }
})

const appRequest = (options) => {
    return appClient(options)
    .then(res=>res.data)
    .catch(err=>err);
}

export default appRequest;