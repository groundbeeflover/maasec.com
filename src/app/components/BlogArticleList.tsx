import Link from 'next/link';
import type {BlogItem} from "../../../types";

type ListProps = {
    articles: BlogItem[];
}
export const BlogArticleList = (props: ListProps) => {
    return(
        <div className="flex flex-col gap-2.5 text-lg items-center pb-5">
            {props.articles.map((article, id) => (
                <div key={id} className="max-w-3xl py-1 pl-5">
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

            ))}

        </div>
    )
}

