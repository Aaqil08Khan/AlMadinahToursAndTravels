// hotelData.js - Complete hotel data for all hotels (Makkah + Madinah)

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
      "/assets/images/conrad-hotel1.webp", 
      "/assets/images/conrad-hotel2.webp", 
      "/assets/images/conrad-hotel3.webp"
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

  {
    id: "movenpick-hajar-tower-makkah",
    name: "Mövenpick Hotel & Residence Hajar Tower Makkah",
    slug: "movenpick-hajar-tower-makkah",
    image: "/assets/images/movenpick_hotel.webp",
    rating: 5,
    location: "Makkah",
    distance: "0m from Masjid al-Haram",
    amenities: ["Dining Options", "Pool", "Gym", "Free WiFi"],
    
    description: "Mövenpick Hajar Tower offers premium accommodations with direct access to Masjid al-Haram, featuring modern facilities and exceptional Swiss hospitality.",
    
    fullAmenities: [
      { icon: "🕌", name: "Direct Access", detail: "Connected to Masjid al-Haram" },
      { icon: "🍽️", name: "Multiple Restaurants", detail: "Varied dining experiences" },
      { icon: "🏊", name: "Swimming Pool", detail: "Indoor pool facilities" },
      { icon: "🏋️", name: "Fitness Center", detail: "Fully equipped gym" },
      { icon: "📶", name: "Free WiFi", detail: "High-speed internet" },
      { icon: "🛎️", name: "Concierge", detail: "24/7 guest services" },
      { icon: "🅿️", name: "Parking", detail: "Valet parking available" },
      { icon: "🔒", name: "Security", detail: "Advanced security system" }
    ],
    
    roomTypes: [
      {
        type: "Superior Room",
        description: "Comfortable room with modern amenities",
        size: "35 sqm",
        occupancy: "2 adults",
        features: ["King or Twin Beds", "City View", "Work Desk", "Safe"]
      },
      {
        type: "Executive Suite",
        description: "Spacious suite with living area",
        size: "55 sqm",
        occupancy: "3 adults",
        features: ["Separate Living Room", "Enhanced Amenities", "Premium View"]
      }
    ],
    
    umrahFacilities: {
      title: "Pilgrim Services",
      features: [
        "Prayer mats in all rooms",
        "Qibla direction marked",
        "Holy Quran provided",
        "Zamzam water stations",
        "Multilingual staff",
        "Prayer time notifications",
        "Umrah information desk",
        "Direct Haram access"
      ]
    },
    
    diningOptions: [
      {
        name: "Mövenpick Restaurant",
        cuisine: "International & Swiss",
        timing: "6:00 AM - 11:00 PM",
        specialty: "Swiss chocolate and international buffet"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid al-Haram", distance: "0m", time: "Direct access" },
      { name: "Kaaba", distance: "50m", time: "1 min walk" }
    ],
    
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 5 days before",
      children: "Under 12 stay free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/movenpick_hotel.webp",
      "/assets/images/movenpick_hotel1.webp",
      "/assets/images/movenpick_hotel2.webp",
      "/assets/images/movenpick_hotel3.webp"
    ],
    
    priceRange: "520 - 600 SAR per night",
    featured: true
  },

  {
    id: "pullman-zamzam-makkah",
    name: "Pullman Zamzam Makkah",
    slug: "pullman-zamzam-makkah",
    image: "/assets/images/pullman-zamzam-makkah.webp",
    rating: 5,
    location: "Makkah",
    distance: "0m from Masjid al-Haram",
    amenities: ["City View", "Free WiFi", "Restaurant", "Direct Access"],
    
    description: "Pullman Zamzam Makkah provides modern luxury with direct connection to the Holy Mosque, offering contemporary comfort and excellent service for pilgrims.",
    
    fullAmenities: [
      { icon: "🕌", name: "Direct Connection", detail: "Bridge access to Masjid al-Haram" },
      { icon: "🌆", name: "City Views", detail: "Panoramic views of Makkah" },
      { icon: "📶", name: "Free WiFi", detail: "Complimentary high-speed internet" },
      { icon: "🍽️", name: "Restaurant", detail: "International cuisine" },
      { icon: "☕", name: "Café", detail: "24-hour coffee shop" },
      { icon: "🧳", name: "Concierge", detail: "Multilingual assistance" },
      { icon: "🛎️", name: "Room Service", detail: "24/7 service" },
      { icon: "🔒", name: "Safe Deposit", detail: "Secure storage" }
    ],
    
    roomTypes: [
      {
        type: "Standard Room",
        description: "Contemporary room with city views",
        size: "32 sqm",
        occupancy: "2 adults",
        features: ["King or Twin Beds", "Modern Bathroom", "Work Area", "WiFi"]
      },
      {
        type: "Deluxe Suite",
        description: "Spacious suite with enhanced amenities",
        size: "50 sqm",
        occupancy: "3 adults",
        features: ["Living Area", "Premium Bedding", "Enhanced Views"]
      }
    ],
    
    umrahFacilities: {
      title: "Umrah Amenities",
      features: [
        "Prayer mats provided",
        "Qibla direction in rooms",
        "Zamzam water available",
        "Prayer time alerts",
        "Umrah guidance",
        "Direct Haram access",
        "Multilingual staff",
        "Early breakfast for Fajr"
      ]
    },
    
    diningOptions: [
      {
        name: "Pullman Dining",
        cuisine: "International & Local",
        timing: "6:00 AM - 11:00 PM",
        specialty: "Breakfast buffet"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid al-Haram", distance: "0m", time: "Bridge access" },
      { name: "Kaaba", distance: "100m", time: "2 min walk" }
    ],
    
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free up to 3 days before",
      children: "Under 12 free",
      pets: "Not permitted"
    },
    
    gallery: [
      "/assets/images/pullman-zamzam-makkah.webp",
      "/assets/images/pullman-zamzam-makkah1.webp",
      "/assets/images/pullman-zamzam-makkah2.webp",
      "/assets/images/pullman-zamzam-makkah3.webp"
    ],
    
    priceRange: "500 - 580 SAR per night",
    featured: false
  },

  {
    id: "voco-makkah",
    name: "voco Makkah (IHG)",
    slug: "voco-makkah",
    image: "/assets/images/voco-makkah.webp",
    rating: 5,
    location: "Makkah",
    distance: "600m from Masjid al-Haram",
    amenities: ["Free WiFi", "Shuttle Service", "Urban Views", "Restaurant"],
    
    description: "voco Makkah offers contemporary style and comfort with convenient shuttle service to the Holy Mosque, perfect for modern pilgrims seeking value and convenience.",
    
    fullAmenities: [
      { icon: "🕌", name: "Shuttle to Haram", detail: "Regular shuttle service" },
      { icon: "📶", name: "Free WiFi", detail: "High-speed internet" },
      { icon: "🌆", name: "Urban Views", detail: "City skyline views" },
      { icon: "🍽️", name: "Restaurant", detail: "On-site dining" },
      { icon: "☕", name: "Café", detail: "Coffee and snacks" },
      { icon: "🛎️", name: "Reception", detail: "24/7 front desk" },
      { icon: "🅿️", name: "Parking", detail: "Free parking" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily service" }
    ],
    
    roomTypes: [
      {
        type: "Comfort Room",
        description: "Modern room with essential amenities",
        size: "28 sqm",
        occupancy: "2 adults",
        features: ["Twin or King Bed", "Bathroom", "TV", "Work Desk"]
      }
    ],
    
    umrahFacilities: {
      title: "Pilgrim Services",
      features: [
        "Prayer mats in rooms",
        "Qibla direction marked",
        "Zamzam water access",
        "Shuttle to Haram",
        "Prayer time display",
        "Halal dining",
        "Multilingual staff"
      ]
    },
    
    diningOptions: [
      {
        name: "voco Restaurant",
        cuisine: "International",
        timing: "6:00 AM - 10:00 PM",
        specialty: "Breakfast included"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid al-Haram", distance: "600m", time: "Shuttle available" }
    ],
    
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "48 hours notice",
      children: "Under 12 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/voco-makkah.webp",
      "/assets/images/voco-makkah1.webp",
      "/assets/images/voco-makkah2.webp",
      "/assets/images/voco-makkah3.webp"
    ],
    
    priceRange: "380 - 450 SAR per night",
    featured: false
  },

  {
    id: "holiday-inn-makkah-al-aziziyah",
    name: "Holiday Inn Makkah Al Aziziyah",
    slug: "holiday-inn-makkah-al-aziziyah",
    image: "/assets/images/makkah-al-azizah.webp",
    rating: 4,
    location: "Makkah",
    distance: "1500m from Masjid al-Haram",
    amenities: ["Free WiFi", "Shuttle Service", "Restaurant", "Parking"],
    
    description: "Holiday Inn Makkah Al Aziziyah provides comfortable accommodation with reliable shuttle service, offering great value for pilgrims on a budget.",
    
    fullAmenities: [
      { icon: "🚐", name: "Shuttle Service", detail: "Free shuttle to Haram" },
      { icon: "📶", name: "Free WiFi", detail: "Internet throughout" },
      { icon: "🍽️", name: "Restaurant", detail: "International dining" },
      { icon: "🅿️", name: "Free Parking", detail: "Ample parking space" },
      { icon: "🛎️", name: "Front Desk", detail: "24/7 service" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily cleaning" },
      { icon: "🔒", name: "Security", detail: "24-hour security" },
      { icon: "☕", name: "Breakfast", detail: "Complimentary breakfast" }
    ],
    
    roomTypes: [
      {
        type: "Standard Room",
        description: "Comfortable room with basic amenities",
        size: "25 sqm",
        occupancy: "2 adults",
        features: ["Twin or Double Bed", "Bathroom", "TV", "AC"]
      }
    ],
    
    umrahFacilities: {
      title: "Basic Pilgrim Services",
      features: [
        "Prayer mats available",
        "Qibla direction",
        "Shuttle to Haram",
        "Prayer times posted",
        "Halal breakfast",
        "Luggage storage"
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
      { name: "Masjid al-Haram", distance: "1500m", time: "Shuttle service" }
    ],
    
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "24 hours notice",
      children: "Under 12 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/makkah-al-azizah.webp",
      "/assets/images/makkah-al-azizah1.webp",
      "/assets/images/makkah-al-azizah2.webp",
      "/assets/images/makkah-al-azizah3.webp"
    ],
    
    priceRange: "280 - 350 SAR per night",
    featured: false
  },

  {
    id: "makkah-towers-clock-towers",
    name: "Makkah Towers (Clock Towers)",
    slug: "makkah-towers-clock-towers",
    image: "/assets/images/theclocltower.webp",
    rating: 5,
    location: "Makkah",
    distance: "10m from Masjid al-Haram",
    amenities: ["Near Grand Mosque", "Luxury Rooms", "Shopping Mall", "Fine Dining"],
    
    description: "Makkah Towers within the iconic Clock Tower complex offers ultimate proximity to the Holy Mosque with world-class luxury and unparalleled convenience.",
    
    fullAmenities: [
      { icon: "🕌", name: "Closest Location", detail: "Just 10 meters from Haram" },
      { icon: "💎", name: "Luxury Rooms", detail: "Premium accommodations" },
      { icon: "🛍️", name: "Shopping Mall", detail: "Abraj Al Bait complex" },
      { icon: "🍽️", name: "Fine Dining", detail: "Multiple restaurants" },
      { icon: "📶", name: "WiFi", detail: "High-speed internet" },
      { icon: "🛗", name: "Express Elevators", detail: "Direct Haram access" },
      { icon: "🧳", name: "Concierge", detail: "VIP services" },
      { icon: "🔒", name: "Security", detail: "Advanced security" }
    ],
    
    roomTypes: [
      {
        type: "Deluxe Room",
        description: "Elegant room with modern luxury",
        size: "38 sqm",
        occupancy: "2 adults",
        features: ["King Bed", "Marble Bathroom", "City View", "Premium Amenities"]
      },
      {
        type: "Haram View Suite",
        description: "Spectacular views of the Holy Mosque",
        size: "60 sqm",
        occupancy: "3 adults",
        features: ["Separate Living Area", "Haram View", "VIP Access"]
      }
    ],
    
    umrahFacilities: {
      title: "Premium Umrah Services",
      features: [
        "Direct elevator to Haram",
        "Prayer mats and Quran",
        "Zamzam water on all floors",
        "VIP prayer areas",
        "Umrah concierge",
        "Express Haram access",
        "Multilingual staff",
        "24/7 assistance"
      ]
    },
    
    diningOptions: [
      {
        name: "Tower Restaurant",
        cuisine: "International Gourmet",
        timing: "24 hours",
        specialty: "Fine dining experience"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid al-Haram", distance: "10m", time: "Express elevator" },
      { name: "Kaaba", distance: "50m", time: "1 min walk" }
    ],
    
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free up to 7 days before",
      children: "Under 12 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/theclocltower.webp",
      "/assets/images/theclocltower1.webp",
      "/assets/images/theclocltower2.webp",
      "/assets/images/theclocltower3.webp"
    ],
    
    priceRange: "600 - 700 SAR per night",
    featured: true
  },

  {
    id: "safa-tower-hotel-makkah",
    name: "Safa Tower Hotel Makkah",
    slug: "safa-tower-hotel-makkah",
    image: "/assets/images/safatowerhotel.webp",
    rating: 4,
    location: "Makkah",
    distance: "400m from Masjid al-Haram",
    amenities: ["Free WiFi", "Shuttle Service", "Restaurant", "City View"],
    
    description: "Safa Tower Hotel offers comfortable accommodation within walking distance of the Holy Mosque, providing good value and essential amenities for pilgrims.",
    
    fullAmenities: [
      { icon: "🕌", name: "Near Haram", detail: "400 meters walking distance" },
      { icon: "📶", name: "Free WiFi", detail: "Internet access" },
      { icon: "🚐", name: "Shuttle", detail: "Transport to Haram" },
      { icon: "🍽️", name: "Restaurant", detail: "On-site dining" },
      { icon: "🌆", name: "City Views", detail: "Views of Makkah" },
      { icon: "🛎️", name: "Reception", detail: "24/7 service" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily cleaning" },
      { icon: "🅿️", name: "Parking", detail: "Available" }
    ],
    
    roomTypes: [
      {
        type: "Standard Room",
        description: "Comfortable room with essentials",
        size: "28 sqm",
        occupancy: "2 adults",
        features: ["Double Bed", "Bathroom", "TV", "WiFi"]
      }
    ],
    
    umrahFacilities: {
      title: "Pilgrim Services",
      features: [
        "Prayer mats in rooms",
        "Qibla direction",
        "Shuttle to Haram",
        "Prayer times displayed",
        "Halal dining",
        "Luggage storage"
      ]
    },
    
    diningOptions: [
      {
        name: "Hotel Restaurant",
        cuisine: "International & Arabic",
        timing: "6:00 AM - 10:00 PM",
        specialty: "Breakfast included"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid al-Haram", distance: "400m", time: "8 min walk or shuttle" }
    ],
    
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "48 hours notice",
      children: "Under 10 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/safatowerhotel.webp",
      "/assets/images/safatowerhotel1.webp",
      "/assets/images/safatowerhotel2.webp",
      "/assets/images/safatowerhotel3.webp"
    ],
    
    priceRange: "350 - 430 SAR per night",
    featured: false
  },

  {
    id: "kiswa-towers-hotel-makkah",
    name: "Kiswa Towers Hotel",
    slug: "kiswa-towers-hotel-makkah",
    image: "/assets/images/kiswatowerhotel.webp",
    rating: 4,
    location: "Makkah",
    distance: "1400m from Masjid al-Haram",
    amenities: ["Free WiFi", "Shuttle", "Restaurant", "Budget-Friendly"],
    
    description: "Kiswa Towers Hotel provides budget-friendly accommodation with shuttle service to the Holy Mosque, ideal for pilgrims seeking economical options.",
    
    fullAmenities: [
      { icon: "🚐", name: "Free Shuttle", detail: "Regular service to Haram" },
      { icon: "📶", name: "WiFi", detail: "Complimentary internet" },
      { icon: "🍽️", name: "Restaurant", detail: "Basic dining options" },
      { icon: "💰", name: "Budget-Friendly", detail: "Affordable rates" },
      { icon: "🛎️", name: "Reception", detail: "24/7 desk" },
      { icon: "🧹", name: "Cleaning", detail: "Daily housekeeping" },
      { icon: "🅿️", name: "Parking", detail: "Free parking" },
      { icon: "🔒", name: "Security", detail: "Basic security" }
    ],
    
    roomTypes: [
      {
        type: "Economy Room",
        description: "Simple room with basic facilities",
        size: "22 sqm",
        occupancy: "2 adults",
        features: ["Twin Beds", "Bathroom", "AC", "TV"]
      }
    ],
    
    umrahFacilities: {
      title: "Basic Services",
      features: [
        "Prayer mats available",
        "Qibla marked",
        "Shuttle to Haram",
        "Prayer times",
        "Basic breakfast",
        "Luggage room"
      ]
    },
    
    diningOptions: [
      {
        name: "Simple Restaurant",
        cuisine: "Local & Basic",
        timing: "6:00 AM - 9:00 PM",
        specialty: "Breakfast included"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid al-Haram", distance: "1400m", time: "Shuttle service" }
    ],
    
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "24 hours notice",
      children: "Under 10 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/kiswatowerhotel.webp",
      "/assets/images/kiswatowerhotel1.webp",
      "/assets/images/kiswatowerhotel2.webp",
      "/assets/images/kiswatowerhotel3.webp"
    ],
    
    priceRange: "250 - 320 SAR per night",
    featured: false
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
  },

  {
    id: "shaza-regency-plaza-al-madinah",
    name: "Shaza Regency Plaza Al Madinah",
    slug: "shaza-regency-plaza-al-madinah",
    image: "/assets/images/shazaregencyplazahotel.webp",
    rating: 5,
    location: "Madinah",
    distance: "300m from Masjid an-Nabawi",
    amenities: ["Free WiFi", "Modern Rooms", "Restaurant", "City View"],
    
    description: "Shaza Regency Plaza combines modern comfort with convenient location, offering well-appointed rooms and excellent service near the Prophet's Mosque.",
    
    fullAmenities: [
      { icon: "🕌", name: "Near Haram", detail: "300 meters walking distance" },
      { icon: "📶", name: "Free WiFi", detail: "High-speed internet" },
      { icon: "🏢", name: "Modern Design", detail: "Contemporary interiors" },
      { icon: "🍽️", name: "Restaurant", detail: "International cuisine" },
      { icon: "🌆", name: "City Views", detail: "Panoramic windows" },
      { icon: "🛎️", name: "Reception", detail: "24/7 service" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily cleaning" },
      { icon: "🅿️", name: "Parking", detail: "Available" }
    ],
    
    roomTypes: [
      {
        type: "Standard Room",
        description: "Modern room with city views",
        size: "30 sqm",
        occupancy: "2 adults",
        features: ["Double Bed", "Modern Bathroom", "WiFi", "TV"]
      },
      {
        type: "Family Room",
        description: "Spacious room for families",
        size: "45 sqm",
        occupancy: "4 adults",
        features: ["Multiple Beds", "Living Space", "Enhanced Amenities"]
      }
    ],
    
    umrahFacilities: {
      title: "Pilgrim Services",
      features: [
        "Prayer mats in rooms",
        "Qibla direction marked",
        "Zamzam water available",
        "Prayer time notifications",
        "Ziyarat information",
        "Multilingual staff",
        "Shuttle service available"
      ]
    },
    
    diningOptions: [
      {
        name: "Regency Restaurant",
        cuisine: "International & Local",
        timing: "6:00 AM - 11:00 PM",
        specialty: "Breakfast buffet"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "300m", time: "5 min walk" },
      { name: "Quba Mosque", distance: "5km", time: "12 min drive" }
    ],
    
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free up to 3 days before",
      children: "Under 12 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/shazaregencyplazahotel.webp",
      "/assets/images/shazaregencyplazahotel1.webp",
      "/assets/images/shazaregencyplazahotel2.webp",
      "/assets/images/shazaregencyplazahotel3.webp"
    ],
    
    priceRange: "350 - 420 SAR per night",
    featured: false
  },

  {
    id: "makarem-al-madinah-hotel",
    name: "Makarem Al Madinah Hotel",
    slug: "makarem-al-madinah-hotel",
    image: "/assets/images/makaremalmadinah.webp",
    rating: 4,
    location: "Madinah",
    distance: "250m from Masjid an-Nabawi",
    amenities: ["Free WiFi", "Restaurant", "Room Service", "Near Haram"],
    
    description: "Makarem Al Madinah Hotel offers comfortable accommodation within walking distance of the Prophet's Mosque, providing good value and essential services.",
    
    fullAmenities: [
      { icon: "🕌", name: "Near Haram", detail: "250 meters from mosque" },
      { icon: "📶", name: "Free WiFi", detail: "Internet access" },
      { icon: "🍽️", name: "Restaurant", detail: "On-site dining" },
      { icon: "🛎️", name: "Room Service", detail: "Available" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily cleaning" },
      { icon: "🔒", name: "Security", detail: "24-hour security" },
      { icon: "🅿️", name: "Parking", detail: "Available" },
      { icon: "☕", name: "Breakfast", detail: "Included" }
    ],
    
    roomTypes: [
      {
        type: "Standard Room",
        description: "Comfortable room with basic amenities",
        size: "28 sqm",
        occupancy: "2 adults",
        features: ["Twin or Double Bed", "Bathroom", "TV", "AC"]
      }
    ],
    
    umrahFacilities: {
      title: "Essential Services",
      features: [
        "Prayer mats provided",
        "Qibla direction",
        "Prayer times posted",
        "Zamzam water",
        "Halal dining",
        "Luggage storage"
      ]
    },
    
    diningOptions: [
      {
        name: "Hotel Restaurant",
        cuisine: "Arabic & International",
        timing: "6:00 AM - 10:00 PM",
        specialty: "Breakfast included"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "250m", time: "5 min walk" }
    ],
    
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "48 hours notice",
      children: "Under 10 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/makaremalmadinah.webp",
      "/assets/images/makaremalmadinah1.webp",
      "/assets/images/makaremalmadinah2.webp",
      "/assets/images/makaremalmadinah3.webp"
    ],
    
    priceRange: "320 - 390 SAR per night",
    featured: false
  },

  {
    id: "nusk-al-eman-hotel",
    name: "Nusk Al Eman Hotel",
    slug: "nusk-al-eman-hotel",
    image: "/assets/images/nuskalemanhotel.webp",
    rating: 4,
    location: "Madinah",
    distance: "400m from Masjid an-Nabawi",
    amenities: ["Free WiFi", "Shuttle Service", "Basic Amenities", "Budget-Friendly"],
    
    description: "Nusk Al Eman Hotel provides budget-friendly accommodation with shuttle service to the Prophet's Mosque, ideal for pilgrims seeking economical options.",
    
    fullAmenities: [
      { icon: "🚐", name: "Shuttle Service", detail: "Regular transport to Haram" },
      { icon: "📶", name: "WiFi", detail: "Basic internet" },
      { icon: "💰", name: "Budget-Friendly", detail: "Affordable rates" },
      { icon: "🛎️", name: "Reception", detail: "24-hour desk" },
      { icon: "🧹", name: "Cleaning", detail: "Basic housekeeping" },
      { icon: "🅿️", name: "Parking", detail: "Free parking" },
      { icon: "🔒", name: "Security", detail: "Basic security" },
      { icon: "☕", name: "Simple Breakfast", detail: "Basic meal" }
    ],
    
    roomTypes: [
      {
        type: "Economy Room",
        description: "Simple room with essentials",
        size: "22 sqm",
        occupancy: "2 adults",
        features: ["Twin Beds", "Bathroom", "AC", "Basic Amenities"]
      }
    ],
    
    umrahFacilities: {
      title: "Basic Pilgrim Services",
      features: [
        "Prayer mats available",
        "Qibla marked",
        "Shuttle to mosque",
        "Prayer times",
        "Simple meals",
        "Luggage room"
      ]
    },
    
    diningOptions: [
      {
        name: "Simple Dining",
        cuisine: "Basic Local Food",
        timing: "6:00 AM - 9:00 PM",
        specialty: "Room only option"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "400m", time: "Shuttle available" }
    ],
    
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "24 hours notice",
      children: "Under 8 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/nuskalemanhotel.webp",
      "/assets/images/nuskalemanhotel1.webp",
      "/assets/images/nuskalemanhotel2.webp",
      "/assets/images/nuskalemanhotel3.webp"
    ],
    
    priceRange: "220 - 290 SAR per night",
    featured: false
  },

  {
    id: "dar-al-eiman-al-haram",
    name: "Dar Al Eiman Al Haram Hotel",
    slug: "dar-al-eiman-al-haram",
    image: "/assets/images/daraleimanhotel.webp",
    rating: 4,
    location: "Madinah",
    distance: "100m from Masjid an-Nabawi",
    amenities: ["Free WiFi", "Close to Haram", "Restaurant", "Comfortable Rooms"],
    
    description: "Dar Al Eiman Al Haram Hotel offers comfortable accommodation just 100 meters from the Prophet's Mosque, providing convenience and good value.",
    
    fullAmenities: [
      { icon: "🕌", name: "Close to Haram", detail: "100 meters from mosque" },
      { icon: "📶", name: "Free WiFi", detail: "Internet access" },
      { icon: "🍽️", name: "Restaurant", detail: "On-site dining" },
      { icon: "🛏️", name: "Comfortable Rooms", detail: "Well-maintained" },
      { icon: "🛎️", name: "Reception", detail: "24/7 service" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily cleaning" },
      { icon: "🅿️", name: "Parking", detail: "Available" },
      { icon: "🔒", name: "Security", detail: "Secure facility" }
    ],
    
    roomTypes: [
      {
        type: "Standard Room",
        description: "Comfortable room near Haram",
        size: "26 sqm",
        occupancy: "2 adults",
        features: ["Double Bed", "Bathroom", "TV", "WiFi"]
      }
    ],
    
    umrahFacilities: {
      title: "Pilgrim Amenities",
      features: [
        "Prayer mats in rooms",
        "Qibla direction",
        "Zamzam water",
        "Prayer times",
        "Breakfast included",
        "Close to Haram"
      ]
    },
    
    diningOptions: [
      {
        name: "Hotel Restaurant",
        cuisine: "Local & International",
        timing: "6:00 AM - 10:00 PM",
        specialty: "Breakfast included"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "100m", time: "2 min walk" }
    ],
    
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "48 hours notice",
      children: "Under 10 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/daraleimanhotel.webp",
      "/assets/images/daraleimanhotel1.webp",
      "/assets/images/daraleimanhotel2.webp",
      "/assets/images/daraleimanhotel3.webp"
    ],
    
    priceRange: "310 - 380 SAR per night",
    featured: false
  },

  {
    id: "sofitel-shahd-al-madinah",
    name: "Sofitel Shahd Al Madinah",
    slug: "sofitel-shahd-al-madinah",
    image: "/assets/images/sofitelhotel.webp",
    rating: 5,
    location: "Madinah",
    distance: "300m from Masjid an-Nabawi",
    amenities: ["Luxury Dining", "Free WiFi", "Modern Rooms", "Premium Service"],
    
    description: "Sofitel Shahd Al Madinah brings French elegance to Madinah with luxury accommodations, fine dining, and impeccable service near the Prophet's Mosque.",
    
    fullAmenities: [
      { icon: "🕌", name: "Near Haram", detail: "300 meters from mosque" },
      { icon: "🍽️", name: "Luxury Dining", detail: "Fine French-Arabic cuisine" },
      { icon: "📶", name: "Free WiFi", detail: "High-speed internet" },
      { icon: "🏢", name: "Modern Rooms", detail: "Contemporary French design" },
      { icon: "🛎️", name: "Premium Service", detail: "Attentive staff" },
      { icon: "🏋️", name: "Fitness", detail: "Well-equipped gym" },
      { icon: "🅿️", name: "Valet Parking", detail: "Available" },
      { icon: "🧳", name: "Concierge", detail: "Full services" }
    ],
    
    roomTypes: [
      {
        type: "Luxury Room",
        description: "Elegantly designed room",
        size: "36 sqm",
        occupancy: "2 adults",
        features: ["King Bed", "French Design", "Premium Bath", "City View"]
      },
      {
        type: "Prestige Suite",
        description: "Spacious luxury suite",
        size: "55 sqm",
        occupancy: "3 adults",
        features: ["Separate Living Area", "Enhanced Amenities", "Premium Views"]
      }
    ],
    
    umrahFacilities: {
      title: "Luxury Pilgrim Services",
      features: [
        "Prayer mats and Quran",
        "Qibla direction",
        "Premium Zamzam water",
        "Personalized service",
        "Ziyarat arrangements",
        "Multilingual concierge",
        "VIP treatment"
      ]
    },
    
    diningOptions: [
      {
        name: "Sofitel Restaurant",
        cuisine: "French & Arabic Fine Dining",
        timing: "6:00 AM - 11:00 PM",
        specialty: "Gourmet breakfast buffet"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "300m", time: "5 min walk" },
      { name: "Quba Mosque", distance: "5km", time: "10 min drive" }
    ],
    
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free up to 5 days before",
      children: "Under 12 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/sofitelhotel.webp",
      "/assets/images/sofitelhotel1.webp",
      "/assets/images/sofitelhotel2.webp",
      "/assets/images/sofitelhotel3.webp"
    ],
    
    priceRange: "400 - 480 SAR per night",
    featured: true
  },

  {
    id: "millennium-al-aqeeq-hotel",
    name: "Millennium Al Aqeeq Hotel",
    slug: "millennium-al-aqeeq-hotel",
    image: "/assets/images/millenniumhotel.webp",
    rating: 5,
    location: "Madinah",
    distance: "200m from Masjid an-Nabawi",
    amenities: ["Free WiFi", "Executive Lounge", "Restaurant", "Premium Rooms"],
    
    description: "Millennium Al Aqeeq Hotel offers upscale accommodation with executive amenities and excellent location near the Prophet's Mosque.",
    
    fullAmenities: [
      { icon: "🕌", name: "Near Haram", detail: "200 meters from mosque" },
      { icon: "📶", name: "Free WiFi", detail: "High-speed internet" },
      { icon: "🛗", name: "Executive Lounge", detail: "VIP lounge access" },
      { icon: "🍽️", name: "Restaurant", detail: "Multiple dining options" },
      { icon: "🏢", name: "Premium Rooms", detail: "Modern accommodations" },
      { icon: "🛎️", name: "Concierge", detail: "24/7 service" },
      { icon: "🅿️", name: "Parking", detail: "Valet available" },
      { icon: "🏋️", name: "Gym", detail: "Fitness center" }
    ],
    
    roomTypes: [
      {
        type: "Superior Room",
        description: "Spacious modern room",
        size: "34 sqm",
        occupancy: "2 adults",
        features: ["King Bed", "Work Desk", "Modern Bath", "City View"]
      },
      {
        type: "Executive Suite",
        description: "Premium suite with lounge access",
        size: "52 sqm",
        occupancy: "3 adults",
        features: ["Living Area", "Lounge Access", "Enhanced Amenities"]
      }
    ],
    
    umrahFacilities: {
      title: "Executive Pilgrim Services",
      features: [
        "Prayer facilities",
        "Qibla direction",
        "Zamzam water",
        "Executive lounge",
        "Ziyarat information",
        "Premium service",
        "Multilingual staff"
      ]
    },
    
    diningOptions: [
      {
        name: "Millennium Restaurant",
        cuisine: "International & Arabic",
        timing: "6:00 AM - 11:00 PM",
        specialty: "Breakfast buffet"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "200m", time: "4 min walk" }
    ],
    
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free up to 3 days",
      children: "Under 12 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/millenniumhotel.webp",
      "/assets/images/millenniumhotel1.webp",
      "/assets/images/millenniumhotel2.webp",
      "/assets/images/millenniumhotel3.webp"
    ],
    
    priceRange: "380 - 460 SAR per night",
    featured: false
  },

  {
    id: "al-manakha-rotana-madinah",
    name: "Al Manakha Rotana Madinah",
    slug: "al-manakha-rotana-madinah",
    image: "/assets/images/almanakhahotel.jpg",
    rating: 4,
    location: "Madinah",
    distance: "350m from Masjid an-Nabawi",
    amenities: ["Free WiFi", "Restaurant", "Modern Design", "Comfortable Rooms"],
    
    description: "Al Manakha Rotana Madinah provides modern comfort with Arabian hospitality, offering well-appointed rooms within walking distance of the Prophet's Mosque.",
    
    fullAmenities: [
      { icon: "🕌", name: "Walking Distance", detail: "350 meters from Haram" },
      { icon: "📶", name: "Free WiFi", detail: "Complimentary internet" },
      { icon: "🍽️", name: "Restaurant", detail: "International cuisine" },
      { icon: "🏢", name: "Modern Design", detail: "Contemporary interiors" },
      { icon: "🛏️", name: "Comfortable Rooms", detail: "Well-appointed" },
      { icon: "🛎️", name: "Reception", detail: "24/7 service" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily cleaning" },
      { icon: "🅿️", name: "Parking", detail: "Available" }
    ],
    
    roomTypes: [
      {
        type: "Classic Room",
        description: "Modern comfortable room",
        size: "30 sqm",
        occupancy: "2 adults",
        features: ["Twin or King Bed", "Modern Bath", "Work Area", "WiFi"]
      }
    ],
    
    umrahFacilities: {
      title: "Pilgrim Amenities",
      features: [
        "Prayer mats provided",
        "Qibla direction",
        "Zamzam water",
        "Prayer times",
        "Breakfast included",
        "Ziyarat information"
      ]
    },
    
    diningOptions: [
      {
        name: "Rotana Restaurant",
        cuisine: "International & Arabic",
        timing: "6:00 AM - 10:30 PM",
        specialty: "Breakfast buffet"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "350m", time: "6 min walk" }
    ],
    
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "48 hours notice",
      children: "Under 12 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/almanakhahotel.jpg",
      "/assets/images/almanakhahotel1.webp",
      "/assets/images/almanakhahotel2.webp",
      "/assets/images/almanakhahotel3.webp"
    ],
    
    priceRange: "330 - 410 SAR per night",
    featured: false
  },

  {
    id: "waqf-othman-bin-affan-hotel",
    name: "Waqf Othman Bin Affan Hotel",
    slug: "waqf-othman-bin-affan-hotel",
    image: "/assets/images/outhmanhotel.webp",
    rating: 4,
    location: "Madinah",
    distance: "300m from Masjid an-Nabawi",
    amenities: ["Free WiFi", "Modern Rooms", "Budget-Friendly", "Basic Services"],
    
    description: "Waqf Othman Bin Affan Hotel offers affordable accommodation with modern facilities near the Prophet's Mosque, ideal for budget-conscious pilgrims.",
    
    fullAmenities: [
      { icon: "🕌", name: "Near Haram", detail: "300 meters from mosque" },
      { icon: "📶", name: "Free WiFi", detail: "Basic internet" },
      { icon: "🏢", name: "Modern Rooms", detail: "Contemporary design" },
      { icon: "💰", name: "Budget-Friendly", detail: "Affordable rates" },
      { icon: "🛎️", name: "Reception", detail: "24-hour desk" },
      { icon: "🧹", name: "Housekeeping", detail: "Regular cleaning" },
      { icon: "🅿️", name: "Parking", detail: "Available" },
      { icon: "🔒", name: "Security", detail: "Basic security" }
    ],
    
    roomTypes: [
      {
        type: "Standard Room",
        description: "Simple modern room",
        size: "24 sqm",
        occupancy: "2 adults",
        features: ["Twin Beds", "Bathroom", "AC", "TV"]
      }
    ],
    
    umrahFacilities: {
      title: "Basic Services",
      features: [
        "Prayer mats",
        "Qibla marked",
        "Prayer times",
        "Room only option",
        "Luggage storage"
      ]
    },
    
    diningOptions: [
      {
        name: "Nearby Restaurants",
        cuisine: "Various",
        timing: "N/A",
        specialty: "Room only - restaurants nearby"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "300m", time: "5 min walk" }
    ],
    
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "24 hours notice",
      children: "Under 8 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/outhmanhotel.webp",
      "/assets/images/outhmanhotel1.webp",
      "/assets/images/outhmanhotel2.webp",
      "/assets/images/outhmanhotel3.webp"
    ],
    
    priceRange: "240 - 310 SAR per night",
    featured: false
  },

  {
    id: "taiba-front-hotel",
    name: "Taiba Front Hotel",
    slug: "taiba-front-hotel",
    image: "/assets/images/taibahotel.webp",
    rating: 4,
    location: "Madinah",
    distance: "100m from Masjid an-Nabawi",
    amenities: ["Free WiFi", "Haram Proximity", "Restaurant", "Comfortable"],
    
    description: "Taiba Front Hotel provides convenient accommodation just steps from the Prophet's Mosque, offering comfort and accessibility for pilgrims.",
    
    fullAmenities: [
      { icon: "🕌", name: "Haram Proximity", detail: "Only 100 meters away" },
      { icon: "📶", name: "Free WiFi", detail: "Internet access" },
      { icon: "🍽️", name: "Restaurant", detail: "On-site dining" },
      { icon: "🛏️", name: "Comfortable", detail: "Well-maintained rooms" },
      { icon: "🛎️", name: "Reception", detail: "24/7 service" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily cleaning" },
      { icon: "🅿️", name: "Parking", detail: "Available" },
      { icon: "☕", name: "Breakfast", detail: "Included" }
    ],
    
    roomTypes: [
      {
        type: "Standard Room",
        description: "Comfortable room near Haram",
        size: "27 sqm",
        occupancy: "2 adults",
        features: ["Double Bed", "Bathroom", "TV", "WiFi"]
      }
    ],
    
    umrahFacilities: {
      title: "Pilgrim Services",
      features: [
        "Prayer mats in rooms",
        "Qibla direction",
        "Zamzam water",
        "Prayer times",
        "Breakfast included",
        "Very close to Haram"
      ]
    },
    
    diningOptions: [
      {
        name: "Hotel Restaurant",
        cuisine: "Local & International",
        timing: "6:00 AM - 10:00 PM",
        specialty: "Breakfast buffet"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "100m", time: "2 min walk" }
    ],
    
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "48 hours notice",
      children: "Under 10 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/taibahotel.webp",
      "/assets/images/taibahotel1.webp",
      "/assets/images/taibahotel2.webp",
      "/assets/images/taibahotel3.webp"
    ],
    
    priceRange: "320 - 400 SAR per night",
    featured: false
  },

  {
    id: "maden-taiba-hotel",
    name: "Maden Taiba Hotel",
    slug: "maden-taiba-hotel",
    image: "/assets/images/taibamadenhotel.webp",
    rating: 4,
    location: "Madinah",
    distance: "150m from Masjid an-Nabawi",
    amenities: ["Free WiFi", "Restaurant", "Near Haram", "Good Value"],
    
    description: "Maden Taiba Hotel offers good value accommodation with easy access to the Prophet's Mosque, providing comfort and convenience for pilgrims.",
    
    fullAmenities: [
      { icon: "🕌", name: "Near Haram", detail: "150 meters from mosque" },
      { icon: "📶", name: "Free WiFi", detail: "Internet available" },
      { icon: "🍽️", name: "Restaurant", detail: "On-site dining" },
      { icon: "💰", name: "Good Value", detail: "Affordable pricing" },
      { icon: "🛎️", name: "Reception", detail: "24/7 service" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily cleaning" },
      { icon: "🅿️", name: "Parking", detail: "Available" },
      { icon: "☕", name: "Breakfast", detail: "Included" }
    ],
    
    roomTypes: [
      {
        type: "Standard Room",
        description: "Comfortable room with amenities",
        size: "28 sqm",
        occupancy: "2 adults",
        features: ["Twin or Double Bed", "Bathroom", "TV", "AC"]
      }
    ],
    
    umrahFacilities: {
      title: "Pilgrim Amenities",
      features: [
        "Prayer mats provided",
        "Qibla direction",
        "Zamzam water",
        "Prayer times",
        "Breakfast included",
        "Walking distance to Haram"
      ]
    },
    
    diningOptions: [
      {
        name: "Hotel Restaurant",
        cuisine: "Arabic & International",
        timing: "6:00 AM - 10:00 PM",
        specialty: "Breakfast buffet"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "150m", time: "3 min walk" }
    ],
    
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "48 hours notice",
      children: "Under 10 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/taibamadenhotel.webp",
      "/assets/images/taibamadenhotel1.webp",
      "/assets/images/taibamadenhotel2.webp",
      "/assets/images/taibamadenhotel3.webp"
    ],
    
    priceRange: "310 - 390 SAR per night",
    featured: false
  },

  {
    id: "elaf-taiba-hotel",
    name: "Elaf Taiba Hotel",
    slug: "elaf-taiba-hotel",
    image: "/assets/images/elaftaibahotel.webp",
    rating: 4,
    location: "Madinah",
    distance: "100m from Masjid an-Nabawi",
    amenities: ["Free WiFi", "Near Haram", "Restaurant", "Modern Facilities"],
    
    description: "Elaf Taiba Hotel offers modern facilities and excellent location just 100 meters from the Prophet's Mosque, ensuring convenience for all pilgrims.",
    
    fullAmenities: [
      { icon: "🕌", name: "Near Haram", detail: "100 meters from mosque" },
      { icon: "📶", name: "Free WiFi", detail: "High-speed internet" },
      { icon: "🍽️", name: "Restaurant", detail: "On-site dining" },
      { icon: "🏢", name: "Modern Facilities", detail: "Contemporary amenities" },
      { icon: "🛎️", name: "Reception", detail: "24/7 service" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily cleaning" },
      { icon: "🅿️", name: "Parking", detail: "Available" },
      { icon: "☕", name: "Breakfast", detail: "Included" }
    ],
    
    roomTypes: [
      {
        type: "Standard Room",
        description: "Modern room with facilities",
        size: "29 sqm",
        occupancy: "2 adults",
        features: ["Double Bed", "Modern Bath", "TV", "WiFi"]
      }
    ],
    
    umrahFacilities: {
      title: "Pilgrim Services",
      features: [
        "Prayer mats in rooms",
        "Qibla direction",
        "Zamzam water",
        "Prayer times displayed",
        "Breakfast included",
        "Very close to Haram"
      ]
    },
    
    diningOptions: [
      {
        name: "Elaf Restaurant",
        cuisine: "International & Local",
        timing: "6:00 AM - 10:00 PM",
        specialty: "Breakfast buffet"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "100m", time: "2 min walk" }
    ],
    
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "48 hours notice",
      children: "Under 10 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/elaftaibahotel.webp",
      "/assets/images/elaftaibahotel1.webp",
      "/assets/images/elaftaibahotel2.webp",
      "/assets/images/elaftaibahotel3.webp"
    ],
    
    priceRange: "340 - 420 SAR per night",
    featured: false
  },

  {
    id: "view-al-madinah-hotel",
    name: "View Al Madinah Hotel",
    slug: "view-al-madinah-hotel",
    image: "/assets/images/viewalmadinahhotel.jpg",
    rating: 4,
    location: "Madinah",
    distance: "250m from Masjid an-Nabawi",
    amenities: ["Free WiFi", "Modern Rooms", "City View", "Budget-Friendly"],
    
    description: "View Al Madinah Hotel provides modern accommodation with city views at affordable rates, offering good value within walking distance of the Prophet's Mosque.",
    
    fullAmenities: [
      { icon: "🕌", name: "Near Haram", detail: "250 meters from mosque" },
      { icon: "📶", name: "Free WiFi", detail: "Internet access" },
      { icon: "🏢", name: "Modern Rooms", detail: "Contemporary design" },
      { icon: "🌆", name: "City Views", detail: "Views of Madinah" },
      { icon: "💰", name: "Budget-Friendly", detail: "Affordable rates" },
      { icon: "🛎️", name: "Reception", detail: "24-hour service" },
      { icon: "🧹", name: "Housekeeping", detail: "Regular cleaning" },
      { icon: "🅿️", name: "Parking", detail: "Available" }
    ],
    
    roomTypes: [
      {
        type: "Standard Room",
        description: "Modern room with view",
        size: "26 sqm",
        occupancy: "2 adults",
        features: ["Twin Beds", "City View", "Modern Bath", "WiFi"]
      }
    ],
    
    umrahFacilities: {
      title: "Basic Services",
      features: [
        "Prayer mats",
        "Qibla direction",
        "Prayer times",
        "Room only option",
        "Luggage storage"
      ]
    },
    
    diningOptions: [
      {
        name: "Nearby Options",
        cuisine: "Various",
        timing: "N/A",
        specialty: "Room only - restaurants nearby"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "250m", time: "5 min walk" }
    ],
    
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "24 hours notice",
      children: "Under 8 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/viewalmadinahhotel.jpg",
      "/assets/images/viewalmadinahhotel1.jpg",
      "/assets/images/viewalmadinahhotel2.jpg",
      "/assets/images/viewalmadinahhotel3.jpg"
    ],
    
    priceRange: "270 - 350 SAR per night",
    featured: false
  },

  {
    id: "makarem-haram-view-suites",
    name: "Makarem Haram View Suites",
    slug: "makarem-haram-view-suites",
    image: "/assets/images/makaremharamsuites.png",
    rating: 5,
    location: "Madinah",
    distance: "80m from Masjid an-Nabawi",
    amenities: ["Haram View", "Luxury Suites", "Free WiFi", "Premium Service"],
    
    description: "Makarem Haram View Suites offers luxury accommodations with spectacular views of the Prophet's Mosque, providing premium comfort just steps away.",
    
    fullAmenities: [
      { icon: "🕌", name: "Haram View", detail: "Direct mosque views" },
      { icon: "💎", name: "Luxury Suites", detail: "Premium accommodations" },
      { icon: "📶", name: "Free WiFi", detail: "High-speed internet" },
      { icon: "🛎️", name: "Premium Service", detail: "Attentive staff" },
      { icon: "🍽️", name: "Dining", detail: "Restaurant on-site" },
      { icon: "🧳", name: "Concierge", detail: "Full services" },
      { icon: "🅿️", name: "Parking", detail: "Valet available" },
      { icon: "🔒", name: "Security", detail: "24/7 security" }
    ],
    
    roomTypes: [
      {
        type: "Haram View Suite",
        description: "Luxury suite with mosque views",
        size: "45 sqm",
        occupancy: "2-3 adults",
        features: ["King Bed", "Living Area", "Haram View", "Premium Amenities"]
      },
      {
        type: "Family Suite",
        description: "Spacious suite for families",
        size: "65 sqm",
        occupancy: "4 adults",
        features: ["Multiple Beds", "Full Kitchen", "Panoramic Views"]
      }
    ],
    
    umrahFacilities: {
      title: "Premium Pilgrim Services",
      features: [
        "Prayer mats and Quran",
        "Qibla direction",
        "Premium Zamzam water",
        "VIP mosque access",
        "Ziyarat arrangements",
        "Multilingual staff",
        "Breakfast included"
      ]
    },
    
    diningOptions: [
      {
        name: "Suite Restaurant",
        cuisine: "International & Arabic",
        timing: "6:00 AM - 11:00 PM",
        specialty: "Breakfast buffet"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "80m", time: "2 min walk" }
    ],
    
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free up to 5 days before",
      children: "Under 12 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/makaremharamsuites.png",
      "/assets/images/makaremharamsuites1.webp",
      "/assets/images/makaremharamsuites2.webp",
      "/assets/images/makaremharamsuites3.webp"
    ],
    
    priceRange: "480 - 570 SAR per night",
    featured: true
  },

  {
    id: "elaf-al-taqwa-hotel",
    name: "Elaf Al Taqwa Hotel",
    slug: "elaf-al-taqwa-hotel",
    image: "/assets/images/elafaltaqwa.webp",
    rating: 4,
    location: "Madinah",
    distance: "50m from Masjid an-Nabawi",
    amenities: ["Free WiFi", "Front Row Access", "Restaurant", "Near Haram"],
    
    description: "Elaf Al Taqwa Hotel offers excellent proximity at just 50 meters from the Prophet's Mosque, providing convenient front row access for pilgrims.",
    
    fullAmenities: [
      { icon: "🕌", name: "Front Row", detail: "Only 50 meters from mosque" },
      { icon: "📶", name: "Free WiFi", detail: "Internet access" },
      { icon: "🍽️", name: "Restaurant", detail: "On-site dining" },
      { icon: "🛏️", name: "Comfortable", detail: "Well-maintained rooms" },
      { icon: "🛎️", name: "Reception", detail: "24/7 service" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily cleaning" },
      { icon: "🅿️", name: "Parking", detail: "Available" },
      { icon: "☕", name: "Breakfast", detail: "Included" }
    ],
    
    roomTypes: [
      {
        type: "Standard Room",
        description: "Comfortable room very close to Haram",
        size: "28 sqm",
        occupancy: "2 adults",
        features: ["Double Bed", "Bathroom", "TV", "WiFi"]
      }
    ],
    
    umrahFacilities: {
      title: "Pilgrim Services",
      features: [
        "Prayer mats in rooms",
        "Qibla direction",
        "Zamzam water",
        "Prayer times",
        "Front row access",
        "Breakfast included"
      ]
    },
    
    diningOptions: [
      {
        name: "Hotel Restaurant",
        cuisine: "Local & International",
        timing: "6:00 AM - 10:00 PM",
        specialty: "Breakfast buffet"
      }
    ],
    
    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "50m", time: "1 min walk" }
    ],
    
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "48 hours notice",
      children: "Under 10 free",
      pets: "Not allowed"
    },
    
    gallery: [
      "/assets/images/elafaltaqwa.webp",
      "/assets/images/elafaltaqwa1.webp",
      "/assets/images/elafaltaqwa2.webp",
      "/assets/images/elafaltaqwa3.webp"
    ],
    
    priceRange: "360 - 440 SAR per night",
    featured: false
  },
  // ==================== ECONOMY HOTELS (showCard: true) ====================
