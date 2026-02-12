// hotelData.js - Complete hotel data for all 10 hotels (5 Makkah + 5 Madinah)

export const hotelsData = [
  // ==================== MAKKAH HOTELS ====================
  {
    id: "fairmont-makkah",
    name: "Fairmont Makkah Clock Royal Tower",
    slug: "fairmont-makkah",
    image: "/assets/images/fairmount-hotel.jpg",
    rating: 5,
    location: "Makkah",
    distance: "50m from Masjid al-Haram",
    amenities: ["Free WiFi", "Spa", "Haram View", "Fine Dining"],
    
    description: "Experience unparalleled luxury at the iconic Fairmont Makkah Clock Royal Tower. Located directly above the Holy Mosque, this prestigious hotel offers the closest possible proximity to the Kaaba with breathtaking views and world-class amenities.",
    
    fullAmenities: [
      { icon: "🕌", name: "Closest to Haram", detail: "Direct elevator access to Masjid al-Haram" },
      { icon: "🏙️", name: "Panoramic Views", detail: "Stunning views of the Holy Mosque and Kaaba" },
      { icon: "🍽️", name: "Fine Dining", detail: "Multiple award-winning restaurants" },
      { icon: "💆", name: "Luxury Spa", detail: "Full-service spa and wellness center" },
      { icon: "📶", name: "High-Speed WiFi", detail: "Complimentary internet throughout" },
      { icon: "🛍️", name: "Shopping Mall", detail: "Connected to Abraj Al Bait complex" },
      { icon: "🧳", name: "Concierge", detail: "24/7 multilingual assistance" },
      { icon: "♿", name: "Accessible", detail: "Wheelchair-friendly facilities" }
    ],
    
    roomTypes: [
      {
        type: "Deluxe Room",
        description: "Elegant rooms with modern amenities and city views",
        size: "40 sqm",
        occupancy: "2 adults",
        features: ["King or Twin Beds", "Marble Bathroom", "Prayer Mat", "Smart TV"]
      },
      {
        type: "Kaaba View Suite",
        description: "Premium suites with direct views of the Holy Kaaba",
        size: "55 sqm",
        occupancy: "2-3 adults",
        features: ["King Bed", "Separate Living Area", "Kaaba View", "Premium Amenities"]
      },
      {
        type: "Royal Suite",
        description: "Ultimate luxury with panoramic Haram views",
        size: "80 sqm",
        occupancy: "4 adults",
        features: ["Multiple Bedrooms", "Private Butler", "Dining Area", "VIP Lounge Access"]
      }
    ],
    
    umrahFacilities: {
      title: "Premium Umrah Services",
      features: [
        "Direct elevator access to Masjid al-Haram",
        "Prayer mats and Qibla direction in all rooms",
        "Holy Quran in multiple languages",
        "Zamzam water on every floor",
        "Ihram assistance and guidance",
        "VIP prayer areas for hotel guests",
        "24/7 Umrah concierge service",
        "Exclusive access during peak hours"
      ]
    },
    
    diningOptions: [
      {
        name: "Al Dar Restaurant",
        cuisine: "International Buffet",
        timing: "Open 24 hours",
        specialty: "Live cooking stations"
      },
      {
        name: "Swissôtel Café",
        cuisine: "European & Middle Eastern",
        timing: "6:00 AM - 12:00 AM",
        specialty: "Swiss specialties and Arabic mezze"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid al-Haram", distance: "50m", time: "Direct elevator access" },
      { name: "Kaaba", distance: "100m", time: "2 min walk" },
      { name: "Safa and Marwa", distance: "150m", time: "3 min walk" },
      { name: "Abraj Al Bait Mall", distance: "0m", time: "Inside complex" }
    ],
    
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 7 days before arrival",
      children: "Children under 12 stay free when using existing beds",
      pets: "Pets are not allowed"
    },
    
    gallery: [
      "/assets/images/fairmount-hotel.jpg",
      "/assets/images/fairmount-hotel1.jpg",
      "/assets/images/fairmount-hotel2.jpg",
      "/assets/images/fairmount-hotel3.jpg"
    ],
    
    priceRange: "550 - 650 SAR per night",
    featured: true
  },

  {
    id: "conrad-makkah",
    name: "Conrad Makkah",
    slug: "conrad-makkah",
    image: "/assets/images/conrad-hotel.webp",
    rating: 5,
    location: "Makkah",
    distance: "100m from Masjid al-Haram",
    amenities: ["Free WiFi", "Restaurant", "24/7 Service", "Luxury Suites"],
    
    description: "Conrad Makkah offers sophisticated luxury just steps from the Holy Mosque. With contemporary design and exceptional service, experience comfort and spirituality in perfect harmony.",
    
    fullAmenities: [
      { icon: "🕌", name: "Close to Haram", detail: "Just 100 meters walking distance" },
      { icon: "📶", name: "Free WiFi", detail: "High-speed internet throughout" },
      { icon: "🍽️", name: "Fine Dining", detail: "International and local cuisine" },
      { icon: "🛎️", name: "24/7 Service", detail: "Round-the-clock guest services" },
      { icon: "🏋️", name: "Fitness Center", detail: "State-of-the-art gym facilities" },
      { icon: "🅿️", name: "Valet Parking", detail: "Secure parking available" },
      { icon: "🧺", name: "Laundry Service", detail: "Same-day service available" },
      { icon: "🔒", name: "Safe Deposit", detail: "In-room safes for valuables" }
    ],
    
    roomTypes: [
      {
        type: "Deluxe King Room",
        description: "Spacious rooms with modern luxury",
        size: "38 sqm",
        occupancy: "2 adults",
        features: ["King Bed", "City View", "Work Desk", "Premium Toiletries"]
      },
      {
        type: "Executive Suite",
        description: "Enhanced comfort with lounge access",
        size: "50 sqm",
        occupancy: "3 adults",
        features: ["Separate Living Room", "Executive Lounge Access", "Enhanced Amenities"]
      }
    ],
    
    umrahFacilities: {
      title: "Pilgrim Services",
      features: [
        "Qibla direction marked in all rooms",
        "Prayer mats and caps provided",
        "Zamzam water available 24/7",
        "Multilingual staff (Arabic, English, Urdu)",
        "Umrah guidance on request",
        "Luggage storage facilities",
        "Early breakfast for Fajr prayer",
        "Transportation to Ziyarat locations"
      ]
    },
    
    diningOptions: [
      {
        name: "Conrad Kitchen",
        cuisine: "International & Arabian",
        timing: "6:00 AM - 11:00 PM",
        specialty: "All-day dining buffet"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid al-Haram", distance: "100m", time: "3 min walk" },
      { name: "Clock Tower", distance: "200m", time: "4 min walk" },
      { name: "Abraj Al Bait", distance: "250m", time: "5 min walk" }
    ],
    
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 5 days before arrival",
      children: "Children under 12 stay free",
      pets: "No pets allowed"
    },
    
    gallery: [
      "/assets/images/conrad-hotel.webp", 
      "/assets/images/conrad-hotel.webp1", 
      "/assets/images/conrad-hotel.webp2", 
      "/assets/images/conrad-hotel.webp3"
    ],
    
    priceRange: "500 - 580 SAR per night",
    featured: true
  },

  {
    id: "hyatt-makkah",
    name: "Hyatt Regency Makkah",
    slug: "hyatt-makkah",
    image: "/assets/images/hyatt-hotel.jpg",
    rating: 5,
    location: "Makkah",
    distance: "150m from Masjid al-Haram",
    amenities: ["Free WiFi", "Gym", "Close to Haram", "Executive Lounge"],
    
    description: "Hyatt Regency Makkah combines contemporary comfort with traditional hospitality, offering pilgrims a peaceful retreat near the Holy Mosque with excellent facilities and service.",
    
    fullAmenities: [
      { icon: "🕌", name: "Near Haram", detail: "150 meters from Holy Mosque" },
      { icon: "📶", name: "WiFi", detail: "Complimentary high-speed internet" },
      { icon: "🏋️", name: "Fitness Center", detail: "Modern gym equipment" },
      { icon: "🍽️", name: "Dining", detail: "Multiple restaurant options" },
      { icon: "🛗", name: "Executive Lounge", detail: "VIP lounge with refreshments" },
      { icon: "🅿️", name: "Parking", detail: "Ample parking space" },
      { icon: "🧳", name: "Business Center", detail: "Meeting rooms available" },
      { icon: "🔒", name: "Security", detail: "24/7 security personnel" }
    ],
    
    roomTypes: [
      {
        type: "Standard Room",
        description: "Comfortable accommodation with modern amenities",
        size: "32 sqm",
        occupancy: "2 adults",
        features: ["Twin or King Bed", "Work Area", "WiFi", "Mini Bar"]
      },
      {
        type: "Regency Suite",
        description: "Spacious suite with enhanced services",
        size: "48 sqm",
        occupancy: "3 adults",
        features: ["King Bed", "Living Area", "Lounge Access", "Premium Views"]
      }
    ],
    
    umrahFacilities: {
      title: "Umrah Pilgrim Amenities",
      features: [
        "Prayer facilities in rooms",
        "Qibla compass provided",
        "Zamzam water dispensers",
        "Multilingual Umrah guides",
        "Shuttle to Haram during peak times",
        "Islamic prayer timings displayed",
        "Halal dining options",
        "Separate prayer areas for families"
      ]
    },
    
    diningOptions: [
      {
        name: "Regency Restaurant",
        cuisine: "International Buffet",
        timing: "6:00 AM - 10:30 PM",
        specialty: "Asian and Arabic specialties"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid al-Haram", distance: "150m", time: "4 min walk" },
      { name: "Safa & Marwa", distance: "200m", time: "5 min walk" }
    ],
    
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 3 days before",
      children: "Children under 12 stay free",
      pets: "Pets not permitted"
    },
    
    gallery: [
      "/assets/images/hyatt-hotel.jpg", 
      "/assets/images/hyatt-hotel1.jpg", 
      "/assets/images/hyatt-hotel2.jpg", 
      "/assets/images/hyatt-hotel3.jpg"
    ],
    
    priceRange: "480 - 550 SAR per night",
    featured: false
  },

  {
    id: "hilton-convention",
    name: "Hilton Convention Makkah",
    slug: "hilton-convention",
    image: "/assets/images/hilton-makkah.jpg",
    rating: 5,
    location: "Makkah",
    distance: "300m from Masjid al-Haram",
    amenities: ["Free WiFi", "Parking", "Restaurant", "Business Center"],
    
    description: "Hilton Convention Makkah offers reliable comfort and professional service within walking distance of the Holy Mosque, perfect for pilgrims seeking value and convenience.",
    
    fullAmenities: [
      { icon: "🕌", name: "Walking Distance", detail: "300 meters to Haram" },
      { icon: "📶", name: "WiFi", detail: "Free internet access" },
      { icon: "🅿️", name: "Parking", detail: "Complimentary parking" },
      { icon: "🍽️", name: "Restaurant", detail: "On-site dining" },
      { icon: "💼", name: "Business Center", detail: "Work facilities available" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily room cleaning" },
      { icon: "🛎️", name: "Reception", detail: "24/7 front desk" },
      { icon: "🔒", name: "Safe", detail: "In-room safe boxes" }
    ],
    
    roomTypes: [
      {
        type: "Guest Room",
        description: "Well-appointed room with essential comforts",
        size: "28 sqm",
        occupancy: "2 adults",
        features: ["Double Bed", "Bathroom", "TV", "AC"]
      }
    ],
    
    umrahFacilities: {
      title: "Pilgrim Essentials",
      features: [
        "Prayer mats in rooms",
        "Qibla direction marked",
        "Zamzam water available",
        "Wake-up call for prayers",
        "Halal breakfast options",
        "Luggage storage",
        "Local guide recommendations"
      ]
    },
    
    diningOptions: [
      {
        name: "Main Restaurant",
        cuisine: "International",
        timing: "6:00 AM - 10:00 PM",
        specialty: "Breakfast buffet"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid al-Haram", distance: "300m", time: "6 min walk" }
    ],
    
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "48 hours before arrival",
      children: "Children under 10 stay free",
      pets: "No pets"
    },
    
    gallery: [
      "/assets/images/hilton-makkah.jpg",
      "/assets/images/hilton-makkah1.jpg",
      "/assets/images/hilton-makkah2.jpg",
      "/assets/images/hilton-makkah3.jpg"
    ],
    
    priceRange: "420 - 500 SAR per night",
    featured: false
  },

  {
    id: "raffles-makkah",
    name: "Raffles Makkah Palace",
    slug: "raffles-makkah",
    image: "/assets/images/raffles-hotel.jpg",
    rating: 5,
    location: "Makkah",
    distance: "50m from Masjid al-Haram",
    amenities: ["Butler Service", "Spa", "Direct Access", "VIP Lounge"],
    
    description: "Raffles Makkah Palace epitomizes ultra-luxury with personalized butler service, direct access to the Holy Mosque, and the finest amenities for discerning pilgrims.",
    
    fullAmenities: [
      { icon: "🕌", name: "Direct Access", detail: "Private access to Masjid al-Haram" },
      { icon: "🎩", name: "Butler Service", detail: "Personal butler for each room" },
      { icon: "💆", name: "Luxury Spa", detail: "World-class spa facilities" },
      { icon: "🍽️", name: "Fine Dining", detail: "Michelin-level restaurants" },
      { icon: "🏆", name: "VIP Lounge", detail: "Exclusive lounge access" },
      { icon: "🚁", name: "Helipad", detail: "Helicopter transfer available" },
      { icon: "💎", name: "Premium Suites", detail: "Palatial accommodations" },
      { icon: "🛡️", name: "VIP Security", detail: "Enhanced security measures" }
    ],
    
    roomTypes: [
      {
        type: "Palace Room",
        description: "Opulent rooms with regal décor",
        size: "60 sqm",
        occupancy: "2 adults",
        features: ["King Bed", "Marble Bath", "Butler Service", "Luxury Amenities"]
      },
      {
        type: "Royal Suite",
        description: "Ultimate luxury accommodation",
        size: "120 sqm",
        occupancy: "4 adults",
        features: ["Multiple Rooms", "Private Dining", "Panoramic Views", "VIP Access"]
      }
    ],
    
    umrahFacilities: {
      title: "VIP Pilgrim Services",
      features: [
        "Private prayer rooms",
        "Dedicated Umrah concierge",
        "VIP access to Haram",
        "Personal guide services",
        "Luxury Ihram assistance",
        "Premium Zamzam water",
        "Private transportation",
        "Express luggage handling"
      ]
    },
    
    diningOptions: [
      {
        name: "Raffles Restaurant",
        cuisine: "International Gourmet",
        timing: "24 hours",
        specialty: "Chef's tasting menu"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid al-Haram", distance: "50m", time: "VIP access" }
    ],
    
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Flexible cancellation",
      children: "All ages welcome",
      pets: "No pets"
    },
    
    gallery: [
      "/assets/images/raffles-hotel.jpg",
      "/assets/images/raffles-hotel1.jpg",
      "/assets/images/raffles-hotel2.jpg",
      "/assets/images/raffles-hotel3.jpg"
    ],
    
    priceRange: "700 - 850 SAR per night",
    featured: true
  },

  // ==================== MADINAH HOTELS ====================
  
  {
    id: "movenpick-madinah",
    name: "Anwar Al Madinah Movenpick",
    slug: "movenpick-madinah",
    image: "/assets/images/anwar-hotel.jpg",
    rating: 5,
    location: "Madinah",
    distance: "50m from Masjid an-Nabawi",
    amenities: ["Free WiFi", "Shopping Mall", "Near Gate 25", "Restaurant"],
    
    description: "Anwar Al Madinah Movenpick offers exceptional proximity to the Prophet's Mosque with direct mall access, combining convenience with luxury for a memorable Madinah experience.",
    
    fullAmenities: [
      { icon: "🕌", name: "Near Gate 25", detail: "50 meters from Masjid an-Nabawi" },
      { icon: "🛍️", name: "Mall Access", detail: "Direct access to shopping" },
      { icon: "📶", name: "WiFi", detail: "High-speed internet" },
      { icon: "🍽️", name: "Restaurant", detail: "Multiple dining options" },
      { icon: "☕", name: "Café", detail: "Swiss Café on-site" },
      { icon: "🅿️", name: "Parking", detail: "Valet parking service" },
      { icon: "🧳", name: "Concierge", detail: "24/7 assistance" },
      { icon: "🔒", name: "Security", detail: "Full security system" }
    ],
    
    roomTypes: [
      {
        type: "Superior Room",
        description: "Modern room with elegant design",
        size: "35 sqm",
        occupancy: "2 adults",
        features: ["Twin or King Bed", "City View", "Work Desk", "Minibar"]
      },
      {
        type: "Family Suite",
        description: "Spacious for families",
        size: "50 sqm",
        occupancy: "4 adults",
        features: ["Two Bedrooms", "Living Area", "Kitchenette"]
      }
    ],
    
    umrahFacilities: {
      title: "Madinah Pilgrim Services",
      features: [
        "Prayer mats and Qibla in rooms",
        "Holy Quran provided",
        "Zamzam water stations",
        "Ziyarat information desk",
        "Transportation to Quba & Uhud",
        "Multilingual staff",
        "Early breakfast service",
        "Luggage storage"
      ]
    },
    
    diningOptions: [
      {
        name: "Horizon Restaurant",
        cuisine: "International & Arabic",
        timing: "6:00 AM - 11:00 PM",
        specialty: "Buffet and à la carte"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "50m", time: "2 min walk" },
      { name: "Jannat al-Baqi", distance: "400m", time: "6 min walk" },
      { name: "Quba Mosque", distance: "5km", time: "10 min drive" }
    ],
    
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free up to 5 days before",
      children: "Under 12 stay free",
      pets: "No pets"
    },
    
    gallery: [
      "/assets/images/anwar-hotel.jpg",
      "/assets/images/anwar-hotel1.jpg",
      "/assets/images/anwar-hotel2.jpg",
      "/assets/images/anwar-hotel3.jpg"
    ],
    
    priceRange: "450 - 520 SAR per night",
    featured: true
  },

  {
    id: "pullman-madinah",
    name: "Pullman Zamzam Madina",
    slug: "pullman-madinah",
    image: "/assets/images/pullman-hotel.jpg",
    rating: 5,
    location: "Madinah",
    distance: "150m from Masjid an-Nabawi",
    amenities: ["Free WiFi", "City View", "Tea Lounge", "Breakfast"],
    
    description: "Pullman Zamzam Madina provides contemporary comfort within walking distance of the Prophet's Mosque, featuring modern amenities and warm hospitality.",
    
    fullAmenities: [
      { icon: "🕌", name: "Close to Haram", detail: "150 meters walking distance" },
      { icon: "📶", name: "WiFi", detail: "Free throughout hotel" },
      { icon: "🌆", name: "City Views", detail: "Panoramic views of Madinah" },
      { icon: "☕", name: "Tea Lounge", detail: "Traditional tea service" },
      { icon: "🍳", name: "Breakfast", detail: "Daily buffet included" },
      { icon: "🏋️", name: "Gym", detail: "Fitness facilities" },
      { icon: "🛎️", name: "Reception", detail: "24/7 service" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily cleaning" }
    ],
    
    roomTypes: [
      {
        type: "Standard Room",
        description: "Comfortable contemporary room",
        size: "30 sqm",
        occupancy: "2 adults",
        features: ["Double Bed", "Bathroom", "WiFi", "Safe"]
      }
    ],
    
    umrahFacilities: {
      title: "Pilgrim Amenities",
      features: [
        "Qibla direction in rooms",
        "Prayer mats available",
        "Zamzam water access",
        "Islamic prayer times",
        "Ziyarat tours bookable",
        "Multilingual assistance",
        "Fajr wake-up calls"
      ]
    },
    
    diningOptions: [
      {
        name: "Main Restaurant",
        cuisine: "International",
        timing: "6:00 AM - 10:00 PM",
        specialty: "Half board available"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "150m", time: "3 min walk" },
      { name: "Mount Uhud", distance: "8km", time: "15 min drive" }
    ],
    
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "3 days before arrival",
      children: "Under 12 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/pullman-hotel.jpg",
      "/assets/images/pullman-hotel1.jpg",
      "/assets/images/pullman-hotel2.jpg",
      "/assets/images/pullman-hotel3.jpg"
    ],
    
    priceRange: "400 - 480 SAR per night",
    featured: false
  },

  {
    id: "hilton-madinah",
    name: "Madinah Hilton Hotel",
    slug: "hilton-madinah",
    image: "/assets/images/madinah-hilton-hotel.avif",
    rating: 5,
    location: "Madinah",
    distance: "100m from Masjid an-Nabawi",
    amenities: ["Free WiFi", "Haram View", "Executive Rooms", "Parking"],
    
    description: "Madinah Hilton Hotel combines trusted Hilton quality with proximity to the Prophet's Mosque, offering comfortable accommodations and reliable service.",
    
    fullAmenities: [
      { icon: "🕌", name: "Near Haram", detail: "100 meters from mosque" },
      { icon: "🏙️", name: "Haram Views", detail: "Select rooms with mosque views" },
      { icon: "📶", name: "WiFi", detail: "Complimentary internet" },
      { icon: "💼", name: "Executive Rooms", detail: "Business facilities" },
      { icon: "🅿️", name: "Parking", detail: "Free parking available" },
      { icon: "🍽️", name: "Dining", detail: "Restaurant on-site" },
      { icon: "🛎️", name: "Service", detail: "24/7 front desk" },
      { icon: "🧳", name: "Storage", detail: "Luggage room" }
    ],
    
    roomTypes: [
      {
        type: "Guest Room",
        description: "Comfortable standard room",
        size: "32 sqm",
        occupancy: "2 adults",
        features: ["Twin or King Bed", "Work Area", "Safe", "Bathroom"]
      },
      {
        type: "Executive Room",
        description: "Enhanced room with lounge access",
        size: "40 sqm",
        occupancy: "3 adults",
        features: ["King Bed", "Lounge Access", "Enhanced Amenities"]
      }
    ],
    
    umrahFacilities: {
      title: "Madinah Services",
      features: [
        "Prayer facilities in rooms",
        "Qibla markers",
        "Zamzam water",
        "Prayer time notifications",
        "Ziyarat information",
        "Transportation assistance",
        "Multilingual staff"
      ]
    },
    
    diningOptions: [
      {
        name: "Hilton Restaurant",
        cuisine: "International",
        timing: "6:00 AM - 11:00 PM",
        specialty: "Breakfast buffet"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "100m", time: "2 min walk" },
      { name: "Quba Mosque", distance: "5km", time: "12 min drive" }
    ],
    
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free up to 3 days",
      children: "Under 12 free",
      pets: "No pets"
    },
    
    gallery: [
      "/assets/images/madinah-hilton-hotel.avif",
      "/assets/images/madinah-hilton-hotel1.avif",
      "/assets/images/madinah-hilton-hotel2.avif",
      "/assets/images/madinah-hilton-hotel3.avif"
    ],
    
    priceRange: "430 - 510 SAR per night",
    featured: false
  },

  {
    id: "shaza-madinah",
    name: "Shaza Al Madina",
    slug: "shaza-madinah",
    image: "/assets/images/sheza-hotel.jpg",
    rating: 5,
    location: "Madinah",
    distance: "150m from Masjid an-Nabawi",
    amenities: ["Boutique Style", "Fine Dining", "Free WiFi", "Wellness Center"],
    
    description: "Shaza Al Madina offers boutique luxury with personalized service, combining Arabian hospitality with contemporary elegance near the Prophet's Mosque.",
    
    fullAmenities: [
      { icon: "🕌", name: "Walking Distance", detail: "150 meters to Haram" },
      { icon: "🎨", name: "Boutique Design", detail: "Unique artistic interiors" },
      { icon: "🍽️", name: "Fine Dining", detail: "Gourmet restaurant" },
      { icon: "📶", name: "WiFi", detail: "High-speed internet" },
      { icon: "💆", name: "Wellness Center", detail: "Spa and relaxation" },
      { icon: "☕", name: "Café", detail: "Specialty coffee bar" },
      { icon: "🛎️", name: "Concierge", detail: "Personalized service" },
      { icon: "🔒", name: "Security", detail: "24/7 protection" }
    ],
    
    roomTypes: [
      {
        type: "Deluxe Room",
        description: "Stylishly designed room",
        size: "35 sqm",
        occupancy: "2 adults",
        features: ["King Bed", "Designer Decor", "Premium Bath", "WiFi"]
      }
    ],
    
    umrahFacilities: {
      title: "Boutique Pilgrim Services",
      features: [
        "Prayer mats and Quran",
        "Qibla direction",
        "Zamzam water",
        "Personalized Ziyarat planning",
        "Cultural guidance",
        "Multilingual concierge",
        "Private prayer spaces"
      ]
    },
    
    diningOptions: [
      {
        name: "Shaza Restaurant",
        cuisine: "Fine Dining",
        timing: "7:00 AM - 11:00 PM",
        specialty: "Contemporary Arabic cuisine"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "150m", time: "3 min walk" },
      { name: "Qiblatain Mosque", distance: "4km", time: "10 min drive" }
    ],
    
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "48 hours notice",
      children: "All ages welcome",
      pets: "Not permitted"
    },
    
    gallery: [
      "/assets/images/sheza-hotel.jpg",
      "/assets/images/sheza-hotel1.jpg",
      "/assets/images/sheza-hotel2.jpg",
      "/assets/images/sheza-hotel3.jpg"
    ],
    
    priceRange: "410 - 490 SAR per night",
    featured: false
  },

  {
    id: "dar-al-taqwa",
    name: "Dar Al Taqwa Hotel",
    slug: "dar-al-taqwa",
    image: "/assets/images/dar-al-taqwa-hotel.jpg",
    rating: 5,
    location: "Madinah",
    distance: "20m from Masjid an-Nabawi",
    amenities: ["Free WiFi", "Front Row", "Luxury Decor", "VIP Service"],
    
    description: "Dar Al Taqwa Hotel offers unmatched proximity at just 20 meters from the Prophet's Mosque, providing VIP service and luxurious accommodations for discerning pilgrims.",
    
    fullAmenities: [
      { icon: "🕌", name: "Closest Location", detail: "Only 20 meters from Haram entrance" },
      { icon: "🏆", name: "VIP Service", detail: "Premium personalized attention" },
      { icon: "💎", name: "Luxury Décor", detail: "Elegant traditional design" },
      { icon: "📶", name: "WiFi", detail: "High-speed connectivity" },
      { icon: "🍽️", name: "Full Board", detail: "All meals included" },
      { icon: "🛎️", name: "Butler Service", detail: "Dedicated staff" },
      { icon: "🚗", name: "Transfers", detail: "Airport pickup included" },
      { icon: "🔐", name: "VIP Access", detail: "Priority mosque entry" }
    ],
    
    roomTypes: [
      {
        type: "Premium Room",
        description: "Luxuriously appointed room",
        size: "45 sqm",
        occupancy: "2 adults",
        features: ["King Bed", "Marble Bathroom", "Haram View", "Premium Amenities"]
      },
      {
        type: "VIP Suite",
        description: "Ultimate luxury suite",
        size: "70 sqm",
        occupancy: "4 adults",
        features: ["Multiple Rooms", "Butler Service", "Panoramic Views", "Private Lounge"]
      }
    ],
    
    umrahFacilities: {
      title: "VIP Pilgrim Experience",
      features: [
        "Private prayer rooms",
        "VIP mosque access",
        "Personal Umrah guide",
        "Premium Zamzam water",
        "Luxury Ihram kits",
        "Private Ziyarat tours",
        "24/7 dedicated concierge",
        "Express check-in/out"
      ]
    },
    
    diningOptions: [
      {
        name: "Dar Restaurant",
        cuisine: "International & Arabic Gourmet",
        timing: "24 hours",
        specialty: "Full board dining experience"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "20m", time: "1 min walk" },
      { name: "Jannat al-Baqi", distance: "300m", time: "4 min walk" },
      { name: "Quba Mosque", distance: "5km", time: "10 min drive" },
      { name: "Mount Uhud", distance: "8km", time: "15 min drive" }
    ],
    
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Flexible cancellation policy",
      children: "All ages welcome with special services",
      pets: "No pets allowed"
    },
    
    gallery: [
      "/assets/images/dar-al-taqwa-hotel.jpg",
      "/assets/images/dar-al-taqwa-hotel1.jpg",
      "/assets/images/dar-al-taqwa-hotel2.jpg",
      "/assets/images/dar-al-taqwa-hotel3.jpg"
    ],
    
    priceRange: "520 - 620 SAR per night",
    featured: true
  }
];

// Helper function to get hotel by slug
export const getHotelBySlug = (slug) => {
  return hotelsData.find(hotel => hotel.slug === slug);
};

// Helper function to get all hotels by location
export const getHotelsByLocation = (location) => {
  return hotelsData.filter(hotel => hotel.location === location);
};

// Helper function to get featured hotels
export const getFeaturedHotels = () => {
  return hotelsData.filter(hotel => hotel.featured);
};