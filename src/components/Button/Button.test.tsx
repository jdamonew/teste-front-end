

import { render, screen } from '@/tests/test-utils';
import { Button } from './Button';


describe('Botão de Planos', () => {
    it('Botão aparece com texto correto', () => {
        render(<Button>Conheça os planos e preços</Button>);

        expect(
            screen.getByRole('button', { name: /conheça os planos/i })
        ).toBeInTheDocument();
    });
});