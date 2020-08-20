import React from "react"
import { Link } from "gatsby"
import { Button, Heading, VStack } from "@wp-g2/components"
import { ui } from "@wp-g2/styles"
import { Layout } from "../core"

function Page() {
  return (
    <Layout title="Page 3">
      <VStack alignment="center" css={[ui.padding(4), ui.frame.height("80vh")]}>
        <VStack css={[ui.frame.width(640), ui.alignment.center]}>
          <Heading size={1}>Page 3</Heading>
          <Button as={Link} to="/">
            Go Home
          </Button>
        </VStack>
      </VStack>
    </Layout>
  )
}

export default Page
