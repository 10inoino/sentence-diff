import Diff from './Diff'
import './App.css'
import { useState } from 'react'
import {
  Box,
  Heading,
  Stack,
  Textarea,
  Text,
  Center,
  SimpleGrid,
  Link,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

function App() {
  const [baseText, setBaseText] = useState<string>('')
  const [targetText, setTargetText] = useState<string>('')

  return (
    <Stack m={3}>
      <Center mt="30">
        <Heading as="h1" size="4xl">
          Let's Dictation!
        </Heading>
      </Center>
      <Center>
        <SimpleGrid columns={2} spacing={10} width="100%">
          <Box>
            <Text fontSize="2xl" mb="2">
              Your Answer
            </Text>
            <Textarea
              value={baseText}
              onChange={(v) => setBaseText(v.target.value as string)}
              size="lg"
              height="250px"
              resize="none"
              bg="white"
              color="black"
            />
          </Box>
          <Box>
            <Text fontSize="2xl" mb="2">
              Transcript
            </Text>
            <Textarea
              value={targetText}
              onChange={(v) => setTargetText(v.target.value as string)}
              size="lg"
              height="250px"
              resize="none"
              bg="white"
              color="black"
            />
          </Box>
        </SimpleGrid>
      </Center>
      <Center>
        <ChevronDownIcon boxSize="20" />
      </Center>
      <Stack>
        <Text
          bg="white"
          height="250px"
          padding="3"
          borderRadius="md"
          color="black"
          overflow="scroll"
        >
          <Diff string1={baseText} string2={targetText} mode="words" />
        </Text>
      </Stack>
      <Center mt="3">
        <Text>
          created by{' '}
          <Link href="https://twitter.com/ino_aka_matty" isExternal>@ino_aka_matty</Link>
        </Text>
      </Center>
    </Stack>
  )
}

export default App
