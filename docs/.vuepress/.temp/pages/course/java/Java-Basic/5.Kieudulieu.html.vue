<template><div><h1 id="kieu-du-lieu-muc-luc" tabindex="-1"><a class="header-anchor" href="#kieu-du-lieu-muc-luc" aria-hidden="true">#</a> Kiểu dữ liệu---------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<p>Như bạn đã biết thì các biến sẽ được định kiểu dữ liệu như <code v-pre>int</code>, <code v-pre>float</code>, <code v-pre>char</code> ..., có 2 nhóm <strong>kiễu dữ liệu</strong>  sau :</p>
<ul>
<li><code v-pre>Primary data types</code> (<em>kiểu dữ liệu nguyên thuỷ</em>) : gồm <code v-pre>byte</code>, <code v-pre>short</code>, <code v-pre>int</code>, <code v-pre>long</code>, <code v-pre>float</code>, <code v-pre>double</code>,<code v-pre>boolean</code>,<code v-pre>char</code>...</li>
<li><code v-pre>Non-Primitive data types</code> (<em>kiểu dữ liệu không nguyên thuỷ</em>) : gồm <code v-pre>String</code>, <code v-pre>Arrays</code>, <code v-pre>Classes</code>...</li>
</ul>
<h2 id="☠️-kieu-nguyen-thuy" tabindex="-1"><a class="header-anchor" href="#☠️-kieu-nguyen-thuy" aria-hidden="true">#</a> ☠️ Kiểu nguyên thuỷ</h2>
<p>Là kiểu dữ liệu được định sẵn kích thước, và không có phương thức <strong>bổ sung</strong></p>
<table>
<thead>
<tr>
<th>Kiểu dữ liệu</th>
<th>Kích thước</th>
<th>Mô tả</th>
</tr>
</thead>
<tbody>
<tr>
<td>byte</td>
<td><strong>1</strong> <em>bytes</em></td>
<td>chứa từ <code v-pre>[-128,127]</code></td>
</tr>
<tr>
<td>short</td>
<td><strong>2</strong> <em>bytes</em></td>
<td>chứa từ <code v-pre>[-32,768,32,767]</code></td>
</tr>
<tr>
<td>int</td>
<td><strong>4</strong> <em>bytes</em></td>
<td>chứa từ <code v-pre>[-2 tỷ, 2 tỷ]</code></td>
</tr>
<tr>
<td>long</td>
<td><strong>8</strong> <em>bytes</em></td>
<td>chứa từ <code v-pre>[-9 tỷ tỷ, 9 tỷ tỷ]</code></td>
</tr>
<tr>
<td>float</td>
<td><strong>4</strong> <em>bytes</em></td>
<td>chứa số thực, tối đa <strong>7</strong> chữ số thập phân</td>
</tr>
<tr>
<td>double</td>
<td><strong>8</strong> <em>bytes</em></td>
<td>chứa số thực, tối đa <strong>15</strong> chữ số thập phân</td>
</tr>
<tr>
<td>boolean</td>
<td><strong>1</strong> bit</td>
<td>Chứa giá trị <code v-pre>true</code> hoặc <code v-pre>false</code></td>
</tr>
<tr>
<td>char</td>
<td><strong>2</strong> <em>bytes</em></td>
<td>Chứa 1 ký tự <code v-pre>ASCII</code></td>
</tr>
</tbody>
</table>
<blockquote>
<p>💡 <code v-pre>1 Byte</code> = <code v-pre>8bit</code> và <code v-pre>1MB = 1024B</code> nhé các bạn</p>
<p>⚠️ <code v-pre>B</code> là viết tắt của <code v-pre>Byte</code>, còn <code v-pre>b</code> là viết tắt của <code v-pre>bit</code>, vậy nên <code v-pre>4GB</code> với <code v-pre>4Gb</code> khác nhau hoàn toàn nhé.</p>
</blockquote>
<blockquote>
<p>🚀 Bên trên có khá nhiều kiểu, nhưng bạn chỉ cần nhớ <code v-pre>int</code>, <code v-pre>boolean</code>, <code v-pre>char</code>, <code v-pre>double</code>  ==&gt; vì những thứ này hay dùng nhất</p>
</blockquote>
<p>Nên sử dụng số thực là <code v-pre>float</code> hay <code v-pre>double</code> :</p>
<blockquote>
<p>💡 Tuỳ vào mục đích sử dụng của bạn, nếu bạn muốn độ chính xác cao tuyệt đối hãy sử dụng <code v-pre>double</code> , nếu bạn không cần độ chính xác quá tỉ mỉ như <em>điểm số sinh viên</em> thì sử dụng <code v-pre>float</code>.</p>
</blockquote>
<blockquote>
<p>💡 Bạn có thể sử dụng <code v-pre>e</code> để biểu thị cho luỹ thừa của 10</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">float</span> f1 <span class="token operator">=</span> <span class="token number">35e3f</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> d1 <span class="token operator">=</span> <span class="token number">12E4d</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*35000.0
  120000.0 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h2 id="🧚-kieu-du-lieu-khong-nguyen-thuy" tabindex="-1"><a class="header-anchor" href="#🧚-kieu-du-lieu-khong-nguyen-thuy" aria-hidden="true">#</a> 🧚 Kiểu dữ liệu không nguyên thuỷ</h2>
<p>Được gọi là kiểu <strong>tham chiếu</strong> vì chúng <strong>tham chiếu</strong> đến các <code v-pre>Objects</code> (<em>đối tượng</em>).</p>
<blockquote>
<p>Thật ra <code v-pre>String</code> là một kiểu dữ liệu không nguyên thuỷ, bởi vì nó như một <code v-pre>Object</code> (<em>đối tượng</em>), và nó có thể chứa nhiều kiểu dữ liệu.</p>
</blockquote>
<p><strong>Sử khác nhau giữa nguyên thuỷ và không nguyên thuỷ</strong>:</p>
<table>
<thead>
<tr>
<th></th>
<th>Nguyên thuỷ</th>
<th>Không Nguyên thuỷ</th>
</tr>
</thead>
<tbody>
<tr>
<td>Khởi tạo</td>
<td>được xác định trước trong <code v-pre>Java</code></td>
<td>được tạo bởi lập trình viên</td>
</tr>
<tr>
<td>Giá trị</td>
<td>luôn luôn có giá trị</td>
<td>có thể không có giá trị gọi là <code v-pre>null</code></td>
</tr>
<tr>
<td>Cú pháp</td>
<td>bắt đầu bằng chữ <strong>thường</strong> : <code v-pre>int</code>, <code v-pre>float</code>...</td>
<td>bắt đầu bằng chữ <strong>hoa</strong> : <code v-pre>String</code>,<code v-pre>Array</code>...</td>
</tr>
<tr>
<td>Kích thước</td>
<td>Phụ thuộc vào <strong>kiểu dữ liệu</strong></td>
<td>Có cùng kích thước với nhau</td>
</tr>
</tbody>
</table>
<blockquote>
<p>⚠️ Đó là lý do bạn khai báo <code v-pre>String</code> phải viết hoa chữ cái đầu đấy.</p>
</blockquote>
<table>
<thead>
<tr>
<th>🔙  <a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/4.Bien.md" target="_blank" rel="noopener noreferrer">Bài 4. Biến<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/6.ToanTu.md" target="_blank" rel="noopener noreferrer">Bài 6. Toán tử<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


