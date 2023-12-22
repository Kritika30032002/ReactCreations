import React from 'react'
import ChatBot from 'react-simple-chatbot';
import {Segment} from 'semantic-ui-react';

// overwrite the existing avatart

function vc2() {
        
  const steps = [
    {
      id: "Greet",        
      message: "Hello, Welcome to the Virtual Consultant!",        
      trigger: "Done",        
    },        
    {       
      id: "Done",        
      message: "Please enter your name",        
      trigger: "waiting1",        
    },      
    {      
      id: "waiting1",      
      user: true,      
      trigger: "Name",      
    },      
    {       
      id: "Name",     
      message: "Hi {previousValue}, Please tell us your issue",     
      trigger: "issues",     
    },      
    {      
      id: "issues",   
      options: [   
        {    
          value: "Skin Guide",   
          label: "Skin Guide",        
          trigger: "Skin Guide",       
        },       
        { value: "Disease Information", label: "Disease Information", trigger: "Disease Information" },       
      ],       
    },       
    {       
      id: "Skin Guide",       
      message: "Please Select your skin type", 
      trigger:"types",       
             
    },   
    {
      id:"types",
      options:[
        {
          value: "oily",   
          label: "oily",        
          trigger: "oily",
        },
        {
          value: "Dry",   
          label: "Dry",        
          trigger: "Dry",
        },
        {
          value: "normal",   
          label: "normal",        
          trigger: "normal",
        },
        
      ]

      
    },
    {
      id:"oily",
      message:"If you have oily skin, it's crucial to establish a skincare routine that addresses this specific concern. 🌿 Start with a gentle cleanser infused with salicylic acid or benzoyl peroxide to help manage excess oil and fend off acne. Use this cleanser in the morning ☀️ and before bedtime 🌙. After cleansing, apply a toner with witch hazel, salicylic acid, or niacinamide to balance oil production and minimize pores. Regular exfoliation 🌟, around 2-3 times a week with a chemical exfoliant like AHA or BHA, will aid in shedding dead skin cells and preventing clogged pores. Select a serum with niacinamide, hyaluronic acid, or an oil-free, lightweight moisturizing serum to provide hydration without exacerbating oiliness. Keep your skin moisturized with an oil-free and non-comedogenic moisturizer, and never skip sunscreen, opting for an oil-free, broad-spectrum SPF 30 or higher to protect your skin. Occasional clay masks help deep clean pores and reduce oil buildup, while oil-free, non-comedogenic makeup products are recommended. Staying hydrated 💧 and maintaining a balanced diet 🥦🍇 are essential for overall skin health, and for persistent issues, consult a dermatologist for professional advice and treatment options. 👩‍⚕️🔍",
      end: true,

    },
    {
      id:"Dry",
      message:"If you have dry skin, it's essential to establish a skincare routine that prioritizes hydration and moisture. 🌼 Start with a gentle, hydrating cleanser to cleanse your face in the morning ☀️ and before bedtime 🌙. This will help maintain your skin's natural moisture barrier. After cleansing, apply a gentle, alcohol-free toner to further hydrate and balance your skin's pH.Regular exfoliation is still necessary for dry skin but should be done with caution. Use a mild exfoliant, like an AHA, no more than 2-3 times a week to remove dead skin cells gently. Be sure not to over-exfoliate, as this can exacerbate dryness.Next, apply a rich, hydrating serum with ingredients such as hyaluronic acid, glycerin, or ceramides to lock in moisture and improve skin texture. Seal in this moisture with a thick, emollient moisturizer that provides a protective barrier. You may even consider a facial oil rich in nourishing ingredients like argan or jojoba oil for added hydration.Don't forget the sunscreen! Use a broad-spectrum SPF 30 or higher during the day to protect your skin from UV damage. Choose a sunscreen with added moisturizing properties.Occasional sheet masks can be beneficial for an extra hydration boost. These masks are infused with serums that deeply hydrate your skin.Remember to drink plenty of water 💧 and maintain a diet rich in antioxidants 🥦🍇 to support your skin's health from the inside out.Consult a dermatologist if you have persistent dry skin issues, as they can provide professional guidance and treatment options. 👩‍⚕️🔍This routine should help keep your dry skin nourished and hydrated for a healthy, glowing complexion. 💁‍♀️✨",
      end:true,
    },
    {
      id:"normal",
      message:"Maintaining healthy skin for individuals with a normal skin type typically involves a simple and consistent skincare routine. 🧼 Cleansing is essential, but gentle, sulfate-free cleansers are recommended to avoid over-drying. 🌿 Exfoliation should be done regularly to remove dead skin cells, promote cell turnover, and maintain a smooth complexion. 💧 Applying a lightweight, non-comedogenic moisturizer helps keep the skin hydrated without clogging pores. ☀️ Sun protection is crucial, so using a broad-spectrum SPF of at least 30 daily shields the skin from UV damage. 🍏 Additionally, maintaining a balanced diet, staying hydrated 💦, and managing stress 😌 can contribute to overall skin health for those with a normal skin type",
      end:true,
    },
    {       
      id: "Disease Information",       
      message:       
        "Please select your disease",       
      trigger:"diseases",       
    },
    {
      id:"diseases",
      options:[
        {
          value: "Actinic kerastoses",   
          label: "Actinic kerastoses",        
          trigger: "Actinic kerastoses",
        },
        {
          value: "Basal cell carcinoma",   
          label: "Basal cell carcinoma",        
          trigger: "Basal cell carcinoma",
        },
        {
          value: "Keratosis-Like Lesions",   
          label: "Keratosis-Like Lesions",        
          trigger: "Keratosis-Like Lesions",
        },
        {
          value: "Dermatofibroma",   
          label: "Dermatofibroma",        
          trigger: "Dermatofibroma",
        },
        {
          value: "Melanoma",   
          label: "Melanoma",        
          trigger: "Melanoma",
        },
        {
          value: "Melanocytic nevi",   
          label: "Melanocytic nevi",        
          trigger: "Melanocytic nevi",
        },
      ]
    },
    {
      id:"Actinic kerastoses",
      message:"Medications, both topical and oral, can be prescribed by a healthcare professional to treat actinic keratosis. These medications work to destroy the abnormal skin cells and stimulate the growth of healthy skin cells. ",
      end:true,

    },
    {
      id:"Basal cell carcinoma",
      message:"Medications are not typically the first line of treatment for basal cell carcinoma, but they can be considered for specific cases. Some medications, such as vismodegib and sonidegib, are FDA-approved for treating advanced basal cell carcinoma.",
      end:true,

    },
    {
      id:"Keratosis-Like Lesions",
      message:"Medication is not typically used to treat benign keratosis-like lesions. They are primarily managed through physical removal methods when necessary for cosmetic or comfort reasons.",
      end:true,

    },
    {
      id:"Dermatofibroma",
      message:"Medications for melanoma are typically used for advanced stages of the disease or when surgery is not an option. These may include immunotherapies and targeted therapies, as mentioned earlier.",
      end:true,

    },
    {
      id:"Melanoma",
      message:"Medication is not typically used to treat melanocytic nevi, as they are benign growths. Any medical intervention, if required, usually involves removal or biopsy to ensure they are not cancerous.",
      end:true,

    },
    {
      id:"Melanocytic nevi",
      message:"Medications are not commonly used to treat vascular lesions directly. Instead, treatment methods like laser therapy, sclerotherapy, and surgery are typically employed.",
      end:true,

    },  
  ]
  return (
    <>
    <Segment floated = 'right' >
        
      <ChatBot steps = {steps} style = {{width:'700px',height:'530px',margin:'30px'}}/>
    </Segment>
    </>
  );
}
export default vc2