import React ,{ Component } from 'react';
import {connect} from 'react-redux'
import {actionCreators}  from './store'
import {
    LunboWrapper,
} from "./style.js"

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

class Lunbo extends Component {
    render(){

        let {
            lunboList
        }=this.props
        return (
            <LunboWrapper>
                <div ref={(ref)=>{this.lunboDom=ref}} className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                             
                            lunboList.map((item,index)=>{
                                return (
                                    <div key = {index} className="swiper-slide"><img src={item.get("imgurl")} alt=" " /></div>
                                    )
                            })
                        }
                    </div>
                 </div>
            </LunboWrapper>
        )
    }
    componentDidMount(){
        this.props.getLunboData()
        new Swiper(this.lunboDom, {
            autoplay: {
                delay: 3000,
            },
            observer: true
        })
    }
}

const mapStateToProps = (state) =>{
    return {
        lunboList:state.getIn(['lunbo','lunboList']),
    }
}

const mapDispathToProps = (dispath)=>{
    return {
        getLunboData(){
            dispath(actionCreators.getlunboData())
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Lunbo)