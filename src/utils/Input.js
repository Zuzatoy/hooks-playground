import React, { Component } from 'react';
import styled from 'styled-components';
import Visible from './svg/Ic_visibility_48px.svg';
import NotVisible from './svg/Ic_visibility_off_48px.svg';
import * as Text from '../utils/Text';

class Input extends Component {
  constructor(props) {
    super(props);
    this.setFocus = this.setFocus.bind(this);
    this.setBlur = this.setBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  state = {
    focused: false,
  };

  setFocus = () => {
    this.setState({ focused: true });
  };

  setBlur = () => {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
    this.setState({ focused: false });
  };

  onButtonClick = () => {
    if (!this.props.disabled) {
      this.props.button.onClick();
    }
  };

  onChange = (e) => {
    this.props.onChange(this.props.name, e.target.value);
  };

  render() {
    let c = primaryColor;

    if (this.props.secondary) {
      if (this.props.disabled) {
        c = secondaryColorDisabled;
      } else if (this.state.focused) {
        c = secondaryColorFocused;
      } else {
        c = secondaryColor;
      }
    } else if (this.props.disabled) {
      c = primaryColorDisabled;
    } else if (this.state.focused) {
      c = primaryColorFocused;
    }

    const p = this.props;
    const visibility = this.state.showPassword ? (
      <NotVisible height="24" width="24" onClick={this.toggleFieldType} />
    ) : (
      <Visible height="24" width="24" onClick={this.toggleFieldType} />
    );
    return (
      <Wrapper>
        <InputWithMargin>
          <InputWrapper focused={this.state.focused} lineColor={c.underline}>
            <LeftWrapper>
              <Field
                innerRef={this.props.innerRef}
                onFocus={this.setFocus}
                onBlur={this.setBlur}
                disabled={this.props.disabled}
                value={this.props.value}
                onChange={this.onChange}
                name={this.props.name || p.label}
                textColor={c.text}
              />
              <Label
                color={c.label}
                htmlFor={p.label}
                moveUp={
                  this.state.focused ||
                  (this.props.value !== '' &&
                    this.props.value !== undefined &&
                    this.props.value !== null)
                }
              >
                {p.label}
              </Label>
            </LeftWrapper>
            <RightWrapper>
              <IconWrapper
                showIcon={
                  this.state.focused ||
                  (this.props.value !== '' && this.props.value !== undefined)
                }
              >
                {this.props.type === 'password' && visibility}
              </IconWrapper>

              {this.props.button && (
                <InputButton
                  href={this.props.button.href ? this.props.button.href : '#'}
                  disabled={this.props.disabled}
                  onClick={this.onButtonClick}
                  color={c.button}
                  underline={this.props.button.underline}
                  focused={this.state.focused}
                  moveUp={
                    this.state.focused ||
                    (this.props.value !== '' && this.props.value !== undefined)
                  }
                >
                  {this.props.button.text}
                </InputButton>
              )}
            </RightWrapper>
          </InputWrapper>
        </InputWithMargin>
      </Wrapper>
    );
  }
}

const primaryColor = {
  label: '#999999',
  text: '#333333',
  underline: '#b2b2b2',
  button: '#089ae7',
  link: '#089ae7',
  message: '#999999',
  error: '#ff0000',
};

const primaryColorFocused = {
  ...primaryColor,
  label: '#089ae7',
  underline: '#0096e6',
  button: '#089ae7',
};

const primaryColorDisabled = {
  ...primaryColor,
  label: '#b2b2b2',
  text: '#b2b2b2',
  underline: '#e8e8e8',
  button: '#b2b2b2',
};

const secondaryColor = {
  label: '#ffffff',
  text: '#ffffff',
  underline: '#b2b2b2',
  button: '#ffffff',
  link: '#ffffff',
  message: '#ffffff',
  error: '#ff0000',
};

const secondaryColorFocused = {
  ...secondaryColor,
  label: '#089ae7',
  underline: '#0096e6',
  button: '#089ae7',
};

const secondaryColorDisabled = {
  ...secondaryColor,
  label: '#b2b2b2',
  text: '#b2b2b2',
  underline: '#999999',
  button: '#b2b2b2',
};

const Wrapper = styled.div`
  position: relative;
  font-family: 'AvenirNextLTPro-Medium', Helvetica, Arial, sans-serif;
  font-weight: 500;
  margin-top: 15px;
  min-width: 100%;
  width: 100%;
  padding-bottom: 25px;
`;

const InputWithMargin = styled.div`
  margin: 0;
  padding-bottom: 10px;
`;

const LeftWrapper = styled.div`
  height: 35px;
  position: relative;
  width: 100%;
`;
export const InputWrapper = styled.div`
  border-bottom: ${(props) => (props.focused ? '2px' : '1px')} solid
    ${(props) => props.lineColor};
  display: flex;
  margin-bottom: ${(props) => (props.focused ? '5px' : '6px')};
  width: 100%;
`;
const IconWrapper = styled.div`
  display: ${(props) => (props.showIcon ? 'flex' : 'none')};
  height: 24px;
  width: 24px;
  align-items: center;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  z-index: 3;
  padding: 0 5px;
`;
export const Field = styled.input`
  border: none;
  font-size: 16px;
  font-family: 'AvenirNext-Medium', Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  padding: 0;
  outline: none;
  z-index: 2;
  position: relative;
  background: transparent;
  box-shadow: none;
  color: ${(props) => props.textColor};
  ::-ms-clear {
    display: none;
  }
  ::-ms-reveal {
    display: none;
  }
`;
const Label = styled.label`
  top: 8px;
  left: 0px;
  margin: 0px;
  position: absolute;
  color: ${(props) => props.color};
  font-family: 'AvenirNextLTPro-Medium', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: ${(props) => (props.moveUp ? '12px' : '16px')};
  transform: ${(props) => (props.moveUp ? 'translateY(-20px)' : '')};
  transition: transform 0.15s ease 0s, font-size 0.1s;
  will-change: transform, font-size;
  z-index: 1;
`;
export const InputButton = styled.a`
  font-family: 'AvenirNextLTPro-Medium', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  position: absolute;
  color: ${(props) => props.color};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  transform: ${(props) => (props.moveUp ? 'translateY(-20px)' : '')};
  font-size: ${(props) => (props.moveUp ? '12px' : '16px')};
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  transition: transform 0.15s ease 0s, font-size 0.1s;
  will-change: transform, font-size;
`;

export default React.forwardRef((props, ref) => (
  <Input innerRef={ref} {...props} />
));
