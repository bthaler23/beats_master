# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

u = User.create(username: 'DJmixmixer', email: 'guest@guest.com', password: 'password' );
c = User.create(username: 'Chance The Rapper', email: 'chance@rapping.com', password: 'cocoabutter')

Song.destroy_all

image = open("https://s3.amazonaws.com/beatsmaster-dev/songs/songs/chance_the_rapper-acidrap.jpg")

songs = [
  "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/000/000/003/original/ghost.mp3",
  "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/000/000/007/original/good_morning.mp3",
  "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/good_ass_intro.mp3",
  "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/pusha_man.mp3",
  "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/cocoa_butter_kisses.mp3",
  "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/juice.mp3",
  "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/lost.mp3",
  "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/everbodys_something.mp3",
  "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/interlude.mp3",
  "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/favorite-song.mp3",
  "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/nana.mp3",
  "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/smoke-again.mp3",
  "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/acid-rain.mp3",
  "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/chain-smoker.mp3",
  "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/everythings-good.mp3"
]

opened_songs = []
songs.each_with_index do |song, i|
  opened_songs[i] = open(song)
end


Song.create(title: "Ghost!", artist_id: u.id, genre: "Hip-Hop", song: opened_songs[0] )
Song.create(title: "Good Morning", artist_id: u.id, genre: "Rap", song: opened_songs[1] )
Song.create(title: "Good Ass Intro", artist_id: c.id, genre: "Hip-Hop", song: opened_songs[2] , image: image )
Song.create(title: "Pusha Man", artist_id: c.id, genre: "Hip-Hop", song: opened_songs[3], image: image)
Song.create(title: "Cocoa Butter Kisses", artist_id: c.id, genre: "Hip-Hop", song: opened_songs[4], image: image)
Song.create(title: "Juice", artist_id: c.id, genre: "Hip-Hop", song: opened_songs[5], image: image)
Song.create(title: "Lost", artist_id: c.id, genre: "Hip-Hop", song: opened_songs[6], image: image)
Song.create(title: "Everbody's Something", artist_id: c.id, genre: "Hip-Hop", song: opened_songs[7], image: image)
Song.create(title: "Interlude(That's Love)", artist_id: c.id, genre: "Hip-Hop", song: opened_songs[8], image: image)
Song.create(title: "Favorite Song", artist_id: c.id, genre: "Rap", song: opened_songs[9], image: image)
Song.create(title: "NaNa", artist_id: c.id, genre: "Hip-Hop", song: opened_songs[10], image: image)
Song.create(title: "Smoke Again", artist_id: c.id, genre: "Hip-Hop", song: opened_songs[11], image: image)
Song.create(title: "Acid Rain", artist_id: c.id, genre: "Hip-Hop", song: opened_songs[12], image: image)
Song.create(title: "Chain Smoker", artist_id: c.id, genre: "Hip-Hop", song: opened_songs[13], image: image)
Song.create(title: "Everything's Good", artist_id: c.id, genre: "Hip-Hop", song: opened_songs[14], image: image)
