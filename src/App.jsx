import React, { useState, useEffect } from "react";
import { FaReact, FaHtml5, FaCss, FaJs, FaPhp, FaFigma } from "react-icons/fa6";
import { Button } from "flowbite-react";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="">
        <div className="ms-60 mt-20">
          <div className="grid grid-cols-7 grid-rows-8 justify-center">
            <div className="col-span-2 col-start-3 row-start-1">
              <div className="text-center text-5xl font-bold">
                <p>Muhammad Abdurrahim As-Silmi</p>
                <p>Fullstack Developer</p>
                <p>From Indonesia</p>
              </div>
            </div>
            <div className="col-span-2 row-span-4 col-start-3 row-start-3 border-3 border-gray-300 p-3 rounded-full ms-2 shadow-black shadow-md">
              <img
                src="src\assets\12410486 3087800834 Muhammad Abdurrahim As-Silmi.jpg"
                alt=""
                className="rounded-full h-full object-cover scale-95"
              />
            </div>
            <div className="col-start-1 row-start-2">
              <h3 className="font-bold text-3xl text-gray-400">Biography</h3>
              <br />
              <p className="text-2xl">
                Work with Passion, Design and for Money! I'm Silmi, a Fullstack
                Developer ready for hiring
              </p>
            </div>
            <div className="col-start-1 row-start-4">
              <h3 className="font-bold text-3xl text-gray-400">Contact</h3>
              <br />
              <p className="text-2xl">
                Bogor Timur, Indonesia
                <br />
                hello@MAAS.com
                <br />
                +62 838-7268-5934
              </p>
            </div>
            <div className="col-start-1 row-start-6">
              <h3 className="font-bold text-3xl text-gray-400">Services</h3>
              <br />
              <p className="text-2xl">Website Design</p>
              <p className="text-2xl">Mobile Dekstop Application Design</p>
            </div>
            <div className="col-start-1 row-start-8">
              <h3 className="font-bold text-3xl text-gray-400">Life Quotes</h3>
              <br />
              <p className="text-2xl">
                "<i>Do It If You Love It</i>"
              </p>
            </div>
            <div className="col-start-6 row-start-2 text-end">
              <h3 className="font-bold text-3xl text-gray-400">
                Years of Experience
              </h3>
              <br />
              <h2 className="font-bold text-6xl">4</h2>
            </div>
            <div className="col-start-6 row-start-4 text-end">
              <h3 className="font-bold text-3xl text-gray-400">
                Satisfaction clients
              </h3>
              <br />
              <h2 className="font-bold text-6xl">100%</h2>
            </div>
            <div className="col-start-6 row-start-6 text-end">
              <h3 className="font-bold text-3xl text-gray-400">Sertificate</h3>
              <br />
              <h2 className="font-bold text-6xl">+10</h2>
            </div>
            <div className="col-start-6 row-start-8 text-end">
              <h3 className="font-bold text-3xl text-gray-400">Hire Status</h3>
              <br />
              <h2 className="font-bold text-6xl hover:border-b-2">Ready!</h2>
            </div>
          </div>
        </div>
      </div>

      <center>
        <hr className="w-3/4" />
      </center>

      <div>
        <div className="mt-24">
          <h1 className="text-5xl text-center font-bold">My Skills</h1>
          <div className="grid grid-cols-6 grid-rows-2 gap-4 mt-20">
            <div className="text-center text-3xl flex flex-col items-center gap-6 font-bold">
              <img
                src="src\assets\Figma-logo.svg"
                alt=""
                className="size-24 grayscale-100 hover:filter-none duration-500 ease-in-out hover:scale-125"
              />
              <p>79%</p>
            </div>
            <div className="text-center text-3xl flex flex-col items-center gap-6 font-bold">
              <img
                src="src\assets\logo-mysql-170x115.png"
                alt=""
                className="h-24 w-36 grayscale-100 hover:filter-none duration-500 ease-in-out hover:scale-125"
              />
              <p>86%</p>
            </div>
            <div className="text-center text-3xl flex flex-col items-center gap-6 font-bold">
              <img
                src="src\assets\HTML5_logo_and_wordmark.svg"
                alt=""
                className="size-24 grayscale-100 hover:filter-none duration-500 ease-in-out hover:scale-125"
              />
              <p>99%</p>
            </div>
            <div className="text-center text-3xl flex flex-col items-center gap-6 font-bold">
              <img
                src="src\assets\React-icon.svg"
                alt=""
                className="size-24 grayscale-100 hover:filter-none duration-500 ease-in-out hover:scale-125"
              />
              <p>80%</p>
            </div>
            <div className="text-center text-3xl flex flex-col items-center gap-6 font-bold">
              <img
                src="src\assets\Expressjs.png"
                alt=""
                className="h-24 w-60 object-contain grayscale-100 hover:duration-500 ease-in-out hover:scale-125"
              />
              <p>77%</p>
            </div>
            <div className="text-center text-3xl flex flex-col items-center gap-6 font-bold">
              <img
                src="src\assets\Tailwind_CSS_Logo.svg"
                alt=""
                className="size-24 grayscale-100 hover:filter-none duration-500 ease-in-out hover:scale-125"
              />
              <p>96%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 grid-rows-4 gap-4 text-center ms-15 me-15">
        <div>
          <p className="font-bold text-3xl">Discipline</p>
          <hr className="" />
          <p className="text-2xl italic">
            "Do work with cosistency, manage your time well, and do not
            procrastinate"
          </p>
        </div>
        <div className="col-start-5">
          <p className="font-bold text-3xl">Problem Solving</p>
          <hr />
          <p className="text-2xl italic">
            "Always think of the solution, never the problem"
          </p>
        </div>
        <div className="row-start-3">
          <p className="font-bold text-3xl">Adaptability</p>
          <hr />
          <p className="text-2xl italic">
            "Always be open to learn new things"
          </p>
        </div>
        <div className="col-start-5 row-start-3">
          <p className="font-bold text-3xl">Communication Skill</p>
          <hr />
          <p className="text-2xl italic">"Communicate it, dont hesitate it"</p>
        </div>
        <div className="col-start-3 row-start-2">
          <p className="font-bold text-3xl">Teamwork</p>
          <hr />
          <p className="text-2xl italic">"Teamwork makes the dream work"</p>
        </div>
      </div>

      <center>
        <hr className="w-3/4" />
      </center>

      <div className="mt-10 mb-16">
        <h1 className="text-5xl text-center font-bold">Projects</h1>
        <p className="text-2xl text-center">
          Here are some of my projects that I have worked on
        </p>
        <div className="flex justify-center mt-20 gap-4">
          <div>
            <img
              src="src\assets\projects\Foodwise.png"
              alt=""
              className="scale-95"
            />
            <div className="text-center">
              <p className="font-bold text-gray-400">Web Development</p>
              <br />
              <p className="font-bold text-2xl">Foodwise</p>
            </div>
          </div>
          <div>
            <img
              src="src\assets\projects\Koliko Game Store.png"
              alt=""
              className="scale-95"
            />
            <div className="text-center">
              <p className="font-bold text-gray-400">Web Development</p>
              <br />
              <p className="font-bold text-2xl">Koliko Games Store</p>
            </div>
          </div>
        </div>
      </div>

      <center>
        <hr className="w-3/4" />
      </center>

      <div className="mt-10 mb-16">
        <h1 className="text-5xl text-center font-bold">
          Education and Experience
        </h1>
        <p className="text-2xl text-center">
          Here are some of my education and experience
        </p>

        <div className="grid grid-cols-7 grid-rows-1 gap-4 justify-items-center mx-30 mt-28">
          <div className="col-span-2">
            <p>2025-present</p>
            <br />
            <p className="text-2xl">
              Students at Wikrama Vocational High School in Bogor
            </p>
            <p>Wikrama Vocational High School, Bogor</p>
          </div>
          <div className="col-start-3 col-span-3">
            <p>2025</p>
            <br />
            <ul>
              <li>
                <p className="text-2xl">
                  Basic Web Programming Certificate
                </p>
                <p>Dicoding Academy</p>
              </li>
              <br />
              <li>
                <p className="text-2xl">
                  Basic Javascript Programming Certificate
                </p>
                <p>Dicoding Academy</p>
              </li>
            </ul>
          </div>
          <div className="col-start-6 col-span-4">
            <p>2026</p>
            <br />
            <ul>
              <li>
                <p className="text-2xl">
                  Software Developer Certificate
                </p>
                <p>Coding Camp Program</p>
              </li>
              <br />
              <li>
                <p className="text-2xl">
                  Basic Cloud and Gen AI on AWS Certificate
                </p>
                <p>Coding Camp Program</p>
              </li>
              <br />
              <li>
                <p className="text-2xl">
                  Basic Back-End Javascript Certificate
                </p>
                <p>Coding Camp Program</p>
              </li>
              <br />
              <li>
                <p className="text-2xl">
                  Programming Logic 101 Certificate
                </p>
                <p>Coding Camp Program</p>
              </li>
              <br />
              <li>
                <p className="text-2xl">
                  Front-End Web Development for Beginners Certificate
                </p>
                <p>Coding Camp Program</p>
              </li>
              <br />
              <li>
                <p className="text-2xl">
                  React Application Development Certificate
                </p>
                <p>Coding Camp Program</p>
              </li>
              <br />
              <li>
                <p className="text-2xl">
                  Financial Literacy Certificate
                </p>
                <p>Coding Camp Program</p>
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>

      <center>
        <hr className="w-3/4" />
      </center>

      <div className="mt-10">
        <h1 className="text-5xl text-center font-bold">Contact</h1>
        <p className="text-2xl text-center">
          Need Worker? Contact Me and Get in Touch Now!
        </p>
      </div>

      <div className="flex justify-center mt-20">
        <div className="border-4 border-gray-400 rounded-full size-80 flex flex-col items-center justify-center border-dotted shadow-black shadow-md transition duration-500 ease-in-out hover:bg-amber-100 hover:shadow-2xl">
          <div className="transition duration-500 ease-in-out hover:text-amber-600">
            <a href="mailto:silmi">
              <h1 className="text-5xl font-bold">Call Silmi</h1>
              <MdArrowOutward className="text-6xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-30">
        <h1 className="text-center text-5xl">Find out more about me</h1>
        <div className="">
          <div className="grid grid-cols-5 grid-rows-4 gap-4 justify-items-center">
            <div className="col-start-3 row-start-2">
              <a href="https://github.com/MAASgithab/Portfolio-silmi-2.0">
                <img
                  src="src\assets\Github-desktop-logo-symbol.svg"
                  alt=""
                  className="grayscale-100 blur-sm transform transition duration-300 ease-in-out hover:filter-none hover:-translate-y-4"
                />
              </a>
            </div>
            <div className="col-start-4 row-start-2">
              <a href="https://www.instagram.com/abdurrahimaassilmi/">
                <img
                  src="src\assets\Instagram_logo_2022.svg"
                  alt=""
                  className="size-32 grayscale-100 blur-sm transform transition duration-300 ease-in-out hover:filter-none hover:-translate-y-4"
                />
              </a>
            </div>
            <div className="col-start-2 row-start-2">
              <a href="www.linkedin.com/in/muhammad-abdurrahim-as-silmi-739bb7380">
                <img
                  src="src\assets\LinkedIn_logo_initials.png"
                  alt=""
                  className="size-32 grayscale-100 blur-sm transform transition duration-300 ease-in-out hover:filter-none hover:-translate-y-4"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto h-screen flex flex-col justify-center">
        <div className="text-center text-4xl">
          <p>Looks like you have reached the end.</p>
          <br />
          <hr />
          <br />
          <p>Thank you for visiting my portfolio</p>
        </div>
      </div>
    </>
  );
}
