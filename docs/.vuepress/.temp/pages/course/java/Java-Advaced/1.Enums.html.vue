<template><div><h1 id="enums-muc-luc" tabindex="-1"><a class="header-anchor" href="#enums-muc-luc" aria-hidden="true">#</a> Enums--------------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<h2 id="_1-gioi-thieu" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu" aria-hidden="true">#</a> 1. Giới thiệu</h2>
<p><code v-pre>emum</code> (<em>enumerations</em>) : là một <code v-pre>class</code> <strong>đặc biệt</strong> đại diện cho một nhóm các <strong>hằng số</strong> (<code v-pre>constants</code>) : <em>là những biến không đổi, như sử dụng <code v-pre>final</code></em></p>
<p>Ta sử dụng từ khoá <code v-pre>enum</code> như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">enum</span> <span class="token class-name">Level</span><span class="token punctuation">{</span>
    <span class="token constant">LOW</span><span class="token punctuation">,</span>
    <span class="token constant">MEDIUM</span><span class="token punctuation">,</span>
    <span class="token constant">HIGH</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>⚠️ Phân tách các <strong>hàng số</strong> bên trong bằng dấu <code v-pre>;</code></p>
<p>⚠️ Các <strong>hằng số</strong> phải được <strong>viết HOA</strong> toàn bộ</p>
</blockquote>
<p>Sử dụng chúng bằng cách <code v-pre>.</code> như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Level</span> myVar <span class="token operator">=</span> <span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">MEDIUM</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="_2-su-dung" tabindex="-1"><a class="header-anchor" href="#_2-su-dung" aria-hidden="true">#</a> 2. Sử dụng</h2>
<p>Ta có thể sử dụng <code v-pre>emum</code> bên trong các <code v-pre>Class</code>, <em>câu điều kiện</em>, <em>vòng lặp</em></p>
<h3 id="cu-the-ve-emum" tabindex="-1"><a class="header-anchor" href="#cu-the-ve-emum" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-05-59-Know How.png" alt="ithubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png"> Cụ thể về <code v-pre>emum</code>:</h3>
<details>
<summary><b>☲ Enum trong Class</b></summary>
<br>
<p>Bạn có thể sử dụng <code v-pre>enum</code> bên trong một <code v-pre>class</code> như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">enum</span> <span class="token class-name">HocLuc</span><span class="token punctuation">{</span>
        <span class="token constant">YEU</span><span class="token punctuation">,</span>
        <span class="token constant">TRUNGBINH</span><span class="token punctuation">,</span>
        <span class="token constant">GIOI</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Level</span> xepLoai <span class="token operator">=</span> <span class="token class-name">HocLuc</span><span class="token punctuation">.</span><span class="token constant">TRUNGBINH</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>xepLoai<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : TRUNGBINH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details>
<summary><b>☲ Enum trong câu điều kiện Switch</b></summary>
<br>
<p><code v-pre>Enum</code> thường được sử dụng trong câu điều kiện <code v-pre>Switch</code> để kiểm tra giá trị tương đương, như sau:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">enum</span> <span class="token class-name">HocLuc</span><span class="token punctuation">{</span>
    <span class="token constant">YEU</span><span class="token punctuation">,</span>
    <span class="token constant">TRUNGBINH</span><span class="token punctuation">,</span>
    <span class="token constant">GIOI</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Level</span> xepLoai <span class="token operator">=</span> <span class="token class-name">HocLuc</span><span class="token punctuation">.</span><span class="token constant">TRUNGBINH</span><span class="token punctuation">;</span>

        <span class="token keyword">switch</span><span class="token punctuation">(</span>xepLoai<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token constant">YEU</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Xếp loại yếu"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token constant">TRUNGBINH</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Xếp loại trung bình"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token constant">GIOI</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Xếp loại giỏi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : Xếp loại trung bình</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details>
<summary><b>☲ Enum trong vòng lặp</b></summary>
<br>
<p><code v-pre>enum</code> có phương thức <code v-pre>values()</code>, nó sẽ trả về mạng các hằng số <code v-pre>enum</code>, như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
    <span class="token keyword">enum</span> <span class="token class-name">HocLuc</span><span class="token punctuation">{</span>
        <span class="token constant">YEU</span><span class="token punctuation">,</span>
        <span class="token constant">TRUNGBINH</span><span class="token punctuation">,</span>
        <span class="token constant">GIOI</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">HocLuc</span> xepLoai <span class="token operator">:</span> <span class="token class-name">HocLuc</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>xepLoai<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* YEU
   TRUNGBINH
   GIOI      */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>💡 Có thể dùng vòng lặp trên để duyệt ra các hằng số trong <code v-pre>enum</code></p>
</blockquote>
</details>
<br>
<h3 id="su-khac-nhau-giua-enums-va-classes-la-gi" tabindex="-1"><a class="header-anchor" href="#su-khac-nhau-giua-enums-va-classes-la-gi" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-14-12-Language Learning.png" alt="Language Learningpng"> Sự khác nhau giữa <code v-pre>Enums</code> và <code v-pre>Classes</code> là gì ?</h3>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</summary>
<br>
<ul>
<li>
<p><code v-pre>enum</code> và <code v-pre>class</code> đều có thể chứa các <code v-pre>attributes</code> và <code v-pre>methods</code>. Nhưng sự khác nhau giữ chúng nằm ở <code v-pre>enum</code> là <code v-pre>public</code>, <code v-pre>static</code>, <code v-pre>final</code> (<em>không thể thay đổi</em>).</p>
</li>
<li>
<p><code v-pre>enum</code> không thể tạo <code v-pre>Object</code> và nó không thể <code v-pre>extends</code> cho các <code v-pre>class</code> khác. (<em>nhưng nó có thể <code v-pre>implement</code> cho interface</em>).</p>
</li>
</ul>
</details>
<blockquote>
<p>🚀 Sử dụng <code v-pre>enum</code> cho những giá trị mà bạn cho rằng nó không thể thay đổi như : <em>ngày/tháng/năm,hằng số...</em></p>
</blockquote>
<table>
<thead>
<tr>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20Advaced/2.Inputs.md" target="_blank" rel="noopener noreferrer">Bài 2.Inputs<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


