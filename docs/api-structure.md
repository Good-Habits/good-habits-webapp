# API Structure

- [Overview](#overview)
- [Habit Endpoints](#habit-endpoints)
    - [List](#list)

## Overview

```
/api/
    habit/
        list
```

## Habit endpoints

### List

|||
-|-
method|GET
URL|`/api/habit/list`

Will return a list of user habits. If user not in
request or there is not habits, will return empty
JSON response.

Example response:

```json
[
    {"name": "Sleep More", "slug": "sleep-more"},
    {"name": "Play games", "slug": "play-games"},
]
```
