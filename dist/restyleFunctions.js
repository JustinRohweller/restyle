"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.all = exports.textShadow = exports.shadow = exports.border = exports.position = exports.layout = exports.height = exports.width = exports.typography = exports.spacingShorthand = exports.spacing = exports.visible = exports.opacity = exports.color = exports.backgroundColorShorthand = exports.backgroundColor = void 0;
var createRestyleFunction_1 = __importDefault(require("./createRestyleFunction"));
var typeHelpers_1 = require("./typeHelpers");
var spacingProperties = {
    margin: true,
    marginTop: true,
    marginRight: true,
    marginBottom: true,
    marginLeft: true,
    marginHorizontal: true,
    marginVertical: true,
    marginStart: true,
    marginEnd: true,
    padding: true,
    paddingTop: true,
    paddingRight: true,
    paddingBottom: true,
    paddingLeft: true,
    paddingHorizontal: true,
    paddingVertical: true,
    paddingStart: true,
    paddingEnd: true,
    columnGap: true,
    rowGap: true,
    gap: true,
};
var spacingPropertiesShorthand = {
    m: 'margin',
    mt: 'marginTop',
    mr: 'marginRight',
    mb: 'marginBottom',
    ml: 'marginLeft',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    ms: 'marginStart',
    me: 'marginEnd',
    p: 'padding',
    pt: 'paddingTop',
    pr: 'paddingRight',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    ps: 'paddingStart',
    pe: 'paddingEnd',
    g: 'gap',
    rg: 'rowGap',
    cg: 'columnGap',
};
var typographyProperties = {
    fontFamily: true,
    fontSize: true,
    fontStyle: true,
    fontWeight: true,
    lineHeight: true,
    includeFontPadding: true,
    fontVariant: true,
    letterSpacing: true,
    textAlign: true,
    textAlignVertical: true,
    textDecorationLine: true,
    textDecorationStyle: true,
    textTransform: true,
    verticalAlign: true,
    writingDirection: true,
};
var heightProperties = {
    height: true,
    minHeight: true,
    maxHeight: true,
};
var widthProperties = {
    width: true,
    minWidth: true,
    maxWidth: true,
    borderBottomWidth: true,
    borderLeftWidth: true,
    borderRightWidth: true,
    borderStartWidth: true,
    borderTopWidth: true,
    borderEndWidth: true,
    borderWidth: true,
};
var layoutProperties = {
    overflow: true,
    aspectRatio: true,
    alignContent: true,
    alignItems: true,
    alignSelf: true,
    justifyContent: true,
    flex: true,
    flexBasis: true,
    flexDirection: true,
    flexGrow: true,
    flexShrink: true,
    flexWrap: true,
};
var positionProperties = {
    position: true,
    top: true,
    right: true,
    bottom: true,
    left: true,
    start: true,
    end: true,
};
var borderProperties = {
    borderStyle: true,
};
var borderRadiusProperties = {
    borderRadius: true,
    borderBottomLeftRadius: true,
    borderBottomRightRadius: true,
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderBottomStartRadius: true,
    borderBottomEndRadius: true,
    borderTopStartRadius: true,
    borderTopEndRadius: true,
};
var borderColorProperties = {
    borderColor: true,
    borderTopColor: true,
    borderRightColor: true,
    borderLeftColor: true,
    borderBottomColor: true,
    borderStartColor: true,
    borderEndColor: true,
};
var shadowProperties = {
    shadowOpacity: true,
    shadowOffset: true,
    shadowRadius: true,
    elevation: true,
};
var textShadowProperties = {
    textShadowOffset: true,
    textShadowRadius: true,
};
exports.backgroundColor = (0, createRestyleFunction_1.default)({
    property: 'backgroundColor',
    themeKey: 'colors',
});
exports.backgroundColorShorthand = (0, createRestyleFunction_1.default)({
    property: 'bg',
    styleProperty: 'backgroundColor',
    themeKey: 'colors',
});
exports.color = [
    (0, createRestyleFunction_1.default)({
        property: 'color',
        themeKey: 'colors',
    }),
    (0, createRestyleFunction_1.default)({
        property: 'textDecorationColor',
        themeKey: 'colors',
    }),
];
exports.opacity = (0, createRestyleFunction_1.default)({
    property: 'opacity',
});
exports.visible = (0, createRestyleFunction_1.default)({
    property: 'visible',
    styleProperty: 'display',
    transform: function (_a) {
        var value = _a.value;
        return (value === false ? 'none' : 'flex');
    },
});
exports.spacing = (0, typeHelpers_1.getKeys)(spacingProperties).map(function (property) {
    return (0, createRestyleFunction_1.default)({
        property: property,
        themeKey: 'spacing',
    });
});
exports.spacingShorthand = (0, typeHelpers_1.getKeys)(spacingPropertiesShorthand).map(function (property) {
    var styleProperty = spacingPropertiesShorthand[property];
    return (0, createRestyleFunction_1.default)({
        property: property,
        styleProperty: styleProperty,
        themeKey: 'spacing',
    });
});
exports.typography = (0, typeHelpers_1.getKeys)(typographyProperties).map(function (property) {
    return (0, createRestyleFunction_1.default)({
        property: property,
    });
});
exports.width = (0, typeHelpers_1.getKeys)(widthProperties).map(function (property) {
    return (0, createRestyleFunction_1.default)({
        property: property,
    });
});
exports.height = (0, typeHelpers_1.getKeys)(heightProperties).map(function (property) {
    return (0, createRestyleFunction_1.default)({
        property: property,
    });
});
exports.layout = (0, typeHelpers_1.getKeys)(layoutProperties).map(function (property) {
    return (0, createRestyleFunction_1.default)({
        property: property,
    });
});
exports.position = __spreadArray(__spreadArray([], (0, typeHelpers_1.getKeys)(positionProperties).map(function (property) {
    return (0, createRestyleFunction_1.default)({
        property: property,
    });
}), true), [
    (0, createRestyleFunction_1.default)({
        property: 'zIndex',
        themeKey: 'zIndices',
    }),
], false);
exports.border = __spreadArray(__spreadArray(__spreadArray([], (0, typeHelpers_1.getKeys)(borderProperties).map(function (property) {
    return (0, createRestyleFunction_1.default)({
        property: property,
    });
}), true), (0, typeHelpers_1.getKeys)(borderColorProperties).map(function (property) {
    return (0, createRestyleFunction_1.default)({
        property: property,
        themeKey: 'colors',
    });
}), true), (0, typeHelpers_1.getKeys)(borderRadiusProperties).map(function (property) {
    return (0, createRestyleFunction_1.default)({
        property: property,
        themeKey: 'borderRadii',
    });
}), true);
exports.shadow = __spreadArray(__spreadArray([], (0, typeHelpers_1.getKeys)(shadowProperties).map(function (property) {
    return (0, createRestyleFunction_1.default)({
        property: property,
    });
}), true), [
    (0, createRestyleFunction_1.default)({
        property: 'shadowColor',
        themeKey: 'colors',
    }),
], false);
exports.textShadow = __spreadArray(__spreadArray([], (0, typeHelpers_1.getKeys)(textShadowProperties).map(function (property) {
    return (0, createRestyleFunction_1.default)({
        property: property,
    });
}), true), [
    (0, createRestyleFunction_1.default)({
        property: 'textShadowColor',
        themeKey: 'colors',
    }),
], false);
exports.all = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([
    exports.color,
    exports.opacity,
    exports.backgroundColor,
    exports.backgroundColorShorthand
], exports.spacing, true), exports.spacingShorthand, true), exports.typography, true), exports.width, true), exports.height, true), exports.layout, true), exports.position, true), exports.border, true), exports.shadow, true), exports.textShadow, true);
