<template><div><h1 id="package-va-tinh-đong-goi-muc-luc" tabindex="-1"><a class="header-anchor" href="#package-va-tinh-đong-goi-muc-luc" aria-hidden="true">#</a> Package và tính đóng gói------------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<h2 id="_1-encapsulation" tabindex="-1"><a class="header-anchor" href="#_1-encapsulation" aria-hidden="true">#</a> 1. Encapsulation</h2>
<p>Có nghĩa đơn giản là đảm bảo dữ liệu (<em>nhạy cảm</em>) được ẩn khỏi người dùng, Để làm điều đó, bạn phải :</p>
<ul>
<li>Khai báo <code v-pre>class</code>,<code v-pre>variables</code>, <code v-pre>attributes</code> dạng  <code v-pre>private</code></li>
<li>Cung cấp phương thức <code v-pre>get</code> và <code v-pre>set</code> truy cập công khai và cập nhật giá trị của biến <code v-pre>private</code></li>
</ul>
<h3 id="tai-sao-phai-su-dung-encapsulation-đong-goi" tabindex="-1"><a class="header-anchor" href="#tai-sao-phai-su-dung-encapsulation-đong-goi" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-14-12-Language Learning.png" alt="Language Learningpng"> Tại sao phải sử dụng <code v-pre>Encapsulation</code> (<em>đóng gói</em>) ?</h3>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</summary>
<br>
<ul>
<li>Kiểm soát tốt hơn <code v-pre>Attributes</code> và <code v-pre>Methods</code> của <code v-pre>Class</code></li>
<li><code v-pre>Attributes</code> của <code v-pre>Class</code> có thể đặt ở chế độ <code v-pre>read-only</code> hay <code v-pre>write-only</code> (<em>nếu bạn sử dụng set &amp; get</em>)</li>
<li>Linh hoạt hơn, có thể thay đổi thành phần mã mà không ảnh hưởng các phần khác.</li>
<li>Tăng độ bảo mật</li>
</ul>
</details>
<h3 id="get-va-set" tabindex="-1"><a class="header-anchor" href="#get-va-set" aria-hidden="true">#</a> Get và Set</h3>
<p>Như bạn đã biết khi đặt biến <code v-pre>private</code> thì chỉ có thể truy cập trong <code v-pre>class</code> đó (<em>các <code v-pre>class</code> khác không truy cập được</em>).</p>
<blockquote>
<p>🔥 Tuy nhiên có thể truy cập được chúng nếu bạn cung cấp phương thức <code v-pre>set</code> và <code v-pre>get</code> công khai</p>
<ul>
<li><code v-pre>set</code> là đặt giá trị</li>
<li><code v-pre>get</code> là trả về giá trị</li>
</ul>
<p>⚠️ Cú pháp theo sau là tên của biến và chữ cái đầu viết hoa.</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
     <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span> <span class="token comment">//khai báo truy cập giới hạn</span>

     <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// trả về giá trị của tên biến</span>
         <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">//this tượng trưng cho object hiện tại</span>
     <span class="token punctuation">}</span>

     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> newName<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//nhận tham số newName và gán là biến name</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> newName<span class="token punctuation">;</span> <span class="token comment">//this tượng trưng cho object hiện tại</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>🔥 Như bạn đã thấy thì trong <code v-pre>get</code> và <code v-pre>set</code> thì luôn có từ <code v-pre>this</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-14-12-Language Learning.png" alt="Language Learningpng"> Vậy <code v-pre>this</code> là gì ?</p>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</summary>
