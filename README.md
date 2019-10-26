# Good Habits

> App, that will try to help you to manage your habits
> in an efficient manner.

Documentation can be found [here](docs/index.md)

## Setup Guide

### GitHub OAuth authorization

In order for this app to be able to authenticate
the user, you need to get the client_id and secret
key. To do so [here](https://github.com/settings/applications/) new application should be registered.
If you want to test it locally, Homepage URL will be
`http://127.0.0.1:3000/` and callback URL
`http://127.0.0.1:3000/auth/verify`.

### Environment variables

This project uses `.env` files to store the secrets.
After checkout, you need to create an `.env` file
and fill it with this information (fill in the `<unset>` values)

```env
# For example mongodb://localhost/my-good-habits
DATABASE_URL=<unset>
SECRET=<unset>
PORT=3000

GITHUB_CLIENT_ID=<unset>
GITHUB_CLIENT_SECRET=<unset>
```

### Starting the app

Then it should be straightforward as writing this
commands to the terminal:

```bash
npm install
npm start
```

This will install all the necessery libraries and
start the development server.
