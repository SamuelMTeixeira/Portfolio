import { Flex, Grid } from '@chakra-ui/react'
import Card from './Card'
import { useQuery } from 'react-query'
import ProjectsSection from './ProjectsSection'
import { fetchProjects } from '@/features/projects'
import Skeleton from './Skeleton'

export default function Projects() {
  const { isLoading, data } = useQuery('projects', fetchProjects)

  if (isLoading || !data) {
    return (
      <ProjectsSection>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)',
          }}
          gap={{ base: 4, lg: 6 }}
          gridAutoFlow="dense"
          justifyContent="center"
          alignItems="center"
        >
          <Skeleton />
          <Skeleton />
        </Grid>
      </ProjectsSection>
    )
  }

  return (
    <ProjectsSection>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(2, 1fr)',
        }}
        gap={{ base: 4, lg: 6 }}
        gridAutoFlow="dense"
        justifyContent="center"
        alignItems="center"
      >
        {data.map(({ name, description, image, repo, preview }, index) => (
          <Flex key={index} justifyContent={'center'} alignItems="center">
            <Card
              key={index}
              title={name}
              description={description}
              image={image}
              preview={preview}
              repo={repo}
            />
          </Flex>
        ))}
      </Grid>
    </ProjectsSection>
  )
}
