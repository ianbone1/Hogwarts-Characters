import React from 'react'

const CharacterSelector = (props) =>{

  const options = props.characters.map((character, index) => {
    return <option value={index} key={index}>{character.name}</option>
  })

  const handleChange = (event) => {
    props.handleCharacterSelected(event.target.value)
  }

  return(

    <select id="character-selector" defaultValue="default" onChange={handleChange}>
    <option disabled value="default">Choose a character...</option>
    {options}
    </select>
  )

}

export default CharacterSelector;
