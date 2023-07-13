// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isTrue1: false, isTrue2: false}

  isClicked1 = () => {
    const {isTrue1} = this.state
    this.setState(prevState => {
      console.log(`${prevState.isTrue1}`)
      if (isTrue1 === false) {
        return {isTrue1: true}
      }
      return {isTrue1: false}
    })
  }

  isClicked2 = () => {
    const {isTrue2} = this.state
    this.setState(prevState => {
      console.log(`${prevState.isTrue2}`)
      if (isTrue2 === false) {
        return {isTrue2: true}
      }
      return {isTrue2: false}
    })
  }

  render() {
    const {isTrue1, isTrue2} = this.state
    const isShown = isTrue1 && 'card2'
    const isShown1 = isTrue2 && 'card2'
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card">
          <div className="card1">
            <button className="btn" type="submit" onClick={this.isClicked1}>
              Show/Hide Firstname
            </button>
            <div className={`${isShown}`}>
              <p className="text">{isShown && 'Joe'}</p>
            </div>
          </div>
          <div className="card1">
            <button className="btn" type="submit" onClick={this.isClicked2}>
              Show/Hide Lastname
            </button>
            <div className={`${isShown1}`}>
              <p className="text">{isShown1 && 'Jonas'}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
