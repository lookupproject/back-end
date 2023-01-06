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
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState9, 2),
    parameters = _useState10[0],
    setParameters = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/api/classifier', {
      prompt: question
    }).then(function (res) {
      setType(res.data.type);
      identifyParameters(res.data.type);
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
  function identifyParameters(type) {
    if (type === 'Fact Recall' || type === 'Low Convergent' || type === 'High Convergent') {
      setParameters("Correct answer");
    } else if (type === 'Low Divergent' || type === 'High Divergent') {
      setParameters("Restrictions like must be related to... must be an action...");
    } else {
      setParameters("...");
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
    label: parameters,
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
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    name = _useState12[0],
    setName = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState14 = _slicedToArray(_useState13, 2),
    file = _useState14[0],
    setFile = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState16 = _slicedToArray(_useState15, 2),
    b64 = _useState16[0],
    setb64 = _useState16[1];
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
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    name = _useState18[0],
    setName = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    url = _useState20[0],
    setUrl = _useState20[1];
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
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    type = _useState22[0],
    setType = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    checked = _useState24[0],
    setChecked = _useState24[1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxFQUFFSztRQUFJLEVBQUc7TUFDdEQsS0FBSyxPQUFPO1FBQ1Isb0JBQU8sMkRBQUMsS0FBSztVQUFDLFVBQVUsRUFBRUwsVUFBVztVQUFDLEdBQUcsRUFBRUs7UUFBSSxFQUFHO01BQ3REO1FBQ0k7SUFBTztFQUVuQjtFQUVBLG9CQUNJO0lBQUssS0FBSyxFQUFFO01BQUMwQixLQUFLLEVBQUUsTUFBTTtNQUFFcUMsTUFBTSxFQUFFO0lBQWE7RUFBRSxHQUM5Q1AsT0FBTyxnQkFDSjtJQUFLLFNBQVMsRUFBQztFQUFTLEdBQ25CTSxPQUFPLEVBQUUsQ0FDUixHQUNKLElBQUksZUFFViwyREFBQywyQ0FBUSxxQkFDTCwyREFBQyxTQUFTO0lBQUMsT0FBTyxFQUFFakQsT0FBUTtJQUFDLFVBQVUsRUFBRWxCO0VBQVcsRUFBRyxDQUNoRCxDQUNUO0FBRWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9zcmMvY3JlYXRvci90ZXh0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vZnJvbnQtZW5kLy4vc3JjL2NyZWF0b3IvdXBsb2FkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXMvc3R5bGVkXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XHJcblxyXG5jb25zdCBDdXN0b21UZXh0RmllbGQgPSBzdHlsZWQoVGV4dEZpZWxkKSh7XHJcblx0JyYgbGFiZWwuTXVpLWZvY3VzZWQnOiB7XHJcblx0ICBjb2xvcjogJ3doaXRlJyxcclxuXHR9LFxyXG5cdCcmOmhvdmVyIGxhYmVsJzoge1xyXG5cdFx0Y29sb3I6ICd3aGl0ZSdcclxuXHR9LFxyXG5cdCcmIGxhYmVsJzoge1xyXG5cdCAgY29sb3I6ICcjMTRCNEMzJyxcclxuXHR9LFxyXG5cdCdpbnB1dCc6IHtcclxuXHQgIGNvbG9yOiAnd2hpdGUnLFxyXG5cdH0sXHJcbiAgICAnJiAuTXVpSW5wdXRCYXNlLWlucHV0Jzoge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnXHJcbiAgICB9LFxyXG5cdCcmIC5NdWlPdXRsaW5lZElucHV0LXJvb3QnOiB7XHJcblx0ICAnJiBmaWVsZHNldCc6IHtcclxuXHRcdGJvcmRlckNvbG9yOiAnIzE0QjRDMycsXHJcblx0ICB9LFxyXG5cdCAgJyY6aG92ZXIgZmllbGRzZXQnOiB7XHJcblx0XHRib3JkZXJDb2xvcjogJyNmZmYnLFxyXG5cdCAgfSxcclxuXHQgICcmLk11aS1mb2N1c2VkIGZpZWxkc2V0Jzoge1xyXG5cdFx0Ym9yZGVyQ29sb3I6ICcjZmZmJyxcclxuXHQgIH0sXHJcblx0fSxcclxuICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCJcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21UZXh0RmllbGQ7IiwiaW1wb3J0IFJlYWN0LCB7IFN1c3BlbnNlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IEdyb3cgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3Jvd1wiO1xyXG5pbXBvcnQgVGV4dElucHV0IGZyb20gXCIuL3RleHRJbnB1dFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBTcGVlZERpYWwgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi9zcGVlZERpYWwnKSk7XHJcblxyXG5mdW5jdGlvbiBEZWxldGVCdXR0b24ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1kZWxldGVcIiBvbkNsaWNrPXsoKSA9PiB7cHJvcHMuc2V0Q2hlY2tlZChmYWxzZSk7IHByb3BzLmVtcHR5KCl9fT5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjBcIiB3aWR0aD1cIjIwXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNi41IDE3cS0uNjI1IDAtMS4wNjItLjQzOFE1IDE2LjEyNSA1IDE1LjV2LTEwSDRWNGg0VjNoNHYxaDR2MS41aC0xdjEwcTAgLjYyNS0uNDM4IDEuMDYyUTE0LjEyNSAxNyAxMy41IDE3Wk04IDE0aDEuNVY3SDhabTIuNSAwSDEyVjdoLTEuNVpcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFRleHQocHJvcHMpIHtcclxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZCgpIHtcclxuICAgICAgICBpZiAodGV4dCAhPT0gJycpIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkKHsgdGV4dDogdGV4dCwgaWQ6IERhdGUubm93KCksIHR5cGU6IFwiVGV4dFwiIH0pO1xyXG4gICAgICAgICAgICBlbXB0eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcclxuICAgICAgICBzZXRUZXh0KFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInN1cHBsaWVyXCIgY2xhc3NOYW1lPVwicm91bmQtYm9yZGVyIGJsdWUtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxEZWxldGVCdXR0b24gc2V0Q2hlY2tlZD17cHJvcHMuc2V0Q2hlY2tlZH0gZW1wdHk9e2VtcHR5fSAvPlxyXG4gICAgICAgICAgICA8aDM+VGV4dDwvaDM+XHJcbiAgICAgICAgICAgIDxUZXh0SW5wdXQgXHJcbiAgICAgICAgICAgICAgICBtdWx0aWxpbmUgXHJcbiAgICAgICAgICAgICAgICBtYXhSb3dzPXs0fSBcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aCBcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBoZXJlXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dH0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXsoKSA9PiBhZGQoKX0+QWRkPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBRdWVzdGlvbihwcm9wcykge1xyXG4gICAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3BhcmFtZXRlcnMsIHNldFBhcmFtZXRlcnNdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5wb3N0KCcvYXBpL2NsYXNzaWZpZXInLCB7IHByb21wdDogcXVlc3Rpb24gfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge3NldFR5cGUocmVzLmRhdGEudHlwZSk7IGlkZW50aWZ5UGFyYW1ldGVycyhyZXMuZGF0YS50eXBlKX0pO1xyXG4gICAgfSwgW3F1ZXN0aW9uXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkKCkge1xyXG4gICAgICAgIGlmIChxdWVzdGlvbiAhPT0gXCJcIiAmJiBhbnN3ZXIgIT09IFwiXCIgJiYgdHlwZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBwcm9wcy5hZGQoeyBxdWVzdGlvbjogcXVlc3Rpb24sIGFuc3dlcjogYW5zd2VyLCBpZDogRGF0ZS5ub3coKSwgdHlwZTogXCJRdWVzdGlvblwiLCBxdWVzdGlvblR5cGU6IHR5cGUgfSk7XHJcbiAgICAgICAgICAgIGVtcHR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlkZW50aWZ5UGFyYW1ldGVycyh0eXBlKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdGYWN0IFJlY2FsbCcgfHwgdHlwZSA9PT0gJ0xvdyBDb252ZXJnZW50JyB8fCB0eXBlID09PSAnSGlnaCBDb252ZXJnZW50Jykge1xyXG4gICAgICAgICAgICBzZXRQYXJhbWV0ZXJzKFwiQ29ycmVjdCBhbnN3ZXJcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnTG93IERpdmVyZ2VudCcgfHwgdHlwZSA9PT0gJ0hpZ2ggRGl2ZXJnZW50Jykge1xyXG4gICAgICAgICAgICBzZXRQYXJhbWV0ZXJzKFwiUmVzdHJpY3Rpb25zIGxpa2UgbXVzdCBiZSByZWxhdGVkIHRvLi4uIG11c3QgYmUgYW4gYWN0aW9uLi4uXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFBhcmFtZXRlcnMoXCIuLi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcclxuICAgICAgICBzZXRRdWVzdGlvbihcIlwiKTtcclxuICAgICAgICBzZXRBbnN3ZXIoXCJcIik7XHJcbiAgICAgICAgc2V0VHlwZShcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJzdXBwbGllclwiIGNsYXNzTmFtZT1cInJvdW5kLWJvcmRlciBibHVlLWJvcmRlclwiPlxyXG4gICAgICAgICAgICA8RGVsZXRlQnV0dG9uIHNldENoZWNrZWQ9e3Byb3BzLnNldENoZWNrZWR9IGVtcHR5PXtlbXB0eX0gLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxoMz5RdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDM+e3R5cGV9PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxUZXh0SW5wdXQgXHJcbiAgICAgICAgICAgICAgICBtdWx0aWxpbmUgXHJcbiAgICAgICAgICAgICAgICBtYXhSb3dzPXs0fSBcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aCBcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSB5b3VyIHF1ZXN0aW9uIGhlcmVcIiBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVzdGlvbn0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXN0aW9uKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPFRleHRJbnB1dCBcclxuICAgICAgICAgICAgICAgIG11bHRpbGluZSBcclxuICAgICAgICAgICAgICAgIG1heFJvd3M9ezR9IFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoIFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e3BhcmFtZXRlcnN9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Fuc3dlcn0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFuc3dlcihlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzeD17e3dpZHRoOiBcImF1dG9cIiwgbWFyZ2luQm90dG9tOiAyfX0gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9eygpID0+IGFkZCgpfSA+Q3JlYXRlPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbWFnZShwcm9wcykge1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2I2NCwgc2V0YjY0XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gRmlsZVRvQjY0KGZpbGUpIHtcclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7c2V0YjY0KHJlYWRlci5yZXN1bHQuc3BsaXQoJywnKVsxXSl9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZCgpIHtcclxuICAgICAgICBpZiAobmFtZSAhPT0gXCJcIiAmJiBmaWxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmFkZCh7IG5hbWU6IG5hbWUsIGZpbGU6IGI2NCwgaWQ6IERhdGUubm93KCksIHR5cGU6IFwiSW1hZ2VcIiB9KTtcclxuICAgICAgICAgICAgZW1wdHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XHJcbiAgICAgICAgc2V0TmFtZShcIlwiKTtcclxuICAgICAgICBzZXRGaWxlKG51bGwpO1xyXG4gICAgICAgIHNldGI2NChudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJzdXBwbGllclwiIGNsYXNzTmFtZT1cInJvdW5kLWJvcmRlciBibHVlLWJvcmRlclwiPlxyXG4gICAgICAgICAgICA8RGVsZXRlQnV0dG9uIHNldENoZWNrZWQ9e3Byb3BzLnNldENoZWNrZWR9IGVtcHR5PXtlbXB0eX0gLz5cclxuICAgICAgICAgICAgPGgzPkltYWdlPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBzeD17e3dpZHRoOiBcIjc1JVwiLCBtYXJnaW5Cb3R0b206IFwiMFwifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lIFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFJvd3M9ezR9IFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aCBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlR5cGUgdGhlIG5hbWUgb2YgdGhlIGltYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbXBvbmVudD1cImxhYmVsXCIgc3g9e3t3aWR0aDogXCIyMyVcIn19ID5cclxuICAgICAgICAgICAgICAgICAgICBVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1nL2pwZWcgaW1nL3BuZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZSkgPT4ge3NldEZpbGUoZS50YXJnZXQuZmlsZXNbMF0pOyBGaWxlVG9CNjQoZS50YXJnZXQuZmlsZXNbMF0pOyBlLnRhcmdldC52YWx1ZT1udWxsfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2ZpbGUgPyA8ZGl2IGNsYXNzTmFtZT1cImltZy13cmFwcGVyXCI+PGltZyBjbGFzc05hbWU9XCJpbWctcHJldmlld1wiIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKX0gLz48L2Rpdj4gOiBudWxsfVxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzeD17e3dpZHRoOiBcImF1dG9cIiwgbWFyZ2luQm90dG9tOiAyfX0gb25DbGljaz17KCkgPT4gYWRkKCl9ID5BZGQ8L0J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBWaWRlbyhwcm9wcykge1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XHJcbiAgICAgICAgc2V0TmFtZShcIlwiKTtcclxuICAgICAgICBzZXRVcmwoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkKCkge1xyXG4gICAgICAgIGlmIChuYW1lICE9PSBcIlwiICYmIGdldElkKHVybCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkKHsgbmFtZTogbmFtZSwgeW91dHViZUlkOiBnZXRJZCh1cmwpLCBpZDogRGF0ZS5ub3coKSwgdHlwZTogXCJWaWRlb1wiIH0pO1xyXG4gICAgICAgICAgICBlbXB0eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJZCh1cmwpIHtcclxuICAgICAgICBjb25zdCByZWdFeHAgPSAvXi4qKHlvdXR1LmJlXFwvfHZcXC98dVxcL1xcd1xcL3xlbWJlZFxcL3x3YXRjaFxcP3Y9fCZ2PSkoW14jJj9dKikuKi87XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAobWF0Y2ggJiYgbWF0Y2hbMl0ubGVuZ3RoID09PSAxMSlcclxuICAgICAgICAgID8gbWF0Y2hbMl1cclxuICAgICAgICAgIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJzdXBwbGllclwiIGNsYXNzTmFtZT1cInJvdW5kLWJvcmRlciBibHVlLWJvcmRlclwiPlxyXG4gICAgICAgICAgICA8RGVsZXRlQnV0dG9uIHNldENoZWNrZWQ9e3Byb3BzLnNldENoZWNrZWR9IGVtcHR5PXtlbXB0eX0gLz5cclxuICAgICAgICAgICAgPGgzPlZpZGVvPC9oMz5cclxuICAgICAgICAgICAgPFRleHRJbnB1dCBcclxuICAgICAgICAgICAgICAgIG11bHRpbGluZSBcclxuICAgICAgICAgICAgICAgIG1heFJvd3M9ezR9IFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoIFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJWaWRlbyBuYW1lXCIgXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidmlkZW9OYW1lXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgIDxUZXh0SW5wdXQgXHJcbiAgICAgICAgICAgICAgICBtdWx0aWxpbmUgXHJcbiAgICAgICAgICAgICAgICBtYXhSb3dzPXs0fSBcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aCBcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91dHViZSBVcmxcIiBcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWRlb1VybFwiIFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVcmwgc3VjaCBhcyBodHRwczovL3lvdXR1LmJlLy4uLlwiIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VybH0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVybChlLnRhcmdldC52YWx1ZSl9ICAvPlxyXG4gICAgICAgICAgICB7Z2V0SWQodXJsKSA/IDxpZnJhbWUgc3JjPXtcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiKyBnZXRJZCh1cmwpfSBzdHlsZT17e2JvcmRlcjogXCJub25lXCIsIG1hcmdpbjogXCIxMHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIn19IHRpdGxlPVwiVmlkZW8gcHJldmlld1wiPjwvaWZyYW1lPiA6IG51bGx9XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9eygpID0+IGFkZCgpfSA+QWRkPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGxvYWRlcihwcm9wcykge1xyXG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkKGl0ZW0pIHtcclxuICAgICAgICBwcm9wcy5zZXRJdGVtcyhbLi4ucHJvcHMuaXRlbXMsIGl0ZW1dKTtcclxuICAgICAgICBzZXRDaGVja2VkKGZhbHNlKTtcclxuICAgICAgICBwcm9wcy5zZXRWZXJzaW9uKHByb3BzLnZlcnNpb24rMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VHlwZSgpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIlRleHRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBzZXRDaGVja2VkPXtzZXRDaGVja2VkfSBhZGQ9e2FkZH0gLz47XHJcbiAgICAgICAgICAgIGNhc2UgXCJRdWVzdGlvblwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxRdWVzdGlvbiBzZXRDaGVja2VkPXtzZXRDaGVja2VkfSBhZGQ9e2FkZH0gLz47XHJcbiAgICAgICAgICAgIGNhc2UgXCJJbWFnZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxJbWFnZSBzZXRDaGVja2VkPXtzZXRDaGVja2VkfSBhZGQ9e2FkZH0gLz47XHJcbiAgICAgICAgICAgIGNhc2UgXCJWaWRlb1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxWaWRlbyBzZXRDaGVja2VkPXtzZXRDaGVja2VkfSBhZGQ9e2FkZH0gLz47XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJmaXQtY29udGVudFwifX0+XHJcbiAgICAgICAgICAgIHtjaGVja2VkID8gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0VHlwZSgpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6IG51bGwgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxTdXNwZW5zZT5cclxuICAgICAgICAgICAgICAgIDxTcGVlZERpYWwgc2V0VHlwZT17c2V0VHlwZX0gc2V0Q2hlY2tlZD17c2V0Q2hlY2tlZH0gLz5cclxuICAgICAgICAgICAgPC9TdXNwZW5zZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsic3R5bGVkIiwiVGV4dEZpZWxkIiwiQ3VzdG9tVGV4dEZpZWxkIiwiY29sb3IiLCJib3JkZXJDb2xvciIsIm1hcmdpbkJvdHRvbSIsIlJlYWN0IiwiU3VzcGVuc2UiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkdyb3ciLCJUZXh0SW5wdXQiLCJheGlvcyIsIlNwZWVkRGlhbCIsImxhenkiLCJEZWxldGVCdXR0b24iLCJwcm9wcyIsInNldENoZWNrZWQiLCJlbXB0eSIsIlRleHQiLCJ0ZXh0Iiwic2V0VGV4dCIsImFkZCIsImlkIiwiRGF0ZSIsIm5vdyIsInR5cGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJRdWVzdGlvbiIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJzZXRUeXBlIiwicGFyYW1ldGVycyIsInNldFBhcmFtZXRlcnMiLCJwb3N0IiwicHJvbXB0IiwidGhlbiIsInJlcyIsImRhdGEiLCJpZGVudGlmeVBhcmFtZXRlcnMiLCJxdWVzdGlvblR5cGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJJbWFnZSIsIm5hbWUiLCJzZXROYW1lIiwiZmlsZSIsInNldEZpbGUiLCJiNjQiLCJzZXRiNjQiLCJGaWxlVG9CNjQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInNwbGl0IiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJWaWRlbyIsInVybCIsInNldFVybCIsImdldElkIiwieW91dHViZUlkIiwicmVnRXhwIiwibWF0Y2giLCJsZW5ndGgiLCJib3JkZXIiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJVcGxvYWRlciIsImNoZWNrZWQiLCJpdGVtIiwic2V0SXRlbXMiLCJpdGVtcyIsInNldFZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0VHlwZSIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=