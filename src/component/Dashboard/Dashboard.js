import React, {Component} from 'react'
import Product from '../Product/Product'
import Axios from 'axios';

    class Dashboard extends Component {
        constructor(props) {
            super(props);

            this.state= {
                inventory: {}
            }
            
        }

        componentDidMount() {
            console.log(this.props)
            
        }


    render() {
        return(

            <div>DASHBOARD
            <Product />
            </div>
        )
    }

}
export default Dashboard