import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendsListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
