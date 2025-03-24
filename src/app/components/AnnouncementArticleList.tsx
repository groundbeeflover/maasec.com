import Link from 'next/link';
import type {Announcement} from "../../../types";

type ListProps = {
    articles: Announcement[];
}
export const AnnouncementArticleList = (props: ListProps) => {
    return (
        <div className="flex flex-col gap-2.5 text-lg items-center pb-5">
            {props.articles.map((article, id) => (
                    <div className="py-1 max-w-3xl" key={id}>
                        <Link
                            href={`/Announcements/${article.id}`}
                            className="text-blue-900 hover:text-black
                    transition duration-150">
                            📢 {article.title}
                        </Link>
                        <p className="text-base text-gray-500
                     inline-block line-clamp-1 py-1">
                            {article.description}
                        </p>
                    </div>
                )
            )}

        </div>
    )
}

