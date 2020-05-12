import React from 'react'
import {Component} from 'react'

export default class FilterObject extends Component {
  constructor() {
    super()
    this.state = {
      unFilteredArray: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],
      userInput: '',
      filteredArray: []
    }
  }

  solve(input) {
    let filtered = []
    for (let i = 0; i < this.state.unFilteredArray.length; i++) {
      if (this.state.unFilteredArray[i].hasOwnProperty(input)) {

        filtered.push(this.state.unFilteredArray[i])
      }
    }
    console.log(filtered)
    this.setState({filteredArray: filtered})
    console.log(this.state.filteredArray)
  }

  render() {
    return (
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
    <span className='puzzleText'> Original: {JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
        <input onChange={(e) => this.setState({userInput: e.target.value})} className='inputLine'/>
        <button onClick={() => this.solve(this.state.userInput)} className='confirmationButton'>Filter</button>
    <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
      </div>
    )
  }
}