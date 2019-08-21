import React from 'react';
import './CrewMember.css';

function CrewMember(props) {
  return (
    <li className="rocketMember">
      <span className="rocketMember_avatar"></span>
      <p className="rocketMember_name">{props.name}</p>
    </li>
  );
}

export default CrewMember;