import React from 'react';
import axios from 'axios';
import moment from 'moment';
import './History.css';

class History extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todayprice : {},
      yesterdayprice: {},
      twodaysprice: {},
      threedaysprice: {},
      fourdaysprice: {}
    }
    this.getBTCPrices = this.getBTCPrices.bind(this);
    this.getETHPrices = this.getETHPrices.bind(this);
    this.getLTCPrices = this.getLTCPrices.bind(this);
  }

  // This function gets the ETH price for a specific timestamp/date. The date is passed in as an argument
  getETHPrices (date) {
      return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=' + date);
  }
  // This function gets the BTC price for a specific timestamp/date. The date is passed in as an argument
  getBTCPrices (date) {
      return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' + date);
  }
  // This function gets the LTC price for a specific timestamp/date. The date is passed in as an argument
  getLTCPrices (date) {
      return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts=' + date);
  }

  getPriceForDay(numDays = 0){
    let t;
    if(numDays){
      t = moment().subtract(numDays, 'days').unix();
    }else{
      t = moment().unix();
    }

    axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(axios.spread((eth, btc, ltc) => {
        let f = {
          date: moment.unix(t).format("MMMM Do YYYY"),
          eth: eth.data.ETH.USD,
          btc: btc.data.BTC.USD,
          ltc: ltc.data.LTC.USD
        }

        switch (numDays) {
          case 0:
            this.setState({ todayprice: f });
            break;
          case 1:
            this.setState({ yesterdayprice: f });
            break;
          case 2:
            this.setState({ twodaysprice: f });
            break;
          case 3:
            this.setState({ threedaysprice: f });
            break;
          case 4:
            this.setState({ fourdaysprice: f });
            break;
          default:
            break;
        }
      }));
  }

  componentDidMount() {
    let promise = new Promise((resolve, reject) => {
      this.getPriceForDay(0);
      resolve();
    });

    promise.then(() => {
      this.getPriceForDay(1);
      return;
    })
    .then(() => {
      this.getPriceForDay(2);
      return;
    })
    .then(() => {
      this.getPriceForDay(3);
      return;
    })
    .then(() => {
      this.getPriceForDay(4);
      return;
    });
  }

  render() {
    return (
      <div className="history--section container">
        <h2>History (Past 5 days)</h2>
        <div className="history--section__box">
            <div className="history--section__box__inner">
                <h4>{this.state.todayprice.date}</h4>
                <div className="columns">
                    <div className="column">
                        <p>1 BTC = ${this.state.todayprice.btc}</p>
                    </div>
                    <div className="column">
                        <p>1 ETH = ${this.state.todayprice.eth}</p>
                    </div>
                    <div className="column">
                        <p>1 LTC = ${this.state.todayprice.ltc}</p>
                    </div>
                </div>
            </div>
            <div className="history--section__box__inner">
              <h4>{this.state.yesterdayprice.date}</h4>
                <div className="columns">
                    <div className="column">
                        <p>1 BTC = ${this.state.yesterdayprice.btc}</p>
                    </div>
                    <div className="column">
                        <p>1 ETH = ${this.state.yesterdayprice.eth}</p>
                    </div>
                    <div className="column">
                        <p>1 LTC = ${this.state.yesterdayprice.ltc}</p>
                    </div>
                </div>
            </div>
            <div className="history--section__box__inner">
                <h4>{this.state.twodaysprice.date}</h4>
                <div className="columns">
                    <div className="column">
                        <p>1 BTC = ${this.state.twodaysprice.btc}</p>
                    </div>
                    <div className="column">
                        <p>1 ETH = ${this.state.twodaysprice.eth}</p>
                    </div>
                    <div className="column">
                        <p>1 LTC = ${this.state.twodaysprice.ltc}</p>
                    </div>
                </div>
            </div>
            <div className="history--section__box__inner">
                <h4>{this.state.threedaysprice.date}</h4>
                <div className="columns">
                    <div className="column">
                        <p>1 BTC = ${this.state.threedaysprice.btc}</p>
                    </div>
                    <div className="column">
                        <p>1 ETH = ${this.state.threedaysprice.eth}</p>
                    </div>
                    <div className="column">
                        <p>1 LTC = ${this.state.threedaysprice.ltc}</p>
                    </div>
                </div>
            </div>
            <div className="history--section__box__inner">
                <h4>{this.state.fourdaysprice.date}</h4>
                <div className="columns">
                    <div className="column">
                        <p>1 BTC = ${this.state.fourdaysprice.btc}</p>
                    </div>
                    <div className="column">
                        <p>1 ETH = ${this.state.fourdaysprice.eth}</p>
                    </div>
                    <div className="column">
                        <p>1 LTC = ${this.state.fourdaysprice.ltc}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default History;
