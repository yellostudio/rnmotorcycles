export const services = {
"motorcycle-mots": {
 eyebrow:"Motorcycle MOT testing",title:"Motorcycle MOTs in Paignton",summary:"MOT due? Book your motorcycle or scooter in with an established independent testing station in Paignton.",
 paragraphs:["RN Motorcycles has offered motorcycle MOT testing in Paignton for over 15 years. Whether you ride every day or bring your bike out on sunny weekends, the annual test is an important part of staying road legal.","Speak to the team to arrange an MOT appointment, check the current test price and find out what you need to bring. The workshop serves riders throughout Paignton, Torbay and South Devon.","Not sure when your bike's MOT expires? You can check the expiry date using the official GOV.UK MOT history service before booking."],
 highlights:["Motorcycle and scooter MOT enquiries","Over 15 years of motorcycle MOT testing","Independent Paignton workshop","Phone to arrange an appointment"],note:"MOT prices and availability should be confirmed directly with the workshop.",cta:"Enquire about an MOT",image:"mot",intro:"YOUR NEXT MOT, SORTED."
},
"servicing": {
 eyebrow:"Servicing and maintenance",title:"Motorcycle servicing & maintenance",summary:"From everyday upkeep to more involved work, keep your motorcycle ready for the next ride.",
 paragraphs:["A bike that is looked after is one you can enjoy with greater confidence. RN Motorcycles provides servicing and maintenance for motorcycles and scooters at its Paignton workshop.","Whether it's routine service work, a chain and sprocket kit or something more involved, the team can talk you through what your particular motorcycle needs. Their workshop experience also covers engine rebuilds.","Let the garage know your make, model, mileage and the work you're considering. They'll advise on next steps and workshop availability."],
 highlights:["Routine maintenance and servicing","Chain and sprocket kit fitting","Motorcycles and scooters","More involved engine work"],note:"The scope and price of any service depend on your bike and the work required.",cta:"Enquire about servicing",image:"servicing",intro:"KEEP THE GOOD RIDES COMING."
},
"repairs": {
 eyebrow:"Repairs and mechanical work",title:"Motorcycle repairs in Paignton",summary:"Whether your bike needs a straightforward fix or more involved mechanical work, talk to the workshop.",
 paragraphs:["An unexpected problem can take the enjoyment out of riding. RN Motorcycles offers mechanical motorcycle repairs at its independent Paignton garage, including more involved engine work.","If you've been involved in an accident, the workshop also takes enquiries for accident damage and insurance repairs. The first step is to explain what happened and the damage or symptoms you've noticed.","Give the team the make and model, a description of the issue and any relevant information about previous work. They can discuss an inspection and availability."],
 highlights:["Mechanical workshop repairs","Engine rebuild enquiries","Accident damage work","Insurance repair enquiries"],note:"If you believe your motorcycle is unsafe, do not ride it to the garage; call to discuss the situation.",cta:"Discuss a repair",image:"repairs",intro:"BACK WHERE YOU BELONG."
},
"parts-accessories": {
 eyebrow:"Bike and rider essentials",title:"Motorcycle parts & accessories",summary:"From helmets and gloves to motorcycle parts, ask the team what is available at the garage.",
 paragraphs:["RN Motorcycles is more than a place to book an MOT. The existing business also offers motorcycle accessories and riding clothing for customers in Paignton and across Torbay.","Whether you're looking for a helmet, jacket, gloves or a part for your motorcycle, speak to the workshop about the options and current availability.","If you're after something specific, call ahead with your motorcycle model or clothing requirements so the team can check what is available before you travel."],
 highlights:["Motorcycle helmets","Riding jackets and gloves","Motorcycle parts enquiries","Bike and rider accessories"],note:"Products, brands, stock levels and pricing may vary; please check with the workshop before visiting.",cta:"Ask about parts",image:"parts",intro:"EQUIPPED FOR THE ROAD."
}
} as const;
export type ServiceSlug=keyof typeof services;