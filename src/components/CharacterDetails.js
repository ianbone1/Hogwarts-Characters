import React from 'react'

const CharacterDetails = ({character}) =>{

  if(!character) return null

  return(
    <div className="character-details">
      <p>Actor: {character.actor}</p>
      <img src={character.image} alt={character.name}/>
    </div>
  )

}

export default CharacterDetails;
