import React from 'react'
import {Component} from 'react'

export default class EvenAndOdd extends Component {
  constructor() {
    super()

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  change(val) {
    this.setState({userInput: val})
  }

  solve(userInput) {
    let array = userInput.split(',')
    let even = []
    let odd = []
    for (let i = 0; i< array.length; i++){
      if (array[i] % 2 === 0){
        even.push(parseInt(array[i], 10))
      }
      else {
        odd.push(parseInt(array[i], 10))
      }
    }
    this.setState({evenArray: even, oddArray: odd})
  }

  render() {
    return(
      <div className='evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input onChange= {(e) => this.change(e.target.value)} className='inputLine'/>
        <button onClick = {this.solve(this.state.userInput)} className='confirmationButton'>Split</button>
        <span className='resultsBox'></span>
        <span className='resultsBox'></span>
      </div>
    )
  }
}