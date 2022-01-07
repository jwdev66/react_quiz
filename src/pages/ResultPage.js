import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";

import { restQuizData } from "redux/action";
import * as routes from "route/routes";
import { ResultQuestionItem } from 'components';

const ResultPage = ({ questions, answers, restQuizData }) => {
  const history = useHistory();

  useEffect(() => {
    if (!questions || !questions.length)
        history.push(routes.HOME_PAGE);

    if (!answers || answers.length < 10) {
        history.push(routes.QUIZ_PAGE)
    }
  }, [questions, answers, history]);

  const getRightCount = () => {
    return questions.filter((question, index) => question.correct_answer.toLowerCase() === answers[index].toLowerCase()).length
  }

  const handleReset = () => {
    restQuizData();
    history.push(routes.HOME_PAGE);
  }

  if (questions && answers && questions.length === answers.length) {
    return (
      <Grid item container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            You scored
          </Typography>
          <Typography variant="h4" align="center">
            {`${getRightCount()}/10`}
          </Typography>
        </Grid>
        <Grid container spacing={2} align="center">
          {
            questions.map((question, index) => (
              <ResultQuestionItem key={question.question} question={question} answer={answers[index]} />
            ))
          }
        </Grid>
        <Grid item xs={12} align="center">
          <Button variant="outlined" onClick={handleReset}>
            PLAY AGAIN?
          </Button>
        </Grid>
      </Grid>
    )
  }
  else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.quiz.questions,
    answers: state.quiz.answers
  };
};

export default connect(mapStateToProps, { restQuizData })(ResultPage);