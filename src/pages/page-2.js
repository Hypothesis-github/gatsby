import React from "react"
import { Link } from "gatsby"
import { createApolloFetch } from 'apollo-fetch'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'

const SecondPage = () => {

const [qldata , useQlata] = React.useState([{Description : `` , Image : {path : ``}}])
const token = "a46b077bfd58e78d92e85bbbba4b90";
const uri = `http://hfp.co.ir/cockpit/api/graphql?token=${token}`;
const apolloFetch = createApolloFetch({ uri });
const query = `{
   allHello { Description ,  Name , Image { path }  }
}`;

apolloFetch({ query })
.then(d => useQlata(d.data.allHello));

const createMarkup =()=> {
  return {__html: qldata[0].Description};
}

// console.log(qldata)

  return(
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <div dangerouslySetInnerHTML={createMarkup()} />
    <Img fluid={`http://hfp.co.ir/${qldata[0].Image.path}`} />

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)}

// export const query = graphql`
// query cockpitHe2($skip: Int!, $limit: Int!) {
//   allCockpitHello(limit: $limit skip: $skip) {
//     edges {
//       node {
//         Description{
//           value
//         }
//         Name {
//           value
//         }
//       }
//     }
//   }
// }`





export default SecondPage
