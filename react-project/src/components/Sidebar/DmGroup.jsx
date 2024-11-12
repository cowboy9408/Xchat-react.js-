import React from 'react';
import {
  DmCard,
  UserIcon,
  DmName,
  Badge,
  SectionHeader
} from './style/DmGroupStyle';  // 스타일 파일에서 가져옴

const DmGroup = ({ title, dms, selectedChannel, onSelectChannel, isCollapsed, onToggleCollapse }) => {
  const handleDmClick = (dmName) => {
    onSelectChannel(dmName);  // DM 클릭 시 선택된 DM 처리
  };

  return (
    <div>
      <SectionHeader onClick={onToggleCollapse}>
        <span>{title}</span>
      </SectionHeader>

      {/* DM 리스트를 접거나 펼칠 수 있음 */}
      {!isCollapsed && dms.map((dm) => (
        <DmCard 
          key={dm.name} 
          isSelected={selectedChannel === dm.name}
          onClick={() => handleDmClick(dm.name)} // DM 클릭 시 해당 DM 선택
        >
          <UserIcon iconUrl={dm.iconUrl} />
          <DmName>{dm.name}</DmName>
          {dm.unread > 0 && <Badge>{dm.unread}</Badge>}  {/* 읽지 않은 메시지 배지 */}
        </DmCard>
      ))}
    </div>
  );
};

export default DmGroup;
