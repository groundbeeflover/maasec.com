import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {ArticleList} from "../../components/ArticleList"
import {H1} from "../../design-system/formatting"

const Page = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <div className="content-center w-0.8 mx-auto bg-transparent min-h-screen px-5 py-5">
                <H1>Blog Articles</H1>
                {blogs.map((data, i) => <div key={i}>
                    <ArticleList
                        Title={data.title}
                        Description={data.main}
                        Emoji="📢"
                        Destination="/ ">
                    </ArticleList>
                </div>)}
            </div>
            <Footer />

        </div>
    )
}
export default Page

const blogs = [
    {
    "title": "Why is password123 a terrible password?",
    "main": "Using 'password123' is like locking your front door with a piece of string—it might look like security, but it won’t stop anyone determined to get in. Hackers use automated tools that can guess weak passwords in seconds, especially ones that are commonly used. A strong password should be long, unique, and include a mix of letters, numbers, and special characters. Better yet, use a password manager so you don’t have to remember them all yourself."
    },
    {
        "title": "How do hackers actually crack passwords?",
        "main": "Hackers have multiple ways to break into accounts, but the most common are brute force attacks, dictionary attacks, and credential stuffing. Brute force attacks try every possible combination, while dictionary attacks use a list of common passwords and variations. Credential stuffing is even sneakier—it exploits passwords leaked from past data breaches, banking on the fact that many people reuse them across multiple accounts. If you’re using the same password for everything, it’s only a matter of time before one breach turns into many."
    },
    {
        "title": "What’s the biggest cybersecurity threat right now?",
        "main": "Phishing remains one of the most dangerous and effective cybersecurity threats today. Attackers disguise themselves as trusted sources—like your bank, a coworker, or a government agency—to trick you into revealing sensitive information. These scams often arrive through email, text messages, or fake websites designed to steal login credentials. Even the most sophisticated security systems can’t protect against human error, so staying vigilant and questioning suspicious messages is your best defense."
    },
    {
        "title": "Can my fridge really be hacked?",
        "main": "Yes, if your fridge has Wi-Fi, it can be hacked. Smart appliances, including fridges, thermostats, and even light bulbs, often have weak security protections. Hackers can exploit vulnerabilities in these devices to gain access to your home network, using them as a backdoor to reach more sensitive data on your computers and smartphones. Keeping firmware updated, using strong passwords, and placing smart devices on a separate network can help minimize the risk."
    },
    {
        "title": "Why do companies keep getting hacked?",
        "main": "Despite advancements in cybersecurity, companies still fall victim to hacks due to human error, outdated software, and poor security practices. Employees clicking on phishing links, weak passwords left unchanged for years, and unpatched vulnerabilities all create easy entry points for cybercriminals. The best defense involves a mix of employee training, regular software updates, and strict security policies—but even then, no system is completely foolproof."
    }]
