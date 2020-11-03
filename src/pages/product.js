import React from 'react'
import Layout from '../components/layout'
import styles from '../components/product.module.css'

const product = () => {
    return (
        <Layout>
            <div className = {styles.page}>
                <h1>this is product page</h1>
                <p className = {styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Alias aliquid ducimus odio eius magni dicta et, 
                sapiente laboriosam placeat nihil dignissimos? Nisi
                nesciunt dicta ex.
                </p>
             </div>
        </Layout>
    )
}

export default product
