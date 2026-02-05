import { CertificateIcon, LaptopIcon, NoCashIcon, TasksIcon, TelemarketingIcon } from "../components/Icons/Icons.main";


export function useBenefits() {
    return [
        {
            id: 1,
            icon: NoCashIcon,
            text: 'Abertura de empresa grátis (sem taxas de honorários).',
            variant: 'surface',
        },
        {
            id: 2,
            icon: CertificateIcon,
            text: 'Certificado digital incluso no 1º ano.',
            variant: 'neutralLight',
        },
        {
            id: 3,
            icon: TasksIcon,
            text: 'Emissor de notas fiscais integrado.',
            variant: 'neutralMedium',
        },
        {
            id: 4,
            icon: LaptopIcon,
            text: 'Plataforma contábil online com fluxo de caixa, lançamentos, relatórios e controle de impostos.',
            variant: 'secondary',
        },
        {
            id: 5,
            icon: TelemarketingIcon,
            text: <>Atendimento personalizado <br /> (WhatsApp, telefone, e-mail e vídeo).</>,
            variant: 'primary',
        },
    ] as const;
}
