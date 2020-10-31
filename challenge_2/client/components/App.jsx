import React from 'react';
import axios from 'axios';
import Chart from 'chart.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpiKeys: [],
      bpiValues: [],
      startDate: '2020-07-30',
      endDate: '2020-10-30'
    };
  }

  componentDidMount() {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-07-30&end=2020-10-30`)
      .then((results) => {
        this.setState({
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
    const ctx = document.getElementById('myChart').getContext("2d");
    //ctx.style.backgroundColor = '#26232c';
    const gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, "#f49080");
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.state.bpiKeys,
        datasets: [{
          label: 'BitCoin Value in USD',
          data: this.state.bpiValues,
          borderColor: gradientStroke,
          pointBorderColor: gradientStroke,
          pointBackgroundColor: gradientStroke,
          pointHoverBackgroundColor: gradientStroke,
          pointHoverBorderColor: gradientStroke,
          pointBorderWidth: 6,
          pointHoverRadius: 10,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
          borderWidth: 4
        }]
      },
      options: {
        title: {
          display: true,
          text: 'BitCoin Charting Tool'
        },
        tooltips: {
          mode: 'nearest'
        },
        legend: {
          position: "bottom"
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: "rgba(0,0,0,0.5)",
              fontStyle: "bold",
              beginAtZero: false,
              padding: 40
            },
            gridLines: {
              zeroLineColor: "transparent"
            }
          }],
          xAxes: [{
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
            },
            ticks: {
              padding: 20,
              fontColor: "rgba(0,0,0,0.5)",
              fontStyle: "bold"
            },
            type: 'time',
            time: {
              unit: 'day'
            }
          }]
        }
      }
    });
  }

  render() {
    return (
      <div>
        <canvas id="myChart"></canvas>
        <div className="rights">Powered by CoinDesk</div>
      </div>
    );
  }
}

export default App;