import './DetailItem.scss'

import React from 'react'
import ReactSVG from 'react-svg';
import className from 'classname';

import Avatar from '../Avatar/Avatar.component';

export default ({
  icon, primary, secondary, primaryBold, avatar, picture,
}) => (
  <div className='detail-item'>
    {icon && <div className='detail-item__icon-wrapper'><ReactSVG src={icon} /></div>}
    {avatar && <Avatar name={primary} picture={picture} />}
    <div className='detail-item__text-wrapper'>
      <span
        className={className({
          'detail-item___primary-text--bold': primaryBold,
        })}
      >
        {primary}
      </span>
      <br />
      {secondary && <span>{secondary}</span>}
    </div>
  </div>
)
