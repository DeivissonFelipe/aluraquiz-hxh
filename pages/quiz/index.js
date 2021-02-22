import React from 'react';
import db from '../../db.json';
import QuizScreen from '../../src/screens/Quiz/index';

export default function quizPage() {
  return (
    <QuizScreen
      externalQuestions={db.questions}
      externalBg={db.bg}
    />
  );
}
