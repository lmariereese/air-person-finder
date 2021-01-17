import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {Main} from './Components'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Main}></Route>
    </Switch>
  )
}

export default withRouter(Routes);
