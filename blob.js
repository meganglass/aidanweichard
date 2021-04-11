/*---------
DEFINITIONS
---------*/
const blob = document.querySelector('.blob-wrapper')
//const blob = document.querySelector('.blob');
const blobPath = document.querySelector('#blobPath')
const blobCta = document.querySelector('.blob-wrapper h2')

// calculating browser sizes
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

// determining blob size on landscape screens
let blobX = -(vh * 0.3) / 2
let blobY =  -(vh * 0.3) / 2
console.log(blobX, blobY)

/*-----------
FOLLOW CURSOR
Maybe just define in each image rather than continuously? TBC
-----------*/
const onMouseMove = (e) => {
	// find cursor on page
	let x = e.pageX
	let y = e.pageY

	// set blob position to cursor location and reposition w/o transforms using its size
	blob.style.left = (x + blobX) - window.scrollX + 'px';
	blob.style.top = (y + blobY) - window.scrollY + 'px';
}

// listen for mouse
document.addEventListener('mousemove', onMouseMove);

/*----------------------
SET UP LISTENERS ON CTAs
----------------------*/
// find elems to attached event to
let images = document.querySelectorAll('.selection_item')

images.forEach((image, index) => {
	//give each elem a unique id based on index
	image.id = `image${index+1}`
	console.log(image.id)

	// if elem is not part of CMS, use data attribute to set blobl colour, else get dynamic attribute from CMS
	if (images.hasAttributes('data-fill, data-cta')) {
		// change CTA text to suit hovered elem (dataset method), get custom data-fill attribute
		let fill = image.dataset.fill
		let ctaContent = image.dataset.cta

		return fill
		return ctaContent

	} else {
		// get custom CMS colour field
		let fill = image.style.backgroundColor
		let ctaContent = 'View Artwork'

		return fill
		return ctaContent

		console.log('CMS item')

	}

	console.log(fill, ctaContent)

	// scale + fill blob on in
	const onMouseOver = (e) => {
		blobPath.style.fill = fill
		console.log("filled")

		blobCta.innerHTML = ctaContent

		anime({
			targets: blob,
			duration: 300,
			easing: 'cubicBezier(0, 0, 0.4, 1.175)',
			scale: 1
		})

		anime()
	}

	// scale blob on out
	const onMouseOut = (e) => {
		console.log("reset")

		anime({
			targets: blob,
			duration: 200,
			easing: 'cubicBezier(0.6, 1.175, 1, 1)',
			scale: 0 
		})

		anime()
	}

	// attach listeners for functions
	image.addEventListener('mouseover', onMouseOver);
	image.addEventListener('mouseout', onMouseOut);
})

/*------------
BLOB ANIMATION
Maybe just call in each image rather than continuously? TBC
------------*/

anime({
	targets: blobPath,
	d: {
		value: [
			'M141.958 31.2806C151.967 38.1481 154.345 57.377 164.104 72.86C173.863 88.2181 191.255 99.8303 196.885 114.689C202.516 129.548 196.385 147.528 184.624 159.64C172.862 171.751 155.596 177.995 139.831 176.871C124.191 175.622 110.177 167.256 96.4142 166.882C82.5259 166.507 69.0129 174.249 55.3749 174.124C41.7368 174.124 28.2239 166.257 24.9708 154.52C21.7177 142.783 28.8495 127.05 24.8457 109.07C20.8418 91.0899 5.57721 70.8621 8.32985 58.1261C10.9574 45.515 31.6021 40.5205 49.244 38.0232C66.8859 35.5259 81.5249 35.5259 97.7905 32.779C114.056 30.032 131.823 24.4131 141.958 31.2806Z' ,
			'M136.131 47.8794C146.132 54.7174 177.636 47.3821 187.387 62.7986C197.138 78.0909 191.762 95.8696 197.388 110.665C203.013 125.459 193.637 142.99 173.635 146.098C153.633 149.206 148.633 167.855 136.131 175.936C123.63 184.018 109.254 183.147 95.5022 182.774C81.6257 182.401 61.1237 167.855 52.9978 161.017C44.872 154.179 37.3712 148.957 27.3702 142.99C17.3692 137.022 4.49283 128.568 0.49242 110.665C-3.50799 92.7614 17.9942 75.2313 24.2449 63.4203C30.4955 51.6092 34.871 34.3277 50.4976 25.8735C66.1242 17.4192 76.1252 17.6679 91.7518 21.7707C107.378 25.8735 126.005 41.0414 136.131 47.8794Z', 
			'M168.003 44.6287C178.011 51.5133 158.245 77.6417 168.003 93.1633C177.761 108.56 195.384 104.171 199.367 121.684C203.35 139.196 188.019 160.584 168.003 163.714C147.987 166.843 134.214 165.584 121.704 173.721C109.194 181.857 79.8857 187.731 63.457 177.724C47.0283 167.716 50.6791 150.329 42.5478 143.445C34.4164 136.56 16.6601 143.445 8.69472 127.188C0.729296 110.93 23.6503 100.181 19.6472 82.1555C15.644 64.1304 11.6817 50.1327 28.1104 36.623C44.5391 23.1134 59.7679 38.1299 75.4051 29.6181C91.0424 21.1062 101.293 6.60167 116.726 24.6145C132.159 42.6273 157.87 37.7442 168.003 44.6287Z',
			'M155.217 54.1279C165.228 61.0006 184.031 54.1279 191.072 73.1087C198.113 92.0896 183.602 97.5841 183.602 119.062C183.602 140.541 185.594 156.525 175.634 167.514C165.675 178.502 150.237 181 129.322 181C108.406 181 85.9967 177.503 69.5631 167.514C53.1296 157.524 36.364 164.396 28.2302 157.524C20.0964 150.651 27.7322 135.292 19.7644 119.062C11.7966 102.833 -0.15506 96.5851 2.33488 79.6022C4.82481 62.6193 9.80468 46.1359 34.704 42.6394C59.6034 39.143 63.5873 19.1631 83.0088 19.1631C102.43 19.1631 117.868 17.1651 134.301 27.155C150.735 37.145 145.081 47.2551 155.217 54.1279Z'
		]
	},
	easing: 'linear',
	duration: 1500,
	direction: 'alternate',
	loop: true
});

anime()