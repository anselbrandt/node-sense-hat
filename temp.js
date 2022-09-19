const util = require("util");
const nodeimu = require("nodeimu");
var IMU = new nodeimu.IMU();

var num = 0;
var numStop = 10;

var tic = new Date();
var callb = function (e, data) {
  var toc = new Date();

  if (e) {
    console.log(e);
    return;
  }

  var str = "";
  if (data.temperature && data.pressure && data.humidity) {
    var str = util.format('%s %s %s', data.temperature.toFixed(4), data.pressure.toFixed(4), data.humidity.toFixed(4));
  }
  if ((num % 10) == 0) {
    console.log(str);
  }

  num++;
  if (num !== numStop) {
    setTimeout(function () {
      tic = new Date();
      IMU.getValue(callb);
    }, 20 - (toc - tic));
  }
}

IMU.getValue(callb);
