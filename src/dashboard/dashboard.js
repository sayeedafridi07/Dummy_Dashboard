import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Legend,
  Line,
} from "recharts";
const totalNumbers = [
  {
    name: "Patients using APA",
    value: 200,
  },
  {
    name: "Supplementary Insurance Sold",
    value: 200,
  },
  {
    name: "Patients Avoided Hospitalisation",
    value: 200,
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-5 p-5 md:p-10">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {totalNumbers.map((item, index) => (
          <div
            className="bg-[var(--white)] rounded-md p-10 flex flex-col justify-center items-center"
            key={index}
          >
            <span className="text-[60px] xl:text-[80px] font-[var(--font-bold-3)] text-[var(--primary)]">
              {item.value}
            </span>
            <span className="text-[var(--black)] font-[var(--font-bold-2)]">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <TelehealthRevenueGrowth />
        <ClaimsPayoutVsDeniedClaims />
        <DigitalRevenueGrowth />
        <OpportunityCenter />
      </div>
    </div>
  );
}

const data = [
  {
    name: "Jan",
    value: 20000,
  },
  {
    name: "Feb",
    value: 25000,
  },
  {
    name: "Mar",
    value: 30000,
  },
  {
    name: "Apr",
    value: 35000,
  },
  {
    name: "May",
    value: 40000,
  },
  {
    name: "Jun",
    value: 45000,
  },
  {
    name: "Jul",
    value: 50000,
  },
  {
    name: "Aug",
    value: 55000,
  },
  {
    name: "Sep",
    value: 60000,
  },
  {
    name: "Oct",
    value: 65000,
  },
  {
    name: "Nov",
    value: 70000,
  },
  {
    name: "Dec",
    value: 75000,
  },
];

const filterItems = [
  {
    name: "6 Month",
    value: "6 Month",
  },
  {
    name: "9 Month",
    value: "9 Month",
  },
  {
    name: "1 Year",
    value: "1 Year",
  },
  {
    name: "All time",
    value: "All time",
  },
];

