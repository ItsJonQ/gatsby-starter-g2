import React from "react"
import { Link } from "gatsby"
import { Heading, Text, HStack, Elevation, VStack, Icon, Spacer, View, Card, Placeholder, Grid, CardBody, Button } from "@wp-g2/components"
import { ui } from "@wp-g2/styles"
import { Layout } from "../core"
import { FiStar } from '@wp-g2/icons'

function FeaturedPluginCard() {
	return (
		<Card>
			<CardBody>
				<VStack>
					<Spacer py={ 8 }>
						<Placeholder width={ 30 } height={ 30 } css={ "border-radius: 50%" }>
							<Icon icon={ <FiStar /> } />
						</Placeholder>
					</Spacer>
					<HStack>
						<Heading size={ 4 }>Featured plugin</Heading>
						<Button>Install</Button>
					</HStack>
				</VStack>
			</CardBody>
		</Card>
	)
}

function PluginCard( { title } ) {
	return (
		<Card p={ 3 } m={ 3 }>
			<CardBody>
				<Link to="/plugin">
					<Grid columns={ 2 } templateColumns={ "50px auto" } align={ "start" } gap={ "16px" }>
						<Placeholder width={ 50 } height={ 50 } css={ "border-radius: 50%" } />
						<VStack>
							<Heading as="h3" size={ 3 }>{ title }</Heading>
							<Text>Description goes here.</Text>
						</VStack>
					</Grid>
				</Link>
			</CardBody>
			<Elevation value={ 2 } isInteractive />
		</Card>
	);
}

function Page() {
	return (
		<Layout title="Plugins">
			<View css={ "max-width: 900px; margin: 36px auto;" }>
				<Spacer my={ 8 }>
					<Heading size={ 1 }>Browse Plugins</Heading>
					<Text>Plugins are extensions that add useful features to your site.</Text>
				</Spacer>
				<Spacer my={ 8 }>
					<Card>
						<CardBody>
							<Text>Search...</Text>
						</CardBody>
					</Card>
				</Spacer>
				<Spacer my={ 8 }>
					<Grid columns={ 2 } rows={ 2 } templateColumns={ "66% auto" } gap={ 20 }>
						<Card css={ "grid-row: 1 / span 2; text-align: center;" }>
							<CardBody>
								<Placeholder width={ 150 } height={ 150 } css={ "border-radius: 50%; margin: 0 auto 20px;" } />
								<Text size={ 14 } >Featured category</Text>
								<Heading size={ 3 } css={ "margin: 8px 0 16px" }>Search Engine Optimization</Heading>
							</CardBody>
						</Card>
						<FeaturedPluginCard />
						<FeaturedPluginCard />
					</Grid>
				</Spacer>
				<Grid columns={ 3 } gap={ "20px" }>
					<Spacer my={ 4 } css={ "grid-column: 1 / span 3" }>
						<Heading size={ 2 } as={ "h2" }>Design</Heading>
					</Spacer>
					<PluginCard title={ "Plugin 1" } />
					<PluginCard title={ "Plugin 2" } />
					<PluginCard title={ "Plugin 3" } />
					<PluginCard title={ "Plugin 4" } />
					<PluginCard title={ "Plugin 5" } />
					<PluginCard title={ "Plugin 6" } />
					<Spacer my={ 4 } css={ "grid-column: 1 / span 3" }>
						<Heading size={ 2 }>Marketing</Heading>
					</Spacer>
					<PluginCard title={ "Plugin 7" } />
					<PluginCard title={ "Plugin 8" } />
					<PluginCard title={ "Plugin 9" } />
					<Spacer my={ 4 } css={ "grid-column: 1 / span 3" }>
						<Heading size={ 2 }>SEO</Heading>
					</Spacer>               
					<PluginCard title={ "Plugin 10" } />
					<PluginCard title={ "Plugin 11" } />
					<PluginCard title={ "Plugin 12" } />
				</Grid>
			</View>
		</Layout>
	)
}

export default Page
