# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Song.destroy_all

s = Song.new(title: "Ghost!", artist_id: 1, genre: "Hip-Hop");
s.song = File.open("#{Rails.root}/app/assets/songs/ghost.mp3");
s.save!

y = Song.new(title: "Good Morning", artist_id:1, genre: "Hip-Hop");
y.song = File.open("#{Rails.root}/app/assets/songs/good_morning.mp3")
y.save!
