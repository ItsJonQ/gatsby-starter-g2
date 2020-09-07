import React from "react"
import { Link } from "gatsby"
import { View, Text } from "@wp-g2/components"
import { Layout } from "../core"

function Page() {
	return (
		<Layout title={ "Checkout" }>
			<View>
				<Text>This is a checkout screen. <Link to="/index">Back to plugins.</Link></Text>
			</View>
		</Layout>
	)
}

export default Page