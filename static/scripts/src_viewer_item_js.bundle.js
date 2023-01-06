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
        text: props.item.answer,
        answer: answer,
        questionType: props.item.questionType
      }).then(function (response) {
        props.setFeedback(response.data.feedback);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, props.item.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    numberOfQuestions = _useState4[0],
    setNumberOfQuestions = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    numberOfQuestionsAnswered = _useState6[0],
    setNumberOfQuestionsAnswered = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var questionCounter = 0;
    var answeredQuestionCounter = 0;
    for (var i = 0; i < props.course.length; i++) {
      if (props.course[i].type === 'Question') {
        questionCounter += 1;
        if (props.progress[i].viewed) {
          answeredQuestionCounter += 1;
        }
      }
    }
    ;
    setNumberOfQuestions(questionCounter);
    setNumberOfQuestionsAnswered(answeredQuestionCounter);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (numberOfQuestions === numberOfQuestionsAnswered) {
      props.setIsFinished(true);
    } else {
      props.setIsFinished(false);
    }
  }, [numberOfQuestionsAnswered]);

  /** 
   * Update API's response in user progress and set status viewed to true.
   */
  function update(answer, state) {
    if (state) {
      setNumberOfQuestionsAnswered(numberOfQuestionsAnswered + 1);
    } else {
      setNumberOfQuestionsAnswered(numberOfQuestionsAnswered - 1);
    }
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
        item.viewed;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.text);
      case 'Question':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Question, {
          update: update,
          progress: props.progress[props.index],
          setFeedback: setFeedback,
          item: item
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "item"
  }, getItem()));
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ci9iNjR0b2Jsb2IuanMiLCJ3ZWJwYWNrOi8vZnJvbnQtZW5kLy4vc3JjL3ZpZXdlci9pdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGI2NHRvQmxvYihiNjREYXRhLCBjb250ZW50VHlwZT0nJywgc2xpY2VTaXplPTUxMikge1xyXG5cdGNvbnN0IGJ5dGVDaGFyYWN0ZXJzID0gYXRvYihiNjREYXRhKTtcclxuXHRjb25zdCBieXRlQXJyYXlzID0gW107XHJcbiAgXHJcblx0Zm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgYnl0ZUNoYXJhY3RlcnMubGVuZ3RoOyBvZmZzZXQgKz0gc2xpY2VTaXplKSB7XHJcblx0ICBjb25zdCBzbGljZSA9IGJ5dGVDaGFyYWN0ZXJzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgc2xpY2VTaXplKTtcclxuICBcclxuXHQgIGNvbnN0IGJ5dGVOdW1iZXJzID0gbmV3IEFycmF5KHNsaWNlLmxlbmd0aCk7XHJcblx0ICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWNlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRieXRlTnVtYmVyc1tpXSA9IHNsaWNlLmNoYXJDb2RlQXQoaSk7XHJcblx0ICB9XHJcbiAgXHJcblx0ICBjb25zdCBieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShieXRlTnVtYmVycyk7XHJcblx0ICBieXRlQXJyYXlzLnB1c2goYnl0ZUFycmF5KTtcclxuXHR9XHJcbiAgXHJcblx0Y29uc3QgYmxvYiA9IG5ldyBCbG9iKGJ5dGVBcnJheXMsIHt0eXBlOiBjb250ZW50VHlwZX0pO1xyXG5cdHJldHVybiBibG9iO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBiNjR0b0Jsb2IgZnJvbSBcIi4uL2NyZWF0b3IvYjY0dG9ibG9iXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBRdWVzdGlvbihwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kQW5zd2VyKCkge1xyXG4gICAgICAgIGlmIChhbnN3ZXIgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcHJvcHMudXBkYXRlKGFuc3dlciwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvZmVlZGJhY2snLCB7IHRleHQ6IHByb3BzLml0ZW0uYW5zd2VyLCBhbnN3ZXI6IGFuc3dlciwgcXVlc3Rpb25UeXBlOiBwcm9wcy5pdGVtLnF1ZXN0aW9uVHlwZSB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7cHJvcHMuc2V0RmVlZGJhY2socmVzcG9uc2UuZGF0YS5mZWVkYmFjayl9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXIoKSB7XHJcbiAgICAgICAgcHJvcHMudXBkYXRlKFwiXCIsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcdFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiZml0LWNvbnRlbnRcIiwgd2lkdGg6IFwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgIDxoMz57cHJvcHMuaXRlbS5xdWVzdGlvbn08L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgeyBwcm9wcy5wcm9ncmVzcy52aWV3ZWQgPyA8aW5wdXQgdmFsdWU9e3Byb3BzLnByb2dyZXNzLmFuc3dlcn0gLz4gOiA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbnN3ZXIoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17YW5zd2VyfSAvPiB9XHJcbiAgICAgICAgICAgIHsgcHJvcHMucHJvZ3Jlc3Mudmlld2VkID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjbGVhcigpfSA+Q2xlYXI8L2J1dHRvbj4gOiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNlbmRBbnN3ZXIoKX0gPkFuc3dlcjwvYnV0dG9uPiB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7cHJvcHMucHJvZ3Jlc3MuZmVlZGJhY2sgPyA8aDM+e3Byb3BzLnByb2dyZXNzLmZlZWRiYWNrfTwvaDM+IDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJldmlldyhwcm9wcykge1xyXG4gICAgY29uc3QgaXRlbSA9IHByb3BzLml0ZW07XHJcbiAgICBjb25zdCBbbnVtYmVyT2ZRdWVzdGlvbnMsIHNldE51bWJlck9mUXVlc3Rpb25zXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW251bWJlck9mUXVlc3Rpb25zQW5zd2VyZWQsIHNldE51bWJlck9mUXVlc3Rpb25zQW5zd2VyZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHF1ZXN0aW9uQ291bnRlcj0wO1xyXG4gICAgICAgIGxldCBhbnN3ZXJlZFF1ZXN0aW9uQ291bnRlcj0wO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMuY291cnNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jb3Vyc2VbaV0udHlwZSA9PT0gJ1F1ZXN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25Db3VudGVyKz0xO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnByb2dyZXNzW2ldLnZpZXdlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuc3dlcmVkUXVlc3Rpb25Db3VudGVyKz0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXROdW1iZXJPZlF1ZXN0aW9ucyhxdWVzdGlvbkNvdW50ZXIpO1xyXG4gICAgICAgIHNldE51bWJlck9mUXVlc3Rpb25zQW5zd2VyZWQoYW5zd2VyZWRRdWVzdGlvbkNvdW50ZXIpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG51bWJlck9mUXVlc3Rpb25zID09PSBudW1iZXJPZlF1ZXN0aW9uc0Fuc3dlcmVkKSB7XHJcbiAgICAgICAgICAgIHByb3BzLnNldElzRmluaXNoZWQodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcHJvcHMuc2V0SXNGaW5pc2hlZChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW251bWJlck9mUXVlc3Rpb25zQW5zd2VyZWRdKTtcclxuICAgIFxyXG4gICAgLyoqIFxyXG4gICAgICogVXBkYXRlIEFQSSdzIHJlc3BvbnNlIGluIHVzZXIgcHJvZ3Jlc3MgYW5kIHNldCBzdGF0dXMgdmlld2VkIHRvIHRydWUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZShhbnN3ZXIsIHN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHNldE51bWJlck9mUXVlc3Rpb25zQW5zd2VyZWQobnVtYmVyT2ZRdWVzdGlvbnNBbnN3ZXJlZCsxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXROdW1iZXJPZlF1ZXN0aW9uc0Fuc3dlcmVkKG51bWJlck9mUXVlc3Rpb25zQW5zd2VyZWQtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBuZXdQcm9ncmVzcyA9IHByb3BzLnByb2dyZXNzO1xyXG4gICAgICAgIG5ld1Byb2dyZXNzW3Byb3BzLmluZGV4XVsnYW5zd2VyJ10gPSBhbnN3ZXI7XHJcbiAgICAgICAgbmV3UHJvZ3Jlc3NbcHJvcHMuaW5kZXhdWyd2aWV3ZWQnXSA9IHN0YXRlO1xyXG4gICAgICAgIHByb3BzLnNldFByb2dyZXNzKG5ld1Byb2dyZXNzKTtcclxuICAgICAgICBwcm9wcy5zZXRTdWJtaXR0ZWQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0RmVlZGJhY2soZmVlZGJhY2spIHtcclxuICAgICAgICBsZXQgbmV3UHJvZ3Jlc3MgPSBwcm9wcy5wcm9ncmVzcztcclxuICAgICAgICBuZXdQcm9ncmVzc1twcm9wcy5pbmRleF1bJ2ZlZWRiYWNrJ10gPSBmZWVkYmFjaztcclxuICAgICAgICBwcm9wcy5zZXRQcm9ncmVzcyhuZXdQcm9ncmVzcyk7XHJcbiAgICAgICAgcHJvcHMuc2V0UmVzcG9uc2UodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGdldEl0ZW0oKSB7XHJcbiAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnVGV4dCc6XHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpZXdlZFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS50ZXh0fTwvcD4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1F1ZXN0aW9uJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxRdWVzdGlvbiB1cGRhdGU9e3VwZGF0ZX0gcHJvZ3Jlc3M9e3Byb3BzLnByb2dyZXNzW3Byb3BzLmluZGV4XX0gc2V0RmVlZGJhY2s9e3NldEZlZWRiYWNrfSBpdGVtPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdJbWFnZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiMjcwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1wcmV2aWV3XCIgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGI2NHRvQmxvYihpdGVtLmZpbGUpKX0gYWx0PXtpdGVtLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgY2FzZSAnVmlkZW8nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiBcIjI3MHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiNDgwcHhcIiBoZWlnaHQ9XCIxMDAlXCIgc3JjPXtcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiKyBpdGVtLnlvdXR1YmVJZH0gc3R5bGU9e3tib3JkZXI6IFwibm9uZVwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCJ9fSB0aXRsZT1cIlZpZGVvIHByZXZpZXdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIHtnZXRJdGVtKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiYjY0dG9CbG9iIiwiYjY0RGF0YSIsImNvbnRlbnRUeXBlIiwic2xpY2VTaXplIiwiYnl0ZUNoYXJhY3RlcnMiLCJhdG9iIiwiYnl0ZUFycmF5cyIsIm9mZnNldCIsImxlbmd0aCIsInNsaWNlIiwiYnl0ZU51bWJlcnMiLCJBcnJheSIsImkiLCJjaGFyQ29kZUF0IiwiYnl0ZUFycmF5IiwiVWludDhBcnJheSIsInB1c2giLCJibG9iIiwiQmxvYiIsInR5cGUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJRdWVzdGlvbiIsInByb3BzIiwiYW5zd2VyIiwic2V0QW5zd2VyIiwic2VuZEFuc3dlciIsInVwZGF0ZSIsInBvc3QiLCJ0ZXh0IiwiaXRlbSIsInF1ZXN0aW9uVHlwZSIsInRoZW4iLCJyZXNwb25zZSIsInNldEZlZWRiYWNrIiwiZGF0YSIsImZlZWRiYWNrIiwiY2xlYXIiLCJoZWlnaHQiLCJ3aWR0aCIsInF1ZXN0aW9uIiwicHJvZ3Jlc3MiLCJ2aWV3ZWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2aWV3IiwibnVtYmVyT2ZRdWVzdGlvbnMiLCJzZXROdW1iZXJPZlF1ZXN0aW9ucyIsIm51bWJlck9mUXVlc3Rpb25zQW5zd2VyZWQiLCJzZXROdW1iZXJPZlF1ZXN0aW9uc0Fuc3dlcmVkIiwicXVlc3Rpb25Db3VudGVyIiwiYW5zd2VyZWRRdWVzdGlvbkNvdW50ZXIiLCJjb3Vyc2UiLCJzZXRJc0ZpbmlzaGVkIiwic3RhdGUiLCJuZXdQcm9ncmVzcyIsImluZGV4Iiwic2V0UHJvZ3Jlc3MiLCJzZXRTdWJtaXR0ZWQiLCJzZXRSZXNwb25zZSIsImdldEl0ZW0iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJmaWxlIiwibmFtZSIsInlvdXR1YmVJZCIsImJvcmRlciIsImJvcmRlclJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=