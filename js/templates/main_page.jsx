import React      from "react"
import BoardLine  from "./board_line.jsx"
import Logo       from "./logo.jsx"
import Helpers    from "../libs/helpers.jsx"
import VERSION    from "../engine/version.jsx"

export default class MainPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = props
  }

  render () {
    let logo = <Logo />

    return(
      <div id="glagne" key={"mainpage"}>
        {logo}
        <hr/>
        <blockquote className="monospace">
          powered by <a href="https://github.com/kustomzone/nullchan" target="_parent">Nullchan engine</a> (v {VERSION})
        </blockquote>

        <hr/>
        <div className="inner">
          <table>
            <tbody>
            <tr>
              <td className="board-list-container">
                <table id="board-list">
                  <tbody>
                    {this.state.boards.map((board) => {
                      if (board.key != "test") {
                        return <BoardLine key={board.key} data={board}/>  
                      }
                    })}
                  </tbody>
                </table>
                <span className="counters">
                  最終投稿日: <em id="last-post">{this.state.lastPostTime}</em>
                  <br/>
                  総投稿数: <em id="total-posts">{this.state.totalPosts}</em>
                </span>
              </td>
              <td>
                <blockquote>
                  <strong>{Nullchan.engineSettings.siteName}</strong> is a decentralised P2P imageboard
                  powered by <a href="https://github.com/kustomzone/nullchan" target="_parent">Nullchan</a> engine
                  running on <a href="https://github.com/HelloZeroNet/ZeroNet" target="_parent">ZeroNet</a>.
                  <br/><br/>
                  エンタメちゃんは生まれたばかりの掲示板です。エンジョイ＆エキサイティング！
                  <br/>
                  <br/>
                  <hr/>
                  <span>
                    <em>Status:</em>
                    Did some restyling, working on post previews and GIF support now.
                    <br/><br/>
                    11.09.2016
                  </span>
                  <br/>
                  &nbsp;
                </blockquote>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <hr/>
        <blockquote className="monospace">
          message the devs on <a href={Helpers.fixLink("/Mail.ZeroNetwork.bit/?to=sthetz")} target="_parent">ZeroMail</a>
        </blockquote>
      </div>
    )
  }
}
