document.addEventListener("DOMContentLoaded", function(event) {
	var lazyImages =[].slice.call(
	 document.querySelectorAll(".lazy > source")
	)
	
	if ("IntersectionObserver" in window && 'IntersectionObserverEntry' in window) {
		 let lazyImageObserver = 
			new IntersectionObserver(function(entries, observer) {
				 entries.forEach(function(entry) {
					if (entry.isIntersecting) {      
						 let lazyImage = entry.target;
						 lazyImage.srcset = lazyImage.dataset.srcset;
						 lazyImage.nextElementSibling.srcset = lazyImage.dataset.srcset;
						 lazyImage.nextElementSibling.classList.add('fade-in');
						 lazyImage.parentElement.classList.remove("lazy");
						lazyImageObserver.unobserve(lazyImage);
					 }
				});
			 });

		 lazyImages.forEach(function(lazyImage) {
			lazyImageObserver.observe(lazyImage);
		 });
	} else {
		
		// Not supported, load all images immediately
		let active = false;
 
		const lazyLoad = function() {
			if (active === false) {
				active = true;
				setTimeout(function() {
					lazyImages.forEach(function(lazyImage) {
						if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
							lazyImage.srcset = lazyImage.dataset.srcset;
							lazyImage.nextElementSibling.src = lazyImage.dataset.srcset;
							lazyImage.nextElementSibling.classList.add('fade-in');
							lazyImage.parentElement.classList.remove("lazy");
							
							lazyImages = lazyImages.filter(function(image) {
								return image !== lazyImage;
							});
	
							if (lazyImages.length === 0) {
								document.removeEventListener("scroll", lazyLoad);
								window.removeEventListener("resize", lazyLoad);
								window.removeEventListener("orientationchange", lazyLoad);
							}
						}
					});
	
					active = false;
				}, 200);
			}
		};
	
		document.addEventListener("scroll", lazyLoad);
		window.addEventListener("resize", lazyLoad);
		window.addEventListener("orientationchange", lazyLoad);
	 }

 });