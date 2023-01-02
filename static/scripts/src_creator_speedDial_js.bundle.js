(self["webpackChunkfront_end"] = self["webpackChunkfront_end"] || []).push([["src_creator_speedDial_js"],{

/***/ "./src/creator/speedDial.js":
/*!**********************************!*\
  !*** ./src/creator/speedDial.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dial)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_SpeedDial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/SpeedDial */ "./node_modules/@mui/material/SpeedDial/SpeedDial.js");
/* harmony import */ var _mui_material_SpeedDialIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/SpeedDialIcon */ "./node_modules/@mui/material/SpeedDialIcon/SpeedDialIcon.js");
/* harmony import */ var _mui_material_SpeedDialAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/SpeedDialAction */ "./node_modules/@mui/material/SpeedDialAction/SpeedDialAction.js");
/* harmony import */ var svg_react_loader_name_TextIcon_text_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-react-loader?name=TextIcon!./text-icon.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=TextIcon!./src/creator/text-icon.svg");
/* harmony import */ var svg_react_loader_name_TextIcon_text_icon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_TextIcon_text_icon_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svg_react_loader_name_QuestionIcon_question_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg-react-loader?name=QuestionIcon!./question-icon.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=QuestionIcon!./src/creator/question-icon.svg");
/* harmony import */ var svg_react_loader_name_QuestionIcon_question_icon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_QuestionIcon_question_icon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var svg_react_loader_name_ImageIcon_image_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svg-react-loader?name=ImageIcon!./image-icon.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=ImageIcon!./src/creator/image-icon.svg");
/* harmony import */ var svg_react_loader_name_ImageIcon_image_icon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_ImageIcon_image_icon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var svg_react_loader_name_VideoIcon_video_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! svg-react-loader?name=VideoIcon!./video-icon.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=VideoIcon!./src/creator/video-icon.svg");
/* harmony import */ var svg_react_loader_name_VideoIcon_video_icon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_VideoIcon_video_icon_svg__WEBPACK_IMPORTED_MODULE_4__);
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var actions = [{
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((svg_react_loader_name_TextIcon_text_icon_svg__WEBPACK_IMPORTED_MODULE_1___default()), null),
  name: 'Text'
}, {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((svg_react_loader_name_QuestionIcon_question_icon_svg__WEBPACK_IMPORTED_MODULE_2___default()), null),
  name: 'Question'
}, {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((svg_react_loader_name_ImageIcon_image_icon_svg__WEBPACK_IMPORTED_MODULE_3___default()), null),
  name: 'Image'
}, {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((svg_react_loader_name_VideoIcon_video_icon_svg__WEBPACK_IMPORTED_MODULE_4___default()), null),
  name: 'Video'
}];
var CustomSpeedDialAction = (0,_mui_material_styles_styled__WEBPACK_IMPORTED_MODULE_5__["default"])(_mui_material_SpeedDialAction__WEBPACK_IMPORTED_MODULE_6__["default"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background-color: #7BAAD5;\n    fill: #fff;\n"])));
function Dial(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_SpeedDial__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ariaLabel: "Add content",
    sx: {
      position: 'absolute',
      bottom: '6%',
      right: '3%'
    },
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_SpeedDialIcon__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    color: "secondary"
  }, actions.map(function (action) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomSpeedDialAction, {
      key: action.name,
      icon: action.icon,
      tooltipTitle: action.name,
      onClick: function onClick() {
        props.setType(action.name);
        props.setChecked(true);
      }
    });
  }));
}

