// Fade Out

gsap.to('#image-sequence', {
	scrollTrigger: {
		trigger: ".activate-fade-out",
		toggleActions: "play none none reverse"
	},
 	opacity: 0,
 	duration: 2
})

gsap.to('.play-button-container', {
	scrollTrigger: {
		trigger: ".activate-fade-out",
		toggleActions: "play none none reverse"
	},
 	opacity: 0,
 	duration: 2
})