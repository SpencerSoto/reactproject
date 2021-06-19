import axios from "axios";

const pinsService = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/api/pins`,
    // baseURL: `http://localhost:5005/api/auth`,
  });


export function getPins() {
    return pinsService.get('/')
    .then(response => response)
    .catch(err => err);
}

export function createPin(newPin) {
    return pinsService.post('/', newPin)
    .then(response => response)
    .catch(err => err);
}

const services = {
    getPins,
    createPin
}
export default services;