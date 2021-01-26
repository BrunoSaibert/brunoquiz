import Logo from "../src/components/Logo";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import Widget from "../src/components/Widget";
import GitHubCorner from "../src/components/GitHubCorner";

import db from "../db.json";

export default function Home() {
  return (
    <QuizBackground>
      <QuizContainer>
        <Logo />

        <Widget
          header={
            <>
              <h1>{db.title}</h1>
            </>
          }
        >
          <p>{db.description}</p>
        </Widget>

        <Widget>
          <p>{db.description}</p>
        </Widget>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/BrunoSaibert" />
    </QuizBackground>
  );
}
