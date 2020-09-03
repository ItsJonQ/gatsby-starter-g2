import React from "react"
import { Link } from "gatsby"
import { Heading, Text, SearchInput, HStack, Icon, Spacer, View, Card, Placeholder, Grid, CardBody, Button } from "@wp-g2/components"
import { ui } from "@wp-g2/styles"
import { Layout } from "../core"
import { FiStar } from '@wp-g2/icons'
import { PluginCard } from '../components'

function FeaturedPluginCard() {
	return (
		<Card>
			<CardBody>
				<Placeholder width={ 30 } height={ 30 } css={ "border-radius: 50%" }>
					<Icon icon={ <FiStar /> } />
				</Placeholder>
				<HStack>
					<Heading size={ 4 }>Featured plugin</Heading>
					<Button as={ Link } to="/plugin">Install</Button>
				</HStack>
			</CardBody>
		</Card>
	)
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
					<SearchInput />
				</Spacer>
				<Spacer my={ 8 }>
					<HStack>
						<Spacer>
							<Heading size={ 2 }>Featured</Heading>
						</Spacer>
						<Button as={ Link } to="/install">Add new</Button>
					</HStack>
				</Spacer>
				<Spacer my={ 8 }>
					<Grid columns={ 2 } rows={ 2 } templateColumns={ "66% auto" } gap={ 20 }>
						<Card css={ "grid-row: 1 / span 2; text-align: center;" }>
							<CardBody>
								<Placeholder width={ 150 } height={ 150 } css={ "border-radius: 50%; margin: 0 auto 20px;" } />
								<Text size={ 14 } >Featured category</Text>
								<Heading size={ 3 } css={ "margin: 8px 0 16px" }>
									<Link to="/category">
										Search Engine Optimization
									</Link>
								</Heading>
							</CardBody>
						</Card>
						<FeaturedPluginCard />
						<FeaturedPluginCard />
					</Grid>
				</Spacer>
				<Grid columns={ 3 } gap={ "20px" }>
					<Spacer my={ 4 } css={ "grid-column: 1 / span 3" }>
						<HStack>
							<Heading size={ 2 } as={ "h2" }>Design</Heading>
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
							<Heading size={ 2 }>Marketing</Heading>
							<Link to="/category">View all in Marketing</Link>
						</HStack>
					</Spacer>
					<PluginCard title={ "Plugin 7" } />
					<PluginCard title={ "Plugin 8" } />
					<PluginCard title={ "Plugin 9" } />
					<Spacer my={ 4 } css={ "grid-column: 1 / span 3" }>
						<HStack>
							<Heading size={ 2 }>SEO</Heading>
							<Link to="/category">View all in SEO</Link>
						</HStack>
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
