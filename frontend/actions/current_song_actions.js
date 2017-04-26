export const PLAY_SONG = "PLAY_SONG";
export const STOP_SONG = "STOP_SONG";
export const START_SONG = "START_SONG";
export const GET_CURRENT_TIME = "GET_CURRENT_TIME";


export const playSong = (song, last_song) => ({
  type: PLAY_SONG,
  song,
  last_song
});

export const stopSong = () => ({
  type: STOP_SONG
});

export const startSong = (song_duration) => ({
  type: START_SONG,
  song_duration
});

export const getCurrentTime = (current_time) => ({
  type: GET_CURRENT_TIME,
  current_time
});
