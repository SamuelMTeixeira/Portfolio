type ResumeProps = {
  name: {
    id: string
    title: [
      {
        plain_text: string
        href: null
      },
    ]
  }
  pdf: {
    id: string
    files: [
      {
        file: {
          url: string
          expiry_time: string
        }
      },
    ]
  }
}

export default ResumeProps
