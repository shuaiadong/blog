const fs = require('fs');
const path = require('path');
const titleMap = require('./const_title');
var filePath = path.resolve('docs');
const ignore = [
    '.vuepress'
];

function syncDirPath(file = filePath) {
    return (fs.readdirSync(file) || []);
}

function sidebarHelp (dir = filePath) {

    return syncDirPath(dir)
    // 不是ignore 中的 不是文件 
    .filter(fPath => !fs.statSync(path.join(dir, fPath)).isFile() && !ignore.includes(fPath))
    .map((fPath, dirIndex) => {
        // 进来的都是文件夹
        let dirPage = `/page${dirIndex}/`;

        // 子目录
        let children = syncDirPath(path.join(dir, fPath)).map((subName, index) => {
            let name = subName.slice(0, -3);
            
            return [
                name === 'index' ? `/${fPath}/`:  `/${fPath}/${name}`, titleMap[name] ?titleMap[name] : name
            ]
        })


        return {
                title: `${fPath}`,   // 必要的
                path: `/${fPath}/`,      // 可选的, 应该是一个绝对路径
                // collapsable: false, // 可选的, 默认值是 true,
                // sidebarDepth: 1,    // 可选的, 默认值是 1
                children
          }
    });
}

sidebarHelp();
module.exports = {
    sidebarHelp
}