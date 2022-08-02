import Link from 'next/link'
import Navigation from './Navigation'
import DarkModeToggle from './DarkModeToggle'
const Header = () => {
    return (
        <header
            className='w-full flex flex-row justify-between
        fixed bg-white
            
            items-center sm:text-2xl text-xl
        h-16 md:h-20 border-b border-gray-200 z-50
        px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
        dark:bg-gray-800 dark:border-gray-600
        text-black dark:text-white'>
            <Link href='/'>
                <a>
                    <span className='invisible hidden sm:visible sm:inline'>
                        CyberRaff
                    </span>
                    <span className='sm:invisible sm:hidden visible inline'>
                        CR
                    </span>
                </a>
            </Link>
            <div className='flex'>
                <Navigation />
                <DarkModeToggle />
            </div>
        </header>
    )
}

export default Header
