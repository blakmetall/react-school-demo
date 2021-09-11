import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const PersonsGroupIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.39 22.43">
                <g id="bca4201f-60d3-4c3f-aaaf-1a36cfa40ca4" data-name="Layer 2">
                    <g id="e58c36cb-93e7-4077-b8d6-aef9ef119490" data-name="Capa 1">
                        <g>
                            <g>
                                <path
                                    d="M8.1,2.65a5.26,5.26,0,1,0,4.47,8A6.77,6.77,0,0,1,12,4.4,5.23,5.23,0,0,0,8.1,2.65Z"
                                    fill="none"
                                    stroke={color}
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M11.71,12.43l-.24.17a3.6,3.6,0,0,1-6.76,0l-.36-.28a.27.27,0,0,1-.08-.07l0,0C1,15.09,1,20,1,20.25v.17H9.33a13.13,13.13,0,0,1,3-7.85,2.61,2.61,0,0,0-.4-.32l-.14.12Z"
                                    fill="none"
                                    stroke={color}
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                />
                            </g>
                            <path
                                d="M22.5,12.07a1.07,1.07,0,0,0-.16.14l-.08.06A7.34,7.34,0,0,1,19,13.7l-.46.05-.4,0a6.15,6.15,0,0,1-1.43-.17,7.75,7.75,0,0,1-2.88-1.49L13.74,12l-.05,0C10,15.32,10,21,10,21.22v.21H26v-.22C25.76,14.67,23.14,12.5,22.5,12.07ZM20.27,16.5,18,15.35,15.77,16.5V13.71L18,14.92l2.25-1.21Z"
                                fill="none"
                                stroke={color}
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            />
                            <path
                                d="M12.15,7a6,6,0,0,0,6,6h0a6,6,0,1,0-6-6Z"
                                fill="none"
                                stroke={color}
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            />
                            <path
                                d="M26.63,20.12h6.76V20c0-.19-.06-4.4-3-6.94l0,0-.29.25L28,17.32l-.37-2.39.59-1a5.08,5.08,0,0,1-1.18.14h-.32a5,5,0,0,1-.56-.07l-.22,0,.59.94-.39,2.27A16.19,16.19,0,0,1,26.63,20.12Z"
                                fill="none"
                                stroke={color}
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            />
                            <path
                                d="M27.21,13.46a4.72,4.72,0,0,0,0-9.44A4.66,4.66,0,0,0,24.39,5a6.51,6.51,0,0,1,.38,2.17,6.29,6.29,0,0,1-1.55,4.13A4.74,4.74,0,0,0,27.21,13.46Z"
                                fill="none"
                                stroke={color}
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            />
                        </g>
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

PersonsGroupIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};
PersonsGroupIcon.defaultProps = {
    color: '#ffffff',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default PersonsGroupIcon;
