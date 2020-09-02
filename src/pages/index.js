import React from "react"
import { Link } from "gatsby"
import { Heading, Text, HStack, Elevation, VStack, Spacer, View, Card, Placeholder, Grid, CardBody } from "@wp-g2/components"
import { ui } from "@wp-g2/styles"
import { Layout } from "../core"

function PluginCard( { title } ) {
	return (
		<Card>
			<CardBody>
				<Link to="/plugin">
					<Grid columns={ 2 } css={ "justify-content: start" }>
						<Placeholder width={ 50 } height={ 50 } />
						<VStack>
							<Heading size={3}>{ title }</Heading>
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
			<View css={ "max-width: 900px; margin: auto;" }>
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
					<Card>
						<CardBody>
							<Heading size={ 3 }>Featured Category</Heading>
							<Placeholder width={ 150 } height={ 150 } />
						</CardBody>
					</Card>
				</Spacer>
				<Grid columns={ 3 }>
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
