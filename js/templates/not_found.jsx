import React    from "react"
import Helpers  from "../libs/helpers.jsx"

export default class NotFound extends React.Component {
  render () {
    return (
      <div id="not-found">
        <h1>なにもない.</h1>
        <a target="_parent" href={Helpers.fixLink(`/${Nullchan.engineSettings.siteAddress}`)}>トップに戻る</a>
      </div>
    )
  }
}
