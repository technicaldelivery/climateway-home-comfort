import { describe, expect, test } from "bun:test";
import { installationTimelines, startingPrices, surveyFee, designFee, busHeatingGrant, vatZeroRateEnd } from "./site-facts";

describe("Climateway confirmed figures", () => {
  test("standalone total is 2 to 6 weeks", () => expect(installationTimelines.standalone.totalWeeks).toEqual([2, 6]));
  test("standalone on-site is 1 to 2 weeks", () => expect(installationTimelines.standalone.onSiteWeeks).toEqual([1, 2]));
  test("whole home total is 12 to 20 weeks", () => expect(installationTimelines.wholeHome.totalWeeks).toEqual([12, 20]));
  test("whole home on-site is 2 to 3 weeks", () => expect(installationTimelines.wholeHome.onSiteWeeks).toEqual([2, 3]));
  test("cooling starts at £2,200", () => expect(startingPrices.cooling).toBe(2200));
  test("heating starts at £5,500", () => expect(startingPrices.heating).toBe(5500));
  test("whole home starts at £14,500", () => expect(startingPrices.wholeHome).toBe(14500));
  test("Home Survey costs £200", () => expect(surveyFee).toBe(200));
  test("System Design costs £1,250", () => expect(designFee).toBe(1250));
  test("heating grant is £7,500", () => expect(busHeatingGrant).toBe(7500));
  test("VAT zero-rating ends 31 March 2027", () => expect(vatZeroRateEnd).toBe("2027-03-31"));
});