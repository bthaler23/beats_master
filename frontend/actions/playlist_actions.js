export const PLAY_SONG = "PLAY_SONG";
export const STOP_SONG = "STOP_SONG";

export const playSong = (song) => ({
  type: PLAY_SONG,
  song

});

export const stopSong = () => ({
  type: STOP_SONG

});
