import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Consultancy">
    <Container>
      <Title>
      Consultancy Natali Ruiz de Galarreta <Badge>2021-</Badge>
      </Title>
      <P>
        It is a landing page of a consultancy for entrepreneurs, professionals and anyone who has a business and wants to register their brand, as well as legal advice.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="http://natali.ruizdegalarreta.com.ar/" target="_blank">
          http://natali.ruizdegalarreta.com.ar/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Sass</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/consultorianatali_01.png" alt="Culsultoria Natali" />
      <WorkImage src="/images/works/consultorianatali_02.png" alt="Consultoria Natali" />
    </Container>
  </Layout>
)

export default Work
