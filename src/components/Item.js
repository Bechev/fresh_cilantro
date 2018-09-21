import React, {Component} from 'react';
import Button from './Button'
import { Link } from 'react-router-dom';
import '../App.css';


export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: 0
        };
      }
      
    handleClick = () => {
        console.log(this.state.like)
        this.setState({
            like: this.state.like + 1
        })
    }

    render(){
        const likes = this.state.like
        return (
            <div>
                <Link key={this.props.item.id} to={`items/${this.props.item.id}`} style={{ textDecoration: 'none' }}>
                    <div className="item float" >
                        {this.props.item.name} - {this.props.item.brand}<br></br>
                    </div>
                </Link>
                <Button className ="item" name={likes ? likes : 0 } handleClick={this.handleClick}/>
            </div>
        )
    }
} 

