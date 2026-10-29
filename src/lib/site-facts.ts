export const installationTimelines = {
  standalone: { totalWeeks: [2, 6], onSiteWeeks: [1, 2] },
  wholeHome: { totalWeeks: [12, 20], onSiteWeeks: [2, 3] },
} as const;

export const installationTimelineCopy = `Single-room cooling or standalone heat pump install: ${installationTimelines.standalone.totalWeeks.join(" to ")} weeks total (survey to commissioning), of which ${installationTimelines.standalone.onSiteWeeks.join(" to ")} weeks on-site. Whole-home integrated systems: ${installationTimelines.wholeHome.totalWeeks.join(" to ")} weeks total (survey to commissioning), of which ${installationTimelines.wholeHome.onSiteWeeks.join(" to ")} weeks on-site.`;

export const coverage = "All of London, plus the Home Counties (Surrey, Berkshire, Buckinghamshire, Hertfordshire, Essex, Kent) and Oxfordshire.";
export const vatQualification = "Zero-rated VAT on qualifying energy-saving measures (heat pumps, insulation, controls and specified associated works) until 31 March 2027. We confirm VAT treatment for your specific installation in your System Design.";
export const warmHomesQualification = "The Warm Homes: Local Grant (delivered by local authorities, income-assessed) is separate from the Boiler Upgrade Scheme. We signpost eligible households to the right scheme in your Climate Score.";
export const startingPrices = { cooling: 2200, heating: 5500, wholeHome: 14500 };
export const surveyFee = 200;
export const designFee = 1250;
export const busHeatingGrant = 7500;
export const vatZeroRateEnd = "2027-03-31";