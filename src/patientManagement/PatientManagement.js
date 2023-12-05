import React, { useState, useEffect } from 'react'
import generateId from '../utils/generateId'
import { Link } from 'react-router-dom'

const ArrowLeft = ({ fill, className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill={fill}>
            <path d="M15 6L9 12L15 18" stroke="#3CA5DC" strokeWidth="2" />
        </svg>
    )
}

const ArrowRight = ({ fill, className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill={fill}>
            <path d="M9 6L15 12L9 18" stroke="#3CA5DC" strokeWidth="2" />
        </svg>
    )
}

const ArrowDown = ({ fill, className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill={fill}>
            <path d="M6 9L12 15L18 9" stroke="#3CA5DC" strokeWidth="2" />
        </svg>
    )
}

const ArrowUp = ({ fill, className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill={fill}>
            <path d="M6 15L12 9L18 15" stroke="#3CA5DC" strokeWidth="2" />
        </svg>
    )
}

const Search = ({ fill, className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill={fill}>
            <path d="M21 21L15 15" stroke="#ABABAB" strokeWidth="2" strokeLinecap="round" />
            <circle cx="10" cy="10" r="7" stroke="#ABABAB" strokeWidth="2" />
        </svg>
    )
}

export const initialPatients = [
    {
        name: "Erin Dias",
        gender: "Female",
        age: "20 Years",
        isPremium: true,
        dob: "20 May 2010",
        email: "erin.dias@gmail.com",
        ethnicity: "Asian",
        city: "Geneva",
        address: "Rue de Rhone",
        phone: "+41-9876-9876",
        country: "Switzerland",
        coverage: "Government Covered",
        avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
        name: "John Smith",
        gender: "Male",
        age: "35 Years",
        isPremium: false,
        dob: "15 March 1988",
        email: "john.smith@example.com",
        ethnicity: "Caucasian",
        city: "New York",
        address: "123 Main St",
        phone: "+1-555-555-5555",
        country: "USA",
        coverage: "Private Insurance",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Maria Rodriguez",
        gender: "Female",
        age: "28 Years",
        isPremium: true,
        dob: "10 July 1995",
        email: "maria.rodriguez@example.com",
        ethnicity: "Hispanic",
        city: "Madrid",
        address: "Calle Gran Via",
        phone: "+34-1234-5678",
        country: "Spain",
        coverage: "Private Insurance",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
        name: "David Johnson",
        gender: "Male",
        age: "45 Years",
        isPremium: true,
        dob: "5 October 1978",
        email: "david.johnson@example.com",
        ethnicity: "African American",
        city: "Los Angeles",
        address: "456 Oak Street",
        phone: "+1-789-123-4567",
        country: "USA",
        coverage: "Medicare",
        avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
        name: "Sophie Turner",
        gender: "Female",
        age: "30 Years",
        isPremium: false,
        dob: "8 February 1993",
        email: "sophie.turner@example.com",
        ethnicity: "Caucasian",
        city: "London",
        address: "Baker Street",
        phone: "+44-20-1234-5678",
        country: "United Kingdom",
        coverage: "No Insurance",
        avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
        name: "Carlos Hernandez",
        gender: "Male",
        age: "32 Years",
        isPremium: true,
        dob: "15 June 1991",
        email: "carlos.hernandez@example.com",
        ethnicity: "Latino",
        city: "Mexico City",
        address: "Avenida Reforma",
        phone: "+52-55-8765-4321",
        country: "Mexico",
        coverage: "Private Insurance",
        avatar: "https://i.pravatar.cc/150?img=6",
    },
    {
        name: "Aisha Patel",
        gender: "Female",
        age: "25 Years",
        isPremium: false,
        dob: "12 April 1998",
        email: "aisha.patel@example.com",
        ethnicity: "South Asian",
        city: "Mumbai",
        address: "Dadar West",
        phone: "+91-98765-43210",
        country: "India",
        coverage: "No Insurance",
        avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
        name: "Mikhail Ivanov",
        gender: "Male",
        age: "40 Years",
        isPremium: true,
        dob: "3 September 1983",
        email: "mikhail.ivanov@example.com",
        ethnicity: "Russian",
        city: "Moscow",
        address: "Tverskaya Street",
        phone: "+7-495-123-45-67",
        country: "Russia",
        coverage: "Government Covered",
        avatar: "https://i.pravatar.cc/150?img=8",
    },
    {
        name: "Layla Abdullah",
        gender: "Female",
        age: "22 Years",
        isPremium: false,
        dob: "18 July 2001",
        email: "layla.abdullah@example.com",
        ethnicity: "Middle Eastern",
        city: "Dubai",
        address: "Sheikh Zayed Road",
        phone: "+971-50-123-4567",
        country: "United Arab Emirates",
        coverage: "No Insurance",
        avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
        name: "Takashi Yamamoto",
        gender: "Male",
        age: "28 Years",
        isPremium: true,
        dob: "7 November 1995",
        email: "takashi.yamamoto@example.com",
        ethnicity: "Japanese",
        city: "Tokyo",
        address: "Shibuya Crossing",
        phone: "+81-3-1234-5678",
        country: "Japan",
        coverage: "Private Insurance",
        avatar: "https://i.pravatar.cc/150?img=10",
    },
    {
        name: "Isabella Costa",
        gender: "Female",
        age: "32 Years",
        isPremium: true,
        dob: "25 December 1990",
        email: "isabella.costa@example.com",
        ethnicity: "Brazilian",
        city: "Rio de Janeiro",
        address: "Copacabana Beach",
        phone: "+55-21-98765-4321",
        country: "Brazil",
        coverage: "Private Insurance",
        avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
        name: "Kim Soo-Min",
        gender: "Female",
        age: "26 Years",
        isPremium: false,
        dob: "14 March 1997",
        email: "kim.soomin@example.com",
        ethnicity: "Korean",
        city: "Seoul",
        address: "Myeongdong",
        phone: "+82-2-1234-5678",
        country: "South Korea",
        coverage: "No Insurance",
        avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
        name: "Fernando Martinez",
        gender: "Male",
        age: "38 Years",
        isPremium: true,
        dob: "6 August 1985",
        email: "fernando.martinez@example.com",
        ethnicity: "Hispanic",
        city: "Barcelona",
        address: "La Rambla",
        phone: "+34-6789-1234",
        country: "Spain",
        coverage: "Private Insurance",
        avatar: "https://i.pravatar.cc/150?img=13",
    },
    {
        name: "Zara Khan",
        gender: "Female",
        age: "24 Years",
        isPremium: false,
        dob: "9 October 1999",
        email: "zara.khan@example.com",
        ethnicity: "South Asian",
        city: "Karachi",
        address: "Clifton",
        phone: "+92-345-678-9012",
        country: "Pakistan",
        coverage: "No Insurance",
        avatar: "https://i.pravatar.cc/150?img=14",
    },
    {
        name: "Alexei Petrov",
        gender: "Male",
        age: "42 Years",
        isPremium: true,
        dob: "20 June 1981",
        email: "alexei.petrov@example.com",
        ethnicity: "Russian",
        city: "St. Petersburg",
        address: "Nevsky Prospekt",
        phone: "+7-812-123-45-67",
        country: "Russia",
        coverage: "Government Covered",
        avatar: "https://i.pravatar.cc/150?img=15",
    },
];

