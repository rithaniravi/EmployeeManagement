import axios from "axios"

const API_URL='/data/'

const createData=async(employeeData,token)=>{
    
    const config={
        headers:{
            Authorization:`Bearer ${token}`,
        },
    };

    const response=await axios.post(API_URL, employeeData ,config)

    return response.data;
}
const getData=async (token)=>{
    
    const config={
        headers:{
            Authorization:`Bearer ${token}`,
        },
    };

    const response=await axios.get(API_URL ,config)

    return response.data;
}
const updateData=async (id,token)=>{
    
    const config={
        headers:{
            Authorization:`Bearer ${token}`,
        },
    };

    const response=await axios.put(API_URL + id,config)

    return response.data;
}



const deleteData=async (id,token)=>{
    
    const config={
        headers:{
            Authorization:`Bearer ${token}`,
        },
    };

    const response=await axios.delete(API_URL + id,config)

    return response.data;
}



const dataService= {
    createData,
    getData,
    deleteData,
    updateData,
}
export default dataService;