// Add these entries to the hotelsData array in hotelData.js

// ---- MAKKAH ECONOMY HOTELS ----

  {
    id: "miaad-al-majd",
    name: "Miaad Al Majd",
    slug: "miaad-al-majd",
    image: "/assets/images/placeholder-hotel.jpg",
    rating: 2,
    location: "Makkah",
    distance: "Al Hijrah Road, Makkah",
    amenities: ["Basic Rooms", "AC", "Daily Housekeeping", "Halal Dining Nearby"],

    description: "Miaad Al Majd is a budget-friendly accommodation situated on Al Hijrah Road in Makkah. Ideal for pilgrims seeking simple, clean lodging at an affordable price during their Umrah journey. The hotel provides essential amenities to ensure a comfortable stay while keeping costs low.",

    fullAmenities: [
      { icon: "🕌", name: "Haram Access", detail: "Located on Al Hijrah Road with road access to Masjid al-Haram" },
      { icon: "❄️", name: "Air Conditioning", detail: "All rooms fully air-conditioned" },
      { icon: "🛎️", name: "Front Desk", detail: "Reception available for guest assistance" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily room cleaning service" },
      { icon: "🔒", name: "Security", detail: "Basic security measures in place" },
      { icon: "🍽️", name: "Dining Nearby", detail: "Halal restaurants within walking distance" },
      { icon: "🅿️", name: "Parking", detail: "Street parking available nearby" },
      { icon: "💰", name: "Budget-Friendly", detail: "Affordable rates for economy pilgrims" }
    ],

    roomTypes: [
      {
        type: "Standard Room",
        description: "Clean and simple room with essential amenities for a comfortable stay.",
        size: "20 sqm",
        occupancy: "2–3 adults",
        features: ["Twin Beds", "Private Bathroom", "AC", "Basic Toiletries"]
      },
      {
        type: "Quad Room",
        description: "Spacious room suitable for small groups or families.",
        size: "28 sqm",
        occupancy: "4–5 adults",
        features: ["Multiple Beds", "Shared Bathroom Option", "AC", "Storage Space"]
      }
    ],

    umrahFacilities: {
      title: "Pilgrim Services",
      features: [
        "Prayer mats available on request",
        "Qibla direction marked in rooms",
        "Prayer times displayed at reception",
        "Halal food options nearby",
        "Luggage storage available",
        "Transport guidance to Masjid al-Haram"
      ]
    },

    diningOptions: [
      {
        name: "Nearby Local Restaurants",
        cuisine: "Arabic & South Asian",
        timing: "Various — open throughout the day",
        specialty: "Affordable halal meals within walking distance"
      }
    ],

    nearbyAttractions: [
      { name: "Masjid al-Haram", distance: "Al Hijrah Road access", time: "Short drive or taxi" },
      { name: "Makkah Clock Tower", distance: "Approx. 3–4 km", time: "10 min drive" }
    ],

    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Contact hotel directly for cancellation policy",
      children: "Contact us for details",
      pets: "Not allowed"
    },

    gallery: [
      "/assets/images/milaadalmajd.jpg",
      "/assets/images/milaadalmajd1.webp",
    ],

    priceRange: "Price On Request",
    featured: false
  },

  {
    id: "saif-al-majd",
    name: "Saif Al Majd",
    slug: "saif-al-majd",
    image: "/assets/images/placeholder-hotel.jpg",
    rating: 2,
    location: "Makkah",
    distance: "Al Hijrah Road, Makkah",
    amenities: ["Basic Rooms", "AC", "Daily Housekeeping", "Halal Dining Nearby"],

    description: "Saif Al Majd is a no-frills economy hotel on Al Hijrah Road, Makkah. It caters to pilgrims looking for a clean, straightforward place to rest between their acts of worship. The hotel's location on Al Hijrah Road provides good connectivity to the Holy Mosque area.",

    fullAmenities: [
      { icon: "🕌", name: "Haram Access", detail: "Situated on Al Hijrah Road for easy Haram access" },
      { icon: "❄️", name: "Air Conditioning", detail: "All rooms fully air-conditioned" },
      { icon: "🛎️", name: "Reception", detail: "Front desk available for assistance" },
      { icon: "🧹", name: "Housekeeping", detail: "Regular cleaning service" },
      { icon: "🔒", name: "Security", detail: "Basic in-house security" },
      { icon: "🍽️", name: "Dining Nearby", detail: "Several halal eateries on the same road" },
      { icon: "🅿️", name: "Parking", detail: "Roadside parking available" },
      { icon: "💰", name: "Economy Rates", detail: "Highly affordable for budget pilgrims" }
    ],

    roomTypes: [
      {
        type: "Standard Room",
        description: "Simple, well-maintained room for comfortable rest.",
        size: "20 sqm",
        occupancy: "2–3 adults",
        features: ["Twin Beds", "Private Bathroom", "AC", "Wardrobe"]
      },
      {
        type: "Triple Room",
        description: "Suitable for groups of three pilgrims travelling together.",
        size: "25 sqm",
        occupancy: "3 adults",
        features: ["Three Single Beds", "Bathroom", "AC", "Basic Storage"]
      }
    ],

    umrahFacilities: {
      title: "Pilgrim Essentials",
      features: [
        "Prayer mats available on request",
        "Qibla direction indicated",
        "Prayer times posted at front desk",
        "Halal meals easily accessible nearby",
        "Luggage storage on request",
        "Taxi & transport assistance"
      ]
    },

    diningOptions: [
      {
        name: "Street-Level Restaurants",
        cuisine: "Arabic, Pakistani & Indian",
        timing: "Open throughout the day",
        specialty: "Affordable halal meals for pilgrims"
      }
    ],

    nearbyAttractions: [
      { name: "Masjid al-Haram", distance: "Al Hijrah Road access", time: "Short drive" },
      { name: "Jabal al-Nour", distance: "Approx. 4 km", time: "10–15 min drive" }
    ],

    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Contact hotel for cancellation terms",
      children: "Contact us for details",
      pets: "Not allowed"
    },

    gallery: [
      "/assets/images/saifalmajd.webp",
      "/assets/images/saifalmajd1.webp",
    ],

    priceRange: "Price On Request",
    featured: false
  },

  {
    id: "diwan-al-bait",
    name: "Diwan Al Bait",
    slug: "diwan-al-bait",
    image: "/assets/images/placeholder-hotel.jpg",
    rating: 3,
    location: "Makkah",
    distance: "Ibrahim Khalil Road, Makkah",
    amenities: ["Free WiFi", "AC", "Restaurant", "Daily Housekeeping"],

    description: "Diwan Al Bait is a comfortable 3-star economy hotel on the well-known Ibrahim Khalil Road in Makkah. Offering a step above basic accommodation, the hotel provides clean rooms, reliable service, and a convenient location for pilgrims wishing to perform Umrah without straining their budget.",

    fullAmenities: [
      { icon: "🕌", name: "Ibrahim Khalil Road", detail: "Directly on one of Makkah's main arteries to Haram" },
      { icon: "📶", name: "Free WiFi", detail: "Complimentary wireless internet access" },
      { icon: "❄️", name: "Air Conditioning", detail: "Climate-controlled rooms throughout" },
      { icon: "🍽️", name: "Restaurant", detail: "On-site halal dining options" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily room service" },
      { icon: "🛎️", name: "Reception", detail: "24-hour front desk" },
      { icon: "🅿️", name: "Parking", detail: "Parking facilities nearby" },
      { icon: "🔒", name: "Security", detail: "24-hour security staff" }
    ],

    roomTypes: [
      {
        type: "Standard Double Room",
        description: "Neat and comfortable room with modern basic amenities.",
        size: "24 sqm",
        occupancy: "2 adults",
        features: ["Double Bed", "Private Bathroom", "AC", "Free WiFi", "TV"]
      },
      {
        type: "Triple Room",
        description: "Practical room for small groups or families.",
        size: "30 sqm",
        occupancy: "3 adults",
        features: ["Three Single Beds", "Bathroom", "AC", "WiFi", "Wardrobe"]
      },
      {
        type: "Quad Room",
        description: "Spacious enough for a family or group of four.",
        size: "36 sqm",
        occupancy: "4 adults",
        features: ["Multiple Beds", "Bathroom", "AC", "WiFi", "Storage"]
      }
    ],

    umrahFacilities: {
      title: "Pilgrim Services",
      features: [
        "Prayer mats in all rooms",
        "Qibla direction marked",
        "Prayer times displayed in lobby",
        "Halal dining on-site",
        "Luggage storage available",
        "Taxi & transport coordination",
        "Zamzam water available nearby"
      ]
    },

    diningOptions: [
      {
        name: "Hotel Restaurant",
        cuisine: "Arabic & International",
        timing: "6:00 AM – 10:00 PM",
        specialty: "Hearty halal meals and breakfast"
      }
    ],

    nearbyAttractions: [
      { name: "Masjid al-Haram", distance: "Ibrahim Khalil Road", time: "Short drive or walk" },
      { name: "Abraj Al Bait (Clock Tower)", distance: "Approx. 2 km", time: "5–8 min drive" }
    ],

    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "48 hours notice required",
      children: "Children under 10 stay free",
      pets: "Not allowed"
    },

    gallery: [
      "/assets/images/diwanalbait.webp",
      "/assets/images/diwanalbait1.webp",
    ],

    priceRange: "Price On Request",
    featured: false
  },

  {
    id: "tara-al-yasmin",
    name: "Tara Al Yasmin",
    slug: "tara-al-yasmin",
    image: "/assets/images/placeholder-hotel.jpg",
    rating: 3,
    location: "Makkah",
    distance: "Ibrahim Khalil Road, Makkah",
    amenities: ["Free WiFi", "AC", "Restaurant", "Room Service"],

    description: "Tara Al Yasmin is a pleasant 3-star hotel on Ibrahim Khalil Road, one of Makkah's most important thoroughfares. Known for its welcoming atmosphere and well-kept rooms, it offers pilgrims a reliable mid-economy choice with easy access to the Holy Mosque and surrounding sites.",

    fullAmenities: [
      { icon: "🕌", name: "Strategic Location", detail: "On Ibrahim Khalil Road, close to Masjid al-Haram" },
      { icon: "📶", name: "Free WiFi", detail: "High-speed internet in all areas" },
      { icon: "❄️", name: "Air Conditioning", detail: "Fully air-conditioned rooms" },
      { icon: "🍽️", name: "Restaurant", detail: "Halal meals served on-site" },
      { icon: "🛎️", name: "Room Service", detail: "In-room dining available" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily cleaning service" },
      { icon: "🅿️", name: "Parking", detail: "Parking area available" },
      { icon: "🔒", name: "Security", detail: "Round-the-clock security" }
    ],

    roomTypes: [
      {
        type: "Standard Room",
        description: "A well-maintained room suited for couples or solo pilgrims.",
        size: "26 sqm",
        occupancy: "2 adults",
        features: ["Double or Twin Beds", "Bathroom", "AC", "WiFi", "TV"]
      },
      {
        type: "Triple Room",
        description: "A comfortable option for groups of three.",
        size: "32 sqm",
        occupancy: "3 adults",
        features: ["Three Beds", "Bathroom", "AC", "WiFi", "Wardrobe"]
      },
      {
        type: "Family Room",
        description: "Ideal for families travelling for Umrah together.",
        size: "40 sqm",
        occupancy: "4–5 adults",
        features: ["Multiple Beds", "Bathroom", "AC", "WiFi", "Extra Storage"]
      }
    ],

    umrahFacilities: {
      title: "Pilgrim Amenities",
      features: [
        "Prayer mats provided in all rooms",
        "Qibla direction clearly marked",
        "Prayer times displayed throughout hotel",
        "Halal restaurant on-site",
        "Zamzam water accessible nearby",
        "Luggage storage available",
        "Transport assistance for Haram visits"
      ]
    },

    diningOptions: [
      {
        name: "Tara Restaurant",
        cuisine: "Arabic & South Asian",
        timing: "6:00 AM – 10:30 PM",
        specialty: "Breakfast buffet and à la carte meals"
      }
    ],

    nearbyAttractions: [
      { name: "Masjid al-Haram", distance: "Ibrahim Khalil Road", time: "Short drive" },
      { name: "Jabal Thawr", distance: "Approx. 5 km", time: "15 min drive" }
    ],

    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "48 hours notice required",
      children: "Children under 10 stay free",
      pets: "Not allowed"
    },

    gallery: [
      "/assets/images/taraalyasmin.webp",
      "/assets/images/taraalyasmin1.webp",
    ],

    priceRange: "Price On Request",
    featured: false
  },

  {
    id: "sanood-ajyad",
    name: "Sanood Ajyad",
    slug: "sanood-ajyad",
    image: "/assets/images/placeholder-hotel.jpg",
    rating: 3,
    location: "Makkah",
    distance: "Ajyad Street, Makkah",
    amenities: ["Free WiFi", "AC", "Restaurant", "Near Haram"],

    description: "Sanood Ajyad is a well-regarded 3-star hotel situated on Ajyad Street, one of Makkah's most central areas. Its proximity to Masjid al-Haram makes it an excellent choice for pilgrims wanting quick and easy access to the Grand Mosque while keeping accommodation costs manageable.",

    fullAmenities: [
      { icon: "🕌", name: "Ajyad Street Location", detail: "Among the closest economy hotels to Masjid al-Haram" },
      { icon: "📶", name: "Free WiFi", detail: "Complimentary internet throughout" },
      { icon: "❄️", name: "Air Conditioning", detail: "All rooms climate controlled" },
      { icon: "🍽️", name: "Restaurant", detail: "On-site halal dining" },
      { icon: "🛎️", name: "24/7 Reception", detail: "Round-the-clock front desk" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily cleaning service" },
      { icon: "🅿️", name: "Parking", detail: "Nearby parking available" },
      { icon: "🔒", name: "Security", detail: "24-hour in-house security" }
    ],

    roomTypes: [
      {
        type: "Standard Room",
        description: "Comfortable and clean room for pilgrims seeking convenience.",
        size: "25 sqm",
        occupancy: "2 adults",
        features: ["Double Bed", "Bathroom", "AC", "WiFi", "TV"]
      },
      {
        type: "Triple Room",
        description: "A practical room for three travelling together.",
        size: "32 sqm",
        occupancy: "3 adults",
        features: ["Three Single Beds", "Bathroom", "AC", "WiFi"]
      },
      {
        type: "Quad Room",
        description: "Suitable for a group of four pilgrims.",
        size: "38 sqm",
        occupancy: "4 adults",
        features: ["Four Beds", "Bathroom", "AC", "WiFi", "Storage"]
      }
    ],

    umrahFacilities: {
      title: "Pilgrim Services",
      features: [
        "Prayer mats in all rooms",
        "Qibla direction marked",
        "Prayer times posted at reception",
        "On-site halal restaurant",
        "Zamzam water accessible nearby",
        "Luggage storage available",
        "Walking distance to Masjid al-Haram"
      ]
    },

    diningOptions: [
      {
        name: "Sanood Restaurant",
        cuisine: "Arabic & Pakistani",
        timing: "6:00 AM – 11:00 PM",
        specialty: "Traditional meals and breakfast options"
      }
    ],

    nearbyAttractions: [
      { name: "Masjid al-Haram", distance: "Ajyad Street — very close", time: "5–10 min walk" },
      { name: "Abraj Al Bait Mall", distance: "Approx. 500m", time: "5 min walk" }
    ],

    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "48 hours notice required",
      children: "Children under 10 stay free",
      pets: "Not allowed"
    },

    gallery: [
      "/assets/images/sanoodajyad.webp",
      "/assets/images/sanoodajyad1.webp",
    ],

    priceRange: "Price On Request",
    featured: false
  },

