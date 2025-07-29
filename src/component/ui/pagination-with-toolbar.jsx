import { ITEMS_PER_PAGE_OPTIONS } from '@/common/consts';
import { NumberedPagination } from './numbered-pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';
import { getPaginationItems } from '@/lib/pagination';

// 类似于 antd 的 Pagination 组件。可以自定义每页显示条数
export function PaginationWithToolbar({
  itemsPerPage,
  itemsPerPageOptions = ITEMS_PER_PAGE_OPTIONS,
  setItemsPerPage,
  showTotal,
  total,
  ...props
}) {
  const { currentPage, onPageChange } = props;
  const { itemStart, itemEnd, totalPages } = getPaginationItems({ currentPage, itemsPerPage, total });

  const totalNode = showTotal ? showTotal(total, [itemStart, itemEnd]) : (
    typeof total === 'number' ? `第${itemStart} ~ ${itemEnd}个，共${total}个` : null
  );

  const onSelectValueChange = (v) => {
    setItemsPerPage(v);
    onPageChange(1);
  };

  return (
    <div className="flex gap-4 items-center">
      <div>{totalNode}</div>

      <div className="flex gap-4 items-center">
        <NumberedPagination
          totalPages={totalPages}
          {...props}
        />

        <Select defaultValue={itemsPerPage} onValueChange={onSelectValueChange}>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="请选择" />
          </SelectTrigger>
          <SelectContent>
            {
              itemsPerPageOptions.map((v) => {
                return (
                  <SelectItem key={v} value={v}>
                    {v} 条/页
                  </SelectItem>
                );
              })
            }
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
