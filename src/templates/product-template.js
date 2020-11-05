import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import Image from 'gatsby-image'


const ComponentName = ({ data:{product:{price,title:{title},image:{fixed},info:{info}}} }) => {
    return <Layout>
        <div style={{textAlign:"center"}}>
            <Link to = '/product'>Back to Products</Link>
            <h1>{title}</h1>
        </div>
        <section className ='single-product'>
            <article>
                <Image fixed={fixed} alt = {title} />
            </article>
            <article>
                <h1>{title}</h1>
                <h3>${price}</h3>
                <p>{info}</p>
                <button>Add to Cart</button>
            </article>
        </section>

    </Layout>
}

export const query = graphql`
    query GetSingleProduct($slug:String)    {
    product: contentfulProduct(slug: {eq: $slug}) {
      title {
        title
      }
      price
      image {
        fixed (width:300){
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName
