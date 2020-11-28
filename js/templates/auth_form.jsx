import React from "react"

export default class AuthForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = props
  }

  showAuthDialog () {
    Nullchan.cmd("certSelect", [["zeroid.bit"]])
  }

  handleChange (event) {
    let newSign = event.currentTarget.value
    if (newSign == "other") {
      this.showAuthDialog()
      event.preventDefault()
      event.currentTarget.value = "ボリあき"
      return
    }
  }

  render () {
    let content
    let submitText = "スレッド作成"

    if (this.state.isReply) {
      submitText = "おへんじ..."
    }

    if (!!!this.state.userName) {
      content = <div className="auth-please" onClick={this.showAuthDialog}>
        <u>認証</u> 投稿.<br/>
        匿名で投稿できます
      </div>
    } else {
      content = <div>
        <select name="name" className="name" onChange={this.handleChange.bind(this)} defaultValue={"anonymous"}>
          <option value="anonymous" >ボリあき</option>
          <option value="signed">{this.state.userName}</option>
          <option value="other">他のIDを選択</option>
        </select>      
        <input type="submit" value={submitText} className="submit" />
      </div>
    }

    return (
      <div className='auth-form'>
        {content}
      </div>
    ) 
  }
}
