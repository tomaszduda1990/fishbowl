import fishFunc from './fish';

export default class Controls {
	constructor(fishbowl, buttons) {
		this.fishbowl = fishbowl;
		this.buttons = buttons;
		this.buttons = buttons;
	}
	init() {
		this.buttons.forEach(button => {
			if (button.dataset.action === 'add') {
				button.addEventListener('click', () => this.add(button.dataset.fish));
			} else {
				button.addEventListener('click', () =>
					this.remove(button.dataset.fish)
				);
			}
		});
	}
	add(fishType) {
		this.fishbowl.fishes.push(fishFunc(fishType));
		this.fishbowl.render();
	}
	remove(fishType) {
		if (this.fishbowl.stats[fishType]) {
			const index = this.fishbowl.fishes.findIndex(
				fish => fish.type === fishType
			);
			if (index > -1) {
				this.fishbowl.fishes.splice(index, 1);
			}
			this.fishbowl.render();
		}
	}
}
