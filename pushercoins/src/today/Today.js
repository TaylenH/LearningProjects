import React from 'react';
import axios from 'axios';
import './Today.css';

class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btcprice: '',
      ltcprice: '',
      ethprice: ''
    };
  }

  componentWillMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
      .then(response => {
        this.setState({
          btcprice: response.data.BTC.USD,
          ethprice: response.data.ETH.USD,
          ltcprice: response.data.LTC.USD
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='today--section container'>
        <h2>Current Price</h2>
        <div className='columns today--section__box'>
          <div className=' column btc--section'>
            <h5>${this.state.btcprice}</h5>
            <p>1 BTC</p>
          </div>
          <div className=' column eth--section'>
            <h5>${this.state.ethprice}</h5>
            <p>1 ETH</p>
          </div>
          <div className=' column ltc--section'>
            <h5>${this.state.ltcprice}</h5>
            <p>1 LTC</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Today;
