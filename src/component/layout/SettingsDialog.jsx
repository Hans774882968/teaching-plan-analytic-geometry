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
import { hljsThemeOptions } from '@/common/themeOptions';
import { editorLightThemes } from '@/common/editorThemeOptions';
import { TpmCombobox } from '@/component/ui/tpm-combobox';

export default function SettingsDialog() {
  const {
    filterStyle,
    setFilterStyle,
    hljsTheme,
    setHljsTheme,
    lightEditorTheme,
    setLightEditorTheme,
    reset,
  } = useSettingsStore();
  const widthClassName = 'w-50 sm:w-70 md:w-90';

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
      <DialogContent className="max-w-85 sm:max-w-150">
        <DialogHeader>
          <DialogTitle>设置</DialogTitle>
          <DialogDescription>
            网站全局设置
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-6 py-4">
          <div className="flex flex-wrap items-center gap-4">
            筛选组件风格：
            <Select value={filterStyle} onValueChange={handleFilterStyleChange}>
              <SelectTrigger className={widthClassName}>
                <SelectValue placeholder="选择风格" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={FILTER_STYLE.FLAT}>平铺</SelectItem>
                <SelectItem value={FILTER_STYLE.SELECT}>下拉框</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            选代码块主题：
            <div className={widthClassName}>
              <TpmCombobox
                value={hljsTheme}
                setValue={setHljsTheme}
                options={hljsThemeOptions}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            选编辑器主题：
            <div className={widthClassName}>
              <TpmCombobox
                value={lightEditorTheme}
                setValue={setLightEditorTheme}
                options={editorLightThemes}
              />
            </div>
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
