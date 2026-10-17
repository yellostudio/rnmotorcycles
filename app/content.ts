export const services = {
  "motorcycle-mots": {
    eyebrow: "Motorcycle MOT testing",
    title: "Motorcycle MOTs in Paignton",
    summary: "MOT due? Book your motorcycle or scooter in with a local workshop that knows bikes inside out.",
    paragraphs: [
      "The annual MOT is an important part of keeping your motorcycle road legal. At RN Motorcycles in Paignton, MOT testing is part of what we do every day, helping riders across Torbay and South Devon get ready for the road ahead.",
      "Whether your bike is your daily transport or your weekend escape, arranging its MOT should be straightforward. Call the garage to check the next available appointment and the current test price.",
      "Not sure when your MOT is due? You can check your vehicle's MOT history and expiry date using the official GOV.UK service before getting in touch."
    ],
    highlights: ["Motorcycle and scooter MOT enquiries", "Established local testing service", "Convenient Paignton location", "Call to arrange a test"],
    note: "MOT testing is a legal assessment at the time of the test; it is not a guarantee of future mechanical condition.",
    cta: "Enquire about your MOT",
  },
  "servicing": {
    eyebrow: "Servicing and maintenance",
    title: "Motorcycle servicing in Paignton",
    summary: "From routine upkeep to more involved maintenance, give your bike the attention it needs between rides.",
    paragraphs: [
      "A well-maintained motorcycle is more enjoyable to ride and easier to live with. RN Motorcycles undertakes servicing and mechanical maintenance for riders in Paignton, Torquay, Brixham and the surrounding area.",
      "From routine service work to replacing a worn chain and sprocket kit, the workshop can talk through what your motorcycle needs and the right next step. For riders who use their bikes year-round, regular checks are especially worthwhile.",
      "Tell the team the make, model, mileage and any issues you've noticed. Whether you're preparing for a summer ride around South Devon or looking after your everyday commute, it starts with a conversation."
    ],
    highlights: ["Routine motorcycle servicing", "Chain and sprocket replacements", "Motorcycle and scooter maintenance", "Advice on workshop appointments"],
    note: "Service work and parts requirements depend on the motorcycle and its condition. Contact the garage for availability and a quotation.",
    cta: "Ask about servicing",
  },
  "repairs": {
    eyebrow: "Workshop repairs",
    title: "Motorcycle repairs in Torbay",
    summary: "When something doesn't feel right with your bike, speak to the Paignton workshop about the repair.",
    paragraphs: [
      "A mechanical fault can put an unexpected stop to your plans. RN Motorcycles offers motorcycle repairs ranging from everyday workshop jobs through to more involved mechanical work, including engine rebuilds.",
      "The garage also undertakes accident and insurance repair work. Whether you've noticed a new noise, found a problem during a ride or need help after damage to your bike, give the workshop as much detail as you can.",
      "Explain the make and model, what happened and any symptoms you're experiencing. The team can advise whether to arrange an inspection and discuss the work that may be needed."
    ],
    highlights: ["General mechanical repairs", "Engine rebuild enquiries", "Accident damage repairs", "Insurance repair work"],
    note: "If your motorcycle may be unsafe, do not ride it to the workshop. Call to discuss how best to proceed.",
    cta: "Discuss a repair",
  },
  "parts-accessories": {
    eyebrow: "Bike and rider essentials",
    title: "Motorcycle parts & accessories",
    summary: "Looking for parts, a replacement helmet or riding gear? Start with the team at RN Motorcycles.",
    paragraphs: [
      "Keeping your bike on the road is about more than the work done in the workshop. RN Motorcycles also offers motorcycle and rider accessories, with products including helmets, jackets and gloves referenced on its existing site.",
      "Whether you're replacing a worn item, picking up something for the next ride or looking for the right part for your bike, it's worth asking what the garage currently has available.",
      "Stock and sizing can change, so get in touch before travelling if there's something particular you're after."
    ],
    highlights: ["Motorcycle helmets", "Riding jackets and gloves", "Bike accessories", "Parts enquiries"],
    note: "Please check stock, compatibility, sizing and current prices directly with the workshop.",
    cta: "Ask about accessories",
  },
} as const;
export type ServiceSlug = keyof typeof services;
