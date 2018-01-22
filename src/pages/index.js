import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "../styles/sanitize.css";
import "../styles/global.css";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <Layout>
        <HomeHero />
        <ul>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <li key={post.id}>
                  <h1>
                    <Link to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                  </h1>
                  <date>{post.frontmatter.date}</date>
                  {/* <p>{post.excerpt}</p> */}
                </li>
              );
            })}
        </ul>
      </Layout>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
