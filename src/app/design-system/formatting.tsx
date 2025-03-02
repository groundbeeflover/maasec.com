export const Body = ({children,}:
                     {children: React.ReactNode}) => {
    return (
        <div className="max-w-7xl min-h-screen mx-auto py-5 px-5 bg-transparent">{children}</div>
    )
}

export const H1 = ({children,}: {children: React.ReactNode}) => {
    return (
        <h1 className="sm:pt-10 pt-4 sm:pb-0 pb-6
            text-center text-3xl
            lg:text-2xl
            lg:text-4xl
            font-semibold tracking-wide
            text-blue-900">{children}</h1>
    )
}