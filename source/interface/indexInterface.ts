import { So } from "./so";
import { HardDisc } from "./hardDisc";
import { SsdDisc } from "./ssdDisc";
import { PendriveDisc } from "./pendriveDisc";

let driveHardDisc     = new HardDisc();
let driveSddDisc      = new SsdDisc();
let drivePendriveDisc = new PendriveDisc();

let so = new So(drivePendriveDisc);

so.writeDisc();
so.readDisc();
so.deleteDisc();