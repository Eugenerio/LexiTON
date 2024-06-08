'use client';

import { useTonAddress } from '@tonconnect/ui-react';
import { useEffect, useState } from 'react';
import { getUsers } from '@/app/lib/api';
import { truncateWithEllipsis } from '@/app/lib/helpers/truncate';

const getClassNames = (index: number, data: any[]) => {
  if (index === 0) return 'bg-amber-500 text-black';
  if (index === 1) return 'bg-blue-600';
  if (index === 2) return 'bg-yellow-800';
  if (index === data.length - 1) return 'rounded-b-xl';
  return index % 2 === 0 ? 'bg-gray-400' : 'bg-gray-500';
};

const Page = () => {
  const [usersList, setUsersList] = useState<any[]>([]);

  const address = useTonAddress();

  useEffect(() => {
    const fetchData = async () => {
     const data = await getUsers() || [];

      setUsersList(data);
    };
    void fetchData();
  }, []);

  return (
    <div className="flex max-h-screen w-full flex-col px-2">
      <h1 className="text-center text-2xl font-bold">Leaderboard</h1>
      <div className="border-red bg-black-600 w-full overflow-hidden rounded-xl border p-2 text-white shadow-2xl">
        <div className="max-h-[350px] overflow-y-scroll">
          <div className="flex w-full items-center justify-between rounded-xl rounded-b-none bg-gray-600 p-1 px-2 text-white">
            <span className="flex-1">Rank</span>
            <span className="flex-2">Name</span>
            <span className="flex-1 text-right">Points</span>
          </div>
          { usersList.length > 0 ? usersList
            .sort((a, b) => b.points - a.points)
            .map((user, index) => {
              const classNames = getClassNames(index, usersList);
              const walletAddress = truncateWithEllipsis(user.wallet_address, 20);

              return (
                <div key={user.name} className={`flex w-full items-center justify-between p-1 px-2 ${classNames}`}>
                  <span className="flex-1">{index + 1}</span>
                  <span className="flex-2">{user.wallet_address === address ? "You": walletAddress}</span>
                  <span className="flex-1 text-right">{user.score}</span>
                </div>
              );
            }) : (<div>
            There is n users
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default Page;
