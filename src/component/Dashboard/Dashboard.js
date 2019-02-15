import React, {Component} from 'react'
import Product from '../Product/Product'
import Axios from 'axios';
import App from '../../App'

    class Dashboard extends Component {
        constructor(props) {
            super(props);

            this.state= {
                products: [],
                imageInput: '',
                productName: '',
                price: '$'
            }
            
        }

        componentDidMount() {
            Axios.get('/api/product').then(res => {
                console.log(res.data);
                this.setState({
                    inventory: res.data
                })
            })
            
        }

        

    render() {
        const products = this.props.inventory.map(inventory => {
            return(
                
                    inventory={this.props.state.inventory}
                
                )      
        })
        function inventory(props) {
            return(
                props.inventory
            )
        }

console.log(this.state.props)
        return(

            <div>DASHBOARD
            {/* {products} */}
            </div>
        )
    }

}
export default Dashboard