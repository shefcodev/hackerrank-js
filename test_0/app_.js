async function getNumTransactions(username) {
  const response = await fetch(
    `https://jsonmock.hackerrank.com/api/article_users?username=${username}`
  );

  const { data } = await response.json();

  if (data.length) {
    const { id } = data[0];

    const response = await fetch(
      `https://jsonmock.hackerrank.com/api/transactions?&userId=${id}`
    );

    const { total } = await response.json();
    return total;
  } else {
    return 'Username Not Found';
  }
}

// getNumTransactions('epaga').then((res) => console.log(res));

// another test

class ParkingLot {
  constructor(slots) {
    this.slots = slots;
    this.parkSlots = Array(slots).fill(null);
  }

  park(carId) {
    const parkSlotIndex = this.parkSlots.findIndex((park, index) => !park);

    if (this.parkSlots[parkSlotIndex]) {
      return false;
    }

    if (!this.parkSlots[parkSlotIndex]) {
      const parkSlotsCopy = [...this.parkSlots, carId];

      if (parkSlotsCopy.length > this.parkSlots.length) {
        return;
      }

      this.parkSlots[parkSlotIndex] = carId;
      return true;
    }
  }

  getSlots() {
    return this.parkSlots;
  }

  remove(carId) {
    const parkSlotIndex = this.parkSlots.findIndex(
      (park, index) => park === carId
    );

    if (parkSlotIndex === -1) {
      return false;
    }

    if (this.parkSlots[parkSlotIndex] === carId) {
      this.parkSlots[parkSlotIndex] = null;
      return true;
    }
  }
}

const parkingLot = new ParkingLot(7);
console.log(parkingLot.park('CAR_10'));
console.log(parkingLot.park('CAR_11'));
console.log(parkingLot.park('CAR_12'));
console.log(parkingLot.park('CAR_13'));
console.log(parkingLot.park('CAR_14'));
console.log(parkingLot.park('CAR_15'));
console.log(parkingLot.park('CAR_16'));
console.log(parkingLot.park('CAR_17'));

console.log(parkingLot.getSlots());
