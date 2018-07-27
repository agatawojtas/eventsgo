import React, { Component } from "react";

export default class Concerts extends Component {
    render() {
        return (
            <div className="modalCategories animate1">
                <div>
                    <p className="form-header"> Meetings</p>
                    <br /> <br />
                    <p />
                    <button
                        className="form-button"
                        type="button"
                        onClick={this.props.toggleHiddenMeetings}
                    >
                        CANCEL
                    </button>
                </div>
            </div>
        );
    }
}
