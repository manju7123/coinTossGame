import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    count: 0,
    heads: 0,
    tails: 0,
    isActive: true,
  }

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        count: prevState.count + 1,
        heads: prevState.heads + 1,
        isActive: true,
      }))
    } else {
      this.setState(prevState => ({
        count: prevState.count + 1,
        tails: prevState.tails + 1,
        isActive: false,
      }))
    }
  }

  render() {
    const {count, heads, tails, isActive} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading"> Coin Toss Game </h1>
          <p className="paragraph"> Heads (or) Tails </p>
          {isActive ? (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          ) : (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}
          <button type="button" onClick={this.onToss} className="btn">
            Toss Coin
          </button>
          <div className="toss">
            <p className="count-item"> Total: {count}</p>
            <p className="count-item"> Heads: {heads}</p>
            <p className="count-item"> Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
