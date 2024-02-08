'use strict';

class ParkingLot {
  constructor(slots) {
    this.slots = slots;
    this.currSlotNumber = 0;
    this.slotArray = new Array(slots).fill(null);
  }

  park = (carId) => {
    if (this.slots > this.currSlotNumber) {
      this.slotArray[this.currSlotNumber] = carId;
      this.currSlotNumber++;
      return true;
    } else {
      return false;
    }
  };

  getSlots = () => {
    return this.slotArray;
  };

  removeSlot = (carId) => {
    const slotIndex = this.slotArray.findIndex((slot, idx) => slot === carId);

    if (this.slotArray[slotIndex]) {
      this.slotArray[slotIndex] = null;
      return true;
    } else {
      return false;
    }
  };
}

const newLot = new ParkingLot(5);
console.log(newLot);

console.log(newLot.park('Car_1'));
console.log(newLot);

console.log(newLot.park('Car_1'));
console.log(newLot);

console.log(newLot.park('Car_1'));
console.log(newLot);

console.log(newLot.park('Car_1'));
console.log(newLot);

console.log(newLot.park('Car_1'));
console.log(newLot);

console.log(newLot.park('Car_1'));
console.log(newLot);

console.log(newLot.removeSlot('Car_1'));
console.log(newLot.getSlots());
