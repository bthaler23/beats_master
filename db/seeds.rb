# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

# image = open("https://s3.amazonaws.com/beatsmaster-dev/songs/songs/chance_the_rapper-acidrap.jpg")
image2 = open("https://s3.amazonaws.com/beatsmaster-dev/songs/images/tassos.jpeg");
# image3 = open("https://s3.amazonaws.com/beatsmaster-dev/songs/songs/bumpngrind.jpg")
zelda_image = open("https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/zelda_image.jpg");
toby_img = open("https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby_img.jpg")
undertale_image = open("https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+cover.png")
zelda_author = open("https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/zelda_background.jpg")
halo_user_image = open("https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/halo/halo.jpg")
halo1_image = open("https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/halo/halo_combat_evolved_soundtrack.jpg")
halo3_image = open("https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/halo/halo3original.jpg")

u = User.create(username: 'DJMixMixer', email: 'guest@guest.com', password: 'password' )
# c = User.create(username: 'Chance The Rapper', email: 'chance@rapping.com', password: 'cocoabutter', image: image)
# d = User.create(username: 'Golden God', email: 'rkelly@showers.com', password: 'showering', image: image3)
z = User.create(username: 'Zelda', email: 'zelda@link.com', password: 'ocarina', image: zelda_author)
t = User.create(username: 'Toby Fox', email: 'undertale@undertale.com', password: 'doggos', image: toby_img)
h = User.create(username: 'Halo', email: 'halo@halo.com', password: 'killaliens', image: halo_user_image)
Song.destroy_all



songs = [
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+71+Undertale.mp3", 'Undertale', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/halo/Halo+-+Combat+Evolved+soundtrackHalo.mp3", "Halo", h.id, 'Halo', halo1_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/01-the-legend-of-zelda-25th-annivers.mp3", "Zelda 25th Anniversary", z.id, 'Zelda', zelda_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+51+Another+Medium.mp3", 'Another Medium', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+01+Once+Upon+a+Time.mp3", 'Once Upon a Time', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/05-great-fairy-s-fountain-theme.mp3", 'Great Fairy Fountain Theme', z.id, 'Zelda', zelda_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+10+Ghost+Fight.mp3", 'Ghost Fight', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+63+It's+Raining+Somewhere+Else.mp3", "It's Raining Somewhere Else", t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/04-gerudo-valley.mp3", 'Gerudo Valley', z.id, 'Zelda', zelda_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+14+Heartache.mp3", 'Heartache', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/08-ballad-of-the-goddess-from-skyway.mp3", 'Ballad of the Goddess', z.id, 'Zelda', zelda_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+98+Battle+Against+a+True+Hero.mp3", 'Battle Against a True Hero', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+34+Memory.mp3", 'Memory', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+04+Fallen+Down.mp3", 'Fallen Down', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+12+Home.mp3", 'Home', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+36+Dummy!.mp3", 'Dummy!', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+46+Spear+of+Justice.mp3", 'Spear of Justice', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+50+Metal+Crusher.mp3", 'Metal Crusher', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+54+Hotel.mp3", 'Hotel', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+84+Amalgam.mp3", 'Amalgam', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+59+Spider+Dance.mp3", 'Spider Dance', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/02-kakariko-village-twilight-princ.mp3", "Kakariko Village", z.id, 'Zelda', zelda_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+65+CORE.mp3", 'CORE', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+77+ASGORE.mp3", 'ASGORE', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+94+Respite.mp3", 'Respite', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/03-the-wind-waker-symphonic-movement.mp3", "Wind Waker", z.id, 'Zelda', zelda_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+87+Hopes+and+Dreams.mp3", 'Hopes and Dreams', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/halo/14+-+Behold+a+Pale+Horse.mp3", "Behold a Pale Horse", h.id, 'Halo 3', halo3_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+90+His+Theme.mp3", 'His Theme', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/07-the-legend-of-zelda-main-theme-me.mp3", 'Zelda Main Theme', z.id, 'Zelda', zelda_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/halo/03+-+Installation+04.mp3", "Installation 04", h.id, 'Halo', halo1_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+100+MEGALOVANIA.mp3", 'MEGALOVANIA', t.id, 'Undertale', undertale_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/06-twilight-princess-symphonic-movem.mp3", 'Twilight Princess', z.id, 'Zelda', zelda_image],
  ["https://s3.amazonaws.com/beatsmaster-pro/songs/seed_data/undertale/toby+fox+-+UNDERTALE+Soundtrack+-+31+Waterfall.mp3", 'Waterfall', t.id, 'Undertale', undertale_image]

  # "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/000/000/003/original/ghost.mp3",
  # "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/000/000/007/original/good_morning.mp3",
  # "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/good_ass_intro.mp3",
  # "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/pusha_man.mp3",
  # "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/cocoa_butter_kisses.mp3",
  # "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/juice.mp3",
  # "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/lost.mp3",
  # "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/everbodys_something.mp3",
  # "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/interlude.mp3",
  # "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/favorite-song.mp3",
  # "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/nana.mp3",
  # "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/smoke-again.mp3",
  # "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/acid-rain.mp3",
  # "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/chain-smoker.mp3",
  # "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/everythings-good.mp3",
  # "https://s3.amazonaws.com/beatsmaster-dev/songs/songs/bumpngrind.mp3"
]


songs.each_with_index do |song, i|
  puts "Opening #{song[1]}, #{songs.length - i} songs left to go"
  temp_song = open(song[0])
  Song.create(title: song[1], artist_id: song[2], genre: song[3], song: temp_song, image: song[4])
end


Comment.destroy_all
Like.destroy_all
