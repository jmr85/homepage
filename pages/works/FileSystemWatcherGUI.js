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
  <Layout title="FileSystemWatcherGUI">
    <Container>
      <Title>
        Ecommerce <Badge>2021</Badge>
      </Title>
      <P>
      The FileSystemWatcher Class monitors the file system and raises events whenever a specified Directory or file within a specified Directory changes
      </P>
      <P>
      This class can watch for changes within the directory to include sub directories and can monitor directories on a local machine, a network drive, or a remote computer.  
      </P>
      <p>
      For example, each time a new file has been created, the event triggers a popup with the description of the file and the date.
      </p>
      <P>
        Built with 🛠️
      </P>
      <P>
        C#
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/jmr85/FileSystemWatcherGUI" target="_blank">
          https://github.com/jmr85/FileSystemWatcherGUI <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#</span>
        </ListItem>
      </List>

      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading> */}

      {/* <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/ecommerce_01.png" alt="ecommerce" />
        <WorkImage src="/images/works/ecommerce_02.png" alt="ecommerce" />
      </SimpleGrid> */}
      <WorkImage src="/images/works/monitor.png" alt="FileSystemWatcherGUI" />
      <WorkImage src="/images/works/watcher.png" alt="watcher" />
    </Container>
  </Layout>
)

export default Work
