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
    if (!ParkingSlotsState.total_slots.length) {
      this.renderMessage();
    }
  }

  renderMessage() {
    if(ParkingSlotsState.isFilter){
      if (!ParkingSlotsState.filtered_slots.length) {
        this.message.textContent = "No matching results! try different filters";
        this.parkingSlots.appendChild(this.message);
      } else {
          this.message.remove()
      }
    }else{
      if (!ParkingSlotsState.total_slots.length) {
        this.message.textContent = "No Slots, please create more parking-slots!";
        this.parkingSlots.appendChild(this.message);
      } else {
          this.message.remove()
      }
    }
  }
}
