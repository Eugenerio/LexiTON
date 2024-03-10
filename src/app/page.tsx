'use client';

import { postEvent } from '@tma.js/sdk';
import { useBackButton, useMainButton, useInitData, useThemeParams } from '@tma.js/sdk-react';
import { useEffect, useState, useMemo } from 'react';

function MainButtonTest() {
  const mainButton = useMainButton();
  const backButton = useBackButton();

  const [count, setCount] = useState(0);

  useEffect(() => {
    const onMainButtonClick = () => setCount((prevCount) => prevCount + 1);
    const onBackButtonClick = () => setCount((prevCount) => prevCount - 1);

    mainButton.enable().show();
    mainButton.on('click', onMainButtonClick);
    backButton.on('click', onBackButtonClick);

    return () => {
      mainButton.off('click', onMainButtonClick);
      mainButton.hide();
      backButton.off('click', onBackButtonClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    mainButton.setText(`Count is ${count}`);
  }, [mainButton, count]);

  useEffect(() => {
    if (count === 0) {
      backButton.hide();
      return;
    }
    backButton.show();
  }, [backButton, count]);

  return null;
}

// function InitData() {
//   const initData = useInitData();

//   useEffect(() => {
//     postEvent('web_app_set_background_color', { color: '#00FF00' });
//     //postEvent('web_app_set_header_color', { color: '#00000' });
//   }, []);

//   return <></>;
// }

export default function Home() {
  return (
    <div>
      <h1>Hello!</h1>
      <MainButtonTest />
      {/* <InitData /> */}
    </div>
  );
}
