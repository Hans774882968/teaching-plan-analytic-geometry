import { SELECT_MODE_ARR, SELECT_MODES } from '@/common/consts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/component/ui/select';

export default function SelectMode({
  defaultValue = SELECT_MODES.AND,
  onValueChange,
}) {
  return (
    <Select onValueChange={onValueChange} defaultValue={defaultValue}>
      <SelectTrigger className="w-50 sm:w-70 md:w-90">
        <SelectValue placeholder="请选择" />
      </SelectTrigger>
      <SelectContent>
        {
          SELECT_MODE_ARR.map((mode) => {
            return (
              <SelectItem key={mode} value={mode}>
                {mode}
              </SelectItem>
            );
          })
        }
      </SelectContent>
    </Select>
  );
}
