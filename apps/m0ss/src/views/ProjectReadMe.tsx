// @ts-nocheck
import { withMarkdownView } from "@m0ss/core";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

import { IStr } from "../data";

const Root = styled("div")(({ theme }) => ({
    "& h1": {
        ...theme.typography.h4,
        paddingBottom: theme.spacing(2),
    },
}));

export const _ProjectReadme = ({ str }: IStr) => {
    const ProjectReadmeView = withMarkdownView(str);

    return (
        <Root>
            <ProjectReadmeView />
            <Grid
                container
                spacing={5}
                direction="column"
                alignItems="center"
                justifyContent="center"
            ></Grid>
        </Root>
    );
};