const TelehealthRevenueGrowth = () => {
  const [telehealthRevenueGrowth, setTelehealthRevenueGrowth] = useState(data);
  const [filter, setFilter] = useState("6 Month");

  const handleFilter = (value) => {
    setFilter(value);
    switch (value) {
      case "6 Month":
        setTelehealthRevenueGrowth(data.slice(0, 6));
        break;
      case "9 Month":
        setTelehealthRevenueGrowth(data.slice(0, 9));
        break;
      case "1 Year":
        setTelehealthRevenueGrowth(data.slice(0, 12));
        break;
      case "All time":
        setTelehealthRevenueGrowth(data);
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-[var(--white)] rounded-md p-5 md:p-10 flex flex-col gap-5">
      <div className="flex flex-col items-center gap-5">
        <span className="text-[var(--black)] text-[24px] font-[var(--font-bold-4)]">
          Telehealth Revenue Growth
        </span>
        <div className="flex gap-2 md:gap-5">
          {filterItems.map((item, index) => (
            <button
              className={`rounded-full px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm ${
                filter === item.value
                  ? "bg-[var(--primary-2)] text-[var(--primary)]"
                  : "bg-[var(--primary)] text-[var(--white)]"
              }`}
              key={index}
              onClick={() => handleFilter(item.value)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          width={500}
          height={200}
          data={telehealthRevenueGrowth}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis dataKey="value" />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const ClaimsPayoutVsDeniedClaims = () => {
  const data = [
    {
      name: "202002",
      "Claims Payout": 0.1,
      "Denied Claims": 0.1,
    },
    {
      name: "202111",
      "Claims Payout": 0.2,
      "Denied Claims": 0.1,
    },
    {
      name: "202222",
      "Claims Payout": 0.3,
      "Denied Claims": 0.1,
    },
    {
      name: "202276",
      "Claims Payout": 0.4,
      "Denied Claims": 0.1,
    },
    {
      name: "202112",
      "Claims Payout": 0.5,
      "Denied Claims": 0.1,
    },
    {
      name: "202201",
      "Claims Payout": 0.6,
      "Denied Claims": 0.1,
    },
    {
      name: "202102",
      "Claims Payout": 0.7,
      "Denied Claims": 0.1,
    },
  ];

  const [claimsPayoutVsDeniedClaims, setClaimsPayoutVsDeniedClaims] =
    useState(data);

  return (
    <div className="bg-[var(--white)] rounded-md p-5 md:p-10 flex flex-col gap-8">
      <div className="flex flex-col items-center gap-5">
        <span className="text-[var(--black)] text-[24px] font-[var(--font-bold-4)]">
          Claims Payout vs Denied Claims
        </span>
        <div className="flex gap-2 md:gap-5">
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 bg-[var(--primary)]"></div>
            <span className="text-[var(--black)] font-[var(--font-bold-1)]">
              Claims Payout
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 bg-[var(--primary-2)]"></div>
            <span className="text-[var(--black)] font-[var(--font-bold-1)]">
              Denied Claims
            </span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          width={500}
          height={200}
          data={claimsPayoutVsDeniedClaims}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="Claims Payout" stackId="a" fill="var(--primary)" />
          <Bar dataKey="Denied Claims" stackId="a" fill="var(--primary-2)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const DigitalRevenueGrowth = () => {
  const data = [
    {
      name: "Jan",
      value: 20000,
    },
    {
      name: "Feb",
      value: 25000,
    },
    {
      name: "Mar",
      value: 30000,
    },
    {
      name: "Apr",
      value: 35000,
    },
    {
      name: "May",
      value: 40000,
    },
    {
      name: "Jun",
      value: 45000,
    },
    {
      name: "Jul",
      value: 50000,
    },
    {
      name: "Aug",
      value: 55000,
    },
    {
      name: "Sep",
      value: 60000,
    },
    {
      name: "Oct",
      value: 65000,
    },
    {
      name: "Nov",
      value: 70000,
    },
    {
      name: "Dec",
      value: 75000,
    },
  ];

  const [digitalRevenueGrowth, setDigitalRevenueGrowth] = useState(data);
  const [filter, setFilter] = useState("6 Month");

  const handleFilter = (value) => {
    setFilter(value);
    switch (value) {
      case "6 Month":
        setDigitalRevenueGrowth(data.slice(0, 6));
        break;
      case "9 Month":
        setDigitalRevenueGrowth(data.slice(0, 9));
        break;
      case "1 Year":
        setDigitalRevenueGrowth(data.slice(0, 12));
        break;
      case "All time":
        setDigitalRevenueGrowth(data);
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-[var(--white)] rounded-md p-5 md:p-10 flex flex-col gap-5">
      <div className="flex flex-col items-center gap-5">
        <span className="text-[var(--black)] text-[24px] font-[var(--font-bold-4)]">
          Digital Revenue Growth
        </span>
        <div className="flex gap-2 md:gap-5">
          {filterItems.map((item, index) => (
            <button
              className={`rounded-full px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm ${
                filter === item.value
                  ? "bg-[var(--primary-2)] text-[var(--primary)]"
                  : "bg-[var(--primary)] text-[var(--white)]"
              }`}
              key={index}
              onClick={() => handleFilter(item.value)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart width={150} height={40} data={digitalRevenueGrowth}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const badges = [
  {
    name: "badge-1.svg",
    value: "badge-1.svg",
  },
  {
    name: "badge-2.svg",
    value: "badge-2.svg",
  },
  {
    name: "badge-1.svg",
    value: "badge-1.svg",
  },
];

const OpportunityCenter = () => {
  return (
    <div className="relative bg-[var(--white)] rounded-md p-5 md:p-10 flex flex-col items-center justify-center gap-5">
      <Link to={`/dashboard/opportunity-center`}>
        <div className="flex items-center">
          {badges.map((item, index) => (
            <div className="flex gap-5 items-center" key={index}>
              <img
                src={`/assets/icons/${item.name}`}
                alt=""
                className={`object-contain ${index !== 1 ? "h-36" : "h-60"}`}
              />
            </div>
          ))}
        </div>
        <span className="text-[var(--black)] text-[32px] font-[var(--font-bold-4)]">
          Opportunity Center
        </span>
        {/* <Link
        to={`/dashboard/opportunity-center`}
        className="h-14 w-14 bg-white text-[var(--primary)] rounded-full absolute bottom-5 right-5 flex justify-center items-center shadow-xl text-2xl">
        ?
      </Link> */}
      </Link>
    </div>
  );
};
