<template><div><h1 id="regex-muc-luc" tabindex="-1"><a class="header-anchor" href="#regex-muc-luc" aria-hidden="true">#</a> RegEx--------------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<h2 id="_1-gioi-thieu" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu" aria-hidden="true">#</a> 1. Giới thiệu</h2>
<p><code v-pre>RegEx</code> là viết tắt của <code v-pre>Regular Expression</code> (<em>biểu thức chính quy</em>) là tập hợp một chuỗi ký tự thành một <strong>mẫu tìm kiếm</strong>.</p>
<blockquote>
<p>💡 Khi bạn muốn tìm kiếm tất cả file bắt đầu từ <code v-pre>e</code> ⇨ <code v-pre>e*</code> (<em>sẽ được học bên dưới</em>)</p>
<p>🔥 Được sử dụng nhiều trong việc <strong>tìm kiếm</strong> và <strong>thay thế</strong> văn bản</p>
</blockquote>
<p>Sử dụng gói <code v-pre>java.util.regex</code> để sử dụng <em>biểu thức chính quy</em>, bao gồm :</p>
<ul>
<li>Lớp <code v-pre>Pattern</code> : <em>Xác định một mẫu (hay sử dụng để tìm kiếm)</em></li>
<li>Lớp <code v-pre>Matcher</code> : <em>Dùng để tìm kiếm mẫu</em></li>
<li>Lớp <code v-pre>PatternSyntaxException</code> : <em>Chỉ ra mẫu lỗi cú pháp biểu thức chính quy</em></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span></span><span class="token class-name">Matcher</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span></span><span class="token class-name">Pattern</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Pattern</span> pattern <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">"kiet"</span><span class="token punctuation">,</span><span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token constant">CASE_INSENSITIVE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Matcher</span> matcher <span class="token operator">=</span> pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span><span class="token string">"kietdeptrai"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>matchFound<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Tìm thấy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Không Tìm thấy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//Output : Tìm thấy</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>🔥 Đầu tiên ta tạo từ khoá tìm kiếm là <code v-pre>kiet</code> bằng <code v-pre>pattern</code> bằng cách sử dụng phương thức <code v-pre>Pattern.compile()</code> :</p>
<ul>
<li>Đối số <strong>1</strong> là từ khoá tìm kiếm</li>
<li>Đối số <strong>2</strong> là <code v-pre>flag</code> tìm kiếm, ví dụ trên : <code v-pre>CASE_INSENSITIVE</code> <em>là không phân biệt hoa thường</em></li>
</ul>
</blockquote>
<blockquote>
<p>🔥 Phương thức <code v-pre>matcher()</code> sử dụng tìm kiếm mẫu trong chuỗi ⇨ trả về một đối tượng <code v-pre>Matcher</code> chứa thông tin về tìm kiếm đã thực hiện</p>
</blockquote>
<blockquote>
<p>🔥 Phương thức <code v-pre>find()</code> trả về <code v-pre>true</code> nếu tìm thấy, <code v-pre>false</code> nếu không tìm thấy</p>
</blockquote>
<hr>
<h2 id="_2-su-dung" tabindex="-1"><a class="header-anchor" href="#_2-su-dung" aria-hidden="true">#</a> 2. Sử dụng</h2>
<p>Sử dụng <code v-pre>flags</code> trong phương thức <code v-pre>compile()</code> để chỉ định cách tìm kiếm, phổ biến như sau :</p>
<ul>
<li><code v-pre>Pattern.CASE_INSENSITIVE</code> : <em>Trường hợp các chữ cái sẽ bỏ qua (không phân biệt hoa thường)</em></li>
<li><code v-pre>Pattern.LITERAL</code> : <em>Các ký tự đặc biệt sẽ được coi như các ký tự bình thường khi tìm kiếm</em></li>
<li><code v-pre>Pattern.UNICODE_CASE</code> : <em>sử dụng cùng với</em> <code v-pre>CASE_INSENSITIVE</code> bỏ qua các trường hợp chữ cái bên ngoài <strong>bảng chữ cái tiếng Anh</strong></li>
</ul>
<h3 id="mau-bieu-thuc-chinh-quy" tabindex="-1"><a class="header-anchor" href="#mau-bieu-thuc-chinh-quy" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-17-36-14-Professor Male.png" alt="Professor Malepng"> Mẫu Biểu thức chính quy</h3>
<p>Đối số thứ <strong>1</strong> của phương thức <code v-pre>Pattern.compile()</code> là mẫu, và bạn có thể áp dụng sau đây :</p>
<table>
<thead>
<tr>
<th>Biểu thức</th>
<th>Mô tả</th>
</tr>
</thead>
<tbody>
<tr>
<td>[abc]</td>
<td>Tìm tất cả ký tựcó chứa abc ở giữa</td>
</tr>
<tr>
<td>[^abc]</td>
<td>Tìm tất cả ký tự không có abc nằm giữa</td>
</tr>
<tr>
<td>[0-9]</td>
<td>Tìm tất cả ký tự từ 0 tới 9</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:left">Metacharacters</th>
<th>Mô tả</th>
<th>Ví dụ</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"></td>
<td></td>
<td>Tìm phù hợp cho bất kỳ các mẫu cách nhau bởi <code v-pre>|</code></td>
</tr>
<tr>
<td style="text-align:left">.</td>
<td>Bất kỳ ký tự đơn nào</td>
<td>cat.<br>Hello cat123 ⇨ <code v-pre>true</code></td>
</tr>
<tr>
<td style="text-align:left">^</td>
<td>Tìm mẫu bắt đầu bằng <code v-pre>^</code></td>
<td>^cat <br>cat Hello World ⇨ <code v-pre>true</code></td>
</tr>
<tr>
<td style="text-align:left">$</td>
<td>Tìm mẫu cuối bằng <code v-pre>$</code></td>
<td>cat$ <br>Hello World cat ⇨ <code v-pre>true</code></td>
</tr>
<tr>
<td style="text-align:left">\d<br>\D</td>
<td>So khớp ký tự chữ số<br>So khớp ký tự <strong>không phải</strong> là chữ số</td>
<td>^cat\\d<br>cat123 Hello World ⇨ <code v-pre>true</code><br><br>^cat\\D<br>catHello World ⇨ <code v-pre>true</code></td>
</tr>
<tr>
<td style="text-align:left">\s<br>\S</td>
<td>So khớp bất kỳ ký tự khoảng trống<br>So khớp bất kỳ ký tự <strong>không phải</strong> khoảng trắng</td>
<td>^cat\\s <br>cat Hello World ⇨ <code v-pre>true</code><br><br>^cat\\S<br>catHello World ⇨ <code v-pre>true</code></td>
</tr>
<tr>
<td style="text-align:left">\b</td>
<td>Ranh giới của một từ</td>
<td></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Quantifier</th>
<th>Mô tả</th>
</tr>
</thead>
<tbody>
<tr>
<td>n+</td>
<td>So khớp chuỗi n xuất hiện 1 lần</td>
</tr>
<tr>
<td>n*</td>
<td></td>
</tr>
<tr>
<td>n?</td>
<td></td>
</tr>
<tr>
<td>n{x}</td>
<td></td>
</tr>
<tr>
<td>n{x,y}</td>
<td></td>
</tr>
<tr>
<td>n{x,}</td>
<td></td>
</tr>
</tbody>
</table>
</div></template>


