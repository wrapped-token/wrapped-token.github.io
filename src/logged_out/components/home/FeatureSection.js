import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withWidth } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

import FeatureCard from "./FeatureCard";

const iconSize = 500;

const features = [
  {
    color: "#00C853",
    headline: "Feature 1",
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#6200EA",
    headline: "Feature 2",
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  }
];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Features
        </Typography>
        <div className="container-fluid">
          <Grid container
            direction="column"
            justifyContent="space-evenly"
            alignItems="stretch">
            {features.map(element => (
              <FeatureCard
                Icon={element.icon}
                color={element.color}
                headline={element.headline}
                text={element.text}
                width={width}
                mdDelay={element.mdDelay}
                smDelay={element.smDelay}
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);
