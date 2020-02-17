import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { AppContext } from './AppProvider';

const Logo = styled.div`
  font-size: 1.5rem;
`;

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  ${(props) => props.active
    && css`
      color: gold;
    `}
`;

function ControlButton({ name, active }) {
  const context = useContext(AppContext);
  const { page, setPage } = context;

  return (
    <ControlButtonElem
      active={page.page === name}
      onClick={() => setPage({ page: name, firstVisit: true })}
    >
      {name}
    </ControlButtonElem>
  );
}

export default function AppBar() {
  return (
    <Bar>
      <Logo> CryptoDash </Logo>
      <div />
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  );
}

ControlButton.defaultProps = {
  name: '',
  active: false,
};

ControlButton.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool,
};
