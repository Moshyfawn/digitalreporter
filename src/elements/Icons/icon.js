import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

class Icon extends PureComponent {
    render() {
        return (
            <Fragment>
                <a href={this.props.to}>
                    <img src={this.props.src} alt={this.props.alt} />
                </a>
            </Fragment>
        )
    }
}

Icon.propTypes = {
    src: PropTypes.object.isRequired,
    alt: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
};

export default Icon;