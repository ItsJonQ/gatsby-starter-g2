import React from "react"
import { Link } from "gatsby"
import { Heading, Text, VStack } from "@wp-g2/components"
import { ui } from "@wp-g2/styles"
import { Layout } from "../core"

function Page() {
  return (
    <Layout title="Home">
      <VStack alignment="center" css={[ui.padding(4), ui.frame.height("80vh")]}>
        <VStack css={[ui.frame.width(640), ui.alignment.center]}>
          <Heading size={1}>
            <span aria-label="wave" role="img">
              👋
            </span>{" "}
            Hello
          </Heading>
          <Text>Welcome to the G2 Components Gatsby Starter Kit!</Text>
          <Text size="caption" variant="muted">
            Start editing to see some magic happen!
          </Text>
          <Link to="/page-2">Go to Page 2</Link>
        </VStack>
      </VStack>
    </Layout>
  )
}

export default Page
