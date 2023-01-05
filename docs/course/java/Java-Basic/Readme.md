# Giới thiệu---------------------------------------[Mục lục](https://github.com/Zenfection/Java)

## 1. Java là gì ?

Java là một ngôn ngữ lập trình có từ `1995` bởi `Sun Microsystems`, hiện thuộc sở hữu của [Oracle Corporation](https://vi.wikipedia.org/wiki/Oracle_Corporation).

> 🤔 Vậy nó làm được gì, có ăn được không  ? 

==> `Java` có thể làm được mọi thứ như : `Web`, `App`, `Server`, `Database`... và đặt trưng của `Java` là `OOP` (*Object-oriented Programing*)

> 💭 Ngôn ngữ lập trình chỉ là công cụ, vậy nên có cái thiên về này có cái thiên về kia, và tư duy ý tưởng của chính bạn mới là cốt lõi.

Có một số bonus thêm cho bạn : 

> 💡`Java` được phát triển từ `C` và `C++` là chủ yếu
> 
> 💡 `Java` từng được Microsoft rất thích, nhưng vì vấn đề bản quyền, và Microsoft đã tạo ra `C#` có cấu trúc tương đướng với `Java`
> 
> 💡`Java` và `Javascript` hoàn toàn không giống nhau và có quan hệ nhau một tý gì.

---

## 2. Điểm mạnh của Java

- Được sử dụng nhiều nhất thế giới, khoảng `3 tỷ` thiết bị.
- Khái niệm **đơn giản** và **tương đối** dễ cho việc sử dụng
- Nó là **`Statically Typed`** tức là code không thể `build` khi đang có lỗi, với một kiến trúc chặt chẽ.
- Có thể chạy ở bất kỳ thiết bị nào, gọi là `WORA` (*Write once, run anywhere*).

> 💭 Java có thể chạy trên mọi hệ điều hành, nó làm đều đó bằng cách nào ? trong khi kiến trúc quản lí của mọi hệ điều hành là khác nhau ??? 

**==>** Tất cả nhờ vào `JVM` (*Java Vitural Machine*): tức là **Máy ảo Java**

Quá trình của Java như sau : 

![04-19-39-12-Ảnh chụp Màn hình 2020-08-04 lúc 19.39.02.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-16-03-57-04-19-39-12-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202020-08-04%20lu%CC%81c%2019.39.02.png)

> 1. Code **Java** của bạn sẽ **biên dịch** ra số **nhị phân**
> 2. **Mã trung gian** đó sẽ được cung cấp cho **Máy ảo Java** (JVM)
> 3. Sau đó **Máy ảo Java** xử lý xác định hệ điều hành và chuyển **Mã trung gian** sang **native code**

| [Bài 2. Cài đặt](https://github.com/Zenfection/Java/blob/master/Java%20Basic/2.CaiDat.md) 🔜 |
| -------------------------------------------------------------------------------------------- |
# Cài đặt---------------------------------------[Mục lục](https://github.com/Zenfection/Java)

## Cài đặt JDK ![icons8-java.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-23-26-icons8-java.png)

Để cài đặt Java, tôi sẽ hướng dẫn bạn cách thức dễ nhất, hãy truy cập link [sau đây](https://www.oracle.com/java/technologies/javase-downloads.html)

![Ảnh chụp Màn hình 2021-01-29 lúc 09.11.29.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-12-00-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-01-29%20lu%CC%81c%2009.11.29.png)

> 🦈 Như bạn đã thấy đây là trang chủ `Oracle`, bạn có thể thấy Java SE 15 là phiên bản mới nhất, hãy nhấn `JDK Download` và tải nó về 
> 
> ![Ảnh chụp Màn hình 2021-01-29 lúc 09.12.45.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-12-53-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-01-29%20lu%CC%81c%2009.12.45.png)
> 
> 🐍 Bạn hãy download file dựa trên hệ điều hành bạn đang xài :
> 
> - ![icons8-windows8.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-15-30-icons8-windows8.png) **Window** : Cài file có đuôi `.exe`
> - ![icons8-linux.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-15-18-icons8-linux.png) **Linux**  : Cài file có đuôi `.deb` nếu thuộc nhánh `Debian`, cài đuôi `.rpm` nếu thuộc nhánh `RedHat`
> - ![icons8-mac_os_logo.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-15-36-icons8-mac_os_logo.png) **MacOS** : Cài file có đuôi `.dmg`

Để kiểm tra cài đặt thành công, bạn hãy mở : 

- Mở **CMD**  nếu bạn xài **Window**
- Mở **Terminal** nếu bạn sử dụng **Linux** hoặc **MacOS**

Và hãy gõ : 

```bash
java --version
```

![Ảnh chụp Màn hình 2021-01-29 lúc 09.18.33.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-20-59-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-01-29%20lu%CC%81c%2009.18.33.png)

> 🔥 Nó hiện ra phiên bản `15.0.2` (*có thể phiên bản khác*) như trên thì bạn đã thành công rồi đấy.

---

## Cài đặt Công cụ lập trình ![Microsoft_Visual_Studio_Code.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-24-24-Microsoft_Visual_Studio_Code.png)

Nếu bạn muốn xài một `IDE` thì hãy sử dụng [Eclipse](https://www.eclipse.org/downloads/), nhưng ở đây chúng tôi không dùng thế, mà chúng tôi sử dụng `Vscode`

Bạn hãy học cách setup cho Vscode [tại đây](https://zenfection.github.io/Source/Vscode/), và nhớ chỉ cài `Java`

> Bạn chỉ cần đảm với với mình rằng : `JDK` bên trên đã cài thành công và `Java Extension Pack` đã cài đặt như sau :
> 
> ![Ảnh chụp Màn hình 2021-01-29 lúc 09.38.55.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-39-44-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-01-29%20lu%CC%81c%2009.38.55.png)

Hãy đến với bài code `Java` đầu tiên nào : 

- **B1** : Hãy tạo thư mục đại nào đó, ví dụ tên **Java** 

- **B2** : Quăng thư mục đó vào `Vscode`
  
  ![Ảnh chụp Màn hình 2021-01-29 lúc 09.41.48.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-41-56-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-01-29%20lu%CC%81c%2009.41.48.png)

- **B3** : Hãy nhấn `Ctrl + Shift + P` và gõ *Java Create Project* và làm như sau : 
  ![2021-01-29 09.43.09.gif](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-45-51-2021-01-29%2009.43.09.gif)

- **B4** : Mở file `.java` trong `src` và bạn đã thấy dòng code đầu tiên : 
  
  ![Ảnh chụp Màn hình 2021-01-29 lúc 09.47.56.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-48-31-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-01-29%20lu%CC%81c%2009.47.56.png)

Để chạy chương trình (**Run**) Java, bạn có thể chọn 3 chỗ sau đây : 

![Ảnh chụp Màn hình 2021-01-29 lúc 09.49.32.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-51-49-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-01-29%20lu%CC%81c%2009.49.32.png)

---

## Debug trong Java ![icons8-bug.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-53-43-icons8-bug.png)

Đến với Guide của mình, nói **KHÔNG** với **code mù**, chúng ta phải làm chủ code chứ không để code làm khó ta, nếu các bạn cứ viết mù rồi run xong sửa tới chừng nào nó chạy thì sai lầm, đó chỉ là những lỗi cú pháp cơ bản, sau này gặp những vấn đề lớn không biết code giải quyết.

> 🤔 Vậy `Debug` là gì ? Có ăn được không mà cần dữ thế ? 

Hiểu đơn giản thế này, `De` là Definition, `Bug` là nghĩa là bọ cũng nghĩa là lỗi.

> 🤔 Tại sao `Bug` là con bọ mà nghĩa là lỗi ? 
> 
> ==> Đúng như bạn nghĩ vào những đời đầu của máy tính, khi hoạt động có 1 con bọ đã lọt vào trong bộ máy và làm hoạt động sai, nên từ đó `Bug` là lỗi.

Các bước `Debug` như sau : 

- **B1** : Chuyển qua Tab `Debug` và đặt `Breakpoint` tại dòng bạn muốn dừng như sau :
  
  ![2021-01-29 10.03.30.gif](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-10-04-27-2021-01-29%2010.03.30.gif)
  
  > Mình đặt `Breakpoint` tại dòng **3**

- **B2** : Nhấn vào`Debug` trong các cách sau : 
  
  ![Bản sao Ảnh chụp Màn hình 2021-01-29 lúc 10.05.28.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-10-07-10-Ba%CC%89n%20sao%20A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-01-29%20lu%CC%81c%2010.05.28.png)

Như vậy bạn đã có thể sử dụng `Debug` , hãy xem dưới đây : 

![Ảnh chụp Màn hình 2021-01-29 lúc 10.09.12.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-10-12-57-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-01-29%20lu%CC%81c%2010.09.12.png)

> 💡 Như các bạn có thể thấy : 
> 
> - `Continue` : tiếp tục chạy chương trình bình thường 
> - `Step Over` : chạy qua hàm
> - `Step Into` : chạy vào hàm
> - `Reload` : load lại `Debug`
> - `Stop` : Dừng `Debug`
> 
> ===> Bạn chỉ cần nhớ `Step Over` và `Step Into`. Bạn hãy thử nhiều lần rồi bạn sẽ hiểu.
> 
> Góc bên trái là những giá trị của bạn, khi bạn chạy qua một lệnh nào đó, nó sẽ thay đổi và bạn hãy theo dõi ở đó.

**Bonus:**

Cài thêm Extension ![Microsoft.VisualStudio.Services.Icons - 01.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-10-19-13-Microsoft.VisualStudio.Services.Icons%20-%2001.png) [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode) để nhắc code sai ngay khi bạn gõ nhe !!! 

![Ảnh chụp Màn hình 2021-01-29 lúc 10.19.37.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-10-19-43-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-01-29%20lu%CC%81c%2010.19.37.png)

| 🔙  [Bài 1.Java OOP](https://github.com/Zenfection/Java/blob/master/Java%20OOP/1.OOP.md) | [Bài 3.Cú pháp](https://github.com/Zenfection/Java/blob/master/Java%20Basic/3.Cuphap.md) 🔜 |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
# Cú pháp---------------------------------------[Mục lục](https://github.com/Zenfection/Java)

Như ở bài trước ta đã tạo một project `Java`, với file `Demo.java` sau đây : 

```java
public class Demo {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

> 🔥 Bạn có thể thấy mỗi dòng code trong `Java` đều phải nằm trong `class`, như ví dụ trên là `class Demo`,  và có những quy tắc sau : 
> 
> - Tên `class` phải trùng với tên `file.java`
> - Tên `class` phải viết hoa chữ cái đầu, như `Demo`

<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-16-14-49-javaoop-2.png" alt="javaoop-2.png" width="410">

---

## Phương thức `main`

Đây là **phương thức** bắt buộc mà bạn thấy trong mọi chương trình `Java` : 

```java
public static void main(String[] args)
```

> 🧨 Bất kỳ code nào trong `main` đều được thực thi, bạn không cần phải hiểu `String[] args` nghĩa là gì, hay `static` là sao, bạn chỉ cần nhớ :
> 
> - `main` là hàm chính trong chương trình.
> - Tên `class` phải trùng với tên `file.java` của bạn.
> 
> ⚠️ Hãy luôn nhớ kết thúc mỗi lệnh phải có dấu `;` nhé

---

## Hàm in ra màn hình

- `System.out.print` : in ra màn hình 
- `System.out.println` : in ra màn hình + xuống dòng

```java
public class Demo {
    public static void main(String[] args) {
        System.out.println("In xuống dòng nè");
        System.out.print("Này là in không xuống dòng");
        System.out.print("Kết quả");
    }
}
```

<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-16-56-46-java-oop_4.png" title="" alt="java-oop_4.png" width="356">

> 🚀 Hãy bật `UTF-8` nếu bạn không gõ được **Tiếng Việt**, nhưng `Vscode` của mình không cần đâu !!!

---

## Chú thích

Chú thích là những dòng *comment* trong code sẽ không được thực thi, mà nó chỉ dành cho người dùng đọc và hiểu.

- `//` : chủ thích một dòng
- `/**/` : chú thích nhiều dòng

<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-16-24-19-javaoop-3.png" alt="javaoop-3.png" width="578">

---

## Compile file `.class`

Trong bài [Bài 1. Giới thiệu](https://github.com/Zenfection/Java/blob/master/Java%20Basic/1.GioiThieu.md), mình đã giới thiệu về sơ đồ sau : 

![30-16-03-57-04-19-39-12-Ảnh chụp Màn hình 2020-08-04 lúc 19.39.02.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-17-05-05-30-16-03-57-04-19-39-12-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202020-08-04%20lu%CC%81c%2019.39.02.png)

> 🤔 Như bạn thấy thì `Java Code` ==> `Mã trung gian` ==> `Native code` (*tức là nhị phân*). 
> 
> Vậy mã trung gian đó gọi là `bytecode`  có đuôi `.class`, khó hiểu đúng không, hãy làm thủ công từng bước nhé.

Cho file `Demo.java` như sau : 

```java
public class Demo {
    public static void main(String[] args) {
        System.out.println("Kiệt đẹp trai");
    }
}
```

- **B1** : Mở `CMD` hoặc `Terminal` và gõ `javac + đường dẫn đến file.java`
  
  ![2021-01-30 17.14.34.gif](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-17-16-10-2021-01-30%2017.14.34.gif)
  
  > Và nó sẽ tạo cho bạn một file `Demo.class` trùng tên với tên **file** của bạn : 
  > 
  > ![Ảnh chụp Màn hình 2021-01-30 lúc 17.16.52.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-17-17-04-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-01-30%20lu%CC%81c%2017.16.52.png)

- **B2** : gõ `java + đường dẫn file`
  
  ![2021-01-30 17.14.34.gif](https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-17-18-16-2021-01-30%2017.14.34.gif)
  
  > 🤪 Vậy là bạn đã chạy code một cách **thủ công**.

Bạn hiểu chứ, ta vậy thì ta chỉ cần lấy file `Demo.class` đem qua bất kỳ hệ điều hành nào chỉ cần chạy `java Demo` là chạy được.

| 🔙  [Bài 2. Cài đặt](https://github.com/Zenfection/Java/blob/master/Java%20Basic/2.CaiDat.md) | [Bài 4. Biến](https://github.com/Zenfection/Java/blob/master/Java%20Basic/4.Bien.md) 🔜 |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
# Biến---------------------------------------[Mục lục](https://github.com/Zenfection/Java)

**Variables** (*Biến*) : là vùng chứa giá trị của dữ liệu

Trong `Java` có các biến cơ bản sau : 

- `String` (chuỗi) : *chứa văn bản như "Kiệt đẹp trai"* 
- `int` & `long` (số nguyên) : *chứa số nguyên như 1,2,3...* 
- `float` & `double` (số thực) : *chứa số thực như 2.343...*
- `char` (Ký tự) : *chứa ký tự như a,b,c...*
- `boolean` : *chứa 2 trạng thái là* **true** *và* **false**

---

## 1 . Khởi tạo biến

Ta có thể tạo một biến bằng cú pháp sau  :  `kiểu dữ liệu = giá trị`

```java
int myNum = 3;
float myFloatNum = 5.32f; // cuối có f
double myDoubleNum = 5.23d; // cuối có d
char myLetter = 'K';
boolean myBool = true;
String myName = "Lê Tuấn Kiệt"; // String viết hoa

System.out.println("number = " + myNum);
System.out.println("floatNumber = " + myFloatNum);
System.out.println("DoubleNumber  = " + myDoubleNum);
System.out.println("name = " + myName);
System.out.println("Letter = " + myLetter);
System.out.println("bool = " + myBool);
    }
}
```

<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-18-33-11-java-oop_5.png" title="" alt="java-oop_5.png" width="373"> 

--- 

## 2. Quy tắc đặt biến

Bạn phải tuân thủ những quy tắc đặt biến sau đây : 

- **Không** bắt đầu bằng số
- **Không** có khoảng trắng (*sử dụng _ như bien_1*)
- **Không** chứa ký tự đặt biệt (*như #,+,-....*)
- **Không** trùng với `keyword` (*như if,for,class...*)

Những quy tắt ngầm (*Không buộc nhưng làm theo cho có quy chuẩn*) : 

- Viết tên hàm theo quy tắc `camelCase` : *nghĩa là chữ đầu viết thường, các chữ sau viết hoa chữ cái đầu*, như sau: 
  
  ```java
  void tenHam(){}
  int checkNguyenTo(){}
  char checkChuHoa(){}
  ```

- Viết hoa toàn bộ ghi đặt tên biến là hằng số và sử dụng `final`
  
  ```java
  final float PI = 3.14f;
  final int SOTUCHON = 123;
  ```

> Nếu bạn không muốn chỉnh sửa biến đó về sau, cho nó là hằng số và chỉ được phép *đọc*, thì hãy dùng `final`: 
> 
> ```java
> final int PI = 3.14;
> PI = 3; //hàm này sẽ lỗi vì PI không thể thay đổi
> ```

---

## 3. Hiển thị biến

Sử dụng `System.out.println` để hiển thị ra màn hình, và để kết hợp đoạn văn bản và biến hãy sử dụng dấu `+` như sau : 

```java
String firstName = "Lê";
String middleName = "Tuấn";
String lastName = "Kiệt";
System.out.println("Tên tôi là : " + firstName + " " + middleName + " " + lastName);
```

<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-20-34-03-java-oop_6.png" alt="java-oop_6.png" width="345">

> 🔥 Như bạn đã thấy tôi đã tự động thêm chuỗi `" "` để tạo khoảng cách cho tên của tôi.

Và bạn cũng có thể tính toán thẳng trong đó như sau : 

```java
int a = 3;
int b = 6;
System.out.println("a + b = " + (a + b));
// output : a + b = 9
```

> ⚠️ Với những phép toán bạn phải bọc nó lại bằng dấu `()` nha.

| 🔙  [Bài 3.Cú pháp](https://github.com/Zenfection/Java/blob/master/Java%20Basic/3.Cuphap.md) | [Bài 5. Kiểu dữ liệu](https://github.com/Zenfection/Java/blob/master/Java%20Basic/5.Kieudulieu.md) 🔜 |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
# Kiểu dữ liệu---------------------------------------[Mục lục](https://github.com/Zenfection/Java)

Như bạn đã biết thì các biến sẽ được định kiểu dữ liệu như `int`, `float`, `char` ..., có 2 nhóm **kiễu dữ liệu**  sau : 

- `Primary data types` (*kiểu dữ liệu nguyên thuỷ*) : gồm `byte`, `short`, `int`, `long`, `float`, `double`,`boolean`,`char`...
- `Non-Primitive data types` (*kiểu dữ liệu không nguyên thuỷ*) : gồm `String`, `Arrays`, `Classes`...

## ☠️ Kiểu nguyên thuỷ

Là kiểu dữ liệu được định sẵn kích thước, và không có phương thức **bổ sung**

| Kiểu dữ liệu | Kích thước    | Mô tả                                        |
| ------------ | ------------- | -------------------------------------------- |
| byte         | **1** *bytes* | chứa từ `[-128,127]`                         |
| short        | **2** *bytes* | chứa từ `[-32,768,32,767]`                   |
| int          | **4** *bytes* | chứa từ `[-2 tỷ, 2 tỷ]`                      |
| long         | **8** *bytes* | chứa từ `[-9 tỷ tỷ, 9 tỷ tỷ]`                |
| float        | **4** *bytes* | chứa số thực, tối đa **7** chữ số thập phân  |
| double       | **8** *bytes* | chứa số thực, tối đa **15** chữ số thập phân |
| boolean      | **1** bit     | Chứa giá trị `true` hoặc `false`             |
| char         | **2** *bytes* | Chứa 1 ký tự `ASCII`                         |

> 💡 `1 Byte` = `8bit` và `1MB = 1024B` nhé các bạn 
> 
> ⚠️ `B` là viết tắt của `Byte`, còn `b` là viết tắt của `bit`, vậy nên `4GB` với `4Gb` khác nhau hoàn toàn nhé.

> 🚀 Bên trên có khá nhiều kiểu, nhưng bạn chỉ cần nhớ `int`, `boolean`, `char`, `double`  ==> vì những thứ này hay dùng nhất

Nên sử dụng số thực là `float` hay `double` : 

> 💡 Tuỳ vào mục đích sử dụng của bạn, nếu bạn muốn độ chính xác cao tuyệt đối hãy sử dụng `double` , nếu bạn không cần độ chính xác quá tỉ mỉ như *điểm số sinh viên* thì sử dụng `float`.

> 💡 Bạn có thể sử dụng `e` để biểu thị cho luỹ thừa của 10
> 
> ```java
> float f1 = 35e3f;
> double d1 = 12E4d;
> System.out.println(f1);
> System.out.println(d1);
> /*35000.0
>   120000.0 */
> ```

## 🧚 Kiểu dữ liệu không nguyên thuỷ

Được gọi là kiểu **tham chiếu** vì chúng **tham chiếu** đến các `Objects` (*đối tượng*).

>  Thật ra `String` là một kiểu dữ liệu không nguyên thuỷ, bởi vì nó như một `Object` (*đối tượng*), và nó có thể chứa nhiều kiểu dữ liệu.

**Sử khác nhau giữa nguyên thuỷ và không nguyên thuỷ**:

|            | Nguyên thuỷ                                     | Không Nguyên thuỷ                              |
| ---------- | ----------------------------------------------- | ---------------------------------------------- |
| Khởi tạo   | được xác định trước trong `Java`                | được tạo bởi lập trình viên                    |
| Giá trị    | luôn luôn có giá trị                            | có thể không có giá trị gọi là `null`          |
| Cú pháp    | bắt đầu bằng chữ **thường** : `int`, `float`... | bắt đầu bằng chữ **hoa** : `String`,`Array`... |
| Kích thước | Phụ thuộc vào **kiểu dữ liệu**                  | Có cùng kích thước với nhau                    |

> ⚠️ Đó là lý do bạn khai báo `String` phải viết hoa chữ cái đầu đấy.

| 🔙  [Bài 4. Biến](https://github.com/Zenfection/Java/blob/master/Java%20Basic/4.Bien.md) | [Bài 6. Toán tử](https://github.com/Zenfection/Java/blob/master/Java%20Basic/6.ToanTu.md) 🔜 |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
# Toán tử---------------------------------------[Mục lục](https://github.com/Zenfection/Java)

Được sử dụng để thực hiện trên phép tính của các biến với nhau, có **5** nhóm sau : 

- `Arithmetic` : *Toán tử số học*
- `Assignment` : *Toán tử gán*
- `Comparsion` : *Toán tử so sánh*
- `Logical` : *Toán tử logic*
- `Bitwise` : *Toán tử thao tác bit*

---

## 1. Toán tử số học (`Arithmetic`)

Có các loại toán tử sau đây :

| Toán tử | Miêu tả          | Ví dụ      |
| ------- | ---------------- | ---------- |
| +       | Phép cộng        | 2 + 3 ⇨ 5  |
| -       | Phép trừ         | 2 - 3 ⇨ -1 |
| *       | Phép nhân        | 2 * 3 ⇨ 6  |
| /       | Phép chia        | 2 / 3 ⇨ 0  |
| %       | Phép chia lấy dư | 2 % 3 ⇨ 2  |
| ++      | tăng thêm 1      | 2++ ⇨ 3    |
| --      | giảm lại 1       | 2-- ⇨ 1    |

>  🤔 Bạn chỉ cần nhớ toán tử số học là `cộng, trừ, nhân, chia`

---

## 2. Toán tử gán (`Assignment`)

Có các loại toán tử sau : 

| Toán tử                    | Miêu tả                                                                                                | Ví dụ (*a = 2*)                                                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| =                          | phép gán                                                                                               | a = 2                                                                                                                                 |
| +=<br>-=<br>*=<br>/=<br>%= | phép cộng và gán<br>phép trừ và gán<br>phép nhân và gán<br>phép chia và gán<br>phép chia lấy dư vá gán | a **+=** 3  ⇨ **a = 5**<br>a -= 3   ⇨ **a = -1**<br>a ***=** 3  ⇨ **a = 6**<br>a **/=** 3   ⇨ **a = 0**<br>a **%=** 3 ⇨ **a = 2**<br> |

---

## 3. Toán tử so sánh (`Comparision`)

Có các loại toán tử sau : 

| Toán tử  | Miêu tả                                | Ví dụ (*a = 2*)          |
| -------- | -------------------------------------- | ------------------------ |
| ==<br>!= | bằng<br>không bằng                     | a **==** 2<br>a **!=** 3 |
| ><br><   | lớn hơn<br>nhỏ hơn                     | a **>** 1<br>a **<** 3   |
| >=<br><= | lớn hơn hoặc bằng<br>nhỏ hơn hoặc bằng | a **>=** 2<br>a **<=** 2 |

---

## 4.Toán tử logic (`Logical`)

Có các loại toán tử sau : 

| Toán tử | Miêu tả                                                                      | Ví dụ (*a = 2*)               |
| ------- | ---------------------------------------------------------------------------- | ----------------------------- |
| &&      | Phép **và** : *nếu cả hai true thì true* <br>*một trong hai false thì false* | a **>** 1 **&&** a **==** 2   |
| \|\|    | Phép **hoặc** : *nếu cả 2 false thì false*<br>*một trong hai true thì true*  | a **<** 1 **\|\|** a **==** 2 |
| !       | Phép **phủ** : *true thành false* và *false thành true*                      | **!a**                        |

> 🔥 Phép phủ tức là ngược lại : `true` ⇨ `false` và `false` ⇨ `true`

---

## 5. Toán tử Bit (`Bitwise`)

Đây là thao tác trên `Bit`, các bạn không cần phải hiểu nó quá kỹ, biết là có là được.

| Toán tử | Miêu tả                     | Ví dụ (*A = 2 và B = 3*) |
| ------- | --------------------------- | ------------------------ |
| &       | Phép **And bit**            | A **&** B ⇨ 2            |
| !       | Phép **OR bit**             | A **\|** B ⇨ 3           |
| ^       | Phép **XOR bit**            | A **^** B ⇨ 1            |
| ~       | Phép **phủ bit**            | ~B  ⇨ -4                 |
| <<      | Phép **dịch trái**          | A **<<** 1 ⇨ 4           |
| >>      | Phép **dịch phải**          | A **>>** 1 ⇨ 1           |
| >>>     | Phép **dịch phải với Zero** | A **>>>** 1 ⇨ 1          |

> 🔥 Nếu bạn muốn tìm hiểu, hãy xem [tại đây](https://openplanning.net/12281/cac-toan-tu-bitwise)
> 
> 💡 Bạn không cần phải hiểu quá nhiều về vấn đề này

| 🔙  [Bài 5. Kiểu dữ liệu](https://github.com/Zenfection/Java/blob/master/Java%20Basic/5.Kieudulieu.md) | [Bài 7. Điều kiện](https://github.com/Zenfection/Java/blob/master/Java%20Basic/7.Dieukien.md) 🔜 |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
# Điều kiện---------------------------------------[Mục lục](https://github.com/Zenfection/Java)

Trong các ngôn ngữ thì luôn luôn có cái này, mình sẽ không nhiều mà đi thẳng đến chi tiết

Có **2** loại câu điều kiện :

- `if..else` : xem [tại đây](https://www.youtube.com/watch?v=h3fgxLlmnUQ)
- `switch..case` : xem [tại đây](https://www.youtube.com/watch?v=IgNvSHjWxfY)

---

## 1. Lệnh if..else

Nó cũng giống như các ngôn ngữ khác thôi, `if` là nếu, `else if` là còn nếu, `else` là các trường hợp còn lại, cụ thể sau đây : 

- Sử dụng `if` để xác định điều kiện **đúng** để thực thi
- Sử dụng `else if` để xác định các điều **đúng** tiếp theo kiểm tra, sau khi `if` sai
- Sử dụng `else` để xác định các điều kiện **sai**

```java
int date = 2; 
if(date == 2){
    System.out.println("Date của bạn là 2");
}
else if(date == 3){
    System.out.println("Date của bạn là thứ 3");
}
else{
    System.out.println("Date của bạn khác mọi cái trên");
}
// output : Date của bạn là 2
```

> 💡 Có 1 loại kiểu rút gọn của `if..else` là **toán tử 3 ngôi** (*có thể tham khảo*), có cú pháp :
> 
> > Biến `=` (điều kiện ) `?` Thực thi  **true** `:` Thực thi **false** `;`
> 
> **Dạng** `if..else` : 
> 
> ```java
> int date = 2;
> if(date == 2)
>     System.out.println("Date là thứ 2");
> else
>     System.out.println("Date không phải là thứ 2")
> // Output : Date là thứ 2
> ```
> 
> **Dạng** `toán tử 3 ngôi` : 
> 
> ```java
> int date = 2;
> String result = (date == 2) ? "Date là thứ 2" : "Date là thứ 2";
> System.out.println(result);
> // Output : Date là thứ 2
> ```

---

## 2. Lệnh switch..case

Nó cũng tương đương với `if..else`, nhưng nếu bạn đặt điều kiện chỉ so sánh với **giá trị nguyên** thì đây sẽ thích hợp cho bạn như sau;

```java
int date = 3;
switch(date){
    case 1 : "Date là 1"; break;
    case 2 : "Date là 2"; break;
    case 3 : "Date là 3"; break;
    case 4 : "Date là 4"; break;
default:
    "Các Date còn lại";
    break;
}
// output : Date là 3
```

> 🚀 Như bạn có thể thấy thì `switch..case` có những lưu ý sau :
> 
> - Các `case` là trường hợp của biến `date` và chỉ chấp nhận **số nguyên**
> - Cuối `case` phải có `break` để thoát vòng điều kiện
> - `default` tương ứng với `else` là các trường hợp còn lại
> - Có thể gộp nhiều `case` lại, như `case 1,2,3:`

| 🔙  [Bài 6. Toán tử](https://github.com/Zenfection/Java/blob/master/Java%20Basic/6.ToanTu.md) | [Bài 8. Vòng lặp](https://github.com/Zenfection/Java/blob/master/Java%20Basic/8.Vonglap.md) 🔜 |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
# Vòng lặp---------------------------------------[Mục lục](https://github.com/Zenfection/Java)

Cũng như bài [Điều kiện](https://github.com/Zenfection/Java/blob/master/Java%20Basic/7.Dieukien.md), thì đây là một vấn đề có trong mọi ngôn ngữ lập trình.

Dùng để làm một vấn đề gì đó lặp đi lặp lại, có các kiểu vòng lặp sau :

- `while`
- `do..while`
- `for`
- `for..Each`

---

## 1. Vòng lặp `while`

Như mọi ngôn ngữ đây là vòng lặp lại lặp lại miễn điều kiện là `true`, sẽ thoát khi điều kiện là `false`

**Ví dụ** : 

```java
int i = 0;
while (i < 4){
    System.out.print(i + " ");
    i++; //có này để dần dẫn cho điều kiện thành false
}
// output : 0 1 2 3
```

---

## 2. Vòng lặp `do..while`

Đây là một biến thể của vòng lặp `while`, sẽ thực hiện trước một lần với lệnh `do` và sau đó kiểm tra điều kiện.

**Ví dụ**: 

```java
int i = 0; 
do{
    System.out.print(i + " ");
}while(i < 0)
// output : 0
```

---

## 3. Vòng lặp `for`

Nó là một dạng vòng lặp ngắn gọn nhất,bao gồm 3 phần chính :

- `Initaliztion` : *khởi tạo vòng lặp*
- `Test Statement` : *điều kiện kiểm tra*
- `Iteration Statement` : *bước nhảy của vòng lặp*

**Ví dụ** : 

```java
int [] myArray = {4,5,7,2};
for (int i = 0 ; i < array.length; i++){
    System.out.print(i + " ");
}
// output : 4 5 7 2
```

---

## 4. Vòng lặp `for..Each`

Được sử dụng riêng để lặp ra các phần tử trong 1 `Array`, (*có thể dùng `for` như bình thường*)

**Ví dụ** :

```java
int[] myArray = {5,3,2,6};
for(int index : myArray){
    System.out.print(index + " ");
}
// output : 5 3 2 6
```

---

## 5. Điều khiển vòng lặp

Vậy ta tự hỏi thế này :

> 🤔 Nếu trong một `array` có **10** phần tử, ta `for` từ **0 tới 10**, và ta muốn nó dừng tại 5 thì thế nào ?

Đơn giản là ta có thể dùng `break` để thoát khỏi vòng lặp : 

```java
int[] array = {5,3,8,6};
for(int i : array){
    if(i == 8){
        break;
    }
    System.out.print(i + " ");
}
//output : 5 3
```

> 🤔 Nếu trong một `array` có **10** phần tử, ta `for` từ **0 tới 10**, và muốn tới 5 thì bỏ qua nó thì thể nào ?

Đơn giản là ta có thể dùng `continue` để bỏ qua trường hợp đó :

```java
int[] array = {5,3,8,6};
for(int i : array){
    if(i == 8){
        continue;
    }
    System.out.print(i + " ");
}
//output : 5 3 6
```

## 6. Gắn nhãn vòng lặp

Ta sẽ đúng tới `Label` để điều khiển vòng lặp một cách tốt nhất :

```java
int[] array = {5,3,8,6};
loop:
for(int i in array){
    if(i == 8){
        continue loop;
    }
    System.out.print(i + " ");
}
//output : 5 3 6
```

>  🚀 Tức là nó sẽ đánh dấu vòng lặp đó là `loop`, còn bạn dùng `continue` và `break` lên chính vòng lặp đó.

| 🔙  [Bài 7. Điều kiện](https://github.com/Zenfection/Java/blob/master/Java%20Basic/7.Dieukien.md) | [Bài 9. Chuỗi](https://github.com/Zenfection/Java/blob/master/Java%20Basic/9.Chuoi.md) 🔜 |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
# Chuỗi------------------------------------------[Mục lục](https://github.com/Zenfection/Java)

`String` (*chuỗi*) : sử dụng để lưu trữ văn bản, như sau : 

```java
String myName = "Lê Tuấn Kiệt";
System.out.println("Tôi tên là " + myName);
// output : Tôi tên là Lê Tuấn Kiệt
```

Các **phương thức** (*Methods*) phổ biến của `String` : 

- `length()` : *độ dài chuỗi*
- `toUpperCase()` và `toLowerCase()` : *chuyển sang* **in thường** *và* **IN HOA**
- `indexOf()` : *trả về vị trí đầu tiên của chuỗi tìm được*
- `concat()` : *nối chuỗi lại với nhau*

---

## 1. Các phướng thức thông dụng trong chuỗi

- ![Science.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-18-34-Science.png) **Độ dài chuỗi (`length`)** : 

Sử dụng `Methods` (*phương thức*) `length()` để kiểm tra độ dài của chuỗi :

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-08-13-Specialization.png"> Cụ thể</b></summary>

```java
String myName = "Lê Tuấn Kiệt";
System.out.println("Độ dài tên của tôi là " + myName.length());
// output : Độ dài tên của tôi là 12
```

> 💡 Để sử dụng `method` thì các bạn `.` phía sau một `Object` là được nha, ví dụ như `myName.length()`
> 
> - `myName` là `Object`
> - `length()` là phương thức

</details>

---

- ![Science.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-18-34-Science.png) **Chuyển đổi chuỗi (`convert String`)** , bao gồm :
  - `toUpperCase()` : chuyển thành in HOA
  - `toLowerCase()` : chuyển thành in thường

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-08-13-Specialization.png"> Cụ thể</b></summary>

```java
String myName = "LÊ TUẤN KIỆT";
String myNickName = "zenfection";
System.out.println(myName.toLowerCase()); // Chuyển in thường
System.out.println(myName.toUpperCase()); // chuyển in hoa
/* output : 
lê tuấn kiệt
ZENFECTION   */
```

</details>

---

**Tìm chữ cái đầu tiên trong chuỗi**, sử dụng  `indexOf()` để trả về vị trí đầu tiên trong chuỗi, bao gồm cả *khoảng trắng*

> ⚠️ Chuỗi ký tự đầu tiên bắt đầu từ `0` nhé.

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-08-13-Specialization.png"> Cụ thể</b></summary>

```java
String myName = "Tuấn Kiệt";
System.out.println("chữ Kiệt ở vị trí thứ " + myName.indexOf("Kiệt"));
// output : chữ Tuấn ở vị trí số 5
```

| Ký tự  | T   | u   | ấ   | n   | " " | K   | i   | ệ   | t   |
| ------ | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Vị trí | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   |

> 💡 Như bạn đã thấy thì nó sẽ trả về vị trí của chữ `K` trong chuỗi `Kiệt`.

> ⚠️ Trường hợp lưu ý : 
> 
> - Nếu có 2 chữ `Kiệt`, nó vẫn trả về vị trí của chữ `Kiệt` đầu tiên.
> - Nếu chữ `Kiệt` không tồn tại nó sẽ trả về `-1`.

</details>

---

![Science.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-18-34-Science.png) **Nối chuỗi với nhau** bằng cách sử dụng dấu `+` như các bài trước :

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-08-13-Specialization.png"> Cụ thể</b></summary>

```java
String myName = "Tuấn Kiệt";
String firstName = "Lê";
System.out.println("Tên của tôi là : " + fisrtName + " " + myName);
// output: Tên của tôi là Lê Tuấn Kiệt
```

</details>

>  💡 Bạn cũng có thể sử dụng phương thức `concat()` để nối 2 chuỗi : 

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-08-13-Specialization.png"> Cụ thể</b></summary>

```java
String myName = "Tuấn Kiệt";
String firstName = "Lê";
System.out.println("Tên của tôi là : " + firstName.concat(" ").concat(myName));
//output : Tên của tôi là Lê Tuấn Kiệt
```

> ⚠️ Có thể sử dụng nhiều phương thức `concat()` để nối nhiều chuỗi với nhau : 

</details>

---

⚠️ **Lưu ý đặc biệt** : 

Nếu chúng ta muốn viết những ký tự đặc biệt được quy định bởi `Java` như `""`

<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/31-12-56-52-java-oop_7.png" alt="java-oop_7.png" width="440">

> ⚠️ Đó là một một lỗi bởi vì máy không hiểu đã mặc định `" "` là ký tự đặc biệt.
> 
> <details>
> <summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-08-13-Specialization.png"> Giải quyết</b></summary>
> 
> Sử dụng dấu `\` trước **ký tự đặc biệt** :
> 
> ```java
> String myName = "Tôi tên là \"Lê Tuấn Kiệt\"";
> System.out.println(myName);
> //output : Tôi tên là "Lê Tuấn Kiệt"
> ```
> 
> </details>

Chúng ta quy ước sẽ sử dụng nhé : 

| Ký tự đặc biệt | cách viết |
| -------------- | --------- |
| ' '            | `\'\'`    |
| " "            | `\"\"`    |
| \              | `\\`      |

💡 Chúng ta có các kiểu ký tự đặc biệt mà bạn **cần phải biết** : 

| Ký tự đặc biệt | Mô tả           |
| -------------- | --------------- |
| \n             | New Line        |
| \r             | Carriage return |
| \t             | Tab             |
| \b             | Backspace       |
| \f             | Form Feed       |

> <details>
> <summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-08-13-Specialization.png"> Giải thích cụ thể từng cái : </b></summary>
> 
> - `\n` và `\r` có chung chức năng xuống dòng (*khuyến kích dùng `\n`*), nhưng chúng có tý khác nhau, xem [tại đây](https://www.it-swarm-vi.com/vi/java/su-khac-biet-giua-cac-ky-tu-char-n-va-r-trong-java-la-gi/942391502/)
>   
>   ```java
>   System.out.println("Tôi tên là\nLê Tuấn Kiệt");
>   /* Output : Tôi tên là
>   Lê Tuấn Kiệt */
>   ```
> 
> - `\t` để cách khoảng lớn : 
>   
>   ```java
>   System.out.println("Sử dụng tab để\t cách khoảng lớn");
>   //output : Sử dụng tab để   cách khoảng lớn
>   ```
> 
> - `\b` đặt ở đầu từ và cuối từ, để cho hiểu đó là một từ, như `\bKiet\b` là `Kiet`
>   
>   ```java
>   System.out.println("\bLê \b \b Tuấn \b \b Kiệt \b");
>   //output : Lê Tuấn Kiệt
>   ```
> 
> - `\f` xuống dòng nhưng không thụt vô đầu dòng : 
> 
> - ```java
>   System.out.println("Tôi tên là \fLê Tuấn Kiệt");
>   /* Tôi tên là 
>                Lê Tuấn Kiệt */
>   ```
> 
> </details>

---

## 2. Tổng hợp các phương thức trong `String`

| Phương thức                                          | Mô tả                                                                                                                         | Trả về       | Ví dụ (`Name`=`Hello`)                                                                                                                                                      | Lưu ý                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| charAt(*p*)<br>                                      | trả về **chữ cái** được chỉ định vị trí                                                                                       | char         | `Name.charAt[1]` <br>⇨ e                                                                                                                                                    |                                                                                                                                                                                                                                                                               |
| codePointAt(*p*)<br>codePointBefore(*p*)             | trả về số bảng mã `Unicode`                                                                                                   | int          | `Name.codePointAt(0)` <br>⇨ 72<br>`Name.codePointBefore(1)` <br>⇨ 72<br>                                                                                                    | ⚠️ `codePointAt` bắt đầu bằng *0*<br>⚠️ `codePointBefore` bắt đầu bằng *1*                                                                                                                                                                                                    |
| codePointCount(*a,b*)                                | trả về số lượng `Unicode` từ *a tới b*                                                                                        | int          | `Name.codePointCount(0,3)` <br>⇨ 3                                                                                                                                          |                                                                                                                                                                                                                                                                               |
| compareTo(x)<br>compareToIgnoreCase(x)               | So sánh  2 chuỗi                                                                                                              | int          | `Name.compareTo("Hello")` <br>⇨ 0<br>`Name.compareToIgnoreCase("HELLO")` <br>⇨ 0                                                                                            | ⚠️ Nếu đúng sẽ trả về `0`, sai sẽ trả về khác `0`<br>⚠️ `compareToIgnoreCase` không phân biệt *hoa thường*                                                                                                                                                                    |
| equal(x)<br>equalIgnoreCase(x)                       | So sánh 2 chuỗi                                                                                                               | boolean      | `Name.equal("Hello")` <br>⇨ true<br>`Name.equalIgnoreCase("HELLO")` <br>⇨ true                                                                                              | ⚠️ Nếu đúng sẽ trả về `true`, sai sẽ trả về khác `false`<br>⚠️`equalIgnoreCase` không phân biệt *hoa thường*                                                                                                                                                                  |
| matches(x)                                           | tìm kiếm theo biểu thức chính quy                                                                                             | boolean      | `Name.matches("He(.*)")`<br>⇨ true                                                                                                                                          | 💡 Tìm hiểu biểu thức chính quy [tại đây](https://www.google.com/search?q=regular+expression&oq=regular+expression&aqs=chrome..69i57j69i60&sourceid=chrome&ie=UTF-8)<br>💡 Học hàm `regionMatches()` [tại đây](https://vietjack.com/java/string_regionmatches_trong_java.jsp) |
| concat(x)                                            | nối 2 chuỗi                                                                                                                   | String       | `Name.concat("World")` <br>⇨ Hello World                                                                                                                                    |                                                                                                                                                                                                                                                                               |
| toLowerCase()<br>toUpperCase()                       | Chuyển chuỗi **in thường**<br>Chuyển chuỗi **IN HOA**                                                                         | String       | `Name.toLowerCase()`<br>⇨ hello<br>`Name.toUpperCase()`<br>⇨ HELLO                                                                                                          |                                                                                                                                                                                                                                                                               |
| contains(x)<br>contentEquals(x)                      | kiểm tra chuỗi có chứa ký tự **x**<br>kiểm tra chuỗi chứa *chuỗi* **x**                                                       | boolean      | `Name.contains("el")`<br>⇨ true<br><br>`Name.contentEquals("el")`<br> ⇨ false<br>`Name.contentEquals("Hello")`<br> ⇨ true                                                   |                                                                                                                                                                                                                                                                               |
| startsWith(x)<br>endsWith(x)                         | kiểm rta chuỗi **bắt đầu** bằng chuỗi **x**<br>kiểm tra chuỗi bắt đầu bằng chuỗi **x**                                        | boolean      | `Name.startsWith("He")`<br> ⇨ true<br>`Name.startsWith("llo")`<br> ⇨ false<br><br>`Name.endsWith("He")`<br> ⇨ false<br>`Name.endsWith("llo")`<br> ⇨ true                    |                                                                                                                                                                                                                                                                               |
| hashCode(x)                                          | trả về **bảng băm** của chuỗi **x**                                                                                           | int          | `Name.hashCode()`<br> ⇨ 69609650                                                                                                                                            | 💡 Tìm hiểu bảng băm [tại đây](https://vimentor.com/vi/lesson/ba-ng-bam-hash-table)                                                                                                                                                                                           |
| indexOf(x)<br>lastIndexOf(x)                         | trả về vị trí ký tự xuất hiện **đầu tiên** trong chuỗi **x**<br>trả về vị trí ký tự xuất hiện **cuồi cùng** trong chuỗi **x** | int          | `name.indexOf("l")`<br> ⇨ 2 <br>`name.lastIndexOf("l")`<br>  ⇨ 3                                                                                                            |                                                                                                                                                                                                                                                                               |
| isEmpty()<br>isBlank()                               | kiểm tra chuỗi rỗng                                                                                                           | boolean      | `Name.isEmpty()`<br> ⇨ false<br>`"".isEmpty`<br> ⇨ true<br><br>`"   ".isBlank()`<br> ⇨ true                                                                                 | ⚠️ `isBlank` kiểm tra chuỗi rỗng không tính *khoảng trắng*                                                                                                                                                                                                                    |
| length(x)                                            | trả về độ dài chuỗi                                                                                                           | int          | `Name.length()`<br> ⇨ 5                                                                                                                                                     |                                                                                                                                                                                                                                                                               |
| replace(x,y)<br>replaceFirst(x,y)<br>replaceAll(x,y) | trả về chuỗi mới  **x** thay bằng **y**                                                                                       | String       | `Name.replace('l','p')`<br> ⇨ Heppo<br>`Name.replaceFirst("l","paa")` <br> ⇨ Heppalo<br>`Name.replaceAll("llo","ppa")`<br> ⇨ Heppa                                          | ⚠️ Đối số của`replace` là ký tự.<br>⚠️ Đối số của `replaceFirst` và `replaceAll` là chuỗi<br>⚠️  `replaceFirst` chỉ thay đổi chuỗi **x** đầu tiên.                                                                                                                            |
| split(x)                                             | Chuyển **chuỗi** thành **mảng chuỗi** bằng nhận biết x                                                                        | String[]     | `String [] ArrayName = Name.split("")`<br> ⇨ ArrayName ={"H","e","l","l","o"}                                                                                               | 💡 Bạn có thể thay thế chuỗi **x**, làm điểm tách chuỗi                                                                                                                                                                                                                       |
| subSequence(a,b)<br>                                 | Trả về chuỗi ký tự mới lấy từ chuỗi gốc vị trí *a tới b*                                                                      | CharSequence | `CharSequence word`<br>`= Name.subSequence(0,2)`<br> ⇨ word = "He"                                                                                                          | 🤔 Sự khác biệt giữa `String` và `CharSquence` [tại đây](https://www.it-swarm-vi.com/vi/java/su-khac-biet-chinh-xac-giua-charsequence-va-string-trong-java/1068529714/#:~:text=CharSequence%20là%20một%20chuỗi%20các,trình%20tự%20char%20khác%20nhau.)                        |
| subString(a,b)                                       | Trả về chuỗi mới lấy từ chuỗi gốc vị trí *a tới b*                                                                            | String       | `String word`<br>`= Name.subString(0,2)`<br>⇨ word = "He"                                                                                                                   | 🤔 Sự khác biệt giữa `String` và `CharSquence` [tại đây](https://www.it-swarm-vi.com/vi/java/su-khac-biet-chinh-xac-giua-charsequence-va-string-trong-java/1068529714/#:~:text=CharSequence%20là%20một%20chuỗi%20các,trình%20tự%20char%20khác%20nhau.)                        |
| trim()                                               | xoá *khoảng trắng* trong chuỗi                                                                                                | String       | `"  Zen   ".trim()`<br>⇨ "Zen"                                                                                                                                              |                                                                                                                                                                                                                                                                               |
| toCharArray()                                        | Chuyển chuỗi thành mảng ký tự                                                                                                 | char[]       | `char[] Array = name.toCharArray()`<br>⇨ Array =  {H,e,l,l,o}                                                                                                               |                                                                                                                                                                                                                                                                               |
| toString()<br>valueOf()                              | Chuyển đổi thành chuỗi                                                                                                        | String       | `123.toString()`<br>⇨ "123"<br><br>`String.valueOf(123)`<br>⇨ "123"<br>`String.valueOf(null)`<br>⇨ ""                                                                       | ⚠️ Nếu đối số là `null` thì `toString()` sẽ lỗi.                                                                                                                                                                                                                              |
| getBytes()                                           | Mã hoá chuỗi                                                                                                                  | byte[]       | `byte[] encode = Name.getBytes()`⇨ byte = "[B@2f0e140b"                                                                                                                     |                                                                                                                                                                                                                                                                               |
| copyValueOf(x,a,b)                                   | trả về chuỗi mới từ mảng ký tự **x** vị trí *a tới b*                                                                         | String       | `char[] str= {'h','e','l','l','o'}`<br>`String name = ""`<br><br>`name = name.copyValueOf(str)`<br>⇨ name = "Hello"<br>`name = name.copyValueOf(str,0,3)`<br>⇨ name = "hel" | ⚠️ Ta có thể 2 **form** và nếu copy toàn bộ thì không cần đối số `a` và `b`                                                                                                                                                                                                   |
| intern()                                             |                                                                                                                               |              |                                                                                                                                                                             |                                                                                                                                                                                                                                                                               |
| offsetByCodePoints()                                 |                                                                                                                               |              |                                                                                                                                                                             |                                                                                                                                                                                                                                                                               |

| 🔙  [Bài 8. Vòng lặp](https://github.com/Zenfection/Java/blob/master/Java%20Basic/8.Vonglap.md) | [Bài 10. Mảng](https://github.com/Zenfection/Java/blob/master/Java%20Basic/10.Mang.md) 🔜 |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |