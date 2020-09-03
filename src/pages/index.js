import React from "react"
import { Link } from "gatsby"
import { Heading, Dropdown, DropdownMenu, DropdownTrigger, DropdownMenuItem, Text, HStack, VStack, Spacer, View, Card, Placeholder, Grid, CardBody, SearchInput } from "@wp-g2/components"
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
					<Card>
						<CardBody>
							<Link to="/checkout">Upgrade to install plugins</Link>
						</CardBody>
					</Card>
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
				<Spacer>
					<Heading size={ 2 }>Featured</Heading>
				</Spacer>
				<Spacer my={ 8 }>
					<Grid rows={ 2 } columns={ 2 } templateColumns={ "66% auto" } gap={ "16px" }>
						<Card css={ "grid-row: 1 / span 2" }>
							<CardBody>
								<VStack>
									<Placeholder width={ 150 } height={ 150 } css={ "border-radius: 50%; margin: 0 auto 20px;" } />
									<Text isBlock align="center" size={ 14 }>Featured category</Text>
									<Heading size={ 3 } css={ "margin: 8px 0 16px" } align={ "center" } isBlock>
										<Link to="/category">
											Search Engine Optimization
										</Link>
									</Heading>
								</VStack>
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
