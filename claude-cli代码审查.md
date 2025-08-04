[TOC]

## 引言

试用了Claude Code前几天推出的sub agents功能。

## 配置

再次执行

```bash
bun install -g @anthropic-ai/claude-code
```

升级Claude CLI。然后使用`/agents`命令，按提示操作即可。第一次使用`/agents`，我得到了`.claude\agents\js-code-auditor.md`。之后，直接使用自然语言指出要调用这个agent即可。我注意到，调用agent期间，是可以继续输入提示词执行命令的。

## 代码审查报告

代码审查已完成！这是一个非常全面的审查报告，指出了几个关键问题：

🚨 需要立即处理的问题

1. 安全漏洞：MarkdownRenderer.jsx中的XSS风险
2. 内存泄漏：GeoGebra组件清理不完整
3. 架构违规：部分课程配置未遵循标准模式

📈 主要建议

- 性能优化：实现GeoGebra资源的懒加载
- 类型安全：增强TypeScript使用
- 测试覆盖：添加组件测试和集成测试
- 可访问性：改善键盘导航和屏幕阅读器支持

🎯 优先级

1. 立即修复：XSS安全漏洞
2. 本周内：GeoGebra内存泄漏修复
3. 近期：性能优化和错误边界
4. 长期：测试覆盖率和可访问性改进

整体来说，这个项目架构设计优秀，代码结构清晰，只需要关注安全性和性能优化即可。

## 感想

最后它竟没改我代码？
