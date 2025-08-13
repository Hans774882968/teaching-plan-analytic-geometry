import {
  standardPageTypes,
  geogebraUsageDoc,
} from 'virtual:prompt-display';

export const tpPromptDefaultValueMp = {
  title: '指数函数的性质与图像',
  knowledgePoints: `
- 指数函数的定义
- 指数函数的定义域、值域、奇偶性、单调性
- 函数\`a^x\`和\`(1/a)^x\`的联系
- 利用指数函数的性质比较两个数的大小
- 利用指数函数的性质与图像估计指数函数与一次函数的交点
- 情境与问题：用函数表示有机体内的碳14含量与其死亡时间之间的关系
`.trim(),
  fileStructure: `
src/exponentialFunction/
├── ExpFunction.jsx       # 主组件
└── expFunctionConfig.jsx # 内容配置文件，被主组件调用
`.trim(),
  learningPartner: `
目标客户是15岁的高一学生Hans。其喜爱的卡通形象就是课件的学习伙伴——千反田爱瑠。
`.trim(),
  standardPageTypes,
  geogebraUsageDoc,
};
