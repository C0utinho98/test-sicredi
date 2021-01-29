import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Container, AccordionItem, WrapperItem } from './styles';

interface PropsAccordion {
  title: string;
}

const Accordion: React.FC<PropsAccordion> = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <Container>
      <AccordionItem
        open={isOpen}
        onClick={() => setOpen(!isOpen)}
        data-testid="accordionItem"
      >
        {title}
        <IoIosArrowDown />
      </AccordionItem>
      <WrapperItem open={!isOpen}>{children}</WrapperItem>
    </Container>
  );
};

export default Accordion;
