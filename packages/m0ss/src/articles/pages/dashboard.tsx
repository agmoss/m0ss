import {
    AppBar,
    Button,
    CssBaseline,
    Divider,
    Link,
    List,
    ListItem,
    ListItemText,
    Slide,
    Theme,
    Toolbar,
    Typography,
    createStyles,
    makeStyles,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { IArticleTarget } from "blog-types";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IconButton } from "three-ui";
import { Paths } from "../../utils/paths";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            position: "relative",
            backgroundColor: theme.palette.primary.main,
        },
        title: {
            flex: 1,
        },
    })
);

interface IArticleCard {
    article: IArticleTarget;
}

const ArticleCard = ({ article }: IArticleCard) => {
    const history = useHistory();

    return (
        <>
            <Divider />
            <ListItem>
                <ListItemText
                    primary={article.title}
                    secondary={article.description}
                />

                {article._markdown.content ? (
                    <Button
                        onClick={() =>
                            history.push(`${Paths.CONTENT}/${article.slug}`)
                        }
                    >
                        About
                    </Button>
                ) : null}
                {article.internalLink ? (
                    <Button
                        onClick={() => history.push(`/${article.internalLink}`)}
                    >
                        Live
                    </Button>
                ) : null}
                {article.externalLink ? (
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={article.externalLink}
                        style={{ textDecoration: "none" }}
                        color="inherit"
                    >
                        <Button> External</Button>
                    </Link>
                ) : null}
            </ListItem>
            <Divider />
        </>
    );
};

interface IDashboard {
    articles: IArticleTarget[];
}

const Dashboard = ({ articles }: IDashboard) => {
    const classes = useStyles();
    const history = useHistory();

    const [checked, setChecked] = React.useState(true);

    const exitTimeout = 300;
    const [enterTimeout, setEnterTimeout] = useState(400);

    const handleChange = () => {
        setChecked((prev) => !prev);
        setTimeout(() => {
            history.push("/");
        }, exitTimeout);
    };

    useEffect(() => {
        if (history.action === "POP") {
            setEnterTimeout(0);
        }
    }, [history.action]);

    return (
        <>
            <CssBaseline />
            <div>
                <Slide
                    direction="up"
                    in={checked}
                    timeout={{ enter: enterTimeout, exit: exitTimeout }}
                >
                    <div>
                        <AppBar className={classes.appBar}>
                            <Toolbar>
                                <Typography
                                    variant="h4"
                                    className={classes.title}
                                >
                                    Content
                                </Typography>
                                <IconButton
                                    edge="start"
                                    color="secondary"
                                    onClick={() => {
                                        handleChange();
                                    }}
                                    aria-label="close"
                                >
                                    <Close />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <List>
                            {articles.map((a) => {
                                return <ArticleCard key={a.id} article={a} />;
                            })}
                        </List>
                    </div>
                </Slide>
            </div>
        </>
    );
};

export default Dashboard;
