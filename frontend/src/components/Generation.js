import React,{Component} from 'react';

const DEFAULT_GENERATION = {generationId: '', expiration: ''};
const MINIMUM_DELAY = 3000;

class Generation extends Component {
    state = {generation: DEFAULT_GENERATION };
    
    timer = null;

    componentDidMount() {
        this.fetchNextGeneration(); // cross origin policy to be setup
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    fetchGeneration = () => {
        fetch('http://localhost:3000/generation')
        .then(response => response.json())
        .then(json => {
            this.setState({ generation: json.generation}); //USE THIS TO UPDATE STATE, ELSE PROBS!!! V V IMP
            console.log('json',json);})
        .catch(error => {console.error(error)}); //lifecycle method to be used
    };

    fetchNextGeneration = () => {
        this.fetchGeneration();

        let delay = new Date(this.state.generation.expiration).getTime() - new Date().getTime();
        delay<MINIMUM_DELAY? delay = MINIMUM_DELAY:delay=delay;

        this.timer = setTimeout(() => this.fetchNextGeneration(),delay);
    }

    render() {
        const { generation } = this.state;
        

        return (
            <div>
                <h3>Generation {generation.generationId}. Expires on: </h3>
                <h4>{new Date(generation.expiration).toString()}</h4>
            </div>
        )
    }
}

export default Generation;