const categories = [
    {
        name: "Patients",
        value: "patients",
    },
    {
        name: "Sex",
        value: "sex",
    },
    {
        name: "Age Group",
        value: "age",
    },
    {
        name: "Policy Number",
        value: "policy",
    },
];

export default function PatientManagement() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("");
    const limit = 8;
    const [patients, setPatients] = useState(initialPatients);

    useEffect(() => {
        if (query) {
            const filteredPatients = initialPatients.filter((patient) =>
                patient.name.toLowerCase().includes(query.toLowerCase()) || patient.email.toLowerCase().includes(query.toLowerCase()) || patient.phone.toLowerCase().includes(query.toLowerCase())
            );
            setPatients(filteredPatients);
        } else {
            setPatients(initialPatients);
        }
    }, [query]);

    useEffect(() => {
        if (category) {
            const filteredPatients = initialPatients.filter((patient) =>
                patient.name.toLowerCase().includes(query.toLowerCase())
            );
            setPatients(filteredPatients);
        } else {
            setPatients(initialPatients);
        }
    }, [category]);

    const [prev, setPrev] = useState(0);
    const [next, setNext] = useState(limit);

    const handlePrev = () => {
        setPrev(prev - limit);
        setNext(next - limit);
    }

    const handleNext = () => {
        setPrev(prev + limit);
        setNext(next + limit);
    }

    return (
        <div className="flex flex-col gap-5 p-5 md:p-10">
            <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-5 items-center justify-start w-full">
                    <span className="text-[var(--black)] text-[20px] font-[var(--font-bold-4)] whitespace-nowrap">Patient Management</span>
                    <div className="relative ml-auto md:m-0 w-full sm:w-auto">
                        <input
                            type="text"
                            className="border-[var(--grey-3)] border-2 bg-white rounded-full pr-8 py-3 pl-14 w-full"
                            placeholder="Search patient here"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <div className="absolute top-1/2 left-5 transform -translate-y-1/2">
                            <Search className="h-5 text-[var(--grey-3)]" />
                        </div>
                    </div>
                    <div className="relative flex gap-2 items-center bg-[var(--primary-2)] text-[var(--primary)] rounded-full px-5 py-2 group">
                        <span className="font-[var(--font-bold-1)]">{category ? category : "Choose Category"}</span>
                        <ArrowDown className="h-5 text-[var(--primary)] cursor-pointer" />
                        <div className="absolute top-full left-0 w-36 py-2 bg-white rounded-xl shadow-lg group-hover:block hidden">
                            {categories && categories.map((category) => (
                                <span
                                    className="block px-5 py-2 cursor-pointer whitespace-nowrap"
                                    onClick={() => setCategory(category.name)}
                                >
                                    {category.name}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-5 items-center ml-auto">
                        <button
                            className="bg-[var(--primary-2)] rounded-full"
                            onClick={handlePrev}
                            disabled={prev === 0}
                        >
                            <ArrowLeft className="h-5 text-[var(--primary)]" />
                        </button>
                        <span className="text-[var(--black)] font-[var(--font-bold-1)] whitespace-nowrap">
                            {prev + 1} - {next} of {initialPatients.length}
                        </span>
                        <button
                            className="bg-[var(--primary-2)] rounded-full"
                            onClick={handleNext}
                            disabled={next >= initialPatients.length}
                        >
                            <ArrowRight className="h-5 text-[var(--primary)]" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {patients && patients.slice(prev, next).map((patient, index) => (
                    <div className="flex flex-col justify-center items-center gap-5 bg-[var(--white)] rounded-xl p-5" key={index}>
                        <img
                            src={patient.avatar}
                            alt=""
                            className="h-20 w-20 object-cover rounded-full"
                        />
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-[var(--black)] text-[20px] font-[var(--font-bold-4)]">{patient.name}</span>
                            <span className="text-[var(--grey)] text-sm">{patient.gender}{" "}{patient.dob}</span>
                        </div>
                        <Link to={`/patient-management/${generateId(patient.email)}?type=Manage Profile`} className="w-full rounded-xl bg-[var(--primary-2)] text-center text-[var(--primary)] font-[var(--font-bold-3)] py-3 px-5">
                            Manage Profile
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
