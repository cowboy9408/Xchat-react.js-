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

const MemberItem = ({ member, onClick }) => (
  <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', padding: '6px', cursor: 'pointer', borderRadius: '4px', transition: 'background-color 0.2s ease' }}>
    <MemberAvatar avatarUrl={member.avatarUrl} />
    <div style={{ color: 'white', fontSize: '0.9rem' }}>{member.name}</div>
    <RoleLabel isAdmin={member.role === '관리자'}>{member.role}</RoleLabel>
  </div>
);

MemberItem.propTypes = {
  member: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

const MemberList = ({ members = [], searchTerm }) => {
  const filteredMembers = members
    .filter((member) => member && member.name && member.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const { selectedMember, popupPosition, popupRef, handleMemberClick } = useMemberPopup();

  return (
    <>
      <MemberListContainer>
        <SectionTitle>채널 멤버</SectionTitle>
        {filteredMembers.map((member) => (
          <MemberItem key={member.name} member={member} onClick={(e) => handleMemberClick(member, e)} />
        ))}
      </MemberListContainer>

      {selectedMember && (
        <ProfilePopup ref={popupRef} top={popupPosition.top}>
          <PopupHeader>
            <MemberAvatar avatarUrl={selectedMember.avatarUrl} />
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#FFFFFF' }}>{selectedMember.name}</div>
              <div style={{ fontSize: '0.9rem', color: '#B9BBBE' }}>#{selectedMember.tag}</div>
            </div>
          </PopupHeader>
          <PopupOption>DM 보내기</PopupOption>
          <PopupOption>프로필 보기</PopupOption>
          {selectedMember.role === '관리자' && <PopupOption>멤버 관리</PopupOption>}
        </ProfilePopup>
      )}
    </>
  );
};

MemberList.propTypes = {
  members: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default MemberList;
