
import React, { Component } from 'react';
import '../styles/product.scss';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0
        };
        
      }
    minusClickHandler=()=>{
        if(this.state.counter>0){
            this.setState((prevState)=>({
            counter:prevState.counter-1
           
        }));
        }
        
    }
    plusClickHandler=()=>{
        this.setState((prevState)=>({
            counter:prevState.counter+1
        
        }));
    }
    render() {
        const{name,img,price,amper,minus,plus}=this.props;
        const {counter}=this.state;
        return (
            <div className='product'>
                <img src={img}></img>
                <h2>{name}{amper}</h2>
                <h3>$ {price}{counter!==0 && ` * ${counter} = ${counter*price
                }`}</h3>
                <div className='counter-box' >
                    <i className='fa fa-minus' onClick={() => {
          			this.minusClickHandler();
                    minus();
        		}}
                   ></i>
                <p>{counter}</p>
                <i className='fa fa-plus' onClick={() => {
          			this.plusClickHandler();
                   plus();
        		}} ></i>
                </div>
                
            </div>
        );
    }
}

export default Product;

