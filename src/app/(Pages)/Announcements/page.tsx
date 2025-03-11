import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {AnnouncementArticleList} from "../../components/AnnouncementArticleList"
import {H1} from "../../design-system/formatting"
import{getSortedAnnouncements} from "../../../../lib/announcement"



const Page = () => {
    const articlesMD = getSortedAnnouncements();
    return (
        <div className="bg-white">
            <Navbar />
            <div className="content-center w-11/12 mx-auto bg-transparent min-h-screen px-5 py-5">
                <H1>Announcements</H1>
                {articlesMD !== null && (<AnnouncementArticleList articles={articlesMD} />)}
            </div>
            <Footer />

        </div>
    )
}
export default Page
