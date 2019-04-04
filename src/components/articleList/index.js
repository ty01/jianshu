import React, { Component } from "react";
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {
    ArticleListWrapper
} from './style.js'

class ArticleList extends Component{
    render(){
        let {
            articleList
        }=this.props
        
        return (
            <ArticleListWrapper>
                {
                    articleList.map(item=>{
                        return <p key={item.get("id")}>{item.get("title")}</p>
                    })
                }
            </ArticleListWrapper>
        )
    }
    componentDidMount(){
        this.props.getarticleList()
    }
}

const mapStateToProps=(state)=>{
    return{
        articleList:state.getIn(["articleList","articleList"])
    }
}

const mapDispathToProps=(dispath)=>{
    return{
        getarticleList(){
            dispath(actionCreators.getArticleList())
        }
    }
}   

export default connect(mapStateToProps,mapDispathToProps)(ArticleList)