import React, { PureComponent } from 'react';

class BaseTextarea extends PureComponent {
    render() {
        return (
            <textarea name={this.props.name} value={this.props.value} type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.onChange} onBlur={this.props.onBlur} />
        );
    };
};

export default BaseTextarea;