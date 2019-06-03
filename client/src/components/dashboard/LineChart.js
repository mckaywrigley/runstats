import React, { Component } from "react";
import Chart from "chart.js";
import { connect } from "react-redux";
import { getUserRuns } from "../../actions";

class LineChart extends Component {
  constructor() {
    super();
    this.state = {
      runs: [],
      lastWeekMiles: []
    };
  }

  chartRef = React.createRef();

  componentDidMount() {
    this.props.getUserRuns(this.props.auth.user.subject);
    this.setState({
      runs: this.props.run.runs
    });
    this.lastWeekMiles();

    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: [
          "5/20/19",
          "5/21/19",
          "5/22/19",
          "5/23/19",
          "5/24/19",
          "5/25/19",
          "5/26/19"
        ],
        datasets: [
          {
            label: "Miles Run",
            data: [3, 7, 5, 4, 0, 10, 0],
            fill: false,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)"
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {}
    });
  }

  // new Chart(document.getElementById("chartjs-1"),{"type":"bar","data":{"labels":["January","February","March","April","May","June","July"],"datasets":[{"label":"My First Dataset","data":[65,59,80,81,56,55,40],"fill":false,"backgroundColor":,,"}]},"options":{"scales":{"yAxes":[{"ticks":{"beginAtZero":true}}]}}});

  lastWeekMiles = () => {
    const lastWeekMilesArr = [];
    this.state.runs.map(run => {
      return lastWeekMilesArr.push(run.distance);
    });
    this.setState({
      lastWeekMiles: lastWeekMilesArr
    });
  };

  render() {
    return (
      <div>
        <canvas id="lineChart" ref={this.chartRef} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  run: state.run
});

export default connect(
  mapStateToProps,
  { getUserRuns }
)(LineChart);
