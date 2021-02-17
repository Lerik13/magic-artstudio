function canUseWebP() {
	var elem = document.createElement('canvas');

	if (!!(elem.getContext && elem.getContext('2d'))) {
			// was able or not to get WebP representation
			return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
	}

	// very old browser like IE 8, canvas not supported
	return false;
}
var hasWebP = canUseWebP();

const images = document.querySelector("[data-srcset]");
let pathToFileBefore = '';

function preloadImage(img) {
	const src = img.getAttribute("data-srcset");
	if (!src) {
		return;
	}
	console.log('src = ' + src);
	var pathToFile = src.replace(/^images\/dest\//, ''); // delete 1-st folder
	pathToFile = pathToFile.replace(/^.+?[/]/, ''); // delete 2-nd folder
	pathToFile = pathToFile.replace(/\..+$/, ''); //delete extension
	
	if (hasWebP && (pathToFile == pathToFileBefore) ) { // that's mean file with this name (ext='webp') has already downloaded
		return;
	}

	img.srcset = src;
	pathToFileBefore = pathToFile; 
}

const imgOptions = {
	treshold: 0,
	rootMargin: "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			return;
		} else {
			preloadImage(entry.target);
			imgObserver.unobserve(entry.target);
		}
	})
}, imgOptions);

images.forEach(image => {
	imgObserver.observe(image);
})








/*
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
 */