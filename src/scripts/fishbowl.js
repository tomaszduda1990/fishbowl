import Controls from './controls';
import Stats from './stats';
export default class Fishbowl {
	constructor(fishbowl, stats) {
		this.fishbowl = fishbowl;
		this.controls = new Controls(
			this,
			document.querySelectorAll('.controls__button')
		);
		this.stats = new Stats(this, stats);
		this.fishes = [];
	}
	init() {
		this.controls.init();
	}
	updateFishes() {
		if (this.fishes.length > 0) {
			const html = this.fishes.map(fish => fish.html).join('');
			this.fishbowl.innerHTML = html;
		}
	}

	render() {
		this.stats.updateStats();
		this.updateFishes();
	}
}
