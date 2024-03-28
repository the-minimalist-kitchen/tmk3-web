// load service worker at www/
navigator.serviceWorker.register('/sw.js')
	.then(reg => console.log('registered /sw.js', reg))
	// chain progressive feature load
	// can be intercepted through the sworker relative to url
	.catch(err => console.log('failed to register /sw.js', err));


