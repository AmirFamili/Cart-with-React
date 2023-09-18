
import React, { Component } from 'react';
import './styles/app.scss';
import Product from './components/Product'
import Duracell from './images/duracell.jpg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      counter: 0,
      products: [
        { id: 1, name: "Duracell Ultra Gold ", price: 204, img: Duracell, amper: 60 },
        { id: 2, name: "Duracell Ultra Gold ", price: 285, img: Duracell, amper: 70 },
        { id: 3, name: "Duracell Ultra Gold ", price: 312, img: Duracell, amper: 80 },
        { id: 4, name: "Duracell Ultra Gold ", price: 350, img: Duracell, amper: 92 },
        { id: 5, name: "Duracell Ultra Gold ", price: 410, img: Duracell, amper: 100 },
        { id: 6, name: "Duracell Ultra Gold ", price: 480, img: Duracell, amper: 120 },
        { id: 7, name: "Duracell Ultra Gold ", price: 559, img: Duracell, amper: 150 },
        { id: 8, name: "Duracell Ultra Gold ", price: 623, img: Duracell, amper: 200 },
      ]


    };
  }

  minusAllClickHandler=()=>{
    if(this.state.counter>0){
        this.setState((prevState)=>({
        counter:prevState.counter-1
       
    }));
    }
    
}
plusAllClickHandler=()=>{
    this.setState((prevState)=>({
        counter:prevState.counter+1
    }));
}
  render() {

    return (
      <>
        <header>
          <div className='cart'>
            <i className='fa fa-cart-shopping'></i>
            <p>{this.state.counter} </p>
          </div>

        </header>
        <div className='products' >
          {this.state.products.map((product) => (
            <Product key={product.id} name={product.name} price={product.price} img={product.img} amper={product.amper} minus={this.minusAllClickHandler} plus={this.plusAllClickHandler}/>
          ))}

        </div>
      </>
    );
  }
}

export default App;

