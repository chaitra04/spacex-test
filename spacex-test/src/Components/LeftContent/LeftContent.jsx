import React from "react";
import PropTypes from "prop-types";
import Data from "../../Utils/Data";
import classes from "./LeftContent.module.scss";

const LeftContent = ({
  launchyearFilter,
  successfulLaunchFilter,
  successfulLandingFilter,
}) => {
  return (
    <div className={classes.leftColWrap}>
      <h2 className={classes.header}>{Data.filters}</h2>
      <div className={classes.contentTitle}>{Data.launchYear}</div>
      <div className={classes.wrapper}>
        {Data.years.map((year) => {
          return (
            <div
              key={year}
              className={classes.year}
              onClick={() => launchyearFilter(year)}
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
              className={classes.year}
              onClick={() => successfulLaunchFilter(bool)}
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
              className={classes.year}
              onClick={() => successfulLandingFilter(bool)}
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
  launchyearFilter: PropTypes.func,
  successfulLaunchFilter: PropTypes.func,
  successfulLandingFilter: PropTypes.func,
};
