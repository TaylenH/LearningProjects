import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default ({ data }) => (
    <Layout>
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>
            were the only site running on your computer dedicated to
            photos and videos of pandas eating lots of food.
        </p>
    </Layout>
);

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;