import { slot_component } from "../app";
import { ParkingSlot } from "../models/ParkingSlot";

class ParkingSlots {
    total_slots: ParkingSlot[] = [];
    private static _instance: ParkingSlots;

    static getInstance(){
        if (this._instance) {
            return this._instance;
          } else {
            this._instance = new ParkingSlots();
            return this._instance;
          }
    }

    createSlot(){
        this.total_slots.push(new ParkingSlot(this.total_slots.length + 1))
        console.log(this.total_slots)
        slot_component.renderSlot(this.total_slots[this.total_slots.length - 1])
        return this.total_slots[this.total_slots.length - 1]
    }

    getAvailableSlot(){
        const availSlot = this.total_slots.find(slot => slot.isFree)
        return availSlot;
    }
}

export const ParkingSlotsState = ParkingSlots.getInstance()