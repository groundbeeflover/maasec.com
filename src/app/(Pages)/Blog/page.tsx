import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {BlogArticleList} from "../../components/BlogArticleList"
import {H1, Body} from "../../design-system/formatting"
import{getSortedBlogs} from "../../../../lib/blogs"



const Page = () => {
    const blogsMD = getSortedBlogs();
    return (
        <div className="bg-white">
            <Navbar />
            <Body>
                <H1>Blog Articles</H1>
                {blogsMD !== null && (<BlogArticleList articles={blogsMD} />)}
            </Body>
            <Footer />

        </div>
    )
}
export default Page
