import React from 'react';
import {
    BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { HomePage, QuizPage, ResultPage } from 'pages';
import * as routes from "./routes";

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: '64px'
    },
}))

const MainRoutes = () => {
    const classes = useStyles();

    return (
        <Router>
            <Container fixed className={classes.container}>
                <Switch>
                    <Route path={routes.HOME_PAGE} component={HomePage} exact />
                    <Route path={routes.QUIZ_PAGE} component={QuizPage} />
                    <Route path={routes.RESULT_PAGE} component={ResultPage} />
                </Switch>
            </Container>
        </Router>
    )
}

export default MainRoutes
