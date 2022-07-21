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
/* harmony export */   "no_slot_render": () => (/* binding */ no_slot_render),
/* harmony export */   "slot_component": () => (/* binding */ slot_component)
/* harmony export */ });
/* harmony import */ var _components_CreateSlot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CreateSlot */ "./src/components/CreateSlot.ts");
/* harmony import */ var _components_Filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Filters */ "./src/components/Filters.ts");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Form */ "./src/components/Form.ts");
/* harmony import */ var _components_NoSlot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NoSlot */ "./src/components/NoSlot.ts");




const no_slot_render = _components_NoSlot__WEBPACK_IMPORTED_MODULE_3__.NoSlot.getInstance();
const slot_component = _components_CreateSlot__WEBPACK_IMPORTED_MODULE_0__.CreateSlot.getInstance();
new _components_Form__WEBPACK_IMPORTED_MODULE_2__.Form();
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
        this.colorInput = document.querySelector("#color");
        this.regNoInput = document.querySelector("#reg-no");
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
        return this.total_slots[this.total_slots.length - 1];
    }
    getAvailableSlot() {
        const availSlot = this.total_slots.find(slot => slot.isFree);
        return availSlot;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLEVBQUU7Ozs7Ozs7VUNuQmpEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvY29tcG9uZW50cy9DcmVhdGVTbG90LnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlcnMudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL2NvbXBvbmVudHMvRm9ybS50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvY29tcG9uZW50cy9Ob1Nsb3QudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL21vZGVscy9DYXIudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL21vZGVscy9QYXJraW5nU2xvdC50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvbW9kZWxzL1RpY2tldC50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvc3RhdGUvQ2Fycy50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvc3RhdGUvUGFya2luZ1Nsb3RzLnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9zdGF0ZS9UaWNrZXRzLnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDcmVhdGVTbG90IH0gZnJvbSBcIi4vY29tcG9uZW50cy9DcmVhdGVTbG90XCI7XG5pbXBvcnQgeyBGaWx0ZXJzRm9ybSB9IGZyb20gXCIuL2NvbXBvbmVudHMvRmlsdGVyc1wiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuL2NvbXBvbmVudHMvRm9ybVwiO1xuaW1wb3J0IHsgTm9TbG90IH0gZnJvbSBcIi4vY29tcG9uZW50cy9Ob1Nsb3RcIjtcblxuZXhwb3J0IGNvbnN0IG5vX3Nsb3RfcmVuZGVyID0gTm9TbG90LmdldEluc3RhbmNlKClcbmV4cG9ydCBjb25zdCBzbG90X2NvbXBvbmVudCA9IENyZWF0ZVNsb3QuZ2V0SW5zdGFuY2UoKTtcbm5ldyBGb3JtKClcbm5ldyBGaWx0ZXJzRm9ybSgpIiwiaW1wb3J0IHsgUGFya2luZ1Nsb3QgfSBmcm9tIFwiLi4vbW9kZWxzL1BhcmtpbmdTbG90XCI7XG5pbXBvcnQgeyBQYXJraW5nU2xvdHNTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9QYXJraW5nU2xvdHNcIjtcblxuZXhwb3J0IGNsYXNzIENyZWF0ZVNsb3Qge1xuICBjcmVhdGVCdG46IEhUTUxEaXZFbGVtZW50O1xuICBwYXJraW5nU2xvdHM6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IENyZWF0ZVNsb3Q7XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBDcmVhdGVTbG90KCk7XG4gICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JlYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLnBhcmtpbmctc2xvdHNfX2NyZWF0ZVwiXG4gICAgKSEgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgdGhpcy5jcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIFBhcmtpbmdTbG90c1N0YXRlLmNyZWF0ZVNsb3QuYmluZChQYXJraW5nU2xvdHNTdGF0ZSlcbiAgICApO1xuXG4gICAgdGhpcy5wYXJraW5nU2xvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIucGFya2luZy1zbG90c1wiXG4gICAgKSEgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIH1cblxuICByZW5kZXJTbG90KHNsb3Q6IFBhcmtpbmdTbG90KSB7XG4gICAgaWYgKHRoaXMucGFya2luZ1Nsb3RzKSB7XG4gICAgICBjb25zdCBkaXZNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHNsb3ROdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICBjb25zdCBzbG90Q2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHNsb3RSZWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBkaXZNYWluLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RcIik7XG4gICAgICBkaXZNYWluLmNsYXNzTGlzdC5hZGQoYHBhcmtpbmctc2xvdC0tJHtzbG90LnNsb3Rfbm99YCk7XG5cbiAgICAgIHNsb3ROdW0uY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdF9fbnVtYmVyXCIpO1xuICAgICAgc2xvdE51bS50ZXh0Q29udGVudCA9IHNsb3Quc2xvdF9uby50b1N0cmluZygpO1xuXG4gICAgICBzbG90Q2FyLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX2NhclwiKTtcbiAgICAgIHNsb3RDYXIudGV4dENvbnRlbnQgPSBzbG90LnRpY2tldF9ubyB8fCBcIlwiO1xuICAgICAgc2xvdFJlZy5jbGFzc0xpc3QuYWRkKFwicGFya2luZy1zbG90X19yZWctbnVtYmVyXCIpO1xuICAgICAgc2xvdFJlZy50ZXh0Q29udGVudCA9IHNsb3QuY2FyX3JlZ19ubyB8fCBcIlwiO1xuXG4gICAgICBkaXZNYWluLmFwcGVuZENoaWxkKHNsb3ROdW0pXG4gICAgICBkaXZNYWluLmFwcGVuZENoaWxkKHNsb3RDYXIpXG4gICAgICBkaXZNYWluLmFwcGVuZENoaWxkKHNsb3RSZWcpXG5cbiAgICAgIHRoaXMucGFya2luZ1Nsb3RzLmFwcGVuZENoaWxkKGRpdk1haW4pXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU2xvdChzbG90OlBhcmtpbmdTbG90KXtcbiAgICBjb25zdCBQYXJrc2xvdDogSFRNTERpdkVsZW1lbnQgPSB0aGlzLnBhcmtpbmdTbG90cy5xdWVyeVNlbGVjdG9yKGAucGFya2luZy1zbG90LS0ke3Nsb3Quc2xvdF9ub31gKSEgYXMgSFRNTERpdkVsZW1lbnRcblxuICAgIFBhcmtzbG90LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNsb3QuY2FyX2NvbG9yIS50b1N0cmluZygpO1xuICAgIGNvbnN0IHNsb3RfY2FyOiBIVE1MRGl2RWxlbWVudCA9IFBhcmtzbG90LnF1ZXJ5U2VsZWN0b3IoXCIucGFya2luZy1zbG90X19jYXJcIikhIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgaWYoc2xvdF9jYXIpIHNsb3RfY2FyLnRleHRDb250ZW50ID0gc2xvdC50aWNrZXRfbm9cblxuICAgIGNvbnN0IHNsb3RfcmVnX25vOiBIVE1MRGl2RWxlbWVudCA9IFBhcmtzbG90LnF1ZXJ5U2VsZWN0b3IoXCIucGFya2luZy1zbG90X19yZWctbnVtYmVyXCIpISBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICBpZihzbG90X3JlZ19ubykgc2xvdF9yZWdfbm8udGV4dENvbnRlbnQgPSBzbG90LmNhcl9yZWdfbm9cbiAgfVxuXG4gIHBhcmsoc2xvdF9ubzpzdHJpbmcsIGNhcl9jb2xvcjogc3RyaW5nLCBjYXJfcmVnX25vOiBzdHJpbmcsIHRpY2tldDpzdHJpbmcpe1xuICAgIGNvbnN0IHNsb3QgPSBQYXJraW5nU2xvdHNTdGF0ZS50b3RhbF9zbG90cy5maW5kKGl0ZW0gPT4gaXRlbS5zbG90X25vLnRvU3RyaW5nKCkgPT09IHNsb3Rfbm8pIVxuXG4gICAgc2xvdC5pc0ZyZWUgPSBmYWxzZTtcbiAgICBzbG90LmNhcl9jb2xvcj0gY2FyX2NvbG9yO1xuICAgIHNsb3QuY2FyX3JlZ19ubyA9IGNhcl9yZWdfbm87XG4gICAgc2xvdC50aWNrZXRfbm8gPSB0aWNrZXRcbiAgICBcbiAgICB0aGlzLnVwZGF0ZVNsb3Qoc2xvdClcbiAgICByZXR1cm4gc2xvdDtcbiAgfVxuXG4gIHJlbmRlckZpbHRlcmVkU2xvdHMoaXNSZXNldDpib29sZWFuKXtcbiAgICBpZihpc1Jlc2V0KXtcbiAgICAgIHRoaXMucGFya2luZ1Nsb3RzLnJlcGxhY2VDaGlsZHJlbiguLi5QYXJraW5nU2xvdHNTdGF0ZS50b3RhbF9zbG90cy5tYXAoKHNsb3Q6IFBhcmtpbmdTbG90KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBzbG90TnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBjb25zdCBzbG90Q2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3Qgc2xvdFJlZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFxuICAgICAgICBkaXZNYWluLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RcIik7XG4gICAgICAgIGRpdk1haW4uY2xhc3NMaXN0LmFkZChgcGFya2luZy1zbG90LS0ke3Nsb3Quc2xvdF9ub31gKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHNsb3QuY2FyX2NvbG9yKXtcbiAgICAgICAgICBkaXZNYWluLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNsb3QuY2FyX2NvbG9yLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgICBzbG90TnVtLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX251bWJlclwiKTtcbiAgICAgICAgc2xvdE51bS50ZXh0Q29udGVudCA9IHNsb3Quc2xvdF9uby50b1N0cmluZygpO1xuICBcbiAgICAgICAgc2xvdENhci5jbGFzc0xpc3QuYWRkKFwicGFya2luZy1zbG90X19jYXJcIik7XG4gICAgICAgIHNsb3RDYXIudGV4dENvbnRlbnQgPSBzbG90LnRpY2tldF9ubyB8fCBcIlwiO1xuICAgICAgICBzbG90UmVnLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX3JlZy1udW1iZXJcIik7XG4gICAgICAgIHNsb3RSZWcudGV4dENvbnRlbnQgPSBzbG90LmNhcl9yZWdfbm8gfHwgXCJcIjtcbiAgXG4gICAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdE51bSlcbiAgICAgICAgZGl2TWFpbi5hcHBlbmRDaGlsZChzbG90Q2FyKVxuICAgICAgICBkaXZNYWluLmFwcGVuZENoaWxkKHNsb3RSZWcpXG4gICAgICAgIHJldHVybiBkaXZNYWluXG4gICAgICB9KSlcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMucGFya2luZ1Nsb3RzLnJlcGxhY2VDaGlsZHJlbiguLi5QYXJraW5nU2xvdHNTdGF0ZS5maWx0ZXJlZF9zbG90cy5tYXAoKHNsb3Q6IFBhcmtpbmdTbG90KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBzbG90TnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBjb25zdCBzbG90Q2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3Qgc2xvdFJlZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFxuICAgICAgICBkaXZNYWluLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RcIik7XG4gICAgICAgIGRpdk1haW4uY2xhc3NMaXN0LmFkZChgcGFya2luZy1zbG90LS0ke3Nsb3Quc2xvdF9ub31gKTtcbiAgXG4gICAgICAgIGRpdk1haW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2xvdC5jYXJfY29sb3IhLnRvU3RyaW5nKCk7XG4gICAgICAgIHNsb3ROdW0uY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdF9fbnVtYmVyXCIpO1xuICAgICAgICBzbG90TnVtLnRleHRDb250ZW50ID0gc2xvdC5zbG90X25vLnRvU3RyaW5nKCk7XG4gIFxuICAgICAgICBzbG90Q2FyLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX2NhclwiKTtcbiAgICAgICAgc2xvdENhci50ZXh0Q29udGVudCA9IHNsb3QudGlja2V0X25vIHx8IFwiXCI7XG4gICAgICAgIHNsb3RSZWcuY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdF9fcmVnLW51bWJlclwiKTtcbiAgICAgICAgc2xvdFJlZy50ZXh0Q29udGVudCA9IHNsb3QuY2FyX3JlZ19ubyB8fCBcIlwiO1xuICBcbiAgICAgICAgZGl2TWFpbi5hcHBlbmRDaGlsZChzbG90TnVtKVxuICAgICAgICBkaXZNYWluLmFwcGVuZENoaWxkKHNsb3RDYXIpXG4gICAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdFJlZylcbiAgICAgICAgcmV0dXJuIGRpdk1haW5cbiAgICAgIH0pKVxuICAgIH1cbiAgfVxufSIsImltcG9ydCB7IFBhcmtpbmdTbG90c1N0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1BhcmtpbmdTbG90c1wiO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyc0Zvcm0ge1xuICAgIGZvcm06SFRNTEZvcm1FbGVtZW50O1xuICAgIHRpY2tldElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcmVnTm9JbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICByZXNldDogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtX2ZpbHRlcnNcIikhIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5zdWJtaXRIYW5kbGVyLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMudGlja2V0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpY2tldF9maWx0ZXJcIikhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29sb3JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JfZmlsdGVyXCIpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICB0aGlzLnJlZ05vSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZy1ub19maWx0ZXJcIikhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHRoaXMucmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0LWJ0blwiKSEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIHRoaXMucmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucmVzZXRIYW5kbGVyLmJpbmQodGhpcykpXG4gICAgfVxuXG4gICAgc3VibWl0SGFuZGxlcihlOlN1Ym1pdEV2ZW50KXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBQYXJraW5nU2xvdHNTdGF0ZS5maWx0ZXJQYXJraW5nU2xvdHModGhpcy5jb2xvcklucHV0LnZhbHVlLCB0aGlzLnJlZ05vSW5wdXQudmFsdWUsIHRoaXMudGlja2V0SW5wdXQudmFsdWUsIGZhbHNlKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpbHRlcmVzXCIsUGFya2luZ1Nsb3RzU3RhdGUuZmlsdGVyZWRfc2xvdHMpXG4gICAgfVxuXG4gICAgcmVzZXRIYW5kbGVyKCl7XG4gICAgICAgIHRoaXMuY29sb3JJbnB1dC52YWx1ZSA9IFwiXCJcbiAgICAgICAgdGhpcy5yZWdOb0lucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICB0aGlzLnRpY2tldElucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICBQYXJraW5nU2xvdHNTdGF0ZS5maWx0ZXJQYXJraW5nU2xvdHModGhpcy5jb2xvcklucHV0LnZhbHVlLCB0aGlzLnJlZ05vSW5wdXQudmFsdWUsIHRoaXMudGlja2V0SW5wdXQudmFsdWUsIHRydWUpXG4gICAgfVxufSIsImltcG9ydCB7IHNsb3RfY29tcG9uZW50IH0gZnJvbSBcIi4uL2FwcFwiO1xuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uL21vZGVscy9DYXJcIjtcbmltcG9ydCB7IENhcnNTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9DYXJzXCI7XG5pbXBvcnQgeyBQYXJraW5nU2xvdHNTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9QYXJraW5nU2xvdHNcIjtcbmltcG9ydCB7IFRpY2tldHNTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9UaWNrZXRzXCI7XG5cbmV4cG9ydCBjbGFzcyBGb3Jte1xuICAgIGZvcm06IEhUTUxGb3JtRWxlbWVudDtcbiAgICBjb2xvcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHJlZ05vSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1fY3JlYXRlXCIpISBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuc3VibWl0SGFuZGxlci5iaW5kKHRoaXMpKVxuXG4gICAgICAgIHRoaXMuY29sb3JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JcIikhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHRoaXMucmVnTm9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnLW5vXCIpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIH1cblxuICAgIHN1Ym1pdEhhbmRsZXIoZTogU3VibWl0RXZlbnQpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgY2FyOkNhciA9IENhcnNTdGF0ZS5hZGRDYXIodGhpcy5jb2xvcklucHV0LnZhbHVlLCB0aGlzLnJlZ05vSW5wdXQudmFsdWUpXG4gICAgICAgIGNvbnN0IHNsb3QgPSBQYXJraW5nU2xvdHNTdGF0ZS5nZXRBdmFpbGFibGVTbG90KClcbiAgICAgICAgaWYoc2xvdCl7XG4gICAgICAgICAgICBjb25zdCB0aWNrZXQgPSBUaWNrZXRzU3RhdGUuYWRkVGlja2V0KHNsb3Quc2xvdF9uby50b1N0cmluZygpLCBjYXIucmVnX25vKVxuICAgICAgICAgICAgY29uc3QgdXBTbG90ID0gc2xvdF9jb21wb25lbnQucGFyayhzbG90LnNsb3Rfbm8udG9TdHJpbmcoKSwgY2FyLmNvbG9yLCBjYXIucmVnX25vLCB0aWNrZXQudGlja2V0X251bWJlcilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwU2xvdClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIFNsb3RzIEF2YWlsYWJsZVwiKVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBQYXJraW5nU2xvdHNTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9QYXJraW5nU2xvdHNcIjtcblxuZXhwb3J0IGNsYXNzIE5vU2xvdCB7XG4gIHBhcmtpbmdTbG90czogSFRNTERpdkVsZW1lbnQ7XG4gIG1lc3NhZ2U6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IE5vU2xvdDtcblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IE5vU2xvdCgpO1xuICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmtpbmdTbG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5wYXJraW5nLXNsb3RzXCJcbiAgICApISBhcyBIVE1MRGl2RWxlbWVudDtcblxuICAgIHRoaXMubWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdHNfX21lc3NhZ2VcIik7XG4gICAgdGhpcy5tZXNzYWdlLnRleHRDb250ZW50ID0gXCJObyBTbG90cywgcGxlYXNlIGNyZWF0ZSBzbG90c1wiO1xuICAgIGlmICghUGFya2luZ1Nsb3RzU3RhdGUudG90YWxfc2xvdHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlbmRlck1lc3NhZ2UoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJNZXNzYWdlKCkge1xuICAgIGlmICghUGFya2luZ1Nsb3RzU3RhdGUudG90YWxfc2xvdHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnBhcmtpbmdTbG90cy5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWVzc2FnZS5yZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENhciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbG9yOnN0cmluZywgcHVibGljIHJlZ19ubzpzdHJpbmcpe31cbn0iLCJleHBvcnQgY2xhc3MgUGFya2luZ1Nsb3Qge1xuICAgIGNhcl9yZWdfbm86IG51bGx8c3RyaW5nID0gbnVsbDtcbiAgICBpc0ZyZWU6Ym9vbGVhbj10cnVlO1xuICAgIGNhcl9jb2xvcjogbnVsbHxzdHJpbmcgPSBudWxsO1xuICAgIHRpY2tldF9ubzogbnVsbHxzdHJpbmcgPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzbG90X25vOm51bWJlcil7fVxufSIsImV4cG9ydCBjbGFzcyBUaWNrZXQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgc2xvdF9udW1iZXI6c3RyaW5nLFxuICAgICAgICBwdWJsaWMgdGlja2V0X251bWJlcjpzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBjYXJfcmVnX251bWJlcjpzdHJpbmdcbiAgICAgICAgKXt9XG59IiwiaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uL21vZGVscy9DYXJcIjtcblxuY2xhc3MgQ2FycyB7XG4gICAgY2FyczpDYXJbXT1bXTtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQ2FycztcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQ2FycygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDYXIoY29sb3I6c3RyaW5nLCByZWdfbm86c3RyaW5nKXtcbiAgICAgICAgY29uc3QgY2FyID0gdGhpcy5jYXJzLmZpbmQoY2FyID0+IGNhci5yZWdfbm8gPT09IHJlZ19ubylcbiAgICAgICAgaWYoY2FyKXtcbiAgICAgICAgICAgIHJldHVybiBjYXI7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5jYXJzLnB1c2gobmV3IENhcihjb2xvciwgcmVnX25vKSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhcnNbdGhpcy5jYXJzLmxlbmd0aCAtIDFdXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBDYXJzU3RhdGUgPSBDYXJzLmdldEluc3RhbmNlKCkiLCJpbXBvcnQgeyBub19zbG90X3JlbmRlciwgc2xvdF9jb21wb25lbnQgfSBmcm9tIFwiLi4vYXBwXCI7XG5pbXBvcnQgeyBQYXJraW5nU2xvdCB9IGZyb20gXCIuLi9tb2RlbHMvUGFya2luZ1Nsb3RcIjtcblxuY2xhc3MgUGFya2luZ1Nsb3RzIHtcbiAgICB0b3RhbF9zbG90czogUGFya2luZ1Nsb3RbXSA9IFtdO1xuICAgIGZpbHRlcmVkX3Nsb3RzOiBQYXJraW5nU2xvdFtdID0gW11cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFBhcmtpbmdTbG90cztcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgUGFya2luZ1Nsb3RzKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZVNsb3QoKXtcbiAgICAgICAgdGhpcy50b3RhbF9zbG90cy5wdXNoKG5ldyBQYXJraW5nU2xvdCh0aGlzLnRvdGFsX3Nsb3RzLmxlbmd0aCArIDEpKVxuICAgICAgICBzbG90X2NvbXBvbmVudC5yZW5kZXJTbG90KHRoaXMudG90YWxfc2xvdHNbdGhpcy50b3RhbF9zbG90cy5sZW5ndGggLSAxXSlcbiAgICAgICAgbm9fc2xvdF9yZW5kZXIucmVuZGVyTWVzc2FnZSgpXG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsX3Nsb3RzW3RoaXMudG90YWxfc2xvdHMubGVuZ3RoIC0gMV1cbiAgICB9XG5cbiAgICBnZXRBdmFpbGFibGVTbG90KCl7XG4gICAgICAgIGNvbnN0IGF2YWlsU2xvdCA9IHRoaXMudG90YWxfc2xvdHMuZmluZChzbG90ID0+IHNsb3QuaXNGcmVlKVxuICAgICAgICByZXR1cm4gYXZhaWxTbG90O1xuICAgIH1cblxuXG4gICAgZmlsdGVyUGFya2luZ1Nsb3RzKGNvbG9yOnN0cmluZz1cIlwiLCB0aWNrZXRfbm86IHN0cmluZyA9IFwiXCIscmVnX25vOnN0cmluZz1cIlwiLCBpc1Jlc2V0OmJvb2xlYW4pe1xuICAgICAgICBpZihpc1Jlc2V0KXtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRfc2xvdHMgPSBbLi4udGhpcy50b3RhbF9zbG90c107IFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRfc2xvdHMgPSB0aGlzLnRvdGFsX3Nsb3RzLmZpbHRlcigoc2xvdDpQYXJraW5nU2xvdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHNsb3QuY2FyX2NvbG9yID09PSBjb2xvciB8fCBzbG90LnRpY2tldF9ubyA9PT0gdGlja2V0X25vIHx8IHNsb3QuY2FyX3JlZ19ubyA9PT0gcmVnX25vKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgc2xvdF9jb21wb25lbnQucmVuZGVyRmlsdGVyZWRTbG90cyhpc1Jlc2V0KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFBhcmtpbmdTbG90c1N0YXRlID0gUGFya2luZ1Nsb3RzLmdldEluc3RhbmNlKCkiLCJpbXBvcnQgeyBUaWNrZXQgfSBmcm9tIFwiLi4vbW9kZWxzL1RpY2tldFwiO1xuXG5jbGFzcyBUaWNrZXRzIHtcbiAgICB0aWNrZXRzOlRpY2tldFtdPVtdXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBUaWNrZXRzO1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVGlja2V0cygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICAgIH1cbiAgICB9XG4gICAgYWRkVGlja2V0KHNsb3Rfbm86c3RyaW5nLCBjYXJfcmVnX25vOnN0cmluZyl7XG4gICAgICAgIHRoaXMudGlja2V0cy5wdXNoKG5ldyBUaWNrZXQoc2xvdF9ubywgKHRoaXMudGlja2V0cy5sZW5ndGggKyAxKS50b1N0cmluZygpLCBjYXJfcmVnX25vKSlcbiAgICAgICAgcmV0dXJuIHRoaXMudGlja2V0c1t0aGlzLnRpY2tldHMubGVuZ3RoIC0gMV1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBUaWNrZXRzU3RhdGUgPSBUaWNrZXRzLmdldEluc3RhbmNlKCkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==