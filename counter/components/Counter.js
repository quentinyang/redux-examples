import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.incrementAsync = this.incrementAsync.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

// 只在开发环境下验证，所以如下是可有可无的，但建议都加上，这样方便开发，
// 参考：https://facebook.github.io/react/docs/reusable-components-zh-CN.html
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
