import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>나는 알고리즘 시러...</h2>
      <p>
        링크 테스트 <Link to="/contact">요기닷</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
