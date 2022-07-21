import { slot_component } from "../app";
import { Car } from "../models/Car";
import { CarsState } from "../state/Cars";
import { ParkingSlotsState } from "../state/ParkingSlots";
import { TicketsState } from "../state/Tickets";

export class Form{
    form: HTMLFormElement;
    colorInput: HTMLInputElement;
    regNoInput: HTMLInputElement;

    constructor(){
        this.form = document.querySelector("#form_create")! as HTMLFormElement;
        this.form.addEventListener("submit", this.submitHandler.bind(this))

        this.colorInput = document.querySelector("#color")! as HTMLInputElement;
        this.regNoInput = document.querySelector("#reg-no")! as HTMLInputElement;
    }

    submitHandler(e: SubmitEvent){
        e.preventDefault()
        const car:Car = CarsState.addCar(this.colorInput.value, this.regNoInput.value)
        const slot = ParkingSlotsState.getAvailableSlot()
        if(slot){
            const ticket = TicketsState.addTicket(slot.slot_no.toString(), car.reg_no)
            const upSlot = slot_component.park(slot.slot_no.toString(), car.color, car.reg_no, ticket.ticket_number)
            console.log(upSlot)
        }else{
            console.log("No Slots Available")
        }
    }
}

