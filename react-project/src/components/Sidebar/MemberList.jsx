import React from 'react';
import PropTypes from 'prop-types';
import { useMemberPopup } from './hooks/useMemberPopup';
import {
  MemberListContainer,
  SectionTitle,
  MemberAvatar,
  RoleLabel,
  ProfilePopup,
  PopupHeader,
  PopupOption
} from './style/MemberListStyle';

// 개별 멤버 항목을 표시하는 MemberItem 컴포넌트
const MemberItem = ({ member, onClick }) => (
  <div 
    onClick={onClick} 
    style={{
      display: 'flex', 
      alignItems: 'center', 
      padding: '6px', 
      cursor: 'pointer', 
      borderRadius: '4px', 
      transition: 'background-color 0.2s ease'
    }}
  >
    <MemberAvatar avatarUrl={member.avatarUrl} />  {/* 멤버 아바타 표시 */}
    <div style={{ color: 'white', fontSize: '0.9rem' }}>{member.name}</div>  {/* 멤버 이름 표시 */}
    <RoleLabel isAdmin={member.role === '관리자'}>{member.role}</RoleLabel>  {/* 역할(관리자 여부)에 따른 레이블 */}
  </div>
);

MemberItem.propTypes = {
  member: PropTypes.object.isRequired,  // member 속성은 객체형 필수 속성
  onClick: PropTypes.func.isRequired,   // onClick 속성은 함수형 필수 속성
};

// 전체 멤버 목록을 표시하는 MemberList 컴포넌트
const MemberList = ({ members = [], searchTerm }) => {
  // 검색어에 따라 필터링된 멤버 리스트
  const filteredMembers = members
    .filter((member) => member && member.name && member.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const { selectedMember, popupPosition, popupRef, handleMemberClick } = useMemberPopup();  // 멤버 팝업 관련 상태 및 함수 불러오기

  return (
    <>
      <MemberListContainer>
        <SectionTitle>채널 멤버</SectionTitle>
        {filteredMembers.map((member) => (
          // 각 멤버 항목을 렌더링하며 클릭 시 팝업 표시
          <MemberItem key={member.name} member={member} onClick={(e) => handleMemberClick(member, e)} />
        ))}
      </MemberListContainer>

      {/* 선택된 멤버가 있을 때 해당 멤버의 프로필 팝업을 표시 */}
      {selectedMember && (
        <ProfilePopup ref={popupRef} top={popupPosition.top}>
          <PopupHeader>
            <MemberAvatar avatarUrl={selectedMember.avatarUrl} />  {/* 선택된 멤버 아바타 */}
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#FFFFFF' }}>{selectedMember.name}</div>  {/* 선택된 멤버 이름 */}
              <div style={{ fontSize: '0.9rem', color: '#B9BBBE' }}>#{selectedMember.tag}</div>  {/* 선택된 멤버 태그 */}
            </div>
          </PopupHeader>
          <PopupOption>DM 보내기</PopupOption>
          <PopupOption>프로필 보기</PopupOption>
          {selectedMember.role === '관리자' && <PopupOption>멤버 관리</PopupOption>}  {/* 관리자인 경우 추가 옵션 표시 */}
        </ProfilePopup>
      )}
    </>
  );
};

MemberList.propTypes = {
  members: PropTypes.array.isRequired,  // members 속성은 배열형 필수 속성
  searchTerm: PropTypes.string.isRequired,  // searchTerm 속성은 문자열형 필수 속성
};

export default MemberList;
