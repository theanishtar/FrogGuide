<template><div><h1 id="hashmap-muc-luc" tabindex="-1"><a class="header-anchor" href="#hashmap-muc-luc" aria-hidden="true">#</a> HashMap--------------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<h2 id="_1-gioi-thieu" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu" aria-hidden="true">#</a> 1. Giới thiệu</h2>
<p>Trong bài <a href="https://github.com/Zenfection/Java/blob/master/Java%20Advaced/4.ArrayList.md" target="_blank" rel="noopener noreferrer">ArrayList<ExternalLinkIcon/></a>, nó lưu trữ phần tử theo thứ tự chỉ mục bắt đầu từ <strong>0</strong>, nếu bạn muốn truy cập phần tử ngầu nhiên thì sử dụng chỉ mục (<em>số nguyên</em>) của nó ==&gt; <code v-pre>Array[1]</code>, <code v-pre>Array[3]</code>....</p>
<p>Tuy nhiên với <code v-pre>HashMap</code> (<em>bàn đồ băm</em>) : lưu các phần tử dưới dạng <code v-pre>key/value</code>.</p>
<blockquote>
<p>💡 Một <code v-pre>Object</code> sẽ làm từ khoá tìm kiếm cho <code v-pre>Object</code> khác.</p>
<p>💡 Có thể lưu trữ bằng nhiều kiểu dữ liệu làm <code v-pre>key</code> như : <code v-pre>String</code>, <code v-pre>Integer</code>...</p>
</blockquote>
<p>Sử dụng <code v-pre>HashMap</code> trong gói <code v-pre>java.util.HashMap</code> như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>

<span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> animals <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>🔥 <code v-pre>Integer</code> là <code v-pre>key</code> còn <code v-pre>String</code> là <code v-pre>value</code></p>
<p><strong>Debug ra như sau :</strong></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/10-10-01-35-Ảnh chụp Màn hình 2021-02-10 lúc 10.01.28.png" alt="Ảnh chụp Màn hình 2021-02-10 lúc 10.01.28.png"></p>
</blockquote>
<h2 id="_2-su-dung" tabindex="-1"><a class="header-anchor" href="#_2-su-dung" aria-hidden="true">#</a> 2. Sử dụng</h2>
<p>Cho trước một đoạn code sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">></span></span> animals <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>🔥 Ta tạo một đối tượng <code v-pre>animals</code>, có <code v-pre>key</code> và <code v-pre>value</code> là kiểu <code v-pre>String</code>.</p>
</blockquote>
<br>
<table>
<thead>
<tr>
<th>Phương thức</th>
<th>Mô tả</th>
<th>Ví dụ</th>
</tr>
</thead>
<tbody>
<tr>
<td>put(&quot;x&quot;,&quot;y&quot;)</td>
<td>Thêm một phần tử với chuỗi <strong>x</strong> là <code v-pre>key</code>, chuỗi <strong>y</strong> là value</td>
<td><code v-pre>animals.put(&quot;cat&quot;,&quot;mèo&quot;)</code><br>⇨ key : &quot;cat&quot;<br>value : &quot;mèo&quot;</td>
</tr>
<tr>
<td>get(&quot;x&quot;)</td>
<td>Lấy <code v-pre>value</code> dựa theo <code v-pre>key</code></td>
<td><code v-pre>animals.get(&quot;cat&quot;)</code> <br>⇨ mèo</td>
</tr>
<tr>
<td>remove(&quot;x&quot;)</td>
<td>Xoá phần tử bằng <code v-pre>value</code></td>
<td><code v-pre>animals.remove(&quot;cat&quot;)</code> <br>⇨ mèo đã bị xoá</td>
</tr>
<tr>
<td>clear()</td>
<td>Xoá tất cả phần tử</td>
<td><code v-pre>animals.clear()</code><br>⇨ tất cả phần tử không còn nữa</td>
</tr>
<tr>
<td>size()</td>
<td>Trả về số phần tử hiện có</td>
<td><code v-pre>animals.size()</code><br>⇨ 1</td>
</tr>
<tr>
<td>keySet()<br>values()&lt;&gt;</td>
<td>Lấy <code v-pre>key</code> của <code v-pre>HashMap</code><br>Lấy <code v-pre>value</code> của <code v-pre>HashMap</code></td>
<td><code v-pre>animals.keySet()</code><br>⇨ cat<br><code v-pre>animals.values()</code><br>⇨ mèo</td>
</tr>
</tbody>
</table>
<h2 id="duyet-qua-mot-hashmap" tabindex="-1"><a class="header-anchor" href="#duyet-qua-mot-hashmap" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-17-36-14-Professor Male.png" alt="Professor Malepng"> Duyệt qua Một <code v-pre>HashMap</code></h2>
<p>Bạn có thể dùng vòng lặp để duyệt qua <code v-pre>HashMap</code> theo 2 cách sau :</p>
<details>
<summary><b>☲ Duyệt bằng key</b></summary>
<br>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> index <span class="token operator">:</span> animals<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details>
<summary><b>☲ Duyệt bằng value</b></summary>
<br>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> index <span class="token operator">:</span> animals<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<table>
<thead>
<tr>
<th>🔙  <a href="https://github.com/Zenfection/Java/blob/master/Java%20Advaced/5.LinkedList.md" target="_blank" rel="noopener noreferrer">Bài 5.LinkedList<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20Advaced/7.HashSet.md" target="_blank" rel="noopener noreferrer">Bài 7.HashSet<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


