import { no_slot_render, slot_component } from "../app";
import { ParkingSlot } from "../models/ParkingSlot";

class ParkingSlots {
    total_slots: ParkingSlot[] = [];
    filtered_slots: ParkingSlot[] = []
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
        slot_component.renderSlot(this.total_slots[this.total_slots.length - 1])
        no_slot_render.renderMessage()
        return this.total_slots[this.total_slots.length - 1]
    }

    getAvailableSlot(){
        const availSlot = this.total_slots.find(slot => slot.isFree)
        return availSlot;
    }


    filterParkingSlots(color:string="", ticket_no: string = "",reg_no:string="", isReset:boolean){
        if(isReset){
            this.filtered_slots = [...this.total_slots]; 
        }else{
            this.filtered_slots = this.total_slots.filter((slot:ParkingSlot) => {
                if(slot.car_color === color || slot.ticket_no === ticket_no || slot.car_reg_no === reg_no) return true;
                else return false;
            })
        }
        slot_component.renderFilteredSlots(isReset)
    }
}

export const ParkingSlotsState = ParkingSlots.getInstance()