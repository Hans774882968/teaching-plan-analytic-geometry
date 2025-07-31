import Tag from '@/component/Tag';
import { addOrDeleteItem, cn } from '@/lib/utils';
import { getTagColorByIndex } from '@/lib/getTagColor';
import SelectMode from '@/component/SelectMode';
import MultipleSelector from '@/component/ui/multiselect';
import { useFilterStore } from './states/filterState';
import { FILTER_STYLE, useSettingsStore } from '@/component/layout/states/settingsState';
import NoData from '@/component/NoData';

export default function TagArea({ tags, onTagChange }) {
  const { setMode, tagFilter } = useFilterStore();
  const tagOptions = tags.map((tag) => ({ label: tag, value: tag }));
  const { filterStyle } = useSettingsStore();

  const onModeChange = (val) => {
    setMode(val);
    // 清空原来选择的标签
    onTagChange([]);
  };

  const onSingleTagClick = (tag) => {
    const selectedTags = addOrDeleteItem(tagFilter, tag);
    onTagChange(selectedTags);
  };

  const onTagSelectorChange = (selectedOptions) => {
    const selectedTags = selectedOptions.map(opt => opt.value);
    onTagChange(selectedTags);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        筛选模式：
        <SelectMode onValueChange={onModeChange} />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        选择标签：
        {
          filterStyle === FILTER_STYLE.FLAT ? (
            tags.map((tag, index) => {
              const selected = tagFilter.includes(tag);

              return (
                <Tag
                  key={tag}
                  className={cn(
                    'cursor-pointer',
                    selected ? 'bg-blue-500 text-white' : getTagColorByIndex(index)
                  )}
                  onClick={() => onSingleTagClick(tag)}
                >
                  {tag}
                </Tag>
              );
            })
          ) : (
            <MultipleSelector
              commandProps={{
                label: '请选择',
                className: 'w-45 md:w-80',
              }}
              value={tagOptions.filter(opt => tagFilter.includes(opt.value))}
              onChange={onTagSelectorChange}
              defaultOptions={tagOptions}
              placeholder="请选择"
              hidePlaceholderWhenSelected
              emptyIndicator={<NoData />}
            />
          )
        }
      </div>
    </div>
  );
}
