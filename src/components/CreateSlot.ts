import { ParkingSlot } from "../models/ParkingSlot";
import { ParkingSlotsState } from "../state/ParkingSlots";

export class CreateSlot {
  createBtn: HTMLDivElement;
  parkingSlots: HTMLDivElement;
  private static _instance: CreateSlot;

  static getInstance() {
    if (this._instance) {
      return this._instance;
    } else {
      this._instance = new CreateSlot();
      return this._instance;
    }
  }
  constructor() {
    this.createBtn = document.querySelector(
      ".parking-slots__create"
    )! as HTMLDivElement;
    this.createBtn.addEventListener(
      "click",
      ParkingSlotsState.createSlot.bind(ParkingSlotsState)
    );

    this.parkingSlots = document.querySelector(
      ".parking-slots"
    )! as HTMLDivElement;
  }

  renderSlot(slot: ParkingSlot) {
    if (this.parkingSlots) {
      const divMain = document.createElement("div");
      const slotNum = document.createElement("h1");
      const slotCar = document.createElement("div");
      const slotReg = document.createElement("div");

      divMain.classList.add("parking-slot");
      divMain.classList.add(`parking-slot--${slot.slot_no}`);

      slotNum.classList.add("parking-slot__number");
      slotNum.textContent = slot.slot_no.toString();

      slotCar.classList.add("parking-slot__car");
      slotCar.textContent = slot.car_color || "";
      slotReg.classList.add("parking-slot__reg-number");
      slotReg.textContent = slot.car_reg_no || "";

      divMain.appendChild(slotNum)
      divMain.appendChild(slotCar)
      divMain.appendChild(slotReg)

      this.parkingSlots.appendChild(divMain)
    }
  }
}

