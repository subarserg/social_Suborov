import axios from "axios";

export const instanseEdamam = axios.create({
    baseURL: `https://api.edamam.com/`
})
