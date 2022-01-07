import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { QuestionBox } from 'components';
import * as routes from "route/routes";
import { getQuestions, setQuizAnswers } from "redux/action";

const QuizPage = ({ questions, isLoading, answers, getQuestions, setQuizAnswers }) => {
  const history = useHistory();
  const currentIndex = answers ? answers.length === 10 ? 9 : answers.length : 0;

  useEffect(() => {
    if (!questions || !questions.length) {
      getQuestions();
    }
  }, [questions, getQuestions]);

  useEffect(() => {    
    if (answers && answers.length === 10) {
        history.push(routes.RESULT_PAGE)
    }
  }, [questions, answers, history]);

  const handleAnswer = (answer) => {
    setQuizAnswers([...answers, answer])
  }

  if (isLoading) {
    return (<Typography variant="subtitle1" align="center">
      Loading...
    </Typography>)    
  }

  if (!isLoading && !questions.length) {
    return (<Typography variant="subtitle1" align="center">
      Something went wrong.
    </Typography>)   
  }

  return (
      <Grid container spacing={5} align="center">
        <Grid item xs={12}>
          <QuestionBox question={questions[currentIndex]} />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Button variant="outlined" onClick={() => handleAnswer('true')}>
                True
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" onClick={() => handleAnswer('false')}>
                False
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {`${currentIndex + 1} of 10`}
        </Grid>
      </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    questions: state.quiz.questions,
    isLoading: state.quiz.isQuizLoading,
    answers: state.quiz.answers
  };
};

export default connect(mapStateToProps, { getQuestions, setQuizAnswers })(QuizPage);