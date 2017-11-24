/**
 * @file Modal
 * @author chencheng20
 * @date 24/11/2017
 */
import React from 'react';

class Modal extends React.Component {
    render() {
        let { style, content, clickEvent } = this.props;
        style = style || {};
        content = content || '';

        return (
            <div
                style={ style }
                onClick={ clickEvent }
            >
                { content }
            </div>
        )
    }
}

export default Modal;
