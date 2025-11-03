const url = 'https://image.tmdb.org/t/p/'

export const getImage = (path) =>
     `${url}w500/${path}`;
    
export const getProfile = (path) =>{
     return path ? `${url}w185/${path}` : null
}