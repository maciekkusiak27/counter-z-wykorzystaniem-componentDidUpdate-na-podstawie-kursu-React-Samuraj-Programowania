class Counter extends React.Component{
    state = {
        result: 1,
        ratio: 2
    }
    
handleMultiplication = () =>{
    this.setState((state)=>(
        {
        result: state.result * state.ratio
        }))
}

componentDidUpdate(){
    if(this.state.result>1000 && this.state.ratio === 2){
        this.setState((state)=>(
            {
            ratio:0.5
            }))
    }else if(this.state.result<1 && this.state.ratio === 0.5){
        this.setState((state)=>(
            {
            ratio:2
            }))
    }
}

    render() {
        return(
            <div>
                <p>
                    kalkulator mnoży przez 2 jeśli suma jest mniejsza niż 1000. Po przekroczeniu 1000 mnoży przez 0,5 aż osiągnie sumę mniejszą niż 1. Wtedy znów mnoży przez 2
                    </p>
                    <button onClick={this.handleMultiplication}>{`pomnóż przez ${this.state.ratio}`}</button>
                    <h1>wynik: {this.state.result}</h1>
                    </div>
            )
        }
    }

ReactDOM.render(<Counter/>, document.getElementById('root'))