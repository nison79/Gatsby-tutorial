import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import Img from '../images/4.jpg'
import Image from 'gatsby-image'

const getImages = graphql `
{
    fixed: file(relativePath: {eq: "1.jpg"}) {
    childImageSharp {
        fixed (width:300) {
        ...GatsbyImageSharpFixed
        }
    }
    }
    fluid: file(relativePath: {eq: "2.jpg"}) {
    childImageSharp {
        fluid {
        ...GatsbyImageSharpFluid
        }
    }
    }
}

`

const Images = () => {
    const data = useStaticQuery(getImages);
    console.log(data);
    return (
        <section className = "images">
            <article className ="single-image">
                <h3>basic image</h3>
                <img src = {Img} width="50%"></img>
                <h2>content</h2>
            </article>

            <article className ="single-image">
                <h3>fixed image/blur</h3>
                <Image fixed={data.fixed.childImageSharp.fixed}/>
                <h2>content</h2>
            </article>

            <article className ="single-image">
                <h3>fluid image/svg</h3>
                <Image fluid={data.fluid.childImageSharp.fluid}/>
                <h2>content</h2>
            </article>
        </section>
    )
}

export default Images
