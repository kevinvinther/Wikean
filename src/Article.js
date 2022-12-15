import React from "react"

export default function Artice(props) {
    return (
        <div className="bg-white mt-10 flex justify-between">
            <div className="mx-5 w-[80em] fixed left-0">
                <h3 className="text-xl font-bold ">Table Of Contents</h3>
                <ul>
                    <li>
                        <a href="#title" className="text-gray-700">
                            Introduction To Boolean Algebra
                        </a>
                    </li>
                    <li>
                        <a href="#operations" className="text-gray-700">
                            Operations
                        </a>
                    </li>
                    <li>
                        <a href="#laws" className="text-gray-700">
                            Laws
                        </a>
                    </li>
                    <li>
                        <a href="#use-cases" className="text-gray-700">
                            Use Cases
                        </a>
                    </li>
                    <li>
                        <a href="#quiz" className="text-gray-700">
                            Quiz
                        </a>
                    </li>
                </ul>
            </div>
            <article className=" m-auto leading-6 w-[50em]">
                <h1 className="font-articleTitle font-bold text-5xl" id="title">
                    {props.title}
                </h1>
                <p className="font-articleBody text-gray-900 mt-3 text-[18px]">
                    {props.body}
                </p>
            </article>
            <div className="mx-10 ml-[10em] w-[25em] fixed right-0" id="notes">
                <label
                    for="message"
                    class="block mb-2 text-xl font-bold  text-center text-gray-900 dark:text-white"
                >
                    Notes
                </label>
                <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                ></textarea>
            </div>
        </div>
    )
}
