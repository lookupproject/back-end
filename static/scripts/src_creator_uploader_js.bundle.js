"use strict";
(self["webpackChunkfront_end"] = self["webpackChunkfront_end"] || []).push([["src_creator_uploader_js"],{

/***/ "./src/creator/textInput.js":
/*!**********************************!*\
  !*** ./src/creator/textInput.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");


var CustomTextField = (0,_mui_material_styles_styled__WEBPACK_IMPORTED_MODULE_0__["default"])(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__["default"])({
  '& label.Mui-focused': {
    color: 'white'
  },
  '&:hover label': {
    color: 'white'
  },
  '& label': {
    color: '#14B4C3'
  },
  'input': {
    color: 'white'
  },
  '& .MuiInputBase-input': {
    color: 'white'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#14B4C3'
    },
    '&:hover fieldset': {
      borderColor: '#fff'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff'
    }
  },
  marginBottom: "10px"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomTextField);

/***/ }),

/***/ "./src/creator/uploader.js":
/*!*********************************!*\
  !*** ./src/creator/uploader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Uploader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _textInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textInput */ "./src/creator/textInput.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var SpeedDial = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_mui_material_SpeedDialAction_SpeedDialAction_js-node_modules_mui_materia-89e7ad"), __webpack_require__.e("src_creator_speedDial_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./speedDial */ "./src/creator/speedDial.js"));
});
function DeleteButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    id: "btn-delete",
    onClick: function onClick() {
      props.setChecked(false);
      props.empty();
      console.log("Clicked close");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "20",
    width: "20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6.5 17q-.625 0-1.062-.438Q5 16.125 5 15.5v-10H4V4h4V3h4v1h4v1.5h-1v10q0 .625-.438 1.062Q14.125 17 13.5 17ZM8 14h1.5V7H8Zm2.5 0H12V7h-1.5Z"
  })));
}
function Text(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    text = _useState2[0],
    setText = _useState2[1];
  function add() {
    if (text !== '') {
      props.add({
        text: text,
        id: Date.now(),
        type: "Text"
      });
      empty();
    }
  }
  function empty() {
    setText("");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "supplier",
    className: "round-border blue-border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteButton, {
    setChecked: props.setChecked,
    empty: empty
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_textInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    multiline: true,
    maxRows: 4,
    fullWidth: true,
    label: "Type here",
    value: text,
    onChange: function onChange(e) {
      return setText(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    onClick: function onClick() {
      return add();
    }
  }, "Add"));
}
function Question(props) {
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    question = _useState4[0],
    setQuestion = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    answer = _useState6[0],
    setAnswer = _useState6[1];
  function add() {
    if (question !== "" && answer !== "") {
      props.add({
        question: question,
        answer: answer,
        id: Date.now(),
        type: "Question"
      });
      empty();
    }
  }
  function empty() {
    setQuestion("");
    setAnswer("");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "supplier",
    className: "round-border blue-border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteButton, {
    setChecked: props.setChecked,
    empty: empty
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Question"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_textInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    multiline: true,
    maxRows: 4,
    fullWidth: true,
    label: "Type your question here",
    value: question,
    onChange: function onChange(e) {
      return setQuestion(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_textInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    multiline: true,
    maxRows: 4,
    fullWidth: true,
    label: "Type the answer",
    value: answer,
    onChange: function onChange(e) {
      return setAnswer(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      width: "auto",
      marginBottom: 2
    },
    variant: "contained",
    onClick: function onClick() {
      return add();
    }
  }, "Create"));
}
function Image(props) {
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    name = _useState8[0],
    setName = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState10 = _slicedToArray(_useState9, 2),
    file = _useState10[0],
    setFile = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState12 = _slicedToArray(_useState11, 2),
    b64 = _useState12[0],
    setb64 = _useState12[1];
  function FileToB64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setb64(reader.result.split(',')[1]);
    };
  }
  function add() {
    if (name !== "" && file !== null) {
      props.add({
        name: name,
        file: b64,
        id: Date.now(),
        type: "Image"
      });
      empty();
    }
  }
  function empty() {
    setName("");
    setFile(null);
    setb64(null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "supplier",
    className: "round-border blue-border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteButton, {
    setChecked: props.setChecked,
    empty: empty
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_textInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      width: "75%",
      marginBottom: "0"
    },
    multiline: true,
    maxRows: 4,
    fullWidth: true,
    label: "Type the name of the image",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    component: "label",
    sx: {
      width: "23%"
    }
  }, "Upload", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    hidden: true,
    type: "file",
    accept: "img/jpeg img/png",
    onInput: function onInput(e) {
      setFile(e.target.files[0]);
      FileToB64(e.target.files[0]);
      e.target.value = null;
    }
  }))), file ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "img-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "img-preview",
    src: URL.createObjectURL(file)
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    sx: {
      width: "auto",
      marginBottom: 2
    },
    onClick: function onClick() {
      return add();
    }
  }, "Add"));
}
function Video(props) {
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    name = _useState14[0],
    setName = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    url = _useState16[0],
    setUrl = _useState16[1];
  function empty() {
    setName("");
    setUrl("");
  }
  function add() {
    if (name !== "" && getId(url) !== null) {
      props.add({
        name: name,
        youtubeId: getId(url),
        id: Date.now(),
        type: "Video"
      });
      empty();
    }
  }
  function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "supplier",
    className: "round-border blue-border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteButton, {
    setChecked: props.setChecked,
    empty: empty
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Video"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_textInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    multiline: true,
    maxRows: 4,
    fullWidth: true,
    label: "Video name",
    name: "videoName",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_textInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    multiline: true,
    maxRows: 4,
    fullWidth: true,
    label: "Youtube Url",
    name: "videoUrl",
    placeholder: "Url such as https://youtu.be/...",
    value: url,
    onChange: function onChange(e) {
      return setUrl(e.target.value);
    }
  }), getId(url) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
    src: "https://www.youtube.com/embed/" + getId(url),
    style: {
      border: "none",
      margin: "10px",
      borderRadius: "5px"
    },
    title: "Video preview"
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    onClick: function onClick() {
      return add();
    }
  }, "Add"));
}
function Uploader(props) {
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    type = _useState18[0],
    setType = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    checked = _useState20[0],
    setChecked = _useState20[1];
  function add(item) {
    props.setItems([].concat(_toConsumableArray(props.items), [item]));
    setChecked(false);
    props.setVersion(props.version + 1);
  }
  function getType() {
    switch (type) {
      case "Text":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, {
          setChecked: setChecked,
          add: add
        });
      case "Question":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Question, {
          setChecked: setChecked,
          add: add
        });
      case "Image":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image, {
          setChecked: setChecked,
          add: add
        });
      case "Video":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Video, {
          setChecked: setChecked,
          add: add
        });
      default:
        return;
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: "100%",
      height: "fit-content"
    }
  }, checked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper"
  }, getType()) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SpeedDial, {
    setType: setType,
    setChecked: setChecked
  })));
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLO1VBQUMsVUFBVSxFQUFFUCxVQUFXO1VBQUMsR0FBRyxFQUFFTztRQUFJLEVBQUc7TUFDdEQsS0FBSyxPQUFPO1FBQ1Isb0JBQU8sMkRBQUMsS0FBSztVQUFDLFVBQVUsRUFBRVAsVUFBVztVQUFDLEdBQUcsRUFBRU87UUFBSSxFQUFHO01BQ3REO1FBQ0k7SUFBTztFQUVuQjtFQUVBLG9CQUNJO0lBQUssS0FBSyxFQUFFO01BQUNhLEtBQUssRUFBRSxNQUFNO01BQUVzQyxNQUFNLEVBQUU7SUFBYTtFQUFFLEdBQzlDUCxPQUFPLGdCQUNKO0lBQUssU0FBUyxFQUFDO0VBQVMsR0FDbkJNLE9BQU8sRUFBRSxDQUNSLEdBQ0osSUFBSSxlQUVWLDJEQUFDLDJDQUFRLHFCQUNMLDJEQUFDLFNBQVM7SUFBQyxPQUFPLEVBQUVQLE9BQVE7SUFBQyxVQUFVLEVBQUVsRDtFQUFXLEVBQUcsQ0FDaEQsQ0FDVDtBQUVkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtZW5kLy4vc3JjL2NyZWF0b3IvdGV4dElucHV0LmpzIiwid2VicGFjazovL2Zyb250LWVuZC8uL3NyYy9jcmVhdG9yL3VwbG9hZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzL3N0eWxlZFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xyXG5cclxuY29uc3QgQ3VzdG9tVGV4dEZpZWxkID0gc3R5bGVkKFRleHRGaWVsZCkoe1xyXG5cdCcmIGxhYmVsLk11aS1mb2N1c2VkJzoge1xyXG5cdCAgY29sb3I6ICd3aGl0ZScsXHJcblx0fSxcclxuXHQnJjpob3ZlciBsYWJlbCc6IHtcclxuXHRcdGNvbG9yOiAnd2hpdGUnXHJcblx0fSxcclxuXHQnJiBsYWJlbCc6IHtcclxuXHQgIGNvbG9yOiAnIzE0QjRDMycsXHJcblx0fSxcclxuXHQnaW5wdXQnOiB7XHJcblx0ICBjb2xvcjogJ3doaXRlJyxcclxuXHR9LFxyXG4gICAgJyYgLk11aUlucHV0QmFzZS1pbnB1dCc6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJ1xyXG4gICAgfSxcclxuXHQnJiAuTXVpT3V0bGluZWRJbnB1dC1yb290Jzoge1xyXG5cdCAgJyYgZmllbGRzZXQnOiB7XHJcblx0XHRib3JkZXJDb2xvcjogJyMxNEI0QzMnLFxyXG5cdCAgfSxcclxuXHQgICcmOmhvdmVyIGZpZWxkc2V0Jzoge1xyXG5cdFx0Ym9yZGVyQ29sb3I6ICcjZmZmJyxcclxuXHQgIH0sXHJcblx0ICAnJi5NdWktZm9jdXNlZCBmaWVsZHNldCc6IHtcclxuXHRcdGJvcmRlckNvbG9yOiAnI2ZmZicsXHJcblx0ICB9LFxyXG5cdH0sXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tVGV4dEZpZWxkOyIsImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XHJcbmltcG9ydCBHcm93IGZyb20gXCJAbXVpL21hdGVyaWFsL0dyb3dcIjtcclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tIFwiLi90ZXh0SW5wdXRcIjtcclxuXHJcbmNvbnN0IFNwZWVkRGlhbCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL3NwZWVkRGlhbCcpKTtcclxuXHJcbmZ1bmN0aW9uIERlbGV0ZUJ1dHRvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLWRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IHtwcm9wcy5zZXRDaGVja2VkKGZhbHNlKTsgcHJvcHMuZW1wdHkoKTsgY29uc29sZS5sb2coXCJDbGlja2VkIGNsb3NlXCIpfX0+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjIwXCIgd2lkdGg9XCIyMFwiPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTYuNSAxN3EtLjYyNSAwLTEuMDYyLS40MzhRNSAxNi4xMjUgNSAxNS41di0xMEg0VjRoNFYzaDR2MWg0djEuNWgtMXYxMHEwIC42MjUtLjQzOCAxLjA2MlExNC4xMjUgMTcgMTMuNSAxN1pNOCAxNGgxLjVWN0g4Wm0yLjUgMEgxMlY3aC0xLjVaXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBUZXh0KHByb3BzKSB7XHJcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGQoKSB7XHJcbiAgICAgICAgaWYgKHRleHQgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmFkZCh7IHRleHQ6IHRleHQsIGlkOiBEYXRlLm5vdygpLCB0eXBlOiBcIlRleHRcIiB9KTtcclxuICAgICAgICAgICAgZW1wdHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XHJcbiAgICAgICAgc2V0VGV4dChcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJzdXBwbGllclwiIGNsYXNzTmFtZT1cInJvdW5kLWJvcmRlciBibHVlLWJvcmRlclwiPlxyXG4gICAgICAgICAgICA8RGVsZXRlQnV0dG9uIHNldENoZWNrZWQ9e3Byb3BzLnNldENoZWNrZWR9IGVtcHR5PXtlbXB0eX0gLz5cclxuICAgICAgICAgICAgPGgzPlRleHQ8L2gzPlxyXG4gICAgICAgICAgICA8VGV4dElucHV0IFxyXG4gICAgICAgICAgICAgICAgbXVsdGlsaW5lIFxyXG4gICAgICAgICAgICAgICAgbWF4Um93cz17NH0gXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGggXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlR5cGUgaGVyZVwiIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RleHR9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17KCkgPT4gYWRkKCl9PkFkZDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUXVlc3Rpb24ocHJvcHMpIHtcclxuICAgIGNvbnN0IFtxdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkKCkge1xyXG4gICAgICAgIGlmIChxdWVzdGlvbiAhPT0gXCJcIiAmJiBhbnN3ZXIgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkKHsgcXVlc3Rpb246IHF1ZXN0aW9uLCBhbnN3ZXI6IGFuc3dlciwgaWQ6IERhdGUubm93KCksIHR5cGU6IFwiUXVlc3Rpb25cIiB9KTtcclxuICAgICAgICAgICAgZW1wdHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XHJcbiAgICAgICAgc2V0UXVlc3Rpb24oXCJcIik7XHJcbiAgICAgICAgc2V0QW5zd2VyKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInN1cHBsaWVyXCIgY2xhc3NOYW1lPVwicm91bmQtYm9yZGVyIGJsdWUtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxEZWxldGVCdXR0b24gc2V0Q2hlY2tlZD17cHJvcHMuc2V0Q2hlY2tlZH0gZW1wdHk9e2VtcHR5fSAvPlxyXG4gICAgICAgICAgICA8aDM+UXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICA8VGV4dElucHV0IFxyXG4gICAgICAgICAgICAgICAgbXVsdGlsaW5lIFxyXG4gICAgICAgICAgICAgICAgbWF4Um93cz17NH0gXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGggXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlR5cGUgeW91ciBxdWVzdGlvbiBoZXJlXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cXVlc3Rpb259IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVzdGlvbihlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDxUZXh0SW5wdXQgXHJcbiAgICAgICAgICAgICAgICBtdWx0aWxpbmUgXHJcbiAgICAgICAgICAgICAgICBtYXhSb3dzPXs0fSBcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aCBcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSB0aGUgYW5zd2VyXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VyfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW5zd2VyKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHN4PXt7d2lkdGg6IFwiYXV0b1wiLCBtYXJnaW5Cb3R0b206IDJ9fSB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17KCkgPT4gYWRkKCl9ID5DcmVhdGU8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEltYWdlKHByb3BzKSB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbYjY0LCBzZXRiNjRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBGaWxlVG9CNjQoZmlsZSkge1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtzZXRiNjQocmVhZGVyLnJlc3VsdC5zcGxpdCgnLCcpWzFdKX07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkKCkge1xyXG4gICAgICAgIGlmIChuYW1lICE9PSBcIlwiICYmIGZpbGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkKHsgbmFtZTogbmFtZSwgZmlsZTogYjY0LCBpZDogRGF0ZS5ub3coKSwgdHlwZTogXCJJbWFnZVwiIH0pO1xyXG4gICAgICAgICAgICBlbXB0eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcclxuICAgICAgICBzZXROYW1lKFwiXCIpO1xyXG4gICAgICAgIHNldEZpbGUobnVsbCk7XHJcbiAgICAgICAgc2V0YjY0KG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInN1cHBsaWVyXCIgY2xhc3NOYW1lPVwicm91bmQtYm9yZGVyIGJsdWUtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxEZWxldGVCdXR0b24gc2V0Q2hlY2tlZD17cHJvcHMuc2V0Q2hlY2tlZH0gZW1wdHk9e2VtcHR5fSAvPlxyXG4gICAgICAgICAgICA8aDM+SW1hZ2U8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8VGV4dElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7d2lkdGg6IFwiNzUlXCIsIG1hcmdpbkJvdHRvbTogXCIwXCJ9fSBcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4Um93cz17NH0gXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoIFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSB0aGUgbmFtZSBvZiB0aGUgaW1hZ2VcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29tcG9uZW50PVwibGFiZWxcIiBzeD17e3dpZHRoOiBcIjIzJVwifX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWcvanBlZyBpbWcvcG5nXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhlKSA9PiB7c2V0RmlsZShlLnRhcmdldC5maWxlc1swXSk7IEZpbGVUb0I2NChlLnRhcmdldC5maWxlc1swXSk7IGUudGFyZ2V0LnZhbHVlPW51bGx9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZmlsZSA/IDxkaXYgY2xhc3NOYW1lPVwiaW1nLXdyYXBwZXJcIj48aW1nIGNsYXNzTmFtZT1cImltZy1wcmV2aWV3XCIgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpfSAvPjwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN4PXt7d2lkdGg6IFwiYXV0b1wiLCBtYXJnaW5Cb3R0b206IDJ9fSBvbkNsaWNrPXsoKSA9PiBhZGQoKX0gPkFkZDwvQnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFZpZGVvKHByb3BzKSB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcclxuICAgICAgICBzZXROYW1lKFwiXCIpO1xyXG4gICAgICAgIHNldFVybChcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGQoKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgIT09IFwiXCIgJiYgZ2V0SWQodXJsKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwcm9wcy5hZGQoeyBuYW1lOiBuYW1lLCB5b3V0dWJlSWQ6IGdldElkKHVybCksIGlkOiBEYXRlLm5vdygpLCB0eXBlOiBcIlZpZGVvXCIgfSk7XHJcbiAgICAgICAgICAgIGVtcHR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldElkKHVybCkge1xyXG4gICAgICAgIGNvbnN0IHJlZ0V4cCA9IC9eLiooeW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18JnY9KShbXiMmP10qKS4qLztcclxuICAgICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaChyZWdFeHApO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIChtYXRjaCAmJiBtYXRjaFsyXS5sZW5ndGggPT09IDExKVxyXG4gICAgICAgICAgPyBtYXRjaFsyXVxyXG4gICAgICAgICAgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInN1cHBsaWVyXCIgY2xhc3NOYW1lPVwicm91bmQtYm9yZGVyIGJsdWUtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxEZWxldGVCdXR0b24gc2V0Q2hlY2tlZD17cHJvcHMuc2V0Q2hlY2tlZH0gZW1wdHk9e2VtcHR5fSAvPlxyXG4gICAgICAgICAgICA8aDM+VmlkZW88L2gzPlxyXG4gICAgICAgICAgICA8VGV4dElucHV0IFxyXG4gICAgICAgICAgICAgICAgbXVsdGlsaW5lIFxyXG4gICAgICAgICAgICAgICAgbWF4Um93cz17NH0gXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGggXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlZpZGVvIG5hbWVcIiBcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWRlb05hbWVcIiBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgPFRleHRJbnB1dCBcclxuICAgICAgICAgICAgICAgIG11bHRpbGluZSBcclxuICAgICAgICAgICAgICAgIG1heFJvd3M9ezR9IFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoIFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJZb3V0dWJlIFVybFwiIFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInZpZGVvVXJsXCIgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVybCBzdWNoIGFzIGh0dHBzOi8veW91dHUuYmUvLi4uXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXJsfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKX0gIC8+XHJcbiAgICAgICAgICAgIHtnZXRJZCh1cmwpID8gPGlmcmFtZSBzcmM9e1wiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCIrIGdldElkKHVybCl9IHN0eWxlPXt7Ym9yZGVyOiBcIm5vbmVcIiwgbWFyZ2luOiBcIjEwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwifX0gdGl0bGU9XCJWaWRlbyBwcmV2aWV3XCI+PC9pZnJhbWU+IDogbnVsbH1cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17KCkgPT4gYWRkKCl9ID5BZGQ8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwbG9hZGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGQoaXRlbSkge1xyXG4gICAgICAgIHByb3BzLnNldEl0ZW1zKFsuLi5wcm9wcy5pdGVtcywgaXRlbV0pO1xyXG4gICAgICAgIHNldENoZWNrZWQoZmFsc2UpO1xyXG4gICAgICAgIHByb3BzLnNldFZlcnNpb24ocHJvcHMudmVyc2lvbisxKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUeXBlKCkge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiVGV4dFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IHNldENoZWNrZWQ9e3NldENoZWNrZWR9IGFkZD17YWRkfSAvPjtcclxuICAgICAgICAgICAgY2FzZSBcIlF1ZXN0aW9uXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFF1ZXN0aW9uIHNldENoZWNrZWQ9e3NldENoZWNrZWR9IGFkZD17YWRkfSAvPjtcclxuICAgICAgICAgICAgY2FzZSBcIkltYWdlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEltYWdlIHNldENoZWNrZWQ9e3NldENoZWNrZWR9IGFkZD17YWRkfSAvPjtcclxuICAgICAgICAgICAgY2FzZSBcIlZpZGVvXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFZpZGVvIHNldENoZWNrZWQ9e3NldENoZWNrZWR9IGFkZD17YWRkfSAvPjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImZpdC1jb250ZW50XCJ9fT5cclxuICAgICAgICAgICAge2NoZWNrZWQgPyBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXRUeXBlKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDogbnVsbCAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPFN1c3BlbnNlPlxyXG4gICAgICAgICAgICAgICAgPFNwZWVkRGlhbCBzZXRUeXBlPXtzZXRUeXBlfSBzZXRDaGVja2VkPXtzZXRDaGVja2VkfSAvPlxyXG4gICAgICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJzdHlsZWQiLCJUZXh0RmllbGQiLCJDdXN0b21UZXh0RmllbGQiLCJjb2xvciIsImJvcmRlckNvbG9yIiwibWFyZ2luQm90dG9tIiwiUmVhY3QiLCJTdXNwZW5zZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQnV0dG9uIiwiR3JvdyIsIlRleHRJbnB1dCIsIlNwZWVkRGlhbCIsImxhenkiLCJEZWxldGVCdXR0b24iLCJwcm9wcyIsInNldENoZWNrZWQiLCJlbXB0eSIsImNvbnNvbGUiLCJsb2ciLCJUZXh0IiwidGV4dCIsInNldFRleHQiLCJhZGQiLCJpZCIsIkRhdGUiLCJub3ciLCJ0eXBlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiUXVlc3Rpb24iLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwiYW5zd2VyIiwic2V0QW5zd2VyIiwid2lkdGgiLCJJbWFnZSIsIm5hbWUiLCJzZXROYW1lIiwiZmlsZSIsInNldEZpbGUiLCJiNjQiLCJzZXRiNjQiLCJGaWxlVG9CNjQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInNwbGl0IiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJWaWRlbyIsInVybCIsInNldFVybCIsImdldElkIiwieW91dHViZUlkIiwicmVnRXhwIiwibWF0Y2giLCJsZW5ndGgiLCJib3JkZXIiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJVcGxvYWRlciIsInNldFR5cGUiLCJjaGVja2VkIiwiaXRlbSIsInNldEl0ZW1zIiwiaXRlbXMiLCJzZXRWZXJzaW9uIiwidmVyc2lvbiIsImdldFR5cGUiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9