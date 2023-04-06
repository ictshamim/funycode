import React from 'react'
import { Layout, Stack, Main } from '@layout'
import CardList from '@components/CardList'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import Testimonial from '@widgets/Testimonial'
import NewsletterExpanded from '@widgets/NewsletterExpanded'
import Hero from '../components/Hero/Hero'
import TextList from '../../../../flow-ui/flow-ui-components/src/TextList'

const Posts = ({ data: { posts = {}, featuredPosts = {} }, ...props }) => {
  const { pageContext: { services = {} } = {} } = props

  return (
    <Layout {...props}>
      <Seo title='Power of Programming' />

      <Stack>
        <Main>
          <Hero />
        </Main>
      </Stack>
      <Divider />
      <Stack>
        <Main>
          {posts.group.map(group => (
            <>
              <Divider />
              <CardList
                nodes={group.nodes}
                limit={8}
                variant='horizontal-aside'
                title={group.categoryName}
                key={group.categoryName}
                columns={[1, 3, 3, 4]}
                withTitleLink
              />
            </>
          ))}
        </Main>
      </Stack>

        <Divider />

        <Stack>
            <Main>
                {services.mailchimp && (
                    <>
                        <Divider />
                        <NewsletterExpanded simple />
                    </>
                )}
            </Main>
        </Stack>

        <Divider/>
      <Stack>
        <Main>
          {featuredPosts.nodes && (
            <CardList
              limit={12}
              nodes={featuredPosts.nodes}
              variant={['horizontal-md', 'vertical']}
              columns={[1, 2, 2, 4]}
              omitCategory={
                props.pageContext &&
                props.pageContext.collectionType === 'category'
              }
            />
          )}
        </Main>
      </Stack>

    </Layout>
  )
}

export default Posts
