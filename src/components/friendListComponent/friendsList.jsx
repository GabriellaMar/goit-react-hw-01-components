import PropTypes from 'prop-types';
import css from '../friendComponent/friendListItem.module.css';
import { FriendListItem } from "../friendComponent/friendListItem"

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.list}>
            {friends.map(friend => (<FriendListItem
                key={friend.id}
                name={friend.name}
                avatar={friend.avatar}
                isOnline={friend.isOnline}
            />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array,
}