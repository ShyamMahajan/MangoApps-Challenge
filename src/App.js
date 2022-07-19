/**Parking Slots */

class ParkingSlot {
    car_number = null;
    isFree = true;
    constructor(number){
        this.number = number
    }
}

class ParkingSlots {
    slots = [];
    static instance;

    constructor(){
        const createBtn = document.querySelector(".parking-slots__create")
        if(createBtn){
            createBtn.addEventListener("click", this.addSlot.bind(this))
        }
        this.render()
    }

    static getInstance(){
        if(this.instance){
            return this.instance
        }else{
            this.instance = new ParkingSlots();
            return this.instance;
        }
    }

    render(){
        if(!this.slots.length){

        }
    }

    renderSlot(slot){

        const parkingSlots = document.querySelector(".parking-slots");

        if(parkingSlots){
                const divMain = document.createElement("div")
                divMain.classList.add("parking-slot")
                
                const slotNum = document.createElement("h1")
                slotNum.classList.add("parking-slot__number")
                slotNum.textContent = slot.number
                const slotCar = document.createElement("div")
                slotCar.classList.add("parking-slot__car")
                slotCar.textContent = slot.car_number
                const slotReg = document.createElement("div")
                slotReg.classList.add("parking-slot__reg-number")
                slotReg.textContent = slot.regNum

                divMain.appendChild(slotNum)
                divMain.appendChild(slotCar)
                divMain.appendChild(slotReg)

                parkingSlots.appendChild(divMain)
        }
    }

    addSlot(){
        this.slots.push(new ParkingSlot(this.slots.length+1));
        this.renderSlot(this.slots[this.slots.length-1])
        return this.slots;
    }

    getAvailableSlot(){
        const availSlot = this.slots.find(slot => slot.isFree)
        return availSlot
    }

    park(slot_no, car_color, car_reg_number, tix){
        console.log("this data", slot_no, car_color, car_reg_number, tix)
        const slot = this.slots.find(Pslot => Pslot.number === slot_no)
        slot.isFree = false;
        slot.car_color= car_color
        slot.car_number = car_reg_number
        slot.ticket_number = tix
        return slot;
    }
}

const parkingSlots = ParkingSlots.getInstance()


/*** Cars */


class Car {
    constructor(color, reg_no){
        this.color = color;
        this.reg_no = reg_no;
    }
}

class Cars {
    cars = []
    static instance;

    static getInstance(){
        if(this.instance){
            return this.instance
        }else{
            this.instance = new Cars();
            return this.instance;
        }
    }

    addCar(color, reg_no){
        this.cars.push(new Car(color, reg_no))
        return this.cars[this.cars.length - 1]
    }
}
const cars = Cars.getInstance()


/**Ticket */
class Ticket {
    slot_no;
    number;
    car_reg_number;

    constructor(slot_no, tix_number, car_reg_number){
        this.slot_no = slot_no;
        this.number = tix_number;
        this.car_reg_number = car_reg_number
    }
}

class Tickets {
    tickets = [];
    static instance;
    formElement;
    constructor(){
        this.formElement = document.querySelector(".form");
        if(this.formElement){
            this.formElement.addEventListener("submit", this.createCarTix.bind(this))
        }
    }

    createCarTix(e){
        e.preventDefault()
        const car = cars.addCar(this.formElement.car_color.value, this.formElement.car_reg_number.value);
        const slot_no = parkingSlots.getAvailableSlot()
        const ticket = this.addTicket(slot_no.number, car.reg_no)
        const slot = parkingSlots.park(slot_no.number, car.color, car.reg_no, ticket.number)
        console.log("ticket",slot)

    }

    static getInstance(){
        if(this.instance){
            return this.instance
        }else{
            this.instance = new Tickets();
            return this.instance;
        }
    }

    addTicket(slot_no, car_reg_number){
        this.tickets.push(new Ticket(slot_no, this.tickets.length + 1, car_reg_number))
        return this.tickets[this.tickets.length - 1];
    }
}

const tickets = Tickets.getInstance();
