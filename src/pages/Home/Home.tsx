import { Panel } from '@/components/Panel/Panel';
import { useBenefits } from '@/hooks/useBenefits';
import { useIsMobile } from '@/hooks/useIsMobile';
import {
  ActionsContainer,
  BenefitsContainer,
  CardsContainer,
  Carrossel,
  CarrosselActions,
  CarrosselContainer,
  Dot,
  Dots,
  Header,
  HomeContainer,
  Section,
  TitleHeader,
} from './Home.styles';
import { Button } from '@/components/Button/Button';
import { Card } from '@/components/Card/Card';

import imgDesktop from '@/assets/imgdobra.png';
import imgMobile from '@/assets/imgdobra-mobile.png';
import { useCards } from '@/hooks/useCards';
import { useRef, useState } from 'react';
import { IconButton } from '@/components/IconButton/IconButton';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@/components/Icons/Icons.main';

function Home() {
  const carrosselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const benefits = useBenefits();
  const cards = useCards();
  const isMobile = useIsMobile();

  function scroll(direction: 'left' | 'right') {
    const container = carrosselRef.current;
    if (!container) return;

    const cardWidth = container.offsetWidth - 200;

    container.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  }

  function handleScroll() {
    const container = carrosselRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth;

    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  }

  return (
    <HomeContainer>
      <Section id="dobra-3">
        <Header>
          <TitleHeader>
            {`Na contabilidade.com,
              você tem planos a partir
              de `}
            <b>R$ 159/mês</b>, já com:
          </TitleHeader>
        </Header>

        <BenefitsContainer>
          <img
            src={isMobile ? imgMobile : imgDesktop}
            loading="lazy"
            alt="Imagem representativa de uma usuária do sistema."
          />

          {benefits.map(({ id, variant, icon: Icon, text }) => (
            <Panel
              key={id}
              fullWidth
              variant={variant}
              overlap={isMobile ? 30 : 12}
              direction="right"
            >
              <Icon size={isMobile ? 40 : 50} />
              <p>{text}</p>
            </Panel>
          ))}
        </BenefitsContainer>

        <ActionsContainer>
          <Button>Conheça os planos e preços</Button>
        </ActionsContainer>
      </Section>

      <Section id="dobra-5">
        <CardsContainer>
          <Header>
            <TitleHeader textAlign="left">
              {`Fatores que 
              determinam quanto 
              você vai pagar `}
            </TitleHeader>
          </Header>

          <CarrosselContainer>
            <Carrossel id="carrosel" ref={carrosselRef} onScroll={handleScroll}>
              {cards.map(({ id, text, title, icon: Icon }) => (
                <Card key={id}>
                  <Card.Icon icon={Icon} size={42} color={'#2BBE41'} />
                  <Card.Content>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                  </Card.Content>
                </Card>
              ))}
            </Carrossel>
            <Dots>
              {cards.map((_, index) => (
                <Dot key={index} active={index === activeIndex} />
              ))}
            </Dots>
            <CarrosselActions>
              <IconButton
                onClick={() => scroll('left')}
                icon={ChevronLeftIcon}
              />
              <IconButton
                onClick={() => scroll('right')}
                icon={ChevronRightIcon}
              />
            </CarrosselActions>
          </CarrosselContainer>
        </CardsContainer>
      </Section>
    </HomeContainer>
  );
}

export default Home;
