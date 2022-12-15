import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="mx-[18em] my-[10em]">
            <div className="mainhome"></div>
            <h1 className="font-articleTitle font-bold text-[3em] m-0">
                Learn High-Level Mathematics for Free
            </h1>
            <subtitle className="font-articleBody text-gray-500 text-[1.5em] ">
                Wikean is a learning platform for all your mathematical needs
            </subtitle>
            <form className="mt-10">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div className="flex">
                        <input
                            type="email"
                            id="email"
                            class="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20em] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
                            placeholder="E-mail address"
                            required
                        />
                        <NavLink type="button" to="/login">
                            <p class="h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Sign Up
                            </p>
                        </NavLink>
                    </div>
                </div>
            </form>
        </div>
    )
}
