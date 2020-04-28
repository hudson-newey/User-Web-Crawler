import webbrowser as wb
import os

# commmit
for i in range(open('pending.log', 'r').read().count("$")):
	f = open('pending.log', 'r')
	wb.open_new_tab("https://web.archive.org/save/"+(f.readlines()[i]).replace('$',''))

# create and delete old file
os.remove("pending.log")
f = open("pending.log", "a")
f.write("https://www.google.com")
f.close()