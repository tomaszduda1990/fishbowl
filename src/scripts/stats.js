export default class Stats {
	constructor(fishbowl, statsContainer) {
		this.statsContainer = statsContainer;
		this.fishbowl = fishbowl;

		this.stats = {};
		this.skalar = this.statsContainer.querySelector('[data-type="skalar"]');
		this.gupik = this.statsContainer.querySelector('[data-type="gupik"]');
		this.neonka = this.statsContainer.querySelector('[data-type="neonka"]');
		this.sum = this.statsContainer.querySelector('[data-type="sum"]');
	}
	updateStats() {
		this.stats = this.fishbowl.fishes.reduce((obj, fish) => {
			if (obj[fish.type]) {
				obj[fish.type]++;
			} else {
				obj[fish.type] = 1;
			}
			return obj;
		}, {});
		let sum = 0;
		for (let key in this.stats) {
			sum += this.stats[key];
		}
		this.stats.sum = sum;
		this.renderStats();
	}
	renderStats() {
		this.skalar.textContent = this.stats.skalar ? this.stats.skalar : '0';
		this.gupik.textContent = this.stats.gupik ? this.stats.gupik : '0';
		this.neonka.textContent = this.stats.neonka ? this.stats.neonka : '0';
		this.sum.textContent = this.stats.sum;
	}
}
