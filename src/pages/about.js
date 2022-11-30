import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout pageTitle="About me">
            <p>Hi there! I created this site</p>
        </Layout>
    )
}

export const Head = () => <title>About me</title>

export default AboutPage;