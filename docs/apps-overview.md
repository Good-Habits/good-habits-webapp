# Apps Overview

## Auth

Contains logic about authorization process and
athorization routes. No models, since we have
a user app that holds it.

PassportJS is used as an authentication framework,
and GitHub OAuth strategy as authentication strategy.

## User

Contains only user model for now. Since in this 
project, we are using OAuth authentication
provided by GitHub, we don't need a lot of user-
specific stuff. In the future when User profile
will be implemented, this will be a place to put
such routes and components.

## Habit

Contains Habit model, API routes to manage habits
and a store.

## Misc

Right now contins general comnents, like navigation
bar.
