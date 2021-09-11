import React from 'react';
import PropTypes from 'prop-types';
import { getUniqueId } from '../../helpers';
import { StyledLabel } from './styled';

function Checkbox({ id, value, checked, label, onClick, onChange, className }) {
    const checkboxId = id || getUniqueId('checkbox');

    return (
        <div className={className}>
            <div className="form-check d-inline-block custom-checkbox mb-4 ml-2">
                <input
                    id={checkboxId}
                    className="form-check-input custom-control-input"
                    type="checkbox"
                    value={value}
                    checked={checked}
                    onClick={e => onClick(e.currentTarget.checked)}
                    onChange={onChange}
                />
                <StyledLabel
                    className="form-check-label custom-control-label text-app-gray app-font-14 font-weight-500"
                    htmlFor={checkboxId}
                >
                    {label}
                </StyledLabel>
            </div>
        </div>
    );
}

Checkbox.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

Checkbox.defaultProps = {
    id: '',
    value: '',
    checked: false,
    label: '',
    onClick: () => {},
    onChange: () => {},
    className: '',
};

export default Checkbox;
