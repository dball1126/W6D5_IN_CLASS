
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
        
    }

  

    render(){
        return (
        <h1 onClick={this.currentIndex}>{this.props.title}: {this.state.currentindex}</h1>
        )
    }
}
