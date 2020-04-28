// ==UserScript==
// @name         Archive.org Crawler
// @version      1.0
// @description  When the you visits a webpage you are anonymously adding to a Archived Internet
// @include      *://*
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    let ifrm = document.createElement('iframe');
	ifrm.setAttribute('id', 'archiveCrawler'); // assign an id
	ifrm.style.visibility = "hidden";
	ifrm.style.height = "0px";
    ifrm.style.width = "0px";
	ifrm.setAttribute('src', '%archiveCrawlerServer%?v=' + window.location.href);
	document.body.appendChild(ifrm);
})();
