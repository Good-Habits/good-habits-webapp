# Deploy

- [Setup](#setup)
- [Define App](#define-app)
- [Deploy](#deploy)

https://caprover.com

> CapRover previously was named "Captain Duck Duck",
> that's why after rebuilding they still have a lot of
> references to "captain". For example settings file
> called `captain-definition`, the default CapRover
> webapp called `captain`.

CapRover  positioned itself
as a self-hosted Heroku alternative. Sadly, the docs
are an outdated mess. The process that should've taken
10 min took almost 4 hours because no answers can
be found on interned if encounter a weird behaviour.

Anyway, the idea is great, and it works pretty good for
most of the time. In short, you have one CapRover
webapp, that is controlling your server, i.e. spawning
docker containers, monitoring them. You define an app
in the CapRover webapp, run `caprover deploy` from your
laptop, select the server and the app where to deploy
and that's mostly it.

As I understand it, every app is a Docker container,
they can talk to each other and CepRover will spawn
Nginx and certificates containers for you. CapRover
reads app configuration from the `captain-definition`
file and it is a short info about the container.
More info: `https://caprover.com/docs/captain-definition-file.html`
. In this project I use CapRover node template and
this template is basically a Dockerfile that
will install npm dependencies and call `npm start`.
Using that convention I can omit the creation
of my own Dockerfile with the same code. Also
there it is possible to override part of the
provided Dockerfile and specify your own Dockerfile.

## Setup

A one-time setup steps - follow this video:
https://www.youtube.com/watch?v=XDrTmGSDW3s

TLDR:

- Create new droplet in the DO
- Point custom domain (optional, you can use droplet IP)
  to a Droplet IP. Basically adding A record that will
  resolve `*.yoursubdomain` requests to the Droplet IP. So in the
  end CapRover will have a root app, like
  `caprover.yoursubdomain.yourdomain.com` and will expose
  other apps in this manner -
  `yourapp.yoursubdomain.yourdomain.com`. Later we can
  add custom domain to the app.
- SSH into the Droplet
- `docker run -p 80:80 -p 443:443 -p 3000:3000 -v /var/run/docker.sock:/var/run/docker.sock -v /captain:/captain caprover/caprover`
  command will install the caprover on your Droplet
- Close the connection to the server, we won't need it
  for the next steps
- Install CapRover CLI tool globally on your laptop
  `npm install -g caprover`
- Run `caprover serversetup` and answer some questions:
  - Server IP: Droplet IP
  - Root Domain: `yoursubdomain.yourdomain.com`
  - Email: your email
  - Password: Password to login into CapRover webapp
    to create apps and monitor them
  - Name of the machine: just some name of your laptop
- In the end of the questionnaire, script will spit out
  the url where CapRover webapp will be available.
  Usually it is a predefined name, like 
  `captain.yoursubdomain.yourdomain.com`

## Define App

This steps are done inside CapRover webapp.

### Database

- In the CapRover webapp select "Apps" from the left
  menu
- Click "One-click Apps"
- Select "mongodb"
- Fill the app name (it will be part of the container name)
  for example "mongodb"
- Fill the root username and password
- Click "Finish"

## App

- In the CapRover webapp select "Apps" from the left
- Fill the app name, for example "good-habits"
- Click "Create new app"
- HTTP settings:
  - Enable HTTPS
  - Add new "A" record to the your
    custom app domain - "@" resolves to Droplet IP
  - Fill your custom domain address in the form and
    "Connect New Domain"
  - Force HTTPS redirection
- App Configs:
  - Add environment variables:
    - DATABASE_URL:
      "mongodb://[user]:[password]@srv-captain--[database_app_name]/[database_name]?authSource=admin"
    - SECRET: secret key
    - PORT: 80
    - GITHUB_CLIENT_ID: client id
    - GITHUB_CLIENT_SECRET: client secret
    - GITHUB_CALLBACK: "https://yourcustomdomain.com/auth/verify"

## Deploy

CapRover provides a lot of options for deploying:
- Uploading .tar archive with the source code (wait, are
  we in the 2001?)
- Deploying from the laptop (you need to be in the project
  directory and run `caprover deploy`)
- Via WebHook (hello automatic deploys on merge from GitHub)
