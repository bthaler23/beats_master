
export const createSong = (song) => {

  return $.ajax({
    method: 'POST',
    url: 'api/songs',
    data: song
  })

}

export const getSongs = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/songs'
  })
}


export const getSong = (songId) => {
  return $.ajax({
    method: 'GET',
    url: `api/songs/${songId}`
  })
}
