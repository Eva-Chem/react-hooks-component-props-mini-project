const blogData = [
  {
    id: 1,
    title: "React Basics",
    date: "August 1, 2025",
    preview: "Learn the basics of React, components, JSX, and props.",
    content: [
      "React is a JavaScript library for building user interfaces.",
      "It allows you to create reusable UI components.",
      "JSX is a syntax extension that looks like HTML but works in JavaScript.",
      "Props are how you pass data from parent to child components.",
      "State allows components to manage internal data."
    ],
    minutes: 7
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    date: "August 10, 2025",
    preview: "Dive into advanced React patterns and best practices.",
    content: [
      "Higher Order Components (HOCs) allow code reuse in React.",
      "Render props pattern helps share behavior between components.",
      "Custom hooks let you extract and reuse stateful logic.",
      "Context API provides a way to pass data without props drilling.",
      "React performance optimization techniques include memoization and lazy loading."
    ],
    minutes: 35
  }
];

export default blogData;
