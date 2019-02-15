import React, {Component} from 'react'

    class Form extends Component {
        constructor(props) {
            super(props);

            this.state = {
                imageInput: '',
                productName: '',
                price: '$'
            }
          
        }



        componentWillMount() {
            this.initialState = this.state
        }
        

        updateImageInput(value) {
            this.setState({
                imageInput: value
            })
        }

        addProductName(value) {
            this.setState({
                productName: value
            })
        }

        addPrice(value) {
            this.setState({
                price: value
            })
        }

        reset = () => {
            this.setState({
                imageInput: '',
                productName: '',
                price: '$'
            })
        }
        
    


    render() {
        return(
            <div>Form

                <input 
                imageInput = "text"
                placeholder="Image Address"
                onChange={e => this.updateImageInput(e.target.value)}
                value={this.state.imageInput}
                />

                <input
                productName = "text"
                placeholder="Product Name"
                onChange={e => this.addProductName(e.target.value)}
                value={this.state.productName}
                />

                <input
                type = "number"
                price = "text"
                placeholder ="Price"
                onChange={e => this.addPrice(e.target.value)} 
                value={this.state.price}
                />

                <button onClick={this.reset} >Cancel</button>
                <button>Add</button>
            </div>
        )
    }

}
export default Form