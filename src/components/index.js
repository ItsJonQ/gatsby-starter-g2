import React, { useState } from "react"
import { Link } from "gatsby"
import { Spacer, Separator, Heading, HStack, Text, Elevation, View, VStack, Card, Placeholder, Grid, CardBody, Button } from "@wp-g2/components"

export function PluginCard( { title } ) {
	return (
		<Card p={ 3 } m={ 3 }>
			<CardBody>
					<Grid columns={ 2 } templateColumns={ "50px auto" } align={ "start" } gap={ "8px" }>
						<Placeholder width={ 50 } height={ 50 } css={ "border-radius: 50%" } />
						<VStack>
							<Heading as="h3" size={ 3 }>{ title }</Heading>
							<Text>Description goes here.</Text>
						</VStack>
						<Separator my={ 0 } css={ "grid-column: 1 / span 2" } />
						<HStack css={ "grid-column: 1 / span 2" }>
							<Text>Reviews</Text>
							<Button as={ Link } to="/plugin">Install</Button>
						</HStack>
					</Grid>
			</CardBody>
			<Elevation value={ 2 } isInteractive />
		</Card>
	);
}