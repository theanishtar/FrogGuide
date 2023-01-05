<template><div><h1 id="cu-phap-muc-luc" tabindex="-1"><a class="header-anchor" href="#cu-phap-muc-luc" aria-hidden="true">#</a> Cú pháp---------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<p>Như ở bài trước ta đã tạo một project <code v-pre>Java</code>, với file <code v-pre>Demo.java</code> sau đây :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>🔥 Bạn có thể thấy mỗi dòng code trong <code v-pre>Java</code> đều phải nằm trong <code v-pre>class</code>, như ví dụ trên là <code v-pre>class Demo</code>,  và có những quy tắc sau :</p>
<ul>
<li>Tên <code v-pre>class</code> phải trùng với tên <code v-pre>file.java</code></li>
<li>Tên <code v-pre>class</code> phải viết hoa chữ cái đầu, như <code v-pre>Demo</code></li>
</ul>
</blockquote>
<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-16-14-49-javaoop-2.png" alt="javaoop-2.png" width="410">
<hr>
<h2 id="phuong-thuc-main" tabindex="-1"><a class="header-anchor" href="#phuong-thuc-main" aria-hidden="true">#</a> Phương thức <code v-pre>main</code></h2>
<p>Đây là <strong>phương thức</strong> bắt buộc mà bạn thấy trong mọi chương trình <code v-pre>Java</code> :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>🧨 Bất kỳ code nào trong <code v-pre>main</code> đều được thực thi, bạn không cần phải hiểu <code v-pre>String[] args</code> nghĩa là gì, hay <code v-pre>static</code> là sao, bạn chỉ cần nhớ :</p>
<ul>
<li><code v-pre>main</code> là hàm chính trong chương trình.</li>
<li>Tên <code v-pre>class</code> phải trùng với tên <code v-pre>file.java</code> của bạn.</li>
</ul>
<p>⚠️ Hãy luôn nhớ kết thúc mỗi lệnh phải có dấu <code v-pre>;</code> nhé</p>
</blockquote>
<hr>
<h2 id="ham-in-ra-man-hinh" tabindex="-1"><a class="header-anchor" href="#ham-in-ra-man-hinh" aria-hidden="true">#</a> Hàm in ra màn hình</h2>
<ul>
<li><code v-pre>System.out.print</code> : in ra màn hình</li>
<li><code v-pre>System.out.println</code> : in ra màn hình + xuống dòng</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"In xuống dòng nè"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Này là in không xuống dòng"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Kết quả"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-16-56-46-java-oop_4.png" title="" alt="java-oop_4.png" width="356">
<blockquote>
<p>🚀 Hãy bật <code v-pre>UTF-8</code> nếu bạn không gõ được <strong>Tiếng Việt</strong>, nhưng <code v-pre>Vscode</code> của mình không cần đâu !!!</p>
</blockquote>
<hr>
<h2 id="chu-thich" tabindex="-1"><a class="header-anchor" href="#chu-thich" aria-hidden="true">#</a> Chú thích</h2>
<p>Chú thích là những dòng <em>comment</em> trong code sẽ không được thực thi, mà nó chỉ dành cho người dùng đọc và hiểu.</p>
<ul>
<li><code v-pre>//</code> : chủ thích một dòng</li>
<li><code v-pre>/**/</code> : chú thích nhiều dòng</li>
</ul>
<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-16-24-19-javaoop-3.png" alt="javaoop-3.png" width="578">
<hr>
<h2 id="compile-file-class" tabindex="-1"><a class="header-anchor" href="#compile-file-class" aria-hidden="true">#</a> Compile file <code v-pre>.class</code></h2>
<p>Trong bài <a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/1.GioiThieu.md" target="_blank" rel="noopener noreferrer">Bài 1. Giới thiệu<ExternalLinkIcon/></a>, mình đã giới thiệu về sơ đồ sau :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-17-05-05-30-16-03-57-04-19-39-12-Ảnh chụp Màn hình 2020-08-04 lúc 19.39.02.png" alt="30-16-03-57-04-19-39-12-Ảnh chụp Màn hình 2020-08-04 lúc 19.39.02.png"></p>
<blockquote>
<p>🤔 Như bạn thấy thì <code v-pre>Java Code</code> ==&gt; <code v-pre>Mã trung gian</code> ==&gt; <code v-pre>Native code</code> (<em>tức là nhị phân</em>).</p>
<p>Vậy mã trung gian đó gọi là <code v-pre>bytecode</code>  có đuôi <code v-pre>.class</code>, khó hiểu đúng không, hãy làm thủ công từng bước nhé.</p>
</blockquote>
<p>Cho file <code v-pre>Demo.java</code> như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Kiệt đẹp trai"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>B1</strong> : Mở <code v-pre>CMD</code> hoặc <code v-pre>Terminal</code> và gõ <code v-pre>javac + đường dẫn đến file.java</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-17-16-10-2021-01-30 17.14.34.gif" alt="2021-01-30 17.14.34.gif"></p>
<blockquote>
<p>Và nó sẽ tạo cho bạn một file <code v-pre>Demo.class</code> trùng tên với tên <strong>file</strong> của bạn :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-17-17-04-Ảnh chụp Màn hình 2021-01-30 lúc 17.16.52.png" alt="Ảnh chụp Màn hình 2021-01-30 lúc 17.16.52.png"></p>
</blockquote>
</li>
<li>
<p><strong>B2</strong> : gõ <code v-pre>java + đường dẫn file</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-17-18-16-2021-01-30 17.14.34.gif" alt="2021-01-30 17.14.34.gif"></p>
<blockquote>
<p>🤪 Vậy là bạn đã chạy code một cách <strong>thủ công</strong>.</p>
</blockquote>
</li>
</ul>
<p>Bạn hiểu chứ, ta vậy thì ta chỉ cần lấy file <code v-pre>Demo.class</code> đem qua bất kỳ hệ điều hành nào chỉ cần chạy <code v-pre>java Demo</code> là chạy được.</p>
<table>
<thead>
<tr>
<th>🔙  <a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/2.CaiDat.md" target="_blank" rel="noopener noreferrer">Bài 2. Cài đặt<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/4.Bien.md" target="_blank" rel="noopener noreferrer">Bài 4. Biến<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


