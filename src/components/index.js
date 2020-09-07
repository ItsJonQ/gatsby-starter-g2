import React from "react"
import { Link } from "gatsby"
import { Spacer, Separator, Icon, Heading, HStack, Text, Elevation, VStack, Placeholder, Grid, CardBody, Button, Card } from "@wp-g2/components"
import { FiStar, FiArrowDown } from '@wp-g2/icons'
import { css, get } from '@wp-g2/styles';

export function PluginCard( { title = "Plugin" } ) {
	return (
		<Card m={ 3 } css={ "border-radius: 2px;" }>
			<CardBody css={ "padding: 0; border-radius: 2px;" }>
					<Grid columns={ 2 } templateColumns={ "50px auto" } align={ "start" } gap={ "0px" }>
						<Placeholder width={ 50 } height={ 50 } css={ "border-radius: 50%; margin: 12px 12px 0 !important;" } />
						<VStack css={ "padding: 12px 12px 6px 24px" }>
							<Heading as="h3" size={ 3 }>{ title }</Heading>
							<Text>by Author Name</Text>
						</VStack>
						<Separator m={ 1.5 } css={ "grid-column: 1 / span 2" } />
						<HStack css={ "grid-column: 1 / span 2; padding: 0 12px 6px;" } spacing={ 2 }>
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
							<Button as={ Link } to="/plugin">Add</Button>
						</HStack>
					</Grid>
			</CardBody>
			<Elevation value={ 2 } css={ "border-radius: 2px;" } isInteractive />
		</Card>
	);
}

export function PluginGrid() {
	return (
		<Grid columns={ 3 } gap={ "20px" }>
			<Spacer my={ 4 } css={ "grid-column: 1 / span 3" }>
				<HStack>
					<Heading size={ 2 } as={ "h3" }>Design</Heading>
					<Link to="/category">View all in Design</Link>
				</HStack>
			</Spacer>
			<PluginCard title={ "Plugin 1" } />
			<PluginCard title={ "Plugin 2" } />
			<PluginCard title={ "Plugin 3" } />
			<PluginCard title={ "Plugin 4" } />
			<PluginCard title={ "Plugin 5" } />
			<PluginCard title={ "Plugin 6" } />
			<Spacer my={ 4 } css={ "grid-column: 1 / span 3" }>
				<HStack>
					<Heading size={ 2 } as={ "h3" }>Marketing</Heading>
					<Link to="/category">View all in Marketing</Link>
				</HStack>
			</Spacer>
			<PluginCard title={ "Plugin 7" } />
			<PluginCard title={ "Plugin 8" } />
			<PluginCard title={ "Plugin 9" } />
			<Spacer my={ 4 } css={ "grid-column: 1 / span 3" }>
				<HStack>
					<Heading size={ 2 } as={ "h3" }>SEO</Heading>
					<Link to="/category">View all in SEO</Link>
				</HStack>
			</Spacer>               
			<PluginCard title={ "Plugin 10" } />
			<PluginCard title={ "Plugin 11" } />
			<PluginCard title={ "Plugin 12" } />
		</Grid>
	)
}