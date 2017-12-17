/**
 * Imports
 */
import React from 'react';import PropTypes from 'prop-types';

/**
 * Component
 */
class Badge extends React.Component {

    //*** Component Lifecycle ***//

    componentDidMount() {

        // Component styles
        require('./Badge.scss');
    }

    //*** Template ***//

    render() {
        return (
            <div className="badge" data-badge={this.props.value}>
                {this.props.children}
            </div>
        );
    }
}

/**
 * Exports
 */
export default Badge;
