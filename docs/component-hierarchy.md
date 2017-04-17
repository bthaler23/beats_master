## Component Hierarchy

**App**
- Navbar
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

**SplashScreen**
- SplashImage
- SearchBar
  - Upload
  - SearchContainer

**TrackTileIndex**
- TrackTileComponent

**AuthFormContainer**
- SignIn
- CreateAccount

**StreamContainer**
- Stream
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
