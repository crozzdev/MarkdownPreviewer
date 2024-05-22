/* eslint-disable react/prop-types */
import './Header.css'
import rocketIcon from '../assets/rocket.svg'
import collapseIcon from '../assets/collapse_icon.svg'
import expandIcon from '../assets/cross_expand.svg'


export const Header = ({ title, isExpanded, expandWindow }) => {

    const iconToShow = isExpanded ? { src: collapseIcon, alt: "collapse_icon" } : { src: expandIcon, alt: "expand_icon" }

    return (
        <div className='header'>
            <img src={rocketIcon} className="svg-icon" alt="rocket-icon" />
            <span>{title}</span>
            <img className='svg-icon' src={iconToShow.src} alt={iconToShow.alt} onClick={expandWindow} />
        </div>

    )

}