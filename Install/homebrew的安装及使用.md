# homebrew的安装及使用

macOS下的软件包管理器。

## 安装

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

这是官网推荐的安装方式，但是本地安装的时候安装失败，因为无法找到下载地址，所以改用了vpn，成功。



## 使用

1. 安装软件：`brew install <软件名>`
2. 搜索软件：`brew search <软件名>`
3. 卸载软件：`brew uninstall <软件名>`
4. 更新所有软件：`brew update`
5. 更新具体软件：`brew upgrade <软件名>`
6. 显示已安装的软件：`brew list`
7. 查看软件信息：`brew info/home <软件名>`
8. 查看已安装的需要更新的软件：`brew outdated`
9. 显示包依赖：`brew reps`