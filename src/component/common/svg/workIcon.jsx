import React from 'react';

const WorkIcon = React.memo(({fill}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
            <g transform="translate(-494.54 -563.689)">
                <rect width="56" height="56" transform="translate(494.54 563.689)" fill="none" opacity="0.3"/>
                <rect width="46" height="46" transform="translate(499.54 568.689)" fill="none" opacity="0.3"/>
                <path fill={fill ? fill : "#000"} d="M544.582,571.564H500.5a.958.958,0,0,0-.959.958v28.75a.959.959,0,0,0,.959.959h16.878l-1.278,3.833H512a.958.958,0,0,0-.959.958v3.834a.958.958,0,0,0,.959.958h21.083a.958.958,0,0,0,.958-.958v-3.834a.958.958,0,0,0-.958-.958h-4.1l-1.278-3.833h16.879a.958.958,0,0,0,.958-.959v-28.75A.958.958,0,0,0,544.582,571.564Zm-.958,1.917v22.044H501.457V573.481Zm-11.5,36.416H512.957v-1.916h19.167Zm-5.164-3.833h-8.84l1.278-3.833h6.285Zm-.587-5.75H501.457v-2.872h42.167v2.872Z"/>
            </g>
        </svg>
    );
});

export default WorkIcon;