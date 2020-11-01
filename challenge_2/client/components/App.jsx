import React from 'react';
import axios from 'axios';
import Chart from 'chart.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpiKeys: [],
      bpiValues: [],
      startDate: '2020-03-01',
      endDate: new Date().toISOString().substr(0, 10)
    };
    this.handleStartInput = this.handleStartInput.bind(this);
    this.handleEndInput = this.handleEndInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${this.state.startDate}&end=${this.state.endDate}`)
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
            ticks: {
              padding: 20,
              fontColor: "rgba(0,0,0,0.5)",
              fontStyle: "bold"
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
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

  handleStartInput(event) {
    event.preventDefault();
    const date = event.target.value;
    this.handleSubmit(date, this.state.endDate);
    this.setState({
      startDate: date
    });
  }

  handleEndInput(event) {
    event.preventDefault();
    const date = event.target.value;
    this.handleSubmit(this.state.startDate, date);
    this.setState({
      endDate: date
    });
  }

  handleSubmit(start, end) {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)
      .then((results) => {
        this.setState({
          bpiKeys: Object.keys(results.data.bpi),
          bpiValues: Object.values(results.data.bpi)
        }, () => {
          this.createChart();
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h3>BitCoin Charting Tool</h3>
        <canvas id="myChart"></canvas>
        <div>
          <form>
            <label className="start">
              Start Date:
              <input type="date" value={this.state.startDate} onChange={this.handleStartInput} />
            </label>
            <label className="end">
              End Date:
              <input type="date" value={this.state.endDate} onChange={this.handleEndInput} />
            </label>
          </form>
        </div>
        <div className="rights">Powered by CoinDesk</div>
      </div>
    );
  }
}

export default App;

//startDate: '2020-03-01',
//endDate: new Date().toISOString().substr(0, 10)