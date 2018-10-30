'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.DEFAULT_TEMPERATURE = 20;
  this.MED_ENERGY_USAGE = 18;
}

Thermostat.prototype.isMinimumTemperature = function () {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature;
}

Thermostat.prototype.up = function () {
  if(this.isMaximumTemperature()) {
    return;
  }
  this.temperature ++;
}

Thermostat.prototype.isMaximumTemperature = function () {
  if(this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
};

Thermostat.prototype.down = function () {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature --;
}

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchOffPowerSaving = function() {
  this.powerSavingMode = false;
}

Thermostat.prototype.switchOnPowerSaving = function () {
  this.powerSavingMode = true;
};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < this.MED_ENERGY_USAGE) {
    return 'low-usage';
  } else if (this.temperature >= this.MED_ENERGY_USAGE && this.temperature < this.MAX_LIMIT_PSM_ON) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
}
