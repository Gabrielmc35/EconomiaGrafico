import { useState, useEffect } from "react";
import axios from "axios";



export  function useFetch(url:string) {
   
    const [data, setData] =useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const [error,setError] = useState<Error | null>(null);
    

    useEffect(() => {
        setIsFetching(true)
        axios.get(url)
        .then(response=> {
          
          setData(response.data);
        
        })
        .catch(err => {
            setError(err);
        })
      
      .finally(()=> {
        setIsFetching(false);
      })
    }, [url])


      return {data, isFetching,error}



}    setTimeout(useFetch, 3000)


