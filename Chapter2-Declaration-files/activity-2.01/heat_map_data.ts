
/// <reference path = './types/HeatMapTypes.d.ts'/>

import hmt = require('HeatMapTypes')
import _ = require('lodash')
let data : hmt.Pitcher

data = {
    batterHotZones:[[1,2,3],[4,5],[6,7]],
    pitcherHotZones:[[2,3],[4,5],[7,8]]
}

function findMatch(arr1: Array<Array<number>>, arr2: Array<Array<number>>) : Array<Array<number>> {

    const identicalArray = _.intersectionWith(arr1,arr2,_.isEqual)

    return identicalArray

}

data.coordinateMap = findMatch(data.batterHotZones,data.pitcherHotZones)

console.log(data.coordinateMap)