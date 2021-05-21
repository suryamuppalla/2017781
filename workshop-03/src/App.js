import React from "react";
import './App.css';

const Cards = ({cards}) => {
    return (
        <div>
            <center><h1>Users</h1></center>
            {cards.map((card) => (
                <div className="card mt-2" key={card.firstname}>
                    <div className="card-body">
                        <h4 className="card-title text-primary text-capitalize">{card.firstname} {card.lastname}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Phone Number: {card.phone}
                        </h6>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Email: {card.email}
                        </h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

class Todos extends React.Component {

    // Create array of cards in state
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    // Once component is loaded, get data from server
    async componentDidMount() {
        try {
            const res = await fetch("http://localhost/2017781/codeigniter-demo/index.php/api/contacts");
            if (res.status >= 400)
                return  new Error("something went wrong")
            const user = await res.json();
            this.setState({ cards: user });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div className="container mt-3 mb-3">
                <Cards cards={this.state.cards}/>
            </div>
        );
    }
}

export default Todos;
