import React from 'react'
import { Layout, Stack, Main, Sidebar } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContactForm from '@widgets/ContactForm'
import ContactInfo from '@widgets/ContactInfo'
import Commitment from '@widgets/Commitment'
import { Card, Text } from 'theme-ui'

const PageContact = props => (
  <Layout {...props}>
    <Seo title='Contact' />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header="About"
        />
        <Text>
          <p>I am a programmer and I like to do programming. I have completed my Bachelor of Science
          (B.Sc Engg.) and Master of Science (M.Sc Engg.) from a reputed university. During my study
          I have realized the importance of programming. Coding forces brain to think about a problem deeply,
          apply some logic and then providing a solution for a particular problem.
            <br></br>An analog would be a musician, first learning their instrument. The musician starts out by learning how to
            play each of the notes, and practices and practices, and increases their skill level, and
            if they learn enough and practice hard enough, can become an expert professional. If they
            work particularly hard at it, they become expert in many instruments, since there are some
            common elements in playing any instrument.Every time you face a
          new challenge, you need to use your brain, you may have to make your own rule and you need to
          follow a logical approach. If you know programming then it will be easy to solve your real life
            problem. This site (www.funycode.com) has been built to help people for learning programming.</p>
        </Text>

        <Divider />

      </Main>

    </Stack>
  </Layout>
)

export default PageContact
