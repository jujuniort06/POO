"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class So {
    constructor(driver) {
        this.driver = driver;
    }
    writeDisc() {
        this.driver.write();
    }
    readDisc() {
        this.driver.read();
    }
    deleteDisc() {
        this.driver.delete();
    }
}
exports.So = So;
