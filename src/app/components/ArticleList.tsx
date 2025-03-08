import Link from 'next/link';

type ListProps = {
    Title: string,
    Description: string,
    Emoji: string
    Destination: string
}
export const ArticleList = (props: ListProps) => {
    return(
        <div className="bg-white py-5 px-10 max-w-xl mx-auto">
            <Link href={props.Destination}>
                <button
                    className="flex flex-row items-center justify-between gap-4"
                >
                    <span className="text-2xl text-black">{props.Title}</span>
                </button>
            </Link>
            <p className="text-base inline-block">{props.Emoji} </p>
            <p className="text-base text-gray-300 inline-block line-clamp-1">{props.Description}</p>
        </div>
    )
}