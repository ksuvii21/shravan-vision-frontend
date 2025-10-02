// Mock ISL Signs Data - In production, this would be sourced from Kaggle datasets
// Example: Indian Sign Language Dataset from Kaggle
export const islSigns = [
  {
    id: 1,
    word: "Hello",
    category: "Greetings",
    difficulty: "Beginner",
    animation: "wave_hand", // Reference to animation
    description: "Wave your hand side to side",
    points: 10,
    unlocked: true,
  },
  {
    id: 2,
    word: "Thank You",
    category: "Greetings",
    difficulty: "Beginner",
    animation: "touch_chin",
    description: "Touch your chin with fingertips",
    points: 10,
    unlocked: true,
  },
  {
    id: 3,
    word: "Please",
    category: "Politeness",
    difficulty: "Beginner",
    animation: "circle_chest",
    description: "Make a circular motion over your chest",
    points: 15,
    unlocked: false,
  },
  // Add more signs...
  {
    id: 4,
    word: "Water",
    category: "Objects",
    difficulty: "Intermediate",
    animation: "drink_motion",
    description: "Pretend to drink from a cup",
    points: 20,
    unlocked: false,
  },
  {
    id: 5,
    word: "Food",
    category: "Objects",
    difficulty: "Intermediate",
    animation: "eat_motion",
    description: "Pretend to eat with a spoon",
    points: 20,
    unlocked: false,
  },
  // Continue with more signs for progressive learning
];

export const signCategories = [
  "Greetings",
  "Politeness",
  "Objects",
  "Emotions",
  "Family",
  "Numbers",
  "Colors",
  "Animals",
  "Actions",
  "Places",
];

export const difficultyLevels = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert",
];
