import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Button } from 'theme-ui'
import Section from '@components/Section'

/**
 * Shadow me to add your own content
 */

const styles = {
  heading: {
    mb: 0,
    mt: -3,
    span: {
      color: `blue`
    }
  },
  running: {
    color: `omegaDark`,
    fontWeight: `body`,

    width: `1`
  }
}

export default () => (
  <>
    <Section>
      <Heading variant='h1' sx={styles.heading}>
        <span>Learn Programming with Best Tutorial & Exercise!</span>
      </Heading>
      <Heading variant='h3' sx={styles.running}>
        “Everybody should learn to program a computer, because it teaches you how to think.”
        –Steve Jobs.
      </Heading>
    </Section>
    <Box variant='buttons.group' sx={styles.buttons}>
      <Button as={Link} to='/category/basic-c-tutorial/'>
        Learn C
      </Button>
      <Button as={Link} to='/category/cplusplus-tutorial/'>
        Learn C++
      </Button>
      <Button as={Link} to='/category/java-tutorial'>
        Learn Java
      </Button>
    </Box>
  </>
)
