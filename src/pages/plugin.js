import React from "react"
import { Link } from "gatsby"
import { Separator, Button, Alert, Alerts, Icon, Heading, Grid, Text, HStack, VStack, Card, CardBody, Placeholder, View, Spacer } from '@wp-g2/components'
import { ui } from "@wp-g2/styles"
import { FiArrowLeft } from '@wp-g2/icons'
import { Layout } from "../core"

function InfoCard( { title } ) {
  return (
    <Card>
      <CardBody css={ "height: 100%" }>
        <Grid columns={ 2 }>
          <VStack>
            <Heading size={2}>{ title }</Heading>
            <Text>Description goes here.</Text>
            <Spacer />
            <View>Expand section</View>
          </VStack>
          <Placeholder width={ 500 } height={ 200 }/>
        </Grid>
      </CardBody>
    </Card>
  );
}

function Page() {
  return (
    <Layout>
      <View css={ "max-width: 900px; margin: 36px auto;" }>
        <Spacer>
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
          <Spacer py={ 10 }>
            <Heading align="center">Plugin name</Heading>
          </Spacer>
          <HStack>
            <Text>Plugin creator</Text>
            <HStack>
              <Button>Activated</Button>
              <Button variant="primary">Edit</Button>
            </HStack>
          </HStack>
        </Spacer>
        <Separator />
        <View css="max-width: 900px; margin: 0 auto;">
          <VStack spacing={ 5 }>
            <InfoCard title="Description" />
            <InfoCard title="Support" />
            <InfoCard title="Reviews" />
          </VStack>
        </View>
      </View>
    </Layout>
  )
}

export default Page
