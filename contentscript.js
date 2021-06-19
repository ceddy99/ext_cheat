const libcheat = document.createElement('script');
libcheat.src = chrome.extension.getURL('libcheat.js');
(document.head || document.documentElement).appendChild(libcheat);

const s = document.createElement('script');
s.src = chrome.extension.getURL('cheats/calc.js');
(document.head || document.documentElement).appendChild(s);