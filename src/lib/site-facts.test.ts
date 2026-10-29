import { describe, test } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";
import { installationTimelines, startingPrices, surveyFee, designFee, busHeatingGrant, vatZeroRateEnd } from "./site-facts";
import { serviceAreas } from "./service-areas";

describe("Climateway confirmed figures", () => {
  test("cooling total is 2 to 4 weeks", () => deepStrictEqual(installationTimelines.cooling.totalWeeks, [2, 4]));
  test("cooling on-site is 1 day", () => strictEqual(installationTimelines.cooling.onSiteDays, 1));
  test("heat pump total is 6 to 10 weeks", () => deepStrictEqual(installationTimelines.heatPump.totalWeeks, [6, 10]));
  test("heat pump on-site is 2 to 5 days", () => deepStrictEqual(installationTimelines.heatPump.onSiteDays, [2, 5]));
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
describe("service areas", () => {
  test("lists Henley-on-Thames under Oxfordshire only", () => {
    const hits = serviceAreas.filter((a) => a.towns.includes("Henley-on-Thames")).map((a) => a.region);
    deepStrictEqual(hits, ["Oxfordshire"]);
  });
  test("has eight regions", () => strictEqual(serviceAreas.length, 8));
});
