<template><div><h1 id="arraylist-muc-luc" tabindex="-1"><a class="header-anchor" href="#arraylist-muc-luc" aria-hidden="true">#</a> ArrayList--------------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<h2 id="_1-gioi-thieu" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu" aria-hidden="true">#</a> 1. Giới thiệu</h2>
<p><code v-pre>ArrayList</code> (<em>danh sách đặc</em>) là một mảng có khả năng thay đổi kích thước nằm trong gói <code v-pre>java.util</code></p>
<blockquote>
<p>⚠️ Sự khác nhau giữa <code v-pre>Array</code> và <code v-pre>ArrayList</code> là bạn không thể thay đổi kích thước phần tử của <code v-pre>Array</code> nhưng với <code v-pre>ArrayList</code> thì có thể.</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> animals <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// tạo một Object Arraylist</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_2-su-dung" tabindex="-1"><a class="header-anchor" href="#_2-su-dung" aria-hidden="true">#</a> 2. Sử dụng</h2>
<p>Lớp <code v-pre>ArrayList</code> có rất nhiều phương thức, nhưng một trong số đó là :</p>
<ul>
<li><code v-pre>add()</code> : <em>thêm phần tử</em></li>
<li><code v-pre>get()</code> : <em>lấy phần tử</em></li>
<li><code v-pre>set()</code> : <em>thay đổi phần tử</em></li>
<li><code v-pre>remove()</code> : <em>xoá phần tử</em></li>
<li><code v-pre>clear()</code> : <em>xoá ArrayList</em></li>
<li><code v-pre>size()</code> : <em>trả về số lượng phần từ</em></li>
</ul>
<br>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-16-35-29-Online Course.png"> Thêm phần tử</b></summary>
<br>
<p>Sử dụng phương thức <code v-pre>add()</code> để thêm phần tử như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">jdk<span class="token punctuation">.</span>internal<span class="token punctuation">.</span>jshell<span class="token punctuation">.</span>tool<span class="token punctuation">.</span>resources<span class="token punctuation">.</span>l10n</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> animals <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        animals<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"mèo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        animals<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"chó"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        animals<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"heo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        animals<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"rắn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>animals<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Output : [mèo,chó,heo,rắn]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/12/09-09-40-03-1200px-Visual_Studio_Code_1.35_icon.svg.png" width="40px">Debug trong Vscode : </b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-16-45-55-Ảnh chụp Màn hình 2021-02-08 lúc 16.45.47.png" alt="Ảnh chụp Màn hình 2021-02-08 lúc 16.45.47.png"></p>
<blockquote>
<p>⚠️ Như bạn thấy thì vị trí đầu của <code v-pre>ArrayList</code> là <strong>0</strong></p>
</blockquote>
</details>
</details>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-16-35-29-Online Course.png"> Lấy phần tử</b></summary>
<br>
<p>Sử dụng phương thức <code v-pre>get()</code> để thêm phần tử như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>animals<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// mèo</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>animals<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// rắn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-16-35-29-Online Course.png"> Đổi phần tử</b></summary>
<br>
<p>Bạn có thể chỉnh sửa phần tử bằng cách sử dụng phương thức <code v-pre>set()</code> như sau :</p>
<blockquote>
<p><code v-pre>set(&lt;vị trí&gt;,&lt;chuỗi&gt;)</code></p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>animals<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">"voi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// đổi phần tử vị tri 0 thành voi</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//Output : [voi,chó,heo,rắn]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-16-35-29-Online Course.png"> Xoá phần tử</b></summary>
<br>
<p>Sử dụng phương thức <code v-pre>remove()</code> để xoá phần tử như sau :</p>
<blockquote>
<p><code v-pre>remove(&lt;vị trí&gt;)</code></p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>animals<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Output : [mèo,heo,rắn]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Nếu bạn muốn xoá hết tất cả hãy dùng <code v-pre>clear()</code> :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>animals<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Output : []</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</details>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-16-35-29-Online Course.png"> Kiểm ta số phần tử</b></summary>
<br>
<p>Sử dụng phương thức <code v-pre>size()</code> để kiểm tra số phần tử hiện có trong mảng</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>animals<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//Output : 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="duyet-qua-mot-arraylist" tabindex="-1"><a class="header-anchor" href="#duyet-qua-mot-arraylist" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-17-36-14-Professor Male.png" alt="Professor Male.png"> Duyệt qua Một <code v-pre>ArrayList</code></h3>
<p>Bạn có thể dùng vòng lặp để duyệt qua <code v-pre>Arraylist</code> theo 2 cách sau :</p>
<details>
<summary><b>☲ Sử dụng for</b></summary>
<br>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> animals<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>animals<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* mèo
   chó
   heo
   rắn */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details>
<summary><b>☲ Sử dụng for..Each</b></summary>
<br>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> index <span class="token operator">:</span> animals<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* mèo
   chó
   heo
   rắn */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>💡 Vậy thì sử dụng <code v-pre>for..Each</code> sẽ đơn giản hơn rất nhiều đúng không nào</p>
</blockquote>
</details>
<br>
<h3 id="vay-arraylist-co-the-luu-tru-du-lieu-khac-khong" tabindex="-1"><a class="header-anchor" href="#vay-arraylist-co-the-luu-tru-du-lieu-khac-khong" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-14-12-Language Learning.png" alt="Language Learningpng"> Vậy <code v-pre>ArrayList</code> có thể lữu trữ dữ liệu khác không ?</h3>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</summary>
<br>
<p>Bản chất của <code v-pre>ArrayList</code> là một <code v-pre>Object</code> vậy nên nó ó thể lữu trữ nhiều kiểu dữ liệu khác.</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> myNumbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//kiểu số nguyên</span>
<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">></span></span> myNumbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// kiểu số thực</span>
<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> myNumbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// kiểu chuỗi</span>
<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">></span></span> myNumbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// kiểu ký tự</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<br>
<h3 id="sap-xep-arraylist" tabindex="-1"><a class="header-anchor" href="#sap-xep-arraylist" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-17-36-14-Professor Male.png" alt="Professor Male.png"> Sắp xếp <code v-pre>ArrayList</code></h3>
<p>Sử dụng lớp <code v-pre>Collections</code> trong gói <code v-pre>java.util</code>, trong đó có phương thức <code v-pre>sort()</code> giúp bạn có thể sắp xếp theo <em>chữ cái</em> hoặc <em>số</em>.</p>
<br>
<details>
<summary><b>☲ Sắp xếp theo chữ cái</b></summary>
<br>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Collections</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> animals <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        animals<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"mèo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        animals<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"chó"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        animals<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"heo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        animals<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"rắn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>animals<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> index <span class="token operator">:</span> animals<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//Output : chó heo mèo rắn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details>
<summary><b>☲ Sắp xếp theo số thứ tự</b></summary>
<br>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Collections</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> numberic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        numberic<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        numberic<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        numberic<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        numberic<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>numberic<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> index <span class="token operator">:</span> numberic<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//Output : 1 5 8 33</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<table>
<thead>
<tr>
<th>🔙  <a href="https://github.com/Zenfection/Java/blob/master/Java%20Advaced/3.Date.md" target="_blank" rel="noopener noreferrer">Bài 3.Date<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20Advaced/5.LinkedList.md" target="_blank" rel="noopener noreferrer">Bài 5.LinkedList<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


