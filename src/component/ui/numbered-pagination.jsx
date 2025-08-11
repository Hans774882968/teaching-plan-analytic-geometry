import { usePagination } from '@/hooks/use-pagination';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/component/ui/pagination';
import { buttonVariants } from './button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function NumberedPagination({
  currentPage,
  totalPages,
  paginationItemsToDisplay = 4,
  onPageChange,
  paginationClassName = '',
}) {
  const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
    currentPage,
    totalPages,
    paginationItemsToDisplay,
  });

  const handlePageChange = (page) => (e) => {
    e.preventDefault();
    onPageChange(page);
  };

  return (
    <Pagination className={paginationClassName}>
      <PaginationContent className="gap-2">
        <PaginationItem className="[&:first-child>a]:rounded-s-lg [&:last-child>a]:rounded-e-lg">
          <PaginationLink
            className={cn(
              buttonVariants({
                variant: 'outline',
              }),
              'rounded-none border-0 shadow-none focus-visible:z-10 aria-disabled:pointer-events-none [&[aria-disabled]>svg]:opacity-50'
            )}
            href="#"
            onClick={handlePageChange(currentPage - 1)}
            aria-label="Go to previous page"
            aria-disabled={currentPage === 1}>
            <ChevronLeft size={16} strokeWidth={2} aria-hidden="true" />
          </PaginationLink>
        </PaginationItem>

        {showLeftEllipsis && (
          <PaginationItem>
            <PaginationLink
              className={cn(buttonVariants({
                variant: 'outline',
              }), 'pointer-events-none rounded-none border-0 shadow-none')}>
              ...
            </PaginationLink>
          </PaginationItem>
        )}

        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              className={cn(buttonVariants({
                variant: 'outline',
              }), 'rounded-none border-0 shadow-none focus-visible:z-10', page === currentPage && 'bg-accent hover:bg-accent/80')}
              href="#"
              onClick={handlePageChange(page)}
              isActive={page === currentPage}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {showRightEllipsis && (
          <PaginationItem>
            <PaginationLink
              className={cn(buttonVariants({
                variant: 'outline',
              }), 'pointer-events-none rounded-none border-0 shadow-none')}>
              ...
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem className="[&:first-child>a]:rounded-s-lg [&:last-child>a]:rounded-e-lg">
          <PaginationLink
            className={cn(
              buttonVariants({
                variant: 'outline',
              }),
              'rounded-none border-0 shadow-none focus-visible:z-10 aria-disabled:pointer-events-none [&[aria-disabled]>svg]:opacity-50'
            )}
            href="#"
            onClick={handlePageChange(currentPage + 1)}
            aria-label="Go to next page"
            aria-disabled={currentPage === totalPages}>
            <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export { NumberedPagination };
