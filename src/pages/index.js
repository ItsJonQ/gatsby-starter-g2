import React from "react"
import { Link } from "gatsby"
import { Button, Heading, Dropdown, DropdownMenu, DropdownTrigger, DropdownMenuItem, Text, HStack, VStack, Spacer, View, Card, Placeholder, Grid, CardBody, SearchInput } from "@wp-g2/components"
import { Layout } from "../core"
import { PluginCard, PluginGrid } from '../components'
import { useBoolState } from 'use-enhanced-state';

function Page() {
	
	const [ upgraded, setUpgraded ] = useBoolState( false );

	const showUpgraded = ( state ) => {
		state ? setUpgraded.true() : setUpgraded.false();
	};

	return (
		<Layout title="Plugins">
			<View m={5} css={ "max-width: 900px; margin: 36px auto !important;" }>
				<Spacer my={ 8 }>
					<HStack  spacing={8} alignment="edge">
						<Heading size={ 1 }>Browse Plugins</Heading>
						{ ! upgraded &&
							<Button onClick={ () => showUpgraded( true ) }>Upgrade to add plugins</Button>
						}
						{ upgraded &&
							<Button as={ Link } to={ "/upload" } >Upload plugin</Button>
						}
					</HStack>	
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
				{ ! upgraded ? (
					<View>
						<Spacer my={ 8 }>
							<HStack>
								<Spacer>
									<Heading size={ 2 }>Featured</Heading>
								</Spacer>
							</HStack>
						</Spacer>
						<Spacer my={ 8 }>
							<Grid rows={ 2 } columns={ 2 } templateColumns={ "66% auto" } gap={ "16px" }>
								<Card css={ "grid-row: 1 / span 2; text-align: center; border-radius: 2px !important;" }>
									<CardBody css={ "border-radius: 2px !important;" }>
										<VStack>
											<Placeholder width={ 150 } height={ 150 } css={ "border-radius: 2px; margin: 0 auto 20px !important;" } />
											<Text size={ 14 }>Featured category</Text>
											<Heading size={ 3 } css={ "margin: 8px 0 16px" }>
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
					</View>
				) : (
					<View>
						<Spacer my={ 8 }>
							<HStack>
								<Spacer>
									<Heading size={ 2 }>Featured</Heading>
								</Spacer>
							</HStack>
						</Spacer>
						<Spacer my={ 8 }>
							<Grid rows={ 2 } columns={ 2 } templateColumns={ "66% auto" } gap={ "16px" }>
								<Card css={ "grid-row: 1 / span 2; text-align: center; border-radius: 2px !important;" }>
									<CardBody css={ "border-radius: 2px !important;" }>
										<VStack>
											<Placeholder width={ 150 } height={ 150 } css={ "border-radius: 2px; margin: 0 auto 20px !important;" } />
											<Text size={ 14 }>Featured category</Text>
											<Heading size={ 3 } css={ "margin: 8px 0 16px" }>
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
					</View>
				)}
				<PluginGrid />
			</View>
		</Layout>
	)
}

export default Page
