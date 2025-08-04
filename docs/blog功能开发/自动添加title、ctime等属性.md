用于Claude Cli。

## Prompt

大佬，你是一名专家前端工程师，精通前端工程化。请叫我hans7。请帮我在`src\scripts`下新增一个脚本：读取`docs\blogs`下的所有`.md`文件：

1. 若文件的文件头没有`title`属性，则向文件头添加`title`属性，值为文件名。若已有`title`属性，则不修改。
2. 若文件的文件头没有`ctime`属性，则向文件头添加`ctime`属性，值为文件的创建时间，以及`ctime_f`属性，值为文件的创建时间，格式为dayjs的`YYYY-MM-DD HH:mm:ss`。若已有`ctime`属性，则不修改。
3. 若文件的文件头没有`mtime`属性，则向文件头添加`mtime`属性，值为文件的最近修改时间，以及`mtime_f`属性，值为文件的最近修改时间，格式为dayjs的`YYYY-MM-DD HH:mm:ss`。若已有`mtime`属性，则看`mtime`与文件实际的最近修改时间的绝对差值，如果大于10秒，则根据文件实际的最近修改时间更新`mtime`和`mtime_f`，否则不更新。

要求如下：

1. 尽量与`src\scripts\geogebra-src-code-collect.js`的代码结构、技术栈一致
2. 参考`.claude\JS代码最佳实践.md`
3. 需求提到的时间的格式都为13位时间戳
4. 文件读取失败时跳过并记录错误。所有文件处理完毕后，输出处理成功、处理失败的文件个数，并输出前10个处理失败的文件名。最后输出总耗时。若没有要处理的文件，只输出“无需处理任何博客~”及总耗时。
5. 自动监听`docs\blogs`文件夹下`.md`文件的变化。监听代码与`src\scripts\geogebra-src-code-collect.js`类似
