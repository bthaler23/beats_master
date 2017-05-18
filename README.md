# BeatsMaster


Link to [Beatsmaster][beatsmaster]

[beatsmaster]: https://www.beatsmaster.us

BeatsMaster is a web application inspired by SoundCloud. It's main goals are to allow user's to share music with each other, play music seamlessly throughout the site, and leave comments and likes on each song.

### Structure

BeatsMaster is being developed with a Ruby on Rails backend, and a React-Redux frontend. The authentication system is encrypted with BCrypt. Songs and images are stored using paperclip, which send it to Amazon Web Services D3 Storage.

### Primary Components

#### Landing Page

When users first arrive at the site, they are greeted with a landing page. User's can explore each individual song tile, directing them to the song's page. They are also allowed to play the songs available on the page, and search for any songs.

![Landing Page](/docs/images/landing_page.png)

### Stream Page

![Stream Page](/docs/images/stream_page.png)

When user's sign in or create an account from the landing page, they are redirected to the stream page. This section of the website allows users to view the most recently updated songs. There is also a sidebar which provides a brief glimpse at other users on BeatsMaster, with links provided to check out their user pages.

### Future Features

Future features involve the implementation of a playlist, along with adding waveforms to each of the song's profile. The waveforms are instrumental to the look of SoundCloud, and I look forward to trying to replicate them.
