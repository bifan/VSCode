console.log('play with ;')

const example = require('../lib/example')

const success = (data) => console.log('data', data)

success(example.sync(false))

example.async(false, (error, data) => {success(data)})

example.promise(false).then(success)

/* 演示内容
1. 每一行都加上分号
  - 全选
  - 行尾列编辑(Alt+Shift+I)
  - 清除多加的分号
    · 正则查找-分号开头的行
    · 选中所有匹配内容(Ctrl+Shift+L)
    · 删除
2. 删除所有行末分号
  - 故意演示 - 只选中';' 会误选第一行行中间的分号
  - 再次演示 - 选中');' 再移动光标以正确删除行末分号
    · 还要忽略注释中的内容, 全部选中后使用Ctrl+D Ctrl+K 删除
*/