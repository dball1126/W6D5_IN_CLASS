import React from 'react';

class Header extends React.Component {

    render() {
        const selected = this.props.currentPane;
        const headers = this.props.panes.map((pane, index) => {
            const title = pane.title;
            const classType = index === selected ? 'active' : '';
        

            return (
                <li key={index}
                className={classType}
                onClick={() => this.props.onTabChosen(index)}>
                {title}{' '}
                </li>
            );
        });
        return (
            <ul className='tab-header'>
                {headers}
            </ul>
        )
    }
}



export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPane: 0
        };

        this.setPane = this.setPane.bind(this);
    }

    setPane (num) {
        this.setState({ currentPane: num });
    }

    render() {
        
        const pane = this.props.panes[this.state.currentPane];


        return ( 
            <div>
                <h1>Tabs</h1>
                <div className='tabs'>
                    <Header
                        selectedPane={this.state.currentPane}
                        onTabChosen={this.setPane}
                        panes={this.props.panes}>
                    </Header>
                    <div className='tab-content'>
                        <article>
                            {pane.content}
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}