import React from "react";
import PropTypes from "prop-types";
import Data from "../../Utils/Data";
import classes from "./MainContent.module.scss";

const MainContent = ({ data }) => {
  console.log("MainContent", data);
  return (
    <div className={classes.wrapper}>
      {data &&
        data.length > 0 &&
        data.map((spaceDetail, index) => {
          return (
            <div className={classes.card} key={index}>
              <div className={classes.cardInner}>
                <div className={classes.imgWrap}>
                  <img
                    className={classes.image}
                    src={
                      spaceDetail.links && spaceDetail.links.mission_patch_small
                    }
                    alt={spaceDetail.mission_name}
                  />
                </div>
                <div className={classes.details}>
                  <div className={classes.missionName}>
                    {spaceDetail.mission_name} #{spaceDetail.flight_number}
                  </div>
                  <div className={classes.title}>{Data.missonId}</div>
                  {spaceDetail.mission_id &&
                  spaceDetail.mission_id.length > 0 ? (
                    <ul className={classes.missionidWrap}>
                      {spaceDetail.mission_id.map((mission_id) => {
                        return (
                          <li className={classes.missionid} key={mission_id}> {mission_id}</li>
                        );
                      })}
                    </ul>
                  ) : (
                    <span className={classes.missionid}>{" -"}</span>
                  )}
                  <div>
                    <span className={classes.title}>{Data.launchYear}: </span>
                    <span className={classes.missionid}>{` ${spaceDetail.launch_year}`}</span>
                  </div>
                  <div>
                    <span className={classes.title}>{Data.successfulLaunch}: </span>
                    <span className={classes.missionid}>{` ${String(spaceDetail.launch_success)}`}</span>
                  </div>
                  <div>
                    <span className={classes.title}>{Data.successfulLanding}: </span>
                    <span className={classes.missionid}>{spaceDetail.launch_landing || spaceDetail.launch_landing === false ? ` ${String(spaceDetail.launch_landing)}` : " -"}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MainContent;

MainContent.propTypes = {
  data: PropTypes.array,
};
