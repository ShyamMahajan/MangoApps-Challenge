import { ParkingSlotsState } from "../state/ParkingSlots";

export class NoSlot {
  parkingSlots: HTMLDivElement;
  message: HTMLElement;
  private static _instance: NoSlot;

  static getInstance() {
    if (this._instance) {
      return this._instance;
    } else {
      this._instance = new NoSlot();
      return this._instance;
    }
  }
  constructor() {
    this.parkingSlots = document.querySelector(
      ".parking-slots"
    )! as HTMLDivElement;

    this.message = document.createElement("h1") as HTMLElement;
    this.message.classList.add("parking-slots__message");
    this.message.textContent = "No Slots, please create more parking-slots!";
    if (!ParkingSlotsState.total_slots.length) {
      this.renderMessage();
    }
  }

  renderMessage() {
    if (!ParkingSlotsState.total_slots.length) {
      this.parkingSlots.appendChild(this.message);
    } else {
        this.message.remove()
    }
  }
}
