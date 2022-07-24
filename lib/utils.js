export const isActiveLink = (href, currentPathname) => {
    if (href === '/') {
        return href === currentPathname
    }

    return currentPathname.startsWith(href)
}

export const getAllArticle = async () => {
    try {
        const response = await fetch(
            'https://dev.to/api/articles/latest?username=cyberraff',
        )
        // const movies = response.json()
        // await fetch(url)
        //     .then((response) => response.json())
        //     .then((data) => console.log(data))
    } catch (error) {
        // console.log(error)
    }
}
