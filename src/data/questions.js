const DATA = {
  react: {
    name: "React & JS",
    icon: "⚛️",
    questions: {
      easy: [
        { q: "What hook manages state in a React functional component?", opts: ["useEffect", "useState", "useRef", "useContext"], ans: 1, exp: "useState returns a state variable and a setter function." },
        { q: "JSX stands for?", opts: ["Java Syntax Extension", "JavaScript XML", "JSON Extra", "JS Extension"], ans: 1, exp: "JSX = JavaScript XML, lets you write HTML-like syntax in JS." },
        { q: "Which command creates a new React app?", opts: ["npm react init", "npx create-react-app", "react new", "npm start react"], ans: 1, exp: "npx create-react-app scaffolds a complete React project." },
        { q: "What does the 'key' prop help React with?", opts: ["Styling elements", "API calls", "List reconciliation", "Managing state"], ans: 2, exp: "Keys help React identify which list items have changed." },
        { q: "What is a functional component in React?", opts: ["A class with render()", "A JS function returning JSX", "A CSS module", "An event handler"], ans: 1, exp: "Functional components are plain JavaScript functions that return JSX." },
      ],
      medium: [
        { q: "What does useEffect do with an empty array []?", opts: ["Runs every render", "Never runs", "Runs once on mount", "Runs on unmount only"], ans: 2, exp: "Empty deps array = runs once after initial render, like componentDidMount." },
        { q: "What is prop drilling?", opts: ["Passing props through many component layers", "Drilling into DOM", "A CSS pattern", "A testing approach"], ans: 0, exp: "Prop drilling = passing props down through many component levels unnecessarily." },
        { q: "What does React.memo do?", opts: ["Manages memory usage", "Prevents unnecessary re-renders", "Memoizes state", "Caches API results"], ans: 1, exp: "React.memo wraps a component and skips re-render if props haven't changed." },
        { q: "What is the virtual DOM?", opts: ["A real browser DOM", "A JS representation of the DOM", "A database", "A bundler"], ans: 1, exp: "The virtual DOM is a lightweight JS copy React uses to minimize real DOM updates." },
        { q: "Which hook replaces componentDidMount?", opts: ["useState", "useRef", "useEffect", "useCallback"], ans: 2, exp: "useEffect with an empty dependency array replaces componentDidMount." },
      ],
      hard: [
        { q: "What is reconciliation in React?", opts: ["Redux data flow", "DOM diffing algorithm", "Async handling", "Context merging"], ans: 1, exp: "Reconciliation is React's process of comparing old vs new virtual DOM." },
        { q: "What does useCallback memoize?", opts: ["Values", "Functions", "Components", "State"], ans: 1, exp: "useCallback memoizes a function reference so it's stable across renders." },
        { q: "What is React Fiber?", opts: ["A CSS approach", "Reimplementation of the reconciler", "A JS bundler", "A state manager"], ans: 1, exp: "React Fiber is a rewrite of the reconciler enabling async rendering." },
        { q: "What does StrictMode do in development?", opts: ["Enables TypeScript", "Double-invokes renders to detect side effects", "Speeds up builds", "Disables all warnings"], ans: 1, exp: "StrictMode intentionally double-invokes functions to surface bugs early." },
        { q: "What is the Context API used for?", opts: ["Caching data", "Sharing state without prop drilling", "HTTP requests", "Form management"], ans: 1, exp: "Context API provides global state accessible to any component without prop drilling." },
      ],
    },
  },
  science: {
    name: "Science",
    icon: "🔬",
    questions: {
      easy: [
        { q: "What is the chemical formula for water?", opts: ["CO2", "H2O", "O2", "NaCl"], ans: 1, exp: "Water is 2 hydrogen atoms bonded to 1 oxygen atom." },
        { q: "Which planet is closest to the Sun?", opts: ["Venus", "Earth", "Mercury", "Mars"], ans: 2, exp: "Mercury is the innermost planet in our solar system." },
        { q: "What gas do plants absorb during photosynthesis?", opts: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], ans: 2, exp: "Plants absorb CO₂ and release O₂ during photosynthesis." },
        { q: "How many bones are in the adult human body?", opts: ["206", "300", "180", "250"], ans: 0, exp: "An adult human skeleton has 206 bones." },
        { q: "What is the speed of light (approx)?", opts: ["300,000 km/s", "150,000 km/s", "3,000 km/s", "30,000 km/s"], ans: 0, exp: "Light travels at ~299,792 km/s in a vacuum." },
      ],
      medium: [
        { q: "What is the powerhouse of the cell?", opts: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"], ans: 2, exp: "Mitochondria generate ATP through cellular respiration." },
        { q: "What is Newton's 3rd Law?", opts: ["F=ma", "Every action has an equal and opposite reaction", "Objects in motion stay in motion", "Energy is conserved"], ans: 1, exp: "For every action, there is an equal and opposite reaction." },
        { q: "What is the atomic number of Carbon?", opts: ["6", "12", "8", "14"], ans: 0, exp: "Carbon has 6 protons, giving it atomic number 6." },
        { q: "Which organ produces insulin?", opts: ["Liver", "Kidney", "Pancreas", "Heart"], ans: 2, exp: "Beta cells in the pancreas produce insulin to regulate blood sugar." },
        { q: "What are DNA's building blocks called?", opts: ["Amino acids", "Nucleotides", "Lipids", "Proteins"], ans: 1, exp: "DNA is a polymer made of nucleotide monomers." },
      ],
      hard: [
        { q: "What type of bond holds the two DNA strands together?", opts: ["Ionic", "Covalent", "Hydrogen", "Metallic"], ans: 2, exp: "Hydrogen bonds form between complementary base pairs across the two strands." },
        { q: "What does Heisenberg's Uncertainty Principle state?", opts: ["E=mc²", "Position and momentum can't both be precisely known", "Light speed is constant", "Entropy always increases"], ans: 1, exp: "You cannot simultaneously know both the exact position and momentum of a particle." },
        { q: "What is entropy in thermodynamics?", opts: ["Energy level", "Measure of disorder", "Temperature", "Pressure"], ans: 1, exp: "Entropy measures the degree of disorder or randomness in a thermodynamic system." },
        { q: "What particle has no electric charge?", opts: ["Proton", "Electron", "Neutron", "Positron"], ans: 2, exp: "Neutrons are electrically neutral." },
        { q: "What is the Krebs Cycle?", opts: ["DNA replication process", "Cellular respiration pathway", "Protein synthesis", "Photosynthesis light stage"], ans: 1, exp: "The Krebs Cycle generates energy in cellular respiration." },
      ],
    },
  },
  history: {
    name: "History",
    icon: "📜",
    questions: {
      easy: [
        { q: "Who was the first President of the United States?", opts: ["Lincoln", "Jefferson", "Washington", "Adams"], ans: 2, exp: "George Washington served as the first US President from 1789 to 1797." },
        { q: "In what year did World War II end?", opts: ["1943", "1945", "1947", "1944"], ans: 1, exp: "WWII ended in 1945 with Germany and Japan surrendering." },
        { q: "Who painted the Mona Lisa?", opts: ["Michelangelo", "Raphael", "Da Vinci", "Botticelli"], ans: 2, exp: "Leonardo da Vinci painted the Mona Lisa between approximately 1503 and 1519." },
        { q: "What year did man first land on the Moon?", opts: ["1965", "1967", "1969", "1971"], ans: 2, exp: "Apollo 11 landed on the Moon on July 20, 1969." },
        { q: "Which ancient wonder was in Egypt?", opts: ["Colosseum", "Hanging Gardens", "Great Pyramid of Giza", "Parthenon"], ans: 2, exp: "The Great Pyramid of Giza is the only ancient wonder still standing today." },
      ],
      medium: [
        { q: "In which year did the Berlin Wall fall?", opts: ["1985", "1987", "1989", "1991"], ans: 2, exp: "The Berlin Wall fell on November 9, 1989." },
        { q: "Who founded the Mongol Empire?", opts: ["Kublai Khan", "Timur", "Genghis Khan", "Attila"], ans: 2, exp: "Genghis Khan united the Mongol tribes and founded the empire in 1206." },
        { q: "The Renaissance began in which country?", opts: ["France", "England", "Germany", "Italy"], ans: 3, exp: "The Renaissance began in the city-states of Italy during the 14th century." },
        { q: "Who invented the printing press?", opts: ["Edison", "Gutenberg", "Watt", "Bell"], ans: 1, exp: "Johannes Gutenberg invented movable type printing around 1440." },
        { q: "Where was Napoleon Bonaparte born?", opts: ["France", "Italy", "Corsica", "Spain"], ans: 2, exp: "Napoleon was born in Ajaccio, Corsica in 1769." },
      ],
      hard: [
        { q: "Which treaty formally ended World War I?", opts: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Rome", "Treaty of Vienna"], ans: 1, exp: "The Treaty of Versailles was signed on June 28, 1919." },
        { q: "The Magna Carta was signed in which year?", opts: ["1066", "1215", "1348", "1492"], ans: 1, exp: "King John of England signed the Magna Carta at Runnymede in 1215." },
        { q: "Who was the last Tsar of Russia?", opts: ["Alexander III", "Nicholas I", "Nicholas II", "Alexander II"], ans: 2, exp: "Nicholas II abdicated in 1917 during the Russian Revolution." },
        { q: "The Hundred Years' War was fought between which two countries?", opts: ["England & Spain", "France & Germany", "England & France", "Spain & Portugal"], ans: 2, exp: "The Hundred Years' War (1337–1453) was fought between England and France." },
        { q: "What ancient library was one of the largest in the ancient world?", opts: ["Library of Rome", "Library of Athens", "Library of Alexandria", "Library of Babylon"], ans: 2, exp: "The Library of Alexandria in Egypt was the largest library of the ancient world." },
      ],
    },
  },
  math: {
    name: "Mathematics",
    icon: "📐",
    questions: {
      easy: [
        { q: "What is the value of π to 2 decimal places?", opts: ["3.12", "3.14", "3.16", "3.18"], ans: 1, exp: "Pi (π) ≈ 3.14159..." },
        { q: "What is the square root of 64?", opts: ["6", "7", "8", "9"], ans: 2, exp: "√64 = 8, because 8 × 8 = 64." },
        { q: "What is 25% of 200?", opts: ["25", "40", "50", "75"], ans: 2, exp: "25% × 200 = 50." },
        { q: "What type of triangle has all sides equal?", opts: ["Scalene", "Isosceles", "Equilateral", "Right"], ans: 2, exp: "An equilateral triangle has all three sides equal and all angles = 60°." },
        { q: "What is 12 × 12?", opts: ["124", "142", "144", "148"], ans: 2, exp: "12 × 12 = 144." },
      ],
      medium: [
        { q: "What is the derivative of x²?", opts: ["x", "2x", "x³", "2x²"], ans: 1, exp: "Power rule: d/dx of x² = 2x." },
        { q: "If a=3, b=4, what is √(a²+b²)?", opts: ["5", "6", "7", "25"], ans: 0, exp: "Pythagoras: √(9+16) = √25 = 5." },
        { q: "What is 2⁸?", opts: ["128", "256", "512", "64"], ans: 1, exp: "2⁸ = 256." },
        { q: "What is a prime number?", opts: ["Divisible by 2", "Only divisible by 1 and itself", "Even number", "Composite"], ans: 1, exp: "A prime has exactly two distinct factors: 1 and itself." },
        { q: "What is the sum of interior angles of a triangle?", opts: ["90°", "180°", "270°", "360°"], ans: 1, exp: "The interior angles of any triangle always sum to 180°." },
      ],
      hard: [
        { q: "What is the integral of sin(x)?", opts: ["cos(x)+C", "-cos(x)+C", "tan(x)+C", "-sin(x)+C"], ans: 1, exp: "∫sin(x)dx = -cos(x) + C." },
        { q: "What does Euler's identity state?", opts: ["e^iπ + 1 = 0", "e = mc²", "i² = -1", "π = 22/7"], ans: 0, exp: "e^(iπ) + 1 = 0 connects five fundamental mathematical constants." },
        { q: "What is Big O notation used for?", opts: ["A grading system", "Measuring algorithm complexity", "A data structure", "A sorting method"], ans: 1, exp: "Big O describes how algorithm runtime or space scales with input size." },
        { q: "What is a matrix determinant?", opts: ["Used to add matrices", "Tells if a matrix is invertible", "Used to transpose", "Only for eigenvalues"], ans: 1, exp: "A non-zero determinant means the matrix is invertible." },
        { q: "What is the Fibonacci sequence pattern?", opts: ["Each term doubles", "Each term is sum of two preceding terms", "Sequence of primes", "Sequence of squares"], ans: 1, exp: "Fibonacci: each term = sum of the two before it." },
      ],
    },
  },
  gk: {
    name: "General Knowledge",
    icon: "🌍",
    questions: {
      easy: [
        { q: "What is the capital of France?", opts: ["London", "Berlin", "Paris", "Rome"], ans: 2, exp: "Paris has been the capital of France since 987 AD." },
        { q: "How many continents are there?", opts: ["5", "6", "7", "8"], ans: 2, exp: "The 7 continents: Africa, Antarctica, Asia, Australia, Europe, North America, South America." },
        { q: "What is the largest ocean?", opts: ["Atlantic", "Indian", "Arctic", "Pacific"], ans: 3, exp: "The Pacific Ocean covers about 165 million km²." },
        { q: "How many days are in a leap year?", opts: ["365", "366", "364", "367"], ans: 1, exp: "Leap years have 366 days, with February having 29 days." },
        { q: "Which animal is called the 'King of the Jungle'?", opts: ["Tiger", "Elephant", "Lion", "Cheetah"], ans: 2, exp: "Lions are traditionally called the King of the Jungle." },
      ],
      medium: [
        { q: "What is the smallest country in the world?", opts: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"], ans: 2, exp: "Vatican City covers just 0.44 km²." },
        { q: "Which element has the chemical symbol 'Au'?", opts: ["Silver", "Aluminum", "Gold", "Argon"], ans: 2, exp: "Au comes from the Latin 'Aurum' meaning Gold." },
        { q: "Which country has the most natural lakes?", opts: ["USA", "Russia", "Canada", "Finland"], ans: 2, exp: "Canada contains over 60% of the world's natural lakes." },
        { q: "What is the longest river in the world?", opts: ["Amazon", "Mississippi", "Nile", "Yangtze"], ans: 2, exp: "The Nile River stretches approximately 6,650 km." },
        { q: "Which country invented pizza?", opts: ["USA", "Greece", "Italy", "Spain"], ans: 2, exp: "Pizza originated in Naples, Italy." },
      ],
      hard: [
        { q: "Which language has the most native speakers?", opts: ["English", "Spanish", "Hindi", "Mandarin Chinese"], ans: 3, exp: "Mandarin Chinese has approximately 920 million native speakers." },
        { q: "What is the Coriolis effect?", opts: ["Ocean current", "Deflection due to Earth's rotation", "Weather front", "Atmospheric pressure"], ans: 1, exp: "The Coriolis effect is the deflection of moving objects due to Earth's rotation." },
        { q: "What is the approximate size of the Sahara Desert?", opts: ["5 million km²", "7 million km²", "9.2 million km²", "11 million km²"], ans: 2, exp: "The Sahara covers ~9.2 million km²." },
        { q: "What is the deepest lake in the world?", opts: ["Caspian Sea", "Lake Superior", "Lake Baikal", "Lake Tanganyika"], ans: 2, exp: "Lake Baikal in Russia reaches a depth of 1,642 meters." },
        { q: "Who wrote the dystopian novel '1984'?", opts: ["Aldous Huxley", "George Orwell", "Franz Kafka", "Ernest Hemingway"], ans: 1, exp: "George Orwell wrote '1984', published in 1949." },
      ],
    },
  },
  tech: {
    name: "Technology",
    icon: "💻",
    questions: {
      easy: [
        { q: "What does 'HTML' stand for?", opts: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Method Language", "Home Tool Markup Language"], ans: 0, exp: "HTML = HyperText Markup Language." },
        { q: "What does 'CPU' stand for?", opts: ["Central Processing Unit", "Computer Personal Unit", "Core Processing Utility", "Central Program Unit"], ans: 0, exp: "CPU = Central Processing Unit — the brain of a computer." },
        { q: "Which company created the iPhone?", opts: ["Samsung", "Google", "Apple", "Microsoft"], ans: 2, exp: "Apple introduced the first iPhone in 2007." },
        { q: "What does 'URL' stand for?", opts: ["Uniform Resource Locator", "Universal Reference Link", "Unified Resource Language", "Unique Routing Label"], ans: 0, exp: "URL = Uniform Resource Locator." },
        { q: "What does 'RAM' stand for?", opts: ["Random Access Memory", "Read Access Module", "Run Application Memory", "Remote Access Mode"], ans: 0, exp: "RAM = Random Access Memory." },
      ],
      medium: [
        { q: "What is the main language for Android development?", opts: ["Swift", "Kotlin/Java", "C++", "Python"], ans: 1, exp: "Android apps use Kotlin (official) or Java." },
        { q: "What does 'API' stand for?", opts: ["Application Programming Interface", "Automated Process Integration", "Advanced Program Input", "Application Protocol Interface"], ans: 0, exp: "API = Application Programming Interface." },
        { q: "What is 'open source' software?", opts: ["Free software only", "Software with publicly available source code", "Cloud-based software", "Subscription software"], ans: 1, exp: "Open source means source code is publicly available." },
        { q: "What is a 'firewall'?", opts: ["Physical server protection", "Network security system", "A type of hard drive", "A programming language"], ans: 1, exp: "A firewall monitors and controls network traffic based on security rules." },
        { q: "What does 'SSD' stand for?", opts: ["Solid State Drive", "Super Speed Disk", "Static Storage Device", "Secure System Drive"], ans: 0, exp: "SSD = Solid State Drive — faster storage with no moving parts." },
      ],
      hard: [
        { q: "What is the time complexity of binary search?", opts: ["O(n)", "O(n²)", "O(log n)", "O(1)"], ans: 2, exp: "Binary search halves the search space each step: O(log n)." },
        { q: "What does DNS do?", opts: ["Stores files", "Translates domain names to IP addresses", "Routes packets", "Encrypts data"], ans: 1, exp: "DNS = Domain Name System — translates domains into IP addresses." },
        { q: "What is a 'race condition'?", opts: ["A performance benchmark", "Two threads accessing shared data causing unpredictable results", "A sorting algorithm issue", "A memory leak"], ans: 1, exp: "A race condition occurs when concurrent threads access shared data and the outcome depends on timing." },
        { q: "Key difference between TCP and UDP?", opts: ["TCP is faster, UDP is reliable", "TCP guarantees delivery, UDP is faster but unreliable", "They are the same", "TCP is for video only"], ans: 1, exp: "TCP guarantees delivery and order; UDP is faster but doesn't confirm delivery." },
        { q: "What does 'REST' stand for in REST API?", opts: ["Remote Execution State Transfer", "Representational State Transfer", "Relational Service Technology", "Resource Endpoint Standard Transfer"], ans: 1, exp: "REST = Representational State Transfer — an architectural style for HTTP-based APIs." },
      ],
    },
  },
};

export default DATA;
