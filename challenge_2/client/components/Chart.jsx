import React from 'react';
import Chart from 'chart.js';

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    //bpiData
    console.log('bpiData: ', this.props.bpiData);
  }

  componentDidMount() {
    const bpiKeys = Object.keys(this.props.bpiData);
    const bpiValues = Object.values(this.props.bpiData);
    const ctx = document.getElementById('myChart');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: bpiKeys,
        datasets: [{
          label: 'BitCoin Value in USD',
          data: bpiValues,
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
    return (
      <div>
        <canvas id="myChart"></canvas>
      </div>
    );
  }
}

export default ChartComponent;