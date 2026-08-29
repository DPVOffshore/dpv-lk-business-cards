// ============================================================
//  COMPANY INFO  —  edit these once; every card uses them.
// ============================================================

export const company = {
  name: "DPV Offshore & Marine Services (Pvt) Ltd",
  shortName: "DPV Offshore",
  tagline: "DPV Offshore & Marine Services (Pvt) Ltd",

  // Websites shown as rows on every card, in this order.
  // The first one is also the URL saved into the contact.
  websites: [
    { label: "Website", url: "https://www.dpvoffshore.lk" },
    { label: "Group website", url: "https://www.dpvoffshore.com" },
  ],

  logoLockup: "/logo-lockup.png", // mark + wordmark, full colour (light backgrounds)
  logoLockupWhite: "/logo-lockup-white.png", // mark + wordmark, white (navy hero)
  logoFull: "/logo-full.png", // stacked logo, full colour

  // How the "Email" button behaves:
  //   "mailto"  -> opens the visitor's default mail app (Outlook if it's their default). Recommended.
  //   "outlook" -> always opens Outlook on the web compose window.
  emailMode: "mailto",

  // Office address shown on every card + saved into the contact.
  address: {
    label: "Office",
    street: "No. 59/2, Norris Canal Road",
    city: "Colombo 10",
    region: "",
    postal: "",
    country: "Sri Lanka",
    // Tapping "Show on map" opens this link. Replace with a
    // Google Maps share link for the exact office if you have one.
    mapUrl:
      "https://maps.google.com/?q=59/2+Norris+Canal+Road,+Colombo+10,+Sri+Lanka",
  },

  // Shown as chips at the bottom of every card.
  services: [
    "Ship Management",
    "Ship Repair",
    "Ship Conversion",
    "Rig Repair",
    "Dry Docking",
    "Dry docking partner at all major ports",
    "Afloat & Anchorage",
    "Chartering",
    "EPC Contractor",
  ],

  // Optional. Add locations here and a "Where we operate" row appears
  // under the services, e.g. ["Colombo", "Dubai", "Singapore"].
  countries: [],
};
