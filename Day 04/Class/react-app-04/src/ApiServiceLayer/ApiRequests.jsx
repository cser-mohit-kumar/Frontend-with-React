import axios from "axios"
let axiosInstance=axios.cereate({
    baseUrl:"http://localhost:3000/",
    timeout:5000,
    headers:{
        "content-Type":"application/json"
    }
})

export let postProduct=async()=>{
    let res=await axiosInstance.post("/products",{name:"jay",friend:"Veeru"})
    console.log(res);

    console.log(res.data);
    
    
}

export let pathProduct=async(id,data)=>{
    let res=await axiosInstance.patch('/products/${id}',data)
    console.log(res.data);
    
}

export let getProducts=async()=>{
    let res=await axiosInstance.getProducts(``)
}