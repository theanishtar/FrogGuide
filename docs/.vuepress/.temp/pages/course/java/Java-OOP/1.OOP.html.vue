<template><div><h1 id="oop-muc-luc" tabindex="-1"><a class="header-anchor" href="#oop-muc-luc" aria-hidden="true">#</a> OOP------------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<p><code v-pre>OOP</code> là viết tắt của <strong>Object-Oriented Programing</strong> (<em>Lập trình hướng đối tượng</em>), nó cấu trúc code phân chia theo <code v-pre>Classes</code> → <code v-pre>Objects</code> → <code v-pre>Attributes</code> → <code v-pre>Methods</code></p>
<table>
<thead>
<tr>
<th>Lập trình thủ tục</th>
<th>Lập trình hướng đối tượng</th>
</tr>
</thead>
<tbody>
<tr>
<td>viết <strong><code v-pre>thủ tục</code></strong> hoặc <strong><code v-pre>methods</code></strong> thực hiện thao tác trên dữ liệu</td>
<td>Tạo cái <strong><code v-pre>Object</code></strong> chứa cả <strong><code v-pre>data</code></strong> và <strong><code v-pre>Methods</code></strong></td>
</tr>
</tbody>
</table>
<blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-05-59-Know How.png"> Những ưu điểm của OOP so với lập trình thủ tục</b></summary>
<br>
<ul>
<li>
<p>Nhanh hơn và dễ hơn</p>
</li>
<li>
<p>Cấu trúc rõ ràng dễ hiểu, dễ bảo trì, sửa lỗi</p>
</li>
<li>
<p>Có thể tái sử dụng giúp thời gian phát triển code ngắn hơn</p>
</li>
</ul>
</details>
</blockquote>
<hr>
<h3 id="đay-la-nhung-thu-ma-chung-ta-hoc-hay-nhin-anh-sau" tabindex="-1"><a class="header-anchor" href="#đay-la-nhung-thu-ma-chung-ta-hoc-hay-nhin-anh-sau" aria-hidden="true">#</a> Đây là những thứ mà chúng ta học, hãy nhìn ảnh sau :</h3>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-18-02-object-class-diagrame-1.png" alt="object-class-diagrame-1.png"></p>
<h2 id="_1-classes-va-objects" tabindex="-1"><a class="header-anchor" href="#_1-classes-va-objects" aria-hidden="true">#</a> 1. Classes và Objects</h2>
<h3 id="gioi-thieu" tabindex="-1"><a class="header-anchor" href="#gioi-thieu" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-19-23-Knowledge Growth.png" alt="Knowledge Growth.png"> Giới thiệu</h3>
<p>Mọi thứ trong <code v-pre>Java</code> đều liên kết với <code v-pre>Classes</code> (<em>lớp</em>)  và <code v-pre>Objects</code> (<em>đối tượng</em>), cùng với <code v-pre>attributes</code> (<em>thuộc tính</em>) và <code v-pre>methods</code> (<em>phương thức</em>).</p>
<blockquote>
<p>Bạn chỉ cần chú ý <code v-pre>Class</code> và <code v-pre>Objects</code> thôi nhé.</p>
<ul>
<li>Trong <code v-pre>class</code> học sinh, có <code v-pre>Object</code> là những bạn A, bạn B, bạn C...</li>
<li>Trong <code v-pre>class</code> có nhiều <code v-pre>Object</code>.</li>
</ul>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png"> Ví dụ thêm</b></summary>
<br>
<ul>
<li>
<p><code v-pre>Class</code> là Trái cây  ⇨ <code v-pre>Objects</code> là nho,cam,quýt,táo...</p>
</li>
<li>
<p><code v-pre>Class</code> là Động vật ⇨ <code v-pre>Objects</code> là chó,mèo,heo,gà...</p>
</li>
</ul>
</blockquote>
<h3 id="khoi-tao" tabindex="-1"><a class="header-anchor" href="#khoi-tao" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-49-09-Group Class.png" alt="Group Class.png"> Khởi tạo</h3>
<p>Ta có file <code v-pre>Main.java</code> trống, đầu tiên hãy tạo 1 <code v-pre>Class</code> như sau:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">//khái báo x toàn cục = 5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>⚠️ Hãy nhớ tên <code v-pre>Class</code> tổng luôn bắt đầu viết hoa chữ cái đầu và trùng tên với <code v-pre>file.java</code>.</p>
</blockquote>
<p>Trong <code v-pre>Java</code> một <code v-pre>Object</code> phải nằm trong  một <code v-pre>class</code> như sau:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">//khái báo x toàn cục = 5</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Main</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"myObj.x"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>💡 Tạo một <code v-pre>Object</code> bằng cách sử dụng từ khoá <code v-pre>new</code></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-13-30-01-Creative Solution.png"> Cũng có thể tạo nhiều Object như sau :</b></summary>
<br>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">"Kiệt đẹp trai"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Demo</span> myObj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Object 1</span>
        <span class="token class-name">Demo</span> myObj2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Object 2</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myObj1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myObj2<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>💡 Tên class có thể thay đổi dựa vào tên file của bạn</p>
