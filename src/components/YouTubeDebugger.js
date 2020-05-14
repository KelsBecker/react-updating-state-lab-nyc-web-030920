import React, { Component } from "react";


class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    changeBitrate = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    changeRez = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video:{
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }


    render() {
        return(
            <div>
                <button className="bitrate" onClick={this.changeBitrate}>
                    BITRATE BUTTON:{this.state.settings.bitrate}
                </button>
                <br/>
                <button className="resolution" onClick={this.changeRez}>
                    REZ BUTTON: {this.state.settings.video.resolution}
                </button>
            </div>
        )
    }
}

export default YouTubeDebugger