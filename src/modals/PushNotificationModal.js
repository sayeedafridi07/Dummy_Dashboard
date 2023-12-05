import React from 'react'

const PushNotificationModal = ({ open, setOpen }) => {
    return (
        open && <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center" onClick={() => setOpen(false)}
        style={{ zIndex: 999999 }} 
        >
            <div className="h-[calc(100vh-50px)] w-[calc(100vw-1000px)] bg-[var(--white)] p-10 flex flex-col gap-5"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between">
                    <h2 className="text-[var(--black)] font-[var(--font-bold-4)]">
                        Push Notification
                    </h2>
                    <img src="/assets/icons/close.svg" alt="" className="h-5 object-contain cursor-pointer" onClick={() => setOpen(false)} />
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-[var(--font-bold-3)]">
                            Title or Main message
                        </span>
                        <input type="text" placeholder="Input Title here" className="w-full h-12 rounded-md pl-5 pr-10 bg-[var(--grey-5)] text-sm" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-[var(--font-bold-3)]">
                            An optional, Longer message that is shown below the title
                        </span>
                        <textarea type="text" placeholder="Message push Notification" className="w-full h-32 rounded-md pl-5 pt-5 bg-[var(--grey-5)] text-sm hide-scroll" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-[var(--font-bold-3)]">
                            Link will be opened inside the app when notification is clicked
                        </span>
                        <div className=" inline-flex ">
                            <img src="/assets/icons/link.svg" alt="" className="rounded-l-md bg-[var(--primary)] p-2 px-3 h-12 object-contain" />
                            <input type="text" placeholder="Input link here" className="w-full h-12 rounded-r-md pl-5 pr-10 bg-[var(--grey-5)] text-sm" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-[var(--font-bold-3)]">
                            A link to an image that will be attached to your push notification
                        </span>
                        <ul className="inline list-disc list-inside text-sm mb-2">
                            <li className="">
                                Image in PNG or JPG format
                            </li>
                            <li className="">
                                Image sizes smaller than 300KB
                            </li>
                            <li className="text-[var(--primary)]">
                                Completed additional configuration for IOS
                            </li>
                        </ul>
                        <div className=" inline-flex ">
                            <img src="/assets/icons/image.svg" alt="" className="rounded-l-md bg-[var(--primary)] p-2 px-3 h-12 object-contain" />
                            <input type="text" placeholder="Upload image here" className="w-full h-12 rounded-r-md pl-5 pr-10 bg-[var(--grey-5)] text-sm" />
                        </div>
                    </div>
                </div>
                <button className="text-center bg-[var(--primary)] rounded-xl py-3 text-[var(--white)] text-sm font-[var(--font-bold-4)] mt-2">
                    Send Push Notification
                </button>
            </div>
        </div>
    )
}

export default PushNotificationModal