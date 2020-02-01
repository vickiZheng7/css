##### jasmine测试

* Suites: 测试集，由很多的测试用例(Specs)构成。
  
  jasmine中使用全局函数describe来描述一个测试集，通常有两个参数`(字符串, 方法)`，字符串指的是测试集的名称，方法指的是具体的测试集代码。
* Specs：测试用例，用于测试应用的某个具体功能。

  jasmine中使用全局函数it来描述测试用例，和describe相似，它也有两个参数`(字符串, 方法)`，字符串指的是测试用例的名称，方法指的是具体的测试代码。
  
* Expectations: 断言，用于执行测试结果。

  jasmine在it函数中使用断言来执行测试结果，用expect方法来定义，参数是一个具体的值，这个值是测试结果的实际值。expect方法后面跟着匹配方法matcher，matcher中的值为期望值。

* Matchers：比较实际值和期望值，并返回结果布尔值。

  jasmine中matcher负责通知jasmine此次断言执行的结果。在matcher调用之前，可以使用not来改变匹配结果。
  
* Setup & TearDown：每个(全部)测试用例执行之前(后)需要都需要执行的部分，为了避免代码重复，jasmine提供了全局的beforeEach(beforeAll)和afterEach(afterAll)方法，在每次(全部)用例测试之前自动执行。

* 跳过测试集或测试用例：在测试集方法describe或测试用例方法it的方法名称上添加x前缀，即xdescribe和xit，即可跳过对应的测试集或测试用例。
