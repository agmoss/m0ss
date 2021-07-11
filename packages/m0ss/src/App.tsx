import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
import React from "react";
import {
    BrowserRouter,
    Route,
    RouteComponentProps,
    Switch,
} from "react-router-dom";
import { theme as customTheme } from "three-ui";

import ArticleContainer from "./articles/containers/article";
import withHelmet from "./components/withHelmet";
import withPage from "./components/withPage";
import {
    WrappedDashboard,
    WrappedMedia,
    WrappedOffCircleWeb,
    WrappedProjectReadme,
    WrappedReactCirclesDemo,
    WrappedSignin,
} from "./pages";
import Landing from "./profile/containers/landing";
import { useThemeSelection } from "./theme/redux/hooks";
import { Paths } from "./utils/paths";

interface IMatchParams {
    slug: string;
}
type IMatchProps = RouteComponentProps<IMatchParams>;

const App = () => {
    const __theme__ = useThemeSelection();

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                ...customTheme,
                palette: {
                    type: __theme__.theme === "dark" ? "dark" : "light",
                    primary: {
                        ...customTheme.palette.primary,
                        main: __theme__.color,
                    },
                },
            }),
        [__theme__.theme, __theme__.color]
    );

    const WrappedLanding = withHelmet({
        title: "Andrew Moss",
        meta: {
            name: "Andrew Moss",
            content: "Andrew Moss Personal Website",
        },
    })(withPage(Landing));

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <WrappedLanding />
                    </Route>

                    <Route path={Paths.CIRCLES}>
                        <WrappedReactCirclesDemo />
                    </Route>
                    <Route path={Paths.OFFCIRCLE}>
                        <div
                            style={{
                                overflowX: "hidden",
                                overflowY: "hidden",
                            }}
                        >
                            <WrappedOffCircleWeb />
                        </div>
                    </Route>
                    <Route path={Paths.README}>
                        <WrappedProjectReadme />
                    </Route>
                    <Route path={Paths.SIGNIN}>
                        <WrappedSignin />
                    </Route>
                    <Route path={Paths.MEDIA}>
                        <WrappedMedia />
                    </Route>
                    <Route
                        path={`${Paths.CONTENT}/:slug`}
                        render={({ match }: IMatchProps) => {
                            return <ArticleContainer id={match.params.slug} />;
                        }}
                    />
                    <Route path={Paths.CONTENT}>
                        <WrappedDashboard />
                    </Route>
                    <Route>
                        <WrappedReactCirclesDemo />
                    </Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
