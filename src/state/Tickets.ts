import { Ticket } from "../models/Ticket";

class Tickets {
    tickets:Ticket[]=[]
    private static _instance: Tickets;
    static getInstance(){
        if (this._instance) {
            return this._instance;
          } else {
            this._instance = new Tickets();
            return this._instance;
          }
    }
    addTicket(slot_no:string, car_reg_no:string){
        this.tickets.push(new Ticket(slot_no, (this.tickets.length + 1).toString(), car_reg_no))
        return this.tickets[this.tickets.length - 1]
    }
}

export const TicketsState = Tickets.getInstance()