import React from 'react'
import Header from '../examples/Header'
import HeaderStatic from '../examples/HeaderStatic'
import Layout from '../components/layout'
import { graphql } from 'gatsby'


const examples = ({ data }) => {
    const {
        site:{
            siteMetadata:{author},
        },
    } = data
    return (
        <Layout>
            <p>Hello from Examples</p>
            <Header />
            <HeaderStatic/>
            <h5>author:{author}</h5>
        </Layout>
    )
}

export const data = graphql`
        query MyQuery {
            site {
            siteMetadata {
                author
                data
                description 
                person {
                age
                name 
                }
                title
            }
            }
        }
        

`
export default examples