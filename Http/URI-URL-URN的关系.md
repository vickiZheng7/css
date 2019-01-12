# URI、URL和URN

URL，常用于标识互联网资源，大部分都称之为网址(URL不但被用作网络地址，也被JDBC客户端用于定位数据库服务器)。通过网络“位置”进行标识，并指定了对资源操作或获取的方法。

通常URL和URI会被交替使用，以至于大家很难区分二者的关系。事实上，URL是URI最常见的形式，因此大部分情况下两个术语交替使用是没有异议的。URL仅是URI的子类，URL一定也是URI，但URI不见得都是URL。

URN也是URI的子类之一，是URI较为罕见的一种形式，通过名称(基于特定的名字空间)指定资源，无需指出资源位置和获取方式(资源无需基于互联网)，为资源提供持久的、位置无关的标识方式。

**简单理解，URI代表事物的标识，URL是通过地址查找事物的URI，URN是通过名称定义事物身份的URI。**

![URI、URL、URN关系图](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/URI_Euler_Diagram_no_lone_URIs.svg/320px-URI_Euler_Diagram_no_lone_URIs.svg.png)

> URL方案分类图。URL(定位符)和URN(名称)方案属于URI的子类，URI可以为URL或URN两者之一或同时是URL和URN。技术上讲，URL和URN属于资源ID；但是，人们往往无法将某种方案归类于两者中的某一个：所有的URI都可被作为名称看待，而某些方案同时体现了两者中的不同部分。

|名称|全称|语法|
|----|----|----|
|URI|统一资源标识符|协议方案名:[//[user[:password]@]host[:port]][/path][?query][#fragment]|
|URL|统一资源定位符|协议类型:[//[user[:password]@]host[:port]][/path]文件名[?query][#fragment]|
|URN|统一资源名称|urn:<命名空间>:\<NSS>|

### 例子：
**URI**: URL和URI的例子同样属于URI的例子之一。

**URL**: http://example.com:123/path/index.php??key=value&key2=value2#fragid1

**URN**: urn:isbn:0451450523

### 参考资料：
1. [URI统一资源标识符](https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E6%A0%87%E5%BF%97%E7%AC%A6#%E4%B8%8EURL%E5%92%8CURN%E7%9A%84%E5%85%B3%E7%B3%BB)
2. [URL统一资源定位符](https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%AE%9A%E4%BD%8D%E7%AC%A6)
3. [URI统一资源名称](https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%90%8D%E7%A7%B0#CITEREFRFC_21411997)
