import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App'; // ou o componente que contém o formulário de comentários

describe('Teste de inserção de comentários', () => {
  test('deve adicionar dois comentários na tela', async () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/adicione seu comentário/i);
    const button = screen.getByRole('button', { name: /enviar/i });

    // Primeiro comentário
    await userEvent.type(input, 'Primeiro comentário');
    await userEvent.click(button);

    // Segundo comentário
    await userEvent.type(input, 'Segundo comentário');
    await userEvent.click(button);

    // Verificações
    const comentarios = screen.getAllByTestId('comentario');
    expect(comentarios).toHaveLength(2);
    expect(comentarios[0]).toHaveTextContent('Primeiro comentário');
    expect(comentarios[1]).toHaveTextContent('Segundo comentário');
  });
});
function expect(comentarios: any) {
    throw new Error('Function not implemented.');
}

