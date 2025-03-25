import Image from "next/image"
import Link from 'next/link';
import type {BlogItem} from "../../../types";

type ListProps = {
    articles: BlogItem[];
}
export const BlogArticleList = (props: ListProps) => {
    return (
            <div className="gap-2.5 items-center pb-5">
                {props.articles.map((article, id) => (
                    <div key={id} className="flex">
                        <Image
                            src={`/${article.image}`}
                            alt={`${article.image}`}
                            width={64}
                        height={64}>

                        </Image>
                    <div className="max-w-3xl py-1 pl-5 flex-grow-1">
                        <Link
                            href={`/Blog/${article.id}`}
                            className="text-blue-900 hover:text-black
                    transition duration-150">
                            {article.title}
                        </Link>
                        <p className="text-base text-gray-500
                     inline-block line-clamp-1 py-0.5">
                            {article.emoji} {article.description}
                        </p>
                    </div>
                    </div>
                ))}
            </div>
    )
}

