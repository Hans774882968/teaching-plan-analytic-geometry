import { FILTER_STYLE, useSettingsStore } from './states/settingsState';
import { FaGear } from 'react-icons/fa6';
import { Button } from '@/component/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/component/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/component/ui/select';
import { Label } from '@/component/ui/label';

export default function SettingsDialog() {
  const { filterStyle, setFilterStyle, reset } = useSettingsStore();

  const handleFilterStyleChange = (value) => {
    setFilterStyle(value);
  };

  const handleReset = () => {
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="p-2 rounded-lg cursor-pointer hover:bg-white/[0.2] transition-colors"
          title="设置"
        >
          <FaGear />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-75 sm:max-w-150">
        <DialogHeader>
          <DialogTitle>设置</DialogTitle>
          <DialogDescription>
            网站全局设置
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="filterStyle" className="col-span-2 sm:col-span-1 justify-end">
              筛选组件风格
            </Label>
            <Select value={filterStyle} onValueChange={handleFilterStyleChange}>
              <SelectTrigger className="col-span-2 sm:col-span-3">
                <SelectValue placeholder="选择风格" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={FILTER_STYLE.FLAT}>平铺</SelectItem>
                <SelectItem value={FILTER_STYLE.SELECT}>下拉框</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end">
            <Button variant="default" onClick={handleReset}>
              重置
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
