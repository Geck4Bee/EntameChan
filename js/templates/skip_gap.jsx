import React from "react"

export default class SkipGap extends React.Component {
  handleClick () {
    View.rBoardPage.threadMap[this.props.parent].setState({full: true}, () => {
      View.rBoardPage.initReflinks()
    })
  }

  render() {
    return (
      <div className="skip-gap" onClick={this.handleClick.bind(this)}>
        {this.props.count} 省略されています. ↕ <span className="expand-button">
          拡張
        </span>
      </div>
    )
  }
}
