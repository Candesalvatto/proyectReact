import React, { useEffect, useState } from 'react'

export const App4 = () => {

const [characters,setCharacters]= useState([])

useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
    .then((response)=> response.json())
    .then((data)=>{setCharacters(data.results)})
}, [])

  return (
    <div>
    <h1>Lista de personajes</h1>
    <ul>
        {characters.map((character) => (
            <li key={character.id}>{character.name}</li>
        ))}
    </ul>
    </div>
  )
}
