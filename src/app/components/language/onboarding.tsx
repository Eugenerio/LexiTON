import Button from '@/app/components/Button/Button';
import { Check } from '@/app/components/icons';
import useSelectedLanguage, { LanguageLevel } from '../../lib/hooks/use-selected-language';

const langs = [
  {
    lang: 'English',
    code: 'ENG',
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  },
  {
    lang: 'Polish',
    code: 'PL',
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  },
];
interface Props {
  handleOnboardingFinish: () => void;
}
const Onboarding = ({ handleOnboardingFinish }: Props) => {
  const { selectedLanguages, handleLanguageChange, isDisableButton } = useSelectedLanguage('selectedLanguages', {});

  return (
    <div className={'flex min-h-full w-full flex-col px-2'}>
      <span className={'mt-1 text-center text-[2rem] font-bold'}>Choose language</span>
      <div className={`max-h-[320px] w-full self-start overflow-y-scroll rounded-xl border p-2 shadow-xl`}>
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
                  className={`my-1 ml-5 flex items-center justify-between rounded-md border px-2 ${isChoosen && 'bg-green-300'}`}
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
      <Button content={'Choose'} onClick={handleOnboardingFinish} disabled={isDisableButton} />
    </div>
  );
};

export default Onboarding;
