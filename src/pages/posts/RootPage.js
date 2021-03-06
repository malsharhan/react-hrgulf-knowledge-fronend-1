import React, {Fragment} from "react";
import {Route, Switch} from "react-router-dom";
import {MDBContainer} from "mdbreact";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import BackToTop from "components/BackToTop";
import Error404 from "components/Error404";
import SignedInRoute from "components/SignedInRoute";
import AddPostPage from "./AddPostPage";
import AllPostsPage from "./AllPostsPage";
import PostDetailPage from "./PostDetailPage";
import AllMagazinesPage from "./AllMagazinesPage";
import MagazineDetailPage from "./MagazineDetailPage";
import routes from "core/routes";

import "./RootPage.scss";

export default () => {
  return (
    <Fragment>
      <Navbar/>
      <MDBContainer className={"section"}>
        <Switch>
          <SignedInRoute path={routes.posts.add} component={AddPostPage}/>
          <Route path={`${routes.posts.magazines}/:page?`} exact component={AllMagazinesPage}/>
          <Route path={`${routes.posts.magazineDetail}/:id`} component={MagazineDetailPage}/>
          <Route path={`${routes.posts.all}/:page?`} exact component={AllPostsPage}/>
          <Route path={`${routes.posts.detail}/:id`} component={PostDetailPage}/>
          <Route component={Error404}/>
        </Switch>
      </MDBContainer>
      <Footer/>
      <BackToTop/>
    </Fragment>
  );
}
