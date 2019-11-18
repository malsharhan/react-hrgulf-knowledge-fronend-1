import React from "react";
import {Redirect, Route, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import routes from "core/routes";

export default ({component, ...props}) => {
  const {auth} = useSelector(state => state);
  const history = useHistory();

  return (
    auth.signedIn ? <Redirect to={routes.root}/> : <Route component={component} {...props}/>
  );
};
