/* eslint-disable react/prop-types */
import RocketIcon from '../assets/rocket.svg?react';
import CollapseIcon from '../assets/collapse_icon.svg?react';
import ExpandIcon from '../assets/cross_expand.svg?react';
import './Header.css'

export const Header = ({ title, isExpanded, expandWindow }) => {
    const IconToShow = isExpanded ? CollapseIcon : ExpandIcon;

    return (
        <div className='header'>
            <RocketIcon className="svg-icon-left" alt="rocket-icon" />
            <span>{title}</span>
            <IconToShow className='svg-icon-right' onClick={expandWindow} />
        </div>
    )
}