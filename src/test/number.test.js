import assert from "assert";
import { formatPrice } from "../utils/number.js";

describe("Number", function () {
  describe("formatPrice()", function () {
    it("should return $44.00 when input 44", function () {
      assert.strictEqual(formatPrice(44), "$44.00");
    });
    it("should return $12.34 when input 12.34", function () {
      assert.strictEqual(formatPrice(12.34), "$12.34");
    });
    it("should return -$22.40 when input -22.4", function () {
      assert.strictEqual(formatPrice(-22.4), "-$22.40");
    });
  });
});
