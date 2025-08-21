const properties = [
  {
    id: 1,
    price: 650000,
    image: "/assets/imgs/heroProperty.png",
    description: "Modern apartment in the heart of New York City",
    type: "Apartment",
    location: "New York, USA",
    rooms: 2,
    baths: 1,
    area: "1,000 Square Feet",
    features: [
      "Expansive oceanfront terrace for outdoor entertaining",
      "Gourmet kitchen with top-of-the-line appliances",
      "Private beach access for morning strolls and sunset views",
      "Master suite with a spa-inspired bathroom and ocean-facing balcony",
      "Private garage and ample storage space",
    ],
    fees: [
      {
        label: "Property Transfer Tax",
        value: 25000,
        note: "Based on the sale price and local regulations",
      },
      {
        label: "Legal Fees",
        value: 3000,
        note: "Approximate cost for legal services, including title transfer",
      },
      {
        label: "Home Inspection",
        value: 500,
        note: "Recommended for due diligence",
      },
      {
        label: "Property Insurance",
        value: 1200,
        note: "Annual cost for comprehensive property insurance",
      },
      {
        label: "Mortgage Fees",
        value: "Varies",
        note: "Consult with lender for specific details",
      },
    ],
    monthly: [
      {
        label: "Property Taxes",
        value: 1250,
        note: "Approximate monthly property tax based on local rates",
      },
      {
        label: "Homeowners Association Fee",
        value: 300,
        note: "Monthly fee for common area maintenance",
      },
      {
        label: "Monthly Insurance",
        value: 150,
        note: "Covers property damage and liability",
      },
    ],
    initialCosts: [
      {
        label: "Listing Price",
        value: 650000,
        note: "",
      },
      {
        label: "Additional Fees",
        value: 29700,
        note: "Property transfer tax, legal fees, inspection, insurance",
      },
      {
        label: "Down Payment",
        value: "$250,000",
        note: "20%",
      },
      {
        label: "Mortgage Amount",
        value: 400000,
        note: "If applicable",
      },
    ],
    monthlyExpenses: [
      {
        label: "Property Taxes",
        value: 1250,
        note: "",
      },
      {
        label: "Homeowners' Association Fee",
        value: 300,
        note: "",
      },
      {
        label: "Mortgage Payment",
        value: "Varies based on terms and interest rate",
        note: "",
      },
      {
        label: "Property Insurance",
        value: 150,
        note: "",
      },
    ],
  },
  {
    id: 2,
    price: 480000,
    image: "/assets/imgs/Seaside-Serenity-Villa.png",
    description: "Cozy family home located in Los Angeles suburb",
    type: "House",
    location: "Los Angeles, USA",
    rooms: 3,
    baths: 2,
    area: "1,400 Sq Ft",
    features: [
      "Spacious backyard",
      "Two-car garage",
      "Close to schools and parks",
    ],
    fees: [
      {
        label: "Property Transfer Tax",
        value: 18000,
        note: "Based on the sale price and local regulations",
      },
      {
        label: "Legal Fees",
        value: 2500,
        note: "Covers documentation and title transfer",
      },
      {
        label: "Home Inspection",
        value: 400,
        note: "Recommended for structural and safety checks",
      },
      {
        label: "Property Insurance",
        value: 1000,
        note: "Annual cost for standard property coverage",
      },
      {
        label: "Mortgage Fees",
        value: "Depends on lender",
        note: "May vary based on financing institution",
      },
    ],
    monthly: [
      {
        label: "Property Taxes",
        value: 1100,
        note: "Estimated monthly tax rate",
      },
      {
        label: "Homeowners Association Fee",
        value: 200,
        note: "Covers neighborhood maintenance services",
      },
      {
        label: "Monthly Insurance",
        value: 120,
        note: "Basic protection for damages",
      },
    ],
    initialCosts: [
      {
        label: "Listing Price",
        value: 850000,
        note: "",
      },
      {
        label: "Additional Fees",
        value: 34000,
        note: "Includes transfer tax, legal fees, inspection, insurance",
      },
      {
        label: "Down Payment",
        value: "$170,000",
        note: "20%",
      },
      {
        label: "Mortgage Amount",
        value: 680000,
        note: "",
      },
    ],
    monthlyExpenses: [
      {
        label: "Property Taxes",
        value: 1450,
        note: "",
      },
      {
        label: "Homeowners' Association Fee",
        value: 0,
        note: "",
      },
      {
        label: "Mortgage Payment",
        value: "Varies based on terms and interest rate",
        note: "",
      },
      {
        label: "Property Insurance",
        value: 180,
        note: "",
      },
    ],
  },
  {
    id: 3,
    price: 950000,
    image: "/images/miami.jpg",
    description: "Luxury villa with private pool in Miami Beach",
    type: "Villa",
    location: "Miami, USA",
    rooms: 4,
    baths: 3,
    area: "2,500 Sq Ft",
    features: [
      "Private swimming pool",
      "Sea view terrace",
      "High-end smart home system",
    ],
    fees: [
      {
        label: "Property Transfer Tax",
        value: 30000,
        note: "Depends on luxury property regulations",
      },
      {
        label: "Legal Fees",
        value: 5000,
        note: "Higher due to luxury property contracts",
      },
      {
        label: "Home Inspection",
        value: 700,
        note: "Recommended for high-value property checks",
      },
      {
        label: "Property Insurance",
        value: 2000,
        note: "Annual premium for luxury property",
      },
      {
        label: "Mortgage Fees",
        value: "Available upon request",
        note: "Specialized mortgage programs for villas",
      },
    ],
    monthly: [
      {
        label: "Property Taxes",
        value: 1800,
        note: "Luxury property tax estimation",
      },
      {
        label: "Homeowners Association Fee",
        value: 400,
        note: "Covers gated community services",
      },
      {
        label: "Monthly Insurance",
        value: 250,
        note: "Extended protection for luxury estates",
      },
    ],
    initialCosts: [
      {
        label: "Listing Price",
        value: 450000,
        note: "",
      },
      {
        label: "Additional Fees",
        value: 22000,
        note: "Property transfer tax, legal fees, inspection, insurance",
      },
      {
        label: "Down Payment",
        value: "$90,000",
        note: "20%",
      },
      {
        label: "Mortgage Amount",
        value: 360000,
        note: "",
      },
    ],
    monthlyExpenses: [
      {
        label: "Property Taxes",
        value: 950,
        note: "",
      },
      {
        label: "Homeowners' Association Fee",
        value: 400,
        note: "",
      },
      {
        label: "Mortgage Payment",
        value: "Varies based on terms and interest rate",
        note: "",
      },
      {
        label: "Property Insurance",
        value: 130,
        note: "",
      },
    ],
  },
  {
    id: 4,
    price: 320000,
    image: "/images/chicago.jpg",
    description: "Affordable condo in downtown Chicago",
    type: "Condo",
    location: "Chicago, USA",
    rooms: 1,
    baths: 1,
    area: "750 Sq Ft",
    features: [
      "Fitness center access",
      "24/7 security",
      "Close to public transportation",
    ],
    fees: [
      {
        label: "Property Transfer Tax",
        value: 12000,
        note: "Based on the sale price and local condo rules",
      },
      {
        label: "Legal Fees",
        value: 1800,
        note: "Includes standard condo legal services",
      },
      {
        label: "Home Inspection",
        value: 350,
        note: "Optional but recommended for peace of mind",
      },
      {
        label: "Property Insurance",
        value: 800,
        note: "Annual premium for condo coverage",
      },
      {
        label: "Mortgage Fees",
        value: "Optional",
        note: "Consult with your bank for financing",
      },
    ],
    monthly: [
      {
        label: "Property Taxes",
        value: 900,
        note: "Estimated average monthly condo tax",
      },
      {
        label: "Homeowners Association Fee",
        value: 250,
        note: "Covers building maintenance and amenities",
      },
      {
        label: "Monthly Insurance",
        value: 100,
        note: "Protects against property damages",
      },
    ],
    initialCosts: [
      {
        label: "Listing Price",
        value: 1200000,
        note: "",
      },
      {
        label: "Additional Fees",
        value: 50000,
        note: "Includes transfer tax, legal fees, inspection, insurance",
      },
      {
        label: "Down Payment",
        value: "$240,000",
        note: "20%",
      },
      {
        label: "Mortgage Amount",
        value: 960000,
        note: "",
      },
    ],
    monthlyExpenses: [
      {
        label: "Property Taxes",
        value: 1900,
        note: "",
      },
      {
        label: "Homeowners' Association Fee",
        value: 150,
        note: "",
      },
      {
        label: "Mortgage Payment",
        value: "Varies based on terms and interest rate",
        note: "",
      },
      {
        label: "Property Insurance",
        value: 250,
        note: "",
      },
    ],
  },
];

export default properties;
