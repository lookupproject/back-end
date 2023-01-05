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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQyxLQUFLO1VBQUMsVUFBVSxFQUFFUCxVQUFXO1VBQUMsR0FBRyxFQUFFTztRQUFJLEVBQUc7TUFDdEQsS0FBSyxPQUFPO1FBQ1Isb0JBQU8sMkRBQUMsS0FBSztVQUFDLFVBQVUsRUFBRVAsVUFBVztVQUFDLEdBQUcsRUFBRU87UUFBSSxFQUFHO01BQ3REO1FBQ0k7SUFBTztFQUVuQjtFQUVBLG9CQUNJO0lBQUssS0FBSyxFQUFFO01BQUMwQixLQUFLLEVBQUUsTUFBTTtNQUFFcUMsTUFBTSxFQUFFO0lBQWE7RUFBRSxHQUM5Q1AsT0FBTyxnQkFDSjtJQUFLLFNBQVMsRUFBQztFQUFTLEdBQ25CTSxPQUFPLEVBQUUsQ0FDUixHQUNKLElBQUksZUFFViwyREFBQywyQ0FBUSxxQkFDTCwyREFBQyxTQUFTO0lBQUMsT0FBTyxFQUFFakQsT0FBUTtJQUFDLFVBQVUsRUFBRXBCO0VBQVcsRUFBRyxDQUNoRCxDQUNUO0FBRWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9zcmMvY3JlYXRvci90ZXh0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vZnJvbnQtZW5kLy4vc3JjL2NyZWF0b3IvdXBsb2FkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXMvc3R5bGVkXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XHJcblxyXG5jb25zdCBDdXN0b21UZXh0RmllbGQgPSBzdHlsZWQoVGV4dEZpZWxkKSh7XHJcblx0JyYgbGFiZWwuTXVpLWZvY3VzZWQnOiB7XHJcblx0ICBjb2xvcjogJ3doaXRlJyxcclxuXHR9LFxyXG5cdCcmOmhvdmVyIGxhYmVsJzoge1xyXG5cdFx0Y29sb3I6ICd3aGl0ZSdcclxuXHR9LFxyXG5cdCcmIGxhYmVsJzoge1xyXG5cdCAgY29sb3I6ICcjMTRCNEMzJyxcclxuXHR9LFxyXG5cdCdpbnB1dCc6IHtcclxuXHQgIGNvbG9yOiAnd2hpdGUnLFxyXG5cdH0sXHJcbiAgICAnJiAuTXVpSW5wdXRCYXNlLWlucHV0Jzoge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnXHJcbiAgICB9LFxyXG5cdCcmIC5NdWlPdXRsaW5lZElucHV0LXJvb3QnOiB7XHJcblx0ICAnJiBmaWVsZHNldCc6IHtcclxuXHRcdGJvcmRlckNvbG9yOiAnIzE0QjRDMycsXHJcblx0ICB9LFxyXG5cdCAgJyY6aG92ZXIgZmllbGRzZXQnOiB7XHJcblx0XHRib3JkZXJDb2xvcjogJyNmZmYnLFxyXG5cdCAgfSxcclxuXHQgICcmLk11aS1mb2N1c2VkIGZpZWxkc2V0Jzoge1xyXG5cdFx0Ym9yZGVyQ29sb3I6ICcjZmZmJyxcclxuXHQgIH0sXHJcblx0fSxcclxuICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCJcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21UZXh0RmllbGQ7IiwiaW1wb3J0IFJlYWN0LCB7IFN1c3BlbnNlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IEdyb3cgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3Jvd1wiO1xyXG5pbXBvcnQgVGV4dElucHV0IGZyb20gXCIuL3RleHRJbnB1dFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBTcGVlZERpYWwgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi9zcGVlZERpYWwnKSk7XHJcblxyXG5mdW5jdGlvbiBEZWxldGVCdXR0b24ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1kZWxldGVcIiBvbkNsaWNrPXsoKSA9PiB7cHJvcHMuc2V0Q2hlY2tlZChmYWxzZSk7IHByb3BzLmVtcHR5KCk7IGNvbnNvbGUubG9nKFwiQ2xpY2tlZCBjbG9zZVwiKX19PlxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIyMFwiIHdpZHRoPVwiMjBcIj5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk02LjUgMTdxLS42MjUgMC0xLjA2Mi0uNDM4UTUgMTYuMTI1IDUgMTUuNXYtMTBINFY0aDRWM2g0djFoNHYxLjVoLTF2MTBxMCAuNjI1LS40MzggMS4wNjJRMTQuMTI1IDE3IDEzLjUgMTdaTTggMTRoMS41VjdIOFptMi41IDBIMTJWN2gtMS41WlwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gVGV4dChwcm9wcykge1xyXG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkKCkge1xyXG4gICAgICAgIGlmICh0ZXh0ICE9PSAnJykge1xyXG4gICAgICAgICAgICBwcm9wcy5hZGQoeyB0ZXh0OiB0ZXh0LCBpZDogRGF0ZS5ub3coKSwgdHlwZTogXCJUZXh0XCIgfSk7XHJcbiAgICAgICAgICAgIGVtcHR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xyXG4gICAgICAgIHNldFRleHQoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwic3VwcGxpZXJcIiBjbGFzc05hbWU9XCJyb3VuZC1ib3JkZXIgYmx1ZS1ib3JkZXJcIj5cclxuICAgICAgICAgICAgPERlbGV0ZUJ1dHRvbiBzZXRDaGVja2VkPXtwcm9wcy5zZXRDaGVja2VkfSBlbXB0eT17ZW1wdHl9IC8+XHJcbiAgICAgICAgICAgIDxoMz5UZXh0PC9oMz5cclxuICAgICAgICAgICAgPFRleHRJbnB1dCBcclxuICAgICAgICAgICAgICAgIG11bHRpbGluZSBcclxuICAgICAgICAgICAgICAgIG1heFJvd3M9ezR9IFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoIFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUeXBlIGhlcmVcIiBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0fSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9eygpID0+IGFkZCgpfT5BZGQ8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFF1ZXN0aW9uKHByb3BzKSB7XHJcbiAgICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcGFyYW1ldGVycywgc2V0UGFyYW1ldGVyc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvY2xhc3NpZmllcicsIHsgcHJvbXB0OiBxdWVzdGlvbiB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7c2V0VHlwZShyZXMuZGF0YS50eXBlKTsgaWRlbnRpZnlQYXJhbWV0ZXJzKHJlcy5kYXRhLnR5cGUpfSk7XHJcbiAgICB9LCBbcXVlc3Rpb25dKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGQoKSB7XHJcbiAgICAgICAgaWYgKHF1ZXN0aW9uICE9PSBcIlwiICYmIGFuc3dlciAhPT0gXCJcIiAmJiB0eXBlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmFkZCh7IHF1ZXN0aW9uOiBxdWVzdGlvbiwgYW5zd2VyOiBhbnN3ZXIsIGlkOiBEYXRlLm5vdygpLCB0eXBlOiBcIlF1ZXN0aW9uXCIsIHF1ZXN0aW9uVHlwZTogdHlwZSB9KTtcclxuICAgICAgICAgICAgZW1wdHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaWRlbnRpZnlQYXJhbWV0ZXJzKHR5cGUpIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ0ZhY3QgUmVjYWxsJyB8fCB0eXBlID09PSAnTG93IENvbnZlcmdlbnQnIHx8IHR5cGUgPT09ICdIaWdoIENvbnZlcmdlbnQnKSB7XHJcbiAgICAgICAgICAgIHNldFBhcmFtZXRlcnMoXCJDb3JyZWN0IGFuc3dlclwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdMb3cgRGl2ZXJnZW50JyB8fCB0eXBlID09PSAnSGlnaCBEaXZlcmdlbnQnKSB7XHJcbiAgICAgICAgICAgIHNldFBhcmFtZXRlcnMoXCJSZXN0cmljdGlvbnMgbGlrZSBtdXN0IGJlIHJlbGF0ZWQgdG8uLi4gbXVzdCBiZSBhbiBhY3Rpb24uLi5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UGFyYW1ldGVycyhcIi4uLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xyXG4gICAgICAgIHNldFF1ZXN0aW9uKFwiXCIpO1xyXG4gICAgICAgIHNldEFuc3dlcihcIlwiKTtcclxuICAgICAgICBzZXRUeXBlKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInN1cHBsaWVyXCIgY2xhc3NOYW1lPVwicm91bmQtYm9yZGVyIGJsdWUtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxEZWxldGVCdXR0b24gc2V0Q2hlY2tlZD17cHJvcHMuc2V0Q2hlY2tlZH0gZW1wdHk9e2VtcHR5fSAvPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIn19PlxyXG4gICAgICAgICAgICAgICAgPGgzPlF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMz57dHlwZX08L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFRleHRJbnB1dCBcclxuICAgICAgICAgICAgICAgIG11bHRpbGluZSBcclxuICAgICAgICAgICAgICAgIG1heFJvd3M9ezR9IFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoIFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUeXBlIHlvdXIgcXVlc3Rpb24gaGVyZVwiIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXN0aW9ufSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlc3Rpb24oZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICA8VGV4dElucHV0IFxyXG4gICAgICAgICAgICAgICAgbXVsdGlsaW5lIFxyXG4gICAgICAgICAgICAgICAgbWF4Um93cz17NH0gXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGggXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17cGFyYW1ldGVyc30gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VyfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW5zd2VyKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHN4PXt7d2lkdGg6IFwiYXV0b1wiLCBtYXJnaW5Cb3R0b206IDJ9fSB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17KCkgPT4gYWRkKCl9ID5DcmVhdGU8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEltYWdlKHByb3BzKSB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbYjY0LCBzZXRiNjRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBGaWxlVG9CNjQoZmlsZSkge1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtzZXRiNjQocmVhZGVyLnJlc3VsdC5zcGxpdCgnLCcpWzFdKX07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkKCkge1xyXG4gICAgICAgIGlmIChuYW1lICE9PSBcIlwiICYmIGZpbGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkKHsgbmFtZTogbmFtZSwgZmlsZTogYjY0LCBpZDogRGF0ZS5ub3coKSwgdHlwZTogXCJJbWFnZVwiIH0pO1xyXG4gICAgICAgICAgICBlbXB0eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcclxuICAgICAgICBzZXROYW1lKFwiXCIpO1xyXG4gICAgICAgIHNldEZpbGUobnVsbCk7XHJcbiAgICAgICAgc2V0YjY0KG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInN1cHBsaWVyXCIgY2xhc3NOYW1lPVwicm91bmQtYm9yZGVyIGJsdWUtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxEZWxldGVCdXR0b24gc2V0Q2hlY2tlZD17cHJvcHMuc2V0Q2hlY2tlZH0gZW1wdHk9e2VtcHR5fSAvPlxyXG4gICAgICAgICAgICA8aDM+SW1hZ2U8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8VGV4dElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7d2lkdGg6IFwiNzUlXCIsIG1hcmdpbkJvdHRvbTogXCIwXCJ9fSBcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4Um93cz17NH0gXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoIFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSB0aGUgbmFtZSBvZiB0aGUgaW1hZ2VcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29tcG9uZW50PVwibGFiZWxcIiBzeD17e3dpZHRoOiBcIjIzJVwifX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWcvanBlZyBpbWcvcG5nXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhlKSA9PiB7c2V0RmlsZShlLnRhcmdldC5maWxlc1swXSk7IEZpbGVUb0I2NChlLnRhcmdldC5maWxlc1swXSk7IGUudGFyZ2V0LnZhbHVlPW51bGx9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZmlsZSA/IDxkaXYgY2xhc3NOYW1lPVwiaW1nLXdyYXBwZXJcIj48aW1nIGNsYXNzTmFtZT1cImltZy1wcmV2aWV3XCIgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpfSAvPjwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN4PXt7d2lkdGg6IFwiYXV0b1wiLCBtYXJnaW5Cb3R0b206IDJ9fSBvbkNsaWNrPXsoKSA9PiBhZGQoKX0gPkFkZDwvQnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFZpZGVvKHByb3BzKSB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcclxuICAgICAgICBzZXROYW1lKFwiXCIpO1xyXG4gICAgICAgIHNldFVybChcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGQoKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgIT09IFwiXCIgJiYgZ2V0SWQodXJsKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwcm9wcy5hZGQoeyBuYW1lOiBuYW1lLCB5b3V0dWJlSWQ6IGdldElkKHVybCksIGlkOiBEYXRlLm5vdygpLCB0eXBlOiBcIlZpZGVvXCIgfSk7XHJcbiAgICAgICAgICAgIGVtcHR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldElkKHVybCkge1xyXG4gICAgICAgIGNvbnN0IHJlZ0V4cCA9IC9eLiooeW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18JnY9KShbXiMmP10qKS4qLztcclxuICAgICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaChyZWdFeHApO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIChtYXRjaCAmJiBtYXRjaFsyXS5sZW5ndGggPT09IDExKVxyXG4gICAgICAgICAgPyBtYXRjaFsyXVxyXG4gICAgICAgICAgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInN1cHBsaWVyXCIgY2xhc3NOYW1lPVwicm91bmQtYm9yZGVyIGJsdWUtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxEZWxldGVCdXR0b24gc2V0Q2hlY2tlZD17cHJvcHMuc2V0Q2hlY2tlZH0gZW1wdHk9e2VtcHR5fSAvPlxyXG4gICAgICAgICAgICA8aDM+VmlkZW88L2gzPlxyXG4gICAgICAgICAgICA8VGV4dElucHV0IFxyXG4gICAgICAgICAgICAgICAgbXVsdGlsaW5lIFxyXG4gICAgICAgICAgICAgICAgbWF4Um93cz17NH0gXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGggXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlZpZGVvIG5hbWVcIiBcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWRlb05hbWVcIiBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgPFRleHRJbnB1dCBcclxuICAgICAgICAgICAgICAgIG11bHRpbGluZSBcclxuICAgICAgICAgICAgICAgIG1heFJvd3M9ezR9IFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoIFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJZb3V0dWJlIFVybFwiIFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInZpZGVvVXJsXCIgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVybCBzdWNoIGFzIGh0dHBzOi8veW91dHUuYmUvLi4uXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXJsfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKX0gIC8+XHJcbiAgICAgICAgICAgIHtnZXRJZCh1cmwpID8gPGlmcmFtZSBzcmM9e1wiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCIrIGdldElkKHVybCl9IHN0eWxlPXt7Ym9yZGVyOiBcIm5vbmVcIiwgbWFyZ2luOiBcIjEwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwifX0gdGl0bGU9XCJWaWRlbyBwcmV2aWV3XCI+PC9pZnJhbWU+IDogbnVsbH1cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17KCkgPT4gYWRkKCl9ID5BZGQ8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwbG9hZGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGQoaXRlbSkge1xyXG4gICAgICAgIHByb3BzLnNldEl0ZW1zKFsuLi5wcm9wcy5pdGVtcywgaXRlbV0pO1xyXG4gICAgICAgIHNldENoZWNrZWQoZmFsc2UpO1xyXG4gICAgICAgIHByb3BzLnNldFZlcnNpb24ocHJvcHMudmVyc2lvbisxKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUeXBlKCkge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiVGV4dFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IHNldENoZWNrZWQ9e3NldENoZWNrZWR9IGFkZD17YWRkfSAvPjtcclxuICAgICAgICAgICAgY2FzZSBcIlF1ZXN0aW9uXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFF1ZXN0aW9uIHNldENoZWNrZWQ9e3NldENoZWNrZWR9IGFkZD17YWRkfSAvPjtcclxuICAgICAgICAgICAgY2FzZSBcIkltYWdlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEltYWdlIHNldENoZWNrZWQ9e3NldENoZWNrZWR9IGFkZD17YWRkfSAvPjtcclxuICAgICAgICAgICAgY2FzZSBcIlZpZGVvXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFZpZGVvIHNldENoZWNrZWQ9e3NldENoZWNrZWR9IGFkZD17YWRkfSAvPjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImZpdC1jb250ZW50XCJ9fT5cclxuICAgICAgICAgICAge2NoZWNrZWQgPyBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXRUeXBlKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDogbnVsbCAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPFN1c3BlbnNlPlxyXG4gICAgICAgICAgICAgICAgPFNwZWVkRGlhbCBzZXRUeXBlPXtzZXRUeXBlfSBzZXRDaGVja2VkPXtzZXRDaGVja2VkfSAvPlxyXG4gICAgICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJzdHlsZWQiLCJUZXh0RmllbGQiLCJDdXN0b21UZXh0RmllbGQiLCJjb2xvciIsImJvcmRlckNvbG9yIiwibWFyZ2luQm90dG9tIiwiUmVhY3QiLCJTdXNwZW5zZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQnV0dG9uIiwiR3JvdyIsIlRleHRJbnB1dCIsImF4aW9zIiwiU3BlZWREaWFsIiwibGF6eSIsIkRlbGV0ZUJ1dHRvbiIsInByb3BzIiwic2V0Q2hlY2tlZCIsImVtcHR5IiwiY29uc29sZSIsImxvZyIsIlRleHQiLCJ0ZXh0Iiwic2V0VGV4dCIsImFkZCIsImlkIiwiRGF0ZSIsIm5vdyIsInR5cGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJRdWVzdGlvbiIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJzZXRUeXBlIiwicGFyYW1ldGVycyIsInNldFBhcmFtZXRlcnMiLCJwb3N0IiwicHJvbXB0IiwidGhlbiIsInJlcyIsImRhdGEiLCJpZGVudGlmeVBhcmFtZXRlcnMiLCJxdWVzdGlvblR5cGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJJbWFnZSIsIm5hbWUiLCJzZXROYW1lIiwiZmlsZSIsInNldEZpbGUiLCJiNjQiLCJzZXRiNjQiLCJGaWxlVG9CNjQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInNwbGl0IiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJWaWRlbyIsInVybCIsInNldFVybCIsImdldElkIiwieW91dHViZUlkIiwicmVnRXhwIiwibWF0Y2giLCJsZW5ndGgiLCJib3JkZXIiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJVcGxvYWRlciIsImNoZWNrZWQiLCJpdGVtIiwic2V0SXRlbXMiLCJpdGVtcyIsInNldFZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0VHlwZSIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=