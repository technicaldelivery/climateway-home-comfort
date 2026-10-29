import { describe, test } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";
import { installationTimelines, startingPrices, surveyFee, designFee, busHeatingGrant, vatZeroRateEnd } from "./site-facts";

describe("Climateway confirmed figures", () => {
  test("standalone total is 2 to 6 weeks", () => deepStrictEqual(installationTimelines.standalone.totalWeeks, [2, 6]));
  test("standalone on-site is 1 to 2 weeks", () => deepStrictEqual(installationTimelines.standalone.onSiteWeeks, [1, 2]));
  test("whole home total is 12 to 20 weeks", () => deepStrictEqual(installationTimelines.wholeHome.totalWeeks, [12, 20]));
  test("whole home on-site is 2 to 3 weeks", () => deepStrictEqual(installationTimelines.wholeHome.onSiteWeeks, [2, 3]));
  test("cooling starts at £2,200", () => strictEqual(startingPrices.cooling, 2200));
  test("heating starts at £5,500", () => strictEqual(startingPrices.heating, 5500));
  test("whole home starts at £14,500", () => strictEqual(startingPrices.wholeHome, 14500));
  test("Home Survey costs £200", () => strictEqual(surveyFee, 200));
  test("System Design costs £1,250", () => strictEqual(designFee, 1250));
  test("heating grant is £7,500", () => strictEqual(busHeatingGrant, 7500));
  test("VAT zero-rating ends 31 March 2027", () => strictEqual(vatZeroRateEnd, "2027-03-31"));
});