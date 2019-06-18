import  styled  from 'styled-components'
import logo from '../../statics/images/logo.png'

export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href:'/'
})`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logo});
    background-size:contain
`;

export const Nav = styled.div`
    width: 960px;
    margin:0 auto;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
`;
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
       float:left;
    }
    &.right{
       float:right;
       color:#969696;
    }
    &.active{
       color:#ea6f5a;
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width: 160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    margin-top:9px;
    padding:0 30px 0 25px; 
    box-sizing:border-box;
    font-size:14px;
    
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        transition:all .5s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .5s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`;
export const Additiotn = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;

export const Button = styled.div`
    font-size:15px;
    float:right;
    border-radius:19px;
    line-height:38px;
    margin:9px;
    border:1px solid #ec6149;
    margin-right:20px;
    padding:0 20px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background-color:#ec6149;
    }
`;
export const Searchbox = styled.div`
    float:left;
    position:relative;
    margin-left:20px;
    >.iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        height:30px;
        line-height:30px;
        text-align:center;
        border-radius:15px;
        
        &.focused{
            color:#fff;
            background:#777;
        }
    }
    
`;
export const SearchHot = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:20px 20px 10px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    box-sizing:border-box;
    z-index:99999999999999;
    background:#fff;
`;
export const SearchHotTitle = styled.div`
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;
export const SearchHotChange = styled.span`
    font-size:13px;
    float:right;
    .spin{
        display:block;
        float:left;
        font-size:12px;
        padding-right:2px;
        transition:all .4s ease-in;
        transform-origin: center center;
    }
`;
export const SearchHotItem = styled.li`
    display:inline-block;
    margin-right:10px;
    line-height:28px;
    a{
        padding: 1px 6px;
        font-size: 12px;
        color: #787878;
        border: 1px solid #ddd;
        border-radius: 3px;
    }
    a:hover{
        color: #333;
        border-color: #b4b4b4;
    }
`;