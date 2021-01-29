import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Container, Icon } from './styles';

interface PaginationProps {
  size: number;
  page: number;
  changePage: { (pageNumber: number): void };
}

const Pagination: React.FC<PaginationProps> = ({ size, page, changePage }) => {
  return (
    <Container>
      <Icon style={{ flexDirection: 'row-reverse' }}>
        {page > 1 && (
          <IoIosArrowBack
            size={30}
            onClick={() => changePage(page - 1)}
            data-testid="back"
          />
        )}
      </Icon>
      <span>{page}</span>
      <Icon>
        {page < size && (
          <IoIosArrowForward
            size={30}
            onClick={() => changePage(page + 1)}
            data-testid="next"
          />
        )}
      </Icon>
    </Container>
  );
};

export default Pagination;
