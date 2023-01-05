<template><div><h1 id="date-muc-luc" tabindex="-1"><a class="header-anchor" href="#date-muc-luc" aria-hidden="true">#</a> Date--------------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<h2 id="_1-gioi-thieu" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu" aria-hidden="true">#</a> 1. Giới thiệu</h2>
<p><code v-pre>Java</code> không có lớp xứ lý <code v-pre>Date</code>, nhưng chúng ta có thể <code v-pre>import</code> gói <code v-pre>java.time</code> , bạn có thể tham khảo <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Date.html" target="_blank" rel="noopener noreferrer">tại đây<ExternalLinkIcon/></a></p>
<blockquote>
<p>Có rất nhiều <code v-pre>class</code> xử lý <strong>thời gian</strong> nhưng đây là một số lớp phổ biến :</p>
</blockquote>
<table>
<thead>
<tr>
<th>Class</th>
<th>Mô tả</th>
<th>Ký hiệu</th>
</tr>
</thead>
<tbody>
<tr>
<td>LocalDate</td>
<td>Đại diện cho ngày (<em>năm,tháng, ngày</em>)</td>
<td>yyyy-MM-dd</td>
</tr>
<tr>
<td>LocalTime</td>
<td>Đại diện cho <strong>thời gian</strong> (<em>giờ,phút,giây, nanogiây</em>)</td>
<td>HH-mm-ss-ns</td>
</tr>
<tr>
<td>LocalDateTime</td>
<td>Đại diện cho cả <strong>ngày</strong> và <strong>thời gian</strong></td>
<td>yyyy-MM-dd-HH-mm-ss-ns</td>
</tr>
<tr>
<td>DateTimeFormatter</td>
<td>Dịnh dạng hiển thị và phân tích cú pháp ngày-giờ</td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="_2-su-dung" tabindex="-1"><a class="header-anchor" href="#_2-su-dung" aria-hidden="true">#</a> 2. Sử dụng</h2>
<h3 id="hien-thi-date-hien-tai-localdate" tabindex="-1"><a class="header-anchor" href="#hien-thi-date-hien-tai-localdate" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-15-49-25-Class Timetable.png" alt="Class Timetable.png"> Hiển thị Date hiện tại (<code v-pre>LocalDate</code>)</h3>
<p>Sử dụng gói <code v-pre>java.time.LocalDate</code> và phương thức <code v-pre>now()</code> như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">LocalDate</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LocalDate</span> date <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//Output : 2021-02-08</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>⚠️ Đầu ra dạng <em>năm-tháng-ngày</em> (yyyy<code v-pre>-</code>MM<code v-pre>-</code>dd)</p>
</blockquote>
<br>
<h3 id="hien-thi-time-hien-tai-localtime" tabindex="-1"><a class="header-anchor" href="#hien-thi-time-hien-tai-localtime" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-15-49-25-Class Timetable.png" alt="Class Timetable.png"> Hiển thị Time hiện tại (<code v-pre>LocalTime</code>)</h3>
<p>Sử dụng gói <code v-pre>java.time.LocalTime</code> và phương thức <code v-pre>now()</code> như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">LocalTime</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LocalTime</span> date <span class="token operator">=</span> <span class="token class-name">LocalTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//Output : 15:53:38.862060</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>⚠️ Đầu ra dạng <em>giờ:phút:giây.nano_giây</em> (HH<code v-pre>:</code>mm<code v-pre>:</code>ss<code v-pre>.</code>ns)</p>
</blockquote>
<br>
<h3 id="hien-thi-date-va-time-localdatetime" tabindex="-1"><a class="header-anchor" href="#hien-thi-date-va-time-localdatetime" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-15-49-25-Class Timetable.png" alt="Class Timetablepng"> Hiển thị Date và Time (<code v-pre>LocalDateTime</code>)</h3>
<p>Sử dụng gói <code v-pre>java.time.LocalDateTime</code> và phương thức <code v-pre>now()</code> như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">LocalDateTime</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LocalDateTime</span> date <span class="token operator">=</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Output : 2021-02-08T15:57:26.709337</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>⚠️ Đầu ra dạng <em>năm-tháng-nămTgiờ:phút:giây.nano_giây</em> (yyyy<code v-pre>-</code>MM<code v-pre>-</code>dd<code v-pre>T</code>HH<code v-pre>:</code>mm<code v-pre>:</code>ss<code v-pre>.</code>ns)</p>
<p>⚠️ Chữ <code v-pre>T</code> ngăn cách giữa <code v-pre>date</code> và <code v-pre>time</code></p>
</blockquote>
<h3 id="đinh-dang-date-va-time" tabindex="-1"><a class="header-anchor" href="#đinh-dang-date-va-time" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-15-49-25-Class Timetable.png" alt="Class Timetablepng"> Định dạng Date và Time</h3>
<p>Như bạn đã thấy chữ <code v-pre>T</code> ngăn cách giữa <code v-pre>date</code> và <code v-pre>time</code>, bạn có thể sử dụng gói <code v-pre>java.time.format.DateTimeFormatter</code> cùng với phương thức <code v-pre>ofPattern()</code> để dịnh dạng lại cú pháp mà bạn thích, như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">LocalDateTime</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span>format<span class="token punctuation">.</span></span><span class="token class-name">DateTimeFormatter</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LocalDateTime</span> date <span class="token operator">=</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Trước khi định dạng : "</span> <span class="token operator">+</span> date<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">DateTimeFormatter</span> formatDate <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">"dd-MM-yyyy HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> formattedDate <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>formatDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Sau khi định dạng : "</span> <span class="token operator">+</span> formattedDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Trước khi định dạng : 2021-02-08T16:06:36.423562
   Sau khi định dạng : 08-02-2021 16:06:36          */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Bạn có thể tham khảo <code v-pre>ofPattern()</code> theo các mẫu dưới đây :</p>
<table>
<thead>
<tr>
<th>Mẫu</th>
<th>Ví dụ</th>
</tr>
</thead>
<tbody>
<tr>
<td>yyyy-MM-dd</td>
<td>&quot;2021-02-08&quot;</td>
</tr>
<tr>
<td>dd-MMM-yyyy</td>
<td>&quot;08-Feb-2021&quot;</td>
</tr>
<tr>
<td>E, MMM dd yyy</td>
<td>&quot;Mon, Feb 08 2021&quot;</td>
</tr>
</tbody>
</table>
</blockquote>
<table>
<thead>
<tr>
<th>🔙  <a href="https://github.com/Zenfection/Java/blob/master/Java%20Advaced/2.Inputs.md" target="_blank" rel="noopener noreferrer">Bài 2.Inputs<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20Advaced/4.ArrayList&amp;LinkedList.md" target="_blank" rel="noopener noreferrer">Bài 4.ArrayList và LinkedList<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


