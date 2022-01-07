import React, { } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";

import * as routes from "route/routes";
import { restQuizData } from "redux/action";

const HomePage = ({ restQuizData }) => {
    const history = useHistory();

    const handleBegin = () => {
        restQuizData();
        history.push(routes.QUIZ_PAGE);
    }

    return (
        <Grid container spacing={5} align="center">
            <Grid item xs={12}>
                <Typography variant="h3" >
                    Welcome to the Trivia Challenge!
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1">
                    You will be presented with 10 True or False questions.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1">
                    Can you score 100%?
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" onClick={handleBegin}>Begin</Button>
            </Grid>
        </Grid>
    )
}

export default connect(null, { restQuizData })(HomePage);