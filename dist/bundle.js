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
            slot_car.textContent = slot.ticket_no;
        const slot_reg_no = Parkslot.querySelector(".parking-slot__reg-number");
        if (slot_reg_no)
            slot_reg_no.textContent = slot.car_reg_no;
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
                slotCar.textContent = slot.ticket_no || "";
                slotReg.classList.add("parking-slot__reg-number");
                slotReg.textContent = slot.car_reg_no || "";
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
                slotCar.textContent = slot.ticket_no || "";
                slotReg.classList.add("parking-slot__reg-number");
                slotReg.textContent = slot.car_reg_no || "";
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
        this.reset = document.querySelector(".reset-btn");
        this.reset.addEventListener("click", this.resetHandler.bind(this));
    }
    submitHandler(e) {
        e.preventDefault();
        _state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__.ParkingSlotsState.filterParkingSlots(this.colorInput.value, this.regNoInput.value, this.ticketInput.value, false);
        console.log("Filteres", _state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__.ParkingSlotsState.filtered_slots);
    }
    resetHandler() {
        this.colorInput.value = "";
        this.regNoInput.value = "";
        this.ticketInput.value = "";
        _state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__.ParkingSlotsState.filterParkingSlots(this.colorInput.value, this.regNoInput.value, this.ticketInput.value, true);
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
        this.createTixBtn = document.querySelector(".form__submit");
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
            console.log("No Slots Available");
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
        this.message.textContent = "No Slots, please create slots";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZVNsb3QudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVycy50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvY29tcG9uZW50cy9Gb3JtLnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9jb21wb25lbnRzL05vU2xvdC50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvbW9kZWxzL0Nhci50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvbW9kZWxzL1BhcmtpbmdTbG90LnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9tb2RlbHMvVGlja2V0LnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9zdGF0ZS9DYXJzLnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9zdGF0ZS9QYXJraW5nU2xvdHMudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL3N0YXRlL1RpY2tldHMudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENyZWF0ZVNsb3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL0NyZWF0ZVNsb3RcIjtcbmltcG9ydCB7IEZpbHRlcnNGb3JtIH0gZnJvbSBcIi4vY29tcG9uZW50cy9GaWx0ZXJzXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Gb3JtXCI7XG5pbXBvcnQgeyBOb1Nsb3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL05vU2xvdFwiO1xuXG5leHBvcnQgY29uc3Qgbm9fc2xvdF9yZW5kZXIgPSBOb1Nsb3QuZ2V0SW5zdGFuY2UoKVxuZXhwb3J0IGNvbnN0IHNsb3RfY29tcG9uZW50ID0gQ3JlYXRlU2xvdC5nZXRJbnN0YW5jZSgpO1xuZXhwb3J0IGNvbnN0IGZvcm1FbGVtZW50ID0gbmV3IEZvcm0oKVxubmV3IEZpbHRlcnNGb3JtKCkiLCJpbXBvcnQgeyBQYXJraW5nU2xvdCB9IGZyb20gXCIuLi9tb2RlbHMvUGFya2luZ1Nsb3RcIjtcbmltcG9ydCB7IFBhcmtpbmdTbG90c1N0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1BhcmtpbmdTbG90c1wiO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlU2xvdCB7XG4gIGNyZWF0ZUJ0bjogSFRNTERpdkVsZW1lbnQ7XG4gIHBhcmtpbmdTbG90czogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQ3JlYXRlU2xvdDtcblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IENyZWF0ZVNsb3QoKTtcbiAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIucGFya2luZy1zbG90c19fY3JlYXRlXCJcbiAgICApISBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICB0aGlzLmNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgUGFya2luZ1Nsb3RzU3RhdGUuY3JlYXRlU2xvdC5iaW5kKFBhcmtpbmdTbG90c1N0YXRlKVxuICAgICk7XG5cbiAgICB0aGlzLnBhcmtpbmdTbG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5wYXJraW5nLXNsb3RzXCJcbiAgICApISBhcyBIVE1MRGl2RWxlbWVudDtcbiAgfVxuXG4gIHJlbmRlclNsb3Qoc2xvdDogUGFya2luZ1Nsb3QpIHtcbiAgICBpZiAodGhpcy5wYXJraW5nU2xvdHMpIHtcbiAgICAgIGNvbnN0IGRpdk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3Qgc2xvdE51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgIGNvbnN0IHNsb3RDYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3Qgc2xvdFJlZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGRpdk1haW4uY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdFwiKTtcbiAgICAgIGRpdk1haW4uY2xhc3NMaXN0LmFkZChgcGFya2luZy1zbG90LS0ke3Nsb3Quc2xvdF9ub31gKTtcblxuICAgICAgc2xvdE51bS5jbGFzc0xpc3QuYWRkKFwicGFya2luZy1zbG90X19udW1iZXJcIik7XG4gICAgICBzbG90TnVtLnRleHRDb250ZW50ID0gc2xvdC5zbG90X25vLnRvU3RyaW5nKCk7XG5cbiAgICAgIHNsb3RDYXIuY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdF9fY2FyXCIpO1xuICAgICAgc2xvdENhci50ZXh0Q29udGVudCA9IHNsb3QudGlja2V0X25vIHx8IFwiXCI7XG4gICAgICBzbG90UmVnLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX3JlZy1udW1iZXJcIik7XG4gICAgICBzbG90UmVnLnRleHRDb250ZW50ID0gc2xvdC5jYXJfcmVnX25vIHx8IFwiXCI7XG5cbiAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdE51bSlcbiAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdENhcilcbiAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdFJlZylcblxuICAgICAgdGhpcy5wYXJraW5nU2xvdHMuYXBwZW5kQ2hpbGQoZGl2TWFpbilcbiAgICB9XG4gIH1cblxuICB1cGRhdGVTbG90KHNsb3Q6UGFya2luZ1Nsb3Qpe1xuICAgIGNvbnN0IFBhcmtzbG90OiBIVE1MRGl2RWxlbWVudCA9IHRoaXMucGFya2luZ1Nsb3RzLnF1ZXJ5U2VsZWN0b3IoYC5wYXJraW5nLXNsb3QtLSR7c2xvdC5zbG90X25vfWApISBhcyBIVE1MRGl2RWxlbWVudFxuXG4gICAgUGFya3Nsb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2xvdC5jYXJfY29sb3IhLnRvU3RyaW5nKCk7XG4gICAgY29uc3Qgc2xvdF9jYXI6IEhUTUxEaXZFbGVtZW50ID0gUGFya3Nsb3QucXVlcnlTZWxlY3RvcihcIi5wYXJraW5nLXNsb3RfX2NhclwiKSEgYXMgSFRNTERpdkVsZW1lbnRcbiAgICBpZihzbG90X2Nhcikgc2xvdF9jYXIudGV4dENvbnRlbnQgPSBzbG90LnRpY2tldF9ub1xuXG4gICAgY29uc3Qgc2xvdF9yZWdfbm86IEhUTUxEaXZFbGVtZW50ID0gUGFya3Nsb3QucXVlcnlTZWxlY3RvcihcIi5wYXJraW5nLXNsb3RfX3JlZy1udW1iZXJcIikhIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgIGlmKHNsb3RfcmVnX25vKSBzbG90X3JlZ19uby50ZXh0Q29udGVudCA9IHNsb3QuY2FyX3JlZ19ub1xuICB9XG5cbiAgcGFyayhzbG90X25vOnN0cmluZywgY2FyX2NvbG9yOiBzdHJpbmcsIGNhcl9yZWdfbm86IHN0cmluZywgdGlja2V0OnN0cmluZyl7XG4gICAgY29uc3Qgc2xvdCA9IFBhcmtpbmdTbG90c1N0YXRlLnRvdGFsX3Nsb3RzLmZpbmQoaXRlbSA9PiBpdGVtLnNsb3Rfbm8udG9TdHJpbmcoKSA9PT0gc2xvdF9ubykhXG5cbiAgICBzbG90LmlzRnJlZSA9IGZhbHNlO1xuICAgIHNsb3QuY2FyX2NvbG9yPSBjYXJfY29sb3I7XG4gICAgc2xvdC5jYXJfcmVnX25vID0gY2FyX3JlZ19ubztcbiAgICBzbG90LnRpY2tldF9ubyA9IHRpY2tldFxuICAgIFBhcmtpbmdTbG90c1N0YXRlLnVwZGF0ZUNyZWF0ZVRpY2tldFN0YXRlKClcbiAgICB0aGlzLnVwZGF0ZVNsb3Qoc2xvdClcbiAgICByZXR1cm4gc2xvdDtcbiAgfVxuXG4gIHJlbmRlckZpbHRlcmVkU2xvdHMoaXNSZXNldDpib29sZWFuKXtcbiAgICBpZihpc1Jlc2V0KXtcbiAgICAgIHRoaXMucGFya2luZ1Nsb3RzLnJlcGxhY2VDaGlsZHJlbiguLi5QYXJraW5nU2xvdHNTdGF0ZS50b3RhbF9zbG90cy5tYXAoKHNsb3Q6IFBhcmtpbmdTbG90KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBzbG90TnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBjb25zdCBzbG90Q2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3Qgc2xvdFJlZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFxuICAgICAgICBkaXZNYWluLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RcIik7XG4gICAgICAgIGRpdk1haW4uY2xhc3NMaXN0LmFkZChgcGFya2luZy1zbG90LS0ke3Nsb3Quc2xvdF9ub31gKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHNsb3QuY2FyX2NvbG9yKXtcbiAgICAgICAgICBkaXZNYWluLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNsb3QuY2FyX2NvbG9yLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgICBzbG90TnVtLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX251bWJlclwiKTtcbiAgICAgICAgc2xvdE51bS50ZXh0Q29udGVudCA9IHNsb3Quc2xvdF9uby50b1N0cmluZygpO1xuICBcbiAgICAgICAgc2xvdENhci5jbGFzc0xpc3QuYWRkKFwicGFya2luZy1zbG90X19jYXJcIik7XG4gICAgICAgIHNsb3RDYXIudGV4dENvbnRlbnQgPSBzbG90LnRpY2tldF9ubyB8fCBcIlwiO1xuICAgICAgICBzbG90UmVnLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX3JlZy1udW1iZXJcIik7XG4gICAgICAgIHNsb3RSZWcudGV4dENvbnRlbnQgPSBzbG90LmNhcl9yZWdfbm8gfHwgXCJcIjtcbiAgXG4gICAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdE51bSlcbiAgICAgICAgZGl2TWFpbi5hcHBlbmRDaGlsZChzbG90Q2FyKVxuICAgICAgICBkaXZNYWluLmFwcGVuZENoaWxkKHNsb3RSZWcpXG4gICAgICAgIHJldHVybiBkaXZNYWluXG4gICAgICB9KSlcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMucGFya2luZ1Nsb3RzLnJlcGxhY2VDaGlsZHJlbiguLi5QYXJraW5nU2xvdHNTdGF0ZS5maWx0ZXJlZF9zbG90cy5tYXAoKHNsb3Q6IFBhcmtpbmdTbG90KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBzbG90TnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBjb25zdCBzbG90Q2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3Qgc2xvdFJlZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFxuICAgICAgICBkaXZNYWluLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RcIik7XG4gICAgICAgIGRpdk1haW4uY2xhc3NMaXN0LmFkZChgcGFya2luZy1zbG90LS0ke3Nsb3Quc2xvdF9ub31gKTtcbiAgXG4gICAgICAgIGRpdk1haW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2xvdC5jYXJfY29sb3IhLnRvU3RyaW5nKCk7XG4gICAgICAgIHNsb3ROdW0uY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdF9fbnVtYmVyXCIpO1xuICAgICAgICBzbG90TnVtLnRleHRDb250ZW50ID0gc2xvdC5zbG90X25vLnRvU3RyaW5nKCk7XG4gIFxuICAgICAgICBzbG90Q2FyLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX2NhclwiKTtcbiAgICAgICAgc2xvdENhci50ZXh0Q29udGVudCA9IHNsb3QudGlja2V0X25vIHx8IFwiXCI7XG4gICAgICAgIHNsb3RSZWcuY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdF9fcmVnLW51bWJlclwiKTtcbiAgICAgICAgc2xvdFJlZy50ZXh0Q29udGVudCA9IHNsb3QuY2FyX3JlZ19ubyB8fCBcIlwiO1xuICBcbiAgICAgICAgZGl2TWFpbi5hcHBlbmRDaGlsZChzbG90TnVtKVxuICAgICAgICBkaXZNYWluLmFwcGVuZENoaWxkKHNsb3RDYXIpXG4gICAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdFJlZylcbiAgICAgICAgcmV0dXJuIGRpdk1haW5cbiAgICAgIH0pKVxuICAgIH1cbiAgfVxufSIsImltcG9ydCB7IFBhcmtpbmdTbG90c1N0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1BhcmtpbmdTbG90c1wiO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyc0Zvcm0ge1xuICAgIGZvcm06SFRNTEZvcm1FbGVtZW50O1xuICAgIHRpY2tldElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcmVnTm9JbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICByZXNldDogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtX2ZpbHRlcnNcIikhIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5zdWJtaXRIYW5kbGVyLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMudGlja2V0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpY2tldF9maWx0ZXJcIikhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29sb3JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JfZmlsdGVyXCIpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICB0aGlzLnJlZ05vSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZy1ub19maWx0ZXJcIikhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHRoaXMucmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0LWJ0blwiKSEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIHRoaXMucmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucmVzZXRIYW5kbGVyLmJpbmQodGhpcykpXG4gICAgfVxuXG4gICAgc3VibWl0SGFuZGxlcihlOlN1Ym1pdEV2ZW50KXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBQYXJraW5nU2xvdHNTdGF0ZS5maWx0ZXJQYXJraW5nU2xvdHModGhpcy5jb2xvcklucHV0LnZhbHVlLCB0aGlzLnJlZ05vSW5wdXQudmFsdWUsIHRoaXMudGlja2V0SW5wdXQudmFsdWUsIGZhbHNlKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpbHRlcmVzXCIsUGFya2luZ1Nsb3RzU3RhdGUuZmlsdGVyZWRfc2xvdHMpXG4gICAgfVxuXG4gICAgcmVzZXRIYW5kbGVyKCl7XG4gICAgICAgIHRoaXMuY29sb3JJbnB1dC52YWx1ZSA9IFwiXCJcbiAgICAgICAgdGhpcy5yZWdOb0lucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICB0aGlzLnRpY2tldElucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICBQYXJraW5nU2xvdHNTdGF0ZS5maWx0ZXJQYXJraW5nU2xvdHModGhpcy5jb2xvcklucHV0LnZhbHVlLCB0aGlzLnJlZ05vSW5wdXQudmFsdWUsIHRoaXMudGlja2V0SW5wdXQudmFsdWUsIHRydWUpXG4gICAgfVxufSIsImltcG9ydCB7IHNsb3RfY29tcG9uZW50IH0gZnJvbSBcIi4uL2FwcFwiO1xuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uL21vZGVscy9DYXJcIjtcbmltcG9ydCB7IENhcnNTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9DYXJzXCI7XG5pbXBvcnQgeyBQYXJraW5nU2xvdHNTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9QYXJraW5nU2xvdHNcIjtcbmltcG9ydCB7IFRpY2tldHNTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9UaWNrZXRzXCI7XG5cbmV4cG9ydCBjbGFzcyBGb3Jte1xuICAgIGZvcm06IEhUTUxGb3JtRWxlbWVudDtcbiAgICBjb2xvcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHJlZ05vSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY3JlYXRlVGl4QnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1fY3JlYXRlXCIpISBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuc3VibWl0SGFuZGxlci5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLmNyZWF0ZVRpeEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fc3VibWl0XCIpISBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgdGhpcy5jcmVhdGVCdG5BY3RpdmUoZmFsc2UpO1xuICAgICAgICB0aGlzLmNvbG9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbG9yXCIpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICB0aGlzLnJlZ05vSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZy1ub1wiKSEgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB9XG5cbiAgICBjcmVhdGVCdG5BY3RpdmUoaXNBY3RpdmU6Ym9vbGVhbil7XG4gICAgICAgIGlmKGlzQWN0aXZlKXtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGl4QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVUaXhCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3VibWl0SGFuZGxlcihlOiBTdWJtaXRFdmVudCl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBjYXI6Q2FyID0gQ2Fyc1N0YXRlLmFkZENhcih0aGlzLmNvbG9ySW5wdXQudmFsdWUsIHRoaXMucmVnTm9JbnB1dC52YWx1ZSlcbiAgICAgICAgY29uc3Qgc2xvdCA9IFBhcmtpbmdTbG90c1N0YXRlLmdldEF2YWlsYWJsZVNsb3QoKVxuICAgICAgICBpZihzbG90KXtcbiAgICAgICAgICAgIGNvbnN0IHRpY2tldCA9IFRpY2tldHNTdGF0ZS5hZGRUaWNrZXQoc2xvdC5zbG90X25vLnRvU3RyaW5nKCksIGNhci5yZWdfbm8pXG4gICAgICAgICAgICBjb25zdCB1cFNsb3QgPSBzbG90X2NvbXBvbmVudC5wYXJrKHNsb3Quc2xvdF9uby50b1N0cmluZygpLCBjYXIuY29sb3IsIGNhci5yZWdfbm8sIHRpY2tldC50aWNrZXRfbnVtYmVyKVxuICAgICAgICAgICAgY29uc29sZS5sb2codXBTbG90KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gU2xvdHMgQXZhaWxhYmxlXCIpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvcklucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICB0aGlzLnJlZ05vSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBQYXJraW5nU2xvdHNTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9QYXJraW5nU2xvdHNcIjtcblxuZXhwb3J0IGNsYXNzIE5vU2xvdCB7XG4gIHBhcmtpbmdTbG90czogSFRNTERpdkVsZW1lbnQ7XG4gIG1lc3NhZ2U6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IE5vU2xvdDtcblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IE5vU2xvdCgpO1xuICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmtpbmdTbG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5wYXJraW5nLXNsb3RzXCJcbiAgICApISBhcyBIVE1MRGl2RWxlbWVudDtcblxuICAgIHRoaXMubWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdHNfX21lc3NhZ2VcIik7XG4gICAgdGhpcy5tZXNzYWdlLnRleHRDb250ZW50ID0gXCJObyBTbG90cywgcGxlYXNlIGNyZWF0ZSBzbG90c1wiO1xuICAgIGlmICghUGFya2luZ1Nsb3RzU3RhdGUudG90YWxfc2xvdHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlbmRlck1lc3NhZ2UoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJNZXNzYWdlKCkge1xuICAgIGlmICghUGFya2luZ1Nsb3RzU3RhdGUudG90YWxfc2xvdHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnBhcmtpbmdTbG90cy5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWVzc2FnZS5yZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENhciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbG9yOnN0cmluZywgcHVibGljIHJlZ19ubzpzdHJpbmcpe31cbn0iLCJleHBvcnQgY2xhc3MgUGFya2luZ1Nsb3Qge1xuICAgIGNhcl9yZWdfbm86IG51bGx8c3RyaW5nID0gbnVsbDtcbiAgICBpc0ZyZWU6Ym9vbGVhbj10cnVlO1xuICAgIGNhcl9jb2xvcjogbnVsbHxzdHJpbmcgPSBudWxsO1xuICAgIHRpY2tldF9ubzogbnVsbHxzdHJpbmcgPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzbG90X25vOm51bWJlcil7fVxufSIsImV4cG9ydCBjbGFzcyBUaWNrZXQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgc2xvdF9udW1iZXI6c3RyaW5nLFxuICAgICAgICBwdWJsaWMgdGlja2V0X251bWJlcjpzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBjYXJfcmVnX251bWJlcjpzdHJpbmdcbiAgICAgICAgKXt9XG59IiwiaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uL21vZGVscy9DYXJcIjtcblxuY2xhc3MgQ2FycyB7XG4gICAgY2FyczpDYXJbXT1bXTtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQ2FycztcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQ2FycygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDYXIoY29sb3I6c3RyaW5nLCByZWdfbm86c3RyaW5nKXtcbiAgICAgICAgY29uc3QgY2FyID0gdGhpcy5jYXJzLmZpbmQoY2FyID0+IGNhci5yZWdfbm8gPT09IHJlZ19ubylcbiAgICAgICAgaWYoY2FyKXtcbiAgICAgICAgICAgIHJldHVybiBjYXI7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5jYXJzLnB1c2gobmV3IENhcihjb2xvciwgcmVnX25vKSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhcnNbdGhpcy5jYXJzLmxlbmd0aCAtIDFdXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBDYXJzU3RhdGUgPSBDYXJzLmdldEluc3RhbmNlKCkiLCJpbXBvcnQgeyBmb3JtRWxlbWVudCwgbm9fc2xvdF9yZW5kZXIsIHNsb3RfY29tcG9uZW50IH0gZnJvbSBcIi4uL2FwcFwiO1xuaW1wb3J0IHsgUGFya2luZ1Nsb3QgfSBmcm9tIFwiLi4vbW9kZWxzL1BhcmtpbmdTbG90XCI7XG5cbmNsYXNzIFBhcmtpbmdTbG90cyB7XG4gICAgdG90YWxfc2xvdHM6IFBhcmtpbmdTbG90W10gPSBbXTtcbiAgICBmaWx0ZXJlZF9zbG90czogUGFya2luZ1Nsb3RbXSA9IFtdXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBQYXJraW5nU2xvdHM7XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKXtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFBhcmtpbmdTbG90cygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVTbG90KCl7XG4gICAgICAgIHRoaXMudG90YWxfc2xvdHMucHVzaChuZXcgUGFya2luZ1Nsb3QodGhpcy50b3RhbF9zbG90cy5sZW5ndGggKyAxKSlcbiAgICAgICAgc2xvdF9jb21wb25lbnQucmVuZGVyU2xvdCh0aGlzLnRvdGFsX3Nsb3RzW3RoaXMudG90YWxfc2xvdHMubGVuZ3RoIC0gMV0pXG4gICAgICAgIG5vX3Nsb3RfcmVuZGVyLnJlbmRlck1lc3NhZ2UoKVxuICAgICAgICB0aGlzLnVwZGF0ZUNyZWF0ZVRpY2tldFN0YXRlKClcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxfc2xvdHNbdGhpcy50b3RhbF9zbG90cy5sZW5ndGggLSAxXVxuICAgIH1cblxuICAgIGdldEF2YWlsYWJsZVNsb3QoKXtcbiAgICAgICAgY29uc3QgYXZhaWxTbG90ID0gdGhpcy50b3RhbF9zbG90cy5maW5kKHNsb3QgPT4gc2xvdC5pc0ZyZWUpXG4gICAgICAgIHJldHVybiBhdmFpbFNsb3Q7XG4gICAgfVxuXG4gICAgdXBkYXRlQ3JlYXRlVGlja2V0U3RhdGUoKXtcbiAgICAgICAgY29uc3QgYXZhaWxTbG90ID0gdGhpcy50b3RhbF9zbG90cy5maW5kKHNsb3QgPT4gc2xvdC5pc0ZyZWUpXG4gICAgICAgIGlmKGF2YWlsU2xvdCl7XG4gICAgICAgICAgICBmb3JtRWxlbWVudC5jcmVhdGVCdG5BY3RpdmUodHJ1ZSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBmb3JtRWxlbWVudC5jcmVhdGVCdG5BY3RpdmUoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaWx0ZXJQYXJraW5nU2xvdHMoY29sb3I6c3RyaW5nPVwiXCIsIHRpY2tldF9ubzogc3RyaW5nID0gXCJcIixyZWdfbm86c3RyaW5nPVwiXCIsIGlzUmVzZXQ6Ym9vbGVhbil7XG4gICAgICAgIGlmKGlzUmVzZXQpe1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZF9zbG90cyA9IFsuLi50aGlzLnRvdGFsX3Nsb3RzXTsgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZF9zbG90cyA9IHRoaXMudG90YWxfc2xvdHMuZmlsdGVyKChzbG90OlBhcmtpbmdTbG90KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoc2xvdC5jYXJfY29sb3IgPT09IGNvbG9yIHx8IHNsb3QudGlja2V0X25vID09PSB0aWNrZXRfbm8gfHwgc2xvdC5jYXJfcmVnX25vID09PSByZWdfbm8pIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBzbG90X2NvbXBvbmVudC5yZW5kZXJGaWx0ZXJlZFNsb3RzKGlzUmVzZXQpXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgUGFya2luZ1Nsb3RzU3RhdGUgPSBQYXJraW5nU2xvdHMuZ2V0SW5zdGFuY2UoKSIsImltcG9ydCB7IFRpY2tldCB9IGZyb20gXCIuLi9tb2RlbHMvVGlja2V0XCI7XG5cbmNsYXNzIFRpY2tldHMge1xuICAgIHRpY2tldHM6VGlja2V0W109W11cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFRpY2tldHM7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCl7XG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBUaWNrZXRzKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgICAgICAgfVxuICAgIH1cbiAgICBhZGRUaWNrZXQoc2xvdF9ubzpzdHJpbmcsIGNhcl9yZWdfbm86c3RyaW5nKXtcbiAgICAgICAgdGhpcy50aWNrZXRzLnB1c2gobmV3IFRpY2tldChzbG90X25vLCAodGhpcy50aWNrZXRzLmxlbmd0aCArIDEpLnRvU3RyaW5nKCksIGNhcl9yZWdfbm8pKVxuICAgICAgICByZXR1cm4gdGhpcy50aWNrZXRzW3RoaXMudGlja2V0cy5sZW5ndGggLSAxXVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFRpY2tldHNTdGF0ZSA9IFRpY2tldHMuZ2V0SW5zdGFuY2UoKSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9