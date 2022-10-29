import baseApi from "../Api/baseApi";

export const fetchData= async()=>{
    const response = await baseApi.get("list-dummy-data/", {headers: {"Content-Type": "application/json"}})
    return response.data
}