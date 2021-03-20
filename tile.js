"use strict";
exports.__esModule = true;
/*
   0
3     1
   2
*/
var Job;
(function (Job) {
    Job[Job["Burglar"] = 0] = "Burglar";
    Job[Job["Peasant"] = 1] = "Peasant";
    Job[Job["Bishop"] = 2] = "Bishop";
})(Job = exports.Job || (exports.Job = {}));
;
var tileSetup = [
    { tile: { cities: 0x11111, shield: true }, count: 1 },
    { tile: { roads: 0x1111 }, count: 1 },
    { tile: { cities: 0x10111 }, count: 3 },
    { tile: { cities: 0x10111, shield: true }, count: 1 },
    { tile: { cities: 0x10111, roads: 0x1000 }, count: 1 },
    { tile: { cities: 0x10111, roads: 0x1000, shield: true }, count: 2 },
    { tile: { roads: 0x1110 }, count: 4 },
    { tile: { cities: 0x11010 }, count: 1 },
    { tile: { cities: 0x11010, shield: true }, count: 2 },
    { tile: { roads: 0x0101 }, count: 8 },
    { tile: { cities: 0x11100 }, count: 3 },
    { tile: { cities: 0x11100, shield: true }, count: 2 },
    { tile: { roads: 0x1100, cities: 0x10011 }, count: 3 },
    { tile: { roads: 0x1100, cities: 0x10011, shield: true }, count: 2 },
    { tile: { roads: 0x0011 }, count: 9 },
    { tile: { cities: 0x01100 }, count: 2 },
    { tile: { cities: 0x01010 }, count: 3 },
    { tile: { temple: true, roads: 0x1000 }, count: 2 },
    { tile: { temple: true }, count: 4 },
    { tile: { cities: 0x10001 }, count: 5 },
    { tile: { cities: 0x10001, roads: 0x1100 }, count: 3 },
    { tile: { cities: 0x10001, roads: 0x0110 }, count: 3 },
    { tile: { cities: 0x10001, roads: 0x1110 }, count: 3 },
    { tile: { cities: 0x10001, roads: 0x1010 }, count: 3 },
];
var arrayOfX = function (item, times) {
    var result = new Array(times);
    for (var i = 0; i < times; ++i) {
        result[i] = item;
    }
    return result;
};
exports.startGame = function (teamNames) {
    return {
        teams: teamNames.map(function (x) { return ({
            name: x,
            freeMeeples: 7,
            points: 0
        }); }, tiles, tileSetup.flatMap(function (x) { return arrayOfX(x.tile, x.count); }), placements, [], move, teamNames[0])
    };
};
