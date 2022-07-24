import { FaDev, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiHashnode } from 'react-icons/si'

const socials = [
    {
        icon: FaDev,
        url: 'dev.to',
    },
    {
        icon: SiHashnode,
        url: 'hashnode.com',
    },
    {
        icon: FaGithub,
        url: 'github.com',
    },
    {
        icon: FaLinkedin,
        url: 'linkedin.com',
    },
]
const PageTitle = ({ title, subtitle }) => {
    return (
        <>
            <div className='mt-14 w-full'>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-normal'>
                    {title}
                </h1>
                <p className='text-xl sm:text-2xl lg:text-3xl my-2'>
                    {subtitle}
                </p>
            </div>
            <div className='flex flex-row  text-2xl py-2'>
                {socials.map((social) => (
                    <a
                        className='pr-2'
                        key={social.url}
                        href={social.url}
                        target='_blank'
                        rel='noopener noreferrer nofollow'>
                        {<social.icon />}
                    </a>
                ))}
            </div>
        </>
    )
}

export default PageTitle