/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=ImageIcon!./src/creator/image-icon.svg":
/*!*************************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=ImageIcon!./src/creator/image-icon.svg ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ImageIcon (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M4.5 17q-.625 0-1.062-.448Q3 16.104 3 15.5v-11q0-.604.438-1.052Q3.875 3 4.5 3h11q.625 0 1.062.448Q17 3.896 17 4.5v11q0 .604-.438 1.052Q16.125 17 15.5 17Zm1-3h9l-3-4-2.25 3-1.5-2Z"}));
}

ImageIcon.defaultProps = {"height":"20","width":"20"};

module.exports = ImageIcon;

ImageIcon.default = ImageIcon;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=QuestionIcon!./src/creator/question-icon.svg":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=QuestionIcon!./src/creator/question-icon.svg ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function QuestionIcon (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M8.917 12.5q0-1.5.302-2.24.302-.739 1.26-1.572.896-.771 1.209-1.24Q12 6.979 12 6.396q0-.792-.562-1.302-.563-.511-1.438-.511-.771 0-1.354.48-.584.479-.834 1.312l-2-.833q.438-1.375 1.594-2.209Q8.562 2.5 10 2.5q1.854 0 3.021 1.073 1.167 1.073 1.167 2.76 0 .875-.386 1.594-.385.719-1.385 1.656-.855.792-1.052 1.261-.198.468-.219 1.656ZM10 17q-.625 0-1.062-.438Q8.5 16.125 8.5 15.5t.438-1.062Q9.375 14 10 14t1.062.438q.438.437.438 1.062t-.438 1.062Q10.625 17 10 17Z"}));
}

QuestionIcon.defaultProps = {"height":"20","width":"20"};

module.exports = QuestionIcon;

QuestionIcon.default = QuestionIcon;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=TextIcon!./src/creator/text-icon.svg":
/*!***********************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=TextIcon!./src/creator/text-icon.svg ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function TextIcon (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M4 12.5V11h12v1.5ZM4 9V7.5h12V9Z"}));
}

TextIcon.defaultProps = {"height":"20","width":"20"};

module.exports = TextIcon;

TextIcon.default = TextIcon;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=VideoIcon!./src/creator/video-icon.svg":
/*!*************************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=VideoIcon!./src/creator/video-icon.svg ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function VideoIcon (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M7 15.5v-11l8.5 5.5Z"}));
}

VideoIcon.defaultProps = {"height":"20","width":"20"};

module.exports = VideoIcon;

VideoIcon.default = VideoIcon;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NyZWF0b3Jfc3BlZWREaWFsX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN1QjtBQUNEO0FBQ1E7QUFDSTtBQUNVO0FBQ1k7QUFDVDtBQUNBO0FBRXpFLElBQU1TLE9BQU8sR0FBRyxDQUNaO0VBQUVDLElBQUksZUFBRSwyREFBQyxxRkFBUSxPQUFHO0VBQUVDLElBQUksRUFBRTtBQUFPLENBQUMsRUFDcEM7RUFBRUQsSUFBSSxlQUFFLDJEQUFDLDZGQUFZLE9BQUc7RUFBRUMsSUFBSSxFQUFFO0FBQVcsQ0FBQyxFQUM1QztFQUFFRCxJQUFJLGVBQUUsMkRBQUMsdUZBQVMsT0FBRztFQUFFQyxJQUFJLEVBQUU7QUFBUSxDQUFDLEVBQ3RDO0VBQUVELElBQUksZUFBRSwyREFBQyx1RkFBUyxPQUFHO0VBQUVDLElBQUksRUFBRTtBQUFRLENBQUMsQ0FDekM7QUFFRCxJQUFNQyxxQkFBcUIsR0FBR1gsdUVBQU0sQ0FBQ0cscUVBQWUsQ0FBQyx3SEFHcEQ7QUFFYyxTQUFTUyxJQUFJLENBQUNDLEtBQUssRUFBRTtFQUNoQyxvQkFDSSwyREFBQywrREFBUztJQUNOLFNBQVMsRUFBQyxhQUFhO0lBQ3ZCLEVBQUUsRUFBRTtNQUFFQyxRQUFRLEVBQUUsVUFBVTtNQUFFQyxNQUFNLEVBQUUsSUFBSTtNQUFFQyxLQUFLLEVBQUU7SUFBSSxDQUFFO0lBQ3ZELElBQUksZUFBRSwyREFBQyxtRUFBYSxPQUFHO0lBQ3ZCLEtBQUssRUFBQztFQUFXLEdBRXBCUixPQUFPLENBQUNTLEdBQUcsQ0FBQyxVQUFDQyxNQUFNO0lBQUEsb0JBQ1osMkRBQUMscUJBQXFCO01BQ2xCLEdBQUcsRUFBRUEsTUFBTSxDQUFDUixJQUFLO01BQ2pCLElBQUksRUFBRVEsTUFBTSxDQUFDVCxJQUFLO01BQ2xCLFlBQVksRUFBRVMsTUFBTSxDQUFDUixJQUFLO01BQzFCLE9BQU8sRUFBRSxtQkFBTTtRQUFDRyxLQUFLLENBQUNNLE9BQU8sQ0FBQ0QsTUFBTSxDQUFDUixJQUFJLENBQUM7UUFBRUcsS0FBSyxDQUFDTyxVQUFVLENBQUMsSUFBSSxDQUFDO01BQUE7SUFBRSxFQUN0RTtFQUFBLENBQ0wsQ0FBQyxDQUNNO0FBRXBCOzs7Ozs7Ozs7O0FDeENBLFlBQVksbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFM0I7QUFDQSx1RUFBdUUseUxBQXlMO0FBQ2hROztBQUVBLDBCQUEwQjs7QUFFMUI7O0FBRUE7Ozs7Ozs7Ozs7O0FDVkEsWUFBWSxtQkFBTyxDQUFDLDRDQUFPOztBQUUzQjtBQUNBLHVFQUF1RSxtZEFBbWQ7QUFDMWhCOztBQUVBLDZCQUE2Qjs7QUFFN0I7O0FBRUE7Ozs7Ozs7Ozs7O0FDVkEsWUFBWSxtQkFBTyxDQUFDLDRDQUFPOztBQUUzQjtBQUNBLHVFQUF1RSx1Q0FBdUM7QUFDOUc7O0FBRUEseUJBQXlCOztBQUV6Qjs7QUFFQTs7Ozs7Ozs7Ozs7QUNWQSxZQUFZLG1CQUFPLENBQUMsNENBQU87O0FBRTNCO0FBQ0EsdUVBQXVFLDJCQUEyQjtBQUNsRzs7QUFFQSwwQkFBMEI7O0FBRTFCOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtZW5kLy4vc3JjL2NyZWF0b3Ivc3BlZWREaWFsLmpzIiwid2VicGFjazovL2Zyb250LWVuZC8uL3NyYy9jcmVhdG9yL2ltYWdlLWljb24uc3ZnIiwid2VicGFjazovL2Zyb250LWVuZC8uL3NyYy9jcmVhdG9yL3F1ZXN0aW9uLWljb24uc3ZnIiwid2VicGFjazovL2Zyb250LWVuZC8uL3NyYy9jcmVhdG9yL3RleHQtaWNvbi5zdmciLCJ3ZWJwYWNrOi8vZnJvbnQtZW5kLy4vc3JjL2NyZWF0b3IvdmlkZW8taWNvbi5zdmciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlcy9zdHlsZWRcIjtcclxuaW1wb3J0IFNwZWVkRGlhbCBmcm9tIFwiQG11aS9tYXRlcmlhbC9TcGVlZERpYWxcIjtcclxuaW1wb3J0IFNwZWVkRGlhbEljb24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3BlZWREaWFsSWNvblwiO1xyXG5pbXBvcnQgU3BlZWREaWFsQWN0aW9uIGZyb20gXCJAbXVpL21hdGVyaWFsL1NwZWVkRGlhbEFjdGlvblwiO1xyXG5pbXBvcnQgVGV4dEljb24gZnJvbSBcInN2Zy1yZWFjdC1sb2FkZXI/bmFtZT1UZXh0SWNvbiEuL3RleHQtaWNvbi5zdmdcIjtcclxuaW1wb3J0IFF1ZXN0aW9uSWNvbiBmcm9tIFwic3ZnLXJlYWN0LWxvYWRlcj9uYW1lPVF1ZXN0aW9uSWNvbiEuL3F1ZXN0aW9uLWljb24uc3ZnXCI7XHJcbmltcG9ydCBJbWFnZUljb24gZnJvbSBcInN2Zy1yZWFjdC1sb2FkZXI/bmFtZT1JbWFnZUljb24hLi9pbWFnZS1pY29uLnN2Z1wiO1xyXG5pbXBvcnQgVmlkZW9JY29uIGZyb20gXCJzdmctcmVhY3QtbG9hZGVyP25hbWU9VmlkZW9JY29uIS4vdmlkZW8taWNvbi5zdmdcIjtcclxuXHJcbmNvbnN0IGFjdGlvbnMgPSBbXHJcbiAgICB7IGljb246IDxUZXh0SWNvbiAvPiwgbmFtZTogJ1RleHQnIH0sXHJcbiAgICB7IGljb246IDxRdWVzdGlvbkljb24gLz4sIG5hbWU6ICdRdWVzdGlvbicgfSxcclxuICAgIHsgaWNvbjogPEltYWdlSWNvbiAvPiwgbmFtZTogJ0ltYWdlJyB9LFxyXG4gICAgeyBpY29uOiA8VmlkZW9JY29uIC8+LCBuYW1lOiAnVmlkZW8nIH0sXHJcbl07XHJcblxyXG5jb25zdCBDdXN0b21TcGVlZERpYWxBY3Rpb24gPSBzdHlsZWQoU3BlZWREaWFsQWN0aW9uKWBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3QkFBRDU7XHJcbiAgICBmaWxsOiAjZmZmO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlhbChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3BlZWREaWFsXHJcbiAgICAgICAgICAgIGFyaWFMYWJlbD1cIkFkZCBjb250ZW50XCJcclxuICAgICAgICAgICAgc3g9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogJzYlJywgcmlnaHQ6ICczJSd9fVxyXG4gICAgICAgICAgICBpY29uPXs8U3BlZWREaWFsSWNvbi8+fVxyXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIHthY3Rpb25zLm1hcCgoYWN0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tU3BlZWREaWFsQWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXthY3Rpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBpY29uPXthY3Rpb24uaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGl0bGU9e2FjdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtwcm9wcy5zZXRUeXBlKGFjdGlvbi5uYW1lKTsgcHJvcHMuc2V0Q2hlY2tlZCh0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L1NwZWVkRGlhbD5cclxuICAgICk7XHJcbn0iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBJbWFnZUljb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIixwcm9wcyxSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImRcIjpcIk00LjUgMTdxLS42MjUgMC0xLjA2Mi0uNDQ4UTMgMTYuMTA0IDMgMTUuNXYtMTFxMC0uNjA0LjQzOC0xLjA1MlEzLjg3NSAzIDQuNSAzaDExcS42MjUgMCAxLjA2Mi40NDhRMTcgMy44OTYgMTcgNC41djExcTAgLjYwNC0uNDM4IDEuMDUyUTE2LjEyNSAxNyAxNS41IDE3Wm0xLTNoOWwtMy00LTIuMjUgMy0xLjUtMlpcIn0pKTtcbn1cblxuSW1hZ2VJY29uLmRlZmF1bHRQcm9wcyA9IHtcImhlaWdodFwiOlwiMjBcIixcIndpZHRoXCI6XCIyMFwifTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbWFnZUljb247XG5cbkltYWdlSWNvbi5kZWZhdWx0ID0gSW1hZ2VJY29uO1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gUXVlc3Rpb25JY29uIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIscHJvcHMsUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7XCJkXCI6XCJNOC45MTcgMTIuNXEwLTEuNS4zMDItMi4yNC4zMDItLjczOSAxLjI2LTEuNTcyLjg5Ni0uNzcxIDEuMjA5LTEuMjRRMTIgNi45NzkgMTIgNi4zOTZxMC0uNzkyLS41NjItMS4zMDItLjU2My0uNTExLTEuNDM4LS41MTEtLjc3MSAwLTEuMzU0LjQ4LS41ODQuNDc5LS44MzQgMS4zMTJsLTItLjgzM3EuNDM4LTEuMzc1IDEuNTk0LTIuMjA5UTguNTYyIDIuNSAxMCAyLjVxMS44NTQgMCAzLjAyMSAxLjA3MyAxLjE2NyAxLjA3MyAxLjE2NyAyLjc2IDAgLjg3NS0uMzg2IDEuNTk0LS4zODUuNzE5LTEuMzg1IDEuNjU2LS44NTUuNzkyLTEuMDUyIDEuMjYxLS4xOTguNDY4LS4yMTkgMS42NTZaTTEwIDE3cS0uNjI1IDAtMS4wNjItLjQzOFE4LjUgMTYuMTI1IDguNSAxNS41dC40MzgtMS4wNjJROS4zNzUgMTQgMTAgMTR0MS4wNjIuNDM4cS40MzguNDM3LjQzOCAxLjA2MnQtLjQzOCAxLjA2MlExMC42MjUgMTcgMTAgMTdaXCJ9KSk7XG59XG5cblF1ZXN0aW9uSWNvbi5kZWZhdWx0UHJvcHMgPSB7XCJoZWlnaHRcIjpcIjIwXCIsXCJ3aWR0aFwiOlwiMjBcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlc3Rpb25JY29uO1xuXG5RdWVzdGlvbkljb24uZGVmYXVsdCA9IFF1ZXN0aW9uSWNvbjtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIFRleHRJY29uIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIscHJvcHMsUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7XCJkXCI6XCJNNCAxMi41VjExaDEydjEuNVpNNCA5VjcuNWgxMlY5WlwifSkpO1xufVxuXG5UZXh0SWNvbi5kZWZhdWx0UHJvcHMgPSB7XCJoZWlnaHRcIjpcIjIwXCIsXCJ3aWR0aFwiOlwiMjBcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dEljb247XG5cblRleHRJY29uLmRlZmF1bHQgPSBUZXh0SWNvbjtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIFZpZGVvSWNvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHByb3BzLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZFwiOlwiTTcgMTUuNXYtMTFsOC41IDUuNVpcIn0pKTtcbn1cblxuVmlkZW9JY29uLmRlZmF1bHRQcm9wcyA9IHtcImhlaWdodFwiOlwiMjBcIixcIndpZHRoXCI6XCIyMFwifTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWRlb0ljb247XG5cblZpZGVvSWNvbi5kZWZhdWx0ID0gVmlkZW9JY29uO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiU3BlZWREaWFsIiwiU3BlZWREaWFsSWNvbiIsIlNwZWVkRGlhbEFjdGlvbiIsIlRleHRJY29uIiwiUXVlc3Rpb25JY29uIiwiSW1hZ2VJY29uIiwiVmlkZW9JY29uIiwiYWN0aW9ucyIsImljb24iLCJuYW1lIiwiQ3VzdG9tU3BlZWREaWFsQWN0aW9uIiwiRGlhbCIsInByb3BzIiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsIm1hcCIsImFjdGlvbiIsInNldFR5cGUiLCJzZXRDaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==