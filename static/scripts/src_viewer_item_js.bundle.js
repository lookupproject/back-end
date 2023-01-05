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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "item"
  }, getItem());
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9mcm9udC1lbmQvLi9zcmMvdmlld2VyL2l0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYjY0dG9CbG9iKGI2NERhdGEsIGNvbnRlbnRUeXBlPScnLCBzbGljZVNpemU9NTEyKSB7XHJcblx0Y29uc3QgYnl0ZUNoYXJhY3RlcnMgPSBhdG9iKGI2NERhdGEpO1xyXG5cdGNvbnN0IGJ5dGVBcnJheXMgPSBbXTtcclxuICBcclxuXHRmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBieXRlQ2hhcmFjdGVycy5sZW5ndGg7IG9mZnNldCArPSBzbGljZVNpemUpIHtcclxuXHQgIGNvbnN0IHNsaWNlID0gYnl0ZUNoYXJhY3RlcnMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBzbGljZVNpemUpO1xyXG4gIFxyXG5cdCAgY29uc3QgYnl0ZU51bWJlcnMgPSBuZXcgQXJyYXkoc2xpY2UubGVuZ3RoKTtcclxuXHQgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpY2UubGVuZ3RoOyBpKyspIHtcclxuXHRcdGJ5dGVOdW1iZXJzW2ldID0gc2xpY2UuY2hhckNvZGVBdChpKTtcclxuXHQgIH1cclxuICBcclxuXHQgIGNvbnN0IGJ5dGVBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ5dGVOdW1iZXJzKTtcclxuXHQgIGJ5dGVBcnJheXMucHVzaChieXRlQXJyYXkpO1xyXG5cdH1cclxuICBcclxuXHRjb25zdCBibG9iID0gbmV3IEJsb2IoYnl0ZUFycmF5cywge3R5cGU6IGNvbnRlbnRUeXBlfSk7XHJcblx0cmV0dXJuIGJsb2I7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBiNjR0b0Jsb2IgZnJvbSBcIi4uL2NyZWF0b3IvYjY0dG9ibG9iXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIFF1ZXN0aW9uKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNlbmRBbnN3ZXIoKSB7XHJcbiAgICAgICAgaWYgKGFuc3dlciAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBwcm9wcy51cGRhdGUoYW5zd2VyLCB0cnVlKTtcclxuICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9mZWVkYmFjaycsIHsgdGV4dDogcHJvcHMuaXRlbS5hbnN3ZXIsIGFuc3dlcjogYW5zd2VyLCBxdWVzdGlvblR5cGU6IHByb3BzLml0ZW0ucXVlc3Rpb25UeXBlIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtwcm9wcy5zZXRGZWVkYmFjayhyZXNwb25zZS5kYXRhLmZlZWRiYWNrKTsgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5mZWVkYmFjayl9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXIoKSB7XHJcbiAgICAgICAgcHJvcHMudXBkYXRlKFwiXCIsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcdFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiZml0LWNvbnRlbnRcIiwgd2lkdGg6IFwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgIDxoMz57cHJvcHMuaXRlbS5xdWVzdGlvbn08L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgeyBwcm9wcy5wcm9ncmVzcy52aWV3ZWQgPyA8aW5wdXQgdmFsdWU9e3Byb3BzLnByb2dyZXNzLmFuc3dlcn0gLz4gOiA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbnN3ZXIoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17YW5zd2VyfSAvPiB9XHJcbiAgICAgICAgICAgIHsgcHJvcHMucHJvZ3Jlc3Mudmlld2VkID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjbGVhcigpfSA+Q2xlYXI8L2J1dHRvbj4gOiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNlbmRBbnN3ZXIoKX0gPkFuc3dlcjwvYnV0dG9uPiB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7cHJvcHMucHJvZ3Jlc3MuZmVlZGJhY2sgPyA8aDM+e3Byb3BzLnByb2dyZXNzLmZlZWRiYWNrfTwvaDM+IDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJldmlldyhwcm9wcykge1xyXG4gICAgY29uc3QgaXRlbSA9IHByb3BzLml0ZW07XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlKGFuc3dlciwgc3RhdGUpIHtcclxuICAgICAgICBsZXQgbmV3UHJvZ3Jlc3MgPSBwcm9wcy5wcm9ncmVzcztcclxuICAgICAgICBuZXdQcm9ncmVzc1twcm9wcy5pbmRleF1bJ2Fuc3dlciddID0gYW5zd2VyO1xyXG4gICAgICAgIG5ld1Byb2dyZXNzW3Byb3BzLmluZGV4XVsndmlld2VkJ10gPSBzdGF0ZTtcclxuICAgICAgICBwcm9wcy5zZXRQcm9ncmVzcyhuZXdQcm9ncmVzcyk7XHJcbiAgICAgICAgcHJvcHMuc2V0U3VibWl0dGVkKHRydWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXRGZWVkYmFjayhmZWVkYmFjaykge1xyXG4gICAgICAgIGxldCBuZXdQcm9ncmVzcyA9IHByb3BzLnByb2dyZXNzO1xyXG4gICAgICAgIG5ld1Byb2dyZXNzW3Byb3BzLmluZGV4XVsnZmVlZGJhY2snXSA9IGZlZWRiYWNrO1xyXG4gICAgICAgIHByb3BzLnNldFByb2dyZXNzKG5ld1Byb2dyZXNzKTtcclxuICAgICAgICBwcm9wcy5zZXRSZXNwb25zZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJdGVtKCkge1xyXG4gICAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ1RleHQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS50ZXh0fTwvcD4pO1xyXG4gICAgICAgICAgICBjYXNlICdRdWVzdGlvbic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFF1ZXN0aW9uIHVwZGF0ZT17dXBkYXRlfSBwcm9ncmVzcz17cHJvcHMucHJvZ3Jlc3NbcHJvcHMuaW5kZXhdfSBzZXRGZWVkYmFjaz17c2V0RmVlZGJhY2t9IGl0ZW09e2l0ZW19IC8+XHJcbiAgICAgICAgICAgIGNhc2UgJ0ltYWdlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogXCIyNzBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLXByZXZpZXdcIiBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwoYjY0dG9CbG9iKGl0ZW0uZmlsZSkpfSBhbHQ9e2l0ZW0ubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgICAgICAgICBjYXNlICdWaWRlbyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiMjcwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgd2lkdGg9XCI0ODBweFwiIGhlaWdodD1cIjEwMCVcIiBzcmM9e1wiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCIrIGl0ZW0ueW91dHViZUlkfSBzdHlsZT17e2JvcmRlcjogXCJub25lXCIsIGJvcmRlclJhZGl1czogXCI1cHhcIn19IHRpdGxlPVwiVmlkZW8gcHJldmlld1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8ZGl2IGlkPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICB7Z2V0SXRlbSgpfVxyXG4gICAgICAgPC9kaXY+IFxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJiNjR0b0Jsb2IiLCJiNjREYXRhIiwiY29udGVudFR5cGUiLCJzbGljZVNpemUiLCJieXRlQ2hhcmFjdGVycyIsImF0b2IiLCJieXRlQXJyYXlzIiwib2Zmc2V0IiwibGVuZ3RoIiwic2xpY2UiLCJieXRlTnVtYmVycyIsIkFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJieXRlQXJyYXkiLCJVaW50OEFycmF5IiwicHVzaCIsImJsb2IiLCJCbG9iIiwidHlwZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIlF1ZXN0aW9uIiwicHJvcHMiLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJzZW5kQW5zd2VyIiwidXBkYXRlIiwicG9zdCIsInRleHQiLCJpdGVtIiwicXVlc3Rpb25UeXBlIiwidGhlbiIsInJlc3BvbnNlIiwic2V0RmVlZGJhY2siLCJkYXRhIiwiZmVlZGJhY2siLCJjb25zb2xlIiwibG9nIiwiY2xlYXIiLCJoZWlnaHQiLCJ3aWR0aCIsInF1ZXN0aW9uIiwicHJvZ3Jlc3MiLCJ2aWV3ZWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2aWV3Iiwic3RhdGUiLCJuZXdQcm9ncmVzcyIsImluZGV4Iiwic2V0UHJvZ3Jlc3MiLCJzZXRTdWJtaXR0ZWQiLCJzZXRSZXNwb25zZSIsImdldEl0ZW0iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJmaWxlIiwibmFtZSIsInlvdXR1YmVJZCIsImJvcmRlciIsImJvcmRlclJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=