import React, { useEffect, useState } from 'react'

export const languages = [
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

export const logout = () => {
  localStorage.removeItem("user");
  window.location.href = "/";
}

export default function Navbar() {

  return (
    <div className="flex justify-between items-center bg-[var(--white)] h-20 px-5 md:gap-10 border-b-2 border-[var(--grey-3)] sticky top-0"
      style={{ zIndex: 99999 }}
    >
      <div className="flex items-center">
        <img
          src="logo.png"
          alt=""
          className="h-10 object-contain"
        />
      </div>
      <div className="flex gap-10 items-center">
        <Language language={languages[0]} />
        <User />
      </div>
    </div>
  )
}

const Language = ({ language }) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(language);

  const handleShow = () => {
    setShow(!show);
  }

  const handleSelect = (language) => {
    setSelected(language);
    setShow(false);
  }

  return (
    <div className="relative">
      <button className="flex gap-2 md:gap-5 items-center bg-[var(--grey-5)] rounded-lg py-2 px-5"
        onClick={handleShow}
      >
        <img
          src={`https://flagcdn.com/${selected.code}.svg`}
          alt=""
          className="h-8 w-8 object-cover rounded-full hidden md:block"
        />
        <span className="whitespace-nowrap">{'(' + selected.code.toUpperCase() + ')'}</span>
        <img
          src="/assets/icons/arrow-down.svg"
          alt=""
          className="h-5 object-contain"
        />
      </button>
      {show && (
        <div className="absolute top-10 right-0 w-fit bg-[var(--white)] shadow-lg rounded-lg py-3 px-5">
          {languages.map((item) => (
            <div
              className="flex gap-5 items-center py-2 cursor-pointer"
              key={item.name}
              onClick={() => handleSelect(item)}
            >
              <img
                src={`https://flagcdn.com/${item.code}.svg`}
                alt=""
                className="h-8 w-8 object-cover rounded-full"
              />
              <span className="whitespace-nowrap">{'(' + item.code.toUpperCase() + ')'}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const userMenu = [
  {
    name: "Logout",
    icon: "log-out.svg",
    link: "/logout",
  },
];

const User = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  return (
    <div className="flex gap-2 md:gap-5 items-center group">
      <img
        src={user?.avatar}
        alt=""
        className="h-10 object-contain rounded-full"
      />
      <div className="relative cursor-pointer">
        <img src="/assets/icons/arrow-down.svg" alt="" className="h-5 object-contain" />
        <div className="group-hover:block hidden absolute top-5 right-0 bg-[var(--white)] shadow-md rounded-lg py-3 px-5 w-40">
          {userMenu.map((item) => (
            <div className="flex gap-5 items-center py-2"
              onClick={
                item.name === "Logout" ? logout : null
              }
            >
              <img
                src={'/assets/icons/' + item.icon}
                alt=""
                className="h-5 object-contain"
              />
              <span className="whitespace-nowrap">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
