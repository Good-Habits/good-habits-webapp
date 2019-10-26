# Infrastructure Decisions

> Keep It Simple

- [Programming Language](#programming-language)
- [Documentation](#documentation)
- [Database](#database)
- [Server](#server)
- [Authentication](#authentication)
- [Bundler](#bundler)
- [Styles](#styles)
- [Client](#client)

## Programming Language

**JavaScript**. As I am thinking about it, my server
code will be a lot less than the client one. If
that so, it might be a good idea to avoid switching
the context (I am a Python developer) and go with the
server also written in JavaScript. One language,
one build process, keep it simple.

## Documentation

**Markdown**. Simple yet powerful solution. Of course
you can use GitHub wiki, build static site, use
Confluence, Notion et.c. But I have a feeling
that documentation should live near the code, and
a simple docs folder with markdown files seems to me
a simple and beautiful solution.

## Database

**MongoDB**. Many people might say that it is not good for
production use, a lot of failure reports from different
projects. But there is also a trade-off that is very
important for me - no need to write migrations. Who
worked with a relational SQL databases might know how
much painful it could be, especially if you working
with a lightweight web-framework. Heck, I saw people
on one project writing the migration scripts in raw SQL
on a daily basis.

## Server

**Express**. Commonly used, extreamly
barebone and minimal. Since I am planning just a bit
1-2 static pages and 2 API endpoints. It looks a way
to go. I decided to avoid picking the BIG web-framework
built on top of express for this particular project.

## Authentication

**GitHub**. Initially I was planning to use Google OAuth
but, you know the Evil corporation, it is not longer
possible to use localhost as a domain. This makes
testing Google OAuth locally almost impossible.
And I did not want in the first place to implement full
authentication with email and password because it would
require writing the hash/salt logic, password
validation, password reset. A lot of code that I would
not want to maintain for this simple project.
And GitHub has really simple and user-friendly process
of creating the OAuth application.

## Bundler

**Parsel**. I don't like writing configuration files.
With webpack you need a production config, dev config,
babel config. With parcel - I point it to the file, it
compiles the file and we done. Will I want to add
typescript to the project? Sass? Throw it in parcel
and it will do the thing. It also has built-in server,
HMR and adds hashes to update the cache. In this
project I added simplified setup, but for sure do check
out the project.

## Styles

**CSS**. No styled components, no prefixers,
no preprocessors. With styles I would like them to be
as minimal and functional as possible. And with native
CSS variables and Grid, a lot is possible! Also if you
start splitting the style files, you then have less idea
how big your styles file is, I hope that keeping them
in one file will help me contain them in meaninful size.

## Client

TODO: Needs to be decided
