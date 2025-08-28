/*
We can use extends with interface not use with type.
We can use type with union not with Interface.
We can type with intersection very easily.
We cannot interface with intersection.
 */

// Interview Questions.
type InterviewQuestion = {
    id: number;
    question: string;
    answer: string;
}

type InterviewQuestionWithDifficulty = InterviewQuestion & {
    difficulty: 'easy' | 'medium' | 'hard';
}

// we can use type with union.
type InterviewDetails= InterviewQuestion | InterviewQuestionWithDifficulty;
// Interface cannot use union directly.
// interface Shape = "circle" | "square" ❌ (Error)

const interViewer: InterviewDetails = {
    id: 1,
    question: "What is TypeScript?",
    answer: "TypeScript is a superset of JavaScript that adds static types.",
    difficulty: "easy"
};

console.log("Interview Details:", interViewer);