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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
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
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    type = _useState8[0],
    setType = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/api/classifier', {
      prompt: question
    }).then(function (res) {
      return setType(res.data.type);
    });
  }, [question]);
  function add() {
    if (question !== "" && answer !== "" && type !== "") {
      props.add({
        question: question,
        answer: answer,
        id: Date.now(),
        type: "Question",
        questionType: type
      });
      empty();
    }
  }
  function empty() {
    setQuestion("");
    setAnswer("");
    setType("");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "supplier",
    className: "round-border blue-border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteButton, {
    setChecked: props.setChecked,
    empty: empty
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Question"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, type)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_textInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState9, 2),
    name = _useState10[0],
    setName = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState12 = _slicedToArray(_useState11, 2),
    file = _useState12[0],
    setFile = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState14 = _slicedToArray(_useState13, 2),
    b64 = _useState14[0],
    setb64 = _useState14[1];
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
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    name = _useState16[0],
    setName = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    url = _useState18[0],
    setUrl = _useState18[1];
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
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    type = _useState20[0],
    setType = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    checked = _useState22[0],
    setChecked = _useState22[1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vZnJvbnQtZW5kLy4vc3JjL2NyZWF0b3IvdGV4dElucHV0LmpzIiwid2VicGFjazovL2Zyb250LWVuZC8uL3NyYy9jcmVhdG9yL3VwbG9hZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzL3N0eWxlZFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xyXG5cclxuY29uc3QgQ3VzdG9tVGV4dEZpZWxkID0gc3R5bGVkKFRleHRGaWVsZCkoe1xyXG5cdCcmIGxhYmVsLk11aS1mb2N1c2VkJzoge1xyXG5cdCAgY29sb3I6ICd3aGl0ZScsXHJcblx0fSxcclxuXHQnJjpob3ZlciBsYWJlbCc6IHtcclxuXHRcdGNvbG9yOiAnd2hpdGUnXHJcblx0fSxcclxuXHQnJiBsYWJlbCc6IHtcclxuXHQgIGNvbG9yOiAnIzE0QjRDMycsXHJcblx0fSxcclxuXHQnaW5wdXQnOiB7XHJcblx0ICBjb2xvcjogJ3doaXRlJyxcclxuXHR9LFxyXG4gICAgJyYgLk11aUlucHV0QmFzZS1pbnB1dCc6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJ1xyXG4gICAgfSxcclxuXHQnJiAuTXVpT3V0bGluZWRJbnB1dC1yb290Jzoge1xyXG5cdCAgJyYgZmllbGRzZXQnOiB7XHJcblx0XHRib3JkZXJDb2xvcjogJyMxNEI0QzMnLFxyXG5cdCAgfSxcclxuXHQgICcmOmhvdmVyIGZpZWxkc2V0Jzoge1xyXG5cdFx0Ym9yZGVyQ29sb3I6ICcjZmZmJyxcclxuXHQgIH0sXHJcblx0ICAnJi5NdWktZm9jdXNlZCBmaWVsZHNldCc6IHtcclxuXHRcdGJvcmRlckNvbG9yOiAnI2ZmZicsXHJcblx0ICB9LFxyXG5cdH0sXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tVGV4dEZpZWxkOyIsImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XHJcbmltcG9ydCBHcm93IGZyb20gXCJAbXVpL21hdGVyaWFsL0dyb3dcIjtcclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tIFwiLi90ZXh0SW5wdXRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgU3BlZWREaWFsID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vc3BlZWREaWFsJykpO1xyXG5cclxuZnVuY3Rpb24gRGVsZXRlQnV0dG9uKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tZGVsZXRlXCIgb25DbGljaz17KCkgPT4ge3Byb3BzLnNldENoZWNrZWQoZmFsc2UpOyBwcm9wcy5lbXB0eSgpOyBjb25zb2xlLmxvZyhcIkNsaWNrZWQgY2xvc2VcIil9fT5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjBcIiB3aWR0aD1cIjIwXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNi41IDE3cS0uNjI1IDAtMS4wNjItLjQzOFE1IDE2LjEyNSA1IDE1LjV2LTEwSDRWNGg0VjNoNHYxaDR2MS41aC0xdjEwcTAgLjYyNS0uNDM4IDEuMDYyUTE0LjEyNSAxNyAxMy41IDE3Wk04IDE0aDEuNVY3SDhabTIuNSAwSDEyVjdoLTEuNVpcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFRleHQocHJvcHMpIHtcclxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZCgpIHtcclxuICAgICAgICBpZiAodGV4dCAhPT0gJycpIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkKHsgdGV4dDogdGV4dCwgaWQ6IERhdGUubm93KCksIHR5cGU6IFwiVGV4dFwiIH0pO1xyXG4gICAgICAgICAgICBlbXB0eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcclxuICAgICAgICBzZXRUZXh0KFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInN1cHBsaWVyXCIgY2xhc3NOYW1lPVwicm91bmQtYm9yZGVyIGJsdWUtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxEZWxldGVCdXR0b24gc2V0Q2hlY2tlZD17cHJvcHMuc2V0Q2hlY2tlZH0gZW1wdHk9e2VtcHR5fSAvPlxyXG4gICAgICAgICAgICA8aDM+VGV4dDwvaDM+XHJcbiAgICAgICAgICAgIDxUZXh0SW5wdXQgXHJcbiAgICAgICAgICAgICAgICBtdWx0aWxpbmUgXHJcbiAgICAgICAgICAgICAgICBtYXhSb3dzPXs0fSBcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aCBcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBoZXJlXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dH0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXsoKSA9PiBhZGQoKX0+QWRkPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBRdWVzdGlvbihwcm9wcykge1xyXG4gICAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9jbGFzc2lmaWVyJywgeyBwcm9tcHQ6IHF1ZXN0aW9uIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHNldFR5cGUocmVzLmRhdGEudHlwZSkpO1xyXG4gICAgfSwgW3F1ZXN0aW9uXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkKCkge1xyXG4gICAgICAgIGlmIChxdWVzdGlvbiAhPT0gXCJcIiAmJiBhbnN3ZXIgIT09IFwiXCIgJiYgdHlwZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBwcm9wcy5hZGQoeyBxdWVzdGlvbjogcXVlc3Rpb24sIGFuc3dlcjogYW5zd2VyLCBpZDogRGF0ZS5ub3coKSwgdHlwZTogXCJRdWVzdGlvblwiLCBxdWVzdGlvblR5cGU6IHR5cGUgfSk7XHJcbiAgICAgICAgICAgIGVtcHR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XHJcbiAgICAgICAgc2V0UXVlc3Rpb24oXCJcIik7XHJcbiAgICAgICAgc2V0QW5zd2VyKFwiXCIpO1xyXG4gICAgICAgIHNldFR5cGUoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwic3VwcGxpZXJcIiBjbGFzc05hbWU9XCJyb3VuZC1ib3JkZXIgYmx1ZS1ib3JkZXJcIj5cclxuICAgICAgICAgICAgPERlbGV0ZUJ1dHRvbiBzZXRDaGVja2VkPXtwcm9wcy5zZXRDaGVja2VkfSBlbXB0eT17ZW1wdHl9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwifX0+XHJcbiAgICAgICAgICAgICAgICA8aDM+UXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgPGgzPnt0eXBlfTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VGV4dElucHV0IFxyXG4gICAgICAgICAgICAgICAgbXVsdGlsaW5lIFxyXG4gICAgICAgICAgICAgICAgbWF4Um93cz17NH0gXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGggXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlR5cGUgeW91ciBxdWVzdGlvbiBoZXJlXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cXVlc3Rpb259IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVzdGlvbihlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDxUZXh0SW5wdXQgXHJcbiAgICAgICAgICAgICAgICBtdWx0aWxpbmUgXHJcbiAgICAgICAgICAgICAgICBtYXhSb3dzPXs0fSBcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aCBcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSB0aGUgYW5zd2VyXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VyfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW5zd2VyKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHN4PXt7d2lkdGg6IFwiYXV0b1wiLCBtYXJnaW5Cb3R0b206IDJ9fSB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17KCkgPT4gYWRkKCl9ID5DcmVhdGU8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEltYWdlKHByb3BzKSB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbYjY0LCBzZXRiNjRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBGaWxlVG9CNjQoZmlsZSkge1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtzZXRiNjQocmVhZGVyLnJlc3VsdC5zcGxpdCgnLCcpWzFdKX07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkKCkge1xyXG4gICAgICAgIGlmIChuYW1lICE9PSBcIlwiICYmIGZpbGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkKHsgbmFtZTogbmFtZSwgZmlsZTogYjY0LCBpZDogRGF0ZS5ub3coKSwgdHlwZTogXCJJbWFnZVwiIH0pO1xyXG4gICAgICAgICAgICBlbXB0eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcclxuICAgICAgICBzZXROYW1lKFwiXCIpO1xyXG4gICAgICAgIHNldEZpbGUobnVsbCk7XHJcbiAgICAgICAgc2V0YjY0KG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInN1cHBsaWVyXCIgY2xhc3NOYW1lPVwicm91bmQtYm9yZGVyIGJsdWUtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxEZWxldGVCdXR0b24gc2V0Q2hlY2tlZD17cHJvcHMuc2V0Q2hlY2tlZH0gZW1wdHk9e2VtcHR5fSAvPlxyXG4gICAgICAgICAgICA8aDM+SW1hZ2U8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8VGV4dElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7d2lkdGg6IFwiNzUlXCIsIG1hcmdpbkJvdHRvbTogXCIwXCJ9fSBcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4Um93cz17NH0gXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoIFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSB0aGUgbmFtZSBvZiB0aGUgaW1hZ2VcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29tcG9uZW50PVwibGFiZWxcIiBzeD17e3dpZHRoOiBcIjIzJVwifX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWcvanBlZyBpbWcvcG5nXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhlKSA9PiB7c2V0RmlsZShlLnRhcmdldC5maWxlc1swXSk7IEZpbGVUb0I2NChlLnRhcmdldC5maWxlc1swXSk7IGUudGFyZ2V0LnZhbHVlPW51bGx9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZmlsZSA/IDxkaXYgY2xhc3NOYW1lPVwiaW1nLXdyYXBwZXJcIj48aW1nIGNsYXNzTmFtZT1cImltZy1wcmV2aWV3XCIgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpfSAvPjwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN4PXt7d2lkdGg6IFwiYXV0b1wiLCBtYXJnaW5Cb3R0b206IDJ9fSBvbkNsaWNrPXsoKSA9PiBhZGQoKX0gPkFkZDwvQnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFZpZGVvKHByb3BzKSB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcclxuICAgICAgICBzZXROYW1lKFwiXCIpO1xyXG4gICAgICAgIHNldFVybChcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGQoKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgIT09IFwiXCIgJiYgZ2V0SWQodXJsKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwcm9wcy5hZGQoeyBuYW1lOiBuYW1lLCB5b3V0dWJlSWQ6IGdldElkKHVybCksIGlkOiBEYXRlLm5vdygpLCB0eXBlOiBcIlZpZGVvXCIgfSk7XHJcbiAgICAgICAgICAgIGVtcHR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldElkKHVybCkge1xyXG4gICAgICAgIGNvbnN0IHJlZ0V4cCA9IC9eLiooeW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18JnY9KShbXiMmP10qKS4qLztcclxuICAgICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaChyZWdFeHApO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIChtYXRjaCAmJiBtYXRjaFsyXS5sZW5ndGggPT09IDExKVxyXG4gICAgICAgICAgPyBtYXRjaFsyXVxyXG4gICAgICAgICAgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInN1cHBsaWVyXCIgY2xhc3NOYW1lPVwicm91bmQtYm9yZGVyIGJsdWUtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxEZWxldGVCdXR0b24gc2V0Q2hlY2tlZD17cHJvcHMuc2V0Q2hlY2tlZH0gZW1wdHk9e2VtcHR5fSAvPlxyXG4gICAgICAgICAgICA8aDM+VmlkZW88L2gzPlxyXG4gICAgICAgICAgICA8VGV4dElucHV0IFxyXG4gICAgICAgICAgICAgICAgbXVsdGlsaW5lIFxyXG4gICAgICAgICAgICAgICAgbWF4Um93cz17NH0gXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGggXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlZpZGVvIG5hbWVcIiBcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWRlb05hbWVcIiBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgPFRleHRJbnB1dCBcclxuICAgICAgICAgICAgICAgIG11bHRpbGluZSBcclxuICAgICAgICAgICAgICAgIG1heFJvd3M9ezR9IFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoIFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJZb3V0dWJlIFVybFwiIFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInZpZGVvVXJsXCIgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVybCBzdWNoIGFzIGh0dHBzOi8veW91dHUuYmUvLi4uXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXJsfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKX0gIC8+XHJcbiAgICAgICAgICAgIHtnZXRJZCh1cmwpID8gPGlmcmFtZSBzcmM9e1wiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCIrIGdldElkKHVybCl9IHN0eWxlPXt7Ym9yZGVyOiBcIm5vbmVcIiwgbWFyZ2luOiBcIjEwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwifX0gdGl0bGU9XCJWaWRlbyBwcmV2aWV3XCI+PC9pZnJhbWU+IDogbnVsbH1cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17KCkgPT4gYWRkKCl9ID5BZGQ8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwbG9hZGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGQoaXRlbSkge1xyXG4gICAgICAgIHByb3BzLnNldEl0ZW1zKFsuLi5wcm9wcy5pdGVtcywgaXRlbV0pO1xyXG4gICAgICAgIHNldENoZWNrZWQoZmFsc2UpO1xyXG4gICAgICAgIHByb3BzLnNldFZlcnNpb24ocHJvcHMudmVyc2lvbisxKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUeXBlKCkge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiVGV4dFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IHNldENoZWNrZWQ9e3NldENoZWNrZWR9IGFkZD17YWRkfSAvPjtcclxuICAgICAgICAgICAgY2FzZSBcIlF1ZXN0aW9uXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFF1ZXN0aW9uIHNldENoZWNrZWQ9e3NldENoZWNrZWR9IGFkZD17YWRkfSAvPjtcclxuICAgICAgICAgICAgY2FzZSBcIkltYWdlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEltYWdlIHNldENoZWNrZWQ9e3NldENoZWNrZWR9IGFkZD17YWRkfSAvPjtcclxuICAgICAgICAgICAgY2FzZSBcIlZpZGVvXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFZpZGVvIHNldENoZWNrZWQ9e3NldENoZWNrZWR9IGFkZD17YWRkfSAvPjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImZpdC1jb250ZW50XCJ9fT5cclxuICAgICAgICAgICAge2NoZWNrZWQgPyBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXRUeXBlKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDogbnVsbCAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPFN1c3BlbnNlPlxyXG4gICAgICAgICAgICAgICAgPFNwZWVkRGlhbCBzZXRUeXBlPXtzZXRUeXBlfSBzZXRDaGVja2VkPXtzZXRDaGVja2VkfSAvPlxyXG4gICAgICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJzdHlsZWQiLCJUZXh0RmllbGQiLCJDdXN0b21UZXh0RmllbGQiLCJjb2xvciIsImJvcmRlckNvbG9yIiwibWFyZ2luQm90dG9tIiwiUmVhY3QiLCJTdXNwZW5zZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQnV0dG9uIiwiR3JvdyIsIlRleHRJbnB1dCIsImF4aW9zIiwiU3BlZWREaWFsIiwibGF6eSIsIkRlbGV0ZUJ1dHRvbiIsInByb3BzIiwic2V0Q2hlY2tlZCIsImVtcHR5IiwiY29uc29sZSIsImxvZyIsIlRleHQiLCJ0ZXh0Iiwic2V0VGV4dCIsImFkZCIsImlkIiwiRGF0ZSIsIm5vdyIsInR5cGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJRdWVzdGlvbiIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJzZXRUeXBlIiwicG9zdCIsInByb21wdCIsInRoZW4iLCJyZXMiLCJkYXRhIiwicXVlc3Rpb25UeXBlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwiSW1hZ2UiLCJuYW1lIiwic2V0TmFtZSIsImZpbGUiLCJzZXRGaWxlIiwiYjY0Iiwic2V0YjY0IiwiRmlsZVRvQjY0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJzcGxpdCIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiVmlkZW8iLCJ1cmwiLCJzZXRVcmwiLCJnZXRJZCIsInlvdXR1YmVJZCIsInJlZ0V4cCIsIm1hdGNoIiwibGVuZ3RoIiwiYm9yZGVyIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiVXBsb2FkZXIiLCJjaGVja2VkIiwiaXRlbSIsInNldEl0ZW1zIiwiaXRlbXMiLCJzZXRWZXJzaW9uIiwidmVyc2lvbiIsImdldFR5cGUiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9