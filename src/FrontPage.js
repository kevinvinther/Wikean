import React from "react"
import { NavLink } from "react-router-dom"

export default function FrontPage() {
    return (
        <div className="flex justify-between">
            <div className="w-[50%] pt-[1em] px-[4em]">
                <NavLink to="/graphview">
                    <h1 className="font-bold text-2xl text-blue-400  font-articleTitle">
                        Graph View
                    </h1>
                </NavLink>
                <h1 className="font-bold text-4xl  font-articleTitle">
                    Latest Read Articles
                </h1>
                <div className="flex">
                    <div class="max-w-[15em] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                        <div class="p-5">
                            <NavLink to="/article">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Introduction to Boolean Algebra
                                    </h5>
                                </a>
                            </NavLink>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Boolean algebra is the algebra of two-valued logic
                            </p>
                        </div>
                    </div>
                    <div class="max-w-[15em] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Bayes' Theorem
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Bayes' theorem named after Thomas Bayes, describes the
                                probability of an event, based on prior knowledge of conditions
                            </p>
                        </div>
                    </div>
                    <div class="max-w-[15em] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Stirling Numbers of the first kind
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Stirling numbers of the first kind arise in the study of
                                permutations. In particular, the Stirling numbers...
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className="font-bold text-4xl  font-articleTitle">Next Up</h1>
                <div className="flex">
                    <div class="max-w-[15em] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                        <div class="p-5">
                            <NavLink to="/article">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Applications of Boolean Algebra
                                    </h5>
                                </a>
                            </NavLink>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Boolean algebra has many applications, for example in Computer
                                Science.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-[15em] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Conditional Probability
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Conditional Probability is very useful.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-[15em] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Stirling Numbers of the second kind
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Stirling Numbers of the second kind are awesome.
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className="font-bold text-4xl  font-articleTitle">Courses</h1>
                <div className="flex">
                    <div class="max-w-[15em] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                        <div class="p-5">
                            <NavLink to="/article">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Linear Algebra
                                    </h5>
                                </a>
                            </NavLink>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Learn the basics of Linear Algebra.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-[15em] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Basic Calculus
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Learn to differentiate and integrate.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-[15em] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Introduction to Statistics
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Statistics is the science of learning from data.
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className="font-bold text-4xl  font-articleTitle">Read Later</h1>
                <div className="flex">
                    <div class="max-w-[15em] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                        <div class="p-5">
                            <NavLink to="/article">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Introduction to Linear Algebra
                                    </h5>
                                </a>
                            </NavLink>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Linear Algebra is the study of linear equations.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-[15em] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Introduction to Calculus
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Calculus is the study of change.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-[15em] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Boole's Inequality
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Boole's Inequality is a very useful inequality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[50%] px-[4em] pt-[1em]">
                <h1 className="font-bold text-4xl font-articleTitle text-center">
                    Wibun20
                </h1>
                <div class="mb-1 text-lg font-medium text-center text-gray-700 ">
                    Progress to level 42
                </div>
                <div class="w-full bg-gray-200 rounded-full mt-2">
                    <div
                        class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-l-full"
                        style={{ width: "81.2%" }}
                    >
                        81.2%
                    </div>
                </div>
                <h2 className="font-articleTitle mt-5 text-2xl">
                    Recently Acquired Achievements
                </h2>
                <div className="flex">
                    <div class="max-w-[15em] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                        <a href="#">
                            <img
                                class="rounded-t-lg"
                                src="https://cdn.britannica.com/68/6768-050-A7F2D15C/engraving-George-Boole.jpg?w=400&h=300&c=crop"
                                alt=""
                            />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    George Boole
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                You read every article and did every quiz in Boolean Algebra,
                                congratulations!
                            </p>
                        </div>
                    </div>
                    <div class="max-w-[15em] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                        <a href="#">
                            <img
                                class="rounded-t-lg"
                                src="https://s2.dmcdn.net/v/SGfuv1Uu3OLL1JFg_/x1080"
                                alt=""
                            />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    John Carpenter
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                You got 100% correct on 50 quizzes, well done!
                            </p>
                        </div>
                    </div>
                    <div class="max-w-[15em] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                        <a href="#" className="overflow-hidden">
                            <img
                                class="rounded-t-lg "
                                src="https://historyofyesterday.com/wp-content/uploads/2022/09/edit-Plato_by_Leonidas_Drosis_on_May_7_2022.png"
                                alt=""
                            />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Plato
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                You finished a course! congratulations!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
