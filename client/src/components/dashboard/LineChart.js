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
      type: "line",
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
            label: "Miles Ran",
            data: [3, 7, 5, 4, 0, 10, 0]
          }
        ]
      },
      options: {}
    });
  }

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
        <canvas id="myChart" ref={this.chartRef} />
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
