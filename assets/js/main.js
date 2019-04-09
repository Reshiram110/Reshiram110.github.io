/* sweetScroll load */
document.addEventListener("DOMContentLoaded", function () {
	const sweetScroll = new SweetScroll({/* some options */});
  
	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS('particles-js', '/assets/js/particles.json', function() {
		console.log('callback - particles.js config loaded');
	});
});