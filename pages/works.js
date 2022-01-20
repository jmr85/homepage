import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// import consultoriaNatali from '../public/images/works/consultorianatali.png'
// import thumbEcommerce01 from '../public/images/works/ecommerce_01.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="consultancy" title="Consultancy" thumbnail="/images/works/consultorianatali.png">
            It is a landing page developed for an independent consultancy
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="ecommerce"
            title="Ecommerce"
            thumbnail="/images/works/ecommerce_01.png"
          >
            Ecommerce is specialized in the sale of products for developers such as programming books and laptop sales
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="FileSystemWatcherGUI"
            thumbnail="/images/works/monitor.png"
            title="FileSystemWatcherGUI"
          >
            The FileSystemWatcher Class monitors the file system and raises events whenever a specified Directory or file within a specified Directory changes
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
