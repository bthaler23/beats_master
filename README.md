# BeatsMaster


[Link to Beatsmaster][beatsmaster]
[beatsmaster]: https://beats-master.herokuapp.com/#/

BeatsMaster is a web application inspired by SoundCloud. It main goals are to allow user's to share music with each other, play music seamlessly throughout the site, and to leave comments and likes on each song.

###Structure

BeatsMaster is being developed with a Ruby Rails backend, and a React Redux frontend. The authentication system is encrypted with BCrypt. Songs and images are stored using paperclip, sending it to Amazon Web Services.

###Primary Components

####Landing Page

When users first arrive at the site, they are greeted with a landing page. User's can explore each individual song tile, which directs them to the song's page. They are also allowed to play the songs available on the page, along with searching for any songs.

![Landing Page](/docs/images/landing_page.png)
