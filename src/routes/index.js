import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '~/pages/Dashboard';
import MeetupCreate from '~/pages/MeetupCreate';
import MeetupDetails from '~/pages/MeetupDetails';
import Profile from '~/pages/Profile';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route isPrivate path="/dashboard" component={Dashboard} />
      <Route isPrivate path="/profile" component={Profile} />
      <Route isPrivate path="/meetup/create" component={MeetupCreate} />
      <Route
        isPrivate
        exact
        path="/meetup/:meetupId"
        component={MeetupDetails}
      />
      <Route isPrivate path="/meetup/:meetupId/edit" component={MeetupCreate} />
    </Switch>
  );
}
