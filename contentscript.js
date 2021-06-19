var s = document.createElement('script');
s.src = chrome.extension.getURL('calc.js');
(document.head || document.documentElement).appendChild(s);