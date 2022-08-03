import React from 'react'
import Layout from './Layout'
import moment from 'moment'
import Head from 'next/head'
import Link from 'next/link'
const title = 'Post Detail'
const subtitle = 'My Blog Page Post Detail'
const PostDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type, title) => {
        let modifiedText = text
        let modifiedTitle = title

        if (obj) {
            if (obj.bold) {
                modifiedText = <b key={index}>{text}</b>
            }

            if (obj.italic) {
                modifiedText = <em key={index}>{text}</em>
            }

            if (obj.underline) {
                modifiedText = <u key={index}>{text}</u>
            }
            if (obj.code) {
                modifiedText = <li key={index}>{text}</li>
            }
        }

        switch (type) {
            case 'heading-three':
                return (
                    <h3 key={index} className='text-2xl font-semibold mb-4'>
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </h3>
                )
            case 'link':
                return (
                    <p key={index} className='mb-8 text-lg'>
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </p>
                )
            case 'paragraph':
                return (
                    <p key={index} className='mb-8 text-lg'>
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </p>
                )

            // case 'text':
            //     return (
            //         <ul key={index} className='mb-8 text-lg'>
            //             {modifiedText.map((item, i) => (
            //                 <React.Fragment key={i}>{item}</React.Fragment>
            //             ))}
            //         </ul>
            //     )
            // case 'text':
            //     return (
            //         <li key={index} className='mb-8 text-lg'>
            //             {modifiedText.map((item, i) => (
            //                 <React.Fragment key={i}>{item}</React.Fragment>
            //             ))}
            //         </li>
            //     )
            case 'code-block':
                return (
                    <pre
                        key={index}
                        className='mb-8 text-sm  m-4 bg-gray-200 dark:bg-gray-700 p-4'>
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </pre>
                )
            case 'heading-four':
                return (
                    <h4 key={index} className='text-xl font-semibold mb-4'>
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </h4>
                )
            case 'heading-five':
                return (
                    <h5 key={index} className='text-lg font-semibold mb-4'>
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </h5>
                )
            case 'heading-six':
                return (
                    <h6 key={index} className='text-md font-semibold mb-4'>
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </h6>
                )
            case 'image':
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                )
            default:
                return modifiedText
        }
    }

    return (
        <>
            <Layout title={title} description={subtitle}>
                <div className='w-full'>
                    <Head>
                        <title>
                            {post.title} , {post.excerpt}
                        </title>
                        <meta name='description' content='  {post.excerpt}' />

                        <link rel='icon' href='/favicon.ico' />
                    </Head>
                    <main className='w-full'>
                        <div className='w-full'>
                            <div className=' shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
                                <div className='relative overflow-hidden shadow-md mb-6 h-[480px]'>
                                    <img
                                        src={post.coverImage.url}
                                        alt=''
                                        className='object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg'
                                    />
                                </div>
                                <div className='px-4 lg:px-0'>
                                    <div className='flex items-center mb-8 w-full'>
                                        <div className='flex md:flex  justify-center lg:mb-0 lg:w-auto mr-8 items-center'>
                                            <img
                                                alt={post.author.name}
                                                className='align-middle rounded-full h-[30px] w-[30px]'
                                                src={post.author.picture.url}
                                            />
                                            <p className='inline align-middle text-gray-900 ml-2  dark:text-gray-50  font-medium text-lg'>
                                                {post.author.name}
                                            </p>
                                        </div>
                                        <div className='font-medium text-gray-900  dark:text-gray-50 '>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='h-6 w-6 inline mr-2 text-pink-500'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke='currentColor'>
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth='2'
                                                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                                                />
                                            </svg>
                                            <span className='align-middle'>
                                                {moment(post.createdAt).format(
                                                    'MMM DD, YYYY',
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    <h1 className='mb-8 text-3xl font-semibold'>
                                        {post.title}
                                    </h1>
                                    <div className='font-normal'>
                                        {post.content.raw.children.map(
                                            (typeObj, index) => {
                                                const children =
                                                    typeObj.children.map(
                                                        (item, itemindex) =>
                                                            getContentFragment(
                                                                itemindex,
                                                                item.text,
                                                                item,
                                                            ),
                                                    )

                                                return getContentFragment(
                                                    index,
                                                    children,
                                                    typeObj,
                                                    typeObj.type,
                                                    typeObj.title,
                                                )
                                            },
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </Layout>
        </>
    )
}

export default PostDetail
