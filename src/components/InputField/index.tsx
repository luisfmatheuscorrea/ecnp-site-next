import {
  InputProps,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/input';
import { colors } from '../../assets/styles/global';
import { InputFieldS } from './styles';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { ErrorMessage } from 'formik';

interface InputFieldProps {
  label: string;
  name: string;
  mask?: string;
  messageError?: string;
}

export default function InputField(props: InputFieldProps & InputProps) {
  const { label, name, mask, messageError, ...rest } = props;
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputFieldS>
      <label htmlFor="input">{label}</label>
      {label.toLowerCase() === 'senha' ? (
        <InputGroup size="md">
          <Input
            type={show ? 'text' : 'password'}
            Input
            className="input"
            label={label}
            name={name}
            {...rest}
            variant="filled"
            width="100%"
            focusBorderColor={colors.primary}
            bgColor={colors.white}
            backgroundColor={colors.white}
            padding="0 0.6rem"
            size="md"
          />
          <InputRightElement className="input-right-element" width="4.2rem">
            <Button
              className="button-password"
              h="90%"
              size="sm"
              onClick={handleClick}
            >
              {show ? (
                <FiEye className="icon-password" />
              ) : (
                <FiEyeOff className="icon-password" />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
      ) : (
        <Input
          className="input"
          mask={mask ?? mask}
          label={label}
          name={name}
          {...rest}
          variant="filled"
          width="100%"
          focusBorderColor={colors.primary}
          bgColor={colors.primary}
          backgroundColor={colors.white}
          padding="0 0.6rem"
          size="md"
        />
      )}
      <p>{messageError != 'undefined' ? messageError : ''}</p>
    </InputFieldS>
  );
}
