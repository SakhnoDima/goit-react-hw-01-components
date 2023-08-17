import styled from '@emotion/styled'

export const StatisticsSection = styled.div`
margin: 0 auto;
max-width: 330px;
padding: 30px;
background-color: ${props => props.theme.colors.primary};
`
export const Title = styled.h2`
padding: 20px 10px;
text-align: center;
`
export const StatList = styled.ul`
display: flex;
justify-content: center;
`

export const Item = styled.li`
align-items: center;
    display: grid;
    height: 70px;
    justify-content: center;
    width: 70px;
    
`