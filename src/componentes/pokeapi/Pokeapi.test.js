import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Pokeapi from './Pokeapi';

describe('Pokeapi component', () => {
  test('renders Pokeapi component', () => {
    render(<Pokeapi />);
    const linkElement = screen.getByText(/Pokédex/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Test pokemon', async() => {
    render(<Pokeapi />);
    const pokemonNumberInput = screen.getByLabelText('Ingrese el Número del Pokémon:');
    const button = screen.getByText('Buscar');
    
    fireEvent.change(pokemonNumberInput, { target: { value: '6' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/Charizard/i)).toBeInTheDocument();
  });
  // Verificar que se muestre la información correcta
  expect(screen.getByText(/fire/i)).toContainElement(screen.getByText(/fire/i));
  expect(screen.getByText(/17 cm/i)).toContainElement(screen.getByText(/17 cm/i));
  expect(screen.getByText(/905 kg/i)).toContainElement(screen.getByText(/905 kg/i));  
  expect(screen.getByText(/267 exp/i)).toContainElement(screen.getByText(/267 exp/i));  
 
  });

});