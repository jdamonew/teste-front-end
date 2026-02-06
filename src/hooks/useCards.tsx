import { ClockIcon, GiftIcon, HandHeartIcon, HandShakeIcon, PiggyCoinIcon } from "../components/Icons/Icons.main";


export function useCards() {
    return [
        {
            id: 1,
            icon: HandShakeIcon,
            title: 'Regime tributário',
            text: 'Simples Nacional, Lucro Presumido ou Lucro Real.',
        },
        {
            id: 2,
            icon: HandHeartIcon,
            title: 'CNAE/atividade',
            text: 'Algumas atividades exigem mais obrigações acessórias.',
        },
        {
            id: 3,
            icon: PiggyCoinIcon,
            title: 'Faturamento anual',
            text: 'Quanto maior o volume, mais complexa a gestão.',
        },
        {
            id: 4,
            icon: GiftIcon,
            title: 'Benefícios exclusivos',
            text: 'Conta digital, certificado digital grátis, multibenefícios.',
        },
        {
            id: 5,
            icon: ClockIcon,
            title: 'Abertura de empresa mais ágil do mercado',
            text: 'Cerca de 72hs úteis.',
        },
    ] as const;
}
