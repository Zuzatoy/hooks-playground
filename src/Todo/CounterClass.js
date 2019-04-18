import React, { Component }from "react";

class CounterClass extends Component {
    state={
        counter: 0,
    }
    incrementCounter = () => {
        this.setState(state => ({
            counter: state.counter + 1
        }))
    }

    decrementCounter = () => {
        this.setState(state => ({
            counter: state.counter - 1
        }))
    }
    resetCounter = () => {
        this.setState(state => ({
            counter: 0
        }))
    }

    render() {
        return (
            <div>
               <h1>{this.state.counter}</h1>
            <button onClick={this.incrementCounter}>+</button>
            <button onClick={this.decrementCounter}>-</button>
            <button onClick={this.resetCounter}>reset</button>
            </div>
        )
    }
}

export default CounterClass;

// var CounterClass =
// /*#__PURE__*/
// function (_Component) {
//   _inherits(CounterClass, _Component);

//   function CounterClass() {
//     var _getPrototypeOf2;

//     var _this;

//     _classCallCheck(this, CounterClass);

//     for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
//       args[_key] = arguments[_key];
//     }

//     _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CounterClass)).call.apply(_getPrototypeOf2, [this].concat(args)));

//     _defineProperty(_assertThisInitialized(_this), "state", {
//       counter: 0
//     });

//     _defineProperty(_assertThisInitialized(_this), "incrementCounter", function () {
//       _this.setState(function (state) {
//         return {
//           counter: state.counter + 1
//         };
//       });
//     });

//     _defineProperty(_assertThisInitialized(_this), "decrementCounter", function () {
//       _this.setState(function (state) {
//         return {
//           counter: state.counter - 1
//         };
//       });
//     });

//     _defineProperty(_assertThisInitialized(_this), "resetCounter", function () {
//       _this.setState(function (state) {
//         return {
//           counter: 0
//         };
//       });
//     });

//     return _this;
//   }

//   _createClass(CounterClass, [{
//     key: "render",
//     value: function render() {
//       return React.createElement("div", null, React.createElement("h1", null, this.state.counter), React.createElement("button", {
//         onClick: this.incrementCounter
//       }, "+"), React.createElement("button", {
//         onClick: this.decrementCounter
//       }, "-"), React.createElement("button", {
//         onClick: this.resetCounter
//       }, "reset"));
//     }
//   }]);

//   return CounterClass;
// }(Component);

// var _default = CounterClass;
// exports.default = _default;