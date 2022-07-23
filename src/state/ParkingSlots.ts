import { formElement, no_slot_render, slot_component } from "../app";
import { ParkingSlot } from "../models/ParkingSlot";

class ParkingSlots {
    total_slots: ParkingSlot[] = [];
    filtered_slots: ParkingSlot[] = []
    private static _instance: ParkingSlots;
    isFilter:boolean = false;

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
        this.updateCreateTicketState()
        return this.total_slots[this.total_slots.length - 1]
    }

    getAvailableSlot(){
        const availSlot = this.total_slots.find(slot => slot.isFree)
        return availSlot;
    }

    updateCreateTicketState(){
        const availSlot = this.total_slots.find(slot => slot.isFree)
        if(availSlot){
            formElement.createBtnActive(true)
        }else{
            formElement.createBtnActive(false)
        }
    }

    filterParkingSlots(color:string="", ticket_no: string = "",reg_no:string="", isReset:boolean){
        if(isReset){
            this.isFilter = false;
            this.filtered_slots = [...this.total_slots];
            formElement.createBtnActive(true)
            slot_component.createSlotButtonActive(true)
        }else{
            this.isFilter = true;
            this.filtered_slots = this.total_slots.filter((slot:ParkingSlot) => {
                if(slot.car_color === color || slot.ticket_no === ticket_no || slot.car_reg_no === reg_no) return true;
                else return false;
            })
            formElement.createBtnActive(false)
            slot_component.createSlotButtonActive(false)
        }
        slot_component.renderFilteredSlots(isReset)
        no_slot_render.renderMessage()
    }
}

export const ParkingSlotsState = ParkingSlots.getInstance()