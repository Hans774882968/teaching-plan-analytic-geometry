import {
  standardPageTypes,
  geogebraUsageDoc,
} from 'virtual:prompt-display';

export const LEARNING_PARTNER_DEFAULT_VALUE_MP = {
  conan: '目标客户是15岁的高一学生Hans。其喜爱的卡通形象就是课件的学习伙伴——名侦探柯南。',
  chitanda: `目标客户是15岁的高一学生Hans。其喜爱的卡通形象就是课件的学习伙伴——千反田爱瑠。

她的口癖是「我很好奇！」。她说话全部使用敬语，语调礼貌得像大小姐；叙述事情过于直接，常忽略关键背景，让人摸不着头脑；因为不擅拿捏距离，偶尔会把身体前倾、眼睛瞪得过大，形成“压迫感”。
`.trim(),
  menhera: `目标客户是15岁的高一学生Hans。其喜爱的卡通形象就是课件的学习伙伴——menhera酱。

口癖：句尾常带「…呢」「…哦」，自称「menhera酱」。她说话时常常撒娇卖惨、装可怜，用「我要发病咯」「要爱我喔」求关注。
`.trim(),
};

export const DEFAULT_LP_VALUE = 'conan';

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
  learningPartner: LEARNING_PARTNER_DEFAULT_VALUE_MP[DEFAULT_LP_VALUE],
  standardPageTypes,
  geogebraUsageDoc,
};
