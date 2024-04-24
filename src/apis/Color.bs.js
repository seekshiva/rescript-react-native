'use strict';


function str(prim) {
  return String(prim);
}

function fStr(prim) {
  return prim.toString();
}

function rgb(r, g, b) {
  return "rgb(" + String(r) + ", " + String(g) + ", " + String(b) + ")";
}

function rgba(r, g, b, a) {
  return "rgba(" + String(r) + ", " + String(g) + ", " + String(b) + ", " + a.toString() + ")";
}

function hsl(h, s, l) {
  return "hsl(" + h.toString() + ", " + s.toString() + "%, " + l.toString() + "%)";
}

function hsla(h, s, l, a) {
  return "hsl(" + h.toString() + ", " + s.toString() + "%, " + l.toString() + "%, " + a.toString() + ")";
}

exports.str = str;
exports.fStr = fStr;
exports.rgb = rgb;
exports.rgba = rgba;
exports.hsl = hsl;
exports.hsla = hsla;
/* No side effect */
