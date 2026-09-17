export const siteData = {
  brand: {
    name: 'Detox Cupping Therapy',
    tagline: 'Traditional Wellness. Professional Approach. Personalized Care.',
    description: 'Detox Cupping Therapy offers personalized dry cupping, wet cupping / Hijama, and flower medicine wellness sessions with a professional and safety-conscious approach.',
  },

  therapist: {
    name: 'Hussain Ahamed S M',
    title: 'Pharmacy Graduate | Certified Cupping Therapist | Certified Flower Medicine Practitioner',
    practiceType: 'Freelance Home-Visit Wellness Practitioner',
    bio: 'Hussain Ahamed S M combines pharmaceutical education with certified training in cupping therapy and flower medicine to offer personalized home-visit wellness sessions. With a commitment to professional practice, safety-conscious care, and individual attention, Hussain provides a thoughtful, personalized approach to wellness in the comfort of your own home.',
    quote: 'Wellness begins with understanding the individual.',
    experience: 'Certified and trained professional practice',
  },

  qualifications: [
    {
      title: 'Pharmacy Graduate',
      qualification: '[PHARMACY QUALIFICATION]',
      institution: '[COLLEGE / UNIVERSITY]',
      year: '[YEAR]',
      icon: 'GraduationCap',
    },
    {
      title: 'Certified Cupping Therapist',
      qualification: '[CERTIFICATION NAME]',
      institution: '[TRAINING INSTITUTE]',
      year: '[YEAR]',
      icon: 'Award',
    },
    {
      title: 'Certified Flower Medicine Practitioner',
      qualification: '[FLOWER MEDICINE CERTIFICATION NAME]',
      institution: '[CERTIFICATION INSTITUTE]',
      year: '[YEAR]',
      icon: 'Leaf',
    },
  ],

  certificates: [
    {
      id: 'pharmacy',
      title: 'Pharmacy Degree',
      image: '/certificates/pharmacy-certificate.jpg',
      year: '[YEAR]',
    },
    {
      id: 'cupping',
      title: 'Cupping Certification',
      image: '/certificates/cupping-certification.jpg',
      year: '[YEAR]',
    },
    {
      id: 'flower-medicine',
      title: 'Flower Medicine Certification',
      image: '/certificates/flower-medicine-certification.jpg',
      year: '[YEAR]',
    },
  ],

  practice: {
    currentModel: 'Home Visits Only',
    homeVisitsAvailable: true,
    homeVisitsMessage: 'Detox Cupping Therapy currently provides personalized home-visit sessions by appointment.',
    clinicStatus: 'Coming Soon',
    clinicAddress: '',
    clinicOpeningDate: '',
  },

  services: [
    {
      id: 'dry-cupping',
      title: 'Dry Cupping',
      shortDescription: 'A traditional wellness practice using suction to promote circulation and relaxation. Available as home-visit sessions.',
      description: `Dry cupping is a traditional wellness practice that uses specially designed cups to create gentle suction on the skin. This practice is known to promote blood circulation, encourage relaxation, and support the body's natural wellness processes.`,
      whatItIs: 'Dry cupping involves placing cups on the skin to create a gentle suction. The cups may be left in place or moved gently across the body depending on your needs and preferences.',
      whatToExpect: 'During your home-visit session, you will be in a comfortable, private setting. Hussain will assess the appropriate areas for treatment, prepare the skin, and apply the cups. You may experience gentle suction and warmth. Most clients find the experience deeply relaxing.',
      sessionDuration: '45-60 minutes',
      preparation: [
        'Avoid heavy meals 1-2 hours before your session',
        'Wear comfortable, loose clothing',
        'Stay hydrated',
        'Communicate any skin sensitivities or concerns',
      ],
      aftercare: [
        'Some mild marks or redness may appear on the skin, which typically fades within a few days',
        'Avoid intense physical activity for 24 hours',
        'Stay hydrated',
        'Apply loose, comfortable clothing',
        'If marks are tender, avoid direct sun exposure',
      ],
      cta: 'Book a Home Visit',
      availability: 'Available as Home Visit',
      route: '/services/dry-cupping',
    },
    {
      id: 'wet-cupping',
      title: 'Wet Cupping / Hijama',
      shortDescription: 'A traditional practice combining cupping with controlled micro-scarification, practiced with strict hygiene protocols. Available as home-visit sessions.',
      description: `Wet cupping, also known as Hijama, is a traditional wellness practice that combines cupping with a controlled micro-scarification procedure. This practice requires careful professional assessment and is performed with strict attention to hygiene, safety, and sterile technique.`,
      whatItIs: `Wet cupping involves creating a controlled micro-abrasion of the skin followed by cupping to encourage circulation and promote the body's natural wellness response. It is performed using sterile, single-use equipment and following professional hygiene protocols.`,
      whatToExpect: 'A thorough consultation with Hussain will determine your suitability for the procedure. If appropriate, the process begins with a detailed assessment, followed by careful preparation of the treatment area using sterile techniques at your home. The micro-scarification is controlled and minimal. The cupping then creates gentle suction. Most clients report a sense of wellness and lightness following the session.',
      sessionDuration: '60-90 minutes',
      preparation: [
        'A consultation is required before your first session',
        'Avoid blood thinners (consult your doctor if you take any)',
        'Be well-hydrated',
        'Avoid heavy meals 2-3 hours before the session',
        'Wear comfortable, loose clothing',
        'Avoid intense exercise 24 hours before',
      ],
      aftercare: [
        'Minor redness and very light marking are normal and typically fade quickly',
        'Avoid intense physical activity for 24-48 hours',
        'Keep the area clean and dry',
        'Wear loose, comfortable clothing',
        'Stay well-hydrated',
        'Avoid direct sun exposure on the treated area for 24 hours',
        'If you have concerns about the treated area, contact us',
      ],
      cta: 'Book a Home Visit',
      availability: 'Available as Home Visit',
      route: '/services/wet-cupping',
    },
    {
      id: 'flower-medicine',
      title: 'Flower Medicine',
      subtitle: 'Certified Flower Medicine Practice',
      shortDescription: 'A complementary wellness approach using carefully selected flower essences to support emotional and personal wellbeing. Available by home-visit consultation.',
      description: `Flower medicine is a complementary wellness practice that uses carefully selected flower essences to support emotional balance, personal reflection, and holistic wellbeing. Hussain's certified flower medicine practice is tailored to your individual needs and works alongside other wellness approaches.`,
      whatItIs: 'Certified flower medicine uses specially prepared essences from flowers to support emotional wellness and personal growth. The practice is deeply personalized and based on individual consultation and needs assessment.',
      whatToExpect: 'Your home-visit consultation begins with a detailed conversation with Hussain about your current wellness goals, emotional state, and life circumstances. Based on this understanding, appropriate flower essences are selected. You will receive guidance on how to work with your chosen essences and integrate them into your daily wellness routine.',
      sessionDuration: '45-60 minutes',
      preparation: [
        'Think about your wellness goals and what you hope to support',
        'Be open to exploring your emotional wellness',
        'Avoid caffeine immediately before (it can interfere with the experience)',
        'Wear comfortable clothing',
        'Be in a calm, open mindset',
      ],
      aftercare: [
        'Use your selected essences as recommended',
        'Journal about your experience if it feels helpful',
        'Allow time for integration and reflection',
        'Follow the guidance provided during your consultation',
        'Stay open to subtle shifts in your wellbeing over time',
      ],
      cta: 'Book a Consultation',
      availability: 'Available by Home Visit / Consultation',
      route: '/services/flower-medicine',
    },
  ],

  sessionJourney: [
    {
      number: '01',
      title: 'Consultation',
      description: 'Understand your wellness goals, expectations, and suitability for the selected practice.',
    },
    {
      number: '02',
      title: 'Assessment',
      description: 'Review relevant information and determine an appropriate approach for your needs.',
    },
    {
      number: '03',
      title: 'Personalized Session',
      description: 'Conduct the selected wellness session in a professional, comfortable environment.',
    },
    {
      number: '04',
      title: 'Aftercare',
      description: 'Provide clear post-session guidance and support your wellness journey.',
    },
  ],

  approach: [
    {
      word: 'LISTEN',
      description: 'Understand the person, their goals, and their unique wellness needs.',
    },
    {
      word: 'ASSESS',
      description: 'Consider individual needs, suitability, and the most appropriate approach.',
    },
    {
      word: 'PERSONALIZE',
      description: 'Choose a wellness approach tailored to your individual circumstances.',
    },
    {
      word: 'SUPPORT',
      description: 'Provide thoughtful aftercare guidance and ongoing wellness support.',
    },
  ],

  safetyPoints: [
    {
      title: 'Consultation First',
      description: 'A consultation helps determine whether a session is appropriate for your individual circumstances.',
    },
    {
      title: 'Hygiene Practices',
      description: 'Professional hygiene standards are maintained throughout all sessions, with particular attention to sterile technique for wet cupping.',
    },
    {
      title: 'Sterile, Disposable Equipment',
      description: 'For wet cupping, single-use sterile equipment is used, and all materials are properly disposed of following professional protocols.',
    },
    {
      title: 'Clear Aftercare',
      description: 'You will receive detailed post-session guidance to support your wellness and ensure proper recovery.',
    },
    {
      title: 'Professional Boundaries',
      description: 'Medical concerns that fall outside the scope of wellness practice are referred to appropriate healthcare providers.',
    },
  ],

  safetyDisclaimer: 'Cupping and flower medicine are complementary wellness practices and are not substitutes for medical diagnosis, treatment, or emergency care. If you have health concerns, consult with a healthcare provider. These practices are designed to support overall wellness, not to treat, cure, or prevent any disease.',

  faq: [
    {
      question: 'What is dry cupping?',
      answer: 'Dry cupping is a traditional wellness practice that uses specially designed cups to create gentle suction on the skin. This promotes circulation, encourages relaxation, and supports the body\'s natural wellness processes. The practice has been used in various cultures for thousands of years.',
    },
    {
      question: 'What is wet cupping / Hijama?',
      answer: 'Wet cupping, also called Hijama, combines cupping with a controlled micro-scarification procedure. It is performed using sterile, single-use equipment and following strict hygiene protocols. This practice is tailored to your individual needs and requires a consultation to determine suitability.',
    },
    {
      question: 'What happens during a cupping session?',
      answer: 'During your session, you will be in a comfortable, private setting. The therapist will assess the appropriate treatment areas, prepare your skin, and apply the cups. You will experience gentle suction and warmth. The session is designed to be deeply relaxing and is tailored to your individual needs.',
    },
    {
      question: 'How should I prepare for a session?',
      answer: 'Preparation depends on the type of session. Generally: avoid heavy meals 1-2 hours before, stay hydrated, wear comfortable clothing, and communicate any concerns or sensitivities. For wet cupping, additional preparation guidelines will be discussed during your consultation.',
    },
    {
      question: 'What should I expect after cupping?',
      answer: 'After dry cupping, you may notice mild marks or redness on the skin, which typically fades within a few days. After wet cupping, mild marking is normal and fades quickly. Avoid intense activity for 24 hours, stay hydrated, and follow the aftercare guidance provided. Most people report feeling relaxed and energized.',
    },
    {
      question: 'Is cupping suitable for everyone?',
      answer: 'Cupping is a traditional wellness practice, but it is not appropriate for everyone. During your consultation, we will assess your individual circumstances, health history, and suitability for the chosen practice. If cupping is not appropriate for you, alternative approaches may be discussed.',
    },
    {
      question: 'What is Flower Medicine?',
      answer: 'Flower medicine is a complementary wellness practice using carefully selected flower essences to support emotional balance, personal reflection, and overall wellbeing. It is a personalized practice based on individual consultation and your unique wellness needs.',
    },
    {
      question: 'How does a Flower Medicine consultation work?',
      answer: 'A flower medicine session begins with a detailed conversation about your wellness goals, emotional state, and life circumstances. Based on this understanding, appropriate flower essences are selected for you. You will receive guidance on how to work with these essences and integrate them into your wellness routine.',
    },
    {
      question: 'Do I need a consultation before booking?',
      answer: 'Yes, a consultation is strongly recommended before your first session. This allows us to understand your needs, assess suitability for the chosen practice, and ensure the session is appropriate and safe for you.',
    },
    {
      question: 'When should I seek medical care?',
      answer: 'If you have health concerns, persistent symptoms, or questions about whether cupping or flower medicine is appropriate for you, please consult with a healthcare provider. These practices are complementary and not substitutes for medical diagnosis or treatment.',
    },
  ],

  testimonials: [
    // Real testimonials to be added by therapist
    // {
    //   name: 'First Name',
    //   initials: 'F.L.',
    //   text: 'Testimonial text here...',
    // },
  ],

  contact: {
    phone: '[PHONE NUMBER]',
    whatsapp: '[WHATSAPP NUMBER]',
    whatsappMessage: 'Hello Hussain, I would like to enquire about a home-visit session with Detox Cupping Therapy.',
    email: '[EMAIL ADDRESS]',
    serviceArea: '[SERVICE AREA / CITY]',
    instagram: '[INSTAGRAM HANDLE]',
    mapsUrl: '',
  },

  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About Hussain', href: '/#about' },
    { label: 'Qualifications', href: '/#qualifications' },
    { label: 'Services', href: '/#services' },
    { label: 'Home Visits', href: '/#home-visits' },
    { label: 'Approach', href: '/#approach' },
    { label: 'Safety', href: '/#safety' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/#contact' },
  ],

  seo: {
    title: 'Detox Cupping Therapy | Hussain Ahamed S M | Certified Cupping & Flower Medicine Practitioner',
    description: 'Detox Cupping Therapy by Hussain Ahamed S M — Pharmacy Graduate, Certified Cupping Therapist, and Certified Flower Medicine Practitioner offering personalized home-visit wellness sessions.',
    ogImage: '/og-image.jpg',
    twitterHandle: '@',
  },
};
