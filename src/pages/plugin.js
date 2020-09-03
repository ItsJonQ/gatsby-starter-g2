import React from "react"
import { Link } from "gatsby"
import { Separator, Tabs, Tab, TabList, TabPanel, Button, Alert, Alerts, Icon, Heading, Grid, Text, HStack, VStack, Card, CardBody, Placeholder, View, Spacer } from '@wp-g2/components'
import { ui } from "@wp-g2/styles"
import { FiArrowLeft } from '@wp-g2/icons'
import { Layout } from "../core"

function InfoCard( { title } ) {
	return (
		<Card>
			<CardBody css={ "height: 100%; padding: 16px" }>
				<VStack spacing={ 5 }>
					<Heading size={ 3 }>{ title }</Heading>
					<Placeholder height={ 200 } />
					<Text>Description goes here.</Text>
					<Spacer />
				</VStack>
			</CardBody>
		</Card>
	);
}

function Page() {
	return (
		<Layout>
			<View css={ "max-width: 900px; margin: 36px auto;" }>
				<Spacer my={ 5 }>
					<HStack spacing={ 5 } alignment="center">
						<Link to="/">
							<Icon icon={ <FiArrowLeft /> } />
						</Link>
						<Spacer>
							<Alerts>
								<Alert status="success">
									<Text>Your plugin has been activated</Text>
								</Alert>
							</Alerts>
						</Spacer>
					</HStack>
				</Spacer>
				<Spacer my={ 5 }>
					<Card>
						<CardBody css={ "padding: 0" }>
							<Placeholder width={ "100%" } height={ "300px" } />
							<HStack css={ "padding: 16px" } spacing={ 4 }>
								<Placeholder width={ "50px" } height={ "50px" } css={ "border-radius: 50%" } />
								<Spacer>
									<VStack>
										<Heading size={ 2 }>Plugin name</Heading>
										<Text>by <Link to="/">Plugin author</Link></Text>
									</VStack>
								</Spacer>
								<Button variant= { "primary" }>Install</Button>
							</HStack>
						</CardBody>
					</Card>
				</Spacer>
				<Tabs>
					<TabList css={ "width: 33%" }>
						<Tab>Description</Tab>
						<Tab>Reviews</Tab>
						<Tab>Support</Tab>
					</TabList>
					<TabPanel><InfoCard title="Description" /></TabPanel>
					<TabPanel><InfoCard title="Reviews" /></TabPanel>
					<TabPanel><InfoCard title="Support" /></TabPanel>
				</Tabs>
			</View>
		</Layout>
	)
}

export default Page
