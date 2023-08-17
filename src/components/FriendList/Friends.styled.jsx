import styled from '@emotion/styled'

export const FriendItems = styled.ul`
display: flex;
flex-direction: column;
margin: 0 auto;
width: 250px;
gap: 7px;
`
export const Card = styled.li`
background-color: ${props => props.theme.colors.primary};
box-shadow: ${props => props.theme.shadow.primary};
display: flex;
align-items: center;
padding: 5px;
gap: 5px;
&:hover {
    box-shadow:  0px 1px 6px 4px black;
 }
`
export const Status = styled.span`
height: 20px;
width: 20px;
background-color: red;
border-radius: 50%;
`
export const Avatar = styled.img`
padding: 2px;
background-color: mediumpurple;
border-radius: 5px;
`

export const Name = styled.p`
font-size: 30px;
font-weight: 400;
`