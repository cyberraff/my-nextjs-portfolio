import Image from 'next/image'
import Layout from '../components/Layout'
import Head from 'next/head'
import PageTitle from '../components/PageTitle'
import { getProjects } from '../services/index'
import { grpahCMSImageLoader } from '../lib/utils'
import { postcss } from 'daisyui/src/lib/postcss-prefixer'

const portfolio = ({ projects }) => {
    const title = 'Projects 👨‍💻'
    const subtitle = 'Some of the projects i have worked on in the past.'
    return (
        <Layout title={title} description={subtitle}>
            <div className='w-full'>
                <Head>
                    <title>Portfolio | Cyber-Raff</title>
                    <meta
                        name='description'
                        content="Raphael Ejeogo's Portfolio page"
                    />

                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <main className='w-full'>
                    <div className='w-full'>
                        <div className='mb-24 w-full '>
                            <div className='bg-blog-bg h-[400px]  bg-cover bg-center  text-white  px-4 flex'>
                                <div className='container my-auto   items-center'>
                                    <PageTitle
                                        title={title}
                                        subtitle={subtitle}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* BLOG */}
                        <div className=' px-5 py-5'>
                            <div>
                                <h2 className=' text-4xl py-5'>Projects</h2>

                                <div className='text-lg'>
                                    <p className=' leading-loose font-light pb-16 '>
                                        Here is a list of some of the projects i
                                        have worked on in the past.
                                    </p>
                                </div>
                                <div className=' '>
                                    {projects.map((project) => {

                                        return (
                                            <div key={project.id} className='sm:flex pb-14'>
                                                <div className=" ">
                                                    <Image
                                                        unoptimized
                                                        loader={grpahCMSImageLoader}
                                                        alt={project.image}
                                                        height='200'
                                                        width='200'
                                                        src={project.image.url}
                                                    />
                                                </div>
                                                <div className='w-3/5 sm:ml-6 mt-6 sm:mt-0'>
                                                    <h4 className='text-3xl pb-4 font-normal'> {project.name}</h4>
                                                    <p className='font-normal'>{project.description}</p>

                                                    <div className='pt-5 '>
                                                        <a
                                                            className='btn btn-ghost mr-2'
                                                            href={project.sourceCode}
                                                            target='_blank'
                                                            rel='noopener noreferrer nofollow'>
                                                            Source Codes
                                                        </a>
                                                        <a
                                                            className='btn btn-ghost '
                                                            href={project.demo}
                                                            target='_blank'
                                                            rel='noopener noreferrer nofollow'>
                                                            Live Site
                                                        </a>
                                                    </div>

                                                </div>
                                                {/* <div className="ml-12  ">
                                                    <Image
                                                        unoptimized
                                                        loader={grpahCMSImageLoader}
                                                        alt={project.image}
                                                        height='200'
                                                        width='200'
                                                        src={project.image.url}
                                                    /> */}
                                                {/* <img
                                                        className='h-48 w-52'
                                                        src={project.image.url}
                                                        alt='project image'
                                                    /> */}

                                            </div>

                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* BLOG */}
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default portfolio

// Fetch data at build time
export async function getStaticProps() {
    const projects = await getProjects()
    return {
        props: { projects },
        revalidate: 43200 // In 12 hrs
    }
}
