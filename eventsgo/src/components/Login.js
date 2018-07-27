import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <div className="modal animate1">
                <div>
                    <p className="form-header"> LogIn</p>
                    <br /> <br />
                    <br /> <br />
                    <p>
                        <input
                            className="form-input-form"
                            type="text"
                            placeholder="Username"
                        />
                    </p>
                    <p>
                        <input
                            className="form-input-form"
                            type="text"
                            placeholder="Password"
                        />
                    </p>
                    <button className="form-button" type="button">
                        OK
                    </button>
                    <button
                        className="form-button"
                        type="button"
                        onClick={this.props.toggleHiddenLogin}
                    >
                        CANCEL
                    </button>
                    <button className="form-button" type="button">
                        Forgot Password?
                    </button>
                </div>
            </div>
        );
    }
}
