// Chinese Zodiac Signs Data
const zodiacSigns = [
  {
    name: 'Rat',
    years: [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020],
    emoji: '🐀',
    element: 'Water',
    color: 'Blue',
    number: '2, 3',
    flower: 'Lily',
    personality: 'Rats are quick-witted, resourceful, and versatile. They have excellent observation skills and are known for their charm and adaptability. Ambitious and energetic, Rat people are good at seizing opportunities but can sometimes be perceived as opportunistic.',
    compatibility: {
      excellent: ['Dragon', 'Monkey'],
      good: ['Ox', 'Tiger', 'Snake', 'Rooster'],
      neutral: ['Rat', 'Rabbit', 'Horse', 'Goat', 'Pig'],
      challenging: ['Dog']
    }
  },
  {
    name: 'Ox',
    years: [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
    emoji: '🐂',
    element: 'Earth',
    color: 'Yellow',
    number: '1, 4',
    flower: 'Tulip',
    personality: 'Oxen are known for their diligence, dependability, and determination. They are strong and persistent workers with a patient and methodical approach to life. While they can be stubborn and conventional, they are also honest and logical in their decisions.',
    compatibility: {
      excellent: ['Rat', 'Snake', 'Rooster'],
      good: ['Tiger', 'Rabbit', 'Horse', 'Dog', 'Pig'],
      neutral: ['Ox', 'Dragon'],
      challenging: ['Goat', 'Monkey']
    }
  },
  {
    name: 'Tiger',
    years: [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
    emoji: '🐅',
    element: 'Wood',
    color: 'Green',
    number: '1, 3',
    flower: 'Cineraria',
    personality: 'Tigers are brave, competitive, and confident. They have a strong sense of justice and are known for their courage and enthusiasm. Tigers can be impulsive and rebellious but are also generous and passionate defenders of what they believe is right.',
    compatibility: {
      excellent: ['Horse', 'Dog'],
      good: ['Rat', 'Rabbit', 'Dragon', 'Snake', 'Rooster', 'Pig'],
      neutral: ['Tiger', 'Monkey'],
      challenging: ['Ox', 'Goat']
    }
  },
  {
    name: 'Rabbit',
    years: [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
    emoji: '🐇',
    element: 'Wood',
    color: 'Pink',
    number: '3, 4',
    flower: 'Snapdragon',
    personality: 'Rabbits are gentle, quiet, and elegant. They have excellent taste and are known for their kindness, sensitivity, and compassion. While they can be somewhat reserved and risk-averse, they are also tactful and skilled at negotiation.',
    compatibility: {
      excellent: ['Goat', 'Pig', 'Dog'],
      good: ['Rat', 'Tiger', 'Dragon', 'Snake', 'Horse', 'Monkey', 'Rooster'],
      neutral: ['Rabbit'],
      challenging: ['Ox']
    }
  },
  {
    name: 'Dragon',
    years: [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
    emoji: '🐉',
    element: 'Earth',
    color: 'Gold',
    number: '1, 6',
    flower: 'Bleeding Heart',
    personality: 'Dragons are energetic, charismatic, and natural leaders. They are confident, intelligent, and ambitious, with a strong sense of honor. Dragons can be domineering and demanding but are also courageous and passionate about their pursuits.',
    compatibility: {
      excellent: ['Rat', 'Monkey', 'Rooster'],
      good: ['Tiger', 'Snake', 'Horse', 'Goat', 'Dog'],
      neutral: ['Ox', 'Rabbit', 'Dragon'],
      challenging: ['Pig']
    }
  },
  {
    name: 'Snake',
    years: [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025],
    emoji: '🐍',
    element: 'Fire',
    color: 'Red',
    number: '2, 8',
    flower: 'Orchid',
    personality: 'Snakes are enigmatic, intuitive, and wise. They have excellent taste and are known for their intelligence and insight. While they can be somewhat secretive and suspicious, they are also determined and compassionate when it comes to helping others.',
    compatibility: {
      excellent: ['Ox', 'Rooster'],
      good: ['Rat', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Monkey', 'Dog', 'Pig'],
      neutral: ['Goat'],
      challenging: []
    }
  },
  {
    name: 'Horse',
    years: [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
    emoji: '🐎',
    element: 'Fire',
    color: 'Brown',
    number: '2, 7',
    flower: 'Jasmine',
    personality: 'Horses are energetic, enthusiastic, and independent. They have a strong desire for freedom and are known for their intelligence and warm-heartedness. While they can be impatient and sometimes tactless, they are also honest and adventurous in their approach to life.',
    compatibility: {
      excellent: ['Tiger', 'Goat', 'Dog'],
      good: ['Rat', 'Rabbit', 'Dragon', 'Snake', 'Monkey', 'Rooster', 'Pig'],
      neutral: ['Horse'],
      challenging: ['Ox']
    }
  },
  {
    name: 'Goat',
    years: [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027],
    emoji: '🐐',
    element: 'Earth',
    color: 'Brown',
    number: '3, 9',
    flower: 'Carnation',
    personality: 'Goats are gentle, compassionate, and creative. They have an artistic nature and are known for their kindness and sensitivity. While they can be indecisive and prone to worry, they are also sincere and generous with those they care about.',
    compatibility: {
      excellent: ['Rabbit', 'Horse', 'Pig'],
      good: ['Dragon', 'Snake', 'Monkey', 'Rooster', 'Dog'],
      neutral: ['Goat'],
      challenging: ['Ox', 'Tiger', 'Rat']
    }
  },
  {
    name: 'Monkey',
    years: [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
    emoji: '🐵',
    element: 'Metal',
    color: 'White',
    number: '1, 8',
    flower: 'Chrysanthemum',
    personality: 'Monkeys are intelligent, quick-witted, and versatile. They have excellent problem-solving skills and are known for their curiosity and playfulness. While they can be mischievous and sometimes insensitive, they are also innovative and adaptable.',
    compatibility: {
      excellent: ['Rat', 'Dragon'],
      good: ['Rabbit', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'],
      neutral: ['Tiger'],
      challenging: ['Ox']
    }
  },
  {
    name: 'Rooster',
    years: [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
    emoji: '🐓',
    element: 'Metal',
    color: 'Gold',
    number: '5, 7',
    flower: 'Gladiola',
    personality: 'Roosters are observant, hardworking, and courageous. They have a strong sense of time management and are known for their honesty and practicality. While they can be perfectionistic and blunt, they are also loyal and committed to their responsibilities.',
    compatibility: {
      excellent: ['Ox', 'Dragon', 'Snake'],
      good: ['Rat', 'Tiger', 'Rabbit', 'Horse', 'Monkey', 'Dog'],
      neutral: ['Rooster'],
      challenging: ['Goat', 'Pig']
    }
  },
  {
    name: 'Dog',
    years: [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
    emoji: '🐕',
    element: 'Earth',
    color: 'Green',
    number: '3, 9',
    flower: 'Rose',
    personality: 'Dogs are loyal, honest, and responsible. They have a strong sense of justice and are known for their reliability and faithfulness. While they can be somewhat anxious and critical, they are also protective and supportive of those they care about.',
    compatibility: {
      excellent: ['Tiger', 'Rabbit', 'Horse'],
      good: ['Ox', 'Dragon', 'Snake', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'],
      neutral: [],
      challenging: ['Rat']
    }
  },
  {
    name: 'Pig',
    years: [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031],
    emoji: '🐖',
    element: 'Water',
    color: 'Yellow',
    number: '2, 5',
    flower: 'Hydrangea',
    personality: 'Pigs are compassionate, generous, and diligent. They have a great concentration ability and are known for their honesty and kindness. While they can be somewhat naive and materialistic, they are also tolerant and optimistic in their outlook.',
    compatibility: {
      excellent: ['Rabbit', 'Goat'],
      good: ['Tiger', 'Snake', 'Horse', 'Monkey', 'Dog'],
      neutral: ['Rat', 'Ox', 'Pig'],
      challenging: ['Dragon', 'Rooster']
    }
  }
];

// Fortune calculation data
const fortuneFactors = {
  // These are fictional factors for calculating fortune
  elements: {
    Water: { strengthWithWood: 0.8, strengthWithFire: 0.4, strengthWithEarth: 0.6, strengthWithMetal: 0.9 },
    Wood: { strengthWithWater: 0.9, strengthWithFire: 0.8, strengthWithEarth: 0.5, strengthWithMetal: 0.4 },
    Fire: { strengthWithWater: 0.3, strengthWithWood: 0.7, strengthWithEarth: 0.8, strengthWithMetal: 0.5 },
    Earth: { strengthWithWater: 0.5, strengthWithWood: 0.4, strengthWithFire: 0.9, strengthWithMetal: 0.8 },
    Metal: { strengthWithWater: 0.8, strengthWithWood: 0.3, strengthWithFire: 0.4, strengthWithEarth: 0.9 }
  },
  
  // Fictional current cosmic energies (would change periodically in a real app)
  cosmicEnergies: {
    Water: 0.85,
    Wood: 0.7,
    Fire: 0.6,
    Earth: 0.9,
    Metal: 0.75
  },
  
  // Planetary influences
  planets: {
    Jupiter: 0.8,  // Expansion, growth
    Saturn: 0.65,  // Discipline, restriction
    Mars: 0.7,     // Energy, action
    Venus: 0.85,   // Harmony, relationships
    Mercury: 0.75  // Communication, intellect
  }
};

// Fortune templates
const fortuneTemplates = {
  excellent: [
    "The celestial alignment is exceptionally favorable for you this year. Jupiter's position brings prosperity, while Venus enhances your relationships. Your element is in perfect harmony with the cosmic energies.",
    "This year marks an auspicious period in your life journey. The I Ching hexagram 'Prosperity' is strongly associated with your fortune. Eastern and Western influences are aligned to bring success.",
    "Your zodiac sign is entering a golden phase. The Five Elements Theory suggests that your element is strengthened by current cosmic forces, creating an excellent foundation for growth."
  ],
  good: [
    "The stars are aligning favorably for you. While there may be minor challenges, your natural zodiac traits will help you navigate them successfully and find opportunities for growth.",
    "Your fortune is well-positioned this year. The balance between yin and yang energies supports your endeavors, especially in areas related to your element's natural strengths.",
    "A promising year lies ahead. The celestial patterns indicate positive energy flow, particularly after the next lunar cycle. Your inherent zodiac wisdom will serve you well."
  ],
  neutral: [
    "The cosmic energies are in a state of balance for your sign. This year will bring both opportunities and challenges, requiring you to apply your zodiac's wisdom judiciously.",
    "Your fortune shows a mixture of favorable and challenging aspects. The I Ching indicates a period of transition, where patience and careful decision-making will be important.",
    "This is a year of equilibrium for your zodiac sign. While no major obstacles are predicted, significant achievements will require extra effort and attention to timing."
  ],
  challenging: [
    "Some caution is advised this year as your element faces resistance from current cosmic energies. However, by following the guidance on favorable activities, you can mitigate challenges.",
    "This year presents some tests for your zodiac sign. The celestial arrangement suggests a period of growth through overcoming obstacles. Your inherent resilience will be valuable.",
    "A period of transformation lies ahead. While the path may contain hurdles, these are opportunities for significant personal growth and the development of new strengths."
  ]
};

// Favorable and unfavorable activities (general templates)
const activities = {
  favorable: {
    Rat: ["Networking and social activities", "Financial investments", "Academic pursuits", "Creative writing", "Travel to northern destinations"],
    Ox: ["Long-term planning", "Home improvement projects", "Agricultural activities", "Traditional ceremonies", "Eastern travel directions"],
    Tiger: ["Bold new ventures", "Competitive sports", "Leadership roles", "Public speaking", "Travel to southern destinations"],
    Rabbit: ["Artistic pursuits", "Diplomatic negotiations", "Home decoration", "Garden activities", "Travel to eastern destinations"],
    Dragon: ["Business expansion", "Public performances", "Technological innovations", "High-risk investments", "Travel to southeastern destinations"],
    Snake: ["Research and study", "Spiritual practices", "Strategic planning", "Investment in education", "Travel to southwestern destinations"],
    Horse: ["Outdoor activities", "Sports competitions", "Travel adventures", "Social gatherings", "Wearing red on important days"],
    Goat: ["Creative endeavors", "Collaborative projects", "Aesthetic improvements", "Charitable work", "Travel to western destinations"],
    Monkey: ["Problem-solving tasks", "Technical work", "Competitive activities", "Financial speculation", "Travel to northern destinations"],
    Rooster: ["Detailed planning", "Organization projects", "Public speaking", "Fashion endeavors", "Travel to western destinations"],
    Dog: ["Charitable activities", "Justice-related work", "Team sports", "Home security improvements", "Travel to northeastern destinations"],
    Pig: ["Social gatherings", "Educational pursuits", "Property investments", "Culinary experiences", "Travel to northwestern destinations"]
  },
  
  unfavorable: {
    Rat: ["Impulsive decisions", "Confrontations with authority", "Ignoring details", "Wearing dark colors on key days", "Western travel directions"],
    Ox: ["Rushed decisions", "Breaking routines", "High-risk investments", "Wearing bright red", "Southwestern travel directions"],
    Tiger: ["Excessive caution", "Rigid planning", "Submissive roles", "Indoor confinement", "Northwestern travel directions"],
    Rabbit: ["Direct confrontation", "Rushed decisions", "Isolated activities", "Wearing dark colors", "Northern travel directions"],
    Dragon: ["Excessive modesty", "Conservative approaches", "Following others' leads", "Wearing black or white", "Northwestern travel directions"],
    Snake: ["Public confrontations", "Impulsive spending", "Excessive socializing", "Wearing bright colors", "Northeastern travel directions"],
    Horse: ["Confinement", "Repetitive tasks", "Conservative investments", "Wearing black", "Northern travel directions"],
    Goat: ["Solitary ventures", "Financial risks", "Confrontational situations", "Wearing gray", "Southeastern travel directions"],
    Monkey: ["Routine tasks", "Overly cautious approaches", "Rigid schedules", "Wearing dark blue", "Southern travel directions"],
    Rooster: ["Unplanned activities", "Delegation of important tasks", "Excessive flexibility", "Wearing brown", "Eastern travel directions"],
    Dog: ["Solitary pursuits", "Luxury spending", "Compromising principles", "Wearing purple", "Southwestern travel directions"],
    Pig: ["Strict dieting", "Excessive saving", "Competitive environments", "Wearing gray", "Southern travel directions"]
  }
};

// Function to determine Chinese zodiac sign based on birth year
function getZodiacSign(year) {
  const zodiacIndex = (year - 4) % 12;
  return zodiacSigns[zodiacIndex];
}

// Function to calculate fortune score (0-100)
function calculateFortuneScore(sign, birthMonth, birthDay) {
  // Base score from zodiac sign's element compatibility with current cosmic energies
  let baseScore = fortuneFactors.cosmicEnergies[sign.element] * 60;
  
  // Adjust based on birth month and day (using simple algorithm for demonstration)
  const monthFactor = (birthMonth * 3.5) % 10;
  const dayFactor = (birthDay * 2.7) % 15;
  
  // Calculate planetary influences
  const jupiterInfluence = fortuneFactors.planets.Jupiter * (1 + (birthMonth % 3) * 0.1);
  const saturnInfluence = fortuneFactors.planets.Saturn * (1 - (birthDay % 2) * 0.05);
  const venusInfluence = fortuneFactors.planets.Venus * (1 + (birthYear % 2) * 0.1);
  
  // Calculate name numerology factor (placeholder for actual calculation)
  const nameNumerologyFactor = 5;
  
  // Final score calculation
  let score = baseScore + monthFactor + dayFactor + (jupiterInfluence * 10) - 
              (saturnInfluence * 5) + (venusInfluence * 8) + nameNumerologyFactor;
  
  // Ensure score is between 0 and 100
  score = Math.max(0, Math.min(100, score));
  
  return Math.round(score);
}

// Function to get fortune category based on score
function getFortuneCategory(score) {
  if (score >= 85) return 'excellent';
  if (score >= 70) return 'good';
  if (score >= 50) return 'neutral';
  return 'challenging';
}

// Function to get compatible signs
function getCompatibleSigns(sign) {
  const compatibility = {
    excellent: [],
    good: [],
    neutral: [],
    challenging: []
  };
  
  // Fill compatibility lists
  for (const category in sign.compatibility) {
    sign.compatibility[category].forEach(signName => {
      const compatSign = zodiacSigns.find(s => s.name === signName);
      if (compatSign) {
        compatibility[category].push({
          name: compatSign.name,
          emoji: compatSign.emoji
        });
      }
    });
  }
  
  return compatibility;
}

// Initialize form handling
document.addEventListener('DOMContentLoaded', function() {
  const zodiacForm = document.getElementById('zodiac-form');
  const resultsSection = document.getElementById('results');
  
  if (zodiacForm) {
    zodiacForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const birthMonth = parseInt(document.getElementById('birth-month').value);
      const birthDay = parseInt(document.getElementById('birth-day').value);
      const birthYear = parseInt(document.getElementById('birth-year').value);
      
      // Calculate zodiac sign
      const zodiacSign = getZodiacSign(birthYear);
      
      // Calculate fortune score
      window.birthYear = birthYear; // Make it globally available for the calculation
      const fortuneScore = calculateFortuneScore(zodiacSign, birthMonth, birthDay);
      const fortuneCategory = getFortuneCategory(fortuneScore);
      
      // Get random fortune description from template
      const fortuneDescriptions = fortuneTemplates[fortuneCategory];
      const randomIndex = Math.floor(Math.random() * fortuneDescriptions.length);
      const fortuneDescription = fortuneDescriptions[randomIndex];
      
      // Get compatible signs
      const compatibility = getCompatibleSigns(zodiacSign);
      
      // Display results
      document.getElementById('user-name-display').textContent = `Personalized reading for ${name}`;
      document.getElementById('zodiac-sign').textContent = zodiacSign.name;
      document.getElementById('zodiac-icon').textContent = zodiacSign.emoji;
      document.getElementById('zodiac-years').textContent = zodiacSign.years.slice(-5).join(', ');
      document.getElementById('zodiac-element').textContent = zodiacSign.element;
      document.getElementById('zodiac-color').textContent = zodiacSign.color;
      document.getElementById('zodiac-number').textContent = zodiacSign.number;
      document.getElementById('zodiac-flower').textContent = zodiacSign.flower;
      document.getElementById('zodiac-personality').textContent = zodiacSign.personality;
      
      // Set fortune details
      document.getElementById('fortune-score').textContent = `${fortuneScore}%`;
      document.getElementById('fortune-bar').style.width = `${fortuneScore}%`;
      document.getElementById('fortune-description').textContent = fortuneDescription;
      
      // Set favorable and unfavorable activities
      const favorableList = document.getElementById('fortune-favorable');
      const unfavorableList = document.getElementById('fortune-avoid');
      
      favorableList.innerHTML = '';
      unfavorableList.innerHTML = '';
      
      activities.favorable[zodiacSign.name].forEach(activity => {
        const li = document.createElement('li');
        li.className = 'flex items-center';
        li.innerHTML = `<span class="mr-2">✓</span> ${activity}`;
        favorableList.appendChild(li);
      });
      
      activities.unfavorable[zodiacSign.name].forEach(activity => {
        const li = document.createElement('li');
        li.className = 'flex items-center';
        li.innerHTML = `<span class="mr-2">✕</span> ${activity}`;
        unfavorableList.appendChild(li);
      });
      
      // Set compatibility
      const compatibilityContainer = document.getElementById('zodiac-compatibility');
      compatibilityContainer.innerHTML = '';
      
      // Show excellent and challenging compatibility
      compatibility.excellent.slice(0, 2).forEach(sign => {
        const div = document.createElement('div');
        div.className = 'bg-primary-50 rounded-lg p-3 text-center';
        div.innerHTML = `
          <span class="block text-2xl mb-1">${sign.emoji}</span>
          <p class="font-medium text-primary-700">${sign.name}</p>
          <p class="text-xs text-primary-600">Excellent</p>
        `;
        compatibilityContainer.appendChild(div);
      });
      
      compatibility.good.slice(0, 1).forEach(sign => {
        const div = document.createElement('div');
        div.className = 'bg-green-50 rounded-lg p-3 text-center';
        div.innerHTML = `
          <span class="block text-2xl mb-1">${sign.emoji}</span>
          <p class="font-medium text-green-700">${sign.name}</p>
          <p class="text-xs text-green-600">Good</p>
        `;
        compatibilityContainer.appendChild(div);
      });
      
      compatibility.challenging.slice(0, 1).forEach(sign => {
        const div = document.createElement('div');
        div.className = 'bg-red-50 rounded-lg p-3 text-center';
        div.innerHTML = `
          <span class="block text-2xl mb-1">${sign.emoji}</span>
          <p class="font-medium text-red-700">${sign.name}</p>
          <p class="text-xs text-red-600">Challenging</p>
        `;
        compatibilityContainer.appendChild(div);
      });
      
      // Generate detailed forecast based on zodiac sign and fortune category
      let detailedForecast = '';
      
      if (fortuneCategory === 'excellent' || fortuneCategory === 'good') {
        detailedForecast = `
          <p>
            Based on the position of Jupiter and Saturn in relation to your ${zodiacSign.name} sign, this year marks a significant turning point in your life journey. The Eastern celestial alignments indicate a period of growth and transformation, particularly in your personal development and career aspirations.
          </p>
          <p>
            The I Ching hexagram associated with your fortune is "Hexagram 1: The Creative," symbolizing strength and persistence. This suggests that your creative energy is at its peak, and you should harness it to pursue your goals with confidence.
          </p>
          <p>
            Your Feng Shui element (${zodiacSign.element}) is strong this year, especially when you align your living space with your favorable directions. Consider placing ${zodiacSign.element.toLowerCase()} elements in the ${activities.favorable[zodiacSign.name][4].split(' ').pop().slice(0, -1)} section of your home to enhance your career prospects and wisdom.
          </p>
        `;
      } else {
        detailedForecast = `
          <p>
            The current celestial alignments show that while Saturn creates some resistance in relation to your ${zodiacSign.name} sign, Jupiter offers balancing support. This year will require careful navigation, but the challenges will ultimately strengthen your character.
          </p>
          <p>
            The I Ching hexagram associated with your fortune is "Hexagram 24: Return," symbolizing a turning point after a period of challenge. This suggests that patience and perseverance will eventually lead to renewal and growth.
          </p>
          <p>
            Your Feng Shui element (${zodiacSign.element}) needs reinforcement this year. Consider adding ${zodiacSign.element.toLowerCase()} elements to the ${activities.favorable[zodiacSign.name][4].split(' ').pop().slice(0, -1)} area of your home, and avoid the colors associated with conflicting elements, particularly ${activities.unfavorable[zodiacSign.name][3].split(' ').pop()}.
          </p>
        `;
      }
      
      document.getElementById('detailed-forecast').innerHTML = detailedForecast;
      
      // Show results section
      resultsSection.classList.remove('hidden');
      
      // Smooth scroll to results
      window.scrollTo({
        top: resultsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    });
  }

  // Link premium button to pricing section
  const premiumButton = document.getElementById('get-premium-reading');
  if (premiumButton) {
    premiumButton.addEventListener('click', function() {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        window.scrollTo({
          top: pricingSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  }
});