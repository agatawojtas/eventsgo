import React, { Component } from "react";

export default class Concerts extends Component {
    render() {
        return (
            <div className="modalCategories animate1">
                <div>
                    <p className="form-header"> Concerts</p>
                    <br /> <br />
                    <p />
                    <button
                        className="form-button"
                        type="button"
                        onClick={this.props.toggleHiddenConcerts}
                    >
                        CANCEL
                    </button>
                </div>
            </div>
        );
    }
}
