import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { PaginationWithToolbar } from '@/component/ui/pagination-with-toolbar';
import { ITEMS_PER_PAGE_OPTIONS } from '@/common/consts';

vi.mock('@/component/ui/numbered-pagination', () => ({
  NumberedPagination: vi.fn(({ currentPage, totalPages }) => (
    <div data-testid="numbered-pagination">
      Current: {currentPage}, Total: {totalPages}
    </div>
  )),
}));

vi.mock('@/component/ui/select', () => ({
  Select: vi.fn(({ children, defaultValue, onValueChange }) => (
    <select data-testid="select" defaultValue={defaultValue} onChange={(e) => {
      onValueChange(e.target.value);
    }}>
      {children}
    </select>
  )),
  SelectContent: vi.fn(({ children }) => children),
  SelectItem: vi.fn(({ value, children }) => <option value={value}>{children}</option>),
  SelectTrigger: vi.fn(({ children }) => children),
  SelectValue: vi.fn(() => 'Select Value Placeholder'),
}));

describe('PaginationWithToolbar', () => {
  const defaultProps = {
    itemsPerPage: 10,
    setItemsPerPage: vi.fn(),
    total: 100,
    currentPage: 1,
    onPageChange: vi.fn(),
  };

  it('renders with default props', () => {
    render(<PaginationWithToolbar {...defaultProps} />);

    // Check total display
    expect(screen.getByText('第1 ~ 10个，共100个')).toBeInTheDocument();

    // Check pagination component
    const pagination = screen.getByTestId('numbered-pagination');
    expect(pagination).toHaveTextContent('Current: 1, Total: 10');

    // Check items per page selector
    expect(screen.getByTestId('select')).toBeInTheDocument();
  });

  it('uses custom showTotal function', () => {
    const showTotal = vi.fn((total, [start, end]) => `显示 ${start}-${end} / ${total} 项`);
    render(<PaginationWithToolbar {...defaultProps} showTotal={showTotal} />);

    expect(showTotal).toHaveBeenCalledWith(100, [1, 10]);
    expect(screen.getByText('显示 1-10 / 100 项')).toBeInTheDocument();
  });

  it('handles last page correctly', () => {
    render(
      <PaginationWithToolbar
        {...defaultProps}
        currentPage={10}
        itemsPerPage={10}
      />
    );

    expect(screen.getByText('第91 ~ 100个，共100个')).toBeInTheDocument();
    const pagination = screen.getByTestId('numbered-pagination');
    expect(pagination).toHaveTextContent('Current: 10, Total: 10');
  });

  it('handles partial last page', () => {
    render(
      <PaginationWithToolbar
        {...defaultProps}
        total={95}
        currentPage={10}
        itemsPerPage={10}
      />
    );

    expect(screen.getByText('第91 ~ 95个，共95个')).toBeInTheDocument();
  });

  it('changes items per page and resets to page 1', async () => {
    const setItemsPerPage = vi.fn();
    const onPageChange = vi.fn();

    render(
      <PaginationWithToolbar
        {...defaultProps}
        setItemsPerPage={setItemsPerPage}
        onPageChange={onPageChange}
      />
    );

    const select = screen.getByTestId('select');

    await userEvent.selectOptions(select, '20');

    expect(setItemsPerPage).toHaveBeenCalledWith('20');
    expect(onPageChange).toHaveBeenCalledWith(1);

    await userEvent.selectOptions(select, '50');

    expect(setItemsPerPage).toHaveBeenCalledWith('50');
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it('renders correct options in select', () => {
    const customOptions = [5, 15, 30];
    render(
      <PaginationWithToolbar
        {...defaultProps}
        itemsPerPageOptions={customOptions}
      />
    );

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(customOptions.length);

    customOptions.forEach((option, index) => {
      expect(options[index]).toHaveValue(String(option));
      expect(options[index]).toHaveTextContent(`${option} 条/页`);
    });
  });

  it('uses default itemsPerPageOptions when not provided', () => {
    render(<PaginationWithToolbar {...defaultProps} itemsPerPageOptions={undefined} />);

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(ITEMS_PER_PAGE_OPTIONS.length);

    ITEMS_PER_PAGE_OPTIONS.forEach((option, index) => {
      expect(options[index]).toHaveValue(String(option));
    });
  });

  it('handles zero total items', () => {
    render(
      <PaginationWithToolbar
        {...defaultProps}
        total={0}
      />
    );

    expect(screen.getByText('第0 ~ 0个，共0个')).toBeInTheDocument();
    const pagination = screen.getByTestId('numbered-pagination');
    expect(pagination).toHaveTextContent('Total: 1');
  });

  it('does not show total when total is not a number', () => {
    expect(() => render(
      <PaginationWithToolbar
        {...defaultProps}
        total={null}
      />
    )).toThrowError(
      'Either items[] or total must be provided!'
    );
  });

  it('handles currentPage beyond total pages', () => {
    render(
      <PaginationWithToolbar
        {...defaultProps}
        currentPage={15}
      />
    );

    // Should show last page
    expect(screen.getByText('第91 ~ 100个，共100个')).toBeInTheDocument();
  });

  it('renders correctly with minimal props', () => {
    render(
      <PaginationWithToolbar
        itemsPerPage={5}
        setItemsPerPage={vi.fn()}
        total={50}
        currentPage={2}
        onPageChange={vi.fn()}
      />
    );

    expect(screen.getByText('第6 ~ 10个，共50个')).toBeInTheDocument();
    const pagination = screen.getByTestId('numbered-pagination');
    expect(pagination).toHaveTextContent('Current: 2, Total: 10');
  });
});
