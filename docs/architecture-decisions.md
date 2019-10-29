# Architecture Decisions

- [Application Structure](#application-structure)
- [Application State](#application-state)

## Application structure

> I was raised in Django world

During past time I think a lot about how to structure
a fullstack application.
I really got used to how Django using apps to separate concerns.
Rather then splitting modules by type, it
has a concept of splitting the modules by what they do.
I see often that JS applications are using the first
approach, i.e. components, reducers. I belive there is
no right or wrong way of how you structure the
application, and this is how I would do it.

_Beware! I am mixing client and server code in apps!_

Example structure of the app:

```
src/
    auth/
    habit/
    user/
        components/
        models/
            User.js
        store.js
        routes.js
    client.js
    db.js
    server.js
```

**Note**: With this approach of mixing the server and
the client code based on apps, one downside is that
in the server files we would have client code, that is
compiled to the bundle, but on the other hand, since
it won't be imported to the server code, there should
not be any critical problems.

## Application State

It appeals to me, that keeping stores separate and
scoped to the apps makes more sense than one global
store for the app.

Right now I have one store for the Habits app, and might
be a good idea for a App store, to set global things,
like errors?
