## Component Hierarchy

**App**
- NavbarContainer
- ProgressBarContainer

**NavbarContainer**
- SearchContainer
- AuthFormContainer
- NavDropDown

**SearchContainer**
- SearchBar

**ProgressBarContainer**
- ProgressBar
  - PlaySong

**Splash**
- AuthButtons
- SplashImage
- SearchBar
  - Upload
  - SearchContainer
- TrackTileIndex

**TrackTileIndex**
- TrackTileComponent

**AuthFormContainer**
- SignIn
- CreateAccount

**Stream**
- NavbarContainer
- StreamTitle
- StreamContainer
- SideBar

**StreamContainer**
- SongListContainer

**SongListContainer**
- SongListComponent
  - SongContainer
    - SongComponent
      - SongImage
      - SongWaveForm
      - SongDetail

**SideBar**
- ArtistListContainer
  - ArtistList
    - Artist

**SongView**
- NavbarContainer
- SongComponent
- Comments


**Comments**
- ArtistImage
- AddComment
- CommentListContainer
  - CommentList
    - Comments

**UploadContainer**
- UploadForm

**UserView**
- ProfileBanner
- SongListContainer


|Path         | Component   |
|-------------|-------------|
| /           | App         |
| /           | Splash      |
| /stream     | Stream      |
| /users/:id  | UserView    |
| /songs/:id  | SongView    |
| /upload     | Upload      |
