import { useCallback, useState } from 'react';
import { Tab, Wrapper } from './style';

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<'left' | 'right'>('left');

  const handleLeftTabClick = useCallback(() => {
    setSelectedTab('left');
  }, []);

  const handleRightTabClick = useCallback(() => {
    setSelectedTab('right');
  }, []);
  return (
    <Wrapper>
      <Tab className={selectedTab === 'left' ? 'active' : ''} onClick={handleLeftTabClick}>
        내 사진들
      </Tab>
      <Tab className={selectedTab === 'right' ? 'active' : ''} onClick={handleRightTabClick}>
        공유받은 사진들
      </Tab>
    </Wrapper>
  );
};
export default Tabs;
