import Shotgun from '../shared/shotgun.js';

export default class CltShotgun extends Shotgun {
	draw() {
		this.prototype.prototype.draw();
		if (document.getElementById('particle-option').checked && this.muzzleFlash === true) {
			this.recoil = 27;
		}
	}
}

CltShotgun.prototype.muzzleX = 84;
CltShotgun.prototype.muzzleY = 2;

CltShotgun.prototype.offsetX = 13;
CltShotgun.prototype.offsetY = -5;

CltShotgun.prototype.type = 'Shotgun';