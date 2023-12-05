import React, { useState } from "react";
import generateId from "../utils/generateId";

const account = [
  {
    id: generateId(),
    avatar: `https://ui-avatars.com/api/?background=0D8ABC&color=fff&size=256&name=Sanjukta%20Ghosh&rounded=true&bold=true`,
    name: "Sundeep Gaba",
    email: "sg@alleshealth.com",
    password: "Pass123",
    phone: "+41798658316",
    status: true,
  },
];

const tabs = [
  {
    name: "Administrator",
    value: "administator",
  },
  {
    name: "Claims Manager",
    value: "claims-manager",
  },
];

export default function Auth() {
  const [tab, setTab] = useState("administator");
  const [passHidden, setPassHidden] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    const user = account.find(
      (item) => item.email === email && item.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 flex flex-col gap-10 justify-center items-center md:items-start px-10 md:pl-20 bg-[var(--white)]">
        <div>
          <img src="logo.png" alt="" className="h-16 object-contain" />
        </div>
        <div className="flex flex-col gap-10 w-full">
          <h1 className="text-4xl font-bold text-[var(--black)]">Welcome</h1>
          <div className="flex gap-5">
            {tabs.map((item) => (
              <div className="flex flex-col gap-2" key={item.value}>
                <button
                  key={item.value}
                  className={`pr-10 md:pr-20 font-[var(--font-bold-3)] rounded-full ${
                    tab === item.value
                      ? "text-[var(--black)]"
                      : "text-[var(--grey)]"
                  }`}
                  onClick={() => setTab(item.value)}
                >
                  {item.name}
                </button>
                <div
                  className={`w-full h-1 rounded-full ${
                    tab === item.value
                      ? "bg-gradient-to-r from-[#3B95C3] to-[#6CE4FF]"
                      : "bg-[var(--primary-2)]"
                  }`}
                ></div>
              </div>
            ))}
          </div>
          <form
            className="flex flex-col gap-4 max-w-md"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Input your email here"
                className="rounded-md bg-[var(--grey-4)] px-5 py-4 text-[var(--font-size-1)]"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="">
                Password
              </label>
              <div className="relative w-full">
                <input
                  type={passHidden ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Input your password here"
                  className=" rounded-md bg-[var(--grey-4)] px-5 py-4 text-[var(--font-size-1)] w-full pr-12"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-5 transform -translate-y-1/2"
                  onClick={() => setPassHidden(!passHidden)}
                >
                  <img
                    src={
                      passHidden
                        ? "assets/icons/open-eye.svg"
                        : "assets/icons/close-eye.svg"
                    }
                    alt=""
                    className="w-6 h-6"
                  />
                </button>
              </div>
              <div className="flex justify-end items-center w-full">
                <a
                  href="#"
                  className="font-[var(--font-bold-2)] text-[var(--primary)]"
                  style={{ fontSize: "var(--font-size-1)" }}
                >
                  Forgot Password ?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="rounded-xl bg-[var(--primary)] text-[var(--white)] font-[var(--font-bold-3)] py-4 mt-10"
              style={{ boxShadow: "0px 4px 15px rgba(60, 165, 220, 0.3)" }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="relative md:w-1/2 hidden md:flex flex-col items-center justify-center">
        <img
          src="assets/images/auth-bg.png"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-[var(--black)] opacity-20"></div>
      </div>
    </div>
  );
}
