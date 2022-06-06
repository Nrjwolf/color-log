"use strict";
const color = {
    // color
    'white': '\u001b[0m',
    'yellow': '\u001b[1;33m',
    'red': '\u001b[1;31m',
    'green': '\u001b[1;32m',
    'blue': '\u001b[1;34m',
    'purple': '\u001b[1;35m',
    'cyan': '\u001b[1;36m',
    // bg color
    'redBg': '\u001b[1;41m',
    'greenBg': '\u001b[1;42m',
    'yellowBg': '\u001b[1;43m',
    'blueBg': '\u001b[1;44m',
    'purpleBg': '\u001b[1;45m',
    'cyanBg': '\u001b[1;46m',
};
String.prototype.white = function () { return `${color.white}${this}${color.white}`; };
String.prototype.yellow = function () { return `${color.yellow}${this}${color.white}`; };
String.prototype.red = function () { return `${color.red}${this}${color.white}`; };
String.prototype.green = function () { return `${color.green}${this}${color.white}`; };
String.prototype.blue = function () { return `${color.blue}${this}${color.white}`; };
String.prototype.purple = function () { return `${color.purple}${this}${color.white}`; };
String.prototype.cyan = function () { return `${color.cyan}${this}${color.white}`; };
String.prototype.redBg = function () { return `${color.redBg}${this}${color.white}`; };
String.prototype.greenBg = function () { return `${color.greenBg}${this}${color.white}`; };
String.prototype.yellowBg = function () { return `${color.yellowBg}${this}${color.white}`; };
String.prototype.purpleBg = function () { return `${color.purpleBg}${this}${color.white}`; };
String.prototype.cyanBg = function () { return `${color.cyanBg}${this}${color.white}`; };
//# sourceMappingURL=index.js.map