</blockquote>
</details>
<p>Ngoài ra bạn cũng có thể tạo một Object cho phép truy cập vào <code v-pre>class</code> khác</p>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-05-59-Know How.png"> Cụ thể như sau :</b></summary>
<br>
<p>Cho một file <code v-pre>Main.java</code> và <code v-pre>Second.java</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Second</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Main</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//class Main nằm trong file Main.java</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myObj<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Output : 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>⚠️  2 file phải nằm chung trong một thư mục.</p>
</blockquote>
</details>
<hr>
<h2 id="_3-attributes" tabindex="-1"><a class="header-anchor" href="#_3-attributes" aria-hidden="true">#</a> 3. Attributes</h2>
<p>Như hình ảnh ở <a href="https://github.com/Zenfection/Java/blob/master/Java%20OOP/1.OOP.md#%C4%91%C3%A2y-l%C3%A0-nh%E1%BB%AFng-th%E1%BB%A9-m%C3%A0-ch%C3%BAng-ta-h%E1%BB%8Dc-h%C3%A3y-nh%C3%ACn-%E1%BA%A3nh-sau-" target="_blank" rel="noopener noreferrer">trên<ExternalLinkIcon/></a>, có thể thế thấy được <code v-pre>Attribute</code> là những đặc tính nhận dạng của một <code v-pre>Class</code>.</p>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png"> Ví dụ cụ thể:</b></summary>
<br>
<ul>
<li>
<p><code v-pre>Object</code> là học sinh ⇨ <code v-pre>Atrributes</code> là tuổi,tên,giới tính...</p>
</li>
<li>
<p><code v-pre>Object</code> là trái cây ⇨ <code v-pre>Attributes</code> là màu sắc,lá,hạt...</p>
</li>
<li>
<p><code v-pre>Object</code> là động vật ⇨ <code v-pre>Attributes</code> là màu lông,đuôi,tay,chân...</p>
</li>
</ul>
</details>
<blockquote>
<p>💡 Giống như bài trên thì biến <code v-pre>x</code> là một <code v-pre>Attribute</code> trong <code v-pre>class</code> <code v-pre>Main</code></p>
</blockquote>
<h4 id="vay-đe-su-dung-cac-attribute-ta-lam-sao" tabindex="-1"><a class="header-anchor" href="#vay-đe-su-dung-cac-attribute-ta-lam-sao" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-14-12-Language Learning.png" alt="Language Learning.png">Vậy để sử dụng các <code v-pre>Attribute</code> ta làm sao :</h4>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</summary>
<br>
<p>Sử dụng dấu <code v-pre>.</code> trước <code v-pre>Object</code> để truy cập tới các <code v-pre>Attributes</code> của nó :</p>
<ul>
<li>
<p>Ví dụ trừu tượng : <code v-pre>Độngvật.màulông</code>, <code v-pre>Tráicây.màu</code>, <code v-pre>HọcSinh.tuổi</code>...</p>
</li>
<li>
<p>Ví dụ cụ thể : <code v-pre>Array.length</code>....</p>
</li>
<li>
<p>Ví dụ thực tế : Tạo file <code v-pre>Demo.java</code> như sau</p>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">"Lucky"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> color <span class="token operator">=</span> <span class="token string">"red"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Demo</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"age = "</span> <span class="token operator">+</span> myObj<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"name : "</span> <span class="token operator">+</span> myObj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"color : "</span> <span class="token operator">+</span> myObj<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* age = 3
   name = Lucky
   color = red
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h4 id="vay-ta-co-the-thay-đoi-attribute-khong" tabindex="-1"><a class="header-anchor" href="#vay-ta-co-the-thay-đoi-attribute-khong" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-14-12-Language Learning.png" alt="Language Learning.png">Vậy ta có thể thay đổi <code v-pre>Attribute</code> không ?</h4>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</summary>
<br>
<p>Dĩ nhiên là được, hôm nay người ấy yêu bạn không chắc ngày mai cũng thế, vậy nên bạn có thể thay đổi <code v-pre>Attributes</code> bằng phép gán.</p>
<p>Tạo một file <code v-pre>Cat.java</code> như sau:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> color <span class="token operator">=</span> <span class="token string">"cam"</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Cat</span> conMeo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Con mèo màu "</span> <span class="token operator">+</span> conMeo<span class="token punctuation">.</span>color <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> conMeo<span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token string">" tuổi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        conMeo<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">"vàng"</span><span class="token punctuation">;</span>
        conMeo<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Con mèo màu "</span> <span class="token operator">+</span> conMeo<span class="token punctuation">.</span>color <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> conMeo<span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token string">" tuổi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
