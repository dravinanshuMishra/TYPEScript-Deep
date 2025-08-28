"use strict";
/*
We can use extends with interface not use with type.
We can use type with union not with Interface.
We can type with intersection very easily.
We cannot interface with intersection.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Interface cannot use union directly.
// interface Shape = "circle" | "square" ❌ (Error)
const interViewer = {
    id: 1,
    question: "What is TypeScript?",
    answer: "TypeScript is a superset of JavaScript that adds static types.",
    difficulty: "easy"
};
console.log("Interview Details:", interViewer);
