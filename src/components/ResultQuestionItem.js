import React, { } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { getCleanString } from 'utils';

const ResultQuestionItem = ({ question, answer }) => {
  return (
    <Grid key={question.question} item xs={12}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Typography variant="body1" align='center'>
            {question.correct_answer.toLowerCase() === answer.toLowerCase() ? '+' : '-'}
          </Typography>
        </Grid>
        <Grid item xs={11} align='left'>
          <Typography variant="body1">
            {getCleanString(question.question)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default React.memo(ResultQuestionItem);