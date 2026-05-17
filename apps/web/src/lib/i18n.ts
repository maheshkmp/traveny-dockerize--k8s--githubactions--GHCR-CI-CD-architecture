export type Lang = "sv" | "en";

export const translations = {
  sv: {
    common: {
      brandStart: "Trave",
      brandEnd: "ny",
      phone: "+46 10 123 45 67",
      phoneHref: "tel:+46101234567",
      stars: "★★★★★",
      swedishFlag: "🇸🇪",
      statExperienceValue: "15+",
      statSatisfiedValue: "98%",
      statAvailabilityValue: "24/7",
      ratingValue: "★ 4.9",
      directAvailability: "24h · 7 dagar i veckan",
      bookingSuccess: "Din reseförfrågan är redo. Vi kontaktar dig snart.",
      pickupPlaceholder: "Stockholm, Arlanda...",
      destinationPlaceholder: "Göteborg, Malmö...",
      langSv: "SV",
      langEn: "EN",
      quoteMark: "\""
    },
    nav: {
      services: "Tjänster",
      fleet: "Flottan",
      about: "Om oss",
      contact: "Kontakt",
      bookNow: "Boka Nu"
    },
    hero: {
      eyebrow: "Sveriges Premiumtaxi sedan 2009",
      badge: "Sveriges Premiumtaxi",
      titleBefore: "Res med",
      titleHighlight: "Stil",
      titleAfter: "Komfort.",
      subtitle:
        "Lyxiga körningar och punktliga hämtningar - dygnet runt, var som helst i landet.",
      bookRide: "Boka Resa",
      ourFleet: "Vår Flotta"
    },
    stats: {
      experience: "Års Erfarenhet",
      satisfied: "Nöjda Kunder",
      availability: "Tillgänglighet"
    },
    booking: {
      label: "Snabbbokning",
      title: "Var vill du åka?",
      pickup: "Upphämtning",
      destination: "Destination",
      datetime: "Datum & Tid",
      search: "Sök Resa",
      callDirect: "Ring oss direkt"
    },
    services: {
      tag: "Tjänster",
      titleBefore: "Allt du",
      titleHighlight: "behöver",
      titleAfter: "för din resa",
      subtitle: "Specialiserade tjänster designade för varje typ av resenär.",
      readMore: "Läs mer",
      items: [
        {
          icon: "✈",
          name: "Flygplatstransfer",
          desc: "Smidig och punktlig transfer till och från Arlanda, Bromma, Landvetter och alla större flygplatser i Sverige."
        },
        {
          icon: "💼",
          name: "Affärsresor",
          desc: "Professionella körningar för företag. WiFi ombord, diskretion garanterad och fakturering mot företag.",
          featured: true
        },
        {
          icon: "🥂",
          name: "Evenemang & Gala",
          desc: "Anländ i stil till bröllop, galakvällar och VIP-evenemang. Vi tar hand om allt från planering till hemkörning."
        },
        {
          icon: "🚐",
          name: "Grupptransport",
          desc: "Bekväma minibussar och vans för grupper. Perfekt för konferensresor, sportklubbar och familjeutflykter."
        },
        {
          icon: "🏥",
          name: "Sjukvårdstransport",
          desc: "Tillgängliga fordon och tränade chaufförer för trygga sjukvårdsresor. Förhandsbokningar välkomna."
        },
        {
          icon: "🌍",
          name: "Långdistans",
          desc: "Stadsöverskridande körningar med komfort. Stockholm-Göteborg eller till din dörr var du än är i Norden."
        }
      ]
    },
    fleet: {
      tag: "Vår Flotta",
      titleBefore: "Fordon av",
      titleHighlight: "högsta klass",
      subtitle:
        "Hela vår flotta är under 3 år gammal, certifierad och regelbundet underhållen för din trygghet.",
      from: "Från",
      items: [
        {
          cls: "Standard",
          name: "Mercedes-Benz E-klass",
          spec: "4 passagerare · Läder · WiFi · Klimat",
          price: "299 kr",
          emoji: "🚗"
        },
        {
          cls: "Premium",
          name: "BMW 7-serie",
          spec: "4 passagerare · Massagestolar · Champagne",
          price: "499 kr",
          emoji: "🚘"
        },
        {
          cls: "Grupp",
          name: "Mercedes-Benz V-klass",
          spec: "7 passagerare · Extra baggage · WiFi",
          price: "699 kr",
          emoji: "🚐"
        }
      ]
    },
    why: {
      tag: "Varför Traveny",
      titleBefore: "Kvalitet du kan",
      titleHighlight: "lita på",
      rating: "Betyg",
      trophy: "🏆",
      points: [
        {
          num: "01",
          title: "Alltid Punktlig",
          text: "Vi spårar din flygning i realtid och justerar hämtningstiden automatiskt. Inget väntan, ingen stress."
        },
        {
          num: "02",
          title: "Certifierade Chaufförer",
          text: "Alla våra chaufförer är bakgrundskontrollerade, professionellt utbildade och talar flytande svenska och engelska."
        },
        {
          num: "03",
          title: "Fast Pris, Inga Överraskningar",
          text: "Du vet priset innan du bokar. Inga tilläggsavgifter, inga dolda kostnader - det vi säger är det du betalar."
        }
      ]
    },
    testimonials: {
      tag: "Kundröster",
      titleBefore: "Vad våra",
      titleHighlight: "kunder",
      titleAfter: "säger",
      items: [
        {
          text: "\"Imponerad av punktligheten och komforten. Chauffören mötte mig med ett namnplakat och hjälpte med bagaget.\"",
          name: "Anna Karlsson",
          city: "Stockholm",
          initials: "AK"
        },
        {
          text: "\"Vi bokade Traveny för hela vår konferens. Professionellt, smidigt och prisvärdt. Företagsfakturering fungerade perfekt.\"",
          name: "Erik Lindqvist",
          city: "Göteborg",
          initials: "EL"
        },
        {
          text: "\"Reste från Malmö till Köpenhamn med Traveny. Fantastisk service och ett rent lyxigt fordon. Rekommenderar starkt!\"",
          name: "Maria Henriksson",
          city: "Malmö",
          initials: "MH"
        }
      ]
    },
    cta: {
      tag: "Redo att åka?",
      titleBefore: "Din premiumresa börjar",
      titleHighlight: "här",
      subtitle:
        "Boka online på 60 sekunder eller ring oss direkt. Vi finns alltid tillgängliga - dygnet runt, 365 dagar om året.",
      bookNow: "Boka Nu"
    },
    footer: {
      privacy: "Integritetspolicy",
      terms: "Villkor",
      contact: "Kontakt",
      copy: "© 2025 Traveny AB · Org.nr 556xxx-xxxx"
    }
  },
  en: {
    common: {
      brandStart: "Trave",
      brandEnd: "ny",
      phone: "+46 10 123 45 67",
      phoneHref: "tel:+46101234567",
      stars: "★★★★★",
      swedishFlag: "🇸🇪",
      statExperienceValue: "15+",
      statSatisfiedValue: "98%",
      statAvailabilityValue: "24/7",
      ratingValue: "★ 4.9",
      directAvailability: "24h · 7 days a week",
      bookingSuccess: "Your ride request is ready. We will contact you shortly.",
      pickupPlaceholder: "Stockholm, Arlanda...",
      destinationPlaceholder: "Gothenburg, Malmo...",
      langSv: "SV",
      langEn: "EN",
      quoteMark: "\""
    },
    nav: {
      services: "Services",
      fleet: "Fleet",
      about: "About",
      contact: "Contact",
      bookNow: "Book Now"
    },
    hero: {
      eyebrow: "Sweden's Premium Taxi since 2009",
      badge: "Sweden's Premium Taxi",
      titleBefore: "Travel in",
      titleHighlight: "Style",
      titleAfter: "Comfort.",
      subtitle:
        "Luxury rides and punctual pickups - around the clock, anywhere in the country.",
      bookRide: "Book a Ride",
      ourFleet: "Our Fleet"
    },
    stats: {
      experience: "Years Experience",
      satisfied: "Satisfied Clients",
      availability: "Availability"
    },
    booking: {
      label: "Quick Booking",
      title: "Where do you want to go?",
      pickup: "Pickup",
      destination: "Destination",
      datetime: "Date & Time",
      search: "Search Ride",
      callDirect: "Call us directly"
    },
    services: {
      tag: "Services",
      titleBefore: "Everything you",
      titleHighlight: "need",
      titleAfter: "for your journey",
      subtitle: "Specialized services designed for every type of traveler.",
      readMore: "Read more",
      items: [
        {
          icon: "✈",
          name: "Airport Transfer",
          desc: "Smooth and punctual transfers to and from Arlanda, Bromma, Landvetter and all major airports in Sweden."
        },
        {
          icon: "💼",
          name: "Business Travel",
          desc: "Professional rides for companies. WiFi on board, guaranteed discretion and corporate invoicing.",
          featured: true
        },
        {
          icon: "🥂",
          name: "Events & Galas",
          desc: "Arrive in style at weddings, gala evenings and VIP events. We handle everything from planning to the ride home."
        },
        {
          icon: "🚐",
          name: "Group Transport",
          desc: "Comfortable minibuses and vans for groups. Perfect for conference trips, sports clubs and family excursions."
        },
        {
          icon: "🏥",
          name: "Medical Transport",
          desc: "Accessible vehicles and trained drivers for safe medical journeys. Advance bookings are welcome."
        },
        {
          icon: "🌍",
          name: "Long Distance",
          desc: "Cross-city rides with comfort. Stockholm-Gothenburg or to your door wherever you are in the Nordics."
        }
      ]
    },
    fleet: {
      tag: "Our Fleet",
      titleBefore: "Vehicles of the",
      titleHighlight: "highest class",
      subtitle:
        "Our entire fleet is under 3 years old, certified and regularly maintained for your safety.",
      from: "From",
      items: [
        {
          cls: "Standard",
          name: "Mercedes-Benz E-Class",
          spec: "4 passengers · Leather · WiFi · Climate",
          price: "299 kr",
          emoji: "🚗"
        },
        {
          cls: "Premium",
          name: "BMW 7 Series",
          spec: "4 passengers · Massage seats · Champagne",
          price: "499 kr",
          emoji: "🚘"
        },
        {
          cls: "Group",
          name: "Mercedes-Benz V-Class",
          spec: "7 passengers · Extra luggage · WiFi",
          price: "699 kr",
          emoji: "🚐"
        }
      ]
    },
    why: {
      tag: "Why Traveny",
      titleBefore: "Quality you can",
      titleHighlight: "trust",
      rating: "Rating",
      trophy: "🏆",
      points: [
        {
          num: "01",
          title: "Always Punctual",
          text: "We track your flight in real time and adjust pickup time automatically. No waiting, no stress."
        },
        {
          num: "02",
          title: "Certified Drivers",
          text: "All our drivers are background-checked, professionally trained and speak fluent Swedish and English."
        },
        {
          num: "03",
          title: "Fixed Price, No Surprises",
          text: "You know the price before you book. No surcharges, no hidden fees - what we say is what you pay."
        }
      ]
    },
    testimonials: {
      tag: "Client Voices",
      titleBefore: "What our",
      titleHighlight: "clients",
      titleAfter: "say",
      items: [
        {
          text: "\"Impressed by the punctuality and comfort. The driver met me with a name sign and helped with luggage.\"",
          name: "Anna Karlsson",
          city: "Stockholm",
          initials: "AK"
        },
        {
          text: "\"We booked Traveny for our entire conference. Professional, smooth and great value. Corporate invoicing worked perfectly.\"",
          name: "Erik Lindqvist",
          city: "Gothenburg",
          initials: "EL"
        },
        {
          text: "\"Traveled from Malmo to Copenhagen with Traveny. Fantastic service and a truly luxurious vehicle. Highly recommend!\"",
          name: "Maria Henriksson",
          city: "Malmo",
          initials: "MH"
        }
      ]
    },
    cta: {
      tag: "Ready to ride?",
      titleBefore: "Your premium journey starts",
      titleHighlight: "here",
      subtitle:
        "Book online in 60 seconds or call us directly. We are always available - around the clock, 365 days a year.",
      bookNow: "Book Now"
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms",
      contact: "Contact",
      copy: "© 2026 Traveny AB · Reg. no. 556xxx-xxxx"
    }
  }
} as const satisfies Record<Lang, Record<string, unknown>>;

export type Translation = (typeof translations)[Lang];
