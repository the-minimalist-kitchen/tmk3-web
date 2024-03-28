// load service worker at www/
navigator.serviceWorker.register('/sw.js')
	.then(reg => console.log('registered /sw.js', reg))
	.catch(err => console.log('failed to register /sw.js', err));
