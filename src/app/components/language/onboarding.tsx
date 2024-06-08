import Button from '@/app/components/Button/Button';
import { Check } from '@/app/components/icons';
import useSelectedLanguage, { LanguageLevel } from '../../lib/hooks/use-selected-language';

const langs = [
  {
    lang: 'Polish',
    code: 'PL',
    levels: ['A1', 'B1'],
  },
];
interface Props {
  handleOnboardingFinish: () => void;
}
const Onboarding = ({ handleOnboardingFinish }: Props) => {
  const { selectedLanguages, handleLanguageChange, isDisableButton } = useSelectedLanguage('selectedLanguages', {});

  return (
    <div className={'flex min-h-full w-full flex-col px-2 '}>
      <span className={'mt-1 text-center text-[2rem] font-bold mt-[-50px]'}>Choose language</span>
      <div className={`max-h-[320px] w-full self-start overflow-y-scroll rounded-xl p-2 shadow-xl bg-[#00000075]`}>
        {langs.map((item, index) => (
          <div
            key={`lang-${index}`}
            className={`${index !== 0 && 'mt-2'} ${index !== langs.length - 1 && 'border-b border-white'} `}
          >
            <h2 className={'text-xl font-bold'}>
              {' '}
              {'->'} {item.lang}
            </h2>
            {item.levels.map((level, index) => {
              const isChoosen = selectedLanguages[item.code] === level;
              return (
                <div
                  key={`${item.lang}-${level}-${index}`}
                  className={`my-1 ml-5 flex items-center justify-between rounded-md border px-2 ${isChoosen && 'bg-[#8203b4]'}`}
                  onClick={() => handleLanguageChange(item.code, level as LanguageLevel)}
                >
                  <span className={'ml-2'}>{level}</span>
                  {isChoosen && <Check className={'h-5 w-5'} />}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <Button className='mt-3' content={'Choose'} onClick={handleOnboardingFinish} disabled={isDisableButton} />
    </div>
  );
};

export default Onboarding;
