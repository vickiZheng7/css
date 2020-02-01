# Symbol

Symbol是ES6新增的一种原始数据类型，表示独一无二的值，这个值通过Symbol函数生成。

Symbol的出现，解决了对象容易出现属性名冲突的问题（不能同时存在同名属性）。

## Symbol函数

注意，Symbol函数不能使用new命令，这是因为Symbol是一个类似于字符串数据类型的值，而不是一个对象。

```javascript
let s1 = Symbol()
let s2 = Symbol()

s1//Symbol()
s2//Symbol()
s1 == s2//false

let s3 = Symbol("foo")
let s4 = Symbol("bar")
let s5 = Symbol("bar")

s3//Symbol(foo)
s4//Symbol(bar)
s4 == s5//false
```

Symbol函数接受字符串作为参数，主要用于标记Symbol值，以便于区分。这个参数仅仅是对Symbol的一个描述，并不会影响结果，所以即使描述相同，所有Symbol仍然是独一无二的。

```javascript
let obj = {
    toString() {
        return 'abc'
    }
}
let s1 = Symbol(obj)
s1//Symbol(abc)
```

Symbol函数也接受对象作为参数，但是会调用对象的toString方法，将对象转为字符串。

## Symbol值

```javascript
let s1 = Symbol("foo")

"The symbol is" + s1//Uncaught TypeError: Cannot convert a Symbol value to a string
```

Symbol不能与任何类型的值进行运算，否则会报错。

```javascript
let s1 = Symbol("foo")

"The symbol is" + s1.toString()//"The symbol is Symbol(foo)"
"The symbol is" + String(s1)//"The symbol is Symbol(foo)"
```

我们可以把它转成字符串。

```javascript
let s1 = Symbol("foo")

Boolean(s1)//true
```

除此之外，还可以把它转成布尔值。

```javascript
let s1 = Symbol("foo")

Number(s1)//Uncaught TypeError: Cannot convert a Symbol value to a number
```

但是，它不能被转成数值。

## 作为属性名的Symbol值

Symbol值作为属性名，能保证不会出现同名属性，能有效避免属性被改写甚至覆盖。

```javascript
let symbolKey = Symbol("foo")

//第一种写法
let obj = {
    [symbolKey]: 12
}

//第二种写法
let obj = {}
obj[symbolKey] = 12

//第三种写法
let obj = {}
Object.definedProperty(obj, symbolKey, {value: 12})

//错误写法
obj.symbolKey = 12
```

为对象指定一个Symbol属性名时，可以使用方括号或definedProperty。而点语法定义属性的时候，后面总是字符串，不会读取Symbol值，因此不能使用点语法。同理，对象内部使用Symbol值定义属性的时候，也需要使用方括号。

因为Symbol不可能存在相同的值，除了用做属性名，还常用于定义常量，保证常量均不等。
