import { fetchResumes } from '@/features/resumes/services/fetchResumes'
import { Flex } from '@chakra-ui/react'
import { IconLink } from '@components/atoms'
import { GitHub, Linkedin, FileText } from 'react-feather'
import { useQuery } from '@tanstack/react-query'

export default function Aside() {
  const { isLoading, data } = useQuery({
    queryKey: ['resumes'],
    queryFn: fetchResumes,
  })

  if (isLoading || !data) {
    return (
      <Flex
        as="aside"
        position={'fixed'}
        left={9}
        direction={'column'}
        display={{ base: 'none', md: 'flex' }}
      >
        <Flex direction={'column'} justify={'center'} height={'100vh'} gap={4}>
          <IconLink
            href="https://github.com/SamuelMTeixeira"
            target="_blank"
            icon={<GitHub size={20} />}
            label={'github'}
          />

          <IconLink
            href="https://www.linkedin.com/in/SamuelMTeixeira"
            target="_blank"
            icon={<Linkedin size={20} />}
            label={'Linkedin'}
          />
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex
      as="aside"
      position={'fixed'}
      left={9}
      direction={'column'}
      display={{ base: 'none', md: 'flex' }}
    >
      <Flex direction={'column'} justify={'center'} height={'100vh'} gap={4}>
        <IconLink
          href="https://github.com/SamuelMTeixeira"
          target="_blank"
          icon={<GitHub size={20} />}
          label={'github'}
        />

        <IconLink
          href="https://www.linkedin.com/in/SamuelMTeixeira"
          target="_blank"
          icon={<Linkedin size={20} />}
          label={'Linkedin'}
        />

        <IconLink
          href={data[0].pdf}
          target="_blank"
          icon={<FileText size={20} />}
          label={'CV'}
        />
      </Flex>
    </Flex>
  )
}
