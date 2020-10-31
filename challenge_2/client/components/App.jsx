import React from 'react';
import axios from 'axios';
import Chart from 'chart.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpiData: {},
      bpiKeys: [],
      bpiValues: [],
      startDate: '2020-07-30',
      endDate: '2020-10-30'
    };
  }

  componentDidMount() {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-07-30&end=2020-10-30`)
      .then((results) => {
        //console.log(results.data.bpi);
        this.setState({
          bpiData: results.data.bpi,
          bpiKeys: Object.keys(results.data.bpi),
          bpiValues: Object.values(results.data.bpi)
        }, () => {
          this.createChart();
        });
      })
      .catch((err) => {
        console.log('error fetching bpi data: ', err);
      });
      this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.state.bpiKeys,
        datasets: [{
          label: 'BitCoin Value in USD',
          data: this.state.bpiValues,
          backgroundColor: '#d3e7e6',
          borderColor: '#94bbb9',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes : [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }
    });
  }

  render() {
    console.log('🧚‍♀️ bpiData in render: ', this.state.bpiData);
    return (
      <div>
        <canvas id="myChart"></canvas>
        <div>Powered by CoinDesk</div>
      </div>
    );
  }
}

export default App;