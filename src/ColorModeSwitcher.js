import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';


export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const styleEl = document.createElement('style');
  const cssText = document.createTextNode(
      'html * { transition: color, background-color 0.3s ease-out!important }',
  );
  styleEl.appendChild(cssText);
  document.head.appendChild(styleEl);
  setTimeout(() => {
    document.head.removeChild(styleEl);
  }, 300);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
