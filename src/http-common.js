import axios from "axios"

export default axios.create({
    // baseURL: "http://localhost:9090",
    baseURL: "http://localhost:9090",
    header:{
        "Content-type":"application/json",
    }
})