"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Icons_1 = require("./Icons");
var SelectBackground = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    left: 0;\n    top: 0;\n    background: transparent;\n"], ["\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    left: 0;\n    top: 0;\n    background: transparent;\n"])));
var SelectBox = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 100%;\n    position: relative;\n"], ["\n    width: 100%;\n    position: relative;\n"])));
var SelectHeader = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  height: 30px;\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 0.5rem;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  outline: none;\n  font-size: 14px;\n  cursor: pointer;\n  overflow: hidden;\n\n  &:hover {\n    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n    border: 1px solid #10a9ff;\n  }\n"], ["\n  width: 100%;\n  height: 30px;\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 0.5rem;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  outline: none;\n  font-size: 14px;\n  cursor: pointer;\n  overflow: hidden;\n\n  &:hover {\n    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n    border: 1px solid #10a9ff;\n  }\n"])));
var SelectValue = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  color: #333;\n"], ["\n  width: 100%;\n  height: 100%;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  color: #333;\n"])));
var ArrowBox = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &.up-arrow {\n    transform: rotate( 0deg )\n  }\n\n  &.down-arrow {\n    transform: rotate( 180deg )\n  }\n\n  transition: transform 200ms ease;\n"], ["\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &.up-arrow {\n    transform: rotate( 0deg )\n  }\n\n  &.down-arrow {\n    transform: rotate( 180deg )\n  }\n\n  transition: transform 200ms ease;\n"])));
var SelectBody = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  max-height: 200px;\n  background: #fff;\n  z-index: 101;\n  font-size: 14px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  position: absolute;\n  top: 32px;\n  overflow-y: auto;\n  box-sizing: border-box;\n\n  &.hide-body {\n    display: none;\n  }\n\n  &::-webkit-scrollbar {\n    width: 5px;\n    background-color: #eee;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #999;\n    border-radius: 20px;\n  }\n"], ["\n  width: 100%;\n  max-height: 200px;\n  background: #fff;\n  z-index: 101;\n  font-size: 14px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  position: absolute;\n  top: 32px;\n  overflow-y: auto;\n  box-sizing: border-box;\n\n  &.hide-body {\n    display: none;\n  }\n\n  &::-webkit-scrollbar {\n    width: 5px;\n    background-color: #eee;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #999;\n    border-radius: 20px;\n  }\n"])));
var SelectOption = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 100%;\n  height: 30px;\n  box-sizing: border-box;\n  line-height: 30px;\n  padding-left: 0.5rem;\n  color: #333;\n  cursor: pointer;\n  \n  &:hover {\n    background: #e6f7ff;\n  }\n"], ["\n  width: 100%;\n  height: 30px;\n  box-sizing: border-box;\n  line-height: 30px;\n  padding-left: 0.5rem;\n  color: #333;\n  cursor: pointer;\n  \n  &:hover {\n    background: #e6f7ff;\n  }\n"])));
exports.Select = function (_a) {
    var _b = _a.optionList, optionList = _b === void 0 ? [] : _b, value = _a.value, onChange = _a.onChange;
    var _c = react_1.useState(false), isArrowUp = _c[0], setIsArrowUp = _c[1];
    var _d = react_1.useState(false), isBodyShow = _d[0], setIsBodyShow = _d[1];
    var _e = react_1.useState(true), isBgShow = _e[0], setIsBgShow = _e[1];
    var _f = react_1.useState(value), selectValue = _f[0], setSelectValue = _f[1];
    react_1.useEffect(function () {
        setSelectValue(value);
    }, [value]);
    var handleClickOption = function (optionValue) {
        setSelectValue(optionValue);
        hideSelectBody();
        onChange(optionValue);
    };
    var hideSelectBody = function () {
        setIsBodyShow(!isBodyShow);
        setIsArrowUp(false);
        setIsBodyShow(false);
        setIsBgShow(false);
    };
    var showSelectBody = function () {
        setIsBodyShow(!isBodyShow);
        setIsArrowUp(true);
        setIsBodyShow(true);
        setIsBgShow(true);
    };
    return (React.createElement(SelectBox, null,
        isBgShow ? React.createElement(SelectBackground, { onClick: function () { hideSelectBody(); } }) : "",
        React.createElement(SelectHeader, { onClick: function () { showSelectBody(); } },
            React.createElement(SelectValue, null, selectValue),
            React.createElement(ArrowBox, { className: isArrowUp ? "up-arrow" : "down-arrow" },
                React.createElement(Icons_1.ArrowIcon, { width: 20, height: 20 }))),
        React.createElement(SelectBody, { className: isBodyShow ? "" : "hide-body" }, optionList.map(function (option) { return React.createElement(SelectOption, { key: option.rGuid, onClick: function () { handleClickOption(option.rName); } }, option.rName); }))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=Select.js.map