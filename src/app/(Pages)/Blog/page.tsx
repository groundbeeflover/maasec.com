import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {ArticleList} from "../../components/ArticleList"
import {H1} from "../../design-system/formatting"
import{getSortedBlogs} from "../../../../lib/blogs"



const Page = () => {
    const blogsMD = getSortedBlogs();
    return (
        <div className="bg-white">
            <Navbar />
            <div className="content-center w-11/12 mx-auto bg-transparent min-h-screen px-5 py-5">
                <H1>Blog Articles</H1>
                {blogsMD !== null && (<ArticleList articles={blogsMD} />)}
            </div>
            <Footer />

        </div>
    )
}
export default Page
