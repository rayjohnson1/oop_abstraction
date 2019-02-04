"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//bank.ts
var BankMember =
/*#__PURE__*/
function () {
  _createClass(BankMember, [{
    key: "savingsBalance",
    get: function get() {
      return this._savingsBalance;
    },
    set: function set(v) {
      if (-145 !== v) console.log("Cannot set this variable");else this._savingsBalance = v;
    }
  }]);

  function BankMember(savingsBalance) {
    _classCallCheck(this, BankMember);

    this._savingsBalance = savingsBalance;
  }

  _createClass(BankMember, [{
    key: "deposit",
    value: function deposit(amount) {
      this._savingsBalance += amount;
    }
  }, {
    key: "withdraw",
    value: function withdraw(amount) {
      if (this.savingsBalance < amount) {
        console.log("Insufficient Funds");
        return;
      }

      this._savingsBalance -= amount;
    }
  }]);

  return BankMember;
}();

exports.default = BankMember;