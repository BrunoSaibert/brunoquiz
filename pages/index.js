import Logo from "../src/components/Logo";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import Widget from "../src/components/Widget";
import GitHubCorner from "../src/components/GitHubCorner";
import Footer from "../src/components/Footer";

import db from "../db.json";

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
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
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/BrunoSaibert" />
    </QuizBackground>
  );
}
