import React, { Component } from "react";
import classes from "./Home.module.scss";
import LeftContent from "../Components/LeftContent/LeftContent";
import MainContent from "../Components/MainContent/MainContent";
import axios from "../Utils/Network";
import Data from "../Utils/Data";
import HOC from "../Components/HOC/HOC";
import { withRouter } from "react-router-dom";
const LoadingComp = HOC(MainContent);
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launchYear: "",
      successfulLaunch: "",
      successfulLanding: "",
      data: [],
      apiCalled: false
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const { search } = location;
    const params = new URLSearchParams(search);
    
    const launch_year = params.get("launch_year");
    const successful_launch = params.get("successful_launch");
    const successful_landing = params.get("successful_landing");
    if(launch_year || successful_launch || successful_launch === "false" || successful_landing || successful_landing === "false") {
      this.setState({
        launchYear: Number(launch_year),
        successfulLaunch: successful_launch && successful_launch !== "false" ? true  : successful_launch === "false" ? false : "",
        successfulLanding: successful_landing && successful_landing !== "false" ? true  : successful_landing === "false" ? false : ""
      },()=>{
        this.getData();
      })
    } else {
      this.getData();
    }
  }

  getData = (year, launch, landing) => {
    this.setState({
      apiCalled: true
    })
    const { launchYear, successfulLaunch, successfulLanding } = this.state;
    let params = {
      limit: 100,
      ...(launchYear && { launch_year: launchYear }),
      ...((successfulLaunch || successfulLaunch === false) && {
        launch_success: successfulLaunch,
      }),
      ...((successfulLanding || successfulLanding === false) && {
        landing_success: successfulLanding,
      }),
    };
    axios({
      method: "get",
      url: "/",
      params,
    }).then(
      (response) => {
        console.log("res", response);
        this.setState({
          data: response,
          apiCalled: false
        });
      },
      (err) => {this.setState({
        apiCalled: false
      });}
    );
  };

  applyFilter = (year, launch, landing) => {
    this.setState(
      (prevState) => {
        return {
          launchYear: year,
          successfulLaunch: launch,
          successfulLanding: landing,
        };
      },
      () => {
        window.history.replaceState(null, "", `/home?launch_year=${year}&successful_launch=${launch}&successful_landing=${landing}`)
        this.getData();
      }
    );
  };

  render() {
    const {
      data,
      launchYear,
      successfulLaunch,
      successfulLanding,
      apiCalled
    } = this.state;
    return (
      <div className={classes.container}>
        <h1 className={classes.header}>{Data.header}</h1>
        <div className={classes.rowWrap}>
          <div className={classes.leftCol}>
            <LeftContent
              launchYear={launchYear}
              successfulLaunch={successfulLaunch}
              successfulLanding={successfulLanding}
              applyFilter={this.applyFilter}
            />
          </div>
          <div className={classes.rightCol}>
            <LoadingComp data={data} apiCalled={apiCalled}/>
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

export default withRouter(Home);
