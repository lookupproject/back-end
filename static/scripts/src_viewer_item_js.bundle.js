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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
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
  function sendAnswer() {
    if (answer !== "") {
      props.update(answer, true);
      axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/api/feedback', {
        context: props.context,
        question: props.question,
        answer: answer
      }).then(function (response) {
        props.setFeedback(response.data.feedback);
        console.log(response.data.feedback);
      });
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, props.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
      return sendAnswer();
    }
  }, "Answer")), props.progress.feedback ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, props.progress.feedback) : null);
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
  function setFeedback(feedback) {
    var newProgress = props.progress;
    newProgress[props.index]['feedback'] = feedback;
    props.setProgress(newProgress);
    props.setResponse(true);
  }
  function getItem() {
    switch (item.type) {
      case 'Text':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.text);
      case 'Question':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Question, {
          question: item.question,
          update: update,
          progress: props.progress[props.index],
          setFeedback: setFeedback,
          context: item.answer
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmpzIiwid2VicGFjazovL2Zyb250LWVuZC8uL3NyYy92aWV3ZXIvaXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiNjR0b0Jsb2IoYjY0RGF0YSwgY29udGVudFR5cGU9JycsIHNsaWNlU2l6ZT01MTIpIHtcclxuXHRjb25zdCBieXRlQ2hhcmFjdGVycyA9IGF0b2IoYjY0RGF0YSk7XHJcblx0Y29uc3QgYnl0ZUFycmF5cyA9IFtdO1xyXG4gIFxyXG5cdGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGJ5dGVDaGFyYWN0ZXJzLmxlbmd0aDsgb2Zmc2V0ICs9IHNsaWNlU2l6ZSkge1xyXG5cdCAgY29uc3Qgc2xpY2UgPSBieXRlQ2hhcmFjdGVycy5zbGljZShvZmZzZXQsIG9mZnNldCArIHNsaWNlU2l6ZSk7XHJcbiAgXHJcblx0ICBjb25zdCBieXRlTnVtYmVycyA9IG5ldyBBcnJheShzbGljZS5sZW5ndGgpO1xyXG5cdCAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGljZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0Ynl0ZU51bWJlcnNbaV0gPSBzbGljZS5jaGFyQ29kZUF0KGkpO1xyXG5cdCAgfVxyXG4gIFxyXG5cdCAgY29uc3QgYnl0ZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZU51bWJlcnMpO1xyXG5cdCAgYnl0ZUFycmF5cy5wdXNoKGJ5dGVBcnJheSk7XHJcblx0fVxyXG4gIFxyXG5cdGNvbnN0IGJsb2IgPSBuZXcgQmxvYihieXRlQXJyYXlzLCB7dHlwZTogY29udGVudFR5cGV9KTtcclxuXHRyZXR1cm4gYmxvYjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGI2NHRvQmxvYiBmcm9tIFwiLi4vY3JlYXRvci9iNjR0b2Jsb2JcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gUXVlc3Rpb24ocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgZnVuY3Rpb24gc2VuZEFuc3dlcigpIHtcclxuICAgICAgICBpZiAoYW5zd2VyICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHByb3BzLnVwZGF0ZShhbnN3ZXIsIHRydWUpO1xyXG4gICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL2ZlZWRiYWNrJywgeyBjb250ZXh0OiBwcm9wcy5jb250ZXh0LCBxdWVzdGlvbjogcHJvcHMucXVlc3Rpb24sIGFuc3dlcjogYW5zd2VyIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtwcm9wcy5zZXRGZWVkYmFjayhyZXNwb25zZS5kYXRhLmZlZWRiYWNrKTsgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5mZWVkYmFjayl9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXIoKSB7XHJcbiAgICAgICAgcHJvcHMudXBkYXRlKFwiXCIsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcdFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiZml0LWNvbnRlbnRcIiwgd2lkdGg6IFwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgIDxoMz57cHJvcHMucXVlc3Rpb259PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHsgcHJvcHMucHJvZ3Jlc3Mudmlld2VkID8gPGlucHV0IHZhbHVlPXtwcm9wcy5wcm9ncmVzcy5hbnN3ZXJ9IC8+IDogPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW5zd2VyKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2Fuc3dlcn0gLz4gfVxyXG4gICAgICAgICAgICB7IHByb3BzLnByb2dyZXNzLnZpZXdlZCA/IDxidXR0b24gb25DbGljaz17KCkgPT4gY2xlYXIoKX0gPkNsZWFyPC9idXR0b24+IDogPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZW5kQW5zd2VyKCl9ID5BbnN3ZXI8L2J1dHRvbj4gfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Byb3BzLnByb2dyZXNzLmZlZWRiYWNrID8gPGgzPntwcm9wcy5wcm9ncmVzcy5mZWVkYmFja308L2gzPiA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXZpZXcocHJvcHMpIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBwcm9wcy5pdGVtO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZShhbnN3ZXIsIHN0YXRlKSB7XHJcbiAgICAgICAgbGV0IG5ld1Byb2dyZXNzID0gcHJvcHMucHJvZ3Jlc3M7XHJcbiAgICAgICAgbmV3UHJvZ3Jlc3NbcHJvcHMuaW5kZXhdWydhbnN3ZXInXSA9IGFuc3dlcjtcclxuICAgICAgICBuZXdQcm9ncmVzc1twcm9wcy5pbmRleF1bJ3ZpZXdlZCddID0gc3RhdGU7XHJcbiAgICAgICAgcHJvcHMuc2V0UHJvZ3Jlc3MobmV3UHJvZ3Jlc3MpO1xyXG4gICAgICAgIHByb3BzLnNldFN1Ym1pdHRlZCh0cnVlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0RmVlZGJhY2soZmVlZGJhY2spIHtcclxuICAgICAgICBsZXQgbmV3UHJvZ3Jlc3MgPSBwcm9wcy5wcm9ncmVzcztcclxuICAgICAgICBuZXdQcm9ncmVzc1twcm9wcy5pbmRleF1bJ2ZlZWRiYWNrJ10gPSBmZWVkYmFjaztcclxuICAgICAgICBwcm9wcy5zZXRQcm9ncmVzcyhuZXdQcm9ncmVzcyk7XHJcbiAgICAgICAgcHJvcHMuc2V0UmVzcG9uc2UodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SXRlbSgpIHtcclxuICAgICAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdUZXh0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udGV4dH08L3A+KTtcclxuICAgICAgICAgICAgY2FzZSAnUXVlc3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxRdWVzdGlvbiBxdWVzdGlvbj17aXRlbS5xdWVzdGlvbn0gdXBkYXRlPXt1cGRhdGV9IHByb2dyZXNzPXtwcm9wcy5wcm9ncmVzc1twcm9wcy5pbmRleF19IHNldEZlZWRiYWNrPXtzZXRGZWVkYmFja30gY29udGV4dD17aXRlbS5hbnN3ZXJ9IC8+XHJcbiAgICAgICAgICAgIGNhc2UgJ0ltYWdlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogXCIyNzBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLXByZXZpZXdcIiBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwoYjY0dG9CbG9iKGl0ZW0uZmlsZSkpfSBhbHQ9e2l0ZW0ubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgICAgICAgICBjYXNlICdWaWRlbyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiMjcwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgd2lkdGg9XCI0ODBweFwiIGhlaWdodD1cIjEwMCVcIiBzcmM9e1wiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCIrIGl0ZW0ueW91dHViZUlkfSBzdHlsZT17e2JvcmRlcjogXCJub25lXCIsIGJvcmRlclJhZGl1czogXCI1cHhcIn19IHRpdGxlPVwiVmlkZW8gcHJldmlld1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8ZGl2IGlkPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICB7Z2V0SXRlbSgpfVxyXG4gICAgICAgPC9kaXY+IFxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJiNjR0b0Jsb2IiLCJiNjREYXRhIiwiY29udGVudFR5cGUiLCJzbGljZVNpemUiLCJieXRlQ2hhcmFjdGVycyIsImF0b2IiLCJieXRlQXJyYXlzIiwib2Zmc2V0IiwibGVuZ3RoIiwic2xpY2UiLCJieXRlTnVtYmVycyIsIkFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJieXRlQXJyYXkiLCJVaW50OEFycmF5IiwicHVzaCIsImJsb2IiLCJCbG9iIiwidHlwZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIlF1ZXN0aW9uIiwicHJvcHMiLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJzZW5kQW5zd2VyIiwidXBkYXRlIiwicG9zdCIsImNvbnRleHQiLCJxdWVzdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsInNldEZlZWRiYWNrIiwiZGF0YSIsImZlZWRiYWNrIiwiY29uc29sZSIsImxvZyIsImNsZWFyIiwiaGVpZ2h0Iiwid2lkdGgiLCJwcm9ncmVzcyIsInZpZXdlZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZpZXciLCJpdGVtIiwic3RhdGUiLCJuZXdQcm9ncmVzcyIsImluZGV4Iiwic2V0UHJvZ3Jlc3MiLCJzZXRTdWJtaXR0ZWQiLCJzZXRSZXNwb25zZSIsImdldEl0ZW0iLCJ0ZXh0IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZSIsIm5hbWUiLCJ5b3V0dWJlSWQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9