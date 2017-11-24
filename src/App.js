import React from 'react';
import Modal from './components/Modal';
import fixedModals from './components/fixedModals';

const styles = {
    app: {
        width: '60vw',
        height: '60vh',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'rgba(0,0,255, .7)'
    },

    modal: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0, .7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        color: 'white',
        fontSize: '300%',
        zIndex: 100
    }
};

const modals = [
    Modal,
    ...fixedModals
];

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            current: 0
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleModalClick = this.handleModalClick.bind(this);
    }

    handleClick() {
        alert('app clicked');

        if(this.state.current === 0) {
            this.setState({
                current: this.state.current + 1
            });
        }
    }

    handleModalClick() {
        alert('modal click callback');

        const current = this.state.current + 1;

        this.setState({
            current: current > 3 ? 0 : current
        });
    }

    render() {
        let Component = modals[this.state.current];

        return (
            <div
                style={ styles.app }
                onClick={ this.handleClick }
            >

                <Component
                    key={ this.state.current }
                    content={ "modal-" + this.state.current }
                    style={ styles.modal }
                    clickEvent={ this.handleModalClick }
                />

                <div style={ {
                    ...styles.modal,
                    backgroundColor: 'rgba(122,222,222, .9)',
                } }>overlay</div>
            </div>
        );
    }
}

export default App;
