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
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, item.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_textInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVoRCxJQUFNSixlQUFlLEdBQUdpQix1RUFBTSxDQUFDQywrREFBUyxDQUFDLENBQUM7RUFDekMscUJBQXFCLEVBQUU7SUFDckJDLEtBQUssRUFBRTtFQUNULENBQUM7RUFDRCxlQUFlLEVBQUU7SUFDaEJBLEtBQUssRUFBRTtFQUNSLENBQUM7RUFDRCxTQUFTLEVBQUU7SUFDVEEsS0FBSyxFQUFFO0VBQ1QsQ0FBQztFQUNELE9BQU8sRUFBRTtJQUNQQSxLQUFLLEVBQUU7RUFDVCxDQUFDO0VBQ0UsdUJBQXVCLEVBQUU7SUFDckJBLEtBQUssRUFBRTtFQUNYLENBQUM7RUFDSiwwQkFBMEIsRUFBRTtJQUMxQixZQUFZLEVBQUU7TUFDZkMsV0FBVyxFQUFFO0lBQ1osQ0FBQztJQUNELGtCQUFrQixFQUFFO01BQ3JCQSxXQUFXLEVBQUU7SUFDWixDQUFDO0lBQ0Qsd0JBQXdCLEVBQUU7TUFDM0JBLFdBQVcsRUFBRTtJQUNaO0VBQ0YsQ0FBQztFQUNFQyxZQUFZLEVBQUU7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsaUVBQWVyQixlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtZW5kLy4vc3JjL2NyZWF0b3IvYjY0dG9ibG9iLmpzIiwid2VicGFjazovL2Zyb250LWVuZC8uL3NyYy9jcmVhdG9yL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vZnJvbnQtZW5kLy4vc3JjL2NyZWF0b3IvdGV4dElucHV0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGI2NHRvQmxvYihiNjREYXRhLCBjb250ZW50VHlwZT0nJywgc2xpY2VTaXplPTUxMikge1xyXG5cdGNvbnN0IGJ5dGVDaGFyYWN0ZXJzID0gYXRvYihiNjREYXRhKTtcclxuXHRjb25zdCBieXRlQXJyYXlzID0gW107XHJcbiAgXHJcblx0Zm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgYnl0ZUNoYXJhY3RlcnMubGVuZ3RoOyBvZmZzZXQgKz0gc2xpY2VTaXplKSB7XHJcblx0ICBjb25zdCBzbGljZSA9IGJ5dGVDaGFyYWN0ZXJzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgc2xpY2VTaXplKTtcclxuICBcclxuXHQgIGNvbnN0IGJ5dGVOdW1iZXJzID0gbmV3IEFycmF5KHNsaWNlLmxlbmd0aCk7XHJcblx0ICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWNlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRieXRlTnVtYmVyc1tpXSA9IHNsaWNlLmNoYXJDb2RlQXQoaSk7XHJcblx0ICB9XHJcbiAgXHJcblx0ICBjb25zdCBieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShieXRlTnVtYmVycyk7XHJcblx0ICBieXRlQXJyYXlzLnB1c2goYnl0ZUFycmF5KTtcclxuXHR9XHJcbiAgXHJcblx0Y29uc3QgYmxvYiA9IG5ldyBCbG9iKGJ5dGVBcnJheXMsIHt0eXBlOiBjb250ZW50VHlwZX0pO1xyXG5cdHJldHVybiBibG9iO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGI2NHRvQmxvYiBmcm9tIFwiLi9iNjR0b2Jsb2JcIjtcclxuaW1wb3J0IEN1c3RvbVRleHRGaWVsZCBmcm9tIFwiLi90ZXh0SW5wdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXZpZXcocHJvcHMpIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBwcm9wcy5pdGVtO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEl0ZW0oKSB7XHJcbiAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnVGV4dCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnRleHR9PC9wPik7XHJcbiAgICAgICAgICAgIGNhc2UgJ1F1ZXN0aW9uJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHRcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiZml0LWNvbnRlbnRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2l0ZW0ucXVlc3Rpb259PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbVRleHRGaWVsZCB2YWx1ZT17aXRlbS5hbnN3ZXJ9IGZ1bGxXaWR0aCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XHJcbiAgICAgICAgICAgIGNhc2UgJ0ltYWdlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogXCIyNzBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLXByZXZpZXdcIiBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwoYjY0dG9CbG9iKGl0ZW0uZmlsZSkpfSBhbHQ9e2l0ZW0ubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgICAgICAgICBjYXNlICdWaWRlbyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiMjcwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgd2lkdGg9XCI0ODBweFwiIGhlaWdodD1cIjEwMCVcIiBzcmM9e1wiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCIrIGl0ZW0ueW91dHViZUlkfSBzdHlsZT17e2JvcmRlcjogXCJub25lXCIsIGJvcmRlclJhZGl1czogXCI1cHhcIn19IHRpdGxlPVwiVmlkZW8gcHJldmlld1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8ZGl2IGlkPVwicHJldmlld1wiPlxyXG4gICAgICAgICAgICB7Z2V0SXRlbSgpfVxyXG4gICAgICAgPC9kaXY+IFxyXG4gICAgKTtcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzL3N0eWxlZFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xyXG5cclxuY29uc3QgQ3VzdG9tVGV4dEZpZWxkID0gc3R5bGVkKFRleHRGaWVsZCkoe1xyXG5cdCcmIGxhYmVsLk11aS1mb2N1c2VkJzoge1xyXG5cdCAgY29sb3I6ICd3aGl0ZScsXHJcblx0fSxcclxuXHQnJjpob3ZlciBsYWJlbCc6IHtcclxuXHRcdGNvbG9yOiAnd2hpdGUnXHJcblx0fSxcclxuXHQnJiBsYWJlbCc6IHtcclxuXHQgIGNvbG9yOiAnIzE0QjRDMycsXHJcblx0fSxcclxuXHQnaW5wdXQnOiB7XHJcblx0ICBjb2xvcjogJ3doaXRlJyxcclxuXHR9LFxyXG4gICAgJyYgLk11aUlucHV0QmFzZS1pbnB1dCc6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJ1xyXG4gICAgfSxcclxuXHQnJiAuTXVpT3V0bGluZWRJbnB1dC1yb290Jzoge1xyXG5cdCAgJyYgZmllbGRzZXQnOiB7XHJcblx0XHRib3JkZXJDb2xvcjogJyMxNEI0QzMnLFxyXG5cdCAgfSxcclxuXHQgICcmOmhvdmVyIGZpZWxkc2V0Jzoge1xyXG5cdFx0Ym9yZGVyQ29sb3I6ICcjZmZmJyxcclxuXHQgIH0sXHJcblx0ICAnJi5NdWktZm9jdXNlZCBmaWVsZHNldCc6IHtcclxuXHRcdGJvcmRlckNvbG9yOiAnI2ZmZicsXHJcblx0ICB9LFxyXG5cdH0sXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tVGV4dEZpZWxkOyJdLCJuYW1lcyI6WyJiNjR0b0Jsb2IiLCJiNjREYXRhIiwiY29udGVudFR5cGUiLCJzbGljZVNpemUiLCJieXRlQ2hhcmFjdGVycyIsImF0b2IiLCJieXRlQXJyYXlzIiwib2Zmc2V0IiwibGVuZ3RoIiwic2xpY2UiLCJieXRlTnVtYmVycyIsIkFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJieXRlQXJyYXkiLCJVaW50OEFycmF5IiwicHVzaCIsImJsb2IiLCJCbG9iIiwidHlwZSIsIlJlYWN0IiwiQ3VzdG9tVGV4dEZpZWxkIiwicHJldmlldyIsInByb3BzIiwiaXRlbSIsImdldEl0ZW0iLCJ0ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJxdWVzdGlvbiIsImFuc3dlciIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImZpbGUiLCJuYW1lIiwieW91dHViZUlkIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwic3R5bGVkIiwiVGV4dEZpZWxkIiwiY29sb3IiLCJib3JkZXJDb2xvciIsIm1hcmdpbkJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=