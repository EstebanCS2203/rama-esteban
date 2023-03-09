import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calc from './Calc';

describe('Calc', () => {
    test('Renderizar sin errores', () => {
        render(<Calc />);
    });

    test('Mostrar resultados de suma', () => {
        render(<Calc />);
        const buttonOne = screen.getByText('1');
        const buttonAdd = screen.getByText('+');
        const buttonEqual = screen.getByText('=');
        userEvent.click(buttonOne);
        userEvent.click(buttonAdd);
        userEvent.click(buttonOne);
        userEvent.click(buttonEqual);
        expect(screen.getByText('2')).toBeInTheDocument();
    });

});
