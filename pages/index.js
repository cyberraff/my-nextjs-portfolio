import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

export default function Home() {
    const [posta, setPosta] = useState({})
    const [loading, setLoading] = useState(true)

    // setPosta(articles)
    // setLoading(false)
    // useEffect(() => {
    //     getAllArticle()
    //     setPosta(response.data)
    //     setLoading(false)
    // }, [])
    const title = ` Hello,  I'm Raphael 👋`
    const subtitle = `A Front-End Developer, content writer, Gamer and  Blogger`
    return (
        <Layout title='Home' description={`${title}-${subtitle}`}>
            <div className='w-full'>
                <Head>
                    <title>Cyber-Raff</title>
                    <meta
                        name='description'
                        content="Raphael Ejeogo's Portfolio website"
                    />

                    <link rel='icon' href='/favicon.ico' />
                </Head>

                <main>
                    <div className=''>
                        <div className='mb-24'>
                            <div className='bg-hm-bg h-[400px] bg-cover bg-center  text-white  px-4 flex'>
                                <div className='container my-auto  items-center'>
                                    <PageTitle
                                        title={title}
                                        subtitle={subtitle}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* ABOUT */}

                        <div className=' px-5 py-5'>
                            <div>
                                <h2 className=' text-4xl py-5'>About</h2>

                                <div className='text-lg'>
                                    <p className=' leading-loose font-light pb-16 '>
                                        Raphael Ejeogo (Cyber-Raff) is a Self-Taught Web Developer currently finishing his Computer Science Degree at the University of Port Harcourt
                                    </p>
                                    <p>
                                        I have been working on web development since the beginning of 2019, and I have a very good understanding of a variety of programming languages and frameworks. which includes, Javascript, ReactJS, HTML/CSS, Bootstrap, Tailwind CSS, and Sass/Scss currently I am working my way to becoming a full stack developer.
                                    </p>
                                    <br />

                                    <p>
                                        I am also a student at the University of Port Harcourt, where I am studying to get my bachelor&apos;s Degree in Computer Science,<br />
                                        I have also finished a couple of online programs on coding and programming, (Web Development to be precise)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* BLOG */}

                        <div className='px-5 py-5'> FEATURED POST SECTION (coming soon)</div>
                        {/* PORTFOLIO */}
                        <div className='px-5 py-5'> FEATURED PROJECT SECTION (coming soon)</div>

                        <div></div>
                    </div>
                </main>

                <footer className='flex-1 py-1 justify-center align-cennter border-t border-t-[#eaeaea'>
                    <a
                        className='flex justify-center align-center flex-grow'
                        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                        target='_blank'
                        rel='noopener noreferrer'>
                        Powered by{' '}
                        <span className=''>
                            <Image
                                src='/vercel.svg'
                                alt='Vercel Logo'
                                width={72}
                                height={16}
                            />
                        </span>
                    </a>
                </footer>
            </div>
        </Layout>
    )
}

// export async function getStaticProps(context) {
//     const data = await getAllArticle()
//     return {
//         props: { data }, // will be passed to the page component as props
//     }
// }

export const getStaticProps = async () => {
    return { props: {} }
}
