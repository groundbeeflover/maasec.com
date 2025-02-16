'use client'
import Image from "next/image";
import { /*useState, useEffect*/} from "react";
import { Laptop, Lightbulb, Book, Monitor, Terminal,Users, Github} from "lucide-react";

export default function Home() {
  //const [_isMenuOpen, _setIsMenuOpen] = useState(false);
  //const [_scrolled, _setScrolled] = useState(false);
  //const [_activeSection, _setActiveSection] = useState("");


  /*
  useEffect(() => {
    const handleScroll = () => {
      set_scrolled(window.scrollY > 50);
      
      // Get current section
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop - 50; // Adjusted for earlier activation
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = sectionElement.getAttribute("id");

        // Ensure active section is updated more promptly when in range, 
        // currently the offset is broken so we'll have to fix it before uncommenting
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          //setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  */

  const navItems = [
    { label: "About", id: "about" },
    { label: "Operations", id: "operations" },
    { label: "Contact", id: "contact" }
  ];

  // Rest of your data constants remain the same

  const activities = [
    {
      icon: <Terminal className="w-12 h-12 mb-4 text-green-600" />,
      title: "Competitive Programming",
      description: "Participate in algorithmic problem-solving contests and hackathons"
    },
    {
      icon: <Laptop className="w-12 h-12 mb-4 text-blue-400" />,
      title: "Project Development",
      description: "Collaborate on open-source software projects and build innovative solutions"
    },
    {
      icon: <Users className="w-12 h-12 mb-4 text-purple-400" />,
      title: "Tech Talks & Seminars",
      description: "Attend guest lectures and seminars to explore emerging tech trends"
    },
    {
      icon: <Book className="w-12 h-12 mb-4 text-brown-400" />,
      title: "Study Groups",
      description: "Join study sessions to enhance your understanding of computer science topics"
    },
    {
      icon: <Monitor className="w-12 h-12 mb-4 text-red-400" />,
      title: "Hackathons",
      description: "Compete in team-based hackathons to develop creative tech solutions"
    },
    {
      icon: <Lightbulb className="w-12 h-12 mb-4 text-yellow-400" />,
      title: "Innovation Challenges",
      description: "Collaborate with peers to brainstorm and develop creative solutions to various challenges"
    },
  ];

  return (
    <div className="min-h-screen text-black bg-white">

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300`}>
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
          <Image src="./images/acm.svg" alt="ACM logo" width={64} height={64} />
            <span className="font-archivo font-bold text-xl text-black">at Maastricht University</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 font-archivo">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`hover:text-black transition-colors border-b-2}`}
              >
                {item.label}
              </a>
            ))}
          </div>

        </nav>

      </header>

      {/* Hero Section remains the same */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* ... Hero content remains the same ... */}
        <div className="container mx-auto px-4 py-20 text-center relative -mt-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-archivo">
            <span className="text-black block">ACM Student Chapter</span>
            <span className="text-black block">MAASEC</span>
            <span className="animate-pulse"></span>
          </h1>
          <p className="text-xl md:text-2xl text-black mb-8 font-archivo">
            Empowering students through technology and cybersecurity education
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="group bg-white/100 border border-gray-700 px-8 py-3 rounded hover:border-black hover:text-black transition-all duration-300 font-archivo"
            >
              Join Operation
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative -mt-64">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center font-archivo text-black-400">
             About Us
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-black mb-6 font-archivo">
              We are a group of students and professionals united under the ACM banner, 
              dedicated to fostering a community of learners and innovators. 
              Our mission is to promote hands-on experience, collaborative learning, 
              and skill development across various fields, empowering everyone to grow and thrive in the 
              ever-evolving world of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Operations Section (previously What We Do) */}
      <section id="operations" className="py-20 relative bg-white/100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-archivo text-black">
            Operations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white/100 p-6 rounded-lg border border-black/20 hover:border-black-400 transition-all duration-300 text-center group"
              >
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 font-archivo text-black-400">
                  {activity.title}
                </h3>
                <p className="text-black">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}

      {/* Contact Section */}
      <section id="contact" className="py-20 relative bg-white/100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 font-archivo text-black">
             Join The Operation
          </h2>
          <p className="text-xl text-black mb-8 font-archivo">
            Ready to explore the frontiers of technology and innovation?
          </p>

          <a href="https://github.com/MaaSecLab" className="text-white hover:bg-gray-200 transition-colors">
            <Github className="w-10 h-10 inline text-black" />
          </a>
          <a href="https://discord.com/invite/ghpWe7wawV" className="text-white hover:bg-gray-200 transition-colors">
            <Image src="./images/discord.svg" className="w-10 h-10 inline" />
          </a>
          <a href="https://ctftime.org/team/365940" className="text-white hover:bg-gray-200 transition-colors">
            <Image src="./images/ctftime.png" className="w-10 h-10 inline" />
          </a>
        </div>
      </section>

      {/* Footer remains the same */}
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
            <p className="mt-2 text-gray-400 font-archivo">{">//"} Made with ❤️ by irdi and dimitri @ maasec</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
