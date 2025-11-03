import axios from "axios";

const url = 'https://api.themoviedb.org/3/person/'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWQwODUxMmFlYjNkNTQ1YWFjNjFjMzNhMTEwNjA2NCIsIm5iZiI6MTc2MDAzMjY2My45ODg5OTk4LCJzdWIiOiI2OGU3Zjc5NzQ5Zjc2NzU0NzViN2FjNmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Qvd_v1hQuh_n4zKNSE4ubwT-5NHbMDx5Jmh2kHU2mVM'
  }
};

export const getDirector = async(id)=>{
    try{
        const response = await axios.get(`${url}${id}?append_to_response=movie_credits&language=es`, options)
        return response
    }catch(error){
        console.log(error)
    }
}