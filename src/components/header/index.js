import React ,{ Component } from 'react';
import {connect} from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import {actionCreators}  from './store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Additiotn,
    Button,
    Searchbox,
    SearchHot,
    SearchHotTitle,
    SearchHotChange,
    SearchHotItem
} from "./style.js"

class Header extends Component{
    render(){

        const {
            focused,
            handelInputFocus,
            handelInputBlur,
            hotList
        } =this.props
        return (
            <HeaderWrapper>
               <Logo/>
               <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
                    <Searchbox>
                        <CSSTransition
                            in={focused}
                            timeout={500}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={focused ? "focused" : "" }
                                onFocus={handelInputFocus}
                                onBlur={handelInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? "focused iconfont" : "iconfont"}>&#xe6e4;</i>
                        
                        {
                            focused ? <SearchHot>
                            <SearchHotTitle>
                                热门搜索
                                <SearchHotChange>
                                    换一批
                                </SearchHotChange>
                            </SearchHotTitle>
                            <ul>
                                {
                                    hotList.map((item)=>{
                                        return <SearchHotItem key={item}><a>{item}</a></SearchHotItem>
                                    })
                                }
                                
                            </ul>    
                        </SearchHot> : null
                        }
                        
                    </Searchbox>
                  
                </Nav>
                <Additiotn>
                    <Button className='writting'><i className='iconfont'>&#xe62d;</i>写文章</Button>
                    <Button className="reg">注册</Button>
                </Additiotn>
            </HeaderWrapper>
        )
    }
}




const mapStateToProps = (state)=>{
    return {
        focused:state.getIn(['header','focused']),
        hotList:state.getIn(['header','hotList']),
        //focused:state.get('header').get('focused')
    }
}

const mapDispathToProps = (dispath) =>{
    return {
        handelInputFocus (){
            dispath(actionCreators.searchFocus())
            dispath(actionCreators.getHotList())
        },
        handelInputBlur (){
            dispath(actionCreators.searchBlur())
        }
    }
}   

export default  connect(mapStateToProps,mapDispathToProps)(Header);