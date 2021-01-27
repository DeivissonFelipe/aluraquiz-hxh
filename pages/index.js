import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  return (
    <QuizBackground backgroundImage={({ theme }) => theme.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={
              (e) => {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }
            }
            >
              <Input
                name="nomeDoUsuario"
                onChange={(e) => setName(e.target.value)}
                placeholder="Diz aí seu nome pra jogar :)"
                value={name}
              />
              {/* eslint-disable-next-line react/no-children-prop */}
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <h1>Quizes da Galera</h1>
          <p>Quiz 1</p>
          <p>Quiz 2</p>
          <p>Quiz 3</p>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/DeivissonFelipe/aluraquiz-hxh" />
    </QuizBackground>
  );
}
