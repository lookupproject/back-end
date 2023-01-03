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
  var itemRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var onDragStart = function onDragStart(e) {
    e.dataTransfer.effectedAllowed = 'move';
    e.dataTransfer.setDragImage(e.target, 50000, 50000);

    // custom drag ghost
    var ghostNode = e.target.cloneNode(true);
    ghostNode.style.position = 'absolute';

    // show ghost pos
    ghostNode.style.top = e.pageY - e.target.offsetHeight / 2 + 'px';
    ghostNode.style.left = e.pageX - e.target.offsetWidth / 2 + 'px';
    ghostNode.style.height = e.target.offsetHeight + 'px';
    ghostNode.style.width = e.target.offsetWidth + 'px';
    ghostNode.style.opacity = '0.8';
    ghostNode.style.pointerEvents = 'none';

    // add id
    ghostNode.id = 'ghostNode';
    document.body.prepend(ghostNode);
    itemRef.current.classList.add('dragstart');
    if (props.onDragStart) {
      props.onDragStart(props.index);
    }
  };
  var onDrag = function onDrag(e) {
    //move node with mouse
    var ghostNode = document.querySelector('#ghostNode');
    ghostNode.style.top = e.pageY - e.target.offsetHeight / 2 + 'px';
    ghostNode.style.left = e.pageX - e.target.offsetWidth / 2 + 'px';
  };
  var onDragEnd = function onDragEnd(e) {
    // remove ghost node
    document.querySelector('#ghostNode').remove();
    // remove item style
    itemRef.current.classList.remove('dragstart');
  };
  var onDragEnter = function onDragEnter() {
    return itemRef.current.classList.add('dragover');
  };
  var onDragLeave = function onDragLeave() {
    return itemRef.current.classList.remove('dragover');
  };
  var onDragOver = function onDragOver(e) {
    return e.preventDefault();
  };
  var onDrop = function onDrop() {
    itemRef.current.classList.remove('dragover');
    props.onDrop(props.index);
  };
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
    className: "round-border blue-border",
    draggable: true,
    ref: itemRef,
    onDragStart: onDragStart,
    onDrag: onDrag,
    onDragEnd: onDragEnd,
    onDragEnter: onDragEnter,
    onDragLeave: onDragLeave,
    onDragOver: onDragOver,
    onDrop: onDrop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteButton, {
    deleteItem: props.deleteItem,
    index: props.index
  }), getWidget());
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNSLG9CQUNJO1VBQUssU0FBUyxFQUFDO1FBQW1CLGdCQUM5QjtVQUFLLFNBQVMsRUFBQyxhQUFhO1VBQUMsR0FBRyxFQUFFQyxHQUFHLENBQUNDLGVBQWUsQ0FBQ3pFLHNEQUFTLENBQUM4QixJQUFJLENBQUM0QyxJQUFJLENBQUMsQ0FBRTtVQUFDLEdBQUcsRUFBRTVDLElBQUksQ0FBQzZDO1FBQUssRUFBRyxDQUM3RjtNQUNkLEtBQUssT0FBTztRQUNSLG9CQUNJO1VBQVEsR0FBRyxFQUFFLGdDQUFnQyxHQUFFN0MsSUFBSSxDQUFDOEMsU0FBVTtVQUFDLEtBQUssRUFBRTtZQUFDQyxNQUFNLEVBQUUsTUFBTTtZQUFFQyxNQUFNLEVBQUUsTUFBTTtZQUFFQyxZQUFZLEVBQUU7VUFBSyxDQUFFO1VBQUMsS0FBSyxFQUFDO1FBQWUsRUFBVTtNQUNwSztRQUNJO0lBQU07RUFHbEI7RUFFSCxvQkFDTztJQUFLLEVBQUUsRUFBQyxRQUFRO0lBQUMsU0FBUyxFQUFDLDBCQUEwQjtJQUNqRCxTQUFTO0lBQ1QsR0FBRyxFQUFFaEQsT0FBUTtJQUNiLFdBQVcsRUFBRUMsV0FBWTtJQUN6QixNQUFNLEVBQUUyQixNQUFPO0lBQ2YsU0FBUyxFQUFFRSxTQUFVO0lBQ3JCLFdBQVcsRUFBRUUsV0FBWTtJQUN6QixXQUFXLEVBQUVDLFdBQVk7SUFDekIsVUFBVSxFQUFFQyxVQUFXO0lBQ3ZCLE1BQU0sRUFBRUU7RUFBTyxnQkFFZiwyREFBQyxZQUFZO0lBQUMsVUFBVSxFQUFFM0MsS0FBSyxDQUFDQyxVQUFXO0lBQUMsS0FBSyxFQUFFRCxLQUFLLENBQUNFO0VBQU0sRUFBRyxFQUMxRTBDLFNBQVMsRUFBRSxDQUNEO0FBRWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9zcmMvY3JlYXRvci9iNjR0b2Jsb2IuanMiLCJ3ZWJwYWNrOi8vZnJvbnQtZW5kLy4vc3JjL2NyZWF0b3Ivd2lkZ2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGI2NHRvQmxvYihiNjREYXRhLCBjb250ZW50VHlwZT0nJywgc2xpY2VTaXplPTUxMikge1xyXG5cdGNvbnN0IGJ5dGVDaGFyYWN0ZXJzID0gYXRvYihiNjREYXRhKTtcclxuXHRjb25zdCBieXRlQXJyYXlzID0gW107XHJcbiAgXHJcblx0Zm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgYnl0ZUNoYXJhY3RlcnMubGVuZ3RoOyBvZmZzZXQgKz0gc2xpY2VTaXplKSB7XHJcblx0ICBjb25zdCBzbGljZSA9IGJ5dGVDaGFyYWN0ZXJzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgc2xpY2VTaXplKTtcclxuICBcclxuXHQgIGNvbnN0IGJ5dGVOdW1iZXJzID0gbmV3IEFycmF5KHNsaWNlLmxlbmd0aCk7XHJcblx0ICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWNlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRieXRlTnVtYmVyc1tpXSA9IHNsaWNlLmNoYXJDb2RlQXQoaSk7XHJcblx0ICB9XHJcbiAgXHJcblx0ICBjb25zdCBieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShieXRlTnVtYmVycyk7XHJcblx0ICBieXRlQXJyYXlzLnB1c2goYnl0ZUFycmF5KTtcclxuXHR9XHJcbiAgXHJcblx0Y29uc3QgYmxvYiA9IG5ldyBCbG9iKGJ5dGVBcnJheXMsIHt0eXBlOiBjb250ZW50VHlwZX0pO1xyXG5cdHJldHVybiBibG9iO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBiNjR0b0Jsb2IgZnJvbSBcIi4vYjY0dG9ibG9iXCI7XHJcblxyXG5mdW5jdGlvbiBEZWxldGVCdXR0b24ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1kZWxldGVcIiBvbkNsaWNrPXsoKSA9PiB7cHJvcHMuZGVsZXRlSXRlbShwcm9wcy5pbmRleCk7IGNvbnNvbGUubG9nKFwiRGVsZXRlZCBpdGVtXCIpfX0+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjIwXCIgd2lkdGg9XCIyMFwiPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTYuNSAxN3EtLjYyNSAwLTEuMDYyLS40MzhRNSAxNi4xMjUgNSAxNS41di0xMEg0VjRoNFYzaDR2MWg0djEuNWgtMXYxMHEwIC42MjUtLjQzOCAxLjA2MlExNC4xMjUgMTcgMTMuNSAxN1pNOCAxNGgxLjVWN0g4Wm0yLjUgMEgxMlY3aC0xLjVaXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQocHJvcHMpIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBwcm9wcy5pdGVtO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1SZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3Qgb25EcmFnU3RhcnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdGVkQWxsb3dlZCA9ICdtb3ZlJztcclxuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZS50YXJnZXQsIDUwMDAwLCA1MDAwMCk7XHJcblxyXG4gICAgICAgIC8vIGN1c3RvbSBkcmFnIGdob3N0XHJcbiAgICAgICAgbGV0IGdob3N0Tm9kZSA9IGUudGFyZ2V0LmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICAgICAgZ2hvc3ROb2RlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHJcbiAgICAgICAgLy8gc2hvdyBnaG9zdCBwb3NcclxuICAgICAgICBnaG9zdE5vZGUuc3R5bGUudG9wID0gKGUucGFnZVkgLSBlLnRhcmdldC5vZmZzZXRIZWlnaHQgLyAyKSArICdweCc7XHJcbiAgICAgICAgZ2hvc3ROb2RlLnN0eWxlLmxlZnQgPSAoZS5wYWdlWCAtIGUudGFyZ2V0Lm9mZnNldFdpZHRoIC8gMikgKyAncHgnO1xyXG5cclxuICAgICAgICBnaG9zdE5vZGUuc3R5bGUuaGVpZ2h0ID0gZS50YXJnZXQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICBnaG9zdE5vZGUuc3R5bGUud2lkdGggPSBlLnRhcmdldC5vZmZzZXRXaWR0aCArICdweCc7XHJcblxyXG4gICAgICAgIGdob3N0Tm9kZS5zdHlsZS5vcGFjaXR5ID0gJzAuOCc7XHJcbiAgICAgICAgZ2hvc3ROb2RlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgIC8vIGFkZCBpZFxyXG4gICAgICAgIGdob3N0Tm9kZS5pZCA9ICdnaG9zdE5vZGUnO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQoZ2hvc3ROb2RlKTtcclxuXHJcbiAgICAgICAgaXRlbVJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdzdGFydCcpO1xyXG5cclxuICAgICAgICBpZiAocHJvcHMub25EcmFnU3RhcnQpIHtcclxuICAgICAgICAgICAgcHJvcHMub25EcmFnU3RhcnQocHJvcHMuaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkRyYWcgPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vbW92ZSBub2RlIHdpdGggbW91c2VcclxuICAgICAgICBsZXQgZ2hvc3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dob3N0Tm9kZScpO1xyXG4gICAgICAgIGdob3N0Tm9kZS5zdHlsZS50b3AgPSAoZS5wYWdlWSAtIGUudGFyZ2V0Lm9mZnNldEhlaWdodCAvIDIpICsgJ3B4JztcclxuICAgICAgICBnaG9zdE5vZGUuc3R5bGUubGVmdCA9IChlLnBhZ2VYIC0gZS50YXJnZXQub2Zmc2V0V2lkdGggLyAyKSArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25EcmFnRW5kID0gKGUpID0+IHtcclxuICAgICAgICAvLyByZW1vdmUgZ2hvc3Qgbm9kZVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnaG9zdE5vZGUnKS5yZW1vdmUoKTtcclxuICAgICAgICAvLyByZW1vdmUgaXRlbSBzdHlsZVxyXG4gICAgICAgIGl0ZW1SZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnc3RhcnQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkRyYWdFbnRlciA9ICgpID0+IGl0ZW1SZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdkcmFnb3ZlcicpO1xyXG5cclxuICAgIGNvbnN0IG9uRHJhZ0xlYXZlID0gKCkgPT4gaXRlbVJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdvdmVyJyk7XHJcblxyXG4gICAgY29uc3Qgb25EcmFnT3ZlciA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3Qgb25Ecm9wID0gKCkgPT4ge1xyXG4gICAgICAgIGl0ZW1SZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnb3ZlcicpO1xyXG4gICAgICAgIHByb3BzLm9uRHJvcChwcm9wcy5pbmRleCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRXaWRnZXQoKSB7XHJcbiAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnVGV4dCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3aWRnZXQtdGV4dFwiPntpdGVtLnRleHR9PC9wPik7XHJcbiAgICAgICAgICAgIGNhc2UgJ1F1ZXN0aW9uJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHRcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiZml0LWNvbnRlbnRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwid2lkZ2V0LXRleHRcIj57aXRlbS5xdWVzdGlvbn08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3aWRnZXQtdGV4dFwiPntpdGVtLmFuc3dlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgY2FzZSAnSW1hZ2UnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctd3JhcHBlci1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1wcmV2aWV3XCIgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGI2NHRvQmxvYihpdGVtLmZpbGUpKX0gYWx0PXtpdGVtLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgY2FzZSAnVmlkZW8nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9e1wiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCIrIGl0ZW0ueW91dHViZUlkfSBzdHlsZT17e2JvcmRlcjogXCJub25lXCIsIG1hcmdpbjogXCIxMHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIn19IHRpdGxlPVwiVmlkZW8gcHJldmlld1wiPjwvaWZyYW1lPik7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0cmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwid2lkZ2V0XCIgY2xhc3NOYW1lPVwicm91bmQtYm9yZGVyIGJsdWUtYm9yZGVyXCIgXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZVxyXG4gICAgICAgICAgICByZWY9e2l0ZW1SZWZ9XHJcbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXtvbkRyYWdTdGFydH1cclxuICAgICAgICAgICAgb25EcmFnPXtvbkRyYWd9XHJcbiAgICAgICAgICAgIG9uRHJhZ0VuZD17b25EcmFnRW5kfVxyXG4gICAgICAgICAgICBvbkRyYWdFbnRlcj17b25EcmFnRW50ZXJ9XHJcbiAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXtvbkRyYWdMZWF2ZX1cclxuICAgICAgICAgICAgb25EcmFnT3Zlcj17b25EcmFnT3Zlcn1cclxuICAgICAgICAgICAgb25Ecm9wPXtvbkRyb3B9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPERlbGV0ZUJ1dHRvbiBkZWxldGVJdGVtPXtwcm9wcy5kZWxldGVJdGVtfSBpbmRleD17cHJvcHMuaW5kZXh9IC8+XHJcblx0XHRcdHtnZXRXaWRnZXQoKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHQpO1xyXG59Il0sIm5hbWVzIjpbImI2NHRvQmxvYiIsImI2NERhdGEiLCJjb250ZW50VHlwZSIsInNsaWNlU2l6ZSIsImJ5dGVDaGFyYWN0ZXJzIiwiYXRvYiIsImJ5dGVBcnJheXMiLCJvZmZzZXQiLCJsZW5ndGgiLCJzbGljZSIsImJ5dGVOdW1iZXJzIiwiQXJyYXkiLCJpIiwiY2hhckNvZGVBdCIsImJ5dGVBcnJheSIsIlVpbnQ4QXJyYXkiLCJwdXNoIiwiYmxvYiIsIkJsb2IiLCJ0eXBlIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkRlbGV0ZUJ1dHRvbiIsInByb3BzIiwiZGVsZXRlSXRlbSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIldpZGdldCIsIml0ZW0iLCJpdGVtUmVmIiwib25EcmFnU3RhcnQiLCJlIiwiZGF0YVRyYW5zZmVyIiwiZWZmZWN0ZWRBbGxvd2VkIiwic2V0RHJhZ0ltYWdlIiwidGFyZ2V0IiwiZ2hvc3ROb2RlIiwiY2xvbmVOb2RlIiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsInBhZ2VZIiwib2Zmc2V0SGVpZ2h0IiwibGVmdCIsInBhZ2VYIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJ3aWR0aCIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwiaWQiLCJkb2N1bWVudCIsImJvZHkiLCJwcmVwZW5kIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIm9uRHJhZyIsInF1ZXJ5U2VsZWN0b3IiLCJvbkRyYWdFbmQiLCJyZW1vdmUiLCJvbkRyYWdFbnRlciIsIm9uRHJhZ0xlYXZlIiwib25EcmFnT3ZlciIsInByZXZlbnREZWZhdWx0Iiwib25Ecm9wIiwiZ2V0V2lkZ2V0IiwidGV4dCIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZSIsIm5hbWUiLCJ5b3V0dWJlSWQiLCJib3JkZXIiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9