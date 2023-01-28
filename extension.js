// ==UserScript==
// @name         Archive.org Crawler
// @version      1.0
// @description  When the you visits a webpage you are anonymously adding to a Archived Internet
// @include      *://*
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    let captureContainer = document.createElement('iframe');
	captureContainer.setAttribute('id', 'archiveCrawler'); // assign an id
	captureContainer.style.visibility = "hidden";
	captureContainer.style.height = "0px";
    captureContainer.style.width = "0px";
	captureContainer.setAttribute('src', '%ArchiveCrawlerServer%?v=' + window.location.href);
	document.body.appendChild(captureContainer);
})();
