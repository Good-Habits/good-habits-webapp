# Architecture Decisions

- [Application Structure](#application-structure)
- [Client Store](#client-store)

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

## Client Store

I feel that for this particular project, something like
full-throtle store Redux, VuEx will be complete overkill.
Of course it makes sense for a big application and tons
of wrappers to make it work make perfect sense.

Internally Mithril call lightweight JS objects that hold
the state "models", but in my opinion it more likely
to be the store and also it would allow to not clash
the names with database models.
