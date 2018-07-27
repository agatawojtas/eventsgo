import React, { Component } from "react";

export default class Concerts extends Component {
    render() {
        return (
            <div className="modalCategories animate1">
                <div>
                    <p className="form-header"> Register</p>
                    <br /> <br />
                    <p />
                    <button
                        className="form-button"
                        type="button"
                        onClick={this.props.toggleHiddenHealths}
                    >
                        CANCEL
                    </button>
                </div>
            </div>
        );
    }
}
