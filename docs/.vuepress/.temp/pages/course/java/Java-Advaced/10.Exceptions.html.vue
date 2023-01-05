<template><div><h1 id="exceltions-muc-luc" tabindex="-1"><a class="header-anchor" href="#exceltions-muc-luc" aria-hidden="true">#</a> Exceltions--------------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<h2 id="_1-gioi-thieu" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu" aria-hidden="true">#</a> 1. Giới thiệu</h2>
<p>Trong <code v-pre>Java</code>, chúng ta sẽ gặp nhiều lỗi do <code v-pre>logic</code>, những lỗi mà không lường trước được.</p>
<blockquote>
<p>Khi xảy ra lỗi, <code v-pre>Java</code> sẽ dừng và thông báo lỗi, <code v-pre>Exception</code> khiến cho <code v-pre>Java</code> sẽ chạy tiếp và quăng ra lỗi</p>
</blockquote>
<h3 id="lenh-try-va-catch" tabindex="-1"><a class="header-anchor" href="#lenh-try-va-catch" aria-hidden="true">#</a> Lệnh <code v-pre>try</code> và <code v-pre>catch</code></h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">try</span><span class="token punctuation">{</span>
    <span class="token comment">//Khối code cần thử</span>
<span class="token punctuation">}</span>
<span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// Khối code xử lý lỗi</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>💡 <code v-pre>try</code> cho phép bạn xác định <code v-pre>code</code> cần thử trước khi thực thi</p>
<p>💡 <code v-pre>catch</code> cho phép bạn xác định <code v-pre>code</code> thực thi, nếu xảy ra lỗi trong <code v-pre>try</code></p>
<p>🔥 <code v-pre>try</code> và <code v-pre>catch</code> đi chung với nhau</p>
</blockquote>
<h2 id="_2-su-dung" tabindex="-1"><a class="header-anchor" href="#_2-su-dung" aria-hidden="true">#</a> 2. Sử dụng</h2>
<p>Ví dụ ta có đoạn code sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span> <span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> myNumbers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myNumbers<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Lỗi</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/16-16-50-24-Ảnh chụp Màn hình 2021-02-16 lúc 16.50.15.png" alt="Ảnh chụp Màn hình 2021-02-16 lúc 16.50.15.png"></p>
<blockquote>
<p>Ta có thể sử dụng <code v-pre>try..catch</code> để xuất ra code mà ta muốn và thực thi môt số lệnh xứ lý :</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span> <span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> myNumbers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myNumbers<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Code sai rồi."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//Output : code sai rồi !!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="su-dung-finally-du-ban-code-sai-hay-đung-thi-no-van-thuc-thi-nhu-sau" tabindex="-1"><a class="header-anchor" href="#su-dung-finally-du-ban-code-sai-hay-đung-thi-no-van-thuc-thi-nhu-sau" aria-hidden="true">#</a> Sử dụng <code v-pre>finally</code> dù bạn code sai hay đúng thì nó vẫn thực thi, như sau :</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> myNumbers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myNumbers<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Code sai rồi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Sau khi try..catch kết thúc là in ra, dù đúng hay sai"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//Output : Code sai rồi</span>
<span class="token comment">// Sau khi try..catch kết thúc là in ra, dù đúng hay sai</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="su-dung-throw-đe-tao-mot-loi-tuy-chinh" tabindex="-1"><a class="header-anchor" href="#su-dung-throw-đe-tao-mot-loi-tuy-chinh" aria-hidden="true">#</a> Sử dụng <code v-pre>throw</code> để tạo một lỗi tuỳ chỉnh</h3>
<p><code v-pre>throw</code> được sử dụng chung với <code v-pre>exception</code>, có rất nhiều kiểu sai trong <code v-pre>Java</code> như sau:</p>
<table>
<thead>
<tr>
<th>Kiểu ngoại lệ</th>
<th>Mô tả</th>
</tr>
</thead>
<tbody>
<tr>
<td>ArithmeticException</td>
<td>số học</td>
</tr>
<tr>
<td>FileNotFoundException</td>
<td>không tìm ra file</td>
</tr>
<tr>
<td>ArrayIndexOutOfBoundsException</td>
<td>chỉ mục không tồn tại trong Array</td>
</tr>
<tr>
<td>SecurityException</td>
<td>bảo mật</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">checkAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ArithmeticException</span><span class="token punctuation">(</span><span class="token string">"Bạn không đủ tuổi để xem thứ này"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token class-name">Sysout</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Bạn đã đủ tuổi, xem vui vẻ nhé !!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">checkAge</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//Output bên dưới</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Exception <span class="token keyword">in</span> thread <span class="token string">"main"</span> java.lang.ArithmeticException: Bạn không đủ tuổi để xem thứ này.
        at Main.checkAge<span class="token punctuation">(</span>Main.java:4<span class="token punctuation">)</span>
        at Main.main<span class="token punctuation">(</span>Main.java:12<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


