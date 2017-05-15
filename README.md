# BeatsMaster


Link to [Beatsmaster][beatsmaster]

[beatsmaster]: www.beatsmaster.us

BeatsMaster is a web application inspired by SoundCloud. It main goals are to allow user's to share music with each other, play music seamlessly throughout the site, and to leave comments and likes on each song.

### Structure
h
BeatsMaster is being developed with a Ruby Rails backend, and a React Redux frontend. The authentication system is encrypted with BCrypt. Songs and images are stored using paperclip, sending it to Amazon Web Services.

### Primary Components

#### Landing Page

When users first arrive at the site, they are greeted with a landing page. User's can explore each individual song tile, which directs them to the song's page. They are also allowed to play the songs available on the page, along with searching for any songs.

![Landing Page](/docs/images/landing_page.png)

### Stream Page

![Stream Page](/docs/images/stream_page.png)

When user's sign in or create an account from the landing page, they are redirected to the stream page. This section of the website allows users to view the most recently updated songs. They also have a brief glimpse at other users that are signed up to the site, with links provided to check out their user pages.

### Future Features

Future features involve the implementation of a playlist, along with adding waveforms to each of the song's profile. The waveforms are instrumental to the look of SoundCloud, and I look forward to trying to replicate them.
