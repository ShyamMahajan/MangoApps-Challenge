import { ParkingSlotsState } from "../state/ParkingSlots";

export class FiltersForm {
    form:HTMLFormElement;
    ticketInput: HTMLInputElement;
    colorInput: HTMLInputElement;
    regNoInput: HTMLInputElement;
    reset: HTMLButtonElement;
    constructor(){
        this.form = document.querySelector("#form_filters")! as HTMLFormElement;
        this.form.addEventListener("submit", this.submitHandler.bind(this))
        this.ticketInput = document.querySelector("#ticket_filter")! as HTMLInputElement;
        this.colorInput = document.querySelector("#color_filter")! as HTMLInputElement;
        this.regNoInput = document.querySelector("#reg-no_filter")! as HTMLInputElement;
        this.reset = document.querySelector(".reset-btn")! as HTMLButtonElement;
        this.reset.addEventListener("click", this.resetHandler.bind(this))
    }

    submitHandler(e:SubmitEvent){
        e.preventDefault();
        ParkingSlotsState.filterParkingSlots(this.colorInput.value, this.regNoInput.value, this.ticketInput.value, false)
        console.log("Filteres",ParkingSlotsState.filtered_slots)
    }

    resetHandler(){
        this.colorInput.value = ""
        this.regNoInput.value = ""
        this.ticketInput.value = ""
        ParkingSlotsState.filterParkingSlots(this.colorInput.value, this.regNoInput.value, this.ticketInput.value, true)
    }
}