require 'open-uri'
require 'nokogiri'


$flyweights = Array.new([])
$bantamweights = Array.new([])
$featherweights = Array.new([])
$lightweights = Array.new([])
$welterweights = Array.new([])
$middleweights = Array.new([])
$lightheavyweights = Array.new([])
$heavyweights = Array.new([])

$womenstrawweights = Array.new([])
$womenflyweights = Array.new([])
$womenbantamweights = Array.new([])
$womenfeatherweights = Array.new([])

def createFights
	puts 'Flyweights:' + $flyweights.to_s
	puts 'Bantamweights:' + $bantamweights.to_s
	puts 'Featherweights:' + $featherweights.to_s
	puts 'Lightweights:' + $lightweights.to_s
	puts 'Welterweights:' + $welterweights.to_s
	puts 'Middleweights:' + $middleweights.to_s
	puts 'Light Heavyweights:' + $lightheavyweights.to_s
	puts 'Heavyweights:' + $heavyweights.to_s

	puts 'Women Strawweights:' + $womenstrawweights.to_s
	puts 'Women Flyweights:' + $womenflyweights.to_s
	puts 'Women Bantamweights:' + $womenbantamweights.to_s
	puts 'Women Featherweights:' + $womenfeatherweights.to_s
end

def createFighter(division, rank, name, url, rank_number)
	puts division

	puts rank

	puts name

	#Fighter's photo url
	document_two = open(url)
	content_two = document_two.read
	parsed_content_two = Nokogiri::HTML(content_two)

	photo_url = parsed_content_two.css('div#content').css('.content-inner').css('div#fighter-details').css('.fighter-image')

	str1 ='<img src="//'
	str2 = '" alt'

	puts photo_url.to_s[/#{str1}(.*?)#{str2}/m, 1].to_s
  img_url = 'http://'+photo_url.to_s[/#{str1}(.*?)#{str2}/m, 1].to_s

  fighter_details = parsed_content_two.css('div#content').css('.content-inner').css('div#fighter-details').css('div#fighter-overlay')

	# Fighter's record

	str1 = '<span class="fighter-record">'
	str2 = '<span'

	record = fighter_details.css('.fighter-record').to_s
	puts 'Record: ' + record[/#{str1}(.*?)#{str2}/m, 1].to_s
  the_record = record[/#{str1}(.*?)#{str2}/m, 1].to_s

	# Check if the fighter already exists in the database. We will pretend that names are unique, which they are atm
	f = Fighter.where(name: name).take
	if f != nil
		f.division = division
		f.rank = rank
		f.rank_number = rank_number
		f.img_url = img_url
		f.fight_record = the_record
		f.is_updated = 'true'
		f.save
	else
		f = Fighter.create(name: name, division: division, rank: rank, rank_number: rank_number, img_url: img_url, fight_record: the_record, is_updated: 'true')
	end


	if division == 'Flyweight'
		$flyweights.push(f)
	elsif division == 'Bantamweight'
		$bantamweights.push(f)
	elsif division == 'Featherweight'
		$featherweights.push(f)
	elsif division == 'Lightweight'
		$lightweights.push(f)
	elsif division == 'Welterweight'
		$welterweights.push(f)
	elsif division == 'Middleweight'
		$middleweights.push(f)
	elsif division == 'Light Heavyweight'
		$lightheavyweights.push(f)
	elsif division == 'Heavyweight'
		$heavyweights.push(f)
	elsif division == "Women's Strawweight"
		$womenstrawweights.push(f)
	elsif division == "Women's Flyweight"
		$womenflyweights.push(f)
	elsif division == "Women's Bantamweight"
		$womenbantamweights.push(f)
	elsif division == "Women's Featherweight"
		$womenfeatherweights.push(f)
	end


end

def createFights
	puts 'Flyweights:' + $flyweights.to_s
	$i = 0
	while $i < 16  do
		if $i + 1 < 16
			Fight.create(division: 'Flyweight', upvotes: 0, fighter_one_id: $flyweights[$i].id, fighter_two_id: $flyweights[$i+1].id)
		end
		if $i + 2 < 16
			Fight.create(division: 'Flyweight', upvotes: 0, fighter_one_id: $flyweights[$i].id, fighter_two_id: $flyweights[$i+2].id)
		end
		if $i + 3 < 16
			Fight.create(division: 'Flyweight', upvotes: 0, fighter_one_id: $flyweights[$i].id, fighter_two_id: $flyweights[$i+3].id)
		end
		if $i + 4 < 16
			Fight.create(division: 'Flyweight', upvotes: 0, fighter_one_id: $flyweights[$i].id, fighter_two_id: $flyweights[$i+4].id)
		end
		if $i + 5 < 16
			Fight.create(division: 'Flyweight', upvotes: 0, fighter_one_id: $flyweights[$i].id, fighter_two_id: $flyweights[$i+5].id)
		end
		if $i + 6 < 16
			Fight.create(division: 'Flyweight', upvotes: 0, fighter_one_id: $flyweights[$i].id, fighter_two_id: $flyweights[$i+6].id)
		end
		if $i + 7 < 16
			Fight.create(division: 'Flyweight', upvotes: 0, fighter_one_id: $flyweights[$i].id, fighter_two_id: $flyweights[$i+7].id)
		end
		if $i + 8 < 16
			Fight.create(division: 'Flyweight', upvotes: 0, fighter_one_id: $flyweights[$i].id, fighter_two_id: $flyweights[$i+8].id)
		end
   	$i +=1
	end

	puts 'Bantamweights:' + $bantamweights.to_s
	$i = 0
	while $i < 16  do
		if $i + 1 < 16
			Fight.create(division: 'Bantamweight', upvotes: 0, fighter_one_id: $bantamweights[$i].id, fighter_two_id: $bantamweights[$i+1].id)
		end
		if $i + 2 < 16
			Fight.create(division: 'Bantamweight', upvotes: 0, fighter_one_id: $bantamweights[$i].id, fighter_two_id: $bantamweights[$i+2].id)
		end
		if $i + 3 < 16
			Fight.create(division: 'Bantamweight', upvotes: 0, fighter_one_id: $bantamweights[$i].id, fighter_two_id: $bantamweights[$i+3].id)
		end
		if $i + 4 < 16
			Fight.create(division: 'Bantamweight', upvotes: 0, fighter_one_id: $bantamweights[$i].id, fighter_two_id: $bantamweights[$i+4].id)
		end
		if $i + 5 < 16
			Fight.create(division: 'Bantamweight', upvotes: 0, fighter_one_id: $bantamweights[$i].id, fighter_two_id: $bantamweights[$i+5].id)
		end
		if $i + 6 < 16
			Fight.create(division: 'Bantamweight', upvotes: 0, fighter_one_id: $bantamweights[$i].id, fighter_two_id: $bantamweights[$i+6].id)
		end
		if $i + 7 < 16
			Fight.create(division: 'Bantamweight', upvotes: 0, fighter_one_id: $bantamweights[$i].id, fighter_two_id: $bantamweights[$i+7].id)
		end
		if $i + 8 < 16
			Fight.create(division: 'Bantamweight', upvotes: 0, fighter_one_id: $bantamweights[$i].id, fighter_two_id: $bantamweights[$i+8].id)
		end
   	$i +=1
	end

	puts 'Featherweights:' + $featherweights.to_s
	$i = 0
	while $i < 16  do
		if $i + 1 < 16
			Fight.create(division: 'Featherweight', upvotes: 0, fighter_one_id: $featherweights[$i].id, fighter_two_id: $featherweights[$i+1].id)
		end
		if $i + 2 < 16
			Fight.create(division: 'Featherweight', upvotes: 0, fighter_one_id: $featherweights[$i].id, fighter_two_id: $featherweights[$i+2].id)
		end
		if $i + 3 < 16
			Fight.create(division: 'Featherweight', upvotes: 0, fighter_one_id: $featherweights[$i].id, fighter_two_id: $featherweights[$i+3].id)
		end
		if $i + 4 < 16
			Fight.create(division: 'Featherweight', upvotes: 0, fighter_one_id: $featherweights[$i].id, fighter_two_id: $featherweights[$i+4].id)
		end
		if $i + 5 < 16
			Fight.create(division: 'Featherweight', upvotes: 0, fighter_one_id: $featherweights[$i].id, fighter_two_id: $featherweights[$i+5].id)
		end
		if $i + 6 < 16
			Fight.create(division: 'Featherweight', upvotes: 0, fighter_one_id: $featherweights[$i].id, fighter_two_id: $featherweights[$i+6].id)
		end
		if $i + 7 < 16
			Fight.create(division: 'Featherweight', upvotes: 0, fighter_one_id: $featherweights[$i].id, fighter_two_id: $featherweights[$i+7].id)
		end
		if $i + 8 < 16
			Fight.create(division: 'Featherweight', upvotes: 0, fighter_one_id: $featherweights[$i].id, fighter_two_id: $featherweights[$i+8].id)
		end
   	$i +=1
	end

	puts 'Lightweights:' + $lightweights.to_s
	$i = 0
	while $i < 16  do
		if $i + 1 < 16
			Fight.create(division: 'Lightweight', upvotes: 0, fighter_one_id: $lightweights[$i].id, fighter_two_id: $lightweights[$i+1].id)
		end
		if $i + 2 < 16
			Fight.create(division: 'Lightweight', upvotes: 0, fighter_one_id: $lightweights[$i].id, fighter_two_id: $lightweights[$i+2].id)
		end
		if $i + 3 < 16
			Fight.create(division: 'Lightweight', upvotes: 0, fighter_one_id: $lightweights[$i].id, fighter_two_id: $lightweights[$i+3].id)
		end
		if $i + 4 < 16
			Fight.create(division: 'Lightweight', upvotes: 0, fighter_one_id: $lightweights[$i].id, fighter_two_id: $lightweights[$i+4].id)
		end
		if $i + 5 < 16
			Fight.create(division: 'Lightweight', upvotes: 0, fighter_one_id: $lightweights[$i].id, fighter_two_id: $lightweights[$i+5].id)
		end
		if $i + 6 < 16
			Fight.create(division: 'Lightweight', upvotes: 0, fighter_one_id: $lightweights[$i].id, fighter_two_id: $lightweights[$i+6].id)
		end
		if $i + 7 < 16
			Fight.create(division: 'Lightweight', upvotes: 0, fighter_one_id: $lightweights[$i].id, fighter_two_id: $lightweights[$i+7].id)
		end
		if $i + 8 < 16
			Fight.create(division: 'Lightweight', upvotes: 0, fighter_one_id: $lightweights[$i].id, fighter_two_id: $lightweights[$i+8].id)
		end
   	$i +=1
	end

	puts 'Welterweights:' + $welterweights.to_s
	$i = 0
	while $i < 16  do
		if $i + 1 < 16
			Fight.create(division: 'Welterweight', upvotes: 0, fighter_one_id: $welterweights[$i].id, fighter_two_id: $welterweights[$i+1].id)
		end
		if $i + 2 < 16
			Fight.create(division: 'Welterweight', upvotes: 0, fighter_one_id: $welterweights[$i].id, fighter_two_id: $welterweights[$i+2].id)
		end
		if $i + 3 < 16
			Fight.create(division: 'Welterweight', upvotes: 0, fighter_one_id: $welterweights[$i].id, fighter_two_id: $welterweights[$i+3].id)
		end
		if $i + 4 < 16
			Fight.create(division: 'Welterweight', upvotes: 0, fighter_one_id: $welterweights[$i].id, fighter_two_id: $welterweights[$i+4].id)
		end
		if $i + 5 < 16
			Fight.create(division: 'Welterweight', upvotes: 0, fighter_one_id: $welterweights[$i].id, fighter_two_id: $welterweights[$i+5].id)
		end
		if $i + 6 < 16
			Fight.create(division: 'Welterweight', upvotes: 0, fighter_one_id: $welterweights[$i].id, fighter_two_id: $welterweights[$i+6].id)
		end
		if $i + 7 < 16
			Fight.create(division: 'Welterweight', upvotes: 0, fighter_one_id: $welterweights[$i].id, fighter_two_id: $welterweights[$i+7].id)
		end
		if $i + 8 < 16
			Fight.create(division: 'Welterweight', upvotes: 0, fighter_one_id: $welterweights[$i].id, fighter_two_id: $welterweights[$i+8].id)
		end
   	$i +=1
	end

	puts 'Middleweights:' + $middleweights.to_s
	$i = 0
	while $i < 16  do
		if $i + 1 < 16
			Fight.create(division: 'Middleweight', upvotes: 0, fighter_one_id: $middleweights[$i].id, fighter_two_id: $middleweights[$i+1].id)
		end
		if $i + 2 < 16
			Fight.create(division: 'Middleweight', upvotes: 0, fighter_one_id: $middleweights[$i].id, fighter_two_id: $middleweights[$i+2].id)
		end
		if $i + 3 < 16
			Fight.create(division: 'Middleweight', upvotes: 0, fighter_one_id: $middleweights[$i].id, fighter_two_id: $middleweights[$i+3].id)
		end
		if $i + 4 < 16
			Fight.create(division: 'Middleweight', upvotes: 0, fighter_one_id: $middleweights[$i].id, fighter_two_id: $middleweights[$i+4].id)
		end
		if $i + 5 < 16
			Fight.create(division: 'Middleweight', upvotes: 0, fighter_one_id: $middleweights[$i].id, fighter_two_id: $middleweights[$i+5].id)
		end
		if $i + 6 < 16
			Fight.create(division: 'Middleweight', upvotes: 0, fighter_one_id: $middleweights[$i].id, fighter_two_id: $middleweights[$i+6].id)
		end
		if $i + 7 < 16
			Fight.create(division: 'Middleweight', upvotes: 0, fighter_one_id: $middleweights[$i].id, fighter_two_id: $middleweights[$i+7].id)
		end
		if $i + 8 < 16
			Fight.create(division: 'Middleweight', upvotes: 0, fighter_one_id: $middleweights[$i].id, fighter_two_id: $middleweights[$i+8].id)
		end
   	$i +=1
	end

	puts 'Light Heavyweights:' + $lightheavyweights.to_s
	$i = 0
	while $i < 16  do
		if $i + 1 < 16
			Fight.create(division: 'Light Heavyweight', upvotes: 0, fighter_one_id: $lightheavyweights[$i].id, fighter_two_id: $lightheavyweights[$i+1].id)
		end
		if $i + 2 < 16
			Fight.create(division: 'Light Heavyweight', upvotes: 0, fighter_one_id: $lightheavyweights[$i].id, fighter_two_id: $lightheavyweights[$i+2].id)
		end
		if $i + 3 < 16
			Fight.create(division: 'Light Heavyweight', upvotes: 0, fighter_one_id: $lightheavyweights[$i].id, fighter_two_id: $lightheavyweights[$i+3].id)
		end
		if $i + 4 < 16
			Fight.create(division: 'Light Heavyweight', upvotes: 0, fighter_one_id: $lightheavyweights[$i].id, fighter_two_id: $lightheavyweights[$i+4].id)
		end
		if $i + 5 < 16
			Fight.create(division: 'Light Heavyweight', upvotes: 0, fighter_one_id: $lightheavyweights[$i].id, fighter_two_id: $lightheavyweights[$i+5].id)
		end
		if $i + 6 < 16
			Fight.create(division: 'Light Heavyweight', upvotes: 0, fighter_one_id: $lightheavyweights[$i].id, fighter_two_id: $lightheavyweights[$i+6].id)
		end
		if $i + 7 < 16
			Fight.create(division: 'Light Heavyweight', upvotes: 0, fighter_one_id: $lightheavyweights[$i].id, fighter_two_id: $lightheavyweights[$i+7].id)
		end
		if $i + 8 < 16
			Fight.create(division: 'Light Heavyweight', upvotes: 0, fighter_one_id: $lightheavyweights[$i].id, fighter_two_id: $lightheavyweights[$i+8].id)
		end
   	$i +=1
	end

	puts 'Heavyweights:' + $heavyweights.to_s
	$i = 0
	while $i < 16  do
		if $i + 1 < 16
			Fight.create(division: 'Heavyweight', upvotes: 0, fighter_one_id: $heavyweights[$i].id, fighter_two_id: $heavyweights[$i+1].id)
		end
		if $i + 2 < 16
			Fight.create(division: 'Heavyweight', upvotes: 0, fighter_one_id: $heavyweights[$i].id, fighter_two_id: $heavyweights[$i+2].id)
		end
		if $i + 3 < 16
			Fight.create(division: 'Heavyweight', upvotes: 0, fighter_one_id: $heavyweights[$i].id, fighter_two_id: $heavyweights[$i+3].id)
		end
		if $i + 4 < 16
			Fight.create(division: 'Heavyweight', upvotes: 0, fighter_one_id: $heavyweights[$i].id, fighter_two_id: $heavyweights[$i+4].id)
		end
		if $i + 5 < 16
			Fight.create(division: 'Heavyweight', upvotes: 0, fighter_one_id: $heavyweights[$i].id, fighter_two_id: $heavyweights[$i+5].id)
		end
		if $i + 6 < 16
			Fight.create(division: 'Heavyweight', upvotes: 0, fighter_one_id: $heavyweights[$i].id, fighter_two_id: $heavyweights[$i+6].id)
		end
		if $i + 7 < 16
			Fight.create(division: 'Heavyweight', upvotes: 0, fighter_one_id: $heavyweights[$i].id, fighter_two_id: $heavyweights[$i+7].id)
		end
		if $i + 8 < 16
			Fight.create(division: 'Heavyweight', upvotes: 0, fighter_one_id: $heavyweights[$i].id, fighter_two_id: $heavyweights[$i+8].id)
		end
   	$i +=1
	end

	# WOMEN

	puts 'Women Strawweights:' + $womenstrawweights.to_s
	$i = 0
	while $i < 16  do
		if $i + 1 < 16
			Fight.create(division: "Women's Strawweight", upvotes: 0, fighter_one_id: $womenstrawweights[$i].id, fighter_two_id: $womenstrawweights[$i+1].id)
		end
		if $i + 2 < 16
			Fight.create(division: "Women's Strawweight", upvotes: 0, fighter_one_id: $womenstrawweights[$i].id, fighter_two_id: $womenstrawweights[$i+2].id)
		end
		if $i + 3 < 16
			Fight.create(division: "Women's Strawweight", upvotes: 0, fighter_one_id: $womenstrawweights[$i].id, fighter_two_id: $womenstrawweights[$i+3].id)
		end
		if $i + 4 < 16
			Fight.create(division: "Women's Strawweight", upvotes: 0, fighter_one_id: $womenstrawweights[$i].id, fighter_two_id: $womenstrawweights[$i+4].id)
		end
		if $i + 5 < 16
			Fight.create(division: "Women's Strawweight", upvotes: 0, fighter_one_id: $womenstrawweights[$i].id, fighter_two_id: $womenstrawweights[$i+5].id)
		end
		if $i + 6 < 16
			Fight.create(division: "Women's Strawweight", upvotes: 0, fighter_one_id: $womenstrawweights[$i].id, fighter_two_id: $womenstrawweights[$i+6].id)
		end
		if $i + 7 < 16
			Fight.create(division: "Women's Strawweight", upvotes: 0, fighter_one_id: $womenstrawweights[$i].id, fighter_two_id: $womenstrawweights[$i+7].id)
		end
		if $i + 8 < 16
			Fight.create(division: "Women's Strawweight", upvotes: 0, fighter_one_id: $womenstrawweights[$i].id, fighter_two_id: $womenstrawweights[$i+8].id)
		end
   	$i +=1
	end


	puts 'Women Flyweights:' + $womenflyweights.to_s
	$i = 0
	while $i < 16  do
		if $i + 1 < 16
			Fight.create(division: "Women's Flyweight", upvotes: 0, fighter_one_id: $womenflyweights[$i].id, fighter_two_id: $womenflyweights[$i+1].id)
		end
		if $i + 2 < 16
			Fight.create(division: "Women's Flyweight", upvotes: 0, fighter_one_id: $womenflyweights[$i].id, fighter_two_id: $womenflyweights[$i+2].id)
		end
		if $i + 3 < 16
			Fight.create(division: "Women's Flyweight", upvotes: 0, fighter_one_id: $womenflyweights[$i].id, fighter_two_id: $womenflyweights[$i+3].id)
		end
		if $i + 4 < 16
			Fight.create(division: "Women's Flyweight", upvotes: 0, fighter_one_id: $womenflyweights[$i].id, fighter_two_id: $womenflyweights[$i+4].id)
		end
		if $i + 5 < 16
			Fight.create(division: "Women's Flyweight", upvotes: 0, fighter_one_id: $womenflyweights[$i].id, fighter_two_id: $womenflyweights[$i+5].id)
		end
		if $i + 6 < 16
			Fight.create(division: "Women's Flyweight", upvotes: 0, fighter_one_id: $womenflyweights[$i].id, fighter_two_id: $womenflyweights[$i+6].id)
		end
		if $i + 7 < 16
			Fight.create(division: "Women's Flyweight", upvotes: 0, fighter_one_id: $womenflyweights[$i].id, fighter_two_id: $womenflyweights[$i+7].id)
		end
		if $i + 8 < 16
			Fight.create(division: "Women's Flyweight", upvotes: 0, fighter_one_id: $womenflyweights[$i].id, fighter_two_id: $womenflyweights[$i+8].id)
		end
   	$i +=1
	end


	puts "Women's Bantamweights:" + $womenbantamweights.to_s
	$i = 0
	while $i < 16  do
		if $i + 1 < 16
			Fight.create(division: "Women's Bantamweight", upvotes: 0, fighter_one_id: $womenbantamweights[$i].id, fighter_two_id: $womenbantamweights[$i+1].id)
		end
		if $i + 2 < 16
			Fight.create(division: "Women's Bantamweight", upvotes: 0, fighter_one_id: $womenbantamweights[$i].id, fighter_two_id: $womenbantamweights[$i+2].id)
		end
		if $i + 3 < 16
			Fight.create(division: "Women's Bantamweight", upvotes: 0, fighter_one_id: $womenbantamweights[$i].id, fighter_two_id: $womenbantamweights[$i+3].id)
		end
		if $i + 4 < 16
			Fight.create(division: "Women's Bantamweight", upvotes: 0, fighter_one_id: $womenbantamweights[$i].id, fighter_two_id: $womenbantamweights[$i+4].id)
		end
		if $i + 5 < 16
			Fight.create(division: "Women's Bantamweight", upvotes: 0, fighter_one_id: $womenbantamweights[$i].id, fighter_two_id: $womenbantamweights[$i+5].id)
		end
		if $i + 6 < 16
			Fight.create(division: "Women's Bantamweight", upvotes: 0, fighter_one_id: $womenbantamweights[$i].id, fighter_two_id: $womenbantamweights[$i+6].id)
		end
		if $i + 7 < 16
			Fight.create(division: "Women's Bantamweight", upvotes: 0, fighter_one_id: $womenbantamweights[$i].id, fighter_two_id: $womenbantamweights[$i+7].id)
		end
		if $i + 8 < 16
			Fight.create(division: "Women's Bantamweight", upvotes: 0, fighter_one_id: $womenbantamweights[$i].id, fighter_two_id: $womenbantamweights[$i+8].id)
		end
   	$i +=1
	end


	puts "Women's Featherweights:" + $womenfeatherweights.to_s
	$i = 0
	while $i < $womenfeatherweights.length  do
		if $i + 1 < 16
			Fight.create(division: "Women's Featherweight", upvotes: 0, fighter_one_id: $womenfeatherweights[$i].id, fighter_two_id: $womenfeatherweights[$i+1].id)
		end
		if $i + 2 < 16
			Fight.create(division: "Women's Featherweight", upvotes: 0, fighter_one_id: $womenfeatherweights[$i].id, fighter_two_id: $womenfeatherweights[$i+2].id)
		end
		if $i + 3 < 16
			Fight.create(division: "Women's Featherweight", upvotes: 0, fighter_one_id: $womenfeatherweights[$i].id, fighter_two_id: $womenfeatherweights[$i+3].id)
		end
		if $i + 4 < 16
			Fight.create(division: "Women's Featherweight", upvotes: 0, fighter_one_id: $womenfeatherweights[$i].id, fighter_two_id: $womenfeatherweights[$i+4].id)
		end
		if $i + 5 < 16
			Fight.create(division: "Women's Featherweight", upvotes: 0, fighter_one_id: $womenfeatherweights[$i].id, fighter_two_id: $womenfeatherweights[$i+5].id)
		end
		if $i + 6 < 16
			Fight.create(division: "Women's Featherweight", upvotes: 0, fighter_one_id: $womenfeatherweights[$i].id, fighter_two_id: $womenfeatherweights[$i+6].id)
		end
		if $i + 7 < 16
			Fight.create(division: "Women's Featherweight", upvotes: 0, fighter_one_id: $womenfeatherweights[$i].id, fighter_two_id: $womenfeatherweights[$i+7].id)
		end
		if $i + 8 < 16
			Fight.create(division: "Women's Featherweight", upvotes: 0, fighter_one_id: $womenfeatherweights[$i].id, fighter_two_id: $womenfeatherweights[$i+8].id)
		end
   	$i +=1
	end


end


fighters = Fighter.all
fighters.each{|fighter|
	fighter.is_updated = 'false'
	fighter.save
}

puts "---------FIGHTERS---------"

document = open('http://www.ufc.com/rankings/')
content = document.read

parsed_content = Nokogiri::HTML(content)

# Get the divisions
divisions = parsed_content.css('div#fighter-rankings').css('div#ranking-lists').css('.ranking-list')

# Delete pound for pound division
divisions.shift

# Delete Women's featherweight division
divisions.pop

divisions.each{|division|
	# Have the division's name ready
	division_name = division.css('.weight-class-name').inner_text.strip

	# Create the champion of the division
	champion_name = division.css('span#champion-fighter-name').inner_text.strip

	champion_rank = 'Champion '+division_name

	str1 = '<a href="'
	str2 = '">'
	url = 'http://www.ufc.com'+division.css('span#champion-fighter-name').css('a').to_s[/#{str1}(.*?)#{str2}/m, 1]

	createFighter(division_name, champion_rank, champion_name, url, 0)

	# Create the challengers of the division

	division_rankings = division.css('.rankings-table').css('tr')
	division_rankings.each{|division_rank|
		rank = division_rank.css('.number-column').inner_text.strip
		fighter_rank = '#'+ rank + ' ' + division_name
		name = division_rank.css('.name-column').css('a').inner_text.strip
		#puts name

		str1 = '<a href="'
		str2 = '">'
		url = 'http://www.ufc.com'+division_rank.css('.name-column').css('a').to_s[/#{str1}(.*?)#{str2}/m, 1]

		createFighter(division_name, fighter_rank, name, url, rank)

	}

}
createFights()

# Now check the fighters where is_updated=false. That means they are no longer ranked in the top 15. Delete their fights and delete them.

unranked_fighters = Fighter.where(is_updated: 'false')
unranked_fighters.each{|f|
	# Delete all their fights
	fights = Fight.where("fighter_one_id = '"+f.id+"' OR fighter_two_id = '"+f.id+"'")
	fight.each{|fi|
		fi.destroy
	}
	f.destroy
}
