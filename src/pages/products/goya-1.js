import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => {
    return <div>
        <h2>{data.contentfulProduct.price}</h2>
        <h2>{data.contentfulProduct.title.title}</h2>
        
    </div>
}
export const query = graphql`
{
  contentfulProduct {
    price
    title {
    title
    }
 }
}
`

export default ComponentName
