"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const so_1 = require("./so");
const hardDisc_1 = require("./hardDisc");
const ssdDisc_1 = require("./ssdDisc");
const pendriveDisc_1 = require("./pendriveDisc");
let driveHardDisc = new hardDisc_1.HardDisc();
let driveSddDisc = new ssdDisc_1.SsdDisc();
let drivePendriveDisc = new pendriveDisc_1.PendriveDisc();
let so = new so_1.So(drivePendriveDisc);
so.writeDisc();
so.readDisc();
so.deleteDisc();
