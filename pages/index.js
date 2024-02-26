import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillFilePdf,
  AiFillMail,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import homeicons from "../public/homeicons.svg"
import rec2 from "../public/rec2.png";
import rec1 from "../public/rec1.png";
import bitmoji from "../public/my-bitmoji.png"
import work1 from "../public/work1.gif"
import work2 from "../public/work2.svg"
import arrow from "../public/arrow.png"
import project1 from "../public/project1.png"
import project2 from "../public/project2.png"
import project3 from "../public/project3.png"



export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sri's Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" /> // gotta add the tab icon
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-52">
        <section className="min-h-screen">
          {/* <div className="nav flex fixed rounded-full rounded-t-none  ">
                    <ul className="menu">
                      <li>  <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="mt-1 mx-auto cursor-pointer text-2xl md:text-lg"
                  /></li>
                        <li><a href="#home" id="menu-home">Home</a></li>
                        <li><a href="#Work">Work</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1LDZp-rTLuor-2UZVVLtbHElAqMYC2MnO/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
                    </ul>
                </div> */}
          <nav className="py-10 mb-12 flex justify-between dark:text-white ">
            <h1 className=" z-50 font-burtons text-xl pt-2 hidden md:block">get a glimpse of sri</h1>

                  </nav>

                  <div className="social  ">

                      <div className="social-btn color-telegram">
                        <div className="icons8-telegram-app ml-1">
                        <a 
                    target="_blank"
                    href="https://www.linkedin.com/in/srinivas-thiru/"></a>
                        </div>
                        <p className="order-1 google-font text-white margin-telgram">
                        <a 
                    target="_blank"
                    href="https://www.linkedin.com/in/srinivas-thiru/">LinkedIn</a> </p>
                      </div>
        
                      <div className="social-btn color-instagram">
                        <div className="icons8-instagram ml-2"><a
                    target="_blank" 
                    href="https://github.com/Srinivas-Thiru"></a></div>
                        <p className="order-1 google-font text-white margin-instagram">
                        <a
                    target="_blank" 
                    href="https://github.com/Srinivas-Thiru">GitHub</a></p>
                      </div>

                   
                      <div className=" social-btn color-whatsapp">
                        <div className="icons8-whatsapp ml-2"> <a 
                    target="_blank"
                    href="https://drive.google.com/file/d/1LDZp-rTLuor-2UZVVLtbHElAqMYC2MnO/view?usp=sharing"></a></div>
                        <p className="order-1 google-font text-black margin-instagram"> <a 
                    target="_blank"
                    href="https://drive.google.com/file/d/1LDZp-rTLuor-2UZVVLtbHElAqMYC2MnO/view?usp=sharing">Resume</a></p>
                      </div>
                    
                  </div>


          <div className="text-center p-10 py-10">
            <h2 className="name text-5xl py-2 text-teal-600 font-burtons dark:text-teal-400 md:text-6xl">
              Srinivas Thiru
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              A Software Engineer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              An Experienced Software Engineer with a Masters in CS, expertise in diverse technical skills and development skills.
            </p>
            <div className="text-5xl flex  justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">

              <a 
              className="hover:scale-105 duration-300 ease-in-out hover:drop-shadow-[0_8px_10px_rgba(12,148,136,1)]"
                target="_blank"
                href="https://www.linkedin.com/in/srinivas-thiru/"
              >
                <AiFillLinkedin />
              </a>
              
              
              {/* <div id="badge" className="hover-image badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="srinivas-thiru" data-version="v1" >
                <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/srinivas-thiru?trk=profile-badge"></a>
              </div> */}

              <a
              className="hover:scale-105 duration-300 ease-in-out hover:drop-shadow-[0_8px_10px_rgba(12,148,136,1)]"
              target="_blank"
              href="https://github.com/Srinivas-Thiru/">
                <AiFillGithub  />
              </a>
              <a
              className="hover:scale-105 duration-300 ease-in-out hover:drop-shadow-[0_8px_10px_rgba(12,148,136,1)]"

              target="_blank"
              href="https://drive.google.com/file/d/1LDZp-rTLuor-2UZVVLtbHElAqMYC2MnO/view?usp=sharing"><AiFillFilePdf /></a>
              <a
              className="hover:scale-105 duration-300 ease-in-out hover:drop-shadow-[0_8px_10px_rgba(12,148,136,1)]"
              target="_blank"
              href="mailto:sri.thiru.cs@gmail.com">
                <AiOutlineMail />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500  rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} className="animate-fadeIn duration-300 ease-in" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        
        
        
        
        
        
        
        
        
        
        
        
        
              <div id="Work" className="min-h-screen pt-10">
                
          <h1 className="font-burtons section-title text-gray-800 dark:text-gray-200 text-xl"> Work</h1>
            <div className="work-section  flex flex-col md:flex-row text-gray-800 dark:text-gray-200 mt-[6vh]" >

              <div className="image my-auto">
              <Image className="mx-auto" src={homeicons} width={500} height={500}  />
              </div>
              <div className="content p-10 my-auto md:ml-0 w-100">
                <div className="work-card py-2 border-b-2 border-gray-300 hover:scale-105 duration-300 ease-in-out  hover:shadow-teal-200 shadow-lg px-5 rounded-lg rounded-r-none my-4 ">
                <div className="flex m-2 px-2">
                  <Image className="rounded-lg" src={work1} width={150} height={150} />
                  <div className="ml-10">
                  <h1>Software Engineer</h1>
                  <h2 className=" text-gray-400 border-gray-400  border-l-2 pl-3 mt-3">Influexer</h2></div>
                  </div>
                  <div className="flex flex-wrap m-2 p-2">
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">NextJs</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">TypeScript</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">PostgreSQL</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">GraphQL</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">React</span>

                  </div>
                </div>
                <div className="content">
                <div className="work-card py-2  border-b-2 border-gray-300  hover:scale-105 duration-300 ease-in-out  hover:shadow-teal-200 shadow-lg px-5 rounded-lg rounded-r-none my-4 mt-14 ">
                <div className="flex m-2 px-2">
                <Image className="rounded-lg" src={work2} width={150} height={150} />

                  <div  className="ml-10">
                  <h1>Graduate Teaching Assistant</h1>
                  <h2 className=" text-gray-400 border-gray-400  border-l-2 pl-3 mt-3"> Sacred Heart University.</h2></div>
                  </div>
                  <div className=" flex flex-wrap m-2 p-2">
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">Python</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">guided 40+ Grad-level students</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">Educational Leadership</span>
                  </div>
                </div>
                  

                </div>
              </div>
              

            </div>
            </div>









              
            <div id="Projects" className="min-h-screen pt-10 text-gray-800 dark:text-gray-200">
              <h1 className="font-burtons section-title  text-gray-800 dark:text-gray-200 text-xl ">Thigns I've developed</h1>
              
              <div className="content p-10 md:flex-row my-auto md:ml-0 w-100 md:w-[80vw] md:p-2">
                <div className="work-card py-2 border-b-2 border-gray-300 hover:scale-105 duration-300 ease-in-out  hover:shadow-teal-200 shadow-lg px-5 rounded-lg rounded-r-none mx-10 mt-5 ">
                <div className="flex m-2 px-2">
                  <Image src={project1} width={200} height={100} className=" shadow-teal-400 border shadow-lg" />
                  <div className="ml-10">
                  <h1>Organizo</h1>
                  <h2 className=" text-gray-400 border-gray-400  border-l-2 pl-3 mt-3">A Project Management Tool</h2>
                  
                  </div>
                  <div className="ml-auto">
                    <a 
                    target="_blank"
                    href="https://github.com/Srinivas-Thiru/Organizo">
                    <Image className="hover:scale-110 duration-300 ease-in-out cursor-pointer hover:drop-shadow-[0_3px_8px_rgba(12,148,136,1)]" src={arrow} width={100} height={100} />
                    </a>
                    </div>
                  </div>
                  <div className=" flex flex-wrap m-2 p-2">
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">React</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">JavaScript</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">MonogDB</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">REST API</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">Node</span>

                  </div>
                </div>

                <div className="work-card py-2 border-b-2 border-gray-300  hover:scale-105 duration-300 ease-in-out  hover:shadow-teal-200 shadow-lg px-5 rounded-lg rounded-r-none mx-10 my-5 ">
                <div className="flex m-2 px-2">
                  <Image src={project2} width={200} height={100} />
                  <div className="ml-10 ">
                  <h1>LinkedIn Automation Script</h1>
                  <h2 className=" text-gray-400 border-gray-400  border-l-2 pl-3 mt-3">A Python Script that sends connection request <br /> with personalised message to a specificn search query! </h2></div>
                  <div className="ml-auto">
                    <a 
                    target="_blank"
                    href="https://github.com/Srinivas-Thiru/LinkedIn-Script">
                    <Image className="hover:scale-110 duration-300 ease-in-out cursor-pointer hover:drop-shadow-[0_3px_8px_rgba(12,148,136,1)]" src={arrow} width={100} height={100} />
                    </a>
                    </div>
                  </div>

                  <div className=" flex flex-wrap m-2 p-2">
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">Python</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">guided 40+ Grad-level students</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">Educational Leadership</span>
                  </div>
                </div>
                  
                <div className="work-card py-2 border-b-2 border-gray-300  hover:scale-105 duration-300 ease-in-out  hover:shadow-teal-200 shadow-lg px-5 rounded-lg rounded-r-none mx-10  ">
                <div className="flex m-2 px-2">
                  <Image src={project3} width={200} height={100} />
                  <div className="ml-10">
                  <h1>My Portfolio</h1>
                  <h2 className=" text-gray-400 border-gray-400  border-l-2 pl-3 mt-3"> Checkout the Source code for this Project!</h2></div>
                  <div className="ml-auto">
                    <a 
                    target="_blank"
                    href="https://github.com/Srinivas-Thiru/Srinivas-Thiru.github.io">
                    <Image className="hover:scale-110 duration-300 ease-in-out cursor-pointer hover:drop-shadow-[0_3px_8px_rgba(12,148,136,1)]" src={arrow} width={100} height={100} />
                    </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap m-2 p-2">
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">NextJs</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">Tailwind CSS</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full">UI/UX</span>
                  </div>
                </div>

              </div>

            </div>



              <section>
                <div className="section-title"></div>

              <div id="Recommendations" className=" pt-5">
              <h1 className="font-burtons section-title text-gray-800 dark:text-gray-200 text-xl my-5">What people think about me?</h1>
                <div className="flex flex-col lg:flex-row gap-4 mx-auto justify-between my-6 py-6 ">
                <a 
                className=" hover:scale-105 duration-300 ease-in-out  hover:shadow-teal-200 shadow-lg rounded-lg"
                target="_blank"
                href="https://www.linkedin.com/in/srinivas-thiru/details/recommendations/">
                <Image src={rec1} className="rounded-lg dark:bg-transparent bg-[#111827] " />
                </a>
                <a 
                className=" hover:scale-105 duration-300 ease-in-out  hover:shadow-teal-200 shadow-lg rounded-lg"
                target="_blank"
                href="https://www.linkedin.com/in/srinivas-thiru/details/recommendations/">
                <Image src={rec2} className="rounded-lg  dark:bg-transparent bg-[#111827] " />
                </a>
                </div>
              </div>