<span class="token comment">/* Con mèo màu cam 3 tuổi
   Con mèo màu vàng 4 tuổi  */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vào khi ta Debug sẽ thấy được như sau :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-25-31-Ảnh chụp Màn hình 2021-02-02 lúc 14.25.25.png" alt="Ảnh chụp Màn hình 2021-02-02 lúc 14.25.25.png"></p>
<blockquote>
<p>💡 Thuộc tính của con mèo đã bị đổi sáng <code v-pre>4 tuổi</code> và <code v-pre>màu vàng</code></p>
</blockquote>
</details>
<h4 id="toi-khong-muon-ai-thay-đoi-attributes-cu-the" tabindex="-1"><a class="header-anchor" href="#toi-khong-muon-ai-thay-đoi-attributes-cu-the" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-14-12-Language Learning.png" alt="Language Learning.png"> Tôi không muốn ai thay đổi <code v-pre>Attributes</code> cụ thể ?</h4>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</summary>
<br>
<p>Dĩ nhiên là được rồi, và mình đã nói chung những bài trước, chỉ cần bạn khai báo thêm từ khoá <code v-pre>final</code>, các biến sẽ không thể thay đổi được.</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-33-28-Ảnh chụp Màn hình 2021-02-02 lúc 14.33.22.png" alt="Ảnh chụp Màn hình 2021-02-02 lúc 14.33.22.png"></p>
<blockquote>
<p>💡 Sẽ gặp lỗi ngay nếu bạn cố thay đổi nó.</p>
</blockquote>
</details>
<hr>
<h2 id="_4-methods" tabindex="-1"><a class="header-anchor" href="#_4-methods" aria-hidden="true">#</a> 4. Methods</h2>
<p>Như hình ảnh ở <a href="https://github.com/Zenfection/Java/blob/master/Java%20OOP/1.OOP.md#%C4%91%C3%A2y-l%C3%A0-nh%E1%BB%AFng-th%E1%BB%A9-m%C3%A0-ch%C3%BAng-ta-h%E1%BB%8Dc-h%C3%A3y-nh%C3%ACn-%E1%BA%A3nh-sau-" target="_blank" rel="noopener noreferrer">trên<ExternalLinkIcon/></a>, <code v-pre>Methods</code> là những hành vi, chức năng của một <code v-pre>Attribute</code></p>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png"> Ví dụ cụ thể:</b></summary>
<br>
<ul>
<li>
<p><code v-pre>Object</code> : con người ⇨ <code v-pre>Atrributes</code> : tay... ⇨  <code v-pre>Methods</code> : nắm,bóp,sờ,đấm...</p>
</li>
<li>
<p><code v-pre>Object</code> : động vật ⇨ <code v-pre>Attributes</code> : tay,chân... ⇨ <code v-pre>Methods</code> : đi,chạy...</p>
</li>
</ul>
</details>
<blockquote>
<p>💡 Ta đã được học về việc tạo <code v-pre>Methods</code> ở Bài <a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/12.Methods.md" target="_blank" rel="noopener noreferrer">Java Methods<ExternalLinkIcon/></a></p>
</blockquote>
<h4 id="vay-đe-su-dung-cac-methods-ta-lam-sao" tabindex="-1"><a class="header-anchor" href="#vay-đe-su-dung-cac-methods-ta-lam-sao" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-14-12-Language Learning.png" alt="Language Learningpng">Vậy để sử dụng các <code v-pre>Methods</code> ta làm sao :</h4>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</summary>
<br>
<p>Cũng giống như <code v-pre>Attributes</code>, bạn sử dụng dấu <code v-pre>.</code> trước <code v-pre>Object</code> để gọi <code v-pre>Methods</code> của nó.</p>
<blockquote>
<p>⚠️ <code v-pre>Methods</code> là hàm nên sẽ có dấu <code v-pre>()</code></p>
</blockquote>
<ul>
<li>
<p>Ví dụ trừu tượng : <code v-pre>Độngvật.chạy()</code>, <code v-pre>HọcSinh.đi()</code>,<code v-pre>HọcSinh.yêu()</code>...</p>
</li>
<li>
<p>Ví dụ cụ thể: <code v-pre>Math.pow(x,y)</code>, <code v-pre>String.toString()</code>...</p>
</li>
<li>
<p>Ví dụ thực tế: Tạo một file <code v-pre>Cat.java</code> như sau:</p>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Con mèo đã chạy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Con mèo đang ăn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Cat</span> conMeo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// tạo Object conMeo</span>
        conMeo<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//gọi method run</span>
        conMeo<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//gọi methos eat</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Con mèo đã chạy
   Con mèo đang ăn */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h4 id="neu-nhieu-class-trong-mot-file-thi-phai-lam-sao" tabindex="-1"><a class="header-anchor" href="#neu-nhieu-class-trong-mot-file-thi-phai-lam-sao" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-14-12-Language Learning.png" alt="Language Learningpng"> Nếu nhiều <code v-pre>class</code> trong một file thì phải làm sao ?</h4>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</summary>
