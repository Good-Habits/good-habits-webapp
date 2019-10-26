# Architecture Decisions

> I was raised in Django world

- [Application structure](#application-structure)
- [User app](#user-app)

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

## Application structure

```
src/
    user/
        components/
        models/
            User.js
        routes.js
    client.js
    db.js
    server.js
```

## User app

Holds User model, authentication logic and routes.
