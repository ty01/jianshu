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
            hotListNext,
            hotList,
            page,
            totalPage,
            hotListHover,
            hotListOver,
            hotListOut,
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
                            in={focused || hotListHover}
                            timeout={500}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={(focused || hotListHover)? "focused" : "" }
                                onFocus={()=>{
                                    handelInputFocus(hotList)
                                }}
                                onBlur={handelInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={(focused || hotListHover) ? "focused iconfont" : "iconfont"}>&#xe6e4;</i>
                        
                        {   (focused || hotListHover) ?
                            <SearchHot onMouseEnter={hotListOver} onMouseLeave={hotListOut}>
                                <SearchHotTitle>
                                    热门搜索
                                    <SearchHotChange  onClick={
                                            ()=>{
                                                hotListNext(page,totalPage,this.spinIcon)
                                            }   
                                        }>
                                        <i ref={(icon)=>{this.spinIcon=icon}} className={"spin iconfont"}>&#xe671;</i>换一批
                                    </SearchHotChange>
                                </SearchHotTitle>
                                <ul>
                                    {
                                        hotList.map((item,index)=>{
                                            if( (page-1)*10 <= index &&  index< page*10){
                                                return <SearchHotItem key={item}><a href="/detail">{item}</a></SearchHotItem>
                                            }
                                            return null
                                        })
                                    }
                                    
                                </ul>    
                            </SearchHot> :null
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
        hotList:state.getIn(['header','hotList']).toJS(),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        hotListHover:state.getIn(['header','hotListHover']),
        //focused:state.get('header').get('focused')
    }
}

const mapDispathToProps = (dispath) =>{
    return {
        handelInputFocus (list){
            dispath(actionCreators.searchFocus())
            if(!list.length){
                dispath(actionCreators.getHotList())
            }
            
        },
        handelInputBlur (){
            dispath(actionCreators.searchBlur())
        },
        hotListNext(page,totalPage,spin){
            const oldOrigin = (spin.style.transform.replace(/[^0-9]/ig,"") || 0 ) * 1;
            spin.style.transform='rotate('+ (oldOrigin+360) +'deg)';
            page++
            if(page > totalPage){
                page =1
            }
            dispath(actionCreators.hotListNext(page))
        },
        hotListOver(){
            dispath(actionCreators.hotListOver())
        },
        hotListOut(){
            dispath(actionCreators.hotListOut())
        }
    }
}   

export default  connect(mapStateToProps,mapDispathToProps)(Header);