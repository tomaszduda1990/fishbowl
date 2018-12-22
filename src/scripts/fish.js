const fishTypes = {
	gupik: 'gupik',
	skalar: 'skalar',
	neonka: 'neonka',
};

const getRandom = (min, max) => {
	if (min || max) {
		return Math.random() * (max - min) + min;
	} else {
		const num = Math.random() > 0.5 ? 1 : 0;
		return num;
	}
};
export default type => {
	const position = {
		x: getRandom(20, 80),
		y: getRandom(25, 75),
		z: getRandom(),
	};
	console.log(position);
	switch (type) {
		case fishTypes.gupik:
			return {
				type: fishTypes.gupik,
				html: `<div class="${'fish fish--' + fishTypes.gupik}" style="left: ${
					position.x
				}%; top: ${position.y}%; transform: rotateY(${180 *
					position.z}deg);"></div>`,
			};
		case fishTypes.skalar:
			return {
				type: fishTypes.skalar,
				html: `<div class="${'fish fish--' + fishTypes.skalar}" style="left: ${
					position.x
				}%; top: ${position.y}%; transform: rotateY(${180 *
					position.z}deg);"></div>`,
			};
		case fishTypes.neonka:
			return {
				type: fishTypes.neonka,
				html: `<div class="${'fish fish--' + fishTypes.neonka}" style="left: ${
					position.x
				}%; top: ${position.y}%; transform: rotateY(${180 *
					position.z}deg)"></div>`,
			};
		default:
			return {};
	}
};
