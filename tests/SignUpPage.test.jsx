import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from "../src/App";
import Signup from "../src/component/Signup";
describe('SignUp page', () => {
    test('checking if inputes for email and password exist', () => {
     const component = render(<Signup />,{wrapper: BrowserRouter});
      const labelEmail = component.getByLabelText('Email address');
      const labelPswd = component.getByLabelText('Password');
      const labelConfirmPswd = component.getByLabelText('Confirm Password');
      
      expect(labelEmail).toBeInTheDocument();
      expect(labelPswd).toBeInTheDocument();
      expect(labelConfirmPswd).toBeInTheDocument();
    });
});