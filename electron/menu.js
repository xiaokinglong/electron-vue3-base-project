// 系统的menu的配置

const { Menu} = require('electron')

const template = [
  {
      label: "首页"
  },
  {
      label: "关于我",
      submenu: [
          {
              label: "国际新闻",
              click: () => {
                  // 点击事件
                  console.log(this)
              }
          },
      ]
  },
];
var list = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(list);

module.exports = Menu;