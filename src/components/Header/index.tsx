import React from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';
import { useTheme } from '../../hooks/theme';
import { HeaderContainer } from './styles';
import logoImage from '../../assets/logo.svg';

const Header: React.FC = ({ children }) => {
  const { themeState, currentTheme, handleToggleTheme } = useTheme();

  return (
    <>
      <HeaderContainer>
        <img src={logoImage} alt="Github Eplorer" />
        <Switch
          onChange={handleToggleTheme}
          checked={themeState === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor={currentTheme.colors.primary}
          offColor={shade(0.15, currentTheme.colors.secondary)}
        />
        {children}
      </HeaderContainer>
    </>
  );
};

export default Header;
