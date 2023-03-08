# User Web Crawler

The user web crawler is a website indexer that is built upon what websites a browser navigates to

## How it works

The user web crawler works through volunteering users who install an extension on their browsers. When the user visits a webpage, the URL is anonymously added to an upstream database that holds all the unique webpages.
_Note: There is currently no centralized database that the data is pushed to. To start logging data, you will need to setup your own backend service_

## Usage

```sh
go run server.go
```

Install the [Tampermonkey](https://github.com/Tampermonkey/tampermonkey) browser extension

Run the following Python3 script when you want to push your code to the upstream database

```sh
python3 ./commit.py
```
