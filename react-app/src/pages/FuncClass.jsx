import React from 'react';

const FuncClass = () => {
    return (
        <div>
            <Comment author={{avatarUrl: require("../static/images/9sH_WJPWW8k.jpg"), name: "Damir"}}
                     text={"Some simple text"} date={(new Date()).toLocaleString()}/>
        </div>
    );
};

export default FuncClass;


class Comment extends React.Component {

    render() {
        return (
            <div className={"Comment"}>
                <div className={"UserInfo"}>
                    <img className={"Avatar"}
                         style={{width: "600px", height: "600px"}}
                         src={this.props.author.avatarUrl}
                         alt={this.props.author.name}/>
                    <div className={"User-Info-name"}>
                        {this.props.author.name}
                    </div>
                </div>
                <div className={"Comment-text"}>
                    {this.props.text}
                </div>
                <div className={"Comment-date"}>
                    {this.props.date}
                </div>
            </div>
        )
    }
}

