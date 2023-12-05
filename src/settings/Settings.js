import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const tabs = [
    {
        name: 'Dashboard',
        value: 'dashboard',
    },
    {
        name: 'Apps',
        value: 'apps',
    },
]

const themes = [
    {
        name: 'Blue Light',
        value: 'blue-light',
        selected: true,
    },
    {
        name: 'Black Elegant',
        value: 'black-elegant',
        selected: false,
    },
    {
        name: 'Orange Squash',
        value: 'orange-squash',
        selected: false,
    },
]

const languages = [
    {
        name: "English",
        code: "us",
        selected: true
    },
    {
        name: "German",
        code: "de",
        selected: false
    },
    {
        name: "French",
        code: "fr",
        selected: false
    },
    {
        name: "Italy",
        code: "it",
        selected: false
    }
]

export default function Settings() {
    const [tab, setTab] = useState('dashboard');
    const [selectedImage, setSelectedImage] = useState('/logo.png');
    
    return (
        <div className="flex flex-col gap-5 p-5 md:p-10">
            <ul className="flex items-center justify-start gap-2 text-lg">
                <Link to="/settings" className="font-[var(--font-bold-4)]">
                    Settings
                </Link>
            </ul>
            <div className='flex flex-col gap-5'>
                <div className="flex gap-5">
                    {tabs.map((item) => (
                        <div className="flex flex-col gap-2" key={item.value}>
                            <button
                                key={item.value}
                                className={`pr-5 md:pr-10 font-[var(--font-bold-3)] rounded-full ${tab === item.value
                                    ? "text-[var(--black)]"
                                    : "text-[var(--grey)]"
                                    }`}
                                onClick={() => setTab(item.value)}
                            >
                                For {item.name}
                            </button>
                            <div
                                className={`w-full h-1 rounded-full ${tab === item.value
                                    ? "bg-gradient-to-r from-[#3B95C3] to-[#6CE4FF]"
                                    : "bg-[var(--primary-2)]"
                                    }`}
                            ></div>
                        </div>
                    ))}
                </div>
                <div className="bg-[var(--white)] rounded-md p-8 flex flex-col gap-5">
                    {
                        tab === 'apps' && (
                            <div className="flex flex-col gap-5">
                                <span className="text-[var(--black)] text-base font-[var(--font-bold-4)]">Change Logo :</span>
                                <div className="flex flex-wrap gap-5">
                                    <img
                                        src={selectedImage}
                                        alt=""
                                        className="w-36 h-10 object-contain"
                                    />
                                    <label htmlFor="logo" className="bg-[var(--primary-2)] rounded-md px-8 py-3 text-sm text-[var(--primary)] flex items-center gap-5 cursor-pointer">
                                        <input type="file" name="logo" id="logo" className="hidden" onChange={(e) => setSelectedImage(URL.createObjectURL(e.target.files[0]))} />
                                        <span className="text-base font-[var(--font-bold-3)]">Upload Logo</span>
                                    </label>
                                    <button className="rounded-md px-8 py-3 text-sm border border-[var(--primary)] font-[var(--font-bold-3)] text-[var(--primary)] cursor-pointer">
                                        Delete Logo
                                    </button>
                                </div>
                            </div>
                        )
                    }
                    <div className="flex flex-col gap-5">
                        <span className="text-[var(--black)] text-base font-[var(--font-bold-4)]">Change Color Theme</span>
                        <div className="flex flex-wrap gap-5">
                            {themes.map((item, index) => (
                                <div className="flex flex-col gap-2" key={index}>
                                    <img
                                        src={`assets/icons/${item.value}.svg`}
                                        alt=""
                                        className="w-36 object-contain"
                                    />
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name={item.value}
                                            id={item.value}
                                            className="h-4 w-4"
                                            defaultChecked={item.selected}
                                        />
                                        <label
                                            htmlFor={item.value}
                                            className="flex items-center gap-2 cursor-pointer leading-none"
                                        >
                                            {item.name}
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <span className="text-[var(--black)] text-base font-[var(--font-bold-4)]">Add Language</span>
                        <div className="flex flex-wrap gap-5">
                            {languages.map((item, index) => (
                                <div className="inline-flex items-center gap-5" key={index}>
                                    <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
                                        <input
                                            id={item.code}
                                            type="checkbox"
                                            className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 bg-[var(--grey-2)] checked:bg-[var(--primary)] peer-checked:border-[var(--primary)] peer-checked:before:bg-[var(--primary)]"
                                            defaultChecked={item.selected}
                                        />
                                        <label
                                            htmlFor={item.code}
                                            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-[var(--primary)] peer-checked:before:bg-[var(--primary)]">
                                            <div className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4" data-ripple-dark="true"></div>
                                        </label>
                                    </div>
                                    <span className="text-[var(--black)] text-base font-[var(--font-bold-4)]">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-start gap-5 mt-10">
                        <button className="rounded-md px-8 py-3 text-sm bg-[var(--primary)] text-[var(--white)]">Apply</button>
                        <button className="rounded-md px-8 py-3 text-sm border border-[var(--primary)] text-[var(--primary)]">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}