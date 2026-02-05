import { Panel } from '@/components/Panel/Panel'
import { useBenefits } from '@/hooks/useBenefits'
import { useIsMobile } from '@/hooks/useIsMobile';
import { ActionsContainer, BenefitsContainer, Header, HomeContainer, Section } from './Home.styles'
import { Button } from '@/components/Button/Button';

import imgDesktop from '@/assets/imgdobra.png';
import imgMobile from '@/assets/imgdobra-mobile.png';

function Home() {

  const benefits = useBenefits()
  const isMobile = useIsMobile();

  return (
    <HomeContainer>

      <Section id='dobra-3'>
        <Header>
          <h1>
            {`Na contabilidade.com,
              você tem planos a partir
              de `}
            <b>R$ 159/mês</b>, já com:
          </h1>
        </Header>
        <BenefitsContainer>
          <img
            src={isMobile ? imgMobile : imgDesktop}
            loading='lazy'
            alt='Imagem representativa de uma usuária do sistema.'
          />

          {
            benefits.map(({ id, variant, icon: Icon, text }) => (
              <Panel key={id} variant={variant} overlap={isMobile ? 30 : 12}>
                <Icon size={isMobile ? 40 : 50} />
                <p>{text}</p>
              </Panel>
            ))
          }
        </BenefitsContainer>

        <ActionsContainer>
          <Button>Conheça os planos e preços</Button>
        </ActionsContainer>
      </Section>

    </HomeContainer>
  )
}

export default Home;
