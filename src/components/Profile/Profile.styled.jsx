import styled from '@emotion/styled'

export const ProfileBox = styled.div`
 width: 200px;
 margin: 0 auto;
 padding-top: 8px;
 border-radius: 10px;
 box-shadow:  0px 1px 6px 4px grey;
 &:hover {
    box-shadow:  0px 1px 6px 4px black;
 }
`
export const UserAvatar = styled.img`
border-radius: 50%;
width: 150px;
margin: 0 auto 10px;
`

export const UserName = styled.p`
text-align: center;
margin-bottom: 10px;
font-weight: 700;
`

export const UserTag = styled.p`
color: grey;
text-align: center;
margin-bottom: 10px;
font-weight: 500;
`
export const UserLocation = styled.p`
color: grey;
text-align: center;
margin-bottom: 10px;
font-weight: 500;
`
export const Stats = styled.ul`
display: flex;
justify-content: space-between;
margin: 0 auto;
width: 200px;
background-color: #f3f6f9;
` 
export const ListItem = styled.li`
border: 1px solid rgba(0,0,0,.12); 
 display: grid; 
 padding: 20px 0; 
 width: 78px;
`
export const Label = styled.span`
color: #8a99a6;
margin-bottom: 10px;
text-align: center;
`
export const Quantity = styled.span`
font-size: 25px;
font-weight: 600;
text-align: center;
`