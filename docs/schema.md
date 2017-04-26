# Schema

## users

column name     | data type | details
-----------     | --------- | -------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image_url       | string    |
bio             | string    |
name            | string    |


## songs

column name     | data type | details
-----------     | --------- | -------
id              | integer   | not null, primary key
title           | string    | not null, indexed
artist_id       | string    | not null, indexed, foreign key(users)
song_url        | string    | not null
genre           | string    | 
image_url       | string    |
description     | string    |

## comments

column name     | data type | details
-----------     | --------- | -------
id              | integer   | not null, primary key
body            | string    | not null
user_id         | string    | not null, indexed, foreign key(users)
song_id         | string    | not null, indexed, foreign key(song)

## Bonus

## current_songs

column name     | data type | details
-----------     | --------- | -------
id              | integer   | not null, primary key
title           | string    | not null
user_id         | string    | not null, indexed, foreign key(users)


## current_song_track

column name     | data type | details
-----------     | --------- | -------
id              | integer   | not null, primary key
current_song_id     | string    | not null, indexed, foreign key(current_song)
song_id         | string    | not null, indexed, foreign key(song)

## likes

column name | data type | details
----------- | --------- | -------
id          |  integer  | not null, primary key
user_id     |  integer  | not null, foreign key (references user), indexed, unique (with track)
track_id    |  integer  | not null, foreign key (references track), indexed, unique (with user)