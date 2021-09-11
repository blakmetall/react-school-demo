import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { Form, Col } from 'react-bootstrap';
import { Button, SimpleModal, Input } from '../../../../../components';
import { showSuccessNotification, showFailedNotification } from '../../../../../store/actions/notifications';
import { addCategory, updateCategory, validateOnSaveCategory } from '../../../../../store/actions/categories';
import { validateCategory } from './helpers';
import SelectIconInput from './select-icon-input';

const CategoriesForm = ({ editableItem, submitLabel, isOpen, isCreating, isEditing, onClose }) => {
    const [name, setName] = useState('');
    const [iconSlug, setIconSlug] = useState('');
    const [isProcessingForm, setIsProcessingForm] = useState(false);

    const dispatch = useDispatch();

    const handleOnSubmit = async e => {
        e.preventDefault();

        const item = {
            name,
            iconSlug,
        };

        const validation = await dispatch(validateOnSaveCategory({ ...item, id: (editableItem && editableItem.id) || '' }));

        if (validation.success) {
            if (isCreating) {
                setIsProcessingForm(true);
                dispatch(addCategory(item))
                    .then(() => {
                        dispatch(showSuccessNotification());
                    })
                    .catch(err => {
                        dispatch(showFailedNotification(err));
                    })
                    .finally(() => {
                        setIsProcessingForm(false);
                    });
            }

            if (isEditing) {
                setIsProcessingForm(true);
                dispatch(updateCategory(item, editableItem.id))
                    .then(() => {
                        dispatch(showSuccessNotification());
                    })
                    .catch(err => {
                        dispatch(showFailedNotification(err));
                    })
                    .finally(() => {
                        setIsProcessingForm(false);
                    });
            }
        } else {
            dispatch(showFailedNotification(validation.errorMsg));
        }
    };

    const formIsValid = () => {
        return validateCategory({
            name,
            iconSlug,
        });
    };

    // prepares editable item if exists
    useEffect(() => {
        if (editableItem && editableItem.id) {
            setName(editableItem.name);
            setIconSlug(editableItem.iconSlug);
        }

        // eslint-disable-next-line
    }, [editableItem]);

    return (
        <SimpleModal showIf={isOpen} onHide={() => onClose()} variant="red" size="md" className="p-2">
            <Form noValidate onSubmit={handleOnSubmit}>
                <Form.Row className="flex-column justify-content-center align-items-center">
                    {/* title */}
                    <Col className="col-12 mb-3">
                        <Input label="Categoría" value={name} onChange={e => setName(e.target.value)} required />
                    </Col>

                    <div className="app-font-18 text-app-gray-2 mb-4">Seleccionar ícono</div>

                    {/* icon selection */}
                    <Col className="mb-3">
                        <SelectIconInput value={iconSlug} onChange={slug => setIconSlug(slug)} className="mb-3" />
                    </Col>

                    {/* submit */}
                    <Col className="col-12">
                        <Button
                            fullWidth
                            label={submitLabel}
                            type="submit"
                            variant="success"
                            size="xs"
                            disabled={!formIsValid() || isProcessingForm}
                        />
                    </Col>
                </Form.Row>
            </Form>
        </SimpleModal>
    );
};

CategoriesForm.propTypes = {
    editableItem: PropTypes.any,
    submitLabel: PropTypes.string,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,

    isCreating: PropTypes.bool,
    isEditing: PropTypes.bool,
};

CategoriesForm.defaultProps = {
    editableItem: undefined,
    submitLabel: 'Agregar',
    isOpen: false,
    onClose: () => {},

    isCreating: undefined,
    isEditing: undefined,
};

const mapStateToProps = (state, { editableItem }) => ({
    isCreating: !editableItem,
    isEditing: !!editableItem,
});

const enhance = compose(connect(mapStateToProps, null));

export default enhance(CategoriesForm);
