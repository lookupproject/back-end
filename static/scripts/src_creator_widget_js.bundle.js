"use strict";
(self["webpackChunkfront_end"] = self["webpackChunkfront_end"] || []).push([["src_creator_widget_js"],{

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

/***/ "./src/creator/widget.js":
/*!*******************************!*\
  !*** ./src/creator/widget.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _b64toblob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b64toblob */ "./src/creator/b64toblob.js");


function DeleteButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    id: "btn-delete",
    onClick: function onClick() {
      props.deleteItem(props.index);
      console.log("Deleted item");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "20",
    width: "20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6.5 17q-.625 0-1.062-.438Q5 16.125 5 15.5v-10H4V4h4V3h4v1h4v1.5h-1v10q0 .625-.438 1.062Q14.125 17 13.5 17ZM8 14h1.5V7H8Zm2.5 0H12V7h-1.5Z"
  })));
}
function Widget(props) {
  var item = props.item;
  function getWidget() {
    switch (item.type) {
      case 'Text':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
          className: "widget-text"
        }, item.text);
      case 'Question':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          style: {
            width: "100%",
            height: "fit-content"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
          className: "widget-text"
        }, item.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
          className: "widget-text"
        }, item.answer));
      case 'Image':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "img-wrapper-small"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          className: "img-preview",
          src: URL.createObjectURL((0,_b64toblob__WEBPACK_IMPORTED_MODULE_1__["default"])(item.file)),
          alt: item.name
        }));
      case 'Video':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
          src: "https://www.youtube.com/embed/" + item.youtubeId,
          style: {
            border: "none",
            margin: "10px",
            borderRadius: "5px"
          },
          title: "Video preview"
        });
      default:
        break;
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "widget",
    className: "round-border blue-border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteButton, {
    deleteItem: props.deleteItem,
    index: props.index
  }), getWidget());
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ1csU0FBVTtVQUFDLEtBQUssRUFBRTtZQUFDQyxNQUFNLEVBQUUsTUFBTTtZQUFFQyxNQUFNLEVBQUUsTUFBTTtZQUFFQyxZQUFZLEVBQUU7VUFBSyxDQUFFO1VBQUMsS0FBSyxFQUFDO1FBQWUsRUFBVTtNQUNwSztRQUNJO0lBQU07RUFHbEI7RUFFSCxvQkFDTztJQUFLLEVBQUUsRUFBQyxRQUFRO0lBQUMsU0FBUyxFQUFDO0VBQTBCLGdCQUNqRCwyREFBQyxZQUFZO0lBQUMsVUFBVSxFQUFFcEIsS0FBSyxDQUFDQyxVQUFXO0lBQUMsS0FBSyxFQUFFRCxLQUFLLENBQUNFO0VBQU0sRUFBRyxFQUMxRUssU0FBUyxFQUFFLENBQ0Q7QUFFZCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC8uL3NyYy9jcmVhdG9yL2I2NHRvYmxvYi5qcyIsIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9zcmMvY3JlYXRvci93aWRnZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYjY0dG9CbG9iKGI2NERhdGEsIGNvbnRlbnRUeXBlPScnLCBzbGljZVNpemU9NTEyKSB7XHJcblx0Y29uc3QgYnl0ZUNoYXJhY3RlcnMgPSBhdG9iKGI2NERhdGEpO1xyXG5cdGNvbnN0IGJ5dGVBcnJheXMgPSBbXTtcclxuICBcclxuXHRmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBieXRlQ2hhcmFjdGVycy5sZW5ndGg7IG9mZnNldCArPSBzbGljZVNpemUpIHtcclxuXHQgIGNvbnN0IHNsaWNlID0gYnl0ZUNoYXJhY3RlcnMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBzbGljZVNpemUpO1xyXG4gIFxyXG5cdCAgY29uc3QgYnl0ZU51bWJlcnMgPSBuZXcgQXJyYXkoc2xpY2UubGVuZ3RoKTtcclxuXHQgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpY2UubGVuZ3RoOyBpKyspIHtcclxuXHRcdGJ5dGVOdW1iZXJzW2ldID0gc2xpY2UuY2hhckNvZGVBdChpKTtcclxuXHQgIH1cclxuICBcclxuXHQgIGNvbnN0IGJ5dGVBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ5dGVOdW1iZXJzKTtcclxuXHQgIGJ5dGVBcnJheXMucHVzaChieXRlQXJyYXkpO1xyXG5cdH1cclxuICBcclxuXHRjb25zdCBibG9iID0gbmV3IEJsb2IoYnl0ZUFycmF5cywge3R5cGU6IGNvbnRlbnRUeXBlfSk7XHJcblx0cmV0dXJuIGJsb2I7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYjY0dG9CbG9iIGZyb20gXCIuL2I2NHRvYmxvYlwiO1xyXG5cclxuZnVuY3Rpb24gRGVsZXRlQnV0dG9uKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tZGVsZXRlXCIgb25DbGljaz17KCkgPT4ge3Byb3BzLmRlbGV0ZUl0ZW0ocHJvcHMuaW5kZXgpOyBjb25zb2xlLmxvZyhcIkRlbGV0ZWQgaXRlbVwiKX19PlxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIyMFwiIHdpZHRoPVwiMjBcIj5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk02LjUgMTdxLS42MjUgMC0xLjA2Mi0uNDM4UTUgMTYuMTI1IDUgMTUuNXYtMTBINFY0aDRWM2g0djFoNHYxLjVoLTF2MTBxMCAuNjI1LS40MzggMS4wNjJRMTQuMTI1IDE3IDEzLjUgMTdaTTggMTRoMS41VjdIOFptMi41IDBIMTJWN2gtMS41WlwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0KHByb3BzKSB7XHJcbiAgICBjb25zdCBpdGVtID0gcHJvcHMuaXRlbTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRXaWRnZXQoKSB7XHJcbiAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnVGV4dCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3aWRnZXQtdGV4dFwiPntpdGVtLnRleHR9PC9wPik7XHJcbiAgICAgICAgICAgIGNhc2UgJ1F1ZXN0aW9uJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHRcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiZml0LWNvbnRlbnRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwid2lkZ2V0LXRleHRcIj57aXRlbS5xdWVzdGlvbn08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3aWRnZXQtdGV4dFwiPntpdGVtLmFuc3dlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgY2FzZSAnSW1hZ2UnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctd3JhcHBlci1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1wcmV2aWV3XCIgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGI2NHRvQmxvYihpdGVtLmZpbGUpKX0gYWx0PXtpdGVtLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgY2FzZSAnVmlkZW8nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9e1wiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCIrIGl0ZW0ueW91dHViZUlkfSBzdHlsZT17e2JvcmRlcjogXCJub25lXCIsIG1hcmdpbjogXCIxMHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIn19IHRpdGxlPVwiVmlkZW8gcHJldmlld1wiPjwvaWZyYW1lPik7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0cmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwid2lkZ2V0XCIgY2xhc3NOYW1lPVwicm91bmQtYm9yZGVyIGJsdWUtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxEZWxldGVCdXR0b24gZGVsZXRlSXRlbT17cHJvcHMuZGVsZXRlSXRlbX0gaW5kZXg9e3Byb3BzLmluZGV4fSAvPlxyXG5cdFx0XHR7Z2V0V2lkZ2V0KCl9XHJcbiAgICAgICAgPC9kaXY+XHJcblx0KTtcclxufSJdLCJuYW1lcyI6WyJiNjR0b0Jsb2IiLCJiNjREYXRhIiwiY29udGVudFR5cGUiLCJzbGljZVNpemUiLCJieXRlQ2hhcmFjdGVycyIsImF0b2IiLCJieXRlQXJyYXlzIiwib2Zmc2V0IiwibGVuZ3RoIiwic2xpY2UiLCJieXRlTnVtYmVycyIsIkFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJieXRlQXJyYXkiLCJVaW50OEFycmF5IiwicHVzaCIsImJsb2IiLCJCbG9iIiwidHlwZSIsIlJlYWN0IiwiRGVsZXRlQnV0dG9uIiwicHJvcHMiLCJkZWxldGVJdGVtIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiV2lkZ2V0IiwiaXRlbSIsImdldFdpZGdldCIsInRleHQiLCJ3aWR0aCIsImhlaWdodCIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZSIsIm5hbWUiLCJ5b3V0dWJlSWQiLCJib3JkZXIiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9