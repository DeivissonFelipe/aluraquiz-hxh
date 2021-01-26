import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

export default function Home() {
  return (
    <QuizBackground backgroundImage={({theme}) => theme.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <input placeholder="Diz aí seu nome pra jogar :)"/>
            <button children="Jogar"/>
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
  )
}
