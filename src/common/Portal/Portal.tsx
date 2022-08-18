import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  children: React.ReactNode;
};

export default function Portal(props: Props) {
  const { children } = props;
  const mountNode = document.body;

  return mountNode ? ReactDOM.createPortal(children, mountNode) : null;
}
