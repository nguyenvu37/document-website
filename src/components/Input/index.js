import React from 'react';
import IMAGES from './../../themes/index';

const Input = ({
  placeholder = '',
  value = '',
  errorMsg = '',
  label = '',
  disabled = false,
  readOnly = false,
  type = 'text',
  onBlur = () => {},
  onBlurWrapper = () => {},
  onFocusWrapper = () => {},
  onClickWrapper = () => {},
  onChange = () => {},
  customClassName = '',
  customClassWrap = '',
  customClassLabel = '',
  onFocus = () => {},
  onKeyPress = () => {},
  onPaste = () => {},
  variant = 'outline',
  name = '',
  request = false,
  customClass = '',
  innerRef = '',
  pattern = '',
  inputMode = '',
  maxLength = '',
  autocomplete = '',
  autoFocus,
  isIconClose,
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={`input__wrapper ${
        variant !== 'outline' ? ` input__wrapper--${variant}` : ''
      }`}
      onBlur={(e) => onBlurWrapper(e)}
      onFocus={(e) => onFocusWrapper(e)}
      onClick={(e) => onClickWrapper(e)}
      onKeyUp={() => {}}
    >
      {!!label && (
        <p className={`${customClassLabel} input__label`}>
          {label}
          {request && <span className="request">*</span>}
        </p>
      )}
      <div className={`input__box ${customClassWrap}`}>
        <input
          className={`input-change ${
            customClass.length > 0 ? customClass : ''
          } ${
            variant !== 'outline' ? `input--${variant}` : ''
          } ${customClassName}`}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          type={type}
          ref={innerRef}
          onPaste={onPaste}
          onKeyPress={onKeyPress}
          readOnly={readOnly}
          onBlur={(e) => onBlur(e)}
          onFocus={(e) => onFocus(e)}
          onChange={(e) => onChange(e)}
          autoCapitalize="none"
          inputMode={inputMode}
          maxLength={maxLength}
          name={name}
          pattern={pattern}
          autoComplete={autocomplete}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
        />
        {isIconClose && (
          <img className="icon-close" src={IMAGES.header_close} alt="close" />
        )}
      </div>
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
    </div>
  );
};

export default Input;
