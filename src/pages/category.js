import React from "react"
import { View, Spacer, Heading, Text, SearchInput, Grid } from "@wp-g2/components"
import { ui } from "@wp-g2/styles"
import { Layout } from "../core"
import { PluginCard } from '../components'

function Page() {
	return (
		<Layout title="Plugins - Design">
			<View css={ "max-width: 900px; margin: 36px auto;" }>
				<Spacer my={ 8 }>
					<Heading size={ 1 }>Browse Plugins</Heading>
					<Text>Plugins are extensions that add useful features to your site.</Text>
				</Spacer>
				<Spacer my={ 8 }>
					<SearchInput />
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
					<PluginCard title={ "Plugin 7" } />
					<PluginCard title={ "Plugin 8" } />
					<PluginCard title={ "Plugin 9" } />              
					<PluginCard title={ "Plugin 10" } />
					<PluginCard title={ "Plugin 11" } />
					<PluginCard title={ "Plugin 12" } />
				</Grid>
			</View>
		</Layout>
	)
}

export default Page
