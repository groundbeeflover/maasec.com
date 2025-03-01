import React from 'react'

export default function Footer () {
    return (
        <footer className="bg-black py-12 border-t border-white/20 ">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 font-archivo text-white">
                            ACM Student Chapter of Maastricht University
                        </h3>
                        <p className="text-white">
                            Sharing our passion of computation.
                        </p>
                        <p className="mt-4 text-white">
                            <strong>Contact us:</strong> <a href="mailto:acm@maasec.com" className="text-blue-400">acm@maasec.com</a>
                        </p>
                    </div>
                    <div className="flex flex-col md:items-end">
                        <div className="space-x-4">
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20 text-center">
                    <p className="text-white">© {new Date().getFullYear()} ACM Student Chapter of Maastricht University</p>
                    <p className="mt-2 text-gray-400 font-archivo">{">//"} Made with ❤️ by irdi, dimitri, maksym and gergo @ maasec</p>
                </div>
            </div>
        </footer>
    )
}
