import React, { Component } from "react";
import classes from "./Home.module.scss";
import LeftContent from "../Components/LeftContent/LeftContent";
import MainContent from "../Components/MainContent/MainContent";
import axios from "../Utils/Network";
import Data from "../Utils/Data";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
        this.getData();
  }

  getData = (year, launch, landing) => {
      let params = {
        limit: 100,
        ...year && {launch_year: year},
        ...(launch || launch === false) && {launch_success: launch},
        ...(landing || landing === false) && {landing_success: landing}
      }
    axios({
        method: "get",
        url: "/",
        params,
      }).then(
        (response) => {
          console.log("res", response);
          this.setState({
            data: response,
          });
        },
        (err) => console.log(err)
      );
  }

  launchyearFilter = (year) => {
    this.getData(year);
  }

  successfulLaunchFilter= (launch) => {
    this.getData(null, launch);
  }

  successfulLandingFilter = (landing) => {
    this.getData(null, null, landing);
  }


  render() {
    const { data } = this.state;
    return (
      <div className={classes.container}>
        <h1 className={classes.header}>{data.header}</h1>
        <div className={classes.rowWrap}>
          <div className={classes.leftCol}>
            <LeftContent
              launchyearFilter={this.launchyearFilter}
              successfulLaunchFilter={this.successfulLaunchFilter}
              successfulLandingFilter={this.successfulLandingFilter}
            />
          </div>
          <div className={classes.rightCol}>
            <MainContent data={data} />
          </div>
        </div>
        <div className={classes.developedBy}>
          <span className={classes.title}>{Data.developedBy}:</span> Chaithra R
          Moolya
        </div>
      </div>
    );
  }
}
