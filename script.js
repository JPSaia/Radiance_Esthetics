document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll(".service-item");
    const serviceDescriptions = {
        "Facials": "Encounter the countless benefits from monthly facials. Facials can combat skin concerns such as skin discoloration, acne & irritation, scarring, anti-aging, maintain a healthy skin complexion, all while increasing self care, and promoting relaxation. ",
        "Hydra Facial": "A hydrafacial is a powerful, non-invasive skin resurfacing treatment. It combines cleansing, exfoliation, extraction, hydration and antioxidant protection that removes dead skin cells and impurities, while simultaneously delivering moisturizing serums into the skin.",
        "Chemical Peels": "A chemical peel is a technique used to improve and smooth the texture of the skin and while improving scarring, fine lines and wrinkles.",
        "Dermaplaning": "Dermaplaning is a minimally invasive procedure that involves shaving away the top layers of your skin. This will reduce the appearance of acne scars or dimpled skin.",
        "Microneedling": "Microneedling is a cosmetic procedure used to encourage collagen production. Microneedling will help smooth, firm, and tone skin and while improving the appearance of scars, acne, and wrinkles.",
        "Skin rejuvenation with PRP": "The PRP (platelet-Rich plasma) works to stimulate collagen production and cell renewal, which provides overall facial rejuvenation.",
        "Skin rejuvenation with PRFM": "The PRFM (platelet-rich fibrin matrix)  method is a process of extracting platelets from the patient's own blood and using them as a dermal filler that i as a substance injected under the skin of the face to try to fill out wrinkles.",
        "PDO Threads Lifting or Collagen Building": "PDO smooth threads are dissolvable sutures that are extremely thin (the size of a strand of hair) and made of a neutral substance that’s very inert to our bodies.  It’s the same material that has been used for stitching wounds for decades. It's a less invasive procedure than facelift surgery and can often be performed in under 45 minutes without needing to go under a scalpel. When used cosmetically, PDO smooth threads help tighten and smooth the skin by boosting collagen production and making one’s face look youthful and rejuvenated. PDO Threading is used For:  Face Lift • Neck Lift • Cheek and Jowl • Knee Lift • Buttock Lift • Abdominal Lift • Scar Revision • Wrinkle and Texture Repair",
        "Brow Threading": "Brow threading is considered one of the safest and most precise methods of hair removal, especially in the delicate areas surrounding the eye.",
        "Microdermabrasion": "Microdermabrasion is a mechanical exfoliation treatment that gently sloughs away dead surface skin cells and creates a smoother, softer appearance. It helps thicken your collagen, and improvs overall complexion and gives a more taut texture.",
        "Skin Care Products": "Our products include Lotion, Skin Ceuticals, Face Reality, Eyelash Extensions, Latisse, and European Style Cool Hair Wax Removal",
        "Injectables": "Our injectables include BOTOX, Dysport, and Fillers."
        ,
        // ... (other service descriptions) ...

    };

    serviceItems.forEach(item => {
        const serviceName = item.querySelector(".service-title").textContent;
        const descriptionContainer = item.querySelector(".description");

        item.addEventListener("click", () => {
            const description = serviceDescriptions[serviceName];
            if (descriptionContainer.textContent === "") {
                descriptionContainer.textContent = description;
            } else {
                descriptionContainer.textContent = "";
            }
        });
    });
});
