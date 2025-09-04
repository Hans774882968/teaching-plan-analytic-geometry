import { FILTER_STYLE, useSettingsStore } from './states/settingsState';
import { FaCode, FaPaintBrush, FaQuestionCircle } from 'react-icons/fa';
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
import { Separator } from '@/component/ui/separator';
import { Switch } from '@/component/ui/switch';
import TextareaWithLength from '@/component/ui/textarea-with-length';
import { Popover, PopoverContent, PopoverTrigger } from '@/component/ui/popover';
import {
  WATERMARK_TEXT_MAX_LENGTH,
  WATERMARK_TEXT_MAX_ROWS,
} from '@/common/consts';

// TODO: TpmCombobox 从写死宽度改为 w-full 导致 Popover 宽度不再与 PopoverTrigger 一致
export default function SettingsDialog() {
  const {
    filterStyle,
    setFilterStyle,
    expandCode,
    setExpandCode,
    watermarkForLessonBlog,
    setWatermarkForLessonBlog,
    hljsTheme,
    editorFontSize,
    setHljsTheme,
    lightEditorTheme,
    setLightEditorTheme,
    setEditorFontSize,
    reset,
  } = useSettingsStore();

  const fontSizeOptions = Array.from({ length: 13 }, (_, i) => 12 + i);

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

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-[var(--tpm-primary)] flex items-center">
              <FaPaintBrush className="mr-2" />
              通用
            </h4>
            <div className="sm:flex sm:items-center">
              <label className="block font-medium mb-2 sm:mb-0 sm:w-1/3 sm:text-right sm:pr-4">
                筛选组件风格
              </label>
              <Select value={filterStyle} onValueChange={handleFilterStyleChange}>
                <SelectTrigger>
                  <SelectValue placeholder="选择风格" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={FILTER_STYLE.FLAT}>平铺</SelectItem>
                  <SelectItem value={FILTER_STYLE.SELECT}>下拉框</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="sm:flex sm:items-center">
              <label className="block font-medium mb-2 sm:mb-0 sm:w-1/3 sm:text-right sm:pr-4">
                代码块主题
              </label>
              <TpmCombobox
                className="w-full sm:w-full md:w-full"
                value={hljsTheme}
                setValue={setHljsTheme}
                options={hljsThemeOptions}
              />
            </div>
            <div className="sm:flex sm:items-center">
              <label className="block font-medium mb-2 sm:mb-0 sm:w-1/3 sm:text-right sm:pr-4">
                默认展开代码
              </label>
              <div className="w-full sm:w-full md:w-full">
                <Switch
                  checked={expandCode}
                  onCheckedChange={setExpandCode}
                />
              </div>
            </div>
            <div className="sm:flex sm:items-center">
              <label className="flex sm:justify-end items-center gap-1 font-medium mb-2 sm:mb-0 sm:w-1/3 sm:text-right sm:pr-4">
                水印文案
                <Popover>
                  <PopoverTrigger asChild>
                    <FaQuestionCircle className="cursor-help" />
                  </PopoverTrigger>
                  <PopoverContent
                    side="top"
                    align="center"
                    className="bg-primary border-primary text-primary-foreground text-sm rounded-lg shadow-lg max-w-xs"
                  >
                    <div>• 目前在课件/博客页面生效</div>
                    <div>• 留空表示无水印</div>
                  </PopoverContent>
                </Popover>
              </label>
              <TextareaWithLength
                className="max-h-20"
                name="水印文案"
                placeholder="请输入"
                maxLength={WATERMARK_TEXT_MAX_LENGTH}
                rows={WATERMARK_TEXT_MAX_ROWS} // somehow useless
                value={watermarkForLessonBlog}
                onChange={(e) => setWatermarkForLessonBlog(e.target.value)}
              />
            </div>
          </div>

          <Separator />

          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-[var(--tpm-primary)] flex items-center">
              <FaCode className="mr-2" />
              编辑器设置
            </h4>
            <div className="sm:flex sm:items-center">
              <label className="block font-medium mb-2 sm:mb-0 sm:w-1/3 sm:text-right sm:pr-4">
                主题
              </label>
              <TpmCombobox
                className="w-full sm:w-full md:w-full"
                value={lightEditorTheme}
                setValue={setLightEditorTheme}
                options={editorLightThemes}
              />
            </div>
            <div className="sm:flex sm:items-center">
              <label className="block font-medium mb-2 sm:mb-0 sm:w-1/3 sm:text-right sm:pr-4">
                字体大小
              </label>
              <Select value={editorFontSize} onValueChange={setEditorFontSize}>
                <SelectTrigger>
                  <SelectValue placeholder="请选择" />
                </SelectTrigger>
                <SelectContent>
                  {
                    fontSizeOptions.map((size) => {
                      return (
                        <SelectItem key={size} value={size}>{size}px</SelectItem>
                      );
                    })
                  }
                </SelectContent>
              </Select>
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
