import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from "../src/App";
import LoginPage from "../src/component/LoginPage";
describe('LoginPage', () => {
    test('checking if inputes for email and password exist', () => {
     const component = render(<LoginPage />,{wrapper: BrowserRouter});
      const labelEmail = component.getByLabelText('Email address');
      const labelPswd = component.getByLabelText('Password');
      
      expect(labelEmail).toBeInTheDocument();
      expect(labelPswd).toBeInTheDocument();
    });
});