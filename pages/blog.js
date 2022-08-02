import Head from 'next/head'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

import PostCard from '../components/PostCard'
import { getPosts } from '../services/index'

const title = 'Blog'
const subtitle = 'My Blog Page '
const blog = ({ posts }) => {
    return (
        <Layout title={title} description={subtitle}>
            <div className='w-full'>
                <Head></Head>
                <main className='w-full'>
                    <div className='w-full'>
                        <div className='mb-24 w-full '>
                            <div className='bg-blog-bg h-[400px] bg-cover bg-center  text-white  px-4 flex'>
                                <div className='container my-auto  items-center'>
                                    <PageTitle
                                        title={title}
                                        subtitle={subtitle}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* BLOG */}
                        <div className=' px-5 py-5'>
                            <h2 className=' text-2xl py-5'>Here you will find all the topics i have written about through my web development journey.</h2>
                            {/* <div className='text-lg'>
                                <p className=' leading-loose font-light pb-16 text-xl '>
                                    Here you will find all the topics i have written about through my web development journey.
                                </p>
                            </div> */}
                        </div>
                        {posts.map((post, index) => (
                            <PostCard key={index} post={post.node} />
                        ))}
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default blog


export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
        props: { posts },
    };
}
