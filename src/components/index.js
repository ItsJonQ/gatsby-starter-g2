import React, { useState } from "react"
import { Link } from "gatsby"
import { Spacer, Heading, Text, Elevation, View, VStack, Card, Placeholder, Grid, CardBody, Button } from "@wp-g2/components"

export function PluginCard( { title } ) {
	return (
		<Card p={ 3 } m={ 3 }>
			<CardBody>
					<Grid columns={ 2 } templateColumns={ "50px auto" } align={ "start" } gap={ "16px" }>
						<Placeholder width={ 50 } height={ 50 } css={ "border-radius: 50%" } />
						<VStack>
							<Heading as="h3" size={ 3 }>{ title }</Heading>
							<Text>Description goes here.</Text>
						</VStack>
						<View css={ "grid-column: 2; text-align: right; text-decoration: none" }>
							<Button as={ Link } to="/plugin">Install</Button>
						</View>
					</Grid>
			</CardBody>
			<Elevation value={ 2 } isInteractive />
		</Card>
	);
}