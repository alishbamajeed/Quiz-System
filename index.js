#!  /usr/bin/env  node
import inquirer from 'inquirer';
const questions = [
    {
        id: 1,
        question_text: 'Which type is assigned to variables by default in TypeScript if no type is explicitly defined?',
        answers: [
            { id: 1, answer_text: 'number', is_correct: false },
            { id: 2, answer_text: 'any', is_correct: true },
            { id: 3, answer_text: 'string', is_correct: false },
            { id: 4, answer_text: 'boolean', is_correct: false }
        ]
    },
    {
        id: 2,
        question_text: 'Which of the following is used to define a user-defined type in TypeScript?',
        answers: [
            { id: 1, answer_text: 'interface', is_correct: true },
            { id: 2, answer_text: 'module', is_correct: false },
            { id: 3, answer_text: 'namespace', is_correct: false },
            { id: 4, answer_text: 'enum', is_correct: false }
        ]
    },
    {
        id: 3,
        question_text: 'What is the output of the following code: `let x: unknown = 10; console.log((x as number) + 1);`?',
        answers: [
            { id: 1, answer_text: '11', is_correct: true },
            { id: 2, answer_text: '101', is_correct: false },
            { id: 3, answer_text: 'Error', is_correct: false },
            { id: 4, answer_text: 'undefined', is_correct: false }
        ]
    },
    {
        id: 4,
        question_text: 'What is the purpose of the "never" type in TypeScript?',
        answers: [
            { id: 1, answer_text: 'To define a variable that can hold any value', is_correct: false },
            { id: 2, answer_text: 'To define a function that never returns', is_correct: true },
            { id: 3, answer_text: 'To define a type that is always true', is_correct: false },
            { id: 4, answer_text: 'To define a variable that can only hold null or undefined', is_correct: false }
        ]
    }
    // Add more questions as needed
];
const askQuestions = async () => {
    let score = 0;
    for (const question of questions) {
        const answerChoices = question.answers.map(answer => ({ name: answer.answer_text, value: answer.id }));
        const userAnswer = await inquirer.prompt([
            {
                type: 'list',
                name: 'answer',
                message: question.question_text,
                choices: answerChoices
            }
        ]);
        const selectedAnswer = question.answers.find(answer => answer.id === userAnswer.answer);
        if (selectedAnswer?.is_correct) {
            score++;
        }
    }
    console.log(`\nYour score is: ${score} out of ${questions.length}`);
};
askQuestions();
