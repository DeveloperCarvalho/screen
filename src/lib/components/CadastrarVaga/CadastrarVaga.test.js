import React from 'react';
import { render, cleanup } from '@testing-library/react';

// Components
import { CadastrarVaga } from './CadastrarVaga.js';

const renderComponent = (props = {}) => {
  return render(<CadastrarVaga {...props} />);
};

afterEach(cleanup);

describe('CadastrarVaga tests', () => {
  it('Should be render correctly', () => {
    const { getByTestId, getByText } = renderComponent();
    expect(getByTestId('component-example')).toBeTruthy();
    expect(getByText(/Exemplo/)).toBeTruthy();
    expect(getByText(/Testes unitários/)).toBeTruthy();
    expect(getByText(/Arquivo index.js/)).toBeTruthy();
    expect(getByText(/Arquivo do componente/)).toBeTruthy();
  });

  it('Should render component with the property name', () => {
    const { getByText } = renderComponent({ name: 'Nome customizado' });
    expect(getByText(/Nome customizado/)).toBeTruthy();
  });

  it('Should render component with the props unitTest, indexFile and component from description property', () => {
    const { getByText } = renderComponent({
      description: {
        unitTest: 'unitTest label',
        indexFile: 'indexFile label',
        component: 'component label',
      },
    });
    expect(getByText(/unitTest label/)).toBeTruthy();
    expect(getByText(/indexFile label/)).toBeTruthy();
    expect(getByText(/component label/)).toBeTruthy();
  });
});
