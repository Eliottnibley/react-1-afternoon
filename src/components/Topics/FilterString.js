import React from 'react'
import {Component} from 'react'

export default class FilterString extends Component {
  constructor() {
    super()
    this.state = {
      unFilteredArray: ['Eliott', 'Rylee', 'Spiff', 'Harold', 'Landon'],
      userInput: '',
      filteredArray: []
    }
  }

  solve(input) {
    let filtered = []
    for (let i = 0; i < this.state.unFilteredArray.length; i++) {
      if(this.state.unFilteredArray[i].includes(input)) {
        filtered.push(this.state.unFilteredArray[i])
      }
    }
    this.setState({filteredArray: filtered})
  }

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Filter String</h4>
        <span className='puzzleText'>Names: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
        <input onChange={(e) => this.setState({userInput: e.target.value})} className='inputLine'/>
        <button onClick={() => this.solve(this.state.userInput)} className='confirmationButton'>Filter</button>
        <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
      </div>
    )
  }
}