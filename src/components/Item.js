import React, {Component} from 'react';
import Button from './Button'
import { Link } from 'react-router-dom';
import '../App.css';


export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: this.props.item.likes
        };
      }

    handleClick = () => {
        const incrementedLikes = this.state.like + 1
        fetch("http://localhost:3000/items/"+this.props.item.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                likes: incrementedLikes
            })
        })
        .then(response => response.json())
        .then(() => { 
            this.setState({
                like: incrementedLikes
            })
        })
    }

    render(){
        const likes = this.state.like
        return (
            <div>
                <Link key={this.props.item.id} to={`items/${this.props.item.id}`} style={{ textDecoration: 'none' }}>
                    <div className="item float" >
                        {this.props.item.name} - {this.props.item.brand} - {this.props.likes}<br></br>
                    </div>
                </Link>
                <Button className ="item" name={likes ? likes : 0 } handleClick={this.handleClick}/>
            </div>
        )
    }
} 

