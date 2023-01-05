<template><div><h1 id="hashset-muc-luc" tabindex="-1"><a class="header-anchor" href="#hashset-muc-luc" aria-hidden="true">#</a> HashSet--------------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<h2 id="_1-gioi-thieu" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu" aria-hidden="true">#</a> 1. Giới thiệu</h2>
<p><code v-pre>HashSet</code> là một tập hợp với các phần tử là duy nhất.</p>
<blockquote>
<p>Nếu <code v-pre>ArrayList</code> ta dùng phương thức<code v-pre>add()</code> thêm 2 con mèo, thì nó sẽ có 2 con mèo,</p>
<p>Còn <code v-pre>HashSet</code> sẽ chỉ có một con mèo, vì nó không cho phép trùng nhau.</p>
</blockquote>
<p>Ta sử dụng <code v-pre>HashSet</code> trong gói <code v-pre>java.util.HashSet</code> như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashSet</span></span><span class="token punctuation">;</span> 

<span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> animals <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_2-su-dung" tabindex="-1"><a class="header-anchor" href="#_2-su-dung" aria-hidden="true">#</a> 2. Sử dụng</h2>
<p>Có các phương thức phổ biến sau :</p>
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
<td>add(&quot;x&quot;)</td>
<td>Thêm phần tử</td>
<td><code v-pre>animals.add(&quot;Mèo&quot;)</code> <br><code v-pre>animals.add(&quot;Mèo&quot;)</code><br>⇨ Mèo</td>
</tr>
<tr>
<td>contains(&quot;x&quot;)</td>
<td>Kiểm tra <code v-pre>HashMap</code> có chứa phần tử x không</td>
<td><code v-pre>animals.contains(&quot;Mèo&quot;)</code><br>⇨ true<br>⚠️ Trả về kiểu <code v-pre>boolean</code></td>
</tr>
<tr>
<td>remove(&quot;x&quot;)</td>
<td>Xoá phần tử</td>
<td><code v-pre>animals.remove(&quot;Mèo&quot;)</code></td>
</tr>
<tr>
<td>clear()</td>
<td>Xoá mọi phần tử</td>
<td><code v-pre>animals.clear()</code></td>
</tr>
<tr>
<td>size()</td>
<td>Trả về số lượng phần tử hiện có</td>
<td><code v-pre>animals.size()</code> <br>⇨ 3</td>
</tr>
</tbody>
</table>
<h3 id="duyet-qua-mot-hashset" tabindex="-1"><a class="header-anchor" href="#duyet-qua-mot-hashset" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-17-36-14-Professor Male.png" alt="Professor Malepng"> Duyệt qua Một <code v-pre>HashSet</code></h3>
<p>Sử dụng vòng <code v-pre>for..Each</code> như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> i <span class="token operator">:</span> animals<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>🔙  <a href="https://github.com/Zenfection/Java/blob/master/Java%20Advaced/6.HashMap.md" target="_blank" rel="noopener noreferrer">Bài 6.HashMap<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20Advaced/8.Iterator.md" target="_blank" rel="noopener noreferrer">Bài 8.Iterator<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


