import React, { Component } from "react";

export default class AddButton extends Component {
    render() {
        return (
            <div>
                <button
                    className="Add-event-button"
                    onClick={this.toggleHiddenForm}
                >
                    AddEvent
                </button>
            </div>
        );
    }
}
