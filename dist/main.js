/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/HashTables/HashTable.js":
/*!*************************************!*\
  !*** ./src/HashTables/HashTable.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet hashStringToInt = (string, tableSize) => {\n    let hash = 17;\n    for (let i = 0; i < string.length; i++) {\n        hash = (13 * hash * string.charCodeAt(i)) % tableSize;\n    }\n    return hash; // returns index\n};\n\nclass HashTable {\n    table = new Array(3333);\n    numItems = 0;\n\n    resize = () => {\n        const newTable = new Array(this.table.length * 2);\n        this.table.forEach((item) => {\n            if (item) {\n                item.forEach(([key, value]) => {\n                    const idx = hashStringToInt(key, newTable.length);\n                    if (newTable[idx]) {\n                        newTable[idx].push([key, value]);\n                    } else {\n                        newTable[idx] = [[key, value]];\n                    }\n                });\n            }\n        });\n        this.table = newTable;\n    };\n\n    setItem = (key, value) => {\n        this.numItems++;\n        const loadFactor = this.numItems / this.table.length;\n        if (loadFactor > 0.8) {\n            // resize\n            this.resize();\n        }\n\n        const idx = hashStringToInt(key, this.table.length);\n        if (this.table[idx]) {\n            this.table[idx].push([key, value]);\n        } else {\n            this.table[idx] = [[key, value]];\n        }\n    };\n\n    getItem = (key) => {\n        const idx = hashStringToInt(key, this.table.length);\n\n        if (!this.table[idx]) {\n            return null;\n        }\n\n        // O(n)\n        return this.table[idx].find((x) => x[0] === key)[1];\n    };\n}\n/*\nconst myTable = new HashTable();\nmyTable.setItem(\"firstName\", \"bob\");\nmyTable.setItem(\"lastName\", \"tim\");\nmyTable.setItem(\"age\", 5);\nmyTable.setItem(\"dob\", \"1/2/3\");\nconsole.log(myTable.getItem(\"firstName\"));\nconsole.log(myTable.getItem(\"lastName\"));\nconsole.log(myTable.getItem(\"age\"));\nconsole.log(myTable.getItem(\"dob\"));\n*/\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HashTable);\n\n\n//# sourceURL=webpack://data-structures-javascript/./src/HashTables/HashTable.js?");

/***/ }),

/***/ "./src/HashTables/Map/map.js":
/*!***********************************!*\
  !*** ./src/HashTables/Map/map.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst myMap = new Map();\nmyMap.set(0, \"zero\");\nmyMap.set(1, \"one\");\n/*\nfor (const [key, value] of myMap) {\n    console.log(`${key} = ${value}`);\n}\n\nfor (const key of myMap.keys()) {\n    console.log(key);\n}\n\nfor (const value of myMap.entries()) {\n    console.log(value);\n}\n\nfor (const [key, value] of myMap.entries()) {\n    console.log(`${key} = ${value}`);\n}\n\nconsole.log(myMap.get(0));\nconsole.log(myMap.size);\nconsole.log(myMap.has(1), myMap.has(3));\n\n*/\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myMap);\n\n\n//# sourceURL=webpack://data-structures-javascript/./src/HashTables/Map/map.js?");

/***/ }),

/***/ "./src/LinkedLists/LinkedList.js":
/*!***************************************!*\
  !*** ./src/LinkedLists/LinkedList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ \"./src/LinkedLists/Node.js\");\n\n\nclass LinkedList {\n    constructor() {\n        //By default it has no head and 0 size\n        this.head = null;\n        this.size = 0;\n    }\n\n    //Create a new head for this linked list, give it some data and make it point to itself\n    insertFirst(data) {\n        this.head = new _Node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data, this.head);\n        this.size++;\n    }\n\n    insertLast(data) {\n        //Create a new node\n        let node = new _Node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\n\n        let current;\n\n        //If there isn't a head, make this node a head\n        if (!this.head) {\n            this.head = node;\n        } else {\n            // If there's already a head there, make current = head\n            current = this.head;\n            // While that head have something to point to, move me to that node until I reach the last one\n            while (current.next) {\n                current = current.next;\n            }\n            //Add a node at the end of the linked list\n            current.next = node;\n        }\n        this.size++;\n    }\n\n    insertAt(data, index) {\n        //check for out of range index\n        if (index > 0 && index > this.size) {\n            return;\n        }\n        if (index === 0) {\n            this.insertFirst(data);\n            return;\n        }\n\n        const node = new _Node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\n        let current, previous;\n\n        //I begin at the head\n        current = this.head;\n\n        let count = 0;\n        while (count < index) {\n            //I start counting at 0\n            //Make the previous be the current node\n            //Make the current be the next to the one I'm at\n            //Basically I move up one step, count goes up, repeat until index === count\n            previous = current;\n            count++;\n            current = current.next;\n        }\n\n        //Make this node point to itself\n        node.next = current;\n\n        //Make the previously last node point to this node\n        previous.next = node;\n\n        this.size++;\n    }\n\n    getAt(index) {\n        let current = this.head;\n        let count = 0;\n\n        while (current) {\n            if (count == index) {\n                console.log(current.data);\n            }\n            count++;\n            current = current.next;\n        }\n        return null;\n    }\n\n    removeAt(index) {\n        if (index > 0 && index > this.size) {\n            return;\n        }\n\n        let current = this.head;\n        let previous;\n        let count = 0;\n\n        if (index === 0) {\n            this.head = current.next;\n        } else {\n            while (count < index) {\n                count++;\n                previous = current;\n                current = current.next;\n            }\n            //When I'm at the index, make the prev point to the next one\n            previous.next = current.next;\n        }\n\n        this.size--;\n    }\n\n    clearList() {\n        this.head = null;\n        this.size = 0;\n    }\n\n    printListData() {\n        let current = this.head;\n\n        while (current) {\n            console.log(current.data);\n            current = current.next;\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkedList);\n\n\n//# sourceURL=webpack://data-structures-javascript/./src/LinkedLists/LinkedList.js?");

/***/ }),

/***/ "./src/LinkedLists/Node.js":
/*!*********************************!*\
  !*** ./src/LinkedLists/Node.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Node {\n    //Create a node with data and a pointer, by default it points to null\n    constructor(data, next = null) {\n        this.data = data;\n        this.next = next;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);\n\n\n//# sourceURL=webpack://data-structures-javascript/./src/LinkedLists/Node.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LinkedLists_LinkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedLists/LinkedList */ \"./src/LinkedLists/LinkedList.js\");\n/* harmony import */ var _HashTables_HashTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HashTables/HashTable */ \"./src/HashTables/HashTable.js\");\n/* harmony import */ var _HashTables_Map_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HashTables/Map/map */ \"./src/HashTables/Map/map.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://data-structures-javascript/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;