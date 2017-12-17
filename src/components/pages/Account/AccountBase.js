/**
 * Imports
 */
import React from 'react';import PropTypes from 'prop-types';
import {RouteHandler} from 'react-router';

// Required components
import AuthenticatedComponent from '../../core/AuthenticatedComponent';

/**
 * Component
 */
class AccountBase extends React.Component {

    //*** Template ***//

    render() {
        return (
            <div className="account-base">
                <RouteHandler />
            </div>
        );
    }
}

/**
 * This component requires Authentication
 */
const AccountWrapper = AuthenticatedComponent(AccountBase);

/**
 * Exports
 */
export default AccountWrapper;
