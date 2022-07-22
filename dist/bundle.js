/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formElement": () => (/* binding */ formElement),
/* harmony export */   "no_slot_render": () => (/* binding */ no_slot_render),
/* harmony export */   "slot_component": () => (/* binding */ slot_component)
/* harmony export */ });
/* harmony import */ var _components_CreateSlot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CreateSlot */ "./src/components/CreateSlot.ts");
/* harmony import */ var _components_Filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Filters */ "./src/components/Filters.ts");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Form */ "./src/components/Form.ts");
/* harmony import */ var _components_NoSlot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NoSlot */ "./src/components/NoSlot.ts");




const no_slot_render = _components_NoSlot__WEBPACK_IMPORTED_MODULE_3__.NoSlot.getInstance();
const slot_component = _components_CreateSlot__WEBPACK_IMPORTED_MODULE_0__.CreateSlot.getInstance();
const formElement = new _components_Form__WEBPACK_IMPORTED_MODULE_2__.Form();
new _components_Filters__WEBPACK_IMPORTED_MODULE_1__.FiltersForm();


/***/ }),

/***/ "./src/components/CreateSlot.ts":
/*!**************************************!*\
  !*** ./src/components/CreateSlot.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateSlot": () => (/* binding */ CreateSlot)
/* harmony export */ });
/* harmony import */ var _state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/ParkingSlots */ "./src/state/ParkingSlots.ts");

class CreateSlot {
    constructor() {
        this.createBtn = document.querySelector(".parking-slots__create");
        this.createBtn.addEventListener("click", _state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__.ParkingSlotsState.createSlot.bind(_state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__.ParkingSlotsState));
        this.parkingSlots = document.querySelector(".parking-slots");
    }
    static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        else {
            this._instance = new CreateSlot();
            return this._instance;
        }
    }
    renderSlot(slot) {
        if (this.parkingSlots) {
            const divMain = document.createElement("div");
            const slotNum = document.createElement("h1");
            const slotCar = document.createElement("div");
            const slotReg = document.createElement("div");
            divMain.classList.add("parking-slot");
            divMain.classList.add(`parking-slot--${slot.slot_no}`);
            slotNum.classList.add("parking-slot__number");
            slotNum.textContent = slot.slot_no.toString();
            slotCar.classList.add("parking-slot__car");
            slotCar.textContent = slot.ticket_no || "";
            slotReg.classList.add("parking-slot__reg-number");
            slotReg.textContent = slot.car_reg_no || "";
            divMain.appendChild(slotNum);
            divMain.appendChild(slotCar);
            divMain.appendChild(slotReg);
            this.parkingSlots.appendChild(divMain);
        }
    }
    updateSlot(slot) {
        const Parkslot = this.parkingSlots.querySelector(`.parking-slot--${slot.slot_no}`);
        Parkslot.style.backgroundColor = slot.car_color.toString();
        const slot_car = Parkslot.querySelector(".parking-slot__car");
        if (slot_car)
            slot_car.textContent = `Ticket# : ${slot.ticket_no || ""}`;
        const slot_reg_no = Parkslot.querySelector(".parking-slot__reg-number");
        if (slot_reg_no)
            slot_reg_no.textContent = `Car-Reg# : ${slot.car_reg_no || ""}`;
    }
    park(slot_no, car_color, car_reg_no, ticket) {
        const slot = _state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__.ParkingSlotsState.total_slots.find(item => item.slot_no.toString() === slot_no);
        slot.isFree = false;
        slot.car_color = car_color;
        slot.car_reg_no = car_reg_no;
        slot.ticket_no = ticket;
        _state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__.ParkingSlotsState.updateCreateTicketState();
        this.updateSlot(slot);
        return slot;
    }
    renderFilteredSlots(isReset) {
        if (isReset) {
            this.parkingSlots.replaceChildren(..._state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__.ParkingSlotsState.total_slots.map((slot) => {
                const divMain = document.createElement("div");
                const slotNum = document.createElement("h1");
                const slotCar = document.createElement("div");
                const slotReg = document.createElement("div");
                divMain.classList.add("parking-slot");
                divMain.classList.add(`parking-slot--${slot.slot_no}`);
                if (slot.car_color) {
                    divMain.style.backgroundColor = slot.car_color.toString();
                }
                slotNum.classList.add("parking-slot__number");
                slotNum.textContent = slot.slot_no.toString();
                slotCar.classList.add("parking-slot__car");
                slotCar.textContent = slot.ticket_no ? `Ticket# : ${slot.ticket_no || ""}` : "";
                slotReg.classList.add("parking-slot__reg-number");
                slotReg.textContent = slot.car_reg_no ? `Car-Reg# : ${slot.car_reg_no || ""}` : "";
                divMain.appendChild(slotNum);
                divMain.appendChild(slotCar);
                divMain.appendChild(slotReg);
                return divMain;
            }));
        }
        else {
            this.parkingSlots.replaceChildren(..._state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__.ParkingSlotsState.filtered_slots.map((slot) => {
                const divMain = document.createElement("div");
                const slotNum = document.createElement("h1");
                const slotCar = document.createElement("div");
                const slotReg = document.createElement("div");
                divMain.classList.add("parking-slot");
                divMain.classList.add(`parking-slot--${slot.slot_no}`);
                divMain.style.backgroundColor = slot.car_color.toString();
                slotNum.classList.add("parking-slot__number");
                slotNum.textContent = slot.slot_no.toString();
                slotCar.classList.add("parking-slot__car");
                slotCar.textContent = `Ticket# : ${slot.ticket_no || ""}`;
                slotReg.classList.add("parking-slot__reg-number");
                slotReg.textContent = `Car-Reg# : ${slot.car_reg_no || ""}`;
                divMain.appendChild(slotNum);
                divMain.appendChild(slotCar);
                divMain.appendChild(slotReg);
                return divMain;
            }));
        }
    }
}


