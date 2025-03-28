"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.textRestyleFunctions = void 0;
var react_native_1 = require("react-native");
var createRestyleComponent_1 = __importDefault(require("./createRestyleComponent"));
var restyleFunctions_1 = require("./restyleFunctions");
var createVariant_1 = __importDefault(require("./createVariant"));
exports.textRestyleFunctions = [
    restyleFunctions_1.color,
    restyleFunctions_1.opacity,
    restyleFunctions_1.visible,
    restyleFunctions_1.typography,
    restyleFunctions_1.spacing,
    restyleFunctions_1.spacingShorthand,
    restyleFunctions_1.textShadow,
    restyleFunctions_1.layout,
    (0, createVariant_1.default)({ themeKey: 'textVariants' }),
];
var createText = function (BaseComponent) {
    if (BaseComponent === void 0) { BaseComponent = react_native_1.Text; }
    return (0, createRestyleComponent_1.default)(exports.textRestyleFunctions, BaseComponent);
};
exports.default = createText;
