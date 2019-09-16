import React from 'react'
import CartCard from '../components/CartCard';

class CartContainer extends React.Component {
  state = {
    loading: true,
    carts: []
  };

  componentDidMount() {
    const url = "http://localhost:3000/api/v1/carts";
    // const response = await fetch(url);
    // const data = await response.json();
    // this.setState({cat: data.results[0], loading: false });
    fetch(url)
      .then(res => res.json())
      .then(carts => this.setState({
        carts: carts
      }))
  }


  render() {
    return ( <
      div className = "ui three column grid container" > {
        this.state.carts.map(cart => < div className = "five wide column" > < CartCard user = {
            cart
          }
          /> </div > )
      } <
      /div>
    )
  }

}



export default CartContainer;
