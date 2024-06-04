"use client";

import { useEffect, useState } from "react";

interface Person {
  name: string;
  points: number;
}
const data: Person[] = [
  { "name": "Alice", "points": 1200 },
  { "name": "Bob", "points": 1150 },
  { "name": "Charlie", "points": 1080 },
  { "name": "David", "points": 1020 },
  { "name": "Emily", "points": 950 },
  { "name": "Frank", "points": 900 },
  { "name": "Grace", "points": 850 },
  { "name": "Harry", "points": 800 },
  { "name": "Isabella", "points": 750 },
  { "name": "Jack", "points": 700 },
  { "name": "Kate", "points": 650 },
  { "name": "Liam", "points": 600 },
  { "name": "Mia", "points": 550 },
  { "name": "Noah", "points": 500 },
  { "name": "Olivia", "points": 450 },
  { "name": "Peter", "points": 400 },
  { "name": "Quinn", "points": 350 },
  { "name": "Riley", "points": 300 },
  { "name": "Sophia", "points": 250 },
  { "name": "Thomas", "points": 200 },
  { "name": "Victoria", "points": 150 },
  { "name": "William", "points": 100 },
  { "name": "Xavier", "points": 50 },
  { "name": "Yara", "points": 0 },
  { "name": "Zack", "points": -50 },
  { "name": "Zoe", "points": -100 }
]

const getClassNames = (index: number, isLast: boolean) => {
  if (index === 0) return "bg-amber-500 text-black";
  if (index === 1) return "bg-blue-600";
  if (index === 2) return "bg-yellow-800";
  if (isLast) return "rounded-b-xl";
  return index % 2 === 0 ? "bg-gray-400" : "bg-gray-500";
};


const Page = () => {
  const [usersList, setUsersList] = useState<Person[]>([]);

  useEffect(() => {
    // Fetch data for usersList from API or local storage
    const fetchData = async () => {
      // const response = await fetch("your-api-endpoint");
      // const data = await response.json();
      setUsersList(data);
    };
    void fetchData();
  }, []);

  return (
    <div className="flex max-h-screen w-full flex-col px-2">
      <h1 className="text-2xl font-bold text-center">Leaderboard</h1>
      <div className="p-2 w-full border border-red overflow-hidden rounded-xl bg-black-600 text-white shadow-2xl">
        <div className="max-h-[350px] overflow-y-scroll">
          <div className="w-full flex justify-between items-center rounded-xl rounded-b-none bg-gray-600 text-white px-2 p-1">
            <span className="flex-1">Rank</span>
            <span className="flex-2">Name</span>
            <span className="flex-1 text-right">Points</span>
          </div>
          {usersList
            .sort((a, b) => b.points - a.points)
            .map((user, index) => {
              const isLast = index === usersList.length - 1;
              const classNames = getClassNames(index, isLast);
              return (
                <div
                  key={user.name}
                  className={`w-full flex justify-between items-center p-1 px-2 ${classNames}`}
                >
                  <span className="flex-1">{index + 1}</span>
                  <span className="flex-2">{user.name}</span>
                  <span className="flex-1 text-right">{user.points}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Page;
