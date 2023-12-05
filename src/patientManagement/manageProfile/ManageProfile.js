import React from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import generateId from '../../utils/generateId'
import useformatBreadcrumb from '../../utils/useformatBreadcrumb'
import { initialPatients } from '../PatientManagement'

const patientHistory = [
    {
        type: 'presciption',
        // date: '29 Nov 2023',
        date: Math.floor(Math.random() * 30) + 1 + ' Nov 2023',
        // time: '08 : 00 AM',
        time: Math.floor(Math.random() * 12) + 1 + ' : ' + Math.floor(Math.random() * 60) + 1 + ' ' + (Math.random() > 0.5 ? 'AM' : 'PM'),
        file: 'File-Presciption.pdf'
    },
    {
        type: 'xray',
        // date: '24 Nov 2023',
        date: Math.floor(Math.random() * 30) + 1 + ' Nov 2023',
        // time: '08 : 00 AM',
        time: Math.floor(Math.random() * 12) + 1 + ' : ' + Math.floor(Math.random() * 60) + 1 + ' ' + (Math.random() > 0.5 ? 'AM' : 'PM'),
        file: 'File-xray.jpg'
    },
    {
        type: 'report',
        // date: '22 Nov 2023',
        // time: '08 : 00 AM',
        date: Math.floor(Math.random() * 30) + 1 + ' Nov 2023',
        time: Math.floor(Math.random() * 12) + 1 + ' : ' + Math.floor(Math.random() * 60) + 1 + ' ' + (Math.random() > 0.5 ? 'AM' : 'PM'),
        file: 'File-report.pdf'
    },
    {
        type: 'doctor',
        // date: '18 Nov 2023',
        // time: '08 : 00 AM',
        date: Math.floor(Math.random() * 30) + 1 + ' Nov 2023',
        time: Math.floor(Math.random() * 12) + 1 + ' : ' + Math.floor(Math.random() * 60) + 1 + ' ' + (Math.random() > 0.5 ? 'AM' : 'PM'),
        file: 'File-doctor.pdf'
    },
    {
        type: 'lab',
        // date: '12 Nov 2023',
        // time: '08 : 00 AM',
        date: Math.floor(Math.random() * 30) + 1 + ' Nov 2023',
        time: Math.floor(Math.random() * 12) + 1 + ' : ' + Math.floor(Math.random() * 60) + 1 + ' ' + (Math.random() > 0.5 ? 'AM' : 'PM'),
        file: 'Report-lab.pdf'
    },
    {
        type: 'doctor',
        // date: '18 Nov 2023',
        // time: '08 : 00 AM',
        date: Math.floor(Math.random() * 30) + 1 + ' Nov 2023',
        time: Math.floor(Math.random() * 12) + 1 + ' : ' + Math.floor(Math.random() * 60) + 1 + ' ' + (Math.random() > 0.5 ? 'AM' : 'PM'),
        file: 'File-doctor.pdf'
    },
    {
        type: 'lab',
        // date: '12 Nov 2023',
        // time: '08 : 00 AM',
        date: Math.floor(Math.random() * 30) + 1 + ' Nov 2023',
        time: Math.floor(Math.random() * 12) + 1 + ' : ' + Math.floor(Math.random() * 60) + 1 + ' ' + (Math.random() > 0.5 ? 'AM' : 'PM'),
        file: 'Report-lab.pdf'
    },
]

const medicalRecordLibrary = [
    {
        name: 'Doctor’s Prescription',
        type: 'presciption',
        // count: 11,
        count: Math.floor(Math.random() * 30) + 1,
        // date: '29/11/2023'
        date: Math.floor(Math.random() * 30) + 1 + '/11/2023'
    },
    {
        name: 'Lab Reports',
        type: 'lab',
        count: Math.floor(Math.random() * 30) + 1,
        // date: '29/11/2023'
        date: '29/11/' + Math.floor(Math.random() * 30) + 1
    },
    {
        name: 'Imaging (X-Ray, MRI)',
        type: 'xray',
        // count: 11,
        count: Math.floor(Math.random() * 30) + 1,
        // date: '29/11/2023'
        date: Math.floor(Math.random() * 30) + 1 + '/11/2023'
    },
    {
        name: 'Claims Document',
        type: 'claim-document',
        // count: 11,
        count: Math.floor(Math.random() * 30) + 1,
        // date: '29/11/2023'
        date: '29/' + Math.floor(Math.random() * 30) + 1 + '/2023'
    },
    {
        name: 'Others Reports',
        type: 'report',
        // count: 11,
        count: Math.floor(Math.random() * 30) + 1,
        // date: '29/11/2023'
        date: Math.floor(Math.random() * 30) + 1 + '/11/2023'
    },
]

const iconsMap = {
    'presciption': '#3CA5DC',
    'lab': '#F7A025',
    'xray': '#3CA5DC',
    'claim-document': '#F7A025',
    'report': '#3CA5DC',
    'doctor': '#F7A025',
}

