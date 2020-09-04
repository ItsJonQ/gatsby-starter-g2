import React from "react"
import { Link } from "gatsby"
import { Button, Heading, Dropdown, DropdownMenu, DropdownTrigger, DropdownMenuItem, Text, HStack, VStack, Spacer, View, Card, Placeholder, Grid, CardBody, SearchInput } from "@wp-g2/components"
import { ui } from "@wp-g2/styles"
import { Layout } from "../core"
import { PluginCard, PluginGrid } from '../components'

function Page() {
	return (
		<Layout title="Plugins">
			<View css={ "max-width: 900px; margin: 36px auto;" }>
				<Spacer my={ 8 }>
					<Heading size={ 1 }>Browse Plugins</Heading>
					<Text>Plugins are extensions that add useful features to your site.</Text>
				</Spacer>
				<Spacer my={ 8 }>
					<HStack>
						<Spacer>
							<SearchInput />
						</Spacer>
						<Dropdown>
							<DropdownTrigger>Filter by</DropdownTrigger>
							<DropdownMenu>
								<DropdownMenuItem>Design</DropdownMenuItem>
								<DropdownMenuItem>Marketing</DropdownMenuItem>
								<DropdownMenuItem>SEO</DropdownMenuItem>
							</DropdownMenu>
						</Dropdown>
					</HStack>
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
						<PluginCard title={ "Featured Plugin 1" } />
						<PluginCard title={ "Featured Plugin 2" } />
					</Grid>
				</Spacer>
				<PluginGrid />
			</View>
		</Layout>
	)
}

export default Page
