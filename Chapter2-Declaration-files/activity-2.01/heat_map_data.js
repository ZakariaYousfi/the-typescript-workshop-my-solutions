"use strict";
/// <reference path = './types/HeatMapTypes.d.ts'/>
exports.__esModule = true;
var _ = require("lodash");
var data;
data = {
    batterHotZones: [[1, 2, 3], [4, 5], [6, 7]],
    pitcherHotZones: [[2, 3], [4, 5], [7, 8]]
};
function findMatch(arr1, arr2) {
    var identicalArray = _.intersectionWith(arr1, arr2, _.isEqual);
    return identicalArray;
}
data.coordinateMap = findMatch(data.batterHotZones, data.pitcherHotZones);
console.log(data.coordinateMap);