// ---- MADINAH ECONOMY HOTELS ----

  {
    id: "bir-al-eiman-warda-safa",
    name: "Bir Al Eiman / Warda Safa",
    slug: "bir-al-eiman-warda-safa",
    image: "/assets/images/placeholder-hotel.jpg",
    rating: 2,
    location: "Madinah",
    distance: "South Markazia, Madinah",
    amenities: ["Basic Rooms", "AC", "Daily Housekeeping", "Halal Dining Nearby"],

    description: "Bir Al Eiman / Warda Safa is a budget accommodation option located in South Markazia, Madinah. It offers clean and simple rooms for pilgrims who prioritise closeness to Masjid an-Nabawi without high costs. The hotel is a solid choice for those on a tight budget performing Ziyarat of the Prophet's Mosque.",

    fullAmenities: [
      { icon: "🕌", name: "South Markazia", detail: "Located in central Madinah near Masjid an-Nabawi" },
      { icon: "❄️", name: "Air Conditioning", detail: "All rooms air-conditioned" },
      { icon: "🛎️", name: "Reception", detail: "Front desk available for assistance" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily room cleaning" },
      { icon: "🔒", name: "Security", detail: "Basic in-house security" },
      { icon: "🍽️", name: "Dining Nearby", detail: "Halal restaurants within walking distance" },
      { icon: "🅿️", name: "Parking", detail: "Street parking nearby" },
      { icon: "💰", name: "Budget Rates", detail: "Very affordable for economy pilgrims" }
    ],

    roomTypes: [
      {
        type: "Standard Room",
        description: "Clean and simple room with essential comfort.",
        size: "20 sqm",
        occupancy: "2–3 adults",
        features: ["Twin Beds", "Bathroom", "AC", "Basic Amenities"]
      },
      {
        type: "Economy Quad Room",
        description: "A larger room for groups or families on a budget.",
        size: "28 sqm",
        occupancy: "4–5 adults",
        features: ["Multiple Beds", "Bathroom", "AC", "Storage Space"]
      }
    ],

    umrahFacilities: {
      title: "Pilgrim Services",
      features: [
        "Prayer mats available on request",
        "Qibla direction marked in rooms",
        "Prayer times displayed at reception",
        "Halal eateries within walking distance",
        "Luggage storage available",
        "Close to Masjid an-Nabawi"
      ]
    },

    diningOptions: [
      {
        name: "Nearby Local Eateries",
        cuisine: "Arabic & South Asian",
        timing: "Available throughout the day",
        specialty: "Affordable halal meals around the area"
      }
    ],

    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "South Markazia", time: "Short walk" },
      { name: "Jannat al-Baqi", distance: "Approx. 500m", time: "8 min walk" }
    ],

    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Contact hotel for cancellation policy",
      children: "Contact us for details",
      pets: "Not allowed"
    },

    gallery: [
      "/assets/images/biraleiman.jpg",
      "/assets/images/biraleiman1.webp",
    ],

    priceRange: "Price On Request",
    featured: false
  },

  {
    id: "rama-al-madinah",
    name: "Rama Al Madinah",
    slug: "rama-al-madinah",
    image: "/assets/images/placeholder-hotel.jpg",
    rating: 2,
    location: "Madinah",
    distance: "South Markazia, Madinah",
    amenities: ["Basic Rooms", "AC", "Daily Housekeeping", "Halal Dining Nearby"],

    description: "Rama Al Madinah is an economy hotel in the South Markazia district, offering pilgrims a no-fuss, affordable base during their stay in Madinah. With its central location and basic but clean facilities, it suits those whose focus is worship and spiritual reflection at Masjid an-Nabawi.",

    fullAmenities: [
      { icon: "🕌", name: "Markazia Location", detail: "South Markazia — central Madinah area" },
      { icon: "❄️", name: "Air Conditioning", detail: "Climate-controlled rooms" },
      { icon: "🛎️", name: "Reception", detail: "Front desk available" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily cleaning service" },
      { icon: "🔒", name: "Security", detail: "Basic security present" },
      { icon: "🍽️", name: "Dining Nearby", detail: "Halal restaurants nearby" },
      { icon: "🅿️", name: "Parking", detail: "Nearby street parking" },
      { icon: "💰", name: "Affordable", detail: "Budget-conscious pricing" }
    ],

    roomTypes: [
      {
        type: "Standard Room",
        description: "Basic, clean room for comfortable overnight stays.",
        size: "20 sqm",
        occupancy: "2–3 adults",
        features: ["Twin Beds", "Private Bathroom", "AC", "Wardrobe"]
      },
      {
        type: "Economy Triple Room",
        description: "Suitable for three pilgrims on a shared budget.",
        size: "26 sqm",
        occupancy: "3 adults",
        features: ["Three Beds", "Bathroom", "AC", "Storage"]
      }
    ],

    umrahFacilities: {
      title: "Basic Pilgrim Essentials",
      features: [
        "Prayer mats on request",
        "Qibla direction indicated",
        "Prayer times posted at desk",
        "Halal food options within walking distance",
        "Luggage storage",
        "Transport information available"
      ]
    },

    diningOptions: [
      {
        name: "Local Restaurants Nearby",
        cuisine: "Arabic & Pakistani",
        timing: "Throughout the day",
        specialty: "Budget-friendly halal meals"
      }
    ],

    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "South Markazia", time: "Short walk or taxi" },
      { name: "Quba Mosque", distance: "Approx. 4 km", time: "10 min drive" }
    ],

    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Contact hotel for cancellation terms",
      children: "Contact us for details",
      pets: "Not allowed"
    },

    gallery: [
      "/assets/images/ramaalmadinah.webp",
      "/assets/images/ramaalmadinah1.webp",
    ],

    priceRange: "Price On Request",
    featured: false
  },

  {
    id: "triple-one-hotel",
    name: "Triple One Hotel",
    slug: "triple-one-hotel",
    image: "/assets/images/placeholder-hotel.jpg",
    rating: 3,
    location: "Madinah",
    distance: "Central Markazia, Madinah",
    amenities: ["Free WiFi", "AC", "Restaurant", "Daily Housekeeping"],

    description: "Triple One Hotel is a reliable 3-star property in the heart of Central Markazia, Madinah. Offering comfortable rooms and a warm atmosphere, it is an excellent mid-economy choice for pilgrims seeking both value and convenience near Masjid an-Nabawi. The hotel provides a balanced experience of comfort and affordability.",

    fullAmenities: [
      { icon: "🕌", name: "Central Markazia", detail: "Ideally placed in the heart of Madinah" },
      { icon: "📶", name: "Free WiFi", detail: "Complimentary internet throughout" },
      { icon: "❄️", name: "Air Conditioning", detail: "All rooms air-conditioned" },
      { icon: "🍽️", name: "Restaurant", detail: "On-site halal dining" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily room cleaning" },
      { icon: "🛎️", name: "Reception", detail: "24-hour front desk" },
      { icon: "🅿️", name: "Parking", detail: "Parking facilities available" },
      { icon: "🔒", name: "Security", detail: "24-hour security personnel" }
    ],

    roomTypes: [
      {
        type: "Standard Room",
        description: "Comfortable room in a central location, great value for Madinah.",
        size: "26 sqm",
        occupancy: "2 adults",
        features: ["Double or Twin Beds", "Bathroom", "AC", "WiFi", "TV"]
      },
      {
        type: "Triple Room",
        description: "Practical and spacious for three pilgrims.",
        size: "33 sqm",
        occupancy: "3 adults",
        features: ["Three Beds", "Bathroom", "AC", "WiFi", "Storage"]
      },
      {
        type: "Quad Room",
        description: "Suitable for a family or group of four pilgrims.",
        size: "40 sqm",
        occupancy: "4 adults",
        features: ["Four Beds", "Bathroom", "AC", "WiFi", "Wardrobe"]
      }
    ],

    umrahFacilities: {
      title: "Pilgrim Services",
      features: [
        "Prayer mats in all rooms",
        "Qibla direction marked",
        "Prayer times posted in lobby",
        "On-site halal restaurant",
        "Luggage storage available",
        "Ziyarat tour information at reception",
        "Transport assistance for Nabawi visits"
      ]
    },

    diningOptions: [
      {
        name: "Triple One Restaurant",
        cuisine: "Arabic & International",
        timing: "6:00 AM – 10:30 PM",
        specialty: "Breakfast and traditional halal meals"
      }
    ],

    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "Central Markazia", time: "Short walk" },
      { name: "Jannat al-Baqi", distance: "Approx. 600m", time: "8 min walk" },
      { name: "Quba Mosque", distance: "Approx. 4 km", time: "10 min drive" }
    ],

    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "48 hours notice required",
      children: "Children under 10 stay free",
      pets: "Not allowed"
    },

    gallery: [
      "/assets/images/tripleonehotel.webp",
      "/assets/images/tripleonehotel1.webp",
    ],

    priceRange: "Price On Request",
    featured: false
  },

  {
    id: "artal-international",
    name: "Artal International",
    slug: "artal-international",
    image: "/assets/images/placeholder-hotel.jpg",
    rating: 3,
    location: "Madinah",
    distance: "Central Markazia, Madinah",
    amenities: ["Free WiFi", "AC", "Restaurant", "Room Service"],

    description: "Artal International Hotel is a well-maintained 3-star property in Central Markazia, Madinah. Offering professional service and comfortable rooms, the hotel is popular among pilgrims for its reliability and good central location, making visits to Masjid an-Nabawi and other holy sites convenient and easy.",

    fullAmenities: [
      { icon: "🕌", name: "Central Location", detail: "In the heart of Madinah's Central Markazia" },
      { icon: "📶", name: "Free WiFi", detail: "High-speed internet access" },
      { icon: "❄️", name: "Air Conditioning", detail: "Climate-controlled throughout" },
      { icon: "🍽️", name: "Restaurant", detail: "Halal meals served on-site" },
      { icon: "🛎️", name: "Room Service", detail: "In-room dining available" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily cleaning" },
      { icon: "🅿️", name: "Parking", detail: "On-site parking available" },
      { icon: "🔒", name: "Security", detail: "24/7 security team" }
    ],

    roomTypes: [
      {
        type: "Standard Room",
        description: "Clean, modern room suited for pilgrims.",
        size: "28 sqm",
        occupancy: "2 adults",
        features: ["Double or Twin Beds", "Private Bathroom", "AC", "WiFi", "TV"]
      },
      {
        type: "Triple Room",
        description: "Comfortable option for three travellers.",
        size: "35 sqm",
        occupancy: "3 adults",
        features: ["Three Single Beds", "Bathroom", "AC", "WiFi", "Wardrobe"]
      },
      {
        type: "Family Room",
        description: "Spacious room accommodating a family or group.",
        size: "42 sqm",
        occupancy: "4–5 adults",
        features: ["Multiple Beds", "Bathroom", "AC", "WiFi", "Extra Storage"]
      }
    ],

    umrahFacilities: {
      title: "Pilgrim Amenities",
      features: [
        "Prayer mats in all rooms",
        "Qibla direction clearly marked",
        "Prayer times displayed in lobby",
        "On-site halal restaurant",
        "Zamzam water available nearby",
        "Luggage storage available",
        "Ziyarat information at reception"
      ]
    },

    diningOptions: [
      {
        name: "Artal Restaurant",
        cuisine: "Arabic & International",
        timing: "6:00 AM – 11:00 PM",
        specialty: "Breakfast buffet and traditional Madinah cuisine"
      }
    ],

    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "Central Markazia", time: "Short walk" },
      { name: "Jannat al-Baqi", distance: "Approx. 700m", time: "10 min walk" },
      { name: "Mount Uhud", distance: "Approx. 5 km", time: "12 min drive" }
    ],

    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "48 hours notice required",
      children: "Children under 10 stay free",
      pets: "Not allowed"
    },

    gallery: [
      "/assets/images/artalhotel.webp",
      "/assets/images/artalhotel1.webp",
    ],

    priceRange: "Price On Request",
    featured: false
  },

  {
    id: "zowar-international-hotel",
    name: "Zowar International Hotel",
    slug: "zowar-international-hotel",
    image: "/assets/images/placeholder-hotel.jpg",
    rating: 3,
    location: "Madinah",
    distance: "Central Madinah (Shuttle Available)",
    amenities: ["Free WiFi", "AC", "Restaurant", "Shuttle to Haram"],

    description: "Zowar International Hotel is a popular 3-star hotel in Central Madinah, widely chosen by pilgrims for its shuttle service to Masjid an-Nabawi. The hotel offers comfortable rooms and reliable amenities, making it a trusted choice for Umrah and Ziyarat groups who want the convenience of organised transport to the Prophet's Mosque.",

    fullAmenities: [
      { icon: "🚐", name: "Shuttle Service", detail: "Regular shuttle to Masjid an-Nabawi" },
      { icon: "📶", name: "Free WiFi", detail: "Complimentary high-speed internet" },
      { icon: "❄️", name: "Air Conditioning", detail: "All rooms fully air-conditioned" },
      { icon: "🍽️", name: "Restaurant", detail: "Halal dining on-site" },
      { icon: "🛎️", name: "Reception", detail: "24/7 front desk service" },
      { icon: "🧹", name: "Housekeeping", detail: "Daily room cleaning" },
      { icon: "🅿️", name: "Parking", detail: "Available for guests" },
      { icon: "🔒", name: "Security", detail: "24-hour security coverage" }
    ],

    roomTypes: [
      {
        type: "Standard Room",
        description: "Well-kept room with all essential amenities.",
        size: "27 sqm",
        occupancy: "2 adults",
        features: ["Double or Twin Beds", "Bathroom", "AC", "WiFi", "TV"]
      },
      {
        type: "Triple Room",
        description: "Comfortable room for groups of three.",
        size: "34 sqm",
        occupancy: "3 adults",
        features: ["Three Beds", "Bathroom", "AC", "WiFi", "Storage"]
      },
      {
        type: "Quad Room",
        description: "Spacious room for families or groups of four.",
        size: "40 sqm",
        occupancy: "4 adults",
        features: ["Four Beds", "Bathroom", "AC", "WiFi", "Wardrobe"]
      }
    ],

    umrahFacilities: {
      title: "Pilgrim Services",
      features: [
        "Shuttle service to Masjid an-Nabawi",
        "Prayer mats in all rooms",
        "Qibla direction marked",
        "Prayer times posted in lobby",
        "Halal restaurant on-site",
        "Zamzam water accessible nearby",
        "Luggage storage available",
        "Ziyarat information and tour coordination"
      ]
    },

    diningOptions: [
      {
        name: "Zowar Restaurant",
        cuisine: "Arabic & International",
        timing: "6:00 AM – 11:00 PM",
        specialty: "Breakfast buffet and halal à la carte meals"
      }
    ],

    nearbyAttractions: [
      { name: "Masjid an-Nabawi", distance: "Central Madinah", time: "Shuttle available" },
      { name: "Quba Mosque", distance: "Approx. 4 km", time: "10 min drive" },
      { name: "Mount Uhud", distance: "Approx. 5 km", time: "12 min drive" }
    ],

    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "48 hours notice required",
      children: "Children under 10 stay free",
      pets: "Not allowed"
    },

    gallery: [
      "/assets/images/zowarhotel.webp",
      "/assets/images/zowarhotel1.webp",
    ],

    priceRange: "Price On Request",
    featured: false
  },
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