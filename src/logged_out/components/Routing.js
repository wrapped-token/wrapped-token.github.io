import React, { memo } from "react";
import PropTypes from "prop-types";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";

function Routing(props) {
  const { selectHome } = props;
  useLocationBlocker();
  return (
    <PropsRoute path="/" component={Home} selectHome={selectHome} />
  );
}

Routing.propTypes = {
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
};

export default memo(Routing);
