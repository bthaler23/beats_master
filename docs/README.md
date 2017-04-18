# BeatsMaster

[Heroku][heroku]

[Trello][trello]

[heroku]: https://beats-master.herokuapp.com/#/
[trello]: https://trello.com/b/O68PaBg1/beatsmaster


## Minimum Viable Product
BeatsMaster is a web application inspired by SoundCloud built using Ruby on Rails and React/Redux. By the end of the two week development cycle,
this app will have implemented these features with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Song CRUD
- [ ] Playing songs with progress bar with continuous play
- [ ] Comments
- [ ] User Pages
- [ ] **Bonus**: Wave Forms
- [ ] **Bonus**: Playlists
- [ ] **Bonus**: Likes

## Design Docs

* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api]
* [DB schema][schema]
* [Sample State][state]

[wireframes]: ./wireframes
[api]: ./api-endpoints.md
[schema]: ./schema.md
[components]: ./component-hierarchy.md
[state]: ./sample-state.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1.5 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Songs Model, API, and components (1.5 days)

**Objective:** Users can upload songs, and view other user's songs

### Phase 3: Song List View (1 day)

**Objective:** Users can view a stream page with randomized songs, along with access to other users songs

### Phase 4: Progress Bar Component (2 days)

**Objective:** Users can play a song and have it's state stored and persists throughout navigation of websites

### Phase 5: Comments (1 day)

**Objective:** Users can add comments to a song's view page, at the moment in time the song is playing

### Phase 6: Search Bar (1 day)

**Objective:** Users can search through the website for songs