/***/ }),

/***/ "./src/components/Filters.ts":
/*!***********************************!*\
  !*** ./src/components/Filters.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersForm": () => (/* binding */ FiltersForm)
/* harmony export */ });
/* harmony import */ var _state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/ParkingSlots */ "./src/state/ParkingSlots.ts");

class FiltersForm {
    constructor() {
        this.form = document.querySelector("#form_filters");
        this.form.addEventListener("submit", this.submitHandler.bind(this));
        this.ticketInput = document.querySelector("#ticket_filter");
        this.colorInput = document.querySelector("#color_filter");
        this.regNoInput = document.querySelector("#reg-no_filter");
        this.reset = document.querySelector("#filter_reset");
        this.reset.addEventListener("click", this.resetHandler.bind(this));
    }
    submitHandler(e) {
        e.preventDefault();
        _state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__.ParkingSlotsState.filterParkingSlots(this.colorInput.value, this.ticketInput.value, this.regNoInput.value, false);
        console.log("Filteres", _state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__.ParkingSlotsState.filtered_slots);
    }
    resetHandler() {
        this.colorInput.value = "";
        this.regNoInput.value = "";
        this.ticketInput.value = "";
        _state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__.ParkingSlotsState.filterParkingSlots(this.colorInput.value, this.ticketInput.value, this.regNoInput.value, true);
    }
}


/***/ }),

/***/ "./src/components/Form.ts":
/*!********************************!*\
  !*** ./src/components/Form.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _state_Cars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/Cars */ "./src/state/Cars.ts");
/* harmony import */ var _state_ParkingSlots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/ParkingSlots */ "./src/state/ParkingSlots.ts");
/* harmony import */ var _state_Tickets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/Tickets */ "./src/state/Tickets.ts");




class Form {
    constructor() {
        this.form = document.querySelector("#form_create");
        this.form.addEventListener("submit", this.submitHandler.bind(this));
        this.createTixBtn = document.querySelector("#form__submit_button");
        this.createBtnActive(false);
        this.colorInput = document.querySelector("#color");
        this.regNoInput = document.querySelector("#reg-no");
    }
    createBtnActive(isActive) {
        if (isActive) {
            this.createTixBtn.disabled = false;
        }
        else {
            this.createTixBtn.disabled = true;
        }
    }
    submitHandler(e) {
        e.preventDefault();
        const car = _state_Cars__WEBPACK_IMPORTED_MODULE_1__.CarsState.addCar(this.colorInput.value, this.regNoInput.value);
        const slot = _state_ParkingSlots__WEBPACK_IMPORTED_MODULE_2__.ParkingSlotsState.getAvailableSlot();
        if (slot) {
            const ticket = _state_Tickets__WEBPACK_IMPORTED_MODULE_3__.TicketsState.addTicket(slot.slot_no.toString(), car.reg_no);
            const upSlot = _app__WEBPACK_IMPORTED_MODULE_0__.slot_component.park(slot.slot_no.toString(), car.color, car.reg_no, ticket.ticket_number);
            console.log(upSlot);
        }
        else {
            alert("No Slots Available");
        }
        this.colorInput.value = "";
        this.regNoInput.value = "";
    }
}


/***/ }),

/***/ "./src/components/NoSlot.ts":
/*!**********************************!*\
  !*** ./src/components/NoSlot.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoSlot": () => (/* binding */ NoSlot)
/* harmony export */ });
/* harmony import */ var _state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/ParkingSlots */ "./src/state/ParkingSlots.ts");

class NoSlot {
    constructor() {
        this.parkingSlots = document.querySelector(".parking-slots");
        this.message = document.createElement("h1");
        this.message.classList.add("parking-slots__message");
        this.message.textContent = "No Slots, please create more parking-slots!";
        if (!_state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__.ParkingSlotsState.total_slots.length) {
            this.renderMessage();
        }
    }
    static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        else {
            this._instance = new NoSlot();
            return this._instance;
        }
    }
    renderMessage() {
        if (!_state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__.ParkingSlotsState.total_slots.length) {
            this.parkingSlots.appendChild(this.message);
        }
        else {
            this.message.remove();
        }
    }
}


/***/ }),

/***/ "./src/models/Car.ts":
/*!***************************!*\
  !*** ./src/models/Car.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Car": () => (/* binding */ Car)
/* harmony export */ });
class Car {
    constructor(color, reg_no) {
        this.color = color;
        this.reg_no = reg_no;
    }
}


/***/ }),

/***/ "./src/models/ParkingSlot.ts":
/*!***********************************!*\
  !*** ./src/models/ParkingSlot.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParkingSlot": () => (/* binding */ ParkingSlot)
