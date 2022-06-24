import React from 'react';

const EyesIcon = React.memo(({fill}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
            <rect width="56" height="56" fill="none" opacity="0.3"/>
            <rect width="46" height="46" transform="translate(5 5)" fill="none" opacity="0.3"/>
            <path fill={fill ? fill : '#000'} d="M347.84,649c-6.34,0-11.5,7.72-11.5,17.21s5.16,17.22,11.5,17.22,11.5-7.73,11.5-17.22S354.18,649,347.84,649Zm0,32.51c-5.29,0-9.58-6.86-9.58-15.3s4.29-15.3,9.58-15.3,9.58,6.87,9.58,15.3-4.3,15.31-9.58,15.31Z" transform="translate(-308.34 -638.26)"/>
            <path fill={fill ? fill : '#000'} d="M347.84,660.5a5.74,5.74,0,1,0,4.065,1.678A5.74,5.74,0,0,0,347.84,660.5Z" transform="translate(-308.34 -638.26)"/>
            <path fill={fill ? fill : '#000'} d="M324.84,649c-6.34,0-11.5,7.74-11.5,17.25s5.16,17.25,11.5,17.25,11.5-7.74,11.5-17.25S331.18,649,324.84,649Zm0,32.58c-5.29,0-9.58-6.88-9.58-15.33s4.29-15.34,9.58-15.34,9.58,6.88,9.58,15.34-4.3,15.34-9.58,15.34Z" transform="translate(-308.34 -638.26)"/>
            <circle fill={fill ? fill : '#000'} cx="5.75" cy="5.75" r="5.75" transform="translate(10.75 22.25)"/>
            <circle cx="2" cy="5" r="4" transform="translate(14.5 26)" fill="#17181a"/>
            <circle cx="2" cy="5" r="4" transform="translate(37.5 25.98)" fill="#17181a"/>
        </svg>
    );
});

export default EyesIcon;