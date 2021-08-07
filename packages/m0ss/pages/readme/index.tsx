import  ProjectReadme  from "../../src/pages/ProjectReadMe";
import React from "react";
import { getText } from "../../src/getData";
import withPage from "../../src/components/withPage";

export async function getStaticProps(context: any) {
    const md = await getText("https://raw.githubusercontent.com/agmoss/m0ss/master/README.md");
    return {
        props: { md: md },
    };
}

export default withPage(ProjectReadme);