/* harmony export */ });
class ParkingSlot {
    constructor(slot_no) {
        this.slot_no = slot_no;
        this.car_reg_no = null;
        this.isFree = true;
        this.car_color = null;
        this.ticket_no = null;
    }
}


/***/ }),

/***/ "./src/models/Ticket.ts":
/*!******************************!*\
  !*** ./src/models/Ticket.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ticket": () => (/* binding */ Ticket)
/* harmony export */ });
class Ticket {
    constructor(slot_number, ticket_number, car_reg_number) {
        this.slot_number = slot_number;
        this.ticket_number = ticket_number;
        this.car_reg_number = car_reg_number;
    }
}


/***/ }),

/***/ "./src/state/Cars.ts":
/*!***************************!*\
  !*** ./src/state/Cars.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarsState": () => (/* binding */ CarsState)
/* harmony export */ });
/* harmony import */ var _models_Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Car */ "./src/models/Car.ts");

class Cars {
    constructor() {
        this.cars = [];
        this.cars_colors_options = [];
        this.cars_reg_options = [];
    }
    static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        else {
            this._instance = new Cars();
            return this._instance;
        }
    }
    addCar(color, reg_no) {
        const car = this.cars.find(car => car.reg_no === reg_no);
        if (car) {
            return car;
        }
        else {
            this.cars.push(new _models_Car__WEBPACK_IMPORTED_MODULE_0__.Car(color, reg_no));
            if (!this.cars_colors_options.includes(color))
                this.cars_colors_options.push(color);
            if (!this.cars_reg_options.includes(reg_no))
                this.cars_reg_options.push(reg_no);
            return this.cars[this.cars.length - 1];
        }
    }
}
const CarsState = Cars.getInstance();


/***/ }),

/***/ "./src/state/ParkingSlots.ts":
/*!***********************************!*\
  !*** ./src/state/ParkingSlots.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParkingSlotsState": () => (/* binding */ ParkingSlotsState)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _models_ParkingSlot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/ParkingSlot */ "./src/models/ParkingSlot.ts");


class ParkingSlots {
    constructor() {
        this.total_slots = [];
        this.filtered_slots = [];
    }
    static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        else {
            this._instance = new ParkingSlots();
            return this._instance;
        }
    }
    createSlot() {
        this.total_slots.push(new _models_ParkingSlot__WEBPACK_IMPORTED_MODULE_1__.ParkingSlot(this.total_slots.length + 1));
        _app__WEBPACK_IMPORTED_MODULE_0__.slot_component.renderSlot(this.total_slots[this.total_slots.length - 1]);
        _app__WEBPACK_IMPORTED_MODULE_0__.no_slot_render.renderMessage();
        this.updateCreateTicketState();
        return this.total_slots[this.total_slots.length - 1];
    }
    getAvailableSlot() {
        const availSlot = this.total_slots.find(slot => slot.isFree);
        return availSlot;
    }
    updateCreateTicketState() {
        const availSlot = this.total_slots.find(slot => slot.isFree);
        if (availSlot) {
            _app__WEBPACK_IMPORTED_MODULE_0__.formElement.createBtnActive(true);
        }
        else {
            _app__WEBPACK_IMPORTED_MODULE_0__.formElement.createBtnActive(false);
        }
    }
    filterParkingSlots(color = "", ticket_no = "", reg_no = "", isReset) {
        if (isReset) {
            this.filtered_slots = [...this.total_slots];
        }
        else {
            this.filtered_slots = this.total_slots.filter((slot) => {
                if (slot.car_color === color || slot.ticket_no === ticket_no || slot.car_reg_no === reg_no)
                    return true;
                else
                    return false;
            });
        }
        _app__WEBPACK_IMPORTED_MODULE_0__.slot_component.renderFilteredSlots(isReset);
    }
}
const ParkingSlotsState = ParkingSlots.getInstance();


/***/ }),

/***/ "./src/state/Tickets.ts":
/*!******************************!*\
  !*** ./src/state/Tickets.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketsState": () => (/* binding */ TicketsState)
/* harmony export */ });
/* harmony import */ var _models_Ticket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Ticket */ "./src/models/Ticket.ts");

