
const configURL = chrome.extension.getURL('cheats/config.json');
const xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", configURL, false); // false for synchronous request
xmlHttp.send(null);
const config = JSON.parse(xmlHttp.responseText);


if(config[location.href]) {
	const libcheat = document.createElement('script');
	libcheat.src = chrome.extension.getURL('libcheat.js');
	(document.head || document.documentElement).appendChild(libcheat);

	const s = document.createElement('script');
	s.src = chrome.extension.getURL('cheats/'+config[location.href]);
	(document.head || document.documentElement).appendChild(s);
}
