<template><div><h1 id="user-input-muc-luc" tabindex="-1"><a class="header-anchor" href="#user-input-muc-luc" aria-hidden="true">#</a> User Input--------------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<h2 id="_1-gioi-thieu" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu" aria-hidden="true">#</a> 1. Giới thiệu</h2>
<p>Sử dụng lớp <code v-pre>Scanner</code> để cho phép người dùng nhập từ bàn phím ==&gt; nó nằm trong <strong>gói</strong> <code v-pre>java.util</code></p>
<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/06-22-17-33-Ảnh chụp Màn hình 2021-02-06 lúc 22.17.24.png" alt="sda" width="445">
<blockquote>
<p>💡 Để sử dụng những <code v-pre>class</code> có sẵn có Java, cách tốt nhất là bạn đọc  <strong>docs</strong> của nhà sản xuất <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Scanner.html" target="_blank" rel="noopener noreferrer">tại đây<ExternalLinkIcon/></a> (<em>bản Java SE 8</em>)</p>
</blockquote>
<p>Để sử dụng lớp <code v-pre>Scanner</code>, bạn cần <code v-pre>import</code> nó và tạo <code v-pre>Object</code> từ lớp đó để sử dụng như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>  <span class="token comment">// import lớp Scanner</span>

<span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Scanner</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// tạo Object Scanner</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Enter username"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> userName <span class="token operator">=</span> myObj<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//coi phần dưới</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Username is: "</span> <span class="token operator">+</span> userName<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_2-su-dung" tabindex="-1"><a class="header-anchor" href="#_2-su-dung" aria-hidden="true">#</a> 2. Sử dụng</h2>
<p>Ở ví dụ trên, ta dùng phương thức <code v-pre>nextLine()</code> để đọc mọi thứ người dùng nhập vào, cú pháp như sau :</p>
<blockquote>
<p><code v-pre>next + kiểu dữ liệu(viết hoa chữ cái đầu)</code></p>
</blockquote>
<table>
<thead>
<tr>
<th>Phương thức</th>
<th>Mô tả</th>
</tr>
</thead>
<tbody>
<tr>
<td>nextBoolean()</td>
<td>nhập kiểu <code v-pre>bool</code></td>
</tr>
<tr>
<td>nextByte()<br>nextShort()<br>nextInt()<br>nextLong()<br></td>
<td>nhập <code v-pre>số nguyên</code></td>
</tr>
<tr>
<td>nextFloat()<br>nextDouble</td>
<td>nhập <code v-pre>số thực</code></td>
</tr>
<tr>
<td>nextLine()</td>
<td>nhập <code v-pre>chuỗi</code></td>
</tr>
</tbody>
</table>
<blockquote>
<p>⚠️ Riêng chuỗi sẽ là <code v-pre>nextLine()</code> chứ không phải <code v-pre>nextString()</code></p>
</blockquote>
<h3 id="neu-nguoi-dung-nhap-sai-kieu-du-lieu-thi-sao" tabindex="-1"><a class="header-anchor" href="#neu-nguoi-dung-nhap-sai-kieu-du-lieu-thi-sao" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-14-12-Language Learning.png" alt="Language Learningpng"> Nếu người dùng nhập sai kiểu dữ liệu thì sao ?</h3>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</summary>
<br>
<p>Nếu bạn sử dụng <code v-pre>nextInt()</code>, nhưng người dùng lại nhập vào chuỗi</p>
<p>===&gt; Ngay lập tức sẽ xuất hiện lỗi tên là <code v-pre>InputMismatchException</code></p>
<blockquote>
<p>💡 Bạn có thể sử dụng <strong>Google</strong> để tra lỗi đó</p>
</blockquote>
</details>
<br>
<table>
<thead>
<tr>
<th>🔙  <a href="https://github.com/Zenfection/Java/blob/master/Java%20Advaced/1.Enums.md" target="_blank" rel="noopener noreferrer">Bài 1.Enums<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20Advaced/3.Date.md" target="_blank" rel="noopener noreferrer">Bài 3.Date<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


