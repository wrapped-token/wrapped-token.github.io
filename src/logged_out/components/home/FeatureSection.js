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
    headline: "Make Tokens Accessible Everywhere",
    text: [
      "With Extend supported blockchain networks, anyone can create a wrapped token on a new network.",
      "Move tokens on Ethereum on to other networks such as Avalanche or Solana."
    ],
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#6200EA",
    headline: "Reduce Costs and Increase Transaction Speed",
    text: [
      "Reduce gas costs by transacting on networks iwth lower gas fees.",
      "Alternatively, transact on networks with faster consensus protocols.",
      "You have the choice of where you transact your tokens regardless of the network they're originally from."
    ],
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
