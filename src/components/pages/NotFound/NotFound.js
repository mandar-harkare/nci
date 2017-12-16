/**
 * Imports
 */
import React from 'react';import PropTypes from 'prop-types';

/**
 * Component
 */
class NotFound extends React.Component {

    //*** Page Title and Snippets ***//

    static pageTitleAndSnippets = function (context) {
        return {
            title: 'Not Found'
        }
    };

    //*** Template ***//

    render() {
        return <h1>Not Found</h1>;
    }
}

/**
 * Exports
 */
export default NotFound;
