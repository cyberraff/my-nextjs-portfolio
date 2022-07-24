import Head from 'next/head'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
const title = 'Blog'
const subtitle = 'My Blog Page '
const blog = () => {
    return (
        <Layout title={title} description={subtitle}>
            <div>
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
                            <div>
                                <h2 className=' text-4xl py-5'>About</h2>

                                <div className='text-lg'>
                                    <p className=' leading-loose font-light pb-16 '>
                                        Raphael Ejeogo (Cyber-Raff) is a
                                        Self-Taught Web Developer currently
                                        finishing his Computer Science Degree in
                                        the University of Port Harcourt
                                    </p>
                                    <p>
                                        I have been working on web development
                                        since the beginning of 2019, and I have
                                        a very good understanding on a variety
                                        of programming languages and frameworks.
                                        which includes, Javascript, ReactJS,
                                        HTML/CSS, Bootstrap, Tailwind CSS,
                                        Sass/Scss currently i am working my way
                                        to becoming a full stack developer.
                                    </p>
                                    <br />

                                    <p>
                                        I am also a student of the university of
                                        Port Harcourt , where i am studying to
                                        get my Bachelors Degree in computer
                                        Science, <br />I have also finished
                                        couple of online programs on coding and
                                        programming, (Web Development to be
                                        precise)
                                    </p>
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

export default blog
