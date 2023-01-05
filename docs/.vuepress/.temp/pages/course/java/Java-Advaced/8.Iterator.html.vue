<template><div><h1 id="iterator-muc-luc" tabindex="-1"><a class="header-anchor" href="#iterator-muc-luc" aria-hidden="true">#</a> Iterator--------------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<h2 id="_1-gioi-thieu" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu" aria-hidden="true">#</a> 1. Giới thiệu</h2>
<p><code v-pre>Iterator</code> là một <code v-pre>Object</code> sử dụng để lặp qua các <code v-pre>collections</code> như <code v-pre>ArrayList</code> và <code v-pre>HashSet</code>.</p>
<p>Sử dụng <code v-pre>Iterator</code> từ gói <code v-pre>java.util</code> như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Iterator</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> animals <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        animals<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"mèo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        animals<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"chó"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        animals<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"heo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        animals<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"rắn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> it <span class="token operator">=</span> animals<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//Output : mèo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_2-su-dung" tabindex="-1"><a class="header-anchor" href="#_2-su-dung" aria-hidden="true">#</a> 2. Sử dụng</h2>
<table>
<thead>
<tr>
<th>Phương thức</th>
<th>Đầu ra</th>
<th>mô tả</th>
</tr>
</thead>
<tbody>
<tr>
<td>next()</td>
<td></td>
<td>trả về phần tử tiếp theo</td>
</tr>
<tr>
<td>hasNext()</td>
<td>boolean</td>
<td>Trả về true nếu phép lặp còn phần tử</td>
</tr>
<tr>
<td>remove()</td>
<td></td>
<td>Xoá các mục ra khỏi khi lặp qua</td>
</tr>
</tbody>
</table>
<h3 id="lap-qua-mot-collection" tabindex="-1"><a class="header-anchor" href="#lap-qua-mot-collection" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-17-36-14-Professor Male.png" alt="Professor Malepng"> Lặp qua một <code v-pre>collection</code></h3>
<p>Bạn có thể dùng <code v-pre>hasNext()</code> kết hợp với <code v-pre>next()</code> như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">while</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//Output : chó mèo heo rắn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>💡 Sử dụng vòng lặp trên để lặp qua các phần tử trong <code v-pre>Collections</code></p>
</blockquote>
<h3 id="xoa-phan-tu-ra-khoi-colections" tabindex="-1"><a class="header-anchor" href="#xoa-phan-tu-ra-khoi-colections" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-17-36-14-Professor Male.png" alt="Professor Malepng"> Xoá phán tử ra khỏi <code v-pre>Colections</code></h3>
<p>Bạn có thể dùng <code v-pre>remove()</code> để xoá phần tử khỏi <code v-pre>Collections</code> theo điều kiện :</p>
<p>Cho trước <code v-pre>ArrayList numbers = [12,8,2,23]</code> (<em>khai báo chuẩn <code v-pre>ArrayList</code></em>)</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">while</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Integer</span> index <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        it<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//Output : [12,23]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>🚀 Không nên dùng vòng <code v-pre>for</code> hay <code v-pre>for-each</code> để xoá phần tử trong các <code v-pre>Colections</code>, mà hãy dùng <code v-pre>Iterator</code></p>
</blockquote>
<table>
<thead>
<tr>
<th>🔙  <a href="https://github.com/Zenfection/Java/blob/master/Java%20Advaced/7.HashSet.md" target="_blank" rel="noopener noreferrer">Bài 7.HashSet<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20Advaced/9.WrapperClases.md" target="_blank" rel="noopener noreferrer">Bài 9.Wrapper Class<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


