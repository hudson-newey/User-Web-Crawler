// ==UserScript==
// @name         User Web Crawler
// @version      1.0
// @description  Index the web through your browsing activities
// @include      *://*
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    let captureContainer = document.createElement('iframe');
	captureContainer.setAttribute('id', 'userWebCrawler'); // assign an id
	captureContainer.style.visibility = "hidden";
	captureContainer.style.height = "0px";
    captureContainer.style.width = "0px";
	// you will need to change the port number or endpoint here, depending on the configuration of your local commit server
	captureContainer.setAttribute('src', 'http://localhost:8080?v=' + window.location.href);
	document.body.appendChild(captureContainer);
})();
