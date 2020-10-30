import React from 'react';
import axios from 'axios';
import ChartComponent from './Chart.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpiData: {},
      startDate: '2020-07-30',
      endDate: '2020-10-30'
    };
  }

  componentDidMount() {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-07-30&end=2020-10-30`)
      .then((results) => {
        console.log(results.data.bpi);
        this.setState({
          bpiData: results.data.bpi
        });
      })
      .catch((err) => {
        console.log('error fetching bpi data: ', err);
      })
  }

  render() {
    return (
      <div>
        <ChartComponent bpiData={this.state.bpiData} />
        <div>Powered by CoinDesk</div>
      </div>
    );
  }

}

export default App;