const sense = require("sense-hat-led");
const HatKeys = require("./rpi-keys.js");

const hatKeys = new HatKeys();
const sleep = sense.sync.sleep;
let t = 1;

sense.sync.clear();
sense.sync.setRotation(0);

const brightness = 128;

const ON = [brightness, brightness, brightness];

const X = ON; // black
const O = [0, 0, 0]; // White

const UP = [ O, O, O, X, X, O, O, O, O, O, X, X, X, X, O, O, O, X, X, O, O, X, X, O, X, X, O, O, O, O, X, X, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O ]
const DOWN = [ O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, X, X, O, O, O, O, X, X, O, X, X, O, O, X, X, O, O, O, X, X, X, X, O, O, O, O, O, X, X, O, O, O ]
const LEFT = [ O, O, O, X, O, O, O, O, O, O, X, X, O, O, O, O, O, X, X, O, O, O, O, O, X, X, O, O, O, O, O, O, X, X, O, O, O, O, O, O, O, X, X, O, O, O, O, O, O, O, X, X, O, O, O, O, O, O, O, X, O, O, O, O ]
const RIGHT = [ O, O, O, O, X, O, O, O, O, O, O, O, X, X, O, O, O, O, O, O, O, X, X, O, O, O, O, O, O, O, X, X, O, O, O, O, O, O, X, X, O, O, O, O, O, X, X, O, O, O, O, O, X, X, O, O, O, O, O, O, X, O, O, O ]
const SELECT = [ O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, X, X, O, O, O, O, O, X, X, X, X, O, O, O, O, X, X, X, X, O, O, O, O, O, X, X, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O ]

function keyEvent(event) {
    if (event.pressed) {
      console.log("PRESSED: " + event.name);
      const button = event.name
      switch (button) {
          case "UP":
            sense.sync.setPixels(UP);
            sleep(t);
            sense.sync.clear();
            break;
            case "DOWN":
            sense.sync.setPixels(DOWN);
            sleep(t);
            sense.sync.clear();
            break;
            case "LEFT":
            sense.sync.setPixels(LEFT);
            sleep(t);
            sense.sync.clear();
            break;
            case "RIGHT":
            sense.sync.setPixels(RIGHT);
            sleep(t);
            sense.sync.clear();
            break;
            case "SELECT":
            sense.sync.setPixels(SELECT);
            sleep(t);
            sense.sync.clear();
            break;
            default:
            break;
      }
    } else if (event.released) {
      console.log("RELEASED: " + event.name);
    }
  }
  
  hatKeys.setKeyEventHandler(keyEvent);
  
  console.log("Press a Sense HAT key...");


