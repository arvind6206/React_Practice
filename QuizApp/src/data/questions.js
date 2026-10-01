const questions = [
  {
    id: 1,
    question: "Which hook is used to manage state in a functional component?",
    options: ["useEffect", "useState", "useContext", "useRef"],
    answer: "useState"
  },
  {
    id: 2,
    question: "Which hook is commonly used to perform side effects in React?",
    options: ["useState", "useMemo", "useEffect", "useCallback"],
    answer: "useEffect"
  },
  {
    id: 3,
    question: "How do you pass data from a parent component to a child component?",
    options: ["Using props", "Using state", "Using reducers", "Using events"],
    answer: "Using props"
  },
  {
    id: 4,
    question: "Which method is commonly used to render a list of elements in React?",
    options: [".filter()", ".reduce()", ".map()", ".find()"],
    answer: ".map()"
  },
  {
    id: 5,
    question: "What is JSX?",
    options: [
      "A JavaScript database",
      "A syntax extension for JavaScript",
      "A CSS framework",
      "A React package manager"
    ],
    answer: "A syntax extension for JavaScript"
  },
  {
    id: 6,
    question: "Which hook is used to access a value from React Context?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    answer: "useContext"
  },
  {
    id: 7,
    question: "What happens when a component's state changes?",
    options: [
      "The component is deleted",
      "The component re-renders",
      "The browser restarts",
      "Nothing happens"
    ],
    answer: "The component re-renders"
  },
  {
    id: 8,
    question: "Which prop helps React identify elements in a list?",
    options: ["id", "key", "index", "ref"],
    answer: "key"
  },
  {
    id: 9,
    question: "Which hook can be used to store a mutable value without causing a re-render?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    answer: "useRef"
  },
  {
    id: 10,
    question: "Which hook is used to memoize a calculated value?",
    options: ["useMemo", "useState", "useEffect", "useContext"],
    answer: "useMemo"
  }
];

export default questions;