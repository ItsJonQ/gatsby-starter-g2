import React from "react"
import { Link } from "gatsby"
import { Spacer, Separator, Icon, Heading, HStack, Text, Elevation, View, VStack, Card, Placeholder, Grid, CardBody, Button } from "@wp-g2/components"
import { FiStar, FiArrowDown } from '@wp-g2/icons'

export function PluginCard( { title = "Plugin" } ) {
	return (
		<Card m={ 3 }>
			<CardBody css={ "padding: 0" }>
					<Grid columns={ 2 } templateColumns={ "50px auto" } align={ "start" } gap={ "0px" }>
						<Placeholder width={ 50 } height={ 50 } css={ "border-radius: 50%; margin: 12px 12px 0" } />
						<VStack css={ "padding: 12px 12px 6px 24px" }>
							<Heading as="h3" size={ 3 }>{ title }</Heading>
							<Text>by Author Name</Text>
						</VStack>
						<Separator my={ 0 } css={ "grid-column: 1 / span 2" } />
						<HStack css={ "grid-column: 1 / span 2; padding: 0 12px 12px" } spacing={ 2 }>
							<HStack justify={ "start" } spacing={ 1 }>
								<Icon icon={ <FiArrowDown /> } size={ 12 } />
								<Text css={ "margin-right: 8px" }>800k</Text>
							</HStack>
							<Spacer>
								<HStack justify={ "start" } spacing={ 1 }>
									<Icon icon={ <FiStar/> } size={ 12 } />
									<Text>4.3</Text>
								</HStack>
							</Spacer>
							<Button as={ Link } to="/plugin">Install</Button>
						</HStack>
					</Grid>
			</CardBody>
			<Elevation value={ 2 } isInteractive />
		</Card>
	);
}