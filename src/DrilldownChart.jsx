import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import getChartData from "./data.js";

const initialDataset = "projects";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
    this.state = {
      previousPage: "",
      currentPage: initialDataset,
      series: getChartData(initialDataset, ""),
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.handleBack}>Back</button>
        <HighchartsReact
          highcharts={Highcharts}
          options={this.chartOptions()}
        />
      </div>
    );
  }

  handleBack() {
    const pp = this.state.previousPage;
    if (pp === "") {
      return;
    }
    this.setState({
      series: getChartData(pp),
      previousPage: this.state.currentPage,
    });
  }

  updateChart(dataset, length) {
    console.log(length);
    this.setState({
      series: getChartData(dataset),
      previousPage: this.state.currentPage,
    });
  }

  chartOptions() {
    return {
      series: this.state.series,
      chart: { type: "bar" },
      xAxis: { type: "category" },
      plotOptions: {
        bar: { stacking: "normal" },
        series: {
          cursor: "pointer",
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            style: {
              textShadow: true,
              fontSize: "10px",
            },
          },
          events: {
            click: (function (self) {
              return function (event) {
                self.updateChart(this.name, event.point.options.name);
              };
            })(this),
          },
        },
      },
    };
  }
}

export default Chart;
