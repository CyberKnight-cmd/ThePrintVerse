export const categoryMenuList = [
  {
    id: 1,
    title: "Metal Posters",
    src: "/printers icon.png",
    href: "/shop/metal-posters"
  },
  {
    id: 2,
    title: "Fridge Magnets",
    src: "/smart phone icon.png",
    href: "/shop/fridge-magnets"
  },
  {
    id: 3,
    title: "Picture Frames",
    src: "/tablet icon.png",
    href: "/shop/picture-frames"
  },
  {
    id: 4,
    title: "Canvas Prints",
    src: "/camera icon.png",
    href: "/shop/canvas-prints"
  },
  {
    id: 5,
    title: "Custom Stickers",
    src: "/mouse icon.png",
    href: "/shop/custom-stickers"
  },
  {
    id: 6,
    title: "Photo Albums",
    src: "/laptop icon.png",
    href: "/shop/photo-albums"
  },
  {
    id: 7,
    title: "Wall Art",
    src: "/pc icon.png",
    href: "/shop/wall-art"
  },
  {
    id: 8,
    title: "Custom Mugs",
    src: "/headphone icon.png",
    href: "/shop/custom-mugs"
  },
  {
    id: 9,
    title: "Keychains",
    src: "/ear buds icon.png",
    href: "/shop/keychains"
  },
  {
    id: 10,
    title: "Phone Cases",
    src: "/smart watch.png",
    href: "/shop/phone-cases"
  },
];

export const incentives = [
  {
    name: "Free Shipping",
    description:
      "Free shipping on all orders over $50. Get your custom prints delivered to your door.",
    imageSrc: "/shipping icon.png",
  },
  {
    name: "Premium Quality",
    description:
      "High-quality materials and printing technology for vibrant, long-lasting results.",
    imageSrc: "/support icon.png",
  },
  {
    name: "Fast Turnaround",
    description:
      "Quick processing and printing. Most orders ready within 2-3 business days.",
    imageSrc: "/fast shopping icon.png",
  },
];

export const navigation = {
  sale: [
    { name: "Metal Posters", href: "#" },
    { name: "Fridge Magnets", href: "#" },
    { name: "Picture Frames", href: "#" },
  ],
  about: [
    { name: "About The Print Verse", href: "#" },
    { name: "Our Story", href: "#" },
    { name: "Quality Promise", href: "#" },
  ],
  buy: [
    { name: "Custom Design Service", href: "#" },
    { name: "Bulk Orders", href: "#" },
    { name: "Terms Of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Returns & Exchanges", href: "#" },
  ],
  help: [
    { name: "Contact", href: "#" },
    { name: "How to Order", href: "#" },
    { name: "Design Guidelines", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

export const isValidNameOrLastname = (input: string) => {
  // Simple name or lastname regex format check
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  // simple email address format check
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  // Remove all non-digit characters
  const cleanedInput = input.replace(/[^0-9]/g, "");
  
  // Check if the cleaned input has valid length (13-19 digits)
  if (!/^\d{13,19}$/.test(cleanedInput)) {
    return false;
  }
  
  // Implement Luhn algorithm for credit card validation
  return luhnCheck(cleanedInput);
};

/**
 * Luhn algorithm implementation for credit card validation
 * @param cardNumber - The credit card number as a string
 * @returns boolean - true if the card number is valid according to Luhn algorithm
 */
const luhnCheck = (cardNumber: string): boolean => {
  let sum = 0;
  let isEven = false;
  
  // Process digits from right to left
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i], 10);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
};

/**
 * Enhanced credit card validation with card type detection
 * @param input - The credit card number as a string
 * @returns object with validation result and card type
 */
export const validateCreditCard = (input: string) => {
  const cleanedInput = input.replace(/[^0-9]/g, "");
  
  // Basic length and format check
  if (!/^\d{13,19}$/.test(cleanedInput)) {
    return {
      isValid: false,
      cardType: 'unknown',
      error: 'Invalid card number format'
    };
  }
  
  // Luhn algorithm check
  if (!luhnCheck(cleanedInput)) {
    return {
      isValid: false,
      cardType: 'unknown',
      error: 'Invalid card number (Luhn check failed)'
    };
  }
  
  // Detect card type based on BIN (Bank Identification Number)
  const cardType = detectCardType(cleanedInput);
  
  return {
    isValid: true,
    cardType,
    error: null
  };
};

/**
 * Detect credit card type based on BIN patterns
 * @param cardNumber - The credit card number as a string
 * @returns string - The detected card type
 */
const detectCardType = (cardNumber: string): string => {
  const firstDigit = cardNumber[0];
  const firstTwoDigits = cardNumber.substring(0, 2);
  const firstFourDigits = cardNumber.substring(0, 4);
  const firstThreeDigits = cardNumber.substring(0, 3);
  
  // Visa: starts with 4
  if (firstDigit === '4') {
    return 'visa';
  }
  
  // Mastercard: starts with 5 or 2
  if (firstDigit === '5' || (firstTwoDigits >= '22' && firstTwoDigits <= '27')) {
    return 'mastercard';
  }
  
  // American Express: starts with 34 or 37
  if (firstTwoDigits === '34' || firstTwoDigits === '37') {
    return 'amex';
  }
  
  // Discover: starts with 6011, 65, or 644-649
  if (firstFourDigits === '6011' || firstTwoDigits === '65' || 
      (firstThreeDigits >= '644' && firstThreeDigits <= '649')) {
    return 'discover';
  }
  
  // Diners Club: starts with 300-305, 36, or 38
  if ((firstThreeDigits >= '300' && firstThreeDigits <= '305') || 
      firstTwoDigits === '36' || firstTwoDigits === '38') {
    return 'diners';
  }
  
  // JCB: starts with 35
  if (firstTwoDigits === '35') {
    return 'jcb';
  }
  
  return 'unknown';
};

export const isValidCreditCardExpirationDate = (input: string) => {
  // simple expiration date format check
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  // simple CVV or CVC format check
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};
