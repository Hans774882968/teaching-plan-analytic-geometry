'use client';

import { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/component/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/component/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/component/ui/popover';
import NoData from '@/component/NoData';

export function TpmCombobox({
  options,
  setValue,
  value,
}) {
  const [open, setOpen] = useState(false);
  const widthClassName = 'w-50 sm:w-70 md:w-90';

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            'justify-between',
            widthClassName
          )}
        >
          {
            value
              ? options.find((t) => t.value === value)?.label
              : '请选择'
          }
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn(
        'p-0',
        widthClassName
      )}>
        <Command>
          <CommandInput placeholder="请搜索" className="h-9" />
          <CommandList>
            <CommandEmpty>
              <NoData />
            </CommandEmpty>
            <CommandGroup>
              {options.map((theme) => (
                <CommandItem
                  key={theme.value}
                  value={theme.label}
                  onSelect={() => {
                    setValue(theme.value);
                    setOpen(false);
                  }}
                >
                  {theme.label}
                  <Check
                    className={cn(
                      'ml-auto h-4 w-4',
                      value === theme.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
