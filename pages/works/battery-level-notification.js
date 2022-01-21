import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="battery-level-notification">
    <Container>
      <Title>
      Battery Level Notification <Badge>2020</Badge>
      </Title>
      <P>
      ElectronJS Windows Desktop App
      </P>
      <P>
        Built with 🛠️
      </P>
      <P>
        Javascript
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/jmr85/battery-level-notification" target="_blank">
          https://github.com/jmr85/battery-level-notification <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, ElectronJS</span>
        </ListItem>
      </List>

      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading> */}

      {/* <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/ecommerce_01.png" alt="ecommerce" />
        <WorkImage src="/images/works/ecommerce_02.png" alt="ecommerce" />
      </SimpleGrid> */}
      <WorkImage src="/images/works/battery_level.png" alt="Battery Level Notification" />
    </Container>
  </Layout>
)

export default Work
