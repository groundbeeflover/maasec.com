"use client"
import React from 'react'
import {Body, H1} from "../../design-system/formatting"
import {Accordion} from "../../components/accordion"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const FAQ = () => {
    return (
        <div className="bg-white">
            <Navbar/>
            <Body>
            <H1>FAQ</H1>
            {FAQDATA.map((data, i) => <div key={i}>
                <Accordion
                    Header={data.question}
                    Main={data.answer}>
                </Accordion>
            </div>)}
            </Body>
            <Footer/>
        </div>
    )
}
export default FAQ


const FAQDATA = [{
        "question": "What happens if I press this big red button?",
        "answer": "Best case: nothing. Worst case: you summon an angry IT guy from the depths of the server room."
    },
    {
        "question": "Can I use your software to take over the world?",
        "answer": "Yes, but only if you promise to be a kind and benevolent ruler who provides free snacks for all."
    },
    {
        "question": "How do I fix an error that says 'Something went wrong'?",
        "answer": "Step 1: Panic. Step 2: Google it. Step 3: Restart your device. Step 4: Accept your fate."
    },
    {
        "question": "Why is my internet so slow?",
        "answer": "Possibly because your cat is sitting on the router again, soaking up all the Wi-Fi."
    },
    {
        "question": "Can I use this software for evil?",
        "answer": "Legally, we have to say no. But ethically... also no. Just don’t."
    },
    {
        "question": "What’s the best way to contact support?",
        "answer": "Write us an email, send a carrier pigeon, or scream into the void. One of those might work."
    },
    {
        "question": "Will turning it off and on again actually fix my problem?",
        "answer": "99% of the time, yes. The other 1% of the time, you probably just created a bigger problem."
    },
    {
        "question": "What should I do if I break something important?",
        "answer": "Blame it on a coworker, clear your browser history, and run."
    }]