<br>
<p>Nếu có nhiều <code v-pre>class</code> thì chúng ta nên tách nhỏ nó ra thành từng <code v-pre>class</code> nhỏ rồi dùng Object gọi chúng lại với nhau</p>
<blockquote>
<p>⚠️ Tên <code v-pre>class</code> phải trùng với tên <code v-pre>file.java</code></p>
</blockquote>
<p>Cho file <code v-pre>Main.Java</code> và <code v-pre>Second.java</code> lần lượt như sau:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Con mèo đã chạy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Con mèo tên "</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Second</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Main</span> myCat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myCat<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myCat<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">"Méo Meo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Con mèo đã chạy
   Con mèo tên Méo Meo*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/12/09-09-40-03-1200px-Visual_Studio_Code_1.35_icon.svg.png" width="40px"> Cách nhận viết Object,Atrributes,Methods trong Vscode</b></summary>
<br>
<p>Bạn có thể nhận biết bằng hình ảnh và ký hiệu sau đây :</p>
<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/03-22-42-59-Ảnh chụp Màn hình 2021-02-02 lúc 15.23.22.png" alt="Ảnh chụp Màn hình 2021-02-02 lúc 15.23.22.png" width="550">
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/03-22-48-31-Ảnh chụp Màn hình 2021-02-03 lúc 22.46.58.png" title="" alt="Ảnh chụp Màn hình 2021-02-03 lúc 22.46.58.png" width="500">
</details>
<hr>
<h2 id="_5-constructors" tabindex="-1"><a class="header-anchor" href="#_5-constructors" aria-hidden="true">#</a> 5. Constructors</h2>
<p><code v-pre>Constructors</code> là một <code v-pre>methods</code> đặc biệt dùng để <strong>khởi tạo</strong> các <code v-pre>Objects</code>.</p>
<ul>
<li>Được gọi khi một <code v-pre>Object</code> của <code v-pre>Class</code> được tạo</li>
<li>Sử dụng để đặt các giá trị ban đầu cho các <code v-pre>Attributes</code></li>
</ul>
<blockquote>
<p>⚠️ Tên <code v-pre>Contructors</code> phải giống với tên <code v-pre>class</code> và không có giá trị trả về (kể cả <code v-pre>void</code>)</p>
<p>🔥 Tất cả các <code v-pre>Class</code> trong <code v-pre>Java</code> đều có <code v-pre>constructor</code>, nếu bạn không tạo, <code v-pre>Java</code> sẽ làm việc đó thay cho bạn ⇨ nếu vậy thì bạn sẽ không thể đặt <code v-pre>value</code> và <code v-pre>attributes</code> ban đầu cho nó được.</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// giống với tên class và không có giá trị trả về</span>
        x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Demo</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myObj<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Constructor</code> cũng có thể nhận các tham số để khởi tạo thuộc tính :</p>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png"> Cụ thể như sau:</b></summary>
<br>
<p>Tạo một file <code v-pre>Demo.java</code> như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> ageCat<span class="token punctuation">;</span>
    <span class="token class-name">String</span> nameCat<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        ageCat <span class="token operator">=</span> age<span class="token punctuation">;</span>
        nameCat <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Demo</span> myCat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">"Méo Meo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//khai báo constructor</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"mèo tên "</span> <span class="token operator">+</span> myCat<span class="token punctuation">.</span>nameCat<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"mèo tôi "</span> <span class="token operator">+</span> myCat<span class="token punctuation">.</span>ageCat <span class="token operator">+</span> <span class="token string">" tuổi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* mèo tên Méo Meo
   mèo tôi 3 tuổi */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<blockquote>
<p>🔥 Đơn giản bạn cứ hiểu là <code v-pre>Object</code> <em>khai sinh</em> bắt buộc phải có <strong>tên</strong>, <strong>ngày sinh</strong>,,, và khi tạo ra nó đã có. Như tôi sinh ra đã tên <strong>Kiệt</strong> chứ không phải đợi 3-4 năm sau mới có tên <strong>Kiệt</strong></p>
</blockquote>
<table>
<thead>
<tr>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20OOP/2.Modifier.md" target="_blank" rel="noopener noreferrer">Bài 2.Phạm vi truy cập<ExternalLinkIcon/></a>  🔜</th>
</tr>
</thead>
</table>
</div></template>


