class Hello extends React.Component {
    render() {
        return <div>
            <p>Имя: {this.props.name}</p>
            <p>Возраст: {this.props.age}</p>
        </div>;
    }
}

// ReactDOM.render(
//     <Hello name="Damir" age="20"/>,
//     document.getElementById("app")
// )


class ClickButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Click!"};

        this.press = this.press.bind(this);
    }

    press() {
        let className = (this.state.class === "off") ? "on" : "off";
        this.setState({class: className});
    }

    render() {
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
    }
}

ReactDOM.render(
    <div>
        <Hello name="Damir" age="20"/>
        <ClickButton/>
    </div>,
document.getElementById("app")
)

