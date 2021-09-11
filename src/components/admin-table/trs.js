import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { useMappedRows } from './hooks';
import AdminTableRow from './tr';

function AdminTableRows({
    rows,
    rowLevel,
    withColoredCircles,
    onClickViewRow,
    onClickEditRow,
    onClickDeleteRow,
    columnsSettings,
    requestsSettings,
}) {
    const mappedRows = useMappedRows(rows, requestsSettings, rowLevel);

    return (
        <>
            {mappedRows.map((item, index) => {
                const key = `tr-${index}`;

                return (
                    <AdminTableRow
                        key={key}
                        index={index}
                        row={item}
                        rowLevel={rowLevel}
                        columnsSettings={columnsSettings}
                        requestsSettings={requestsSettings}
                        withColoredCircles={withColoredCircles}
                        onClickViewRow={onClickViewRow}
                        onClickEditRow={onClickEditRow}
                        onClickDeleteRow={onClickDeleteRow}
                    />
                );
            })}
        </>
    );
}

AdminTableRows.propTypes = {
    rows: PropTypes.any,
    rowLevel: PropTypes.number,
    withColoredCircles: PropTypes.bool,
    onClickViewRow: PropTypes.func,
    onClickEditRow: PropTypes.func,
    onClickDeleteRow: PropTypes.func,
    columnsSettings: PropTypes.any,
    requestsSettings: PropTypes.any,
};

AdminTableRows.defaultProps = {
    rows: undefined,
    rowLevel: 0,
    withColoredCircles: undefined,
    onClickViewRow: () => {},
    onClickEditRow: () => {},
    onClickDeleteRow: () => {},
    columnsSettings: undefined,
    requestsSettings: undefined,
};

const mapStateToProps = ({ firestore }, props) => {
    const stateData = {};
    const { rowLevel, requestsSettings } = props;

    // prepares the state data from request
    if (requestsSettings && requestsSettings[rowLevel]) {
        const reqSetting = requestsSettings[rowLevel];

        if (reqSetting.firebase) {
            const { collection, whereFilters } = reqSetting.firebase;

            if (whereFilters && whereFilters.length) {
                const filtersReferences = whereFilters.map(whereFilter => {
                    const { whereField, whereValue } = whereFilter;
                    return `${whereField}-${whereValue}`;
                });

                const storeAsRef = `${collection}-${filtersReferences.join('-')}`;

                stateData.rows = firestore.ordered[storeAsRef];
            } else {
                stateData.rows = firestore.ordered[collection];
            }
        }
    }

    return stateData;
};

const firestoreQuery = (state, props) => {
    const fsQuery = [];
    const { rowLevel, requestsSettings } = props;

    // prepares the request data
    if (requestsSettings && requestsSettings[rowLevel]) {
        const reqSetting = requestsSettings[rowLevel];

        if (reqSetting.firebase) {
            const { collection, whereFilters } = reqSetting.firebase;

            if (whereFilters && whereFilters.length) {
                const whereList = [];

                const filtersReferences = whereFilters.map(whereFilter => {
                    const { whereField, whereEquality, whereValue } = whereFilter;

                    whereList.push([whereField, whereEquality, whereValue]);

                    return `${whereField}-${whereValue}`;
                });

                const storeAsRef = `${collection}-${filtersReferences.join('-')}`;

                fsQuery.push({
                    collection,
                    where: whereList,
                    storeAs: storeAsRef,
                });
            } else {
                fsQuery.push({
                    collection,
                    storeAs: collection,
                });
            }
        }
    }

    return fsQuery;
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(AdminTableRows);
