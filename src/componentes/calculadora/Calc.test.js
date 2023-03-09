import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calc from './Calc';

describe('Calc', () => {
    test('Renderizar sin errores', () => {
        render(<Calc />);
    });

    test('Mostrar resultados', () => {
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

    test('Restar dos numeros', () => {
        render(<Calc />);
        const buttonTwo = screen.getByText('2');
        const buttonSubtract = screen.getByText('-');
        const buttonOne = screen.getByText('1');
        const buttonEqual = screen.getByText('=');
        userEvent.click(buttonTwo);
        userEvent.click(buttonSubtract);
        userEvent.click(buttonOne);
        userEvent.click(buttonEqual);
        expect(screen.getByText('1')).toBeInTheDocument();
    });

    test('can multiply two numbers', () => {
        render(<Calc />);
        const buttonTwo = screen.getByText('2');
        const buttonMultiply = screen.getByText('*');
        const buttonThree = screen.getByText('3');
        const buttonEqual = screen.getByText('=');
        userEvent.click(buttonTwo);
        userEvent.click(buttonMultiply);
        userEvent.click(buttonThree);
        userEvent.click(buttonEqual);
        expect(screen.getByText('6')).toBeInTheDocument();
    });

    test('Dividir dos numeros', () => {
        render(<Calc />);
        const buttonSix = screen.getByText('6');
        const buttonDivide = screen.getByText('/');
        const buttonTwo = screen.getByText('2');
        const buttonEqual = screen.getByText('=');
        userEvent.click(buttonSix);
        userEvent.click(buttonDivide);
        userEvent.click(buttonTwo);
        userEvent.click(buttonEqual);
        expect(screen.getByText('3')).toBeInTheDocument();
    });
});
