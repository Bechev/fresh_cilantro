import React, { Component } from 'react';
import '../App.css';


export default class Additem extends Component {

    render() {
        return (
            <div>
                <header className="header">Add Item</header>
                <form>
                    <label> Name:
                    <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}