export default function ManageProfile() {
    const { id } = useParams()
    const path = useLocation().pathname
    const breadcrumb = useformatBreadcrumb(path)
    console.log(breadcrumb, 'breadcrumb')
    console.log(id, 'id')

    const patient = initialPatients.find(patient => generateId(patient.email) === id)
    console.log(patient, 'patient')
    return (
        <div className="flex flex-col gap-5 p-5 md:p-10">
            <ul className="flex items-center justify-start gap-2 text-lg">
                <Link to="/patient-management" className="text-[var(--grey-2)]">
                    Patient Management
                </Link>
                <span>/</span>
                <Link to={`/patient-management/${id}`} className="text-[var(--black)] font-[var(--font-bold-4)]">
                    Manage Profile
                </Link>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                {
                    patient && (
                        <>
                            <div className="md:col-span-4 bg-[var(--white)] rounded-md px-5 py-5 flex flex-col justify-center items-center gap-5">
                                <div className='flex flex-col gap-2 items-center justify-center'>
                                    <img
                                        src={patient.avatar}
                                        alt=""
                                        className="h-24 w-24 rounded-full object-cover"
                                    />
                                    <span className="text-[var(--black)] font-[var(--font-bold-2)]">{patient.name}</span>
                                    <span className='text-[var(--grey-2)] text-xs'>{patient.gender + ", " + patient.age}</span>
                                </div>
                                <span className="text-[var(--primary)] font-[var(--font-bold-2)] whitespace-nowrap">{patient.isPremium ? "Premium Service Customer" : ""}</span>
                            </div>
                            <div className="md:col-span-8 bg-[var(--white)] rounded-md px-5 py-5 flex flex-col gap-5">
                                <h1 className="text-[var(--black)] text-lg font-[var(--font-bold-4)]">Overview :</h1>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                                    <div className="flex flex-col gap-1 justify-start">
                                        <span className="text-[var(--grey-2)] text-sm">Date of Birth</span>
                                        <span className="font-[var(--font-bold-3)]">{patient.dob}</span>
                                    </div>
                                    <div className="flex flex-col gap-1 justify-start">
                                        <span className="text-[var(--grey-2)] text-sm">Email</span>
                                        <span className="font-[var(--font-bold-3)]">{patient.email}</span>
                                    </div>
                                    <div className="flex flex-col gap-1 justify-start">
                                        <span className="text-[var(--grey-2)] text-sm">Ethnicity</span>
                                        <span className="font-[var(--font-bold-3)]">{patient.ethnicity}</span>
                                    </div>
                                    <div className="flex flex-col gap-1 justify-start">
                                        <span className="text-[var(--grey-2)] text-sm">City</span>
                                        <span className="font-[var(--font-bold-3)]">{patient.city}</span>
                                    </div>
                                    <div className="flex flex-col gap-1 justify-start">
                                        <span className="text-[var(--grey-2)] text-sm">Address</span>
                                        <span className="font-[var(--font-bold-3)]">{patient.address}</span>
                                    </div>
                                    <div className="flex flex-col gap-1 justify-start">
                                        <span className="text-[var(--grey-2)] text-sm">Phone NUmber</span>
                                        <span className="font-[var(--font-bold-3)]">{patient.phone}</span>
                                    </div>
                                    <div className="flex flex-col gap-1 justify-start">
                                        <span className="text-[var(--grey-2)] text-sm">Country</span>
                                        <span className="font-[var(--font-bold-3)]">{patient.country}</span>
                                    </div>
                                    <div className="flex flex-col gap-1 justify-start">
                                        <span className="text-[var(--grey-2)] text-sm">Healthcare Coverage</span>
                                        <span className="font-[var(--font-bold-3)]">{patient.coverage}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
                <div className="md:col-span-4 bg-[var(--white)] rounded-md px-5 py-5 flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                        <h1 className="text-[var(--black)] text-lg font-[var(--font-bold-4)]">History :</h1>
                        <Link to={`/patient-management/${id}/history`} className="text-[var(--primary)] font-[var(--font-bold-1)] text-sm">See All</Link>
                    </div>
                    <div className="flex flex-col gap-5">
                        {
                            patientHistory.map(history => (
                                <div className="flex gap-4 bg-white rounded-md px-5 py-3 items-center shadow-sm">
                                    <img
                                        src={`/assets/icons/${history.type}.svg`}
                                        alt=""
                                        className="h-10 w-10 p-2 rounded-full"
                                        style={{ backgroundColor: iconsMap[history.type] }}
                                    />

                                    <div className="flex flex-col gap-1 w-full">
                                        <span className="font-[var(--font-bold-3)] text-sm whitespace-nowrap">{history.file}</span>
                                        <div className="grid sm:grid-cols-2">
                                            <span className="text-[var(--grey-2)] text-xs whitespace-nowrap">{history.date}</span>
                                            <span className=" text-[var(--grey-2)] text-xs whitespace-nowrap sm:ml-auto">{history.time}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="md:col-span-8 bg-[var(--white)] rounded-md px-5 py-5 flex flex-col gap-5">
                    <h1 className="text-[var(--black)] font-[var(--font-bold-4)]">Medical Record Library :</h1>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {
                            medicalRecordLibrary.map((record, index) => (
                                <div className="flex flex-col gap-2 bg-white rounded-md px-5 py-3 items-center justify-center" key={index}
                                    style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)' }}
                                >
                                    <img
                                        src={`/assets/icons/${record.type}.svg`}
                                        alt=""
                                        className="h-20 w-20 p-2 rounded-full"
                                        style={{ backgroundColor: iconsMap[record.type] }}
                                    />
                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="font-[var(--font-bold-3)] text-lg">{record.name}</span>
                                        <div className="flex justify-center gap-1">
                                            <span className="text-[var(--grey-2)] text-xs">{record.count} Files</span>
                                            <div className="flex gap-1 items-center">
                                                <span className="h-2 w-2 rounded-full bg-[var(--grey-3)]"></span>
                                                <span className="text-[var(--grey-2)] text-xs">Last Upload : {record.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}