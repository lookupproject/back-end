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
          multiline: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtVQUFDLEtBQUssRUFBQztRQUFlLEVBQUcsQ0FDM0o7TUFDZDtRQUNJO0lBQU07RUFHbEI7RUFFQSxvQkFDRztJQUFLLEVBQUUsRUFBQztFQUFTLEdBQ1hoQixPQUFPLEVBQUUsQ0FDVDtBQUViOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNpRDtBQUNEO0FBRWhELElBQU1KLGVBQWUsR0FBR3FCLHVFQUFNLENBQUNDLCtEQUFTLENBQUMsQ0FBQztFQUN6QyxxQkFBcUIsRUFBRTtJQUNyQkMsS0FBSyxFQUFFO0VBQ1QsQ0FBQztFQUNELGVBQWUsRUFBRTtJQUNoQkEsS0FBSyxFQUFFO0VBQ1IsQ0FBQztFQUNELFNBQVMsRUFBRTtJQUNUQSxLQUFLLEVBQUU7RUFDVCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0lBQ1BBLEtBQUssRUFBRTtFQUNULENBQUM7RUFDRSx1QkFBdUIsRUFBRTtJQUNyQkEsS0FBSyxFQUFFO0VBQ1gsQ0FBQztFQUNKLDBCQUEwQixFQUFFO0lBQzFCLFlBQVksRUFBRTtNQUNmQyxXQUFXLEVBQUU7SUFDWixDQUFDO0lBQ0Qsa0JBQWtCLEVBQUU7TUFDckJBLFdBQVcsRUFBRTtJQUNaLENBQUM7SUFDRCx3QkFBd0IsRUFBRTtNQUMzQkEsV0FBVyxFQUFFO0lBQ1o7RUFDRixDQUFDO0VBQ0VDLFlBQVksRUFBRTtBQUNsQixDQUFDLENBQUM7QUFFRixpRUFBZXpCLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9zcmMvY3JlYXRvci9iNjR0b2Jsb2IuanMiLCJ3ZWJwYWNrOi8vZnJvbnQtZW5kLy4vc3JjL2NyZWF0b3IvaXRlbS5qcyIsIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9zcmMvY3JlYXRvci90ZXh0SW5wdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYjY0dG9CbG9iKGI2NERhdGEsIGNvbnRlbnRUeXBlPScnLCBzbGljZVNpemU9NTEyKSB7XHJcblx0Y29uc3QgYnl0ZUNoYXJhY3RlcnMgPSBhdG9iKGI2NERhdGEpO1xyXG5cdGNvbnN0IGJ5dGVBcnJheXMgPSBbXTtcclxuICBcclxuXHRmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBieXRlQ2hhcmFjdGVycy5sZW5ndGg7IG9mZnNldCArPSBzbGljZVNpemUpIHtcclxuXHQgIGNvbnN0IHNsaWNlID0gYnl0ZUNoYXJhY3RlcnMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBzbGljZVNpemUpO1xyXG4gIFxyXG5cdCAgY29uc3QgYnl0ZU51bWJlcnMgPSBuZXcgQXJyYXkoc2xpY2UubGVuZ3RoKTtcclxuXHQgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpY2UubGVuZ3RoOyBpKyspIHtcclxuXHRcdGJ5dGVOdW1iZXJzW2ldID0gc2xpY2UuY2hhckNvZGVBdChpKTtcclxuXHQgIH1cclxuICBcclxuXHQgIGNvbnN0IGJ5dGVBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ5dGVOdW1iZXJzKTtcclxuXHQgIGJ5dGVBcnJheXMucHVzaChieXRlQXJyYXkpO1xyXG5cdH1cclxuICBcclxuXHRjb25zdCBibG9iID0gbmV3IEJsb2IoYnl0ZUFycmF5cywge3R5cGU6IGNvbnRlbnRUeXBlfSk7XHJcblx0cmV0dXJuIGJsb2I7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYjY0dG9CbG9iIGZyb20gXCIuL2I2NHRvYmxvYlwiO1xyXG5pbXBvcnQgQ3VzdG9tVGV4dEZpZWxkIGZyb20gXCIuL3RleHRJbnB1dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJldmlldyhwcm9wcykge1xyXG4gICAgY29uc3QgaXRlbSA9IHByb3BzLml0ZW07XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SXRlbSgpIHtcclxuICAgICAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdUZXh0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udGV4dH08L3A+KTtcclxuICAgICAgICAgICAgY2FzZSAnUXVlc3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcdFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJmaXQtY29udGVudFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2l0ZW0ucXVlc3Rpb259PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57aXRlbS5xdWVzdGlvblR5cGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21UZXh0RmllbGQgbXVsdGlsaW5lIHZhbHVlPXtpdGVtLmFuc3dlcn0gZnVsbFdpZHRoIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgY2FzZSAnSW1hZ2UnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiBcIjI3MHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctcHJldmlld1wiIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChiNjR0b0Jsb2IoaXRlbS5maWxlKSl9IGFsdD17aXRlbS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XHJcbiAgICAgICAgICAgIGNhc2UgJ1ZpZGVvJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogXCIyNzBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSB3aWR0aD1cIjQ4MHB4XCIgaGVpZ2h0PVwiMTAwJVwiIHNyYz17XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIisgaXRlbS55b3V0dWJlSWR9IHN0eWxlPXt7Ym9yZGVyOiBcIm5vbmVcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwifX0gdGl0bGU9XCJWaWRlbyBwcmV2aWV3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxkaXYgaWQ9XCJwcmV2aWV3XCI+XHJcbiAgICAgICAgICAgIHtnZXRJdGVtKCl9XHJcbiAgICAgICA8L2Rpdj4gXHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXMvc3R5bGVkXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XHJcblxyXG5jb25zdCBDdXN0b21UZXh0RmllbGQgPSBzdHlsZWQoVGV4dEZpZWxkKSh7XHJcblx0JyYgbGFiZWwuTXVpLWZvY3VzZWQnOiB7XHJcblx0ICBjb2xvcjogJ3doaXRlJyxcclxuXHR9LFxyXG5cdCcmOmhvdmVyIGxhYmVsJzoge1xyXG5cdFx0Y29sb3I6ICd3aGl0ZSdcclxuXHR9LFxyXG5cdCcmIGxhYmVsJzoge1xyXG5cdCAgY29sb3I6ICcjMTRCNEMzJyxcclxuXHR9LFxyXG5cdCdpbnB1dCc6IHtcclxuXHQgIGNvbG9yOiAnd2hpdGUnLFxyXG5cdH0sXHJcbiAgICAnJiAuTXVpSW5wdXRCYXNlLWlucHV0Jzoge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnXHJcbiAgICB9LFxyXG5cdCcmIC5NdWlPdXRsaW5lZElucHV0LXJvb3QnOiB7XHJcblx0ICAnJiBmaWVsZHNldCc6IHtcclxuXHRcdGJvcmRlckNvbG9yOiAnIzE0QjRDMycsXHJcblx0ICB9LFxyXG5cdCAgJyY6aG92ZXIgZmllbGRzZXQnOiB7XHJcblx0XHRib3JkZXJDb2xvcjogJyNmZmYnLFxyXG5cdCAgfSxcclxuXHQgICcmLk11aS1mb2N1c2VkIGZpZWxkc2V0Jzoge1xyXG5cdFx0Ym9yZGVyQ29sb3I6ICcjZmZmJyxcclxuXHQgIH0sXHJcblx0fSxcclxuICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCJcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21UZXh0RmllbGQ7Il0sIm5hbWVzIjpbImI2NHRvQmxvYiIsImI2NERhdGEiLCJjb250ZW50VHlwZSIsInNsaWNlU2l6ZSIsImJ5dGVDaGFyYWN0ZXJzIiwiYXRvYiIsImJ5dGVBcnJheXMiLCJvZmZzZXQiLCJsZW5ndGgiLCJzbGljZSIsImJ5dGVOdW1iZXJzIiwiQXJyYXkiLCJpIiwiY2hhckNvZGVBdCIsImJ5dGVBcnJheSIsIlVpbnQ4QXJyYXkiLCJwdXNoIiwiYmxvYiIsIkJsb2IiLCJ0eXBlIiwiUmVhY3QiLCJDdXN0b21UZXh0RmllbGQiLCJwcmV2aWV3IiwicHJvcHMiLCJpdGVtIiwiZ2V0SXRlbSIsInRleHQiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJxdWVzdGlvbiIsInF1ZXN0aW9uVHlwZSIsImFuc3dlciIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImZpbGUiLCJuYW1lIiwieW91dHViZUlkIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwic3R5bGVkIiwiVGV4dEZpZWxkIiwiY29sb3IiLCJib3JkZXJDb2xvciIsIm1hcmdpbkJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=