import { useEffect } from 'react'
import { useState } from 'react'

import {  useFetch } from './hooks/useFetch';


function App() {

 const {data:account,isFetching,error} =
 useFetch('https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Gabrielmc35?api_key=RGAPI-65669d53-5350-45a1-98e3-5d264a2bca6e')


return (
  
    <div>

      {isFetching && <p>Carregando</p>}
    


      {console.log(account)}

      <h1>Id : {account?.id}</h1>
      <h1>Nome: {account?.name} </h1>


    </div>
      

  )
}

export default App
