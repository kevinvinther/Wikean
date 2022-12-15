import React from "react"
import { NavLink } from "react-router-dom"

export default function LogIn(props) {
    return (
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
            <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                <h3 class="text-2xl font-bold text-center">{props.text}</h3>
                <form action="">
                    <div class="mt-4">
                        <div>
                            <label class="block" for="email">
                                Email
                            </label>
                            <input
                                type="text"
                                placeholder="kevstjernen@bundgaard.dk"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                        </div>
                        <div className="mt-4">
                            <label class="block" for="name">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Kevin Rosenstjerne Bundgaard"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                        </div>
                        <div className="mt-4">
                            <label class="block" for="name">
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder="kevrosengaard"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                        </div>
                        <div class="mt-4">
                            <label class="block">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                        </div>
                        <div class="flex items-baseline justify-between">
                            <NavLink to="/article">
                                <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                                    {props.text}
                                </button>
                            </NavLink>
                            {props.text != "Sign Up" && (
                                <a href="#" class="text-sm text-blue-600 hover:underline">
                                    Forgot password?
                                </a>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
