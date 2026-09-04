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
    // The group site (.com) lives in the Dubai Office section below,
    // so it is deliberately not repeated here.
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
    // Tapping "Show on map" opens this link — the Google Maps share
    // link for the office's own place listing.
    mapUrl: "https://maps.app.goo.gl/dgWxmbyTqAF15GJv9",
  },

  // Extra offices. Each one becomes its own section on every card,
  // under the person's own contact rows. Add another entry here and
  // a new section appears — no other file needs touching.
  //   phones / email / website / address are all optional; leave a
  //   field out and its row is hidden.
  offices: [
    {
      label: "Dubai Office",
      phones: [
        { label: "Mobile (UAE)", number: "+971 56 706 0326", type: "cell" },
        { label: "Mobile (Sri Lanka)", number: "+94 77 774 3023", type: "cell" },
        { label: "Office", number: "+971 4 580 4314", type: "work" },
      ],
      email: "info@dpvoffshore.com",
      website: { label: "Website", url: "https://www.dpvoffshore.com" },
      address: {
        label: "Address",
        street: "P.O. Box 75287, Workshop 5, #W306",
        city: "Dubai Maritime City",
        region: "Dubai",
        postal: "",
        country: "UAE",
        mapUrl:
          "https://maps.google.com/?q=Workshop+5,+W306,+Dubai+Maritime+City,+Dubai,+UAE",
      },
    },
  ],

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
