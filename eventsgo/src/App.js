import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title.js";
import Photos from "./components/Photos.js";
import Concert from "./EventsGoPhotos/concert.jpg";
import Food from "./EventsGoPhotos/food.jpg";
import Health from "./EventsGoPhotos/health.jpg";
import Meeting from "./EventsGoPhotos/meeting.jpg";
import Other from "./EventsGoPhotos/other.jpg";
import Sport from "./EventsGoPhotos/sport.jpg";
import Form from "./components/Form.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import fb from "./EventsGoPhotos/fb.png";
import instagram from "./EventsGoPhotos/instagram.png";
import twitter from "./EventsGoPhotos/twitter.png";
import ImageUpload from "./components/Imageuploader.js";

import Concerts from "./components/Categories/Concerts.js";
import Foods from "./components/Categories/Foods.js";
import Healths from "./components/Categories/Healths.js";
import Meetings from "./components/Categories/Meetings.js";
import Others from "./components/Categories/Others.js";
import Sports from "./components/Categories/Sports.js";
import firebase from "./fire.js";

import AddButton from "./components/Categories/AddButton.js";

export default class App extends Component {
    state = {
        isHiddenForm: true,
        isHiddenLogin: true,
        isHiddenRegister: true,
        isHiddenConcerts: true,
        isHiddenFoods: true,
        isHiddenHealths: true,
        isHiddenMeetings: true,
        isHiddenSports: true,
        isHiddenOthers: true
    };
    toggleHiddenForm = () => {
        this.setState({
            ...this.state,
            isHiddenForm: !this.state.isHiddenForm
        });
    };
    toggleHiddenLogin = () => {
        this.setState({
            ...this.state,
            isHiddenLogin: !this.state.isHiddenLogin
        });
    };
    toggleHiddenRegister = () => {
        this.setState({
            ...this.state,
            isHiddenRegister: !this.state.isHiddenRegister
        });
    };
    toggleHiddenConcerts = () => {
        this.setState({
            ...this.state,
            isHiddenConcerts: !this.state.isHiddenConcerts
        });
    };
    toggleHiddenFoods = () => {
        this.setState({
            ...this.state,
            isHiddenFoods: !this.state.isHiddenFoods
        });
    };
    toggleHiddenHealths = () => {
        this.setState({
            ...this.state,
            isHiddenHealths: !this.state.isHiddenHealths
        });
    };
    toggleHiddenMeetings = () => {
        this.setState({
            ...this.state,
            isHiddenMeetings: !this.state.isHiddenMeetings
        });
    };
    toggleHiddenSports = () => {
        this.setState({
            ...this.state,
            isHiddenSports: !this.state.isHiddenSports
        });
    };
    toggleHiddenOthers = () => {
        this.setState({
            ...this.state,
            isHiddenOthers: !this.state.isHiddenOthers
        });
    };
    render() {
        return (
            <div>
                <div className="App-header">
                    <Title />
                    <AddButton />

                    {!this.state.isHiddenForm && (
                        <Form toggleHiddenForm={this.toggleHiddenForm} />
                    )}

                    <input type="text" placeholder="Sort By" />
                    <button
                        className="form-button"
                        onClick={this.toggleHiddenLogin}
                    >
                        Login
                    </button>
                    {!this.state.isHiddenLogin && (
                        <Login toggleHiddenLogin={this.toggleHiddenLogin} />
                    )}
                    <button
                        className="form-button"
                        onClick={this.toggleHiddenRegister}
                    >
                        Register
                    </button>
                    {!this.state.isHiddenRegister && (
                        <Register
                            toggleHiddenRegister={this.toggleHiddenRegister}
                        />
                    )}
                </div>

                <div className="Main-flex ">
                    <div
                        className="event animate1"
                        onClick={this.toggleHiddenConcerts}
                    >
                        <img className="photo photo-zoom " src={Concert} />
                        <h2> CONCERTS </h2>
                    </div>

                    {!this.state.isHiddenConcerts && (
                        <Concerts
                            toggleHiddenConcerts={this.toggleHiddenConcerts}
                        />
                    )}

                    <div
                        className="event animate2"
                        onClick={this.toggleHiddenFoods}
                    >
                        <img className="photo photo-zoom" src={Food} />
                        <h2> FOOD </h2>
                    </div>

                    {!this.state.isHiddenFoods && (
                        <Foods toggleHiddenFoods={this.toggleHiddenFoods} />
                    )}

                    <div
                        className="event animate3 "
                        onClick={this.toggleHiddenHealths}
                    >
                        <img className="photo photo-zoom" src={Health} />
                        <h2> HEALTH </h2>
                    </div>

                    {!this.state.isHiddenHealths && (
                        <Healths
                            toggleHiddenHealths={this.toggleHiddenHealths}
                        />
                    )}

                    <div
                        className="event animate4"
                        onClick={this.toggleHiddenMeetings}
                    >
                        <img className="photo photo-zoom" src={Meeting} />
                        <h2> MEETINGS</h2>
                    </div>

                    {!this.state.isHiddenMeetings && (
                        <Meetings
                            toggleHiddenMeetings={this.toggleHiddenMeetings}
                        />
                    )}

                    <div
                        className="event animate5"
                        onClick={this.toggleHiddenSports}
                    >
                        <img className="photo photo-zoom" src={Sport} />
                        <h2> SPORT </h2>
                    </div>
                    {!this.state.isHiddenSports && (
                        <Sports toggleHiddenSports={this.toggleHiddenSports} />
                    )}
                    <div
                        className="event animate6"
                        onClick={this.toggleHiddenOthers}
                    >
                        <img className="photo photo-zoom " src={Other} />
                        <h2> OTHER </h2>
                    </div>
                    {!this.state.isHiddenOthers && (
                        <Others toggleHiddenOthers={this.toggleHiddenOthers} />
                    )}
                </div>
                <footer> &copy;Created by Skygate</footer>
                <footer>
                    <a href="https://www.instagram.com/instagram/">
                        <img
                            className="logo-photo logo-zoom logo"
                            src={instagram}
                        />
                    </a>
                    <a href="https://twitter.com/">
                        <img
                            className="logo-photo logo-zoom logo"
                            src={twitter}
                        />
                    </a>
                    <a href="https://www.facebook.com/">
                        <img className="logo-photo logo-zoom logo" src={fb} />
                    </a>
                </footer>
            </div>
        );
    }
}
