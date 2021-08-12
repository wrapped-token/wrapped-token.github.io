import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withStyles, isWidthUp } from "@material-ui/core";

const styles = theme => ({
  icon: {

  },
  text: {
    marginBottom: theme.spacing(2)
  },
  content: {
    display: "flex",
    "flex-direction": "column",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1) * 1.5
  }
});

function FeatureCard(props) {
  const { classes, Icon, width, headline, text, mdDelay, smDelay } = props;
  return (
    <Grid container
      spacing={24}
      data-aos="zoom-in-up"
      data-aos-delay={
        isWidthUp("md", width) ? mdDelay : smDelay
      }>
      <Grid
        item
        className={classes.content}
        xs={6}>
        <Typography variant="h3" paragraph>
          {headline}
        </Typography>
        {text.map(elt => (
          <Typography className={classes.text} variant="h5" color="textSecondary">
            {elt}
          </Typography>
        ))}
      </Grid>
      <Grid
        item
        className={classes.icon}
        xs={6}>
        {Icon}
      </Grid>
    </Grid >
  );
}

FeatureCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired
};

export default withStyles(styles, { withTheme: true })(FeatureCard);
