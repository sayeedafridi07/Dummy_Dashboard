import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import PushNotificationModal from "../modals/PushNotificationModal";

const initialUsers = [
    {
        name: "Samantha William",
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 30) + 1}`,
        status: "Online",
        unreadCount: 1,
        lastMsg: {
            message: "Can you send me the report?",
            time: "3:15 PM",
            unread: true,
        },
        chats: [
            {
                message: "Can you send me the report?",
                time: "3:15 PM",
                sender: "Samantha William",
                unread: true,
            },
            {
                message: "Sure, I'll email it to you.",
                time: "3:20 PM",
                sender: "Robert Smith",
                unread: false,
            },
            {
                message: "Received! Thank you.",
                time: "3:25 PM",
                sender: "Samantha William",
                unread: false,
            },
            {
                message: "No problem!",
                time: "3:30 PM",
                sender: "Robert Smith",
                unread: false,
            },
        ]
    },
    {
        name: "John Doe",
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 30) + 1}`,
        status: "Offline",
        unreadCount: 0,
        lastMsg: {
            message: "Sure, I'll take care of it.",
            time: "1:30 PM",
            unread: false,
        },
        chats: [
            {
                message: "Sure, I'll take care of it.",
                time: "1:30 PM",
                sender: "John Doe",
                unread: false,
            },
            {
                message: "Thanks!",
                time: "1:32 PM",
                sender: "Samantha William",
                unread: false,
            },
            {
                message: "You're welcome!",
                time: "1:35 PM",
                sender: "John Doe",
                unread: false,
            },
        ]
    },
    {
        name: "Alice Johnson",
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 30) + 1}`,
        status: "Offline",
        unreadCount: 2,
        lastMsg: {
            message: "Hey, how are you?",
            time: "2:00 PM",
            unread: true,
        },
        chats: [
            {
                message: "Hey, how are you?",
                time: "2:00 PM",
                sender: "Alice Johnson",
                unread: false,
            },
            {
                message: "I'm good, thanks! How about you?",
                time: "2:02 PM",
                sender: "Samantha William",
                unread: false,
            },
            {
                message: "I had a busy day!",
                time: "2:05 PM",
                sender: "Alice Johnson",
                unread: false,
            },
            {
                message: "Hope it gets better!",
                time: "2:10 PM",
                sender: "Samantha William",
                unread: false,
            },
        ]
    },
    {
        name: "Robert Smith",
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 30) + 1}`,
        status: "Offline",
        unreadCount: 0,
        lastMsg: {
            message: "Can you send the presentation slides?",
            time: "4:15 PM",
            unread: false,
        },
        chats: [
            {
                message: "Can you send the presentation slides?",
                time: "4:15 PM",
                sender: "Robert Smith",
                unread: false,
            },
            {
                message: "Sure, I'll send them right away.",
                time: "4:20 PM",
                sender: "Samantha William",
                unread: false,
            },
            {
                message: "Got it. Thanks!",
                time: "4:25 PM",
                sender: "Robert Smith",
                unread: false,
            },
        ]
    },
    {
        name: "Emily Davis",
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 30) + 1}`,
        status: "Online",
        unreadCount: 0,
        lastMsg: {
            message: "Let's plan for a team outing!",
            time: "5:30 PM",
            unread: false,
        },
        chats: [
            {
                message: "Let's plan for a team outing!",
                time: "5:30 PM",
                sender: "Emily Davis",
                unread: false,
            },
            {
                message: "That's a great idea! When and where?",
                time: "5:35 PM",
                sender: "Samantha William",
                unread: false,
            },
            {
                message: "How about next Friday at the park?",
                time: "5:40 PM",
                sender: "Emily Davis",
                unread: false,
            },
            {
                message: "Perfect! I'll check with the team.",
                time: "5:45 PM",
                sender: "Samantha William",
                unread: false,
            },
        ]
    },
    {
        name: "Michael Johnson",
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 30) + 1}`,
        status: "Online",
        unreadCount: 0,
        lastMsg: {
            message: "Any updates on the project?",
            time: "6:45 PM",
            unread: false,
        },
        chats: [
            {
                message: "Any updates on the project?",
                time: "6:45 PM",
                sender: "Michael Johnson",
                unread: false,
            },
            {
                message: "I'll provide an update in tomorrow's meeting.",
                time: "6:50 PM",
                sender: "Samantha William",
                unread: false,
            },
            {
                message: "Sounds good. Looking forward to it!",
                time: "6:55 PM",
                sender: "Michael Johnson",
                unread: false,
            },
        ]
    },
    {
        name: "Jessica Miller",
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 30) + 1}`,
        status: "Offline",
        unreadCount: 0,
        lastMsg: {
            message: "Did you review the proposal?",
            time: "7:30 PM",
            unread: false,
        },
        chats: [
            {
                message: "Did you review the proposal?",
                time: "7:30 PM",
                sender: "Jessica Miller",
                unread: false,
            },
            {
                message: "Yes, I did. It looks good!",
                time: "7:35 PM",
                sender: "Samantha William",
                unread: false,
            },
            {
                message: "Great! Let's discuss it tomorrow.",
                time: "7:40 PM",
                sender: "Jessica Miller",
                unread: false,
            },
        ]
    },
    {
        name: "David Wilson",
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 30) + 1}`,
        status: "Online",
        unreadCount: 0,
        lastMsg: {
            message: "Thanks for the birthday wishes!",
            time: "8:15 PM",
            unread: false,
        },
        chats: [
            {
                message: "Thanks for the birthday wishes!",
                time: "8:15 PM",
                sender: "David Wilson",
                unread: false,
            },
            {
                message: "You're welcome! Hope you had a great day.",
                time: "8:20 PM",
                sender: "Samantha William",
                unread: false,
            },
            {
                message: "I did! Thanks again!",
                time: "8:25 PM",
                sender: "David Wilson",
                unread: false,
            },
        ]
    },
    {
        name: "Sophie Anderson",
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 30) + 1}`,
        status: "Offline",
        unreadCount: 0,
        lastMsg: {
            message: "Can we reschedule the meeting to next week?",
            time: "9:00 PM",
            unread: false,
        },
        chats: [
            {
                message: "Can we reschedule the meeting to next week?",
                time: "9:00 PM",
                sender: "Sophie Anderson",
                unread: false,
            },
            {
                message: "Sure, let's find a suitable time.",
                time: "9:05 PM",
                sender: "Samantha William",
                unread: false,
            },
            {
                message: "Thanks for understanding!",
                time: "9:10 PM",
                sender: "Sophie Anderson",
                unread: false,
            },
        ]
    },
    {
        name: "Daniel Brown",
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 30) + 1}`,
        status: "Offline",
        unreadCount: 0,
        lastMsg: {
            message: "How about a virtual game night this weekend?",
            time: "10:30 PM",
            unread: false,
        },
        chats: [
            {
                message: "How about a virtual game night this weekend?",
                time: "10:30 PM",
                sender: "Daniel Brown",
                unread: false,
            },
            {
                message: "That sounds fun! Count me in.",
                time: "10:35 PM",
                sender: "Samantha William",
                unread: false,
            },
            {
                message: "Great! I'll organize it and let everyone know.",
                time: "10:40 PM",
                sender: "Daniel Brown",
                unread: false,
            },
        ]
    },
];