{/* 
              <div id="codepen">
                <h1 className="font-burtons section-title text-gray-800 dark:text-gray-200 text-xl my-5">Some of my Fav Codepens!</h1>
              <div className="flex gap-4">
                <Image src={design} height={400} width={400} className=" bg-teal-200 rounded-lg" />
                <Image src={design} height={400} width={400} className=" bg-teal-200 rounded-lg" />
                <Image src={design} height={400} width={400} className=" bg-teal-200 rounded-lg" />
                <Image src={design} height={400} width={400} className=" bg-teal-200 rounded-lg" />
                </div>
              </div> */}


              <div id="contact" className=" text-gray-800 dark:text-gray-200 ">
                <h1 className="font-burtons text-center  text-gray-800 dark:text-gray-200 text-xl mt-10 mb-5">Wanna  get in touch?</h1>
                <div className="text-5xl flex justify-center gap-16 pb-10 text-gray-600 dark:text-gray-400">
              <a 
              className="hover:scale-105 duration-300 ease-in-out hover:drop-shadow-[0_8px_10px_rgba(12,148,136,1)]"
                target="_blank"
                href="https://www.linkedin.com/in/srinivas-thiru/"
              >
                <AiFillLinkedin />
              </a>
              
              <a
              className="hover:scale-105 duration-300 ease-in-out hover:drop-shadow-[0_8px_10px_rgba(12,148,136,1)]"
              target="_blank"
              href="https://github.com/Srinivas-Thiru/">
                <AiFillGithub  />
              </a>
              <a
              className="hover:scale-105 duration-300 ease-in-out hover:drop-shadow-[0_8px_10px_rgba(12,148,136,1)]"
              target="_blank"
              href="https://drive.google.com/file/d/1LDZp-rTLuor-2UZVVLtbHElAqMYC2MnO/view?usp=sharing"><AiFillFilePdf /></a>

            <a
              className="hover:scale-105 duration-300 ease-in-out hover:drop-shadow-[0_8px_10px_rgba(12,148,136,1)]"
              target="_blank"
              href="mailto:sri.thiru.cs@gmail.com">
                <AiOutlineMail />
              </a>
            </div>

              </div>
              </section>

      </main>
    </div>
  );
}
