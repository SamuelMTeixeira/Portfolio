type ProjectProps = {
    description: {
        id: string,
        rich_text: [{
            plain_text: string,
        }],
    }
    name: {
        id: string,
        title: [{
            plain_text: string,
            href: null
        }]
    },
    image: {
        id: string,
        files: [{
            file: {
                url: string,
                expiry_time: string
            }
        }]
    },
    preview: {
        url: string | undefined
    },
    repo: {
        url: string | undefined
    }
}

export default ProjectProps