const chatMenu = [
    {
        name: "Send Push Notification",
    },
];

export default function Communication() {
    const limit = 4;
    const [users, setUsers] = useState(initialUsers.slice(0, limit));
    const [active, setActive] = useState(users[0]);
    const [open, setOpen] = useState({type: "", status: false});
    const [query, setQuery] = useState("");

    useEffect(() => {
        if (query) {
            const newUsers = initialUsers.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));
            setUsers(newUsers);
        } else {
            setUsers(initialUsers.slice(0, limit));
        }
    }, [query]);

    const handleViewMore = () => {
        const newUsers = [...users, ...initialUsers.slice(users.length, users.length + limit)];
        setUsers(newUsers);
    }

    return (
        <div className="flex flex-col gap-5 p-5 md:p-10">
            <ul className="flex items-center justify-start gap-2 text-lg">
                <Link
                    to="/communication"
                    className="text-[var(--black)] font-[var(--font-bold-4)]">
                    Communication
                </Link>
            </ul>
            <div className="flex gap-5">
                <div className="flex-1 bg-[var(--white)] rounded-xl p-5 flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="relative w-full">
                            <input type="text" placeholder="Search here" className="w-full h-11 rounded-full pl-12 pr-10 bg-[var(--grey-5)] text-sm" value={query} onChange={(e) => setQuery(e.target.value)} />
                            <img src="/assets/icons/search.svg" alt="" className="absolute top-1/2 transform -translate-y-1/2 left-5 h-5 object-contain" />
                        </div>
                        <img src="/assets/icons/plus.svg" alt="" className="h-8 object-contain" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-[var(--grey-2)] font-[var(--font-bold-4)]">
                            Chat
                        </h2>
                        <ul className="flex flex-col gap-2 h-[calc(100vh-410px)] overflow-y-auto hide-scroll">
                            {users && users.map((user) => (
                                <div
                                    className={`flex items-center gap-5 px-5 py-3 rounded-xl cursor-pointer ${active.name === user.name ? "bg-[var(--grey-5)]" : ""}`}
                                    key={user.name}
                                    onClick={() => setActive(user)}
                                >
                                    <div className="relative w-14 h-14">
                                        <img
                                            src={user.avatar}
                                            alt={user.name}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${user.status === "Online" ? "bg-[#85D114]" : "bg-[#98A1B0]"}`}></div>
                                    </div>
                                    <div className="flex-1 flex items-center justify-between border-b border-[var(--grey-5)] pb-5">
                                        <div className="flex flex-col w-full gap-2">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[var(--black)] font-[var(--font-bold-4)]">{user.name}</span>
                                                <span className="text-[#98A1B0] text-sm font-[var(--font-regular-2)] whitespace-nowrap">{user.lastMsg.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[#98A1B0] text-sm font-[var(--font-regular-2)]">{user.lastMsg.message}</span>
                                                {user.lastMsg.unread && (
                                                    <span
                                                        className="w-6 h-6 rounded-md bg-[var(--primary)] flex items-center justify-center text-[var(--white)] text-xs font-[var(--font-bold-4)] ml-auto"
                                                    >
                                                        {user.unreadCount}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ul>
                        <button className="flex items-center justify-center gap-2 border border-[var(--primary)] rounded-xl py-3 px-5 text-[var(--primary)] text-sm font-[var(--font-bold-2)]"
                            onClick={handleViewMore}
                        >
                            View More {`(${initialUsers.length - users.length})`}
                        </button>
                    </div>
                </div>
                <div className="w-3/5 flex flex-col gap-5 bg-[var(--white)] rounded-xl p-5">
                    <div className="flex items-center justify-between border-b border-[var(--grey-5)] pb-5">
                        <div className="flex items-center gap-5">
                            <div className="relative w-14 h-14">
                                <img
                                    src={active.avatar}
                                    alt={active.name}
                                    className="w-full h-full rounded-md object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[var(--black)] font-[var(--font-bold-4)]">{active.name}</span>
                                <div className="flex items-center gap-2">
                                    <span className={`w-3 h-3 rounded-full ${active.status === "Online" ? "bg-[#85D114]" : "bg-[#98A1B0]"}`}></span>
                                    <span className="text-[#98A1B0] text-sm font-[var(--font-regular-2)]">{active.status}</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <img src="/assets/icons/menu.svg" alt="" className="h-5 object-contain cursor-pointer" />
                            <div className="absolute top-8 right-0 w-fit bg-[var(--white)] rounded-xl shadow-md p-5 flex flex-col gap-5 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                {chatMenu.map((item) => (
                                    <span className="text-sm whitespace-nowrap cursor-pointer" onClick={() => setOpen({type: item.name, status: true})}>{item.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 h-[calc(100vh-425px)] overflow-y-auto hide-scroll">
                        {active.chats.map((chat) => (
                            <div className={`flex flex-col gap-2 ${chat.sender === active.name ? "items-end" : "items-start"}`}>
                                <div className={`flex items-center gap-2 ${chat.sender === active.name ? "flex-row-reverse" : ""}`}>
                                    <div className={`bg-[var(--grey-5)] p-5 rounded-xl ${chat.sender === active.name ? "bg-[var(--primary)] text-[var(--white)] rounded-br-none" : "rounded-bl-none"}`}>
                                        <span className="text-sm font-[var(--font-regular-2)]">{chat.message}</span>
                                    </div>
                                </div>
                                <span className="text-[#98A1B0] text-sm font-[var(--font-regular-2)]">{chat.time}</span>
                            </div>
                        ))}
                    </div>
                    <div className="relative">
                        <input type="text" placeholder="Write your message" className="w-full h-16 rounded-md pl-5 pr-32 bg-[var(--grey-5)] text-sm" />
                        <div className="absolute top-1/2 transform -translate-y-1/2 right-5 flex gap-2">
                            <div className="bg-[var(--grey-5)] rounded-md p-2 flex items-center gap-2">
                                <img src="/assets/icons/file.svg" alt="" className="h-6 object-contain" />
                            </div>
                            <div className="bg-[var(--primary)] rounded-md px-4 flex items-center gap-2">
                                <span className="text-[var(--white)] text-sm">Send</span>
                                <img src="/assets/icons/send.svg" alt="" className="h-4 object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PushNotificationModal open={open.status && open.type === "Send Push Notification"} setOpen={(status) => setOpen({type: open.type, status})} />
        </div>
    )
}