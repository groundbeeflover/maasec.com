import Link from 'next/link';
import type {BlogItem} from "../../../types";

type ListProps = {
    articles: BlogItem[];
}
export const BlogArticleList = (props: ListProps) => {
    return(
        <div className="flex flex-col gap-2.5 text-lg">
            {props.articles.map((article, id) => (
                <Link
                    key={id}
                    href={`/Blog/${article.id}`}
                    className="text-blue-900 hover:text-black
                    transition duration-150">
                    {article.title}
                    <p className="text-base text-gray-500
                     inline-block line-clamp-1">
                        {article.emoji} {article.description}
                    </p>
                </Link>
            ))}

        </div>
    )
}

