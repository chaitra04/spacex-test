import React from "react";
import PropTypes from "prop-types";
import Data from "../../Utils/Data";
import classes from "./LeftContent.module.scss";

const LeftContent = ({
  applyFilter,
  launchYear,
  successfulLaunch,
  successfulLanding
}) => {
  console.log( launchYear,
    successfulLaunch,
    successfulLanding)
  const applyYearFilter = (year) => {
    if(year === launchYear)
    applyFilter("" , successfulLaunch, successfulLanding);
    else
    applyFilter(year , successfulLaunch, successfulLanding)
  }

  const applysuccessfulLaunchFilter = (bool) => {
    if(bool === successfulLaunch)
    applyFilter(launchYear , "", successfulLanding);
    else
    applyFilter(launchYear , bool, successfulLanding)
  }

  const applysuccessfulLandingFilter = (bool) => {
    if(bool === successfulLanding)
    applyFilter(launchYear , successfulLaunch, "");
    else
    applyFilter(launchYear , successfulLaunch, bool)
  }

  return (
    <div className={classes.leftColWrap}>
      <h2 className={classes.header}>{Data.filters}</h2>
      <div className={classes.contentTitle}>{Data.launchYear}</div>
      <div className={classes.wrapper}>
        {Data.years.map((year) => {
          return (
            <div
              key={year}
              className={[
                classes.year,
                year === launchYear && classes.active
              ].join(" ")}
              onClick={() => applyYearFilter(year)}
            >
              {year}
            </div>
          );
        })}
      </div>
      <div className={classes.contentTitle}>{Data.successfulLaunch}</div>
      <div className={classes.wrapper}>
        {Data.boolValues.map((bool, index) => {
          return (
            <div
              key={index}
              className={[
                classes.year,
                bool === successfulLaunch && classes.active
              ].join(" ")}
              onClick={() => applysuccessfulLaunchFilter(bool)}
            >
              {String(bool)}
            </div>
          );
        })}
      </div>
      <div className={classes.contentTitle}>{Data.successfulLanding}</div>
      <div className={classes.wrapper}>
        {Data.boolValues.map((bool, index) => {
          return (
            <div
              key={index}
              className={[
                classes.year,
                bool === successfulLanding && classes.active
              ].join(" ")}
              onClick={() => applysuccessfulLandingFilter(bool)}
            >
              {String(bool)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftContent;

LeftContent.propTypes = {
  applyFilter: PropTypes.func,
  launchYear: PropTypes.number,
  successfulLaunch: PropTypes.bool,
  successfulLanding: PropTypes.bool
};
