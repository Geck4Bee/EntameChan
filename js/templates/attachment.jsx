import React    from "react"
import Helpers  from "../libs/helpers.jsx"
import pdfIcon from '../../img/pdf_icon_white_600.png'
import txtIcon from '../../img/txt_icon_white_600.png'

export class Attachment extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
    this.thumb = this.setIcon()
  }

  setIcon() {
    let thumb = this.state.data.attachment_thumb_path
    const type = this.state.data.attachment.slice(this.state.data.attachment.lastIndexOf('.') + 1)
    if (type === "txt") {
      thumb = txtIcon
    }
    if (type === "pdf") {
      thumb = pdfIcon
    }
    return thumb
  }

  shortName() {
    var name = this.state.data.attachment
    if (name.length > 25) {
      var split = name.split(".")
      name = split.slice(0, split.length-1).join(".")
      name = name.slice(0, 23) + "..." + "." + split[split.length-1]
    }
    return name
  }

  onImageLoad() {
    this.setState({loaded: true})
  }

  render() {
    var imageDisplay = { opacity: 0 }
    if (this.state.loaded == true) {
      imageDisplay = { opacity: 1 }
    }

    return(
      <div className="attachment">
        <div className="attachment-info">
          ファイル: {Helpers.formatSizeUnits(this.state.data.attachment_size)},&nbsp;
          {this.state.data.attachment_full_width}x{this.state.data.attachment_full_height},&nbsp;
          <a href={this.state.data.attachment_full_path} 
            download={this.state.data.attachment} target="_blank">{this.shortName()}</a>
        </div>
        <div className="image-loading" style={
          { width:  `${this.state.data.attachment_thumb_width}px`, 
            height: `${this.state.data.attachment_thumb_height}px` }
        }><br/><br/>画像読み込み中...</div>
        <a href={this.state.data.attachment_full_path} target="_blank">
          <img width={this.state.data.attachment_thumb_width} 
            height={this.state.data.attachment_thumb_height} 
            src={this.thumb} 
            style={imageDisplay}
            onLoad={this.onImageLoad.bind(this)}
          />
        </a>
      </div>
    )
  }
}

export class AttachmentOld extends React.Component {
  render() {
    return(
      <div className="attachment">
        <a href={this.props.urlFull} target="_blank">
          <img src={this.props.urlThumb} />
        </a>
      </div>
    )
  }
}
