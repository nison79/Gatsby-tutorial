import React from 'react'
import Layout from '../components/layout'
import styles from '../components/blog.module.css'

const blog = () => {
    return (
        
        <Layout>
        <div className={styles.page}>
            <h1>this is blog page</h1>
            <p className = {styles.text}>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Sit iste architecto animi officiis minus ipsa inventore 
            velit totam, beatae, eius consectetur ipsam quia fugiat qui?
            </p>
        </div>    
        </Layout>
    )
}

export default blog
