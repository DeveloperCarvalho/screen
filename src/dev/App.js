import React from 'react';
import { Header, withStyles, colors } from '@bayon/commons';
import ScreenBayon from '../lib';
import CadastrarVaga from '../lib/components/CadastrarVaga/CadastrarVaga';

const App = ({ classes }) => (
  <>
    <Header
      appName="Buscar Processos"
      position="fixed"
      clientName="JEP"
      appInitials="SAJ6"
      avatarInitials="AS"
      avatarAlt="tribunais"
      style={{ zIndex: 50 }}
    />
    <div className={classes.container}>
      <CadastrarVaga />
    </div>
  </>
);

const styles = {
  container: {
    marginTop: 48,
    width: ' 100%',
    height: '100%',
    boxSizing: 'border-box',
    backgroundColor: colors.white,
    transitionProperty: 'width marginLeft',
    transitionDuration: '200ms',
  },
};

export default withStyles(styles)(App);