<br>
<p><code v-pre>this</code> nghĩa là nó, thực chất là một biến tham chiếu tới <code v-pre>object</code> hiện tại trong một <code v-pre>methods</code> hoặc <code v-pre>constructor</code>, có thể sử dụng để :</p>
<ul>
<li>Gọi <code v-pre>constructor</code> | <code v-pre>method</code> | <code v-pre>object</code> của class hiện tại</li>
<li>Truyền một đối số trong lệnh gọi <code v-pre>method</code> hoặc <code v-pre>constructor</code></li>
</ul>
</details>
</blockquote>
<blockquote>
<p>⚠️ Không nên khai báo biến là <code v-pre>public</code> ==&gt; Bởi <code v-pre>đóng gói</code> mà show ra ngoài thì còn gì là đóng nữa.</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">Person</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     myObj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Zen"</span><span class="token punctuation">;</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myObj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token comment">// output : Zen</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>👨‍🚒 Bạn có thể <code v-pre>getName()</code> và <code v-pre>setName()</code> để cập nhật biến như sau :</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Person</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myObj<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"Zen"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myObj<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token comment">// output : Zen</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_2-package-api" tabindex="-1"><a class="header-anchor" href="#_2-package-api" aria-hidden="true">#</a> 2. Package &amp; API</h2>
<p><code v-pre>Package</code> được sử dụng để nhóm nhiều <code v-pre>class</code> lại với nhau.</p>
<blockquote>
<p>😁 Hiểu đơn giản thì <code v-pre>class</code> là tệp, còn <code v-pre>Package</code> là thư mục</p>
<p>🧚‍♂️ Sử dụng để :</p>
<ul>
<li>Tránh xung đột tên</li>
<li>Bảo trì tốt hơn</li>
</ul>
</blockquote>
<p>Gồm 2 loại :</p>
<ul>
<li><code v-pre>Built-in Packages</code> : <em>các packages từ <code v-pre>Java API</code></em></li>
<li><code v-pre>User-defined Packages</code> :  <em>tự tạo các packages của riêng mình</em></li>
</ul>
<h3 id="built-in-packages" tabindex="-1"><a class="header-anchor" href="#built-in-packages" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-19-23-Knowledge Growth.png" alt="Knowledge Growth.png"> Built-in Packages</h3>
<p><code v-pre>Java API</code> là một thư viện được viết sẵn, bạn chỉ cần dùng thôi</p>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png"> Giải thích cụ thể:</b></summary>
<br>
<p>Thư viện chứa các thành phần quản lí <code v-pre>input</code>, <code v-pre>database</code> và nhiều thứ khác, tham khảo tại trang web của <a href="https://docs.oracle.com/en/java/javase/15/docs/api/index.html" target="_blank" rel="noopener noreferrer">tại đây<ExternalLinkIcon/></a></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/06-22-05-10-Ảnh chụp Màn hình 2021-02-06 lúc 22.05.04.png" alt="Ảnh chụp Màn hình 2021-02-06 lúc 22.05.04.png"></p>
<p>Thư viện được chia thành các <code v-pre>packages</code> và <code v-pre>classes</code> (<em>nghĩa là bạn chỉ cần import <code v-pre>class</code> thì nó sẽ có sẵn <code v-pre>method</code> và <code v-pre>attributes</code> được định sẵn</em>).</p>
</details>
<blockquote>
<p>🔥 Để sử dụng <code v-pre>class</code> hoặc <code v-pre>package</code> từ thư viện, bạn sử dụng từ khoá <code v-pre>import</code> như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">package<span class="token punctuation">.</span>name<span class="token punctuation">.</span></span><span class="token class-name">Class</span></span><span class="token punctuation">;</span> <span class="token comment">//import một class đơn</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">package<span class="token punctuation">.</span>name<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span> <span class="token comment">// import toàn bộ package</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h4 id="cu-the-ve-import" tabindex="-1"><a class="header-anchor" href="#cu-the-ve-import" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-05-59-Know How.png" alt="ithubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png"> Cụ thể về import :</h4>
<details>
<summary><b>☲ Import một class</b></summary>
<br>
<p>Ví dụ có một <code v-pre>class</code> là <code v-pre>Scanner</code> (<em>cho phép người dùng nhập từ bàn phím</em>) : Ta gõ Scanner và enter để nó tự <code v-pre>import</code> trong Vscode như sau:</p>
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/06-22-17-33-Ảnh chụp Màn hình 2021-02-06 lúc 22.17.24.png" title="" alt="Ảnh chụp Màn hình 2021-02-06 lúc 22.17.24.png" width="500">
<blockquote>
<p>🔥 Chỉ cần enter là nó sẽ tự <code v-pre>import</code> vào
Để sử dụng <code v-pre>class</code> <code v-pre>Scanner</code>, ta tạo một <code v-pre>Object</code> từ nó và sử dụng nó theo docs như sau:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token class-name">Scanner</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Enter username"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       <span class="token class-name">String</span> userName <span class="token operator">=</span> myObj<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Username is: "</span> <span class="token operator">+</span> userName<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> 
<span class="token punctuation">}</span><span class="token comment">//Output : nhập gì ra đó</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</details>
<details>
<summary><b>☲ Import một Package</b></summary>
<br>
<p>Như ví dụ trước, ta sử dụng <code v-pre>Scanner</code> từ gói <code v-pre>java.util</code>, vậy ta chỉ cần thêm <code v-pre>*</code> phía sau đó, có nghĩa là tất cả mọi thứ trong gói <code v-pre>java.util</code> như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h4 id="vay-toi-muon-tu-import-rieng-package-cua-toi-thi-lam-sao" tabindex="-1"><a class="header-anchor" href="#vay-toi-muon-tu-import-rieng-package-cua-toi-thi-lam-sao" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-14-12-Language Learning.png" alt="Language Learningpng">Vậy tôi muốn tự import riêng <code v-pre>package</code> của tôi thì làm sao ?</h4>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</summary>
<br>
<p>Thì bạn hãy tự tạo lấy <code v-pre>package</code> của riêng nhưng phải đặt nó trong thư mục lưu trữ nó, như này :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/06-22-34-11-Ảnh chụp Màn hình 2021-02-06 lúc 22.34.10.png" alt="Ảnh chụp Màn hình 2021-02-06 lúc 22.34.10.png"></p>
<blockquote>
<p>Sử dụng từ khoá <code v-pre>package</code> tử tạo một gói mới :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> mypack<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">MyPackageClass</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Đây là package của tôi!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p>Mở <code v-pre>Terminal</code> hoặc <code v-pre>CMD</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>javac <span class="token parameter variable">-d</span> <span class="token builtin class-name">.</span> MyPackageClass.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>Nó sẽ bắt buộc tạo ra 1 <code v-pre>MyPackageClass.java</code> nằm trong thư mục <code v-pre>mypack</code> như hình dưới đây :</p>
</blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/06-22-44-55-Ảnh chụp Màn hình 2021-02-06 lúc 22.44.49.png" alt="Ảnh chụp Màn hình 2021-02-06 lúc 22.44.49.png"></p>
<blockquote>
<p>⚠️ Hãy viết tên <code v-pre>Package</code> bằng chữ thường để tránh xung đột với tên <code v-pre>class</code>.</p>
<p>Và bạn chỉ cần gọi <code v-pre>class</code> trong <code v-pre>package như sau</code> :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> mypack.MyPackageClass.java
//output <span class="token builtin class-name">:</span> Đây là package của tôi<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</details>
<table>
<thead>
<tr>
<th>🔙  <a href="https://github.com/Zenfection/Java/blob/master/Java%20OOP/2.Modifier.md" target="_blank" rel="noopener noreferrer">Bài 2.Phạm vi truy cập<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20OOP/4.Inheritance%26Polymorphism.md" target="_blank" rel="noopener noreferrer">Bài 4.Tính kế thừa và Đa hình<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


