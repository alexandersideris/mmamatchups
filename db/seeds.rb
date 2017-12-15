require 'open-uri'
require 'nokogiri'

Fighter.destroy_all
Fight.destroy_all

require 'open-uri'
require 'nokogiri'


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

  Fighter.create(name: name, division: division, rank: rank, rank_number: rank_number, img_url: img_url, fight_record: the_record)

end

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
		fighter_rank = '# '+ rank + ' ' + division_name
		name = division_rank.css('.name-column').css('a').inner_text.strip
		#puts name

		str1 = '<a href="'
		str2 = '">'
		url = 'http://www.ufc.com'+division_rank.css('.name-column').css('a').to_s[/#{str1}(.*?)#{str2}/m, 1]

		createFighter(division_name, fighter_rank, name, url, rank)

	}

}
