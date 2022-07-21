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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL2NvbXBvbmVudHMvQ3JlYXRlU2xvdC50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJzLnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9jb21wb25lbnRzL0Zvcm0udHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL2NvbXBvbmVudHMvTm9TbG90LnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9tb2RlbHMvQ2FyLnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9tb2RlbHMvUGFya2luZ1Nsb3QudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL21vZGVscy9UaWNrZXQudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL3N0YXRlL0NhcnMudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL3N0YXRlL1BhcmtpbmdTbG90cy50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvc3RhdGUvVGlja2V0cy50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3JlYXRlU2xvdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvQ3JlYXRlU2xvdFwiO1xuaW1wb3J0IHsgRmlsdGVyc0Zvcm0gfSBmcm9tIFwiLi9jb21wb25lbnRzL0ZpbHRlcnNcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi9jb21wb25lbnRzL0Zvcm1cIjtcbmltcG9ydCB7IE5vU2xvdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvTm9TbG90XCI7XG5cbmV4cG9ydCBjb25zdCBub19zbG90X3JlbmRlciA9IE5vU2xvdC5nZXRJbnN0YW5jZSgpXG5leHBvcnQgY29uc3Qgc2xvdF9jb21wb25lbnQgPSBDcmVhdGVTbG90LmdldEluc3RhbmNlKCk7XG5leHBvcnQgY29uc3QgZm9ybUVsZW1lbnQgPSBuZXcgRm9ybSgpXG5uZXcgRmlsdGVyc0Zvcm0oKSIsImltcG9ydCB7IFBhcmtpbmdTbG90IH0gZnJvbSBcIi4uL21vZGVscy9QYXJraW5nU2xvdFwiO1xuaW1wb3J0IHsgUGFya2luZ1Nsb3RzU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvUGFya2luZ1Nsb3RzXCI7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVTbG90IHtcbiAgY3JlYXRlQnRuOiBIVE1MRGl2RWxlbWVudDtcbiAgcGFya2luZ1Nsb3RzOiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBDcmVhdGVTbG90O1xuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQ3JlYXRlU2xvdCgpO1xuICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNyZWF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5wYXJraW5nLXNsb3RzX19jcmVhdGVcIlxuICAgICkhIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIHRoaXMuY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBQYXJraW5nU2xvdHNTdGF0ZS5jcmVhdGVTbG90LmJpbmQoUGFya2luZ1Nsb3RzU3RhdGUpXG4gICAgKTtcblxuICAgIHRoaXMucGFya2luZ1Nsb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLnBhcmtpbmctc2xvdHNcIlxuICAgICkhIGFzIEhUTUxEaXZFbGVtZW50O1xuICB9XG5cbiAgcmVuZGVyU2xvdChzbG90OiBQYXJraW5nU2xvdCkge1xuICAgIGlmICh0aGlzLnBhcmtpbmdTbG90cykge1xuICAgICAgY29uc3QgZGl2TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBzbG90TnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgY29uc3Qgc2xvdENhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBzbG90UmVnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgZGl2TWFpbi5jbGFzc0xpc3QuYWRkKFwicGFya2luZy1zbG90XCIpO1xuICAgICAgZGl2TWFpbi5jbGFzc0xpc3QuYWRkKGBwYXJraW5nLXNsb3QtLSR7c2xvdC5zbG90X25vfWApO1xuXG4gICAgICBzbG90TnVtLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX251bWJlclwiKTtcbiAgICAgIHNsb3ROdW0udGV4dENvbnRlbnQgPSBzbG90LnNsb3Rfbm8udG9TdHJpbmcoKTtcblxuICAgICAgc2xvdENhci5jbGFzc0xpc3QuYWRkKFwicGFya2luZy1zbG90X19jYXJcIik7XG4gICAgICBzbG90Q2FyLnRleHRDb250ZW50ID0gc2xvdC50aWNrZXRfbm8gfHwgXCJcIjtcbiAgICAgIHNsb3RSZWcuY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdF9fcmVnLW51bWJlclwiKTtcbiAgICAgIHNsb3RSZWcudGV4dENvbnRlbnQgPSBzbG90LmNhcl9yZWdfbm8gfHwgXCJcIjtcblxuICAgICAgZGl2TWFpbi5hcHBlbmRDaGlsZChzbG90TnVtKVxuICAgICAgZGl2TWFpbi5hcHBlbmRDaGlsZChzbG90Q2FyKVxuICAgICAgZGl2TWFpbi5hcHBlbmRDaGlsZChzbG90UmVnKVxuXG4gICAgICB0aGlzLnBhcmtpbmdTbG90cy5hcHBlbmRDaGlsZChkaXZNYWluKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVNsb3Qoc2xvdDpQYXJraW5nU2xvdCl7XG4gICAgY29uc3QgUGFya3Nsb3Q6IEhUTUxEaXZFbGVtZW50ID0gdGhpcy5wYXJraW5nU2xvdHMucXVlcnlTZWxlY3RvcihgLnBhcmtpbmctc2xvdC0tJHtzbG90LnNsb3Rfbm99YCkhIGFzIEhUTUxEaXZFbGVtZW50XG5cbiAgICBQYXJrc2xvdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzbG90LmNhcl9jb2xvciEudG9TdHJpbmcoKTtcbiAgICBjb25zdCBzbG90X2NhcjogSFRNTERpdkVsZW1lbnQgPSBQYXJrc2xvdC5xdWVyeVNlbGVjdG9yKFwiLnBhcmtpbmctc2xvdF9fY2FyXCIpISBhcyBIVE1MRGl2RWxlbWVudFxuICAgIGlmKHNsb3RfY2FyKSBzbG90X2Nhci50ZXh0Q29udGVudCA9IHNsb3QudGlja2V0X25vXG5cbiAgICBjb25zdCBzbG90X3JlZ19ubzogSFRNTERpdkVsZW1lbnQgPSBQYXJrc2xvdC5xdWVyeVNlbGVjdG9yKFwiLnBhcmtpbmctc2xvdF9fcmVnLW51bWJlclwiKSEgYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgICAgaWYoc2xvdF9yZWdfbm8pIHNsb3RfcmVnX25vLnRleHRDb250ZW50ID0gc2xvdC5jYXJfcmVnX25vXG4gIH1cblxuICBwYXJrKHNsb3Rfbm86c3RyaW5nLCBjYXJfY29sb3I6IHN0cmluZywgY2FyX3JlZ19ubzogc3RyaW5nLCB0aWNrZXQ6c3RyaW5nKXtcbiAgICBjb25zdCBzbG90ID0gUGFya2luZ1Nsb3RzU3RhdGUudG90YWxfc2xvdHMuZmluZChpdGVtID0+IGl0ZW0uc2xvdF9uby50b1N0cmluZygpID09PSBzbG90X25vKSFcblxuICAgIHNsb3QuaXNGcmVlID0gZmFsc2U7XG4gICAgc2xvdC5jYXJfY29sb3I9IGNhcl9jb2xvcjtcbiAgICBzbG90LmNhcl9yZWdfbm8gPSBjYXJfcmVnX25vO1xuICAgIHNsb3QudGlja2V0X25vID0gdGlja2V0XG4gICAgUGFya2luZ1Nsb3RzU3RhdGUudXBkYXRlQ3JlYXRlVGlja2V0U3RhdGUoKVxuICAgIHRoaXMudXBkYXRlU2xvdChzbG90KVxuICAgIHJldHVybiBzbG90O1xuICB9XG5cbiAgcmVuZGVyRmlsdGVyZWRTbG90cyhpc1Jlc2V0OmJvb2xlYW4pe1xuICAgIGlmKGlzUmVzZXQpe1xuICAgICAgdGhpcy5wYXJraW5nU2xvdHMucmVwbGFjZUNoaWxkcmVuKC4uLlBhcmtpbmdTbG90c1N0YXRlLnRvdGFsX3Nsb3RzLm1hcCgoc2xvdDogUGFya2luZ1Nsb3QpID0+IHtcbiAgICAgICAgY29uc3QgZGl2TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHNsb3ROdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGNvbnN0IHNsb3RDYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBzbG90UmVnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgXG4gICAgICAgIGRpdk1haW4uY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdFwiKTtcbiAgICAgICAgZGl2TWFpbi5jbGFzc0xpc3QuYWRkKGBwYXJraW5nLXNsb3QtLSR7c2xvdC5zbG90X25vfWApO1xuICAgICAgICBcbiAgICAgICAgaWYoc2xvdC5jYXJfY29sb3Ipe1xuICAgICAgICAgIGRpdk1haW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2xvdC5jYXJfY29sb3IudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgICAgIHNsb3ROdW0uY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdF9fbnVtYmVyXCIpO1xuICAgICAgICBzbG90TnVtLnRleHRDb250ZW50ID0gc2xvdC5zbG90X25vLnRvU3RyaW5nKCk7XG4gIFxuICAgICAgICBzbG90Q2FyLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX2NhclwiKTtcbiAgICAgICAgc2xvdENhci50ZXh0Q29udGVudCA9IHNsb3QudGlja2V0X25vIHx8IFwiXCI7XG4gICAgICAgIHNsb3RSZWcuY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdF9fcmVnLW51bWJlclwiKTtcbiAgICAgICAgc2xvdFJlZy50ZXh0Q29udGVudCA9IHNsb3QuY2FyX3JlZ19ubyB8fCBcIlwiO1xuICBcbiAgICAgICAgZGl2TWFpbi5hcHBlbmRDaGlsZChzbG90TnVtKVxuICAgICAgICBkaXZNYWluLmFwcGVuZENoaWxkKHNsb3RDYXIpXG4gICAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdFJlZylcbiAgICAgICAgcmV0dXJuIGRpdk1haW5cbiAgICAgIH0pKVxuICAgIH1lbHNle1xuICAgICAgdGhpcy5wYXJraW5nU2xvdHMucmVwbGFjZUNoaWxkcmVuKC4uLlBhcmtpbmdTbG90c1N0YXRlLmZpbHRlcmVkX3Nsb3RzLm1hcCgoc2xvdDogUGFya2luZ1Nsb3QpID0+IHtcbiAgICAgICAgY29uc3QgZGl2TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHNsb3ROdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGNvbnN0IHNsb3RDYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBzbG90UmVnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgXG4gICAgICAgIGRpdk1haW4uY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdFwiKTtcbiAgICAgICAgZGl2TWFpbi5jbGFzc0xpc3QuYWRkKGBwYXJraW5nLXNsb3QtLSR7c2xvdC5zbG90X25vfWApO1xuICBcbiAgICAgICAgZGl2TWFpbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzbG90LmNhcl9jb2xvciEudG9TdHJpbmcoKTtcbiAgICAgICAgc2xvdE51bS5jbGFzc0xpc3QuYWRkKFwicGFya2luZy1zbG90X19udW1iZXJcIik7XG4gICAgICAgIHNsb3ROdW0udGV4dENvbnRlbnQgPSBzbG90LnNsb3Rfbm8udG9TdHJpbmcoKTtcbiAgXG4gICAgICAgIHNsb3RDYXIuY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdF9fY2FyXCIpO1xuICAgICAgICBzbG90Q2FyLnRleHRDb250ZW50ID0gc2xvdC50aWNrZXRfbm8gfHwgXCJcIjtcbiAgICAgICAgc2xvdFJlZy5jbGFzc0xpc3QuYWRkKFwicGFya2luZy1zbG90X19yZWctbnVtYmVyXCIpO1xuICAgICAgICBzbG90UmVnLnRleHRDb250ZW50ID0gc2xvdC5jYXJfcmVnX25vIHx8IFwiXCI7XG4gIFxuICAgICAgICBkaXZNYWluLmFwcGVuZENoaWxkKHNsb3ROdW0pXG4gICAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc2xvdENhcilcbiAgICAgICAgZGl2TWFpbi5hcHBlbmRDaGlsZChzbG90UmVnKVxuICAgICAgICByZXR1cm4gZGl2TWFpblxuICAgICAgfSkpXG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgUGFya2luZ1Nsb3RzU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvUGFya2luZ1Nsb3RzXCI7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJzRm9ybSB7XG4gICAgZm9ybTpIVE1MRm9ybUVsZW1lbnQ7XG4gICAgdGlja2V0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICByZWdOb0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHJlc2V0OiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1fZmlsdGVyc1wiKSEgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLnN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy50aWNrZXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGlja2V0X2ZpbHRlclwiKSEgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgdGhpcy5jb2xvcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2xvcl9maWx0ZXJcIikhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHRoaXMucmVnTm9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnLW5vX2ZpbHRlclwiKSEgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgdGhpcy5yZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXQtYnRuXCIpISBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgdGhpcy5yZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yZXNldEhhbmRsZXIuYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICBzdWJtaXRIYW5kbGVyKGU6U3VibWl0RXZlbnQpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFBhcmtpbmdTbG90c1N0YXRlLmZpbHRlclBhcmtpbmdTbG90cyh0aGlzLmNvbG9ySW5wdXQudmFsdWUsIHRoaXMudGlja2V0SW5wdXQudmFsdWUsIHRoaXMucmVnTm9JbnB1dC52YWx1ZSwgZmFsc2UpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlsdGVyZXNcIixQYXJraW5nU2xvdHNTdGF0ZS5maWx0ZXJlZF9zbG90cylcbiAgICB9XG5cbiAgICByZXNldEhhbmRsZXIoKXtcbiAgICAgICAgdGhpcy5jb2xvcklucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICB0aGlzLnJlZ05vSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgICAgIHRoaXMudGlja2V0SW5wdXQudmFsdWUgPSBcIlwiXG4gICAgICAgIFBhcmtpbmdTbG90c1N0YXRlLmZpbHRlclBhcmtpbmdTbG90cyh0aGlzLmNvbG9ySW5wdXQudmFsdWUsIHRoaXMudGlja2V0SW5wdXQudmFsdWUsIHRoaXMucmVnTm9JbnB1dC52YWx1ZSwgdHJ1ZSlcbiAgICB9XG59IiwiaW1wb3J0IHsgc2xvdF9jb21wb25lbnQgfSBmcm9tIFwiLi4vYXBwXCI7XG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi4vbW9kZWxzL0NhclwiO1xuaW1wb3J0IHsgQ2Fyc1N0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL0NhcnNcIjtcbmltcG9ydCB7IFBhcmtpbmdTbG90c1N0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1BhcmtpbmdTbG90c1wiO1xuaW1wb3J0IHsgVGlja2V0c1N0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1RpY2tldHNcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm17XG4gICAgZm9ybTogSFRNTEZvcm1FbGVtZW50O1xuICAgIGNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcmVnTm9JbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBjcmVhdGVUaXhCdG46IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybV9jcmVhdGVcIikhIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5zdWJtaXRIYW5kbGVyLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMuY3JlYXRlVGl4QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19zdWJtaXRcIikhIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICB0aGlzLmNyZWF0ZUJ0bkFjdGl2ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuY29sb3JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JcIikhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHRoaXMucmVnTm9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnLW5vXCIpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIH1cblxuICAgIGNyZWF0ZUJ0bkFjdGl2ZShpc0FjdGl2ZTpib29sZWFuKXtcbiAgICAgICAgaWYoaXNBY3RpdmUpe1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVUaXhCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRpeEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJtaXRIYW5kbGVyKGU6IFN1Ym1pdEV2ZW50KXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IGNhcjpDYXIgPSBDYXJzU3RhdGUuYWRkQ2FyKHRoaXMuY29sb3JJbnB1dC52YWx1ZSwgdGhpcy5yZWdOb0lucHV0LnZhbHVlKVxuICAgICAgICBjb25zdCBzbG90ID0gUGFya2luZ1Nsb3RzU3RhdGUuZ2V0QXZhaWxhYmxlU2xvdCgpXG4gICAgICAgIGlmKHNsb3Qpe1xuICAgICAgICAgICAgY29uc3QgdGlja2V0ID0gVGlja2V0c1N0YXRlLmFkZFRpY2tldChzbG90LnNsb3Rfbm8udG9TdHJpbmcoKSwgY2FyLnJlZ19ubylcbiAgICAgICAgICAgIGNvbnN0IHVwU2xvdCA9IHNsb3RfY29tcG9uZW50LnBhcmsoc2xvdC5zbG90X25vLnRvU3RyaW5nKCksIGNhci5jb2xvciwgY2FyLnJlZ19ubywgdGlja2V0LnRpY2tldF9udW1iZXIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cFNsb3QpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBTbG90cyBBdmFpbGFibGVcIilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9ySW5wdXQudmFsdWUgPSBcIlwiXG4gICAgICAgIHRoaXMucmVnTm9JbnB1dC52YWx1ZSA9IFwiXCJcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IFBhcmtpbmdTbG90c1N0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1BhcmtpbmdTbG90c1wiO1xuXG5leHBvcnQgY2xhc3MgTm9TbG90IHtcbiAgcGFya2luZ1Nsb3RzOiBIVE1MRGl2RWxlbWVudDtcbiAgbWVzc2FnZTogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogTm9TbG90O1xuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgTm9TbG90KCk7XG4gICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFya2luZ1Nsb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLnBhcmtpbmctc2xvdHNcIlxuICAgICkhIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgdGhpcy5tZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwicGFya2luZy1zbG90c19fbWVzc2FnZVwiKTtcbiAgICB0aGlzLm1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIk5vIFNsb3RzLCBwbGVhc2UgY3JlYXRlIHNsb3RzXCI7XG4gICAgaWYgKCFQYXJraW5nU2xvdHNTdGF0ZS50b3RhbF9zbG90cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVuZGVyTWVzc2FnZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlck1lc3NhZ2UoKSB7XG4gICAgaWYgKCFQYXJraW5nU2xvdHNTdGF0ZS50b3RhbF9zbG90cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucGFya2luZ1Nsb3RzLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlLnJlbW92ZSgpXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ2FyIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29sb3I6c3RyaW5nLCBwdWJsaWMgcmVnX25vOnN0cmluZyl7fVxufSIsImV4cG9ydCBjbGFzcyBQYXJraW5nU2xvdCB7XG4gICAgY2FyX3JlZ19ubzogbnVsbHxzdHJpbmcgPSBudWxsO1xuICAgIGlzRnJlZTpib29sZWFuPXRydWU7XG4gICAgY2FyX2NvbG9yOiBudWxsfHN0cmluZyA9IG51bGw7XG4gICAgdGlja2V0X25vOiBudWxsfHN0cmluZyA9IG51bGw7XG4gICAgY29uc3RydWN0b3IocHVibGljIHNsb3Rfbm86bnVtYmVyKXt9XG59IiwiZXhwb3J0IGNsYXNzIFRpY2tldCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBzbG90X251bWJlcjpzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB0aWNrZXRfbnVtYmVyOnN0cmluZyxcbiAgICAgICAgcHVibGljIGNhcl9yZWdfbnVtYmVyOnN0cmluZ1xuICAgICAgICApe31cbn0iLCJpbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi4vbW9kZWxzL0NhclwiO1xuXG5jbGFzcyBDYXJzIHtcbiAgICBjYXJzOkNhcltdPVtdO1xuICAgIGNhcnNfY29sb3JzX29wdGlvbnM6IHN0cmluZ1tdID0gW11cbiAgICBjYXJzX3JlZ19vcHRpb25zOiBzdHJpbmdbXSA9IFtdXG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IENhcnM7XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKXtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IENhcnMoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ2FyKGNvbG9yOnN0cmluZywgcmVnX25vOnN0cmluZyl7XG4gICAgICAgIGNvbnN0IGNhciA9IHRoaXMuY2Fycy5maW5kKGNhciA9PiBjYXIucmVnX25vID09PSByZWdfbm8pXG4gICAgICAgIGlmKGNhcil7XG4gICAgICAgICAgICByZXR1cm4gY2FyO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuY2Fycy5wdXNoKG5ldyBDYXIoY29sb3IsIHJlZ19ubykpXG4gICAgICAgICAgICBpZighdGhpcy5jYXJzX2NvbG9yc19vcHRpb25zLmluY2x1ZGVzKGNvbG9yKSkgdGhpcy5jYXJzX2NvbG9yc19vcHRpb25zLnB1c2goY29sb3IpXG4gICAgICAgICAgICBpZighdGhpcy5jYXJzX3JlZ19vcHRpb25zLmluY2x1ZGVzKHJlZ19ubykpIHRoaXMuY2Fyc19yZWdfb3B0aW9ucy5wdXNoKHJlZ19ubykgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYXJzW3RoaXMuY2Fycy5sZW5ndGggLSAxXVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgQ2Fyc1N0YXRlID0gQ2Fycy5nZXRJbnN0YW5jZSgpIiwiaW1wb3J0IHsgZm9ybUVsZW1lbnQsIG5vX3Nsb3RfcmVuZGVyLCBzbG90X2NvbXBvbmVudCB9IGZyb20gXCIuLi9hcHBcIjtcbmltcG9ydCB7IFBhcmtpbmdTbG90IH0gZnJvbSBcIi4uL21vZGVscy9QYXJraW5nU2xvdFwiO1xuXG5jbGFzcyBQYXJraW5nU2xvdHMge1xuICAgIHRvdGFsX3Nsb3RzOiBQYXJraW5nU2xvdFtdID0gW107XG4gICAgZmlsdGVyZWRfc2xvdHM6IFBhcmtpbmdTbG90W10gPSBbXVxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUGFya2luZ1Nsb3RzO1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCl7XG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBQYXJraW5nU2xvdHMoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlU2xvdCgpe1xuICAgICAgICB0aGlzLnRvdGFsX3Nsb3RzLnB1c2gobmV3IFBhcmtpbmdTbG90KHRoaXMudG90YWxfc2xvdHMubGVuZ3RoICsgMSkpXG4gICAgICAgIHNsb3RfY29tcG9uZW50LnJlbmRlclNsb3QodGhpcy50b3RhbF9zbG90c1t0aGlzLnRvdGFsX3Nsb3RzLmxlbmd0aCAtIDFdKVxuICAgICAgICBub19zbG90X3JlbmRlci5yZW5kZXJNZXNzYWdlKClcbiAgICAgICAgdGhpcy51cGRhdGVDcmVhdGVUaWNrZXRTdGF0ZSgpXG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsX3Nsb3RzW3RoaXMudG90YWxfc2xvdHMubGVuZ3RoIC0gMV1cbiAgICB9XG5cbiAgICBnZXRBdmFpbGFibGVTbG90KCl7XG4gICAgICAgIGNvbnN0IGF2YWlsU2xvdCA9IHRoaXMudG90YWxfc2xvdHMuZmluZChzbG90ID0+IHNsb3QuaXNGcmVlKVxuICAgICAgICByZXR1cm4gYXZhaWxTbG90O1xuICAgIH1cblxuICAgIHVwZGF0ZUNyZWF0ZVRpY2tldFN0YXRlKCl7XG4gICAgICAgIGNvbnN0IGF2YWlsU2xvdCA9IHRoaXMudG90YWxfc2xvdHMuZmluZChzbG90ID0+IHNsb3QuaXNGcmVlKVxuICAgICAgICBpZihhdmFpbFNsb3Qpe1xuICAgICAgICAgICAgZm9ybUVsZW1lbnQuY3JlYXRlQnRuQWN0aXZlKHRydWUpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZm9ybUVsZW1lbnQuY3JlYXRlQnRuQWN0aXZlKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlsdGVyUGFya2luZ1Nsb3RzKGNvbG9yOnN0cmluZz1cIlwiLCB0aWNrZXRfbm86IHN0cmluZyA9IFwiXCIscmVnX25vOnN0cmluZz1cIlwiLCBpc1Jlc2V0OmJvb2xlYW4pe1xuICAgICAgICBpZihpc1Jlc2V0KXtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRfc2xvdHMgPSBbLi4udGhpcy50b3RhbF9zbG90c107IFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRfc2xvdHMgPSB0aGlzLnRvdGFsX3Nsb3RzLmZpbHRlcigoc2xvdDpQYXJraW5nU2xvdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHNsb3QuY2FyX2NvbG9yID09PSBjb2xvciB8fCBzbG90LnRpY2tldF9ubyA9PT0gdGlja2V0X25vIHx8IHNsb3QuY2FyX3JlZ19ubyA9PT0gcmVnX25vKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgc2xvdF9jb21wb25lbnQucmVuZGVyRmlsdGVyZWRTbG90cyhpc1Jlc2V0KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFBhcmtpbmdTbG90c1N0YXRlID0gUGFya2luZ1Nsb3RzLmdldEluc3RhbmNlKCkiLCJpbXBvcnQgeyBUaWNrZXQgfSBmcm9tIFwiLi4vbW9kZWxzL1RpY2tldFwiO1xuXG5jbGFzcyBUaWNrZXRzIHtcbiAgICB0aWNrZXRzOlRpY2tldFtdPVtdXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBUaWNrZXRzO1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVGlja2V0cygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICAgIH1cbiAgICB9XG4gICAgYWRkVGlja2V0KHNsb3Rfbm86c3RyaW5nLCBjYXJfcmVnX25vOnN0cmluZyl7XG4gICAgICAgIHRoaXMudGlja2V0cy5wdXNoKG5ldyBUaWNrZXQoc2xvdF9ubywgKHRoaXMudGlja2V0cy5sZW5ndGggKyAxKS50b1N0cmluZygpLCBjYXJfcmVnX25vKSlcbiAgICAgICAgcmV0dXJuIHRoaXMudGlja2V0c1t0aGlzLnRpY2tldHMubGVuZ3RoIC0gMV1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBUaWNrZXRzU3RhdGUgPSBUaWNrZXRzLmdldEluc3RhbmNlKCkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==