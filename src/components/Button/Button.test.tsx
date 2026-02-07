

import { fireEvent, render, screen } from '@/tests/test-utils';
import { Button } from './Button';


describe('Teste 1 - Button', () => {
    it('Botão aparece com texto correto', () => {
        render(<Button>Conheça os planos e preços</Button>);

        expect(
            screen.getByRole('button', { name: /Conheça os planos e preços/i })
        ).toBeInTheDocument();
    });
});

describe('Teste 2 - Button', () => {
    it('Verifica se o botão tem onClick', () => {
        render(<Button onClick={() => { }}>Conheça os planos e preços</Button>);

        fireEvent.click(screen.getByRole('button', { name: /Conheça os planos e preços/i }));
    });
});