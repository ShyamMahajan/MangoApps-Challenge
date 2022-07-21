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
      slotCar.textContent = slot.ticket_no || "";
      slotReg.classList.add("parking-slot__reg-number");
      slotReg.textContent = slot.car_reg_no || "";

      divMain.appendChild(slotNum)
      divMain.appendChild(slotCar)
      divMain.appendChild(slotReg)

      this.parkingSlots.appendChild(divMain)
    }
  }

  updateSlot(slot:ParkingSlot){
    const Parkslot: HTMLDivElement = this.parkingSlots.querySelector(`.parking-slot--${slot.slot_no}`)! as HTMLDivElement

    Parkslot.style.backgroundColor = slot.car_color!.toString();
    const slot_car: HTMLDivElement = Parkslot.querySelector(".parking-slot__car")! as HTMLDivElement
    if(slot_car) slot_car.textContent = slot.ticket_no

    const slot_reg_no: HTMLDivElement = Parkslot.querySelector(".parking-slot__reg-number")! as HTMLDivElement
        if(slot_reg_no) slot_reg_no.textContent = slot.car_reg_no
  }

  park(slot_no:string, car_color: string, car_reg_no: string, ticket:string){
    const slot = ParkingSlotsState.total_slots.find(item => item.slot_no.toString() === slot_no)!

    slot.isFree = false;
    slot.car_color= car_color;
    slot.car_reg_no = car_reg_no;
    slot.ticket_no = ticket
    ParkingSlotsState.updateCreateTicketState()
    this.updateSlot(slot)
    return slot;
  }

  renderFilteredSlots(isReset:boolean){
    if(isReset){
      this.parkingSlots.replaceChildren(...ParkingSlotsState.total_slots.map((slot: ParkingSlot) => {
        const divMain = document.createElement("div");
        const slotNum = document.createElement("h1");
        const slotCar = document.createElement("div");
        const slotReg = document.createElement("div");
  
        divMain.classList.add("parking-slot");
        divMain.classList.add(`parking-slot--${slot.slot_no}`);
        
        if(slot.car_color){
          divMain.style.backgroundColor = slot.car_color.toString()
        }
        slotNum.classList.add("parking-slot__number");
        slotNum.textContent = slot.slot_no.toString();
  
        slotCar.classList.add("parking-slot__car");
        slotCar.textContent = slot.ticket_no || "";
        slotReg.classList.add("parking-slot__reg-number");
        slotReg.textContent = slot.car_reg_no || "";
  
        divMain.appendChild(slotNum)
        divMain.appendChild(slotCar)
        divMain.appendChild(slotReg)
        return divMain
      }))
    }else{
      this.parkingSlots.replaceChildren(...ParkingSlotsState.filtered_slots.map((slot: ParkingSlot) => {
        const divMain = document.createElement("div");
        const slotNum = document.createElement("h1");
        const slotCar = document.createElement("div");
        const slotReg = document.createElement("div");
  
        divMain.classList.add("parking-slot");
        divMain.classList.add(`parking-slot--${slot.slot_no}`);
  
        divMain.style.backgroundColor = slot.car_color!.toString();
        slotNum.classList.add("parking-slot__number");
        slotNum.textContent = slot.slot_no.toString();
  
        slotCar.classList.add("parking-slot__car");
        slotCar.textContent = slot.ticket_no || "";
        slotReg.classList.add("parking-slot__reg-number");
        slotReg.textContent = slot.car_reg_no || "";
  
        divMain.appendChild(slotNum)
        divMain.appendChild(slotCar)
        divMain.appendChild(slotReg)
        return divMain
      }))
    }
  }
}