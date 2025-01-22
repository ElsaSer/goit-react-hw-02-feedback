import PropTypes from 'prop-types';
import { NotificationMessage } from './NotificationStyled';
export const Notification = ({ message }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};
