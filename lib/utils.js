export const isActiveLink = (href, currentPathname) => {
    if (href === '/') {
        return href === currentPathname
    }

    return currentPathname.startsWith(href)
}

export const grpahCMSImageLoader = ({ src }) => src;
