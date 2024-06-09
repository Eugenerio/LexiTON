'use client';

import { useTonAddress } from '@tonconnect/ui-react';
import { useEffect, useState } from 'react';
import { getUsers } from '@/app/lib/api';
import { truncateWithEllipsis } from '@/app/lib/helpers/truncate';
import Button from '@/app/components/Button/Button';
import { useJettonContract } from '@/app/hooks/useJettonContract';

const getClassNames = (index: number, data: any[]) => {
  if (index === 0) return 'bg-[#8203b4]';
  if (index === 1) return 'bg-[#8203b490]';
  if (index === 2) return 'bg-[#8203b460]';

  if (index === data.length - 1) return 'rounded-b-xl';
  return index % 2 === 0 ? 'bg-[#0000075]' : 'bg-[#00000090]';
};

const Page = () => {
  const [usersList, setUsersList] = useState<any[]>([]);
  const [isTopThree, setIsTopThree] = useState(false);
  const [userIndex, setUserIndex] = useState<number | null>(null);

  const { mint } = useJettonContract();

  const address = useTonAddress();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers() || [];

      setUsersList(data);
      const sortedUsers = data.sort((a, b) => b.points - a.points);
      const userId = sortedUsers.findIndex(user => user.wallet_address === address);
      setUserIndex(userId);
      if (userId >= 0 && userId < 3) {
        setIsTopThree(true);
      } else {
        setIsTopThree(false);
      }
    };

    void fetchData();
  }, [address]);

  const handleMint = () => {
    if (userIndex === null) return;

    let mintAmount;
    switch (userIndex) {
      case 0:
        mintAmount = 500;
        break;
      case 1:
        mintAmount = 300;
        break;
      case 2:
        mintAmount = 150;
        break;
      default:
        return;
    }

    mint(`condition ${mintAmount}`);
  };

  return (
    <div className="flex max-h-screen w-full flex-col px-2">
      <h1 className="text-center text-2xl font-bold mt-[-50px]">Leaderboard</h1>
      <div className="bg-[#00000075] w-full overflow-hidden rounded-xl p-2 shadow-2xl">
        <div className="max-h-[350px] overflow-y-scroll">
          <div className="flex w-full items-center justify-between rounded-xl rounded-b-none p-1 px-2">
            <span className="flex-1">Rank</span>
            <span className="flex-2">Name</span>
            <span className="flex-1 text-right">Points</span>
          </div>
          {usersList.length > 0 ? usersList
            .sort((a, b) => b.points - a.points)
            .map((user, index) => {
              const classNames = getClassNames(index, usersList);
              const walletAddress = truncateWithEllipsis(user.wallet_address, 20);

              return (
                <div key={user.name} className={`flex w-full items-center justify-between p-1 px-2 ${classNames} max-h-[80%]`}>
                  <span className="flex-1">{index + 1}</span>
                  <span className="flex-2">{user.wallet_address === address ? "You" : walletAddress}</span>
                  <span className="flex-1 text-right">{user.score}</span>
                </div>
              );
            }) : (<div>
              There are no users
            </div>)}
        </div>
      </div>
      {isTopThree && (
        <Button content='Mint' onClick={handleMint} />
      )}
    </div>
  );
};

export default Page;
