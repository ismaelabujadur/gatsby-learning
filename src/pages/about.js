import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
    return (
        <Layout pageTitle="About me">
            <p>Hi there! I created this site</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About"></Seo>

export default AboutPage;