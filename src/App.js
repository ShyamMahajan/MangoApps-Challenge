class ParkingSlot {
    car_number = "car";
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
}

const parkingSlots = ParkingSlots.getInstance()