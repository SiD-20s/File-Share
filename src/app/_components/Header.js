"use client";

import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="bg-white shadow relative">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <img src="/logoipsum-360.png" height={100} width={150} />
            </div>

            <div className="md:flex md:items-center md:gap-12">
              {/* Nav: desktop and mobile versions. Mobile opens as an absolute dropdown aligned to the site container. */}
              <nav aria-label="Global" className="md:block">
                {/* Mobile dropdown (visible on md and smaller when open) */}
                <div
                  className={`md:hidden ${open ? "block" : "hidden"} absolute left-0 right-0 top-full bg-white shadow-md z-40`}
                >
                  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <ul className="flex flex-col gap-4 text-sm py-4">
                      <li>
                        <a
                          className="text-gray-500 transition hover:text-gray-500/75"
                          href="#"
                          onClick={closeMenu}
                        >
                          Home
                        </a>
                      </li>

                      <li>
                        <a
                          className="text-gray-500 transition hover:text-gray-500/75"
                          href="/upload"
                          onClick={closeMenu}
                        >
                          Upload
                        </a>
                      </li>

                      <li>
                        <a
                          className="text-gray-500 transition hover:text-gray-500/75"
                          href="/aboutus"
                          onClick={closeMenu}
                        >
                          About Us
                        </a>
                      </li>

                      <li>
                        <a
                          className="text-gray-500 transition hover:text-gray-500/75"
                          href="/contactus"
                          onClick={closeMenu}
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Desktop nav (visible md+) */}
                <div className="hidden md:block">
                  <ul className="flex items-center gap-6 text-sm">
                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="#"
                      >
                        Home
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="/upload"
                      >
                        Upload
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="/aboutus"
                      >
                        About Us
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="/contactus"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                    href="/upload"
                    onClick={closeMenu}
                  >
                    Get Started
                  </a>
                </div>

                {/* Hamburger: visible on md and smaller */}
                <div className="block md:hidden">
                  <button
                    onClick={toggleMenu}
                    aria-expanded={open}
                    aria-label="Toggle menu"
                    className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {open ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      )}
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
