package main

import (
	"log"
	"net/http"
	"os"
	"io"
	"io/ioutil"
	"strings"
)

func main() {
	http.HandleFunc("/", func (w http.ResponseWriter, r *http.Request) {
		website := (r.URL.Query()).Get("v")

		file, err := os.OpenFile("./pending.log", os.O_WRONLY|os.O_APPEND, 0755)
		if err != nil {
			ioutil.WriteFile("./pending.log", []byte(website + "$"), 0755)
		}
		defer file.Close()

		// check if the file is already in the DNS list
		if (!(strings.Contains(readFile("./pending.log"), website + "$"))) {
			// write to file
			file.WriteString(website+"$\n")
			log.Println(website)
		}
  	})

  	log.Println("Started server on port :4433")
  	http.ListenAndServe(":4433", nil)
}

func readFile(path string) string {
    // Open file for reading.
    var file, err = os.OpenFile(path, os.O_RDWR, 0644)
    defer file.Close()

    // Read file, line by line
    var text = make([]byte, 1024)
    for {
        _, err = file.Read(text)

        // Break if finally arrived at end of file
        if err == io.EOF {
            break
        }

        // Break if error occured
        if err != nil && err != io.EOF {
            break
        }
	}
	
	return string(text)
}