import React ,{Component} from 'react';
import Lunbo from '../../components/lunbo';
import ArticleList from '../../components/articleList'
import {
    MainWrapper,
    MainRight,
    MainLeft,
    MainBox
} from './style';

class Home extends Component{
    render (){
        return (
            <MainWrapper>
                <MainBox>
                    <MainLeft>
                        <Lunbo/>
                        <ArticleList/>
                    </MainLeft>
                    <MainRight>

                    </MainRight>
                    
                </MainBox>
                
            </MainWrapper>
        )
    }
}

export default Home;