class Tickets {
    constructor() {
        this.tickets = [];
    }
    static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        else {
            this._instance = new Tickets();
            return this._instance;
        }
    }
    addTicket(slot_no, car_reg_no) {
        this.tickets.push(new _models_Ticket__WEBPACK_IMPORTED_MODULE_0__.Ticket(slot_no, (this.tickets.length + 1).toString(), car_reg_no));
        return this.tickets[this.tickets.length - 1];
    }
}
const TicketsState = Tickets.getInstance();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3hGLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNKO0FBRU0sTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRTs7Ozs7OztVQ25CakQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZVNsb3QudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVycy50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvY29tcG9uZW50cy9Gb3JtLnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9jb21wb25lbnRzL05vU2xvdC50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvbW9kZWxzL0Nhci50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvbW9kZWxzL1BhcmtpbmdTbG90LnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9tb2RlbHMvVGlja2V0LnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9zdGF0ZS9DYXJzLnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9zdGF0ZS9QYXJraW5nU2xvdHMudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL3N0YXRlL1RpY2tldHMudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENyZWF0ZVNsb3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL0NyZWF0ZVNsb3RcIjtcbmltcG9ydCB7IEZpbHRlcnNGb3JtIH0gZnJvbSBcIi4vY29tcG9uZW50cy9GaWx0ZXJzXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Gb3JtXCI7XG5pbXBvcnQgeyBOb1Nsb3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL05vU2xvdFwiO1xuXG5leHBvcnQgY29uc3Qgbm9fc2xvdF9yZW5kZXIgPSBOb1Nsb3QuZ2V0SW5zdGFuY2UoKVxuZXhwb3J0IGNvbnN0IHNsb3RfY29tcG9uZW50ID0gQ3JlYXRlU2xvdC5nZXRJbnN0YW5jZSgpO1xuZXhwb3J0IGNvbnN0IGZvcm1FbGVtZW50ID0gbmV3IEZvcm0oKVxubmV3IEZpbHRlcnNGb3JtKCkiLCJpbXBvcnQgeyBQYXJraW5nU2xvdCB9IGZyb20gXCIuLi9tb2RlbHMvUGFya2luZ1Nsb3RcIjtcbmltcG9ydCB7IFBhcmtpbmdTbG90c1N0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1BhcmtpbmdTbG90c1wiO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlU2xvdCB7XG4gIGNyZWF0ZUJ0bjogSFRNTERpdkVsZW1lbnQ7XG4gIHBhcmtpbmdTbG90czogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQ3JlYXRlU2xvdDtcblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IENyZWF0ZVNsb3QoKTtcbiAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIucGFya2luZy1zbG90c19fY3JlYXRlXCJcbiAgICApISBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICB0aGlzLmNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgUGFya2luZ1Nsb3RzU3RhdGUuY3JlYXRlU2xvdC5iaW5kKFBhcmtpbmdTbG90c1N0YXRlKVxuICAgICk7XG5cbiAgICB0aGlzLnBhcmtpbmdTbG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5wYXJraW5nLXNsb3RzXCJcbiAgICApISBhcyBIVE1MRGl2RWxlbWVudDtcbiAgfVxuXG4gIHJlbmRlclNsb3Qoc2xvdDogUGFya2luZ1Nsb3QpIHtcbiAgICBpZiAodGhpcy5wYXJraW5nU2xvdHMpIHtcbiAgICAgIGNvbnN0IGRpdk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3Qgc2xvdE51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgIGNvbnN0IHNsb3RDYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3Qgc2xvdFJlZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGRpdk1haW4uY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdFwiKTtcbiAgICAgIGRpdk1haW4uY2xhc3NMaXN0LmFkZChgcGFya2luZy1zbG90LS0ke3Nsb3Quc2xvdF9ub31gKTtcblxuICAgICAgc2xvdE51bS5jbGFzc0xpc3QuYWRkKFwicGFya2luZy1zbG90X19udW1iZXJcIik7XG4gICAgICBzbG90TnVtLnRleHRDb250ZW50ID0gc2xvdC5zbG90X25vLnRvU3RyaW5nKCk7XG5cbiAgICAgIHNsb3RDYXIuY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdF9fY2FyXCIpO1xuICAgICAgc2xvdENhci50ZXh0Q29udGVudCA9IHNsb3QudGlja2V0X25vIHx8IFwiXCI7XG4gICAgICBzbG90UmVnLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX3JlZy1udW1iZXJcIik7XG4gICAgICBzbG90UmVnLnRleHRDb250ZW50ID0gc2xvdC5jYXJfcmVnX25vIHx8IFwiXCI7XG5cbiAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdE51bSlcbiAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdENhcilcbiAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdFJlZylcblxuICAgICAgdGhpcy5wYXJraW5nU2xvdHMuYXBwZW5kQ2hpbGQoZGl2TWFpbilcbiAgICB9XG4gIH1cblxuICB1cGRhdGVTbG90KHNsb3Q6UGFya2luZ1Nsb3Qpe1xuICAgIGNvbnN0IFBhcmtzbG90OiBIVE1MRGl2RWxlbWVudCA9IHRoaXMucGFya2luZ1Nsb3RzLnF1ZXJ5U2VsZWN0b3IoYC5wYXJraW5nLXNsb3QtLSR7c2xvdC5zbG90X25vfWApISBhcyBIVE1MRGl2RWxlbWVudFxuXG4gICAgUGFya3Nsb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2xvdC5jYXJfY29sb3IhLnRvU3RyaW5nKCk7XG4gICAgY29uc3Qgc2xvdF9jYXI6IEhUTUxEaXZFbGVtZW50ID0gUGFya3Nsb3QucXVlcnlTZWxlY3RvcihcIi5wYXJraW5nLXNsb3RfX2NhclwiKSEgYXMgSFRNTERpdkVsZW1lbnRcbiAgICBpZihzbG90X2Nhcikgc2xvdF9jYXIudGV4dENvbnRlbnQgPSBgVGlja2V0IyA6ICR7c2xvdC50aWNrZXRfbm8gfHwgXCJcIn1gO1xuXG4gICAgY29uc3Qgc2xvdF9yZWdfbm86IEhUTUxEaXZFbGVtZW50ID0gUGFya3Nsb3QucXVlcnlTZWxlY3RvcihcIi5wYXJraW5nLXNsb3RfX3JlZy1udW1iZXJcIikhIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgIGlmKHNsb3RfcmVnX25vKSBzbG90X3JlZ19uby50ZXh0Q29udGVudCA9IGBDYXItUmVnIyA6ICR7c2xvdC5jYXJfcmVnX25vIHx8IFwiXCJ9YFxuICB9XG5cbiAgcGFyayhzbG90X25vOnN0cmluZywgY2FyX2NvbG9yOiBzdHJpbmcsIGNhcl9yZWdfbm86IHN0cmluZywgdGlja2V0OnN0cmluZyl7XG4gICAgY29uc3Qgc2xvdCA9IFBhcmtpbmdTbG90c1N0YXRlLnRvdGFsX3Nsb3RzLmZpbmQoaXRlbSA9PiBpdGVtLnNsb3Rfbm8udG9TdHJpbmcoKSA9PT0gc2xvdF9ubykhXG5cbiAgICBzbG90LmlzRnJlZSA9IGZhbHNlO1xuICAgIHNsb3QuY2FyX2NvbG9yPSBjYXJfY29sb3I7XG4gICAgc2xvdC5jYXJfcmVnX25vID0gY2FyX3JlZ19ubztcbiAgICBzbG90LnRpY2tldF9ubyA9IHRpY2tldFxuICAgIFBhcmtpbmdTbG90c1N0YXRlLnVwZGF0ZUNyZWF0ZVRpY2tldFN0YXRlKClcbiAgICB0aGlzLnVwZGF0ZVNsb3Qoc2xvdClcbiAgICByZXR1cm4gc2xvdDtcbiAgfVxuXG4gIHJlbmRlckZpbHRlcmVkU2xvdHMoaXNSZXNldDpib29sZWFuKXtcbiAgICBpZihpc1Jlc2V0KXtcbiAgICAgIHRoaXMucGFya2luZ1Nsb3RzLnJlcGxhY2VDaGlsZHJlbiguLi5QYXJraW5nU2xvdHNTdGF0ZS50b3RhbF9zbG90cy5tYXAoKHNsb3Q6IFBhcmtpbmdTbG90KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBzbG90TnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBjb25zdCBzbG90Q2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3Qgc2xvdFJlZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFxuICAgICAgICBkaXZNYWluLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RcIik7XG4gICAgICAgIGRpdk1haW4uY2xhc3NMaXN0LmFkZChgcGFya2luZy1zbG90LS0ke3Nsb3Quc2xvdF9ub31gKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHNsb3QuY2FyX2NvbG9yKXtcbiAgICAgICAgICBkaXZNYWluLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNsb3QuY2FyX2NvbG9yLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgICBzbG90TnVtLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX251bWJlclwiKTtcbiAgICAgICAgc2xvdE51bS50ZXh0Q29udGVudCA9IHNsb3Quc2xvdF9uby50b1N0cmluZygpO1xuICBcbiAgICAgICAgc2xvdENhci5jbGFzc0xpc3QuYWRkKFwicGFya2luZy1zbG90X19jYXJcIik7XG4gICAgICAgIHNsb3RDYXIudGV4dENvbnRlbnQgPSBzbG90LnRpY2tldF9ubyA/IGBUaWNrZXQjIDogJHtzbG90LnRpY2tldF9ubyB8fCBcIlwifWAgOiBcIlwiO1xuICAgICAgICBzbG90UmVnLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX3JlZy1udW1iZXJcIik7XG4gICAgICAgIHNsb3RSZWcudGV4dENvbnRlbnQgPSBzbG90LmNhcl9yZWdfbm8gPyBgQ2FyLVJlZyMgOiAke3Nsb3QuY2FyX3JlZ19ubyB8fCBcIlwifWAgOiBcIlwiO1xuICBcbiAgICAgICAgZGl2TWFpbi5hcHBlbmRDaGlsZChzbG90TnVtKVxuICAgICAgICBkaXZNYWluLmFwcGVuZENoaWxkKHNsb3RDYXIpXG4gICAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdFJlZylcbiAgICAgICAgcmV0dXJuIGRpdk1haW5cbiAgICAgIH0pKVxuICAgIH1lbHNle1xuICAgICAgdGhpcy5wYXJraW5nU2xvdHMucmVwbGFjZUNoaWxkcmVuKC4uLlBhcmtpbmdTbG90c1N0YXRlLmZpbHRlcmVkX3Nsb3RzLm1hcCgoc2xvdDogUGFya2luZ1Nsb3QpID0+IHtcbiAgICAgICAgY29uc3QgZGl2TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHNsb3ROdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGNvbnN0IHNsb3RDYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBzbG90UmVnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgXG4gICAgICAgIGRpdk1haW4uY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdFwiKTtcbiAgICAgICAgZGl2TWFpbi5jbGFzc0xpc3QuYWRkKGBwYXJraW5nLXNsb3QtLSR7c2xvdC5zbG90X25vfWApO1xuICBcbiAgICAgICAgZGl2TWFpbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzbG90LmNhcl9jb2xvciEudG9TdHJpbmcoKTtcbiAgICAgICAgc2xvdE51bS5jbGFzc0xpc3QuYWRkKFwicGFya2luZy1zbG90X19udW1iZXJcIik7XG4gICAgICAgIHNsb3ROdW0udGV4dENvbnRlbnQgPSBzbG90LnNsb3Rfbm8udG9TdHJpbmcoKTtcbiAgXG4gICAgICAgIHNsb3RDYXIuY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdF9fY2FyXCIpO1xuICAgICAgICBzbG90Q2FyLnRleHRDb250ZW50ID0gYFRpY2tldCMgOiAke3Nsb3QudGlja2V0X25vIHx8IFwiXCJ9YFxuICAgICAgICBzbG90UmVnLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX3JlZy1udW1iZXJcIik7XG4gICAgICAgIHNsb3RSZWcudGV4dENvbnRlbnQgPSBgQ2FyLVJlZyMgOiAke3Nsb3QuY2FyX3JlZ19ubyB8fCBcIlwifWA7XG4gIFxuICAgICAgICBkaXZNYWluLmFwcGVuZENoaWxkKHNsb3ROdW0pXG4gICAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdENhcilcbiAgICAgICAgZGl2TWFpbi5hcHBlbmRDaGlsZChzbG90UmVnKVxuICAgICAgICByZXR1cm4gZGl2TWFpblxuICAgICAgfSkpXG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgUGFya2luZ1Nsb3RzU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvUGFya2luZ1Nsb3RzXCI7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJzRm9ybSB7XG4gICAgZm9ybTpIVE1MRm9ybUVsZW1lbnQ7XG4gICAgdGlja2V0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICByZWdOb0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHJlc2V0OiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1fZmlsdGVyc1wiKSEgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLnN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy50aWNrZXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGlja2V0X2ZpbHRlclwiKSEgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgdGhpcy5jb2xvcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2xvcl9maWx0ZXJcIikhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHRoaXMucmVnTm9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnLW5vX2ZpbHRlclwiKSEgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgdGhpcy5yZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsdGVyX3Jlc2V0XCIpISBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgdGhpcy5yZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yZXNldEhhbmRsZXIuYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICBzdWJtaXRIYW5kbGVyKGU6U3VibWl0RXZlbnQpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFBhcmtpbmdTbG90c1N0YXRlLmZpbHRlclBhcmtpbmdTbG90cyh0aGlzLmNvbG9ySW5wdXQudmFsdWUsIHRoaXMudGlja2V0SW5wdXQudmFsdWUsIHRoaXMucmVnTm9JbnB1dC52YWx1ZSwgZmFsc2UpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlsdGVyZXNcIixQYXJraW5nU2xvdHNTdGF0ZS5maWx0ZXJlZF9zbG90cylcbiAgICB9XG5cbiAgICByZXNldEhhbmRsZXIoKXtcbiAgICAgICAgdGhpcy5jb2xvcklucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICB0aGlzLnJlZ05vSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgICAgIHRoaXMudGlja2V0SW5wdXQudmFsdWUgPSBcIlwiXG4gICAgICAgIFBhcmtpbmdTbG90c1N0YXRlLmZpbHRlclBhcmtpbmdTbG90cyh0aGlzLmNvbG9ySW5wdXQudmFsdWUsIHRoaXMudGlja2V0SW5wdXQudmFsdWUsIHRoaXMucmVnTm9JbnB1dC52YWx1ZSwgdHJ1ZSlcbiAgICB9XG59IiwiaW1wb3J0IHsgc2xvdF9jb21wb25lbnQgfSBmcm9tIFwiLi4vYXBwXCI7XG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi4vbW9kZWxzL0NhclwiO1xuaW1wb3J0IHsgQ2Fyc1N0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL0NhcnNcIjtcbmltcG9ydCB7IFBhcmtpbmdTbG90c1N0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1BhcmtpbmdTbG90c1wiO1xuaW1wb3J0IHsgVGlja2V0c1N0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1RpY2tldHNcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm17XG4gICAgZm9ybTogSFRNTEZvcm1FbGVtZW50O1xuICAgIGNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcmVnTm9JbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBjcmVhdGVUaXhCdG46IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybV9jcmVhdGVcIikhIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5zdWJtaXRIYW5kbGVyLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMuY3JlYXRlVGl4QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtX19zdWJtaXRfYnV0dG9uXCIpISBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgdGhpcy5jcmVhdGVCdG5BY3RpdmUoZmFsc2UpO1xuICAgICAgICB0aGlzLmNvbG9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbG9yXCIpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICB0aGlzLnJlZ05vSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZy1ub1wiKSEgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB9XG5cbiAgICBjcmVhdGVCdG5BY3RpdmUoaXNBY3RpdmU6Ym9vbGVhbil7XG4gICAgICAgIGlmKGlzQWN0aXZlKXtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGl4QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVUaXhCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3VibWl0SGFuZGxlcihlOiBTdWJtaXRFdmVudCl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBjYXI6Q2FyID0gQ2Fyc1N0YXRlLmFkZENhcih0aGlzLmNvbG9ySW5wdXQudmFsdWUsIHRoaXMucmVnTm9JbnB1dC52YWx1ZSlcbiAgICAgICAgY29uc3Qgc2xvdCA9IFBhcmtpbmdTbG90c1N0YXRlLmdldEF2YWlsYWJsZVNsb3QoKVxuICAgICAgICBpZihzbG90KXtcbiAgICAgICAgICAgIGNvbnN0IHRpY2tldCA9IFRpY2tldHNTdGF0ZS5hZGRUaWNrZXQoc2xvdC5zbG90X25vLnRvU3RyaW5nKCksIGNhci5yZWdfbm8pXG4gICAgICAgICAgICBjb25zdCB1cFNsb3QgPSBzbG90X2NvbXBvbmVudC5wYXJrKHNsb3Quc2xvdF9uby50b1N0cmluZygpLCBjYXIuY29sb3IsIGNhci5yZWdfbm8sIHRpY2tldC50aWNrZXRfbnVtYmVyKVxuICAgICAgICAgICAgY29uc29sZS5sb2codXBTbG90KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGFsZXJ0KFwiTm8gU2xvdHMgQXZhaWxhYmxlXCIpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvcklucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICB0aGlzLnJlZ05vSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBQYXJraW5nU2xvdHNTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9QYXJraW5nU2xvdHNcIjtcblxuZXhwb3J0IGNsYXNzIE5vU2xvdCB7XG4gIHBhcmtpbmdTbG90czogSFRNTERpdkVsZW1lbnQ7XG4gIG1lc3NhZ2U6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IE5vU2xvdDtcblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IE5vU2xvdCgpO1xuICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmtpbmdTbG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5wYXJraW5nLXNsb3RzXCJcbiAgICApISBhcyBIVE1MRGl2RWxlbWVudDtcblxuICAgIHRoaXMubWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdHNfX21lc3NhZ2VcIik7XG4gICAgdGhpcy5tZXNzYWdlLnRleHRDb250ZW50ID0gXCJObyBTbG90cywgcGxlYXNlIGNyZWF0ZSBtb3JlIHBhcmtpbmctc2xvdHMhXCI7XG4gICAgaWYgKCFQYXJraW5nU2xvdHNTdGF0ZS50b3RhbF9zbG90cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVuZGVyTWVzc2FnZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlck1lc3NhZ2UoKSB7XG4gICAgaWYgKCFQYXJraW5nU2xvdHNTdGF0ZS50b3RhbF9zbG90cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucGFya2luZ1Nsb3RzLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlLnJlbW92ZSgpXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ2FyIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29sb3I6c3RyaW5nLCBwdWJsaWMgcmVnX25vOnN0cmluZyl7fVxufSIsImV4cG9ydCBjbGFzcyBQYXJraW5nU2xvdCB7XG4gICAgY2FyX3JlZ19ubzogbnVsbHxzdHJpbmcgPSBudWxsO1xuICAgIGlzRnJlZTpib29sZWFuPXRydWU7XG4gICAgY2FyX2NvbG9yOiBudWxsfHN0cmluZyA9IG51bGw7XG4gICAgdGlja2V0X25vOiBudWxsfHN0cmluZyA9IG51bGw7XG4gICAgY29uc3RydWN0b3IocHVibGljIHNsb3Rfbm86bnVtYmVyKXt9XG59IiwiZXhwb3J0IGNsYXNzIFRpY2tldCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBzbG90X251bWJlcjpzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB0aWNrZXRfbnVtYmVyOnN0cmluZyxcbiAgICAgICAgcHVibGljIGNhcl9yZWdfbnVtYmVyOnN0cmluZ1xuICAgICAgICApe31cbn0iLCJpbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi4vbW9kZWxzL0NhclwiO1xuXG5jbGFzcyBDYXJzIHtcbiAgICBjYXJzOkNhcltdPVtdO1xuICAgIGNhcnNfY29sb3JzX29wdGlvbnM6IHN0cmluZ1tdID0gW11cbiAgICBjYXJzX3JlZ19vcHRpb25zOiBzdHJpbmdbXSA9IFtdXG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IENhcnM7XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKXtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IENhcnMoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ2FyKGNvbG9yOnN0cmluZywgcmVnX25vOnN0cmluZyl7XG4gICAgICAgIGNvbnN0IGNhciA9IHRoaXMuY2Fycy5maW5kKGNhciA9PiBjYXIucmVnX25vID09PSByZWdfbm8pXG4gICAgICAgIGlmKGNhcil7XG4gICAgICAgICAgICByZXR1cm4gY2FyO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuY2Fycy5wdXNoKG5ldyBDYXIoY29sb3IsIHJlZ19ubykpXG4gICAgICAgICAgICBpZighdGhpcy5jYXJzX2NvbG9yc19vcHRpb25zLmluY2x1ZGVzKGNvbG9yKSkgdGhpcy5jYXJzX2NvbG9yc19vcHRpb25zLnB1c2goY29sb3IpXG4gICAgICAgICAgICBpZighdGhpcy5jYXJzX3JlZ19vcHRpb25zLmluY2x1ZGVzKHJlZ19ubykpIHRoaXMuY2Fyc19yZWdfb3B0aW9ucy5wdXNoKHJlZ19ubykgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYXJzW3RoaXMuY2Fycy5sZW5ndGggLSAxXVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgQ2Fyc1N0YXRlID0gQ2Fycy5nZXRJbnN0YW5jZSgpIiwiaW1wb3J0IHsgZm9ybUVsZW1lbnQsIG5vX3Nsb3RfcmVuZGVyLCBzbG90X2NvbXBvbmVudCB9IGZyb20gXCIuLi9hcHBcIjtcbmltcG9ydCB7IFBhcmtpbmdTbG90IH0gZnJvbSBcIi4uL21vZGVscy9QYXJraW5nU2xvdFwiO1xuXG5jbGFzcyBQYXJraW5nU2xvdHMge1xuICAgIHRvdGFsX3Nsb3RzOiBQYXJraW5nU2xvdFtdID0gW107XG4gICAgZmlsdGVyZWRfc2xvdHM6IFBhcmtpbmdTbG90W10gPSBbXVxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUGFya2luZ1Nsb3RzO1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCl7XG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBQYXJraW5nU2xvdHMoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlU2xvdCgpe1xuICAgICAgICB0aGlzLnRvdGFsX3Nsb3RzLnB1c2gobmV3IFBhcmtpbmdTbG90KHRoaXMudG90YWxfc2xvdHMubGVuZ3RoICsgMSkpXG4gICAgICAgIHNsb3RfY29tcG9uZW50LnJlbmRlclNsb3QodGhpcy50b3RhbF9zbG90c1t0aGlzLnRvdGFsX3Nsb3RzLmxlbmd0aCAtIDFdKVxuICAgICAgICBub19zbG90X3JlbmRlci5yZW5kZXJNZXNzYWdlKClcbiAgICAgICAgdGhpcy51cGRhdGVDcmVhdGVUaWNrZXRTdGF0ZSgpXG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsX3Nsb3RzW3RoaXMudG90YWxfc2xvdHMubGVuZ3RoIC0gMV1cbiAgICB9XG5cbiAgICBnZXRBdmFpbGFibGVTbG90KCl7XG4gICAgICAgIGNvbnN0IGF2YWlsU2xvdCA9IHRoaXMudG90YWxfc2xvdHMuZmluZChzbG90ID0+IHNsb3QuaXNGcmVlKVxuICAgICAgICByZXR1cm4gYXZhaWxTbG90O1xuICAgIH1cblxuICAgIHVwZGF0ZUNyZWF0ZVRpY2tldFN0YXRlKCl7XG4gICAgICAgIGNvbnN0IGF2YWlsU2xvdCA9IHRoaXMudG90YWxfc2xvdHMuZmluZChzbG90ID0+IHNsb3QuaXNGcmVlKVxuICAgICAgICBpZihhdmFpbFNsb3Qpe1xuICAgICAgICAgICAgZm9ybUVsZW1lbnQuY3JlYXRlQnRuQWN0aXZlKHRydWUpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZm9ybUVsZW1lbnQuY3JlYXRlQnRuQWN0aXZlKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlsdGVyUGFya2luZ1Nsb3RzKGNvbG9yOnN0cmluZz1cIlwiLCB0aWNrZXRfbm86IHN0cmluZyA9IFwiXCIscmVnX25vOnN0cmluZz1cIlwiLCBpc1Jlc2V0OmJvb2xlYW4pe1xuICAgICAgICBpZihpc1Jlc2V0KXtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRfc2xvdHMgPSBbLi4udGhpcy50b3RhbF9zbG90c107IFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRfc2xvdHMgPSB0aGlzLnRvdGFsX3Nsb3RzLmZpbHRlcigoc2xvdDpQYXJraW5nU2xvdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHNsb3QuY2FyX2NvbG9yID09PSBjb2xvciB8fCBzbG90LnRpY2tldF9ubyA9PT0gdGlja2V0X25vIHx8IHNsb3QuY2FyX3JlZ19ubyA9PT0gcmVnX25vKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgc2xvdF9jb21wb25lbnQucmVuZGVyRmlsdGVyZWRTbG90cyhpc1Jlc2V0KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFBhcmtpbmdTbG90c1N0YXRlID0gUGFya2luZ1Nsb3RzLmdldEluc3RhbmNlKCkiLCJpbXBvcnQgeyBUaWNrZXQgfSBmcm9tIFwiLi4vbW9kZWxzL1RpY2tldFwiO1xuXG5jbGFzcyBUaWNrZXRzIHtcbiAgICB0aWNrZXRzOlRpY2tldFtdPVtdXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBUaWNrZXRzO1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVGlja2V0cygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICAgIH1cbiAgICB9XG4gICAgYWRkVGlja2V0KHNsb3Rfbm86c3RyaW5nLCBjYXJfcmVnX25vOnN0cmluZyl7XG4gICAgICAgIHRoaXMudGlja2V0cy5wdXNoKG5ldyBUaWNrZXQoc2xvdF9ubywgKHRoaXMudGlja2V0cy5sZW5ndGggKyAxKS50b1N0cmluZygpLCBjYXJfcmVnX25vKSlcbiAgICAgICAgcmV0dXJuIHRoaXMudGlja2V0c1t0aGlzLnRpY2tldHMubGVuZ3RoIC0gMV1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBUaWNrZXRzU3RhdGUgPSBUaWNrZXRzLmdldEluc3RhbmNlKCkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==