import PropTypes from 'prop-types';
import { Card, Status, Avatar, Name } from "./Friends.styled";

export const StatisticsItem = ({ avatar, name, isOnline }) => {
    return <Card>
    <Status style={{background: `${isOnline?"green":"red"}`}}>{isOnline}</Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
    </Card>
  }

StatisticsItem.propTypes={
    name : PropTypes.string.isRequired,
    avatar : PropTypes.string.isRequired,
    isOnline : PropTypes.bool.isRequired
}