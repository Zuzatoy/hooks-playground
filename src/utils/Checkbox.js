import React from 'react';
import styled from 'styled-components';
import { ReactComponent as On } from './svg/checkbox-on.svg';
import { ReactComponent as Off } from './svg/checkbox-off.svg';

export default class Checkbox extends React.Component {
  static defaultProps = {
    checked: true,
    boxSize: '17px',
    fontSize: '16px',
    spacing: '10px',
  };
  render() {
    return (
      <ComponentWrapper
        onClick={() => this.props.onClick(this.props.name, !this.props.checked)}
      >
        <TickboxWrapper
          spacing={this.props.spacing}
          boxSize={this.props.boxSize}
        >
          <On
            name="OnBox"
            width={this.props.checked ? this.props.boxSize : 0}
            height={this.props.checked ? this.props.boxSize : 0}
          />
          <Off
            name="OffBox"
            width={this.props.checked ? 0 : this.props.boxSize}
            height={this.props.checked ? 0 : this.props.boxSize}
          />
        </TickboxWrapper>
        <TextWrapper fontSize={this.props.fontSize}>
          {this.props.children}
        </TextWrapper>
      </ComponentWrapper>
    );
  }
}

export const ComponentWrapper = styled.div`
  display: flex;
  cursor: pointer;
  font-family: 'AvenirNext-Medium';
  color: ${(props) => props.theme.darkerGray};
  margin-bottom: 5px;
  align-items: center;
`;

const TickboxWrapper = styled.div`
  margin-right: ${(props) => props.spacing};
  height: ${(props) => props.boxSize};
  margin-bottom: 16px;
`;

export const TextWrapper = styled.span`
  font-size: ${(props) => props.fontSize};
  font-weight: 500;
  margin-bottom: 16px;
`;
