import React, {Component} from 'react'
import Product from '../Product/Product'
import Axios from 'axios';

    class Dashboard extends Component {
        constructor(props) {
            super(props);

            this.state= {
 
            }
            
        }

        componentDidMount() {
            console.log(this.props)
            
        }


    render() {
        return(

            <div>DASHBOARD
                {/* <div>inventory: {this.props.state.inventory}</div> */}
            <Product />
            </div>
        )
    }

}
export default Dashboard