"use strict";
(self["webpackChunkfront_end"] = self["webpackChunkfront_end"] || []).push([["src_viewer_item_js"],{

/***/ "./src/creator/b64toblob.js":
/*!**********************************!*\
  !*** ./src/creator/b64toblob.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ b64toBlob)
/* harmony export */ });
function b64toBlob(b64Data) {
  var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
  var byteCharacters = atob(b64Data);
  var byteArrays = [];
  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);
    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  var blob = new Blob(byteArrays, {
    type: contentType
  });
  return blob;
}

/***/ }),

/***/ "./src/viewer/item.js":
/*!****************************!*\
  !*** ./src/viewer/item.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ preview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _creator_b64toblob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../creator/b64toblob */ "./src/creator/b64toblob.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function Question(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    answer = _useState2[0],
    setAnswer = _useState2[1];
  function update() {
    if (answer !== "") {
      props.update(answer, true);
    }
  }
  function clear() {
    props.update("", false);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: "fit-content",
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, props.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "button-container"
  }, props.progress.viewed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    value: props.progress.answer
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    onChange: function onChange(e) {
      return setAnswer(e.target.value);
    },
    value: answer
  }), props.progress.viewed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return clear();
    }
  }, "Clear") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return update();
    }
  }, "Answer")));
}
function preview(props) {
  var item = props.item;
  function update(answer, state) {
    var newProgress = props.progress;
    newProgress[props.index]['answer'] = answer;
    newProgress[props.index]['viewed'] = state;
    props.setProgress(newProgress);
    props.setSubmitted(true);
  }
  function getItem() {
    switch (item.type) {
      case 'Text':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.text);
      case 'Question':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Question, {
          question: item.question,
          update: update,
          progress: props.progress[props.index]
        });
      case 'Image':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          style: {
            height: "270px"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          className: "img-preview",
          src: URL.createObjectURL((0,_creator_b64toblob__WEBPACK_IMPORTED_MODULE_1__["default"])(item.file)),
          alt: item.name
        }));
      case 'Video':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          style: {
            height: "270px"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
          width: "480px",
          height: "100%",
          src: "https://www.youtube.com/embed/" + item.youtubeId,
          style: {
            border: "none",
            borderRadius: "5px"
          },
          title: "Video preview"
        }));
      default:
        break;
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "item"
  }, getItem());
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxFQUFFLE1BQU07WUFBRUMsWUFBWSxFQUFFO1VBQUssQ0FBRTtVQUFDLEtBQUssRUFBQztRQUFlLEVBQUcsQ0FDM0o7TUFDZDtRQUNJO0lBQU07RUFHbEI7RUFFQSxvQkFDRztJQUFLLEVBQUUsRUFBQztFQUFNLEdBQ1JSLE9BQU8sRUFBRSxDQUNUO0FBRWIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9zcmMvY3JlYXRvci9iNjR0b2Jsb2IuanMiLCJ3ZWJwYWNrOi8vZnJvbnQtZW5kLy4vc3JjL3ZpZXdlci9pdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGI2NHRvQmxvYihiNjREYXRhLCBjb250ZW50VHlwZT0nJywgc2xpY2VTaXplPTUxMikge1xyXG5cdGNvbnN0IGJ5dGVDaGFyYWN0ZXJzID0gYXRvYihiNjREYXRhKTtcclxuXHRjb25zdCBieXRlQXJyYXlzID0gW107XHJcbiAgXHJcblx0Zm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgYnl0ZUNoYXJhY3RlcnMubGVuZ3RoOyBvZmZzZXQgKz0gc2xpY2VTaXplKSB7XHJcblx0ICBjb25zdCBzbGljZSA9IGJ5dGVDaGFyYWN0ZXJzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgc2xpY2VTaXplKTtcclxuICBcclxuXHQgIGNvbnN0IGJ5dGVOdW1iZXJzID0gbmV3IEFycmF5KHNsaWNlLmxlbmd0aCk7XHJcblx0ICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWNlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRieXRlTnVtYmVyc1tpXSA9IHNsaWNlLmNoYXJDb2RlQXQoaSk7XHJcblx0ICB9XHJcbiAgXHJcblx0ICBjb25zdCBieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShieXRlTnVtYmVycyk7XHJcblx0ICBieXRlQXJyYXlzLnB1c2goYnl0ZUFycmF5KTtcclxuXHR9XHJcbiAgXHJcblx0Y29uc3QgYmxvYiA9IG5ldyBCbG9iKGJ5dGVBcnJheXMsIHt0eXBlOiBjb250ZW50VHlwZX0pO1xyXG5cdHJldHVybiBibG9iO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYjY0dG9CbG9iIGZyb20gXCIuLi9jcmVhdG9yL2I2NHRvYmxvYlwiO1xyXG5cclxuZnVuY3Rpb24gUXVlc3Rpb24ocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUoXCJcIik7IFxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAoYW5zd2VyICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHByb3BzLnVwZGF0ZShhbnN3ZXIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhcigpIHtcclxuICAgICAgICBwcm9wcy51cGRhdGUoXCJcIiwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFx0XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogXCJmaXQtY29udGVudFwiLCB3aWR0aDogXCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgPGg0Pntwcm9wcy5xdWVzdGlvbn08L2g0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgeyBwcm9wcy5wcm9ncmVzcy52aWV3ZWQgPyA8aW5wdXQgdmFsdWU9e3Byb3BzLnByb2dyZXNzLmFuc3dlcn0gLz4gOiA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbnN3ZXIoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17YW5zd2VyfSAvPiB9XHJcbiAgICAgICAgICAgIHsgcHJvcHMucHJvZ3Jlc3Mudmlld2VkID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjbGVhcigpfSA+Q2xlYXI8L2J1dHRvbj4gOiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHVwZGF0ZSgpfSA+QW5zd2VyPC9idXR0b24+IH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXZpZXcocHJvcHMpIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBwcm9wcy5pdGVtO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZShhbnN3ZXIsIHN0YXRlKSB7XHJcbiAgICAgICAgbGV0IG5ld1Byb2dyZXNzID0gcHJvcHMucHJvZ3Jlc3M7XHJcbiAgICAgICAgbmV3UHJvZ3Jlc3NbcHJvcHMuaW5kZXhdWydhbnN3ZXInXSA9IGFuc3dlcjtcclxuICAgICAgICBuZXdQcm9ncmVzc1twcm9wcy5pbmRleF1bJ3ZpZXdlZCddID0gc3RhdGU7XHJcbiAgICAgICAgcHJvcHMuc2V0UHJvZ3Jlc3MobmV3UHJvZ3Jlc3MpO1xyXG4gICAgICAgIHByb3BzLnNldFN1Ym1pdHRlZCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJdGVtKCkge1xyXG4gICAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ1RleHQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS50ZXh0fTwvcD4pO1xyXG4gICAgICAgICAgICBjYXNlICdRdWVzdGlvbic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFF1ZXN0aW9uIHF1ZXN0aW9uPXtpdGVtLnF1ZXN0aW9ufSB1cGRhdGU9e3VwZGF0ZX0gcHJvZ3Jlc3M9e3Byb3BzLnByb2dyZXNzW3Byb3BzLmluZGV4XX0gIC8+XHJcbiAgICAgICAgICAgIGNhc2UgJ0ltYWdlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogXCIyNzBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLXByZXZpZXdcIiBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwoYjY0dG9CbG9iKGl0ZW0uZmlsZSkpfSBhbHQ9e2l0ZW0ubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgICAgICAgICBjYXNlICdWaWRlbyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiMjcwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgd2lkdGg9XCI0ODBweFwiIGhlaWdodD1cIjEwMCVcIiBzcmM9e1wiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCIrIGl0ZW0ueW91dHViZUlkfSBzdHlsZT17e2JvcmRlcjogXCJub25lXCIsIGJvcmRlclJhZGl1czogXCI1cHhcIn19IHRpdGxlPVwiVmlkZW8gcHJldmlld1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8ZGl2IGlkPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICB7Z2V0SXRlbSgpfVxyXG4gICAgICAgPC9kaXY+IFxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJiNjR0b0Jsb2IiLCJiNjREYXRhIiwiY29udGVudFR5cGUiLCJzbGljZVNpemUiLCJieXRlQ2hhcmFjdGVycyIsImF0b2IiLCJieXRlQXJyYXlzIiwib2Zmc2V0IiwibGVuZ3RoIiwic2xpY2UiLCJieXRlTnVtYmVycyIsIkFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJieXRlQXJyYXkiLCJVaW50OEFycmF5IiwicHVzaCIsImJsb2IiLCJCbG9iIiwidHlwZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJRdWVzdGlvbiIsInByb3BzIiwiYW5zd2VyIiwic2V0QW5zd2VyIiwidXBkYXRlIiwiY2xlYXIiLCJoZWlnaHQiLCJ3aWR0aCIsInF1ZXN0aW9uIiwicHJvZ3Jlc3MiLCJ2aWV3ZWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2aWV3IiwiaXRlbSIsInN0YXRlIiwibmV3UHJvZ3Jlc3MiLCJpbmRleCIsInNldFByb2dyZXNzIiwic2V0U3VibWl0dGVkIiwiZ2V0SXRlbSIsInRleHQiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJmaWxlIiwibmFtZSIsInlvdXR1YmVJZCIsImJvcmRlciIsImJvcmRlclJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=