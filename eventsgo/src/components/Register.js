import React, { Component } from "react";

export default class Register extends Component {
    render() {
        return (
            <div className="modal animate1">
                <div>
                    <p className="form-header"> Register</p>

                    <p>
                        <input
                            className="form-input-form"
                            type="text"
                            placeholder="Name"
                        />
                    </p>
                    <p>
                        <input
                            className="form-input-form"
                            type="text"
                            placeholder="Surname"
                        />
                    </p>
                    <p>
                        <input
                            className="form-input-form"
                            type="text"
                            placeholder="Date of birth"
                        />
                    </p>
                    <p>
                        <input
                            className="form-input-form"
                            type="text"
                            placeholder="E-mail"
                        />
                    </p>
                    <p>
                        <input
                            className="form-input-form"
                            type="text"
                            placeholder="Password"
                        />
                    </p>
                    <p>
                        <input
                            className="form-input-form"
                            type="text"
                            placeholder="Confirm Password"
                        />
                    </p>
                    <button className="form-button" type="button">
                        OK
                    </button>
                    <button
                        className="form-button"
                        type="button"
                        onClick={this.props.toggleHiddenRegister}
                    >
                        CANCEL
                    </button>
                </div>
            </div>
        );
    }
}
