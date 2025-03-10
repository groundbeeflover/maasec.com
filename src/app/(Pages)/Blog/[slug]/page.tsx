import Link from "next/link";
import {ArrowLeftIcon} from "lucide-react";
import {getArticleData} from "../../../../../lib/blogs";


type Params = Promise<{slug: string}>


const Blog = async (props: {params: Params}) => {
    const params = await props.params;
    const slug = params.slug;
    const articleData = await getArticleData(slug)

    return (
        <section className="mx-auto w-10/12 mt-20 flex flex-col gap-5">
            <div className="flex justify-between ">
                <Link href="/Blog">
                    <ArrowLeftIcon width={20}/>
                    <p>Blogs</p>
                </Link>
                <p>{articleData.date.toString()}</p>
            </div>
            <article className="article" dangerouslySetInnerHTML={{__html: articleData.contentHtml}}/>
        </section>
    )
}

export default Blog;
