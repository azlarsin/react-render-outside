/**
 * @file fixedModals
 * @author chencheng20
 * @date 24/11/2017
 */

import React from 'react';
import { render, createPortal, findDOMNode, unmountComponentAtNode } from 'react-dom';
import Modal from './Modal';

class Modal1 extends React.Component {
    constructor(props) {
        super(props);

        this.modalDom = null;
        this.dom = null;
    }

    componentDidMount() {
        this.dom = findDOMNode(this);
        this.modalDom = this.dom.childNodes[0];

        console.log(this.modalDom);

        document.body.appendChild(this.modalDom);
    }

    componentWillUnmount() {
        this.dom.appendChild(this.modalDom);    // trick
    }

    render() {
        return (
            <div>
                <Modal { ...this.props } />
            </div>
        );
    }
}


class Modal2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
        this.dom = null;

    }

    componentDidMount() {
        let div = document.createElement('div');
        document.body.appendChild(div);

        this.dom = div;

        this.setState({
            loading: false
        });
    }

    componentWillUnmount() {
        unmountComponentAtNode(this.dom);
        document.body.removeChild(this.dom);
    }

    render() {
        return this.state.loading ?
            <h1>Loading...</h1>
            :
            render(<Modal { ...this.props } />, this.dom);
    }
}

class Modal3 extends React.Component {
    render() {
        return createPortal(<Modal { ...this.props } />, document.body);
    }
}

export default [ Modal1, Modal2, Modal3 ];