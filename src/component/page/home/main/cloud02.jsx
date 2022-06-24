import React from 'react';
import styles from '../../../../css/page/home.module.css';

const Cloud02 = React.memo((props) => (
    <div className={`${styles.cloudContainer02} ${styles.cloudContainer}`}>
        <svg className={`${styles.cloud02} ${styles.cloud}`} xmlns="http://www.w3.org/2000/svg" width="493.324" height="175.191" viewBox="0 0 493.324 175.191">
            <defs>
                <filter id="a">
                    <feOffset dx="-6" dy="14" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="7" result="b" />
                    <feFlood floodColor="#6e6e6e" floodOpacity="0.161" result="c" />
                    <feComposite operator="out" in="SourceGraphic" in2="b" />
                    <feComposite operator="in" in="c" />
                    <feComposite operator="in" in2="SourceGraphic" />
                </filter>
            </defs>
            <g datatype="innerShadowGroup">
                <path d="M1484.241,1072.217a9.21,9.21,0,0,0-9.21-9.21c-.2,0-.4.048-.6.061a11.538,11.538,0,0,0-19.655-9.876,7.378,7.378,0,0,0-6.736-4.384,7.262,7.262,0,0,0-2.138.352,11.418,11.418,0,0,0-12.556-6.345,28.813,28.813,0,0,0-35.5-21.082,21.637,21.637,0,0,0-43.217,1.576,15.016,15.016,0,0,0-9.673-1.505,13.464,13.464,0,0,0-21.214-14.893,8.328,8.328,0,0,0-11.553-1.191,23.4,23.4,0,0,0-35.137-15.788,30.334,30.334,0,0,0-60.178,2.254,22.665,22.665,0,0,0-33.011,14.061,25.087,25.087,0,1,0-39.3,30.846c-.21-.013-.41-.063-.623-.063a9.348,9.348,0,0,0-9.219,7.878,14.827,14.827,0,0,0-21.527-5.249,25.081,25.081,0,0,0-48.607,6.234,34.034,34.034,0,0,0-43.509,10.006,11.844,11.844,0,0,0-16.471,14.737,12.9,12.9,0,0,0,11.7,22.969,17.4,17.4,0,0,0,32.108,3.837,10.361,10.361,0,0,0,12.8-.866,13.059,13.059,0,0,0,18.681,6.107,23.9,23.9,0,0,0,43.013-4.108,7.354,7.354,0,0,0,10.626-2.363,10.51,10.51,0,0,0,11.569-2.216,41.283,41.283,0,0,0,69.5-2.606,16.62,16.62,0,0,0,21.688,2.908,11.026,11.026,0,0,0,12.762,5.3,16.242,16.242,0,0,0,29.463-1.922,8.1,8.1,0,0,0,6.48-4.088,27.131,27.131,0,0,0,41.506-10.383,16.785,16.785,0,0,0,27.493,2.731,28.965,28.965,0,0,0,54.238,2.973,20.085,20.085,0,0,0,31.624-3.141,7.359,7.359,0,0,0,7.121-2.824,28.992,28.992,0,0,1,18.471,11.4,12.61,12.61,0,0,0,12.609-12.609c0-.287-.025-.57-.043-.852A9.182,9.182,0,0,0,1484.241,1072.217Z" transform="translate(-938.409 -1015.317) rotate(3)" fill="#fff" />
                <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#a)">
                    <path d="M1484.241,1072.217a9.21,9.21,0,0,0-9.21-9.21c-.2,0-.4.048-.6.061a11.538,11.538,0,0,0-19.655-9.876,7.378,7.378,0,0,0-6.736-4.384,7.262,7.262,0,0,0-2.138.352,11.418,11.418,0,0,0-12.556-6.345,28.813,28.813,0,0,0-35.5-21.082,21.637,21.637,0,0,0-43.217,1.576,15.016,15.016,0,0,0-9.673-1.505,13.464,13.464,0,0,0-21.214-14.893,8.328,8.328,0,0,0-11.553-1.191,23.4,23.4,0,0,0-35.137-15.788,30.334,30.334,0,0,0-60.178,2.254,22.665,22.665,0,0,0-33.011,14.061,25.087,25.087,0,1,0-39.3,30.846c-.21-.013-.41-.063-.623-.063a9.348,9.348,0,0,0-9.219,7.878,14.827,14.827,0,0,0-21.527-5.249,25.081,25.081,0,0,0-48.607,6.234,34.034,34.034,0,0,0-43.509,10.006,11.844,11.844,0,0,0-16.471,14.737,12.9,12.9,0,0,0,11.7,22.969,17.4,17.4,0,0,0,32.108,3.837,10.361,10.361,0,0,0,12.8-.866,13.059,13.059,0,0,0,18.681,6.107,23.9,23.9,0,0,0,43.013-4.108,7.354,7.354,0,0,0,10.626-2.363,10.51,10.51,0,0,0,11.569-2.216,41.283,41.283,0,0,0,69.5-2.606,16.62,16.62,0,0,0,21.688,2.908,11.026,11.026,0,0,0,12.762,5.3,16.242,16.242,0,0,0,29.463-1.922,8.1,8.1,0,0,0,6.48-4.088,27.131,27.131,0,0,0,41.506-10.383,16.785,16.785,0,0,0,27.493,2.731,28.965,28.965,0,0,0,54.238,2.973,20.085,20.085,0,0,0,31.624-3.141,7.359,7.359,0,0,0,7.121-2.824,28.992,28.992,0,0,1,18.471,11.4,12.61,12.61,0,0,0,12.609-12.609c0-.287-.025-.57-.043-.852A9.182,9.182,0,0,0,1484.241,1072.217Z" transform="translate(-938.41 -1015.32) rotate(3)" fill="#fff" />
                </g>
            </g>
        </svg>
    </div>
));

export default Cloud02;