import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const opportunities = [
    {
        name: 'Send regular email notification for Supplementary add-on',
        status: true,
    },
    {
        name: 'Offer family discount for Dental Cover',
        status: false,
    },
    {
        name: 'Special Offer for Swiss National Day, Black Friday, Christmas, Easter, New Year',
        status: false,
    },
]

export default function OpportunityCenter() {
    return (
        <div className="flex flex-col gap-5 p-5 md:p-10">
            <ul className="flex items-center justify-start gap-2 text-lg">
                <Link to="/patient-management" className="text-[var(--grey-2)]">
                    Dashboard
                </Link>
                <span>/</span>
                <Link
                    to="/dashboard/opportunity-center"
                    className="text-[var(--black)] font-[var(--font-bold-4)]">
                    Opportunity Center
                </Link>
            </ul>
            <div className='flex flex-col gap-5'>
                {
                    opportunities.map((item, index) => (
                        <Accordion title={item.name} key={index} status={item.status}>
                            <MessageForm />
                        </Accordion>
                    ))
                }
            </div>
        </div>
    )
}

const Accordion = ({ title, children, status }) => {
    const [isOpen, setIsOpen] = useState(status);
    const accordionId = `accordion-${title.replace(/\s+/g, '-').toLowerCase()}`;

    return (
        <div className="flex flex-col gap-5 bg-white rounded-xl p-8" key={title}>
            <div className="flex justify-between items-center">
                <span className="text-[var(--black)] text-base font-[var(--font-bold-4)]">{title}</span>
                <div className="inline-flex items-center">
                    <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
                        <input
                            id={accordionId}
                            type="checkbox"
                            className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 bg-[var(--grey-2)] checked:bg-[var(--primary)] peer-checked:border-[var(--primary)] peer-checked:before:bg-[var(--primary)]"
                            defaultChecked={isOpen}
                            onChange={() => setIsOpen(!isOpen)}
                        />
                        <label
                            htmlFor={accordionId}
                            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-[var(--primary)] peer-checked:before:bg-[var(--primary)]">
                            <div className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4" data-ripple-dark="true"></div>
                        </label>
                    </div>
                </div>
            </div>
            {isOpen && children}
        </div>
    )
}

const MessageForm = () => {
    return (
        <div className="flex flex-col gap-5 bg-white rounded-xl w-full xl:w-1/2">
            <div className="flex flex-col gap-5">
                <span className="text-[var(--black)] font-[var(--font-bold-3)]">Message to be sent to the patient</span>
                <textarea
                    className="bg-[var(--grey-4)] rounded-md h-[200px] p-5 resize-none"
                    placeholder="Message here"
                />
            </div>
            <div className="flex justify-start gap-5">
                <button className="rounded-md px-8 py-3 text-sm bg-[var(--primary)] text-[var(--white)]">Send Message</button>
                <button className="rounded-md px-8 py-3 text-sm border border-[var(--primary)] text-[var(--primary)]">Cancel</button>
            </div>
        </div>
    )
}