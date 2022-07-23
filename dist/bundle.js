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
    createSlotButtonActive(isActive) {
        if (isActive) {
            this.createBtn.disabled = false;
        }
        else {
            this.createBtn.disabled = true;
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
        if (_state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__.ParkingSlotsState.isFilter) {
            if (!_state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__.ParkingSlotsState.filtered_slots.length) {
                this.message.textContent = "No matching results! try different filters";
                this.parkingSlots.appendChild(this.message);
            }
            else {
                this.message.remove();
            }
        }
        else {
            if (!_state_ParkingSlots__WEBPACK_IMPORTED_MODULE_0__.ParkingSlotsState.total_slots.length) {
                this.message.textContent = "No Slots, please create more parking-slots!";
                this.parkingSlots.appendChild(this.message);
            }
            else {
                this.message.remove();
            }
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
        this.isFilter = false;
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
            this.isFilter = false;
            this.filtered_slots = [...this.total_slots];
            _app__WEBPACK_IMPORTED_MODULE_0__.formElement.createBtnActive(true);
            _app__WEBPACK_IMPORTED_MODULE_0__.slot_component.createSlotButtonActive(true);
        }
        else {
            this.isFilter = true;
            this.filtered_slots = this.total_slots.filter((slot) => {
                if (slot.car_color === color || slot.ticket_no === ticket_no || slot.car_reg_no === reg_no)
                    return true;
                else
                    return false;
            });
            _app__WEBPACK_IMPORTED_MODULE_0__.formElement.createBtnActive(false);
            _app__WEBPACK_IMPORTED_MODULE_0__.slot_component.createSlotButtonActive(false);
        }
        _app__WEBPACK_IMPORTED_MODULE_0__.slot_component.renderFilteredSlots(isReset);
        _app__WEBPACK_IMPORTED_MODULE_0__.no_slot_render.renderMessage();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvY29tcG9uZW50cy9DcmVhdGVTbG90LnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlcnMudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL2NvbXBvbmVudHMvRm9ybS50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvY29tcG9uZW50cy9Ob1Nsb3QudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL21vZGVscy9DYXIudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL21vZGVscy9QYXJraW5nU2xvdC50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvbW9kZWxzL1RpY2tldC50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvc3RhdGUvQ2Fycy50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvc3RhdGUvUGFya2luZ1Nsb3RzLnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9zdGF0ZS9UaWNrZXRzLnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDcmVhdGVTbG90IH0gZnJvbSBcIi4vY29tcG9uZW50cy9DcmVhdGVTbG90XCI7XG5pbXBvcnQgeyBGaWx0ZXJzRm9ybSB9IGZyb20gXCIuL2NvbXBvbmVudHMvRmlsdGVyc1wiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuL2NvbXBvbmVudHMvRm9ybVwiO1xuaW1wb3J0IHsgTm9TbG90IH0gZnJvbSBcIi4vY29tcG9uZW50cy9Ob1Nsb3RcIjtcblxuZXhwb3J0IGNvbnN0IG5vX3Nsb3RfcmVuZGVyID0gTm9TbG90LmdldEluc3RhbmNlKClcbmV4cG9ydCBjb25zdCBzbG90X2NvbXBvbmVudCA9IENyZWF0ZVNsb3QuZ2V0SW5zdGFuY2UoKTtcbmV4cG9ydCBjb25zdCBmb3JtRWxlbWVudCA9IG5ldyBGb3JtKClcbm5ldyBGaWx0ZXJzRm9ybSgpIiwiaW1wb3J0IHsgUGFya2luZ1Nsb3QgfSBmcm9tIFwiLi4vbW9kZWxzL1BhcmtpbmdTbG90XCI7XG5pbXBvcnQgeyBQYXJraW5nU2xvdHNTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9QYXJraW5nU2xvdHNcIjtcblxuZXhwb3J0IGNsYXNzIENyZWF0ZVNsb3Qge1xuICBjcmVhdGVCdG46IEhUTUxCdXR0b25FbGVtZW50O1xuICBwYXJraW5nU2xvdHM6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IENyZWF0ZVNsb3Q7XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBDcmVhdGVTbG90KCk7XG4gICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JlYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLnBhcmtpbmctc2xvdHNfX2NyZWF0ZVwiXG4gICAgKSEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgdGhpcy5jcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIFBhcmtpbmdTbG90c1N0YXRlLmNyZWF0ZVNsb3QuYmluZChQYXJraW5nU2xvdHNTdGF0ZSlcbiAgICApO1xuXG4gICAgdGhpcy5wYXJraW5nU2xvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIucGFya2luZy1zbG90c1wiXG4gICAgKSEgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVTbG90QnV0dG9uQWN0aXZlKGlzQWN0aXZlOmJvb2xlYW4pe1xuICAgIGlmKGlzQWN0aXZlKXtcbiAgICAgIHRoaXMuY3JlYXRlQnRuLmRpc2FibGVkID0gZmFsc2VcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuY3JlYXRlQnRuLmRpc2FibGVkID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlclNsb3Qoc2xvdDogUGFya2luZ1Nsb3QpIHtcbiAgICBpZiAodGhpcy5wYXJraW5nU2xvdHMpIHtcbiAgICAgIGNvbnN0IGRpdk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3Qgc2xvdE51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgIGNvbnN0IHNsb3RDYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3Qgc2xvdFJlZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGRpdk1haW4uY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdFwiKTtcbiAgICAgIGRpdk1haW4uY2xhc3NMaXN0LmFkZChgcGFya2luZy1zbG90LS0ke3Nsb3Quc2xvdF9ub31gKTtcblxuICAgICAgc2xvdE51bS5jbGFzc0xpc3QuYWRkKFwicGFya2luZy1zbG90X19udW1iZXJcIik7XG4gICAgICBzbG90TnVtLnRleHRDb250ZW50ID0gc2xvdC5zbG90X25vLnRvU3RyaW5nKCk7XG5cbiAgICAgIHNsb3RDYXIuY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdF9fY2FyXCIpO1xuICAgICAgc2xvdENhci50ZXh0Q29udGVudCA9IHNsb3QudGlja2V0X25vIHx8IFwiXCI7XG4gICAgICBzbG90UmVnLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX3JlZy1udW1iZXJcIik7XG4gICAgICBzbG90UmVnLnRleHRDb250ZW50ID0gc2xvdC5jYXJfcmVnX25vIHx8IFwiXCI7XG5cbiAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdE51bSlcbiAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdENhcilcbiAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdFJlZylcblxuICAgICAgdGhpcy5wYXJraW5nU2xvdHMuYXBwZW5kQ2hpbGQoZGl2TWFpbilcbiAgICB9XG4gIH1cblxuICB1cGRhdGVTbG90KHNsb3Q6UGFya2luZ1Nsb3Qpe1xuICAgIGNvbnN0IFBhcmtzbG90OiBIVE1MRGl2RWxlbWVudCA9IHRoaXMucGFya2luZ1Nsb3RzLnF1ZXJ5U2VsZWN0b3IoYC5wYXJraW5nLXNsb3QtLSR7c2xvdC5zbG90X25vfWApISBhcyBIVE1MRGl2RWxlbWVudFxuXG4gICAgUGFya3Nsb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2xvdC5jYXJfY29sb3IhLnRvU3RyaW5nKCk7XG4gICAgY29uc3Qgc2xvdF9jYXI6IEhUTUxEaXZFbGVtZW50ID0gUGFya3Nsb3QucXVlcnlTZWxlY3RvcihcIi5wYXJraW5nLXNsb3RfX2NhclwiKSEgYXMgSFRNTERpdkVsZW1lbnRcbiAgICBpZihzbG90X2Nhcikgc2xvdF9jYXIudGV4dENvbnRlbnQgPSBgVGlja2V0IyA6ICR7c2xvdC50aWNrZXRfbm8gfHwgXCJcIn1gO1xuXG4gICAgY29uc3Qgc2xvdF9yZWdfbm86IEhUTUxEaXZFbGVtZW50ID0gUGFya3Nsb3QucXVlcnlTZWxlY3RvcihcIi5wYXJraW5nLXNsb3RfX3JlZy1udW1iZXJcIikhIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgIGlmKHNsb3RfcmVnX25vKSBzbG90X3JlZ19uby50ZXh0Q29udGVudCA9IGBDYXItUmVnIyA6ICR7c2xvdC5jYXJfcmVnX25vIHx8IFwiXCJ9YFxuICB9XG5cbiAgcGFyayhzbG90X25vOnN0cmluZywgY2FyX2NvbG9yOiBzdHJpbmcsIGNhcl9yZWdfbm86IHN0cmluZywgdGlja2V0OnN0cmluZyl7XG4gICAgY29uc3Qgc2xvdCA9IFBhcmtpbmdTbG90c1N0YXRlLnRvdGFsX3Nsb3RzLmZpbmQoaXRlbSA9PiBpdGVtLnNsb3Rfbm8udG9TdHJpbmcoKSA9PT0gc2xvdF9ubykhXG5cbiAgICBzbG90LmlzRnJlZSA9IGZhbHNlO1xuICAgIHNsb3QuY2FyX2NvbG9yPSBjYXJfY29sb3I7XG4gICAgc2xvdC5jYXJfcmVnX25vID0gY2FyX3JlZ19ubztcbiAgICBzbG90LnRpY2tldF9ubyA9IHRpY2tldFxuICAgIFBhcmtpbmdTbG90c1N0YXRlLnVwZGF0ZUNyZWF0ZVRpY2tldFN0YXRlKClcbiAgICB0aGlzLnVwZGF0ZVNsb3Qoc2xvdClcbiAgICByZXR1cm4gc2xvdDtcbiAgfVxuXG4gIHJlbmRlckZpbHRlcmVkU2xvdHMoaXNSZXNldDpib29sZWFuKXtcbiAgICBpZihpc1Jlc2V0KXtcbiAgICAgIHRoaXMucGFya2luZ1Nsb3RzLnJlcGxhY2VDaGlsZHJlbiguLi5QYXJraW5nU2xvdHNTdGF0ZS50b3RhbF9zbG90cy5tYXAoKHNsb3Q6IFBhcmtpbmdTbG90KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBzbG90TnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBjb25zdCBzbG90Q2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3Qgc2xvdFJlZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFxuICAgICAgICBkaXZNYWluLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RcIik7XG4gICAgICAgIGRpdk1haW4uY2xhc3NMaXN0LmFkZChgcGFya2luZy1zbG90LS0ke3Nsb3Quc2xvdF9ub31gKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHNsb3QuY2FyX2NvbG9yKXtcbiAgICAgICAgICBkaXZNYWluLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNsb3QuY2FyX2NvbG9yLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgICBzbG90TnVtLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX251bWJlclwiKTtcbiAgICAgICAgc2xvdE51bS50ZXh0Q29udGVudCA9IHNsb3Quc2xvdF9uby50b1N0cmluZygpO1xuICBcbiAgICAgICAgc2xvdENhci5jbGFzc0xpc3QuYWRkKFwicGFya2luZy1zbG90X19jYXJcIik7XG4gICAgICAgIHNsb3RDYXIudGV4dENvbnRlbnQgPSBzbG90LnRpY2tldF9ubyA/IGBUaWNrZXQjIDogJHtzbG90LnRpY2tldF9ubyB8fCBcIlwifWAgOiBcIlwiO1xuICAgICAgICBzbG90UmVnLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX3JlZy1udW1iZXJcIik7XG4gICAgICAgIHNsb3RSZWcudGV4dENvbnRlbnQgPSBzbG90LmNhcl9yZWdfbm8gPyBgQ2FyLVJlZyMgOiAke3Nsb3QuY2FyX3JlZ19ubyB8fCBcIlwifWAgOiBcIlwiO1xuICBcbiAgICAgICAgZGl2TWFpbi5hcHBlbmRDaGlsZChzbG90TnVtKVxuICAgICAgICBkaXZNYWluLmFwcGVuZENoaWxkKHNsb3RDYXIpXG4gICAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdFJlZylcbiAgICAgICAgcmV0dXJuIGRpdk1haW5cbiAgICAgIH0pKVxuICAgIH1lbHNle1xuICAgICAgdGhpcy5wYXJraW5nU2xvdHMucmVwbGFjZUNoaWxkcmVuKC4uLlBhcmtpbmdTbG90c1N0YXRlLmZpbHRlcmVkX3Nsb3RzLm1hcCgoc2xvdDogUGFya2luZ1Nsb3QpID0+IHtcbiAgICAgICAgY29uc3QgZGl2TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHNsb3ROdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGNvbnN0IHNsb3RDYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBzbG90UmVnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgXG4gICAgICAgIGRpdk1haW4uY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdFwiKTtcbiAgICAgICAgZGl2TWFpbi5jbGFzc0xpc3QuYWRkKGBwYXJraW5nLXNsb3QtLSR7c2xvdC5zbG90X25vfWApO1xuICBcbiAgICAgICAgZGl2TWFpbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzbG90LmNhcl9jb2xvciEudG9TdHJpbmcoKTtcbiAgICAgICAgc2xvdE51bS5jbGFzc0xpc3QuYWRkKFwicGFya2luZy1zbG90X19udW1iZXJcIik7XG4gICAgICAgIHNsb3ROdW0udGV4dENvbnRlbnQgPSBzbG90LnNsb3Rfbm8udG9TdHJpbmcoKTtcbiAgXG4gICAgICAgIHNsb3RDYXIuY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdF9fY2FyXCIpO1xuICAgICAgICBzbG90Q2FyLnRleHRDb250ZW50ID0gYFRpY2tldCMgOiAke3Nsb3QudGlja2V0X25vIHx8IFwiXCJ9YFxuICAgICAgICBzbG90UmVnLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX3JlZy1udW1iZXJcIik7XG4gICAgICAgIHNsb3RSZWcudGV4dENvbnRlbnQgPSBgQ2FyLVJlZyMgOiAke3Nsb3QuY2FyX3JlZ19ubyB8fCBcIlwifWA7XG4gIFxuICAgICAgICBkaXZNYWluLmFwcGVuZENoaWxkKHNsb3ROdW0pXG4gICAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdENhcilcbiAgICAgICAgZGl2TWFpbi5hcHBlbmRDaGlsZChzbG90UmVnKVxuICAgICAgICByZXR1cm4gZGl2TWFpblxuICAgICAgfSkpXG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgUGFya2luZ1Nsb3RzU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvUGFya2luZ1Nsb3RzXCI7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJzRm9ybSB7XG4gICAgZm9ybTpIVE1MRm9ybUVsZW1lbnQ7XG4gICAgdGlja2V0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICByZWdOb0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHJlc2V0OiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1fZmlsdGVyc1wiKSEgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLnN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy50aWNrZXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGlja2V0X2ZpbHRlclwiKSEgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgdGhpcy5jb2xvcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2xvcl9maWx0ZXJcIikhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHRoaXMucmVnTm9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnLW5vX2ZpbHRlclwiKSEgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgdGhpcy5yZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsdGVyX3Jlc2V0XCIpISBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgdGhpcy5yZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yZXNldEhhbmRsZXIuYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICBzdWJtaXRIYW5kbGVyKGU6U3VibWl0RXZlbnQpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFBhcmtpbmdTbG90c1N0YXRlLmZpbHRlclBhcmtpbmdTbG90cyh0aGlzLmNvbG9ySW5wdXQudmFsdWUsIHRoaXMudGlja2V0SW5wdXQudmFsdWUsIHRoaXMucmVnTm9JbnB1dC52YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmVzZXRIYW5kbGVyKCl7XG4gICAgICAgIHRoaXMuY29sb3JJbnB1dC52YWx1ZSA9IFwiXCJcbiAgICAgICAgdGhpcy5yZWdOb0lucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICB0aGlzLnRpY2tldElucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICBQYXJraW5nU2xvdHNTdGF0ZS5maWx0ZXJQYXJraW5nU2xvdHModGhpcy5jb2xvcklucHV0LnZhbHVlLCB0aGlzLnRpY2tldElucHV0LnZhbHVlLCB0aGlzLnJlZ05vSW5wdXQudmFsdWUsIHRydWUpXG4gICAgfVxufSIsImltcG9ydCB7IHNsb3RfY29tcG9uZW50IH0gZnJvbSBcIi4uL2FwcFwiO1xuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uL21vZGVscy9DYXJcIjtcbmltcG9ydCB7IENhcnNTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9DYXJzXCI7XG5pbXBvcnQgeyBQYXJraW5nU2xvdHNTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9QYXJraW5nU2xvdHNcIjtcbmltcG9ydCB7IFRpY2tldHNTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9UaWNrZXRzXCI7XG5cbmV4cG9ydCBjbGFzcyBGb3Jte1xuICAgIGZvcm06IEhUTUxGb3JtRWxlbWVudDtcbiAgICBjb2xvcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHJlZ05vSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY3JlYXRlVGl4QnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1fY3JlYXRlXCIpISBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuc3VibWl0SGFuZGxlci5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLmNyZWF0ZVRpeEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybV9fc3VibWl0X2J1dHRvblwiKSEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY3JlYXRlQnRuQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5jb2xvcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2xvclwiKSEgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgdGhpcy5yZWdOb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWctbm9cIikhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY3JlYXRlQnRuQWN0aXZlKGlzQWN0aXZlOmJvb2xlYW4pe1xuICAgICAgICBpZihpc0FjdGl2ZSl7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRpeEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGl4QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdEhhbmRsZXIoZTogU3VibWl0RXZlbnQpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgY2FyOkNhciA9IENhcnNTdGF0ZS5hZGRDYXIodGhpcy5jb2xvcklucHV0LnZhbHVlLCB0aGlzLnJlZ05vSW5wdXQudmFsdWUpXG4gICAgICAgIGNvbnN0IHNsb3QgPSBQYXJraW5nU2xvdHNTdGF0ZS5nZXRBdmFpbGFibGVTbG90KClcbiAgICAgICAgaWYoc2xvdCl7XG4gICAgICAgICAgICBjb25zdCB0aWNrZXQgPSBUaWNrZXRzU3RhdGUuYWRkVGlja2V0KHNsb3Quc2xvdF9uby50b1N0cmluZygpLCBjYXIucmVnX25vKVxuICAgICAgICAgICAgY29uc3QgdXBTbG90ID0gc2xvdF9jb21wb25lbnQucGFyayhzbG90LnNsb3Rfbm8udG9TdHJpbmcoKSwgY2FyLmNvbG9yLCBjYXIucmVnX25vLCB0aWNrZXQudGlja2V0X251bWJlcilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwU2xvdClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhbGVydChcIk5vIFNsb3RzIEF2YWlsYWJsZVwiKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3JJbnB1dC52YWx1ZSA9IFwiXCJcbiAgICAgICAgdGhpcy5yZWdOb0lucHV0LnZhbHVlID0gXCJcIlxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgUGFya2luZ1Nsb3RzU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvUGFya2luZ1Nsb3RzXCI7XG5cbmV4cG9ydCBjbGFzcyBOb1Nsb3Qge1xuICBwYXJraW5nU2xvdHM6IEhUTUxEaXZFbGVtZW50O1xuICBtZXNzYWdlOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBOb1Nsb3Q7XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBOb1Nsb3QoKTtcbiAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJraW5nU2xvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIucGFya2luZy1zbG90c1wiXG4gICAgKSEgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICB0aGlzLm1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RzX19tZXNzYWdlXCIpO1xuICAgIGlmICghUGFya2luZ1Nsb3RzU3RhdGUudG90YWxfc2xvdHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlbmRlck1lc3NhZ2UoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJNZXNzYWdlKCkge1xuICAgIGlmKFBhcmtpbmdTbG90c1N0YXRlLmlzRmlsdGVyKXtcbiAgICAgIGlmICghUGFya2luZ1Nsb3RzU3RhdGUuZmlsdGVyZWRfc2xvdHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZS50ZXh0Q29udGVudCA9IFwiTm8gbWF0Y2hpbmcgcmVzdWx0cyEgdHJ5IGRpZmZlcmVudCBmaWx0ZXJzXCI7XG4gICAgICAgIHRoaXMucGFya2luZ1Nsb3RzLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubWVzc2FnZS5yZW1vdmUoKVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgaWYgKCFQYXJraW5nU2xvdHNTdGF0ZS50b3RhbF9zbG90cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlLnRleHRDb250ZW50ID0gXCJObyBTbG90cywgcGxlYXNlIGNyZWF0ZSBtb3JlIHBhcmtpbmctc2xvdHMhXCI7XG4gICAgICAgIHRoaXMucGFya2luZ1Nsb3RzLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubWVzc2FnZS5yZW1vdmUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENhciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbG9yOnN0cmluZywgcHVibGljIHJlZ19ubzpzdHJpbmcpe31cbn0iLCJleHBvcnQgY2xhc3MgUGFya2luZ1Nsb3Qge1xuICAgIGNhcl9yZWdfbm86IG51bGx8c3RyaW5nID0gbnVsbDtcbiAgICBpc0ZyZWU6Ym9vbGVhbj10cnVlO1xuICAgIGNhcl9jb2xvcjogbnVsbHxzdHJpbmcgPSBudWxsO1xuICAgIHRpY2tldF9ubzogbnVsbHxzdHJpbmcgPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzbG90X25vOm51bWJlcil7fVxufSIsImV4cG9ydCBjbGFzcyBUaWNrZXQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgc2xvdF9udW1iZXI6c3RyaW5nLFxuICAgICAgICBwdWJsaWMgdGlja2V0X251bWJlcjpzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBjYXJfcmVnX251bWJlcjpzdHJpbmdcbiAgICAgICAgKXt9XG59IiwiaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uL21vZGVscy9DYXJcIjtcblxuY2xhc3MgQ2FycyB7XG4gICAgY2FyczpDYXJbXT1bXTtcbiAgICBjYXJzX2NvbG9yc19vcHRpb25zOiBzdHJpbmdbXSA9IFtdXG4gICAgY2Fyc19yZWdfb3B0aW9uczogc3RyaW5nW10gPSBbXVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBDYXJzO1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCl7XG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBDYXJzKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZENhcihjb2xvcjpzdHJpbmcsIHJlZ19ubzpzdHJpbmcpe1xuICAgICAgICBjb25zdCBjYXIgPSB0aGlzLmNhcnMuZmluZChjYXIgPT4gY2FyLnJlZ19ubyA9PT0gcmVnX25vKVxuICAgICAgICBpZihjYXIpe1xuICAgICAgICAgICAgcmV0dXJuIGNhcjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmNhcnMucHVzaChuZXcgQ2FyKGNvbG9yLCByZWdfbm8pKVxuICAgICAgICAgICAgaWYoIXRoaXMuY2Fyc19jb2xvcnNfb3B0aW9ucy5pbmNsdWRlcyhjb2xvcikpIHRoaXMuY2Fyc19jb2xvcnNfb3B0aW9ucy5wdXNoKGNvbG9yKVxuICAgICAgICAgICAgaWYoIXRoaXMuY2Fyc19yZWdfb3B0aW9ucy5pbmNsdWRlcyhyZWdfbm8pKSB0aGlzLmNhcnNfcmVnX29wdGlvbnMucHVzaChyZWdfbm8pIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2Fyc1t0aGlzLmNhcnMubGVuZ3RoIC0gMV1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IENhcnNTdGF0ZSA9IENhcnMuZ2V0SW5zdGFuY2UoKSIsImltcG9ydCB7IGZvcm1FbGVtZW50LCBub19zbG90X3JlbmRlciwgc2xvdF9jb21wb25lbnQgfSBmcm9tIFwiLi4vYXBwXCI7XG5pbXBvcnQgeyBQYXJraW5nU2xvdCB9IGZyb20gXCIuLi9tb2RlbHMvUGFya2luZ1Nsb3RcIjtcblxuY2xhc3MgUGFya2luZ1Nsb3RzIHtcbiAgICB0b3RhbF9zbG90czogUGFya2luZ1Nsb3RbXSA9IFtdO1xuICAgIGZpbHRlcmVkX3Nsb3RzOiBQYXJraW5nU2xvdFtdID0gW11cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFBhcmtpbmdTbG90cztcbiAgICBpc0ZpbHRlcjpib29sZWFuID0gZmFsc2U7XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKXtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFBhcmtpbmdTbG90cygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVTbG90KCl7XG4gICAgICAgIHRoaXMudG90YWxfc2xvdHMucHVzaChuZXcgUGFya2luZ1Nsb3QodGhpcy50b3RhbF9zbG90cy5sZW5ndGggKyAxKSlcbiAgICAgICAgc2xvdF9jb21wb25lbnQucmVuZGVyU2xvdCh0aGlzLnRvdGFsX3Nsb3RzW3RoaXMudG90YWxfc2xvdHMubGVuZ3RoIC0gMV0pXG4gICAgICAgIG5vX3Nsb3RfcmVuZGVyLnJlbmRlck1lc3NhZ2UoKVxuICAgICAgICB0aGlzLnVwZGF0ZUNyZWF0ZVRpY2tldFN0YXRlKClcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxfc2xvdHNbdGhpcy50b3RhbF9zbG90cy5sZW5ndGggLSAxXVxuICAgIH1cblxuICAgIGdldEF2YWlsYWJsZVNsb3QoKXtcbiAgICAgICAgY29uc3QgYXZhaWxTbG90ID0gdGhpcy50b3RhbF9zbG90cy5maW5kKHNsb3QgPT4gc2xvdC5pc0ZyZWUpXG4gICAgICAgIHJldHVybiBhdmFpbFNsb3Q7XG4gICAgfVxuXG4gICAgdXBkYXRlQ3JlYXRlVGlja2V0U3RhdGUoKXtcbiAgICAgICAgY29uc3QgYXZhaWxTbG90ID0gdGhpcy50b3RhbF9zbG90cy5maW5kKHNsb3QgPT4gc2xvdC5pc0ZyZWUpXG4gICAgICAgIGlmKGF2YWlsU2xvdCl7XG4gICAgICAgICAgICBmb3JtRWxlbWVudC5jcmVhdGVCdG5BY3RpdmUodHJ1ZSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBmb3JtRWxlbWVudC5jcmVhdGVCdG5BY3RpdmUoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaWx0ZXJQYXJraW5nU2xvdHMoY29sb3I6c3RyaW5nPVwiXCIsIHRpY2tldF9ubzogc3RyaW5nID0gXCJcIixyZWdfbm86c3RyaW5nPVwiXCIsIGlzUmVzZXQ6Ym9vbGVhbil7XG4gICAgICAgIGlmKGlzUmVzZXQpe1xuICAgICAgICAgICAgdGhpcy5pc0ZpbHRlciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZF9zbG90cyA9IFsuLi50aGlzLnRvdGFsX3Nsb3RzXTtcbiAgICAgICAgICAgIGZvcm1FbGVtZW50LmNyZWF0ZUJ0bkFjdGl2ZSh0cnVlKVxuICAgICAgICAgICAgc2xvdF9jb21wb25lbnQuY3JlYXRlU2xvdEJ1dHRvbkFjdGl2ZSh0cnVlKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaXNGaWx0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZF9zbG90cyA9IHRoaXMudG90YWxfc2xvdHMuZmlsdGVyKChzbG90OlBhcmtpbmdTbG90KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoc2xvdC5jYXJfY29sb3IgPT09IGNvbG9yIHx8IHNsb3QudGlja2V0X25vID09PSB0aWNrZXRfbm8gfHwgc2xvdC5jYXJfcmVnX25vID09PSByZWdfbm8pIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGZvcm1FbGVtZW50LmNyZWF0ZUJ0bkFjdGl2ZShmYWxzZSlcbiAgICAgICAgICAgIHNsb3RfY29tcG9uZW50LmNyZWF0ZVNsb3RCdXR0b25BY3RpdmUoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgc2xvdF9jb21wb25lbnQucmVuZGVyRmlsdGVyZWRTbG90cyhpc1Jlc2V0KVxuICAgICAgICBub19zbG90X3JlbmRlci5yZW5kZXJNZXNzYWdlKClcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBQYXJraW5nU2xvdHNTdGF0ZSA9IFBhcmtpbmdTbG90cy5nZXRJbnN0YW5jZSgpIiwiaW1wb3J0IHsgVGlja2V0IH0gZnJvbSBcIi4uL21vZGVscy9UaWNrZXRcIjtcblxuY2xhc3MgVGlja2V0cyB7XG4gICAgdGlja2V0czpUaWNrZXRbXT1bXVxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVGlja2V0cztcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKXtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFRpY2tldHMoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICAgICAgICB9XG4gICAgfVxuICAgIGFkZFRpY2tldChzbG90X25vOnN0cmluZywgY2FyX3JlZ19ubzpzdHJpbmcpe1xuICAgICAgICB0aGlzLnRpY2tldHMucHVzaChuZXcgVGlja2V0KHNsb3Rfbm8sICh0aGlzLnRpY2tldHMubGVuZ3RoICsgMSkudG9TdHJpbmcoKSwgY2FyX3JlZ19ubykpXG4gICAgICAgIHJldHVybiB0aGlzLnRpY2tldHNbdGhpcy50aWNrZXRzLmxlbmd0aCAtIDFdXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgVGlja2V0c1N0YXRlID0gVGlja2V0cy5nZXRJbnN0YW5jZSgpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=