import React from "react"
import { Link } from "gatsby"
import { Heading, Text, SearchInput, HStack, Icon, Spacer, View, Card, Placeholder, Grid, CardBody, Button } from "@wp-g2/components"
import { ui } from "@wp-g2/styles"
import { Layout } from "../core"

function Page() {
	return (
		<Layout title="Plugins">
			<View css={ "max-width: 900px; margin: 36px auto;" }>
				<Spacer my={ 8 }>
					<Heading size={ 1 }>Add New</Heading>
				</Spacer>
			</View>
		</Layout>
	)
}

export default Page
