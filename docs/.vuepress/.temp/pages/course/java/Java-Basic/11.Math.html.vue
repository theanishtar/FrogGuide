<template><div><h1 id="math-muc-luc" tabindex="-1"><a class="header-anchor" href="#math-muc-luc" aria-hidden="true">#</a> Math------------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<p>Các phương thức <code v-pre>method</code> phổ biến trong các vấn đề toán :</p>
<ul>
<li><code v-pre>max(a,b)</code> : <em>trả về số lớn nhất</em></li>
<li><code v-pre>min(a,b)</code> : <em>trả về số nhỏ nhất</em></li>
<li><code v-pre>sqrt(x)</code> : <em>căn bậc 2</em></li>
<li><code v-pre>pow(x,y)</code> : <em>số mũ</em></li>
<li><code v-pre>abs(x)</code> : <em>giá trị tuyệt đối</em> :</li>
<li><code v-pre>random()</code> : <em>trả về số ngẫu nhiên</em></li>
</ul>
<hr>
<h2 id="_1-phuong-thuc-math-pho-bien" tabindex="-1"><a class="header-anchor" href="#_1-phuong-thuc-math-pho-bien" aria-hidden="true">#</a> 1. Phương thức <code v-pre>Math</code> phổ biến</h2>
<p><strong>Cách sử dụng phương thức</strong>  ⇨ dùng dấu <code v-pre>.</code> sau một <code v-pre>Object</code> (<em>Object là Math</em>)</p>
<ul>
<li>
<p>Sử dụng <code v-pre>max(a,b)</code> để trả về số lớn nhất trong <strong>2</strong> số:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//output : 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Sử dụng <code v-pre>min(a,b)</code> để trả về số nhỏ nhất trong 2 số:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//output : 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Sử dụng <code v-pre>sqrt()</code> để tính căn bậc 2 của một số :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//output : 2.23606797749979</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Sử dụng <code v-pre>pow()</code> để tính số mũ :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2^3</span>
<span class="token comment">//output : 8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Sử dụng <code v-pre>abs()</code> để trả về giá trị tuyệt đối :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4.56</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//output : 4.56</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Sử dụn <code v-pre>random()</code> để trả về số ngẫu nhiên :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//output : ra số ngẫu nhiên trong [0..1]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>💡 Phương thức <code v-pre>random()</code> trả về số ngẫu nhiên từ <code v-pre>0 tới 1</code></p>
<p>🤔 Vậy nếu bạn muốn trả về số từ <code v-pre>1 tới 100</code> thì sao ?</p>
<details>
<summary>Trả lời</summary>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">double</span> ranNumber <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// trả về số ngẫu nhiên từ (0 tới 99)</span>
<span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>ranNumber <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// cộng thêm 1 và ép về số nguyên</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//xuất x</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</blockquote>
</li>
</ul>
<blockquote>
<p>🧚 Nhiêu đây là đủ rồi, tuy nhiên bạn có thể tham khảo những <code v-pre>Method</code> khác nếu bạn cần dùng tới phía dưới đây.</p>
</blockquote>
<hr>
<h2 id="_2-tong-hop-cac-phuong-thuc-math" tabindex="-1"><a class="header-anchor" href="#_2-tong-hop-cac-phuong-thuc-math" aria-hidden="true">#</a> 2. Tổng hợp các phương thức <code v-pre>Math</code></h2>
<table>
<thead>
<tr>
<th>Phương thức</th>
<th>Mô tả</th>
<th>Đầu vào</th>
<th>Ví dụ :</th>
<th>Lưu ý</th>
</tr>
</thead>
<tbody>
<tr>
<td>abs(x)</td>
<td>trả về <code v-pre>giá trị tuyệt đối</code> của <strong>x</strong></td>
<td>double</td>
<td><code v-pre>Math.abs(-4.5)</code>  ⇨ 4.5</td>
<td>🤔 <code v-pre>abs</code> nghĩa là <em>absolute</em></td>
</tr>
<tr>
<td>sin(x)<br>cos(x)<br>tan(x)<br></td>
<td>Trả về <code v-pre>sin</code> của x<br>Trả về <code v-pre>cos</code> của x<br>Trả về <code v-pre>tan</code> của x</td>
<td>double</td>
<td><code v-pre>Math.sin(30)</code> ⇨ -0.988...<br><code v-pre>Math.cos(30)</code> ⇨ 0.154...<br><code v-pre>Math.tan(30)</code> ⇨ -6.405...<br></td>
<td>🚀 tất cả trả về <code v-pre>radian</code></td>
</tr>
<tr>
<td>asin(x)<br>acos(x)<br>atan(x)<br></td>
<td>trả về <code v-pre>arcsin</code> của x<br>trả về <code v-pre>arccos</code> của x<br>trả về <code v-pre>arctan</code> của x</td>
<td>double</td>
<td><code v-pre>Math.asin(0.5)</code> ⇨ 0.523...<br><code v-pre>Math.acos(0.5)</code> ⇨ 1.047...<br><code v-pre>Math.atan(1)</code> ⇨ 0.463...</td>
<td>🚀 tất cả trả về <code v-pre>radian</code><br>⚠️ Giá trị x trong khoảng <code v-pre>(-1,1)</code></td>
</tr>
<tr>
<td>toDegrees(x)<br>toRadians(x)</td>
<td>Chuyển <code v-pre>radian</code> sang <code v-pre>độ</code><br>Chuyển <code v-pre>độ</code> sang <code v-pre>radian</code></td>
<td>double</td>
<td><code v-pre>Math.toDegrees(0.5)</code> ⇨ 28.647...<br><code v-pre>Math.toRadians(30)</code> ⇨ 0.523...</td>
<td></td>
</tr>
<tr>
<td>sqrt(x)<br>cbrt(x)</td>
<td>trả về căn bậc <strong>2</strong><br>trả về căn bậc <strong>3</strong></td>
<td>double</td>
<td><code v-pre>Math.sqrt(4)</code> ⇨ 2<br><code v-pre>Math.cbrt(4)</code> ⇨ 1.587...</td>
<td>🤔 <code v-pre>sqrt</code> nghĩa là <em>square root</em><br>🤔 <code v-pre>cbrt</code> nghĩa là <em>cube root</em></td>
</tr>
<tr>
<td>pow(x,y)<br>hypot(x,y)</td>
<td>trả về <strong>x</strong> mũ <strong>y</strong><br>trả về <strong>căn bậc 2 (x^2 + y^2)</strong></td>
<td>double</td>
<td><code v-pre>Math.pow(2,3)</code> ⇨ 8 <br><code v-pre>Math.hypot(3,5)</code> ⇨ 5.83...</td>
<td>🤔 <code v-pre>pow</code> có thể thay thế <code v-pre>hypot</code></td>
</tr>
<tr>
<td>log(x)<br>log10(x)<br>log1p(x)</td>
<td>trả về <strong>logarit</strong> cơ số <em>e</em> của <strong>x</strong><br>trả về <strong>loragit</strong> cơ số <em>10</em> của <strong>x</strong><br>trả về <strong>logagrit</strong> cơ số <em>e</em> của tổng <strong>1</strong> và <strong>x</strong></td>
<td>double</td>
<td><code v-pre>Math.log(2)</code> ⇨ 0.693...<br><code v-pre>Math.log10(2)</code> ⇨ 0.301...<br><code v-pre>Math.log1p(2)</code> ⇨ 1.098...</td>
<td>🌝 <code v-pre>log1p</code>  tương đướng với <code v-pre>log(x+1)</code></td>
</tr>
<tr>
<td>exp(x)<br>expm1(x)</td>
<td>trả về <strong>e^x</strong><br>trả về <strong>e^x  - 1</strong></td>
<td>double</td>
<td><code v-pre>Math.exp(2)</code> ⇨ 7.389...<br><code v-pre>Math.expm1(2)</code> ⇨ 6.389...</td>
<td>🌝 <code v-pre>expm1</code> tương đương với <code v-pre>exp - 1</code></td>
</tr>
<tr>
<td>min(x,y)<br>max(x,y)</td>
<td>trả về số <strong>lớn nhất</strong> trong 2 số<br>trả về số <strong>nhỏ nhất</strong> trong 2 số</td>
<td>double</td>
<td><code v-pre>Math.min(5,10)</code> ⇨ 5 <br><code v-pre>Math.max(5,10)</code>  ⇨ 10</td>
<td></td>
</tr>
<tr>
<td>random()</td>
<td>trả về số ngẫu nhiên trong khoảng <code v-pre>(0,1)</code></td>
<td>none</td>
<td><code v-pre>Math.random()</code> ⇨ 0.341...</td>
<td></td>
</tr>
<tr>
<td>round(x)<br>ceil(x)<br>floor(x)</td>
<td>làm tròn số nguyên gần nhất x<br>làm tròn trên số nguyên <strong>x</strong><br>làm tròn dưới số nguyên <strong>x</strong></td>
<td>int</td>
<td><code v-pre>Math.round(1.49)</code> ⇨ 1<br><code v-pre>Math.round(1.51)</code> ⇨ 2 <br><br><code v-pre>Math.ceil(1.01)</code> ⇨ 2<br><code v-pre>Math.ceil(1.99)</code>⇨ 2<br><br><code v-pre>Math.floor(1.01)</code> ⇨ 1<br><code v-pre>Math.floor(1.99)</code> ⇨ 1</td>
<td>🔥 Dưới 5 làm tròn dưới <br>Trên 5 làm tròn trên (<code v-pre>round</code>)<br>🔥 Luôn làm tròn trên (<code v-pre>ceil</code>)<br>🔥 Luôn làm tròn <strong>dưới</strong> (<code v-pre>floor</code>)</td>
</tr>
<tr>
<td>rint(x)</td>
<td>làm tròn gần nhất <strong>số nguyên</strong> nhưng trả về <strong>số thực</strong></td>
<td>double</td>
<td><code v-pre>Math.rint(1.49)</code> ⇨ 1.0<br><code v-pre>Math.rint(1.51)</code> ⇨ 2.0</td>
<td></td>
</tr>
<tr>
<td>signum(x)</td>
<td>trả về dấu của x</td>
<td>double</td>
<td><code v-pre>Math.signnum(2.3)</code> ⇨ 1.0<br><code v-pre>Math.signnum(-2.3)</code> ⇨ -1.0</td>
<td></td>
</tr>
<tr>
<td>copySign(x,y)</td>
<td>trả về số thực <strong>x</strong> với dấu của <strong>y</strong></td>
<td>double</td>
<td><code v-pre>Math.copySign(3.4,-2)</code> ⇨ 3.4<br><code v-pre>Math.copySign(3.4,2)</code> ⇨ 3.4</td>
<td></td>
</tr>
</tbody>
</table>
<blockquote>
<p>🔥 Những <code v-pre>method</code> liệt kê ở trên không phải là tất cả nhưng là thông dụng nhất cho các bạn</p>
<p>💡<code v-pre>sin</code> là hàm lượng giác, còn <code v-pre>sinh</code> là hàm lượng giác ỡ <code v-pre>hyperpol</code>. (<em>trường hợp còn lại y vậy, chỉ tham khảo</em>).</p>
</blockquote>
<table>
<thead>
<tr>
<th>🔙  <a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/10.Mang.md" target="_blank" rel="noopener noreferrer">Bài 10. Mảng<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/12.Methods.md" target="_blank" rel="noopener noreferrer">Bài 12. Java Methods<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


