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
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Form */ "./src/components/Form.ts");
/* harmony import */ var _components_NoSlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/NoSlot */ "./src/components/NoSlot.ts");



const no_slot_render = _components_NoSlot__WEBPACK_IMPORTED_MODULE_2__.NoSlot.getInstance();
const slot_component = _components_CreateSlot__WEBPACK_IMPORTED_MODULE_0__.CreateSlot.getInstance();
new _components_Form__WEBPACK_IMPORTED_MODULE_1__.Form();


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
        this.form = document.querySelector(".form");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTs7Ozs7OztVQ25CakQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZVNsb3QudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL2NvbXBvbmVudHMvRm9ybS50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvY29tcG9uZW50cy9Ob1Nsb3QudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL21vZGVscy9DYXIudHMiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlLy4vc3JjL21vZGVscy9QYXJraW5nU2xvdC50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvbW9kZWxzL1RpY2tldC50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvc3RhdGUvQ2Fycy50cyIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2UvLi9zcmMvc3RhdGUvUGFya2luZ1Nsb3RzLnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS8uL3NyYy9zdGF0ZS9UaWNrZXRzLnRzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYW5nb2FwcC1jaGFsbGVuZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL21hbmdvYXBwLWNoYWxsZW5nZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWFuZ29hcHAtY2hhbGxlbmdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDcmVhdGVTbG90IH0gZnJvbSBcIi4vY29tcG9uZW50cy9DcmVhdGVTbG90XCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Gb3JtXCI7XG5pbXBvcnQgeyBOb1Nsb3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL05vU2xvdFwiO1xuXG5leHBvcnQgY29uc3Qgbm9fc2xvdF9yZW5kZXIgPSBOb1Nsb3QuZ2V0SW5zdGFuY2UoKVxuZXhwb3J0IGNvbnN0IHNsb3RfY29tcG9uZW50ID0gQ3JlYXRlU2xvdC5nZXRJbnN0YW5jZSgpO1xubmV3IEZvcm0oKSIsImltcG9ydCB7IFBhcmtpbmdTbG90IH0gZnJvbSBcIi4uL21vZGVscy9QYXJraW5nU2xvdFwiO1xuaW1wb3J0IHsgUGFya2luZ1Nsb3RzU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvUGFya2luZ1Nsb3RzXCI7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVTbG90IHtcbiAgY3JlYXRlQnRuOiBIVE1MRGl2RWxlbWVudDtcbiAgcGFya2luZ1Nsb3RzOiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBDcmVhdGVTbG90O1xuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQ3JlYXRlU2xvdCgpO1xuICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNyZWF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5wYXJraW5nLXNsb3RzX19jcmVhdGVcIlxuICAgICkhIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIHRoaXMuY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBQYXJraW5nU2xvdHNTdGF0ZS5jcmVhdGVTbG90LmJpbmQoUGFya2luZ1Nsb3RzU3RhdGUpXG4gICAgKTtcblxuICAgIHRoaXMucGFya2luZ1Nsb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLnBhcmtpbmctc2xvdHNcIlxuICAgICkhIGFzIEhUTUxEaXZFbGVtZW50O1xuICB9XG5cbiAgcmVuZGVyU2xvdChzbG90OiBQYXJraW5nU2xvdCkge1xuICAgIGlmICh0aGlzLnBhcmtpbmdTbG90cykge1xuICAgICAgY29uc3QgZGl2TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBzbG90TnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgY29uc3Qgc2xvdENhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBzbG90UmVnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgZGl2TWFpbi5jbGFzc0xpc3QuYWRkKFwicGFya2luZy1zbG90XCIpO1xuICAgICAgZGl2TWFpbi5jbGFzc0xpc3QuYWRkKGBwYXJraW5nLXNsb3QtLSR7c2xvdC5zbG90X25vfWApO1xuXG4gICAgICBzbG90TnVtLmNsYXNzTGlzdC5hZGQoXCJwYXJraW5nLXNsb3RfX251bWJlclwiKTtcbiAgICAgIHNsb3ROdW0udGV4dENvbnRlbnQgPSBzbG90LnNsb3Rfbm8udG9TdHJpbmcoKTtcblxuICAgICAgc2xvdENhci5jbGFzc0xpc3QuYWRkKFwicGFya2luZy1zbG90X19jYXJcIik7XG4gICAgICBzbG90Q2FyLnRleHRDb250ZW50ID0gc2xvdC50aWNrZXRfbm8gfHwgXCJcIjtcbiAgICAgIHNsb3RSZWcuY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdF9fcmVnLW51bWJlclwiKTtcbiAgICAgIHNsb3RSZWcudGV4dENvbnRlbnQgPSBzbG90LmNhcl9yZWdfbm8gfHwgXCJcIjtcblxuICAgICAgZGl2TWFpbi5hcHBlbmRDaGlsZChzbG90TnVtKVxuICAgICAgZGl2TWFpbi5hcHBlbmRDaGlsZChzbG90Q2FyKVxuICAgICAgZGl2TWFpbi5hcHBlbmRDaGlsZChzbG90UmVnKVxuXG4gICAgICB0aGlzLnBhcmtpbmdTbG90cy5hcHBlbmRDaGlsZChkaXZNYWluKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVNsb3Qoc2xvdDpQYXJraW5nU2xvdCl7XG4gICAgY29uc3QgUGFya3Nsb3Q6IEhUTUxEaXZFbGVtZW50ID0gdGhpcy5wYXJraW5nU2xvdHMucXVlcnlTZWxlY3RvcihgLnBhcmtpbmctc2xvdC0tJHtzbG90LnNsb3Rfbm99YCkhIGFzIEhUTUxEaXZFbGVtZW50XG5cbiAgICBQYXJrc2xvdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzbG90LmNhcl9jb2xvciEudG9TdHJpbmcoKTtcbiAgICBjb25zdCBzbG90X2NhcjogSFRNTERpdkVsZW1lbnQgPSBQYXJrc2xvdC5xdWVyeVNlbGVjdG9yKFwiLnBhcmtpbmctc2xvdF9fY2FyXCIpISBhcyBIVE1MRGl2RWxlbWVudFxuICAgIGlmKHNsb3RfY2FyKSBzbG90X2Nhci50ZXh0Q29udGVudCA9IHNsb3QudGlja2V0X25vXG5cbiAgICBjb25zdCBzbG90X3JlZ19ubzogSFRNTERpdkVsZW1lbnQgPSBQYXJrc2xvdC5xdWVyeVNlbGVjdG9yKFwiLnBhcmtpbmctc2xvdF9fcmVnLW51bWJlclwiKSEgYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgICAgaWYoc2xvdF9yZWdfbm8pIHNsb3RfcmVnX25vLnRleHRDb250ZW50ID0gc2xvdC5jYXJfcmVnX25vXG4gIH1cblxuICBwYXJrKHNsb3Rfbm86c3RyaW5nLCBjYXJfY29sb3I6IHN0cmluZywgY2FyX3JlZ19ubzogc3RyaW5nLCB0aWNrZXQ6c3RyaW5nKXtcbiAgICBjb25zdCBzbG90ID0gUGFya2luZ1Nsb3RzU3RhdGUudG90YWxfc2xvdHMuZmluZChpdGVtID0+IGl0ZW0uc2xvdF9uby50b1N0cmluZygpID09PSBzbG90X25vKSFcblxuICAgIHNsb3QuaXNGcmVlID0gZmFsc2U7XG4gICAgc2xvdC5jYXJfY29sb3I9IGNhcl9jb2xvcjtcbiAgICBzbG90LmNhcl9yZWdfbm8gPSBjYXJfcmVnX25vO1xuICAgIHNsb3QudGlja2V0X25vID0gdGlja2V0XG4gICAgXG4gICAgdGhpcy51cGRhdGVTbG90KHNsb3QpXG4gICAgcmV0dXJuIHNsb3Q7XG4gIH1cbn0iLCJpbXBvcnQgeyBzbG90X2NvbXBvbmVudCB9IGZyb20gXCIuLi9hcHBcIjtcbmltcG9ydCB7IENhciB9IGZyb20gXCIuLi9tb2RlbHMvQ2FyXCI7XG5pbXBvcnQgeyBDYXJzU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvQ2Fyc1wiO1xuaW1wb3J0IHsgUGFya2luZ1Nsb3RzU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvUGFya2luZ1Nsb3RzXCI7XG5pbXBvcnQgeyBUaWNrZXRzU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvVGlja2V0c1wiO1xuXG5leHBvcnQgY2xhc3MgRm9ybXtcbiAgICBmb3JtOiBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgY29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICByZWdOb0lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpISBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuc3VibWl0SGFuZGxlci5iaW5kKHRoaXMpKVxuXG4gICAgICAgIHRoaXMuY29sb3JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JcIikhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHRoaXMucmVnTm9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnLW5vXCIpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIH1cblxuICAgIHN1Ym1pdEhhbmRsZXIoZTogU3VibWl0RXZlbnQpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgY2FyOkNhciA9IENhcnNTdGF0ZS5hZGRDYXIodGhpcy5jb2xvcklucHV0LnZhbHVlLCB0aGlzLnJlZ05vSW5wdXQudmFsdWUpXG4gICAgICAgIGNvbnN0IHNsb3QgPSBQYXJraW5nU2xvdHNTdGF0ZS5nZXRBdmFpbGFibGVTbG90KClcbiAgICAgICAgaWYoc2xvdCl7XG4gICAgICAgICAgICBjb25zdCB0aWNrZXQgPSBUaWNrZXRzU3RhdGUuYWRkVGlja2V0KHNsb3Quc2xvdF9uby50b1N0cmluZygpLCBjYXIucmVnX25vKVxuICAgICAgICAgICAgY29uc3QgdXBTbG90ID0gc2xvdF9jb21wb25lbnQucGFyayhzbG90LnNsb3Rfbm8udG9TdHJpbmcoKSwgY2FyLmNvbG9yLCBjYXIucmVnX25vLCB0aWNrZXQudGlja2V0X251bWJlcilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwU2xvdClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIFNsb3RzIEF2YWlsYWJsZVwiKVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBQYXJraW5nU2xvdHNTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9QYXJraW5nU2xvdHNcIjtcblxuZXhwb3J0IGNsYXNzIE5vU2xvdCB7XG4gIHBhcmtpbmdTbG90czogSFRNTERpdkVsZW1lbnQ7XG4gIG1lc3NhZ2U6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IE5vU2xvdDtcblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IE5vU2xvdCgpO1xuICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmtpbmdTbG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5wYXJraW5nLXNsb3RzXCJcbiAgICApISBhcyBIVE1MRGl2RWxlbWVudDtcblxuICAgIHRoaXMubWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInBhcmtpbmctc2xvdHNfX21lc3NhZ2VcIik7XG4gICAgdGhpcy5tZXNzYWdlLnRleHRDb250ZW50ID0gXCJObyBTbG90cywgcGxlYXNlIGNyZWF0ZSBzbG90c1wiO1xuICAgIGlmICghUGFya2luZ1Nsb3RzU3RhdGUudG90YWxfc2xvdHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlbmRlck1lc3NhZ2UoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJNZXNzYWdlKCkge1xuICAgIGlmICghUGFya2luZ1Nsb3RzU3RhdGUudG90YWxfc2xvdHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnBhcmtpbmdTbG90cy5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWVzc2FnZS5yZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENhciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbG9yOnN0cmluZywgcHVibGljIHJlZ19ubzpzdHJpbmcpe31cbn0iLCJleHBvcnQgY2xhc3MgUGFya2luZ1Nsb3Qge1xuICAgIGNhcl9yZWdfbm86IG51bGx8c3RyaW5nID0gbnVsbDtcbiAgICBpc0ZyZWU6Ym9vbGVhbj10cnVlO1xuICAgIGNhcl9jb2xvcjogbnVsbHxzdHJpbmcgPSBudWxsO1xuICAgIHRpY2tldF9ubzogbnVsbHxzdHJpbmcgPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzbG90X25vOm51bWJlcil7fVxufSIsImV4cG9ydCBjbGFzcyBUaWNrZXQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgc2xvdF9udW1iZXI6c3RyaW5nLFxuICAgICAgICBwdWJsaWMgdGlja2V0X251bWJlcjpzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBjYXJfcmVnX251bWJlcjpzdHJpbmdcbiAgICAgICAgKXt9XG59IiwiaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uL21vZGVscy9DYXJcIjtcblxuY2xhc3MgQ2FycyB7XG4gICAgY2FyczpDYXJbXT1bXTtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQ2FycztcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQ2FycygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDYXIoY29sb3I6c3RyaW5nLCByZWdfbm86c3RyaW5nKXtcbiAgICAgICAgY29uc3QgY2FyID0gdGhpcy5jYXJzLmZpbmQoY2FyID0+IGNhci5yZWdfbm8gPT09IHJlZ19ubylcbiAgICAgICAgaWYoY2FyKXtcbiAgICAgICAgICAgIHJldHVybiBjYXI7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5jYXJzLnB1c2gobmV3IENhcihjb2xvciwgcmVnX25vKSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhcnNbdGhpcy5jYXJzLmxlbmd0aCAtIDFdXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBDYXJzU3RhdGUgPSBDYXJzLmdldEluc3RhbmNlKCkiLCJpbXBvcnQgeyBub19zbG90X3JlbmRlciwgc2xvdF9jb21wb25lbnQgfSBmcm9tIFwiLi4vYXBwXCI7XG5pbXBvcnQgeyBQYXJraW5nU2xvdCB9IGZyb20gXCIuLi9tb2RlbHMvUGFya2luZ1Nsb3RcIjtcblxuY2xhc3MgUGFya2luZ1Nsb3RzIHtcbiAgICB0b3RhbF9zbG90czogUGFya2luZ1Nsb3RbXSA9IFtdO1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUGFya2luZ1Nsb3RzO1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCl7XG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBQYXJraW5nU2xvdHMoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlU2xvdCgpe1xuICAgICAgICB0aGlzLnRvdGFsX3Nsb3RzLnB1c2gobmV3IFBhcmtpbmdTbG90KHRoaXMudG90YWxfc2xvdHMubGVuZ3RoICsgMSkpXG4gICAgICAgIHNsb3RfY29tcG9uZW50LnJlbmRlclNsb3QodGhpcy50b3RhbF9zbG90c1t0aGlzLnRvdGFsX3Nsb3RzLmxlbmd0aCAtIDFdKVxuICAgICAgICBub19zbG90X3JlbmRlci5yZW5kZXJNZXNzYWdlKClcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxfc2xvdHNbdGhpcy50b3RhbF9zbG90cy5sZW5ndGggLSAxXVxuICAgIH1cblxuICAgIGdldEF2YWlsYWJsZVNsb3QoKXtcbiAgICAgICAgY29uc3QgYXZhaWxTbG90ID0gdGhpcy50b3RhbF9zbG90cy5maW5kKHNsb3QgPT4gc2xvdC5pc0ZyZWUpXG4gICAgICAgIHJldHVybiBhdmFpbFNsb3Q7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgUGFya2luZ1Nsb3RzU3RhdGUgPSBQYXJraW5nU2xvdHMuZ2V0SW5zdGFuY2UoKSIsImltcG9ydCB7IFRpY2tldCB9IGZyb20gXCIuLi9tb2RlbHMvVGlja2V0XCI7XG5cbmNsYXNzIFRpY2tldHMge1xuICAgIHRpY2tldHM6VGlja2V0W109W11cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFRpY2tldHM7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCl7XG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBUaWNrZXRzKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgICAgICAgfVxuICAgIH1cbiAgICBhZGRUaWNrZXQoc2xvdF9ubzpzdHJpbmcsIGNhcl9yZWdfbm86c3RyaW5nKXtcbiAgICAgICAgdGhpcy50aWNrZXRzLnB1c2gobmV3IFRpY2tldChzbG90X25vLCAodGhpcy50aWNrZXRzLmxlbmd0aCArIDEpLnRvU3RyaW5nKCksIGNhcl9yZWdfbm8pKVxuICAgICAgICByZXR1cm4gdGhpcy50aWNrZXRzW3RoaXMudGlja2V0cy5sZW5ndGggLSAxXVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFRpY2tldHNTdGF0ZSA9IFRpY2tldHMuZ2V0SW5zdGFuY2UoKSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9