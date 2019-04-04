import  styled  from 'styled-components'

export const MainRight = styled.div`
    width:280px;
    float:right;
`;

export const MainLeft = styled.div`
    width:625px;
    float:left;
`;

export const MainWrapper = styled.div`
    width:960px;
    margin:0 auto;
`;


export const MainBox = styled.div`
    width:100%;
    zoom:1;
    :after{
        content:'';
        clear:both;
        display:block;
        visibility:hidden;
        height:0;
    }
`;
