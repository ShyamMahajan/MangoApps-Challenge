import { Car } from "../models/Car";

class Cars {
    cars:Car[]=[];
    cars_colors_options: string[] = []
    cars_reg_options: string[] = []

    private static _instance: Cars;

    static getInstance(){
        if (this._instance) {
            return this._instance;
          } else {
            this._instance = new Cars();
            return this._instance;
          }
    }

    addCar(color:string, reg_no:string){
        const car = this.cars.find(car => car.reg_no === reg_no)
        if(car){
            return car;
        }else{
            this.cars.push(new Car(color, reg_no))
            if(!this.cars_colors_options.includes(color)) this.cars_colors_options.push(color)
            if(!this.cars_reg_options.includes(reg_no)) this.cars_reg_options.push(reg_no) 
            return this.cars[this.cars.length - 1]
        }
    }
}

export const CarsState = Cars.getInstance()