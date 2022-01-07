import React, { } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { getCleanString } from 'utils';

const useStyles = makeStyles(theme => ({
  questionBox: {
    border: '1px solid black'
  },
}))

const QuestionBox = ({ question }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          {question.category}
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.questionBox}>
        <Typography variant="body" align="center">
          {getCleanString(question.question)}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default React.memo(QuestionBox);