import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: "Blog"
    }
}

export default function FirstBlog() {
    return <h1>First blog post</h1>
}