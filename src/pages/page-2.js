import React from "react"
import { Link } from "gatsby"
import { Heading, VStack } from "@wp-g2/components"
import { ui } from "@wp-g2/styles"
import { Layout } from "../core"

function Page() {
  return (
    <Layout title="Page 2">
      <VStack alignment="center" css={[ui.padding(4), ui.frame.height("80vh")]}>
        <VStack css={[ui.frame.width(640), ui.alignment.center]}>
          <Heading size={1}>Page 2</Heading>
          <Link to="/page-3">Go to Page 3</Link>
        </VStack>
      </VStack>
    </Layout>
  )
}

export default Page
