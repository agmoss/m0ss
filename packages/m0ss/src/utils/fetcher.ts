import { Variables } from "graphql-request/dist/types";
import { client } from "./gqlClient";
import Cookies from "universal-cookie";

export const fetcher = <F, P>(q: string, a?: F) => client.request<P>(q, a);
export const fetcher2 = <F, P>(q: string, a: Variables) =>
    client.request<P>(q, a);

export const loginFetcher = <F, P>(q: string, a?: F) => {
    const cookies = new Cookies();
    client.setHeader("Authorization", `Bearer ${cookies.get("ahhhh")}`);
    client.request<P>(q, a);
};
