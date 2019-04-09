import React, {Component} from 'react'
import CharacterSelector from '../components/CharacterSelector.js'
import CharacterDetails from '../components/CharacterDetails.js'
class Hogwarts extends Component{

  constructor(props){
    super(props)
    this.state = {
      characters: [],
      selectedCharacter: ''
    }
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this)
  }

  componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters';
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({characters: data}))
  }

  handleCharacterSelected(index){
    this.setState({
      selectedCharacter: this.state.characters[index]
    })
  }

  render(){
    return(
      <div className="hogwarts-conatiner">
        Select a character:
        <CharacterSelector characters={this.state.characters} handleCharacterSelected={this.handleCharacterSelected} />
        <CharacterDetails character={this.state.selectedCharacter}/>
      </div>
    )
  }

}

export default Hogwarts;
