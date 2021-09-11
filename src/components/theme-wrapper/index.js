import React from 'react';
import PropTypes from 'prop-types';
import WebFont from 'webfontloader';
import { Application } from 'react-rainbow-components';
import theme from '../../theme';
import 'animate.css/animate.css';
import '../../app.scss';
import 'moment/locale/es';

WebFont.load({
    google: {
        families: [
            'Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        ],
    },
});

const applicationTheme = {
    rainbow: theme.rainbow,
};

const ThemeWrapper = ({ children }) => {
    return <Application theme={applicationTheme}>{children}</Application>;
};

ThemeWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

ThemeWrapper.defaultProps = {
    children: undefined,
};

export default ThemeWrapper;
