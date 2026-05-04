import axios from "axios";

export let apiInstance = axios.create({
    baseURL: "http://localhost:3000",headers:{
        "Content-Type":"application/json"
    }
});
