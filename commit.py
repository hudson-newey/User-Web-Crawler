import webbrowser as wb
import os

# an example api endpoint is the archive.org save endpoint
API_ENDPOINT = "https://web.archive.org/save/"

# appending pages to archive.org involves iterating through the detected websites and going to the endpoint
for i in range(open('pending.log', 'r').read().count("$")):
	with open('pending.log', 'r') as fp:
		# TODO: replace this with a web request
		webpage = (fp.readlines()[i]).replace('$','')
		wb.open_new_tab(API_ENDPOINT + webpage)

# create and delete old file
# by default, google is appended to the detected sites files
# this is because, for the forseeable future, google is going to be a URL
os.remove("pending.log")
f = open("pending.log", "a")
f.write("https://www.google.com")
f.close()
