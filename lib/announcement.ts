import fs from "fs"
import matter from "gray-matter"
import path from "path"
import moment from "moment"
import html from "remark-html"
import {remark} from "remark"

import type {Announcement} from "../types";

const blogsDirectory = path.join(process.cwd(), "announcements")

export const getSortedAnnouncements = (): Announcement[] => {
    const filenames = fs.readdirSync(blogsDirectory)

    const announcementData = filenames.map((filename) => {
        const id = filename.replace(/\.md$/, "")

        const fullPath = path.join(blogsDirectory, filename)
        const fileContents = fs.readFileSync(fullPath, "utf8")

        const metadata = matter(fileContents)
        return {
            id,
            title: metadata.data.title,
            date: metadata.data.date,
            description: metadata.data.description,
        }
    })

    return announcementData.sort((a, b) => {
        const format = "DD-MM-YYYY"
        const date1 = moment(a.date, format)
        const date2 = moment(b.date, format)
        if (date1.isBefore(date2)) {
            return -1
        }
        else if (date1.isAfter(date2)) {
            return 1
        }
        else{
            return 0
        }
    })


}


export const getArticleData = async (id: string) =>{
    const blogpath = path.join(blogsDirectory, `${id}.md`)
    const contents = fs.readFileSync(blogpath, "utf8")

    const matterResult = matter(contents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        title: matterResult.data.title,
        date: moment(matterResult.data.date, "DD-MM-YYYY").format("MMMM Do YYYY"),
        description: matterResult.data.description,
    }
}