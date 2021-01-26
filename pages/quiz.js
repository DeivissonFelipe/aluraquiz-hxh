import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

function quiz() {
    return (
        <QuizBackground backgroundImage={({theme}) => theme.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Quiz</p>
            </Widget.Content>
          </Widget>
  
          <Widget>
            <h1>Quizes da Galera</h1>
            <p>Lorem ipsum dolor sit amet...</p>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/DeivissonFelipe/aluraquiz-hxh" />
      </QuizBackground>
    )
}

export default quiz
