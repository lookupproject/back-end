"use strict";
(self["webpackChunkfront_end"] = self["webpackChunkfront_end"] || []).push([["src_creator_item_js"],{

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

/***/ "./src/creator/item.js":
/*!*****************************!*\
  !*** ./src/creator/item.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ preview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _b64toblob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b64toblob */ "./src/creator/b64toblob.js");
/* harmony import */ var _textInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textInput */ "./src/creator/textInput.js");



function preview(props) {
  var item = props.item;
  function getItem() {
    switch (item.type) {
      case 'Text':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.text);
      case 'Question':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          style: {
            width: "100%",
            height: "fit-content"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, item.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, item.questionType)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_textInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
          value: item.answer,
          fullWidth: true
        }));
      case 'Image':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          style: {
            height: "270px"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          className: "img-preview",
          src: URL.createObjectURL((0,_b64toblob__WEBPACK_IMPORTED_MODULE_1__["default"])(item.file)),
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
    id: "preview"
  }, getItem());
}

/***/ }),

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxFQUFDO1FBQWUsRUFBRyxDQUMzSjtNQUNkO1FBQ0k7SUFBTTtFQUdsQjtFQUVBLG9CQUNHO0lBQUssRUFBRSxFQUFDO0VBQVMsR0FDWGhCLE9BQU8sRUFBRSxDQUNUO0FBRWI7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ2lEO0FBQ0Q7QUFFaEQsSUFBTUosZUFBZSxHQUFHcUIsdUVBQU0sQ0FBQ0MsK0RBQVMsQ0FBQyxDQUFDO0VBQ3pDLHFCQUFxQixFQUFFO0lBQ3JCQyxLQUFLLEVBQUU7RUFDVCxDQUFDO0VBQ0QsZUFBZSxFQUFFO0lBQ2hCQSxLQUFLLEVBQUU7RUFDUixDQUFDO0VBQ0QsU0FBUyxFQUFFO0lBQ1RBLEtBQUssRUFBRTtFQUNULENBQUM7RUFDRCxPQUFPLEVBQUU7SUFDUEEsS0FBSyxFQUFFO0VBQ1QsQ0FBQztFQUNFLHVCQUF1QixFQUFFO0lBQ3JCQSxLQUFLLEVBQUU7RUFDWCxDQUFDO0VBQ0osMEJBQTBCLEVBQUU7SUFDMUIsWUFBWSxFQUFFO01BQ2ZDLFdBQVcsRUFBRTtJQUNaLENBQUM7SUFDRCxrQkFBa0IsRUFBRTtNQUNyQkEsV0FBVyxFQUFFO0lBQ1osQ0FBQztJQUNELHdCQUF3QixFQUFFO01BQzNCQSxXQUFXLEVBQUU7SUFDWjtFQUNGLENBQUM7RUFDRUMsWUFBWSxFQUFFO0FBQ2xCLENBQUMsQ0FBQztBQUVGLGlFQUFlekIsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC8uL3NyYy9jcmVhdG9yL2I2NHRvYmxvYi5qcyIsIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9zcmMvY3JlYXRvci9pdGVtLmpzIiwid2VicGFjazovL2Zyb250LWVuZC8uL3NyYy9jcmVhdG9yL3RleHRJbnB1dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiNjR0b0Jsb2IoYjY0RGF0YSwgY29udGVudFR5cGU9JycsIHNsaWNlU2l6ZT01MTIpIHtcclxuXHRjb25zdCBieXRlQ2hhcmFjdGVycyA9IGF0b2IoYjY0RGF0YSk7XHJcblx0Y29uc3QgYnl0ZUFycmF5cyA9IFtdO1xyXG4gIFxyXG5cdGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGJ5dGVDaGFyYWN0ZXJzLmxlbmd0aDsgb2Zmc2V0ICs9IHNsaWNlU2l6ZSkge1xyXG5cdCAgY29uc3Qgc2xpY2UgPSBieXRlQ2hhcmFjdGVycy5zbGljZShvZmZzZXQsIG9mZnNldCArIHNsaWNlU2l6ZSk7XHJcbiAgXHJcblx0ICBjb25zdCBieXRlTnVtYmVycyA9IG5ldyBBcnJheShzbGljZS5sZW5ndGgpO1xyXG5cdCAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGljZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0Ynl0ZU51bWJlcnNbaV0gPSBzbGljZS5jaGFyQ29kZUF0KGkpO1xyXG5cdCAgfVxyXG4gIFxyXG5cdCAgY29uc3QgYnl0ZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZU51bWJlcnMpO1xyXG5cdCAgYnl0ZUFycmF5cy5wdXNoKGJ5dGVBcnJheSk7XHJcblx0fVxyXG4gIFxyXG5cdGNvbnN0IGJsb2IgPSBuZXcgQmxvYihieXRlQXJyYXlzLCB7dHlwZTogY29udGVudFR5cGV9KTtcclxuXHRyZXR1cm4gYmxvYjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBiNjR0b0Jsb2IgZnJvbSBcIi4vYjY0dG9ibG9iXCI7XHJcbmltcG9ydCBDdXN0b21UZXh0RmllbGQgZnJvbSBcIi4vdGV4dElucHV0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmV2aWV3KHByb3BzKSB7XHJcbiAgICBjb25zdCBpdGVtID0gcHJvcHMuaXRlbTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJdGVtKCkge1xyXG4gICAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ1RleHQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS50ZXh0fTwvcD4pO1xyXG4gICAgICAgICAgICBjYXNlICdRdWVzdGlvbic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFx0XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImZpdC1jb250ZW50XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57aXRlbS5xdWVzdGlvbn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntpdGVtLnF1ZXN0aW9uVHlwZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbVRleHRGaWVsZCB2YWx1ZT17aXRlbS5hbnN3ZXJ9IGZ1bGxXaWR0aCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XHJcbiAgICAgICAgICAgIGNhc2UgJ0ltYWdlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogXCIyNzBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLXByZXZpZXdcIiBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwoYjY0dG9CbG9iKGl0ZW0uZmlsZSkpfSBhbHQ9e2l0ZW0ubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgICAgICAgICBjYXNlICdWaWRlbyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiMjcwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgd2lkdGg9XCI0ODBweFwiIGhlaWdodD1cIjEwMCVcIiBzcmM9e1wiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCIrIGl0ZW0ueW91dHViZUlkfSBzdHlsZT17e2JvcmRlcjogXCJub25lXCIsIGJvcmRlclJhZGl1czogXCI1cHhcIn19IHRpdGxlPVwiVmlkZW8gcHJldmlld1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8ZGl2IGlkPVwicHJldmlld1wiPlxyXG4gICAgICAgICAgICB7Z2V0SXRlbSgpfVxyXG4gICAgICAgPC9kaXY+IFxyXG4gICAgKTtcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzL3N0eWxlZFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xyXG5cclxuY29uc3QgQ3VzdG9tVGV4dEZpZWxkID0gc3R5bGVkKFRleHRGaWVsZCkoe1xyXG5cdCcmIGxhYmVsLk11aS1mb2N1c2VkJzoge1xyXG5cdCAgY29sb3I6ICd3aGl0ZScsXHJcblx0fSxcclxuXHQnJjpob3ZlciBsYWJlbCc6IHtcclxuXHRcdGNvbG9yOiAnd2hpdGUnXHJcblx0fSxcclxuXHQnJiBsYWJlbCc6IHtcclxuXHQgIGNvbG9yOiAnIzE0QjRDMycsXHJcblx0fSxcclxuXHQnaW5wdXQnOiB7XHJcblx0ICBjb2xvcjogJ3doaXRlJyxcclxuXHR9LFxyXG4gICAgJyYgLk11aUlucHV0QmFzZS1pbnB1dCc6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJ1xyXG4gICAgfSxcclxuXHQnJiAuTXVpT3V0bGluZWRJbnB1dC1yb290Jzoge1xyXG5cdCAgJyYgZmllbGRzZXQnOiB7XHJcblx0XHRib3JkZXJDb2xvcjogJyMxNEI0QzMnLFxyXG5cdCAgfSxcclxuXHQgICcmOmhvdmVyIGZpZWxkc2V0Jzoge1xyXG5cdFx0Ym9yZGVyQ29sb3I6ICcjZmZmJyxcclxuXHQgIH0sXHJcblx0ICAnJi5NdWktZm9jdXNlZCBmaWVsZHNldCc6IHtcclxuXHRcdGJvcmRlckNvbG9yOiAnI2ZmZicsXHJcblx0ICB9LFxyXG5cdH0sXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tVGV4dEZpZWxkOyJdLCJuYW1lcyI6WyJiNjR0b0Jsb2IiLCJiNjREYXRhIiwiY29udGVudFR5cGUiLCJzbGljZVNpemUiLCJieXRlQ2hhcmFjdGVycyIsImF0b2IiLCJieXRlQXJyYXlzIiwib2Zmc2V0IiwibGVuZ3RoIiwic2xpY2UiLCJieXRlTnVtYmVycyIsIkFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJieXRlQXJyYXkiLCJVaW50OEFycmF5IiwicHVzaCIsImJsb2IiLCJCbG9iIiwidHlwZSIsIlJlYWN0IiwiQ3VzdG9tVGV4dEZpZWxkIiwicHJldmlldyIsInByb3BzIiwiaXRlbSIsImdldEl0ZW0iLCJ0ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwicXVlc3Rpb24iLCJxdWVzdGlvblR5cGUiLCJhbnN3ZXIiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJmaWxlIiwibmFtZSIsInlvdXR1YmVJZCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInN0eWxlZCIsIlRleHRGaWVsZCIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW5Cb3R0b20iXSwic291cmNlUm9vdCI6IiJ9