import React, { Component } from "react";
import ImageUploader from "./Imageuploader.js";
import firebase from "../fire.js";

export default class Form extends Component {
    state = {
        eventTitle: "",
        category: "",
        description: "",
        localization: "",
        ogranization: "",
        dateStart: "",
        dateFinish: "",
        comment: "",
        items: []
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault(); //nie odswieza
        const itemsRef = firebase.database().ref("items");
        const item = {
            //szablon dla naszego eventa
            eventTitle: this.state.eventTitle,
            category: this.state.category,
            description: this.state.description,
            localization: this.state.localization,
            ogranization: this.state.ogranization,
            dateStart: this.state.dateStart,
            dateFinish: this.state.dateFinish,
            comment: this.state.comment
        };
        itemsRef.push(item);

        this.setState({
            //czyszczenie imputa na kliknieciu, nie musze delete ionputa
            eventTitle: "",
            category: "",
            description: "",
            localization: "",
            ogranization: "",
            dateStart: "",
            dateFinish: "",
            comment: ""
        });
    };
    componentDidMount = () => {
        // CO TU SIE DZIEJE?!
        const itemsRef = firebase.database().ref("items");
        itemsRef.on("value", snapshot => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    eventTitle: items[item].eventTitle,
                    category: items[item].category,
                    description: items[item].description,
                    localization: items[item].localization,
                    ogranization: items[item].ogranization,
                    dateStart: items[item].dateStart,
                    dateFinish: items[item].dateFinish,
                    comment: items[item].comment
                });
            }
            this.setState({
                // Guzik "remove all"
                items: newState
            });
        });
    };
    removeItem = itemId => {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
    };
    render() {
        return (
            <div className="modal animate1">
                <div className="container">
                    <input type="text" placeholder="Sort By" />
                    <section className="add-item">
                        <form onSubmit={this.handleSubmit}>
                            {/* pobiera wartosci z ponizszych inputow  */}

                            <input
                                type="text"
                                name="eventTitle"
                                placeholder="event title?"
                                onChange={this.handleChange}
                                value={this.state.eventTitle} //przypisuje nowa wartosc
                            />
                            <input
                                type="text"
                                name="category"
                                placeholder="category?"
                                onChange={this.handleChange}
                                value={this.state.category}
                            />
                            <input
                                type="text"
                                name="description"
                                placeholder="description?"
                                onChange={this.handleChange}
                                value={this.state.description}
                            />
                            <input
                                type="text"
                                name="localization"
                                placeholder="localization?"
                                onChange={this.handleChange}
                                value={this.state.localization}
                            />
                            <input
                                type="text"
                                name="organization"
                                placeholder="organization?"
                                onChange={this.handleChange}
                                value={this.state.ogranization}
                            />
                            <input
                                type="text"
                                name="dateStart"
                                placeholder="date start?"
                                onChange={this.handleChange}
                                value={this.state.dateStart}
                            />
                            <input
                                type="text"
                                name="dateFinish"
                                placeholder="date finish?"
                                onChange={this.handleChange}
                                value={this.state.dateFinish}
                            />
                            <input
                                type="text"
                                name="comment"
                                placeholder="comment?"
                                onChange={this.handleChange}
                                value={this.state.comment}
                            />
                            <button>Add Item</button>
                        </form>
                    </section>
                    <section className="display-item">
                        <div className="wrapper">
                            <ul>
                                {this.state.items.map(item => {
                                    return (
                                        <li key={item.id}>
                                            <h3>
                                                {item.eventTitle},{" "}
                                                {item.category},{
                                                    item.description
                                                }, {item.localization},{" "}
                                                {item.ogranization},{" "}
                                                {item.dateStart},{" "}
                                                {item.dateFinish},{" "}
                                                {item.comment}{" "}
                                            </h3>
                                            <p>
                                                <button
                                                    onClick={() =>
                                                        this.removeItem(item.id)
                                                    }
                                                >
                                                    Remove Item
                                                </button>
                                            </p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <button
                            className="form-button"
                            type="button"
                            onClick={this.props.toggleHiddenForm}
                        >
                            CANCEL
                        </button>
                    </section>
                </div>
            </div>
        );
    }
}
