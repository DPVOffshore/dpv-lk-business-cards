// ============================================================
//  PEOPLE  —  THIS IS THE ONLY FILE YOU EDIT TO ADD SOMEONE.
// ------------------------------------------------------------
//  To add a person:
//    1. Copy the commented { ... } block at the bottom.
//    2. Change the details.
//    3. Put their photo in  /public/employees/<slug>.jpg
//       (same name as "slug", e.g. slug "nimal" -> nimal.jpg)
//       Square images look best — around 512x512.
//    4. Save. Their card is live at  /<slug>
//
//  Field notes:
//    - phones:  a list, shown in this order. Add or remove as many
//               as you like. Each one is a tappable call row.
//                 label -> what the row says ("Mobile (Office)")
//                 number -> include the country code; spaces are fine
//                 type   -> "cell" or "work"; only affects how the
//                           saved contact labels the number
//    - whatsapp: digits only, NO plus, NO spaces  ->  "94771660436"
//    - prefix:   OPTIONAL honorific ("Mr." / "Ms.") saved into the contact.
//    - credentials: OPTIONAL qualifications line under the job title.
//    - email:    OPTIONAL. Leave "" and the email row is hidden.
//    - websites: OPTIONAL override. Leave it out and the company
//                websites from company.js are used.
//    - address:  OPTIONAL override of the company address.
// ============================================================

export const employees = [
  {
    slug: "aruna",
    prefix: "Mr.",
    firstName: "Aruna",
    lastName: "Rajapakse",
    title: "Technical Director",
    credentials: "Marine Chief Engineer",
    photo: "/employees/aruna.jpg",
    phones: [
      { label: "Mobile (Office)", number: "+94 74 415 2966", type: "cell" },
      { label: "Mobile (Personal)", number: "+94 77 166 0436", type: "cell" },
      { label: "Office", number: "+94 11 268 2692", type: "work" },
    ],
    whatsapp: "94744152966", // his office mobile
    email: "chiefeng@dpvoffshore.lk",
    // websites: [{ label: "Website", url: "https://..." }],  // optional override
    // address: {             // optional override of the company address
    //   label: "Colombo Office",
    //   street: "...",
    //   city: "Colombo",
    //   region: "",
    //   postal: "",
    //   country: "Sri Lanka",
    //   mapUrl: "",
    // },
  },

  {
    slug: "nethupa",
    firstName: "Nethupa",
    lastName: "Binath",
    title: "Document Controller",
    credentials: "",
    photo: "/employees/nethupa.jpg",
    phones: [
      { label: "Mobile (Office)", number: "+94 74 415 2963", type: "cell" },
      { label: "Mobile", number: "+94 77 531 5354", type: "cell" },
      { label: "Office", number: "+94 11 268 2692", type: "work" },
    ],
    whatsapp: "94775315354",
    email: "cmb@dpvoffshore.com",
  },

  {
    slug: "ajith",
    prefix: "Maj. Gen.",
    firstName: "Ajith",
    lastName: "Kolambathantri",
    title: "Senior Manager, HR & Administration",
    credentials: "Major General (Retd)",
    photo: "/employees/ajith.jpg",
    phones: [
      { label: "Mobile (Office)", number: "+94 74 415 2965", type: "cell" },
      { label: "Mobile", number: "+94 70 248 6055", type: "cell" },
      { label: "Office", number: "+94 11 268 2692", type: "work" },
    ],
    whatsapp: "94744152965", // his office mobile
    email: "info@dpvoffshore.lk",
  },

  // ---- copy from here to add a new person ----
  // {
  //   slug: "nimal",
  //   prefix: "Mr.",
  //   firstName: "Nimal",
  //   lastName: "Silva",
  //   title: "Operations Manager",
  //   credentials: "",
  //   photo: "/employees/nimal.jpg",
  //   phones: [
  //     { label: "Mobile", number: "+94 77 000 0000", type: "cell" },
  //     { label: "Office", number: "+94 11 000 0000", type: "work" },
  //   ],
  //   whatsapp: "94770000000",
  //   email: "nimal@dpvoffshore.lk",
  // },
];

// Helper used by the pages (no need to touch this).
export function getEmployee(slug) {
  return employees.find((e) => e.slug === slug);
}
