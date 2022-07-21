export class ParkingSlot {
    car_reg_no: null|string = null;
    isFree:boolean=true;
    car_color: null|string = null;
    ticket_no: null|string = null;
    constructor(public slot_no:number){}
}