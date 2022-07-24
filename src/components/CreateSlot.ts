import { ParkingSlot } from "../models/ParkingSlot";
import { ParkingSlotsState } from "../state/ParkingSlots";

export class CreateSlot {
  createBtn: HTMLButtonElement;
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
    )! as HTMLButtonElement;
    this.createBtn.addEventListener(
      "click",
      ParkingSlotsState.createSlot.bind(ParkingSlotsState)
    );

    this.parkingSlots = document.querySelector(
      ".parking-slots"
    )! as HTMLDivElement;
  }

  createSlotButtonActive(isActive:boolean){
    if(isActive){
      this.createBtn.disabled = false
    }else{
      this.createBtn.disabled = true
    }
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
    if(slot_car) slot_car.textContent = `Ticket# : ${slot.ticket_no || ""}`;

    const slot_reg_no: HTMLDivElement = Parkslot.querySelector(".parking-slot__reg-number")! as HTMLDivElement
        if(slot_reg_no) slot_reg_no.textContent = `Car-Reg# : ${slot.car_reg_no || ""}`
    
    // if(!slot.isFree){
    //   const freeBtn = document.createElement("button")
    //   freeBtn.onclick = () => {
    //     this.freeSlot(slot)
    //   }
    //   Parkslot.appendChild(freeBtn)
    // }
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

  freeSlot(slot:ParkingSlot){
    const parkSlot= ParkingSlotsState.total_slots.find(Pslot => Pslot.slot_no === slot.slot_no)!
    if(parkSlot){
      parkSlot.isFree = true;
      parkSlot.car_color = null;
      parkSlot.car_reg_no = null;
      parkSlot.ticket_no = null;
    }
    this.updateSlot(parkSlot)
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
        slotCar.textContent = slot.ticket_no ? `Ticket# : ${slot.ticket_no || ""}` : "";
        slotReg.classList.add("parking-slot__reg-number");
        slotReg.textContent = slot.car_reg_no ? `Car-Reg# : ${slot.car_reg_no || ""}` : "";
  
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
        slotCar.textContent = `Ticket# : ${slot.ticket_no || ""}`
        slotReg.classList.add("parking-slot__reg-number");
        slotReg.textContent = `Car-Reg# : ${slot.car_reg_no || ""}`;
  
        divMain.appendChild(slotNum)
        divMain.appendChild(slotCar)
        divMain.appendChild(slotReg)
        return divMain
      }))
    }
  }
}