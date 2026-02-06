jest.mock('@/assets/imgdobra.png', () => 'img-mock');
jest.mock('@/assets/imgdobra-mobile.png', () => 'img-mock');

import { render, screen, fireEvent } from '@/tests/test-utils';
import Home from './Home';

describe('Teste 1 - Home', () => {
    it('Verificação de texto de planos', () => {
        render(<Home />);

        expect(
            screen.getByText(/planos a partir/i)
        ).toBeInTheDocument();
    });

});

describe('Teste 2 - Home', () => {
    it('Verificação se o botão de plano está presente na tela', () => {
        render(<Home />);

        expect(
            screen.getByRole('button', { name: /conheça os planos/i })
        ).toBeInTheDocument();
    });
});
describe('Teste 3 - Home', () => {
    it('Verifica se o botão de plano é clicável', () => {
        render(<Home />);

        fireEvent.click(screen.getByRole('button', { name: /conheça os planos/i }));
    });
});

describe('Teste 4 - Home', () => {
    it('Verificação se imagens tem alt', () => {
        render(<Home />);

        expect(
            screen.getByRole('img')
        ).toHaveAttribute('alt');
    });
});

describe('Teste 5 - Home', () => {
    it('Verificação da quantidade de cards no carrossel', () => {
        render(<Home />);

        const cards = screen.getAllByTestId('card-carrosel');
        expect(cards).toHaveLength(5);
    });
});