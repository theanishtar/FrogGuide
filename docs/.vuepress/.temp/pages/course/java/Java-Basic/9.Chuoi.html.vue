<template><div><h1 id="chuoi-muc-luc" tabindex="-1"><a class="header-anchor" href="#chuoi-muc-luc" aria-hidden="true">#</a> Chuỗi------------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<p><code v-pre>String</code> (<em>chuỗi</em>) : sử dụng để lưu trữ văn bản, như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> myName <span class="token operator">=</span> <span class="token string">"Lê Tuấn Kiệt"</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Tôi tên là "</span> <span class="token operator">+</span> myName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// output : Tôi tên là Lê Tuấn Kiệt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Các <strong>phương thức</strong> (<em>Methods</em>) phổ biến của <code v-pre>String</code> :</p>
<ul>
<li><code v-pre>length()</code> : <em>độ dài chuỗi</em></li>
<li><code v-pre>toUpperCase()</code> và <code v-pre>toLowerCase()</code> : <em>chuyển sang</em> <strong>in thường</strong> <em>và</em> <strong>IN HOA</strong></li>
<li><code v-pre>indexOf()</code> : <em>trả về vị trí đầu tiên của chuỗi tìm được</em></li>
<li><code v-pre>concat()</code> : <em>nối chuỗi lại với nhau</em></li>
</ul>
<hr>
<h2 id="_1-cac-phuong-thuc-thong-dung-trong-chuoi" tabindex="-1"><a class="header-anchor" href="#_1-cac-phuong-thuc-thong-dung-trong-chuoi" aria-hidden="true">#</a> 1. Các phướng thức thông dụng trong chuỗi</h2>
<ul>
<li><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-18-34-Science.png" alt="Science.png"> <strong>Độ dài chuỗi (<code v-pre>length</code>)</strong> :</li>
</ul>
<p>Sử dụng <code v-pre>Methods</code> (<em>phương thức</em>) <code v-pre>length()</code> để kiểm tra độ dài của chuỗi :</p>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-08-13-Specialization.png"> Cụ thể</b></summary>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> myName <span class="token operator">=</span> <span class="token string">"Lê Tuấn Kiệt"</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Độ dài tên của tôi là "</span> <span class="token operator">+</span> myName<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// output : Độ dài tên của tôi là 12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>💡 Để sử dụng <code v-pre>method</code> thì các bạn <code v-pre>.</code> phía sau một <code v-pre>Object</code> là được nha, ví dụ như <code v-pre>myName.length()</code></p>
<ul>
<li><code v-pre>myName</code> là <code v-pre>Object</code></li>
<li><code v-pre>length()</code> là phương thức</li>
</ul>
</blockquote>
</details>
<hr>
<ul>
<li><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-18-34-Science.png" alt="Science.png"> <strong>Chuyển đổi chuỗi (<code v-pre>convert String</code>)</strong> , bao gồm :
<ul>
<li><code v-pre>toUpperCase()</code> : chuyển thành in HOA</li>
<li><code v-pre>toLowerCase()</code> : chuyển thành in thường</li>
</ul>
</li>
</ul>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-08-13-Specialization.png"> Cụ thể</b></summary>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> myName <span class="token operator">=</span> <span class="token string">"LÊ TUẤN KIỆT"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> myNickName <span class="token operator">=</span> <span class="token string">"zenfection"</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Chuyển in thường</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myName<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// chuyển in hoa</span>
<span class="token comment">/* output : 
lê tuấn kiệt
ZENFECTION   */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<hr>
<p><strong>Tìm chữ cái đầu tiên trong chuỗi</strong>, sử dụng  <code v-pre>indexOf()</code> để trả về vị trí đầu tiên trong chuỗi, bao gồm cả <em>khoảng trắng</em></p>
<blockquote>
<p>⚠️ Chuỗi ký tự đầu tiên bắt đầu từ <code v-pre>0</code> nhé.</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-08-13-Specialization.png"> Cụ thể</b></summary>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> myName <span class="token operator">=</span> <span class="token string">"Tuấn Kiệt"</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"chữ Kiệt ở vị trí thứ "</span> <span class="token operator">+</span> myName<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">"Kiệt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// output : chữ Tuấn ở vị trí số 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>Ký tự</th>
<th>T</th>
<th>u</th>
<th>ấ</th>
<th>n</th>
<th>&quot; &quot;</th>
<th>K</th>
<th>i</th>
<th>ệ</th>
<th>t</th>
</tr>
</thead>
<tbody>
<tr>
<td>Vị trí</td>
<td>0</td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>5</td>
<td>6</td>
<td>7</td>
<td>8</td>
</tr>
</tbody>
</table>
<blockquote>
<p>💡 Như bạn đã thấy thì nó sẽ trả về vị trí của chữ <code v-pre>K</code> trong chuỗi <code v-pre>Kiệt</code>.</p>
</blockquote>
<blockquote>
<p>⚠️ Trường hợp lưu ý :</p>
<ul>
<li>Nếu có 2 chữ <code v-pre>Kiệt</code>, nó vẫn trả về vị trí của chữ <code v-pre>Kiệt</code> đầu tiên.</li>
<li>Nếu chữ <code v-pre>Kiệt</code> không tồn tại nó sẽ trả về <code v-pre>-1</code>.</li>
</ul>
</blockquote>
</details>
<hr>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-18-34-Science.png" alt="Science.png"> <strong>Nối chuỗi với nhau</strong> bằng cách sử dụng dấu <code v-pre>+</code> như các bài trước :</p>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-08-13-Specialization.png"> Cụ thể</b></summary>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> myName <span class="token operator">=</span> <span class="token string">"Tuấn Kiệt"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> firstName <span class="token operator">=</span> <span class="token string">"Lê"</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Tên của tôi là : "</span> <span class="token operator">+</span> fisrtName <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> myName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// output: Tên của tôi là Lê Tuấn Kiệt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<blockquote>
<p>💡 Bạn cũng có thể sử dụng phương thức <code v-pre>concat()</code> để nối 2 chuỗi :</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-08-13-Specialization.png"> Cụ thể</b></summary>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> myName <span class="token operator">=</span> <span class="token string">"Tuấn Kiệt"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> firstName <span class="token operator">=</span> <span class="token string">"Lê"</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Tên của tôi là : "</span> <span class="token operator">+</span> firstName<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>myName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//output : Tên của tôi là Lê Tuấn Kiệt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>⚠️ Có thể sử dụng nhiều phương thức <code v-pre>concat()</code> để nối nhiều chuỗi với nhau :</p>
</blockquote>
</details>
<hr>
<p>⚠️ <strong>Lưu ý đặc biệt</strong> :</p>
<p>Nếu chúng ta muốn viết những ký tự đặc biệt được quy định bởi <code v-pre>Java</code> như <code v-pre>&quot;&quot;</code></p>
<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/31-12-56-52-java-oop_7.png" alt="java-oop_7.png" width="440">
<blockquote>
<p>⚠️ Đó là một một lỗi bởi vì máy không hiểu đã mặc định <code v-pre>&quot; &quot;</code> là ký tự đặc biệt.</p>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-08-13-Specialization.png"> Giải quyết</b></summary>
<p>Sử dụng dấu <code v-pre>\</code> trước <strong>ký tự đặc biệt</strong> :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> myName <span class="token operator">=</span> <span class="token string">"Tôi tên là \"Lê Tuấn Kiệt\""</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//output : Tôi tên là "Lê Tuấn Kiệt"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</blockquote>
<p>Chúng ta quy ước sẽ sử dụng nhé :</p>
<table>
<thead>
<tr>
<th>Ký tự đặc biệt</th>
<th>cách viết</th>
</tr>
</thead>
<tbody>
<tr>
<td>' '</td>
<td><code v-pre>\'\'</code></td>
</tr>
<tr>
<td>&quot; &quot;</td>
<td><code v-pre>\&quot;\&quot;</code></td>
</tr>
<tr>
<td>\</td>
<td><code v-pre>\\</code></td>
</tr>
</tbody>
</table>
<p>💡 Chúng ta có các kiểu ký tự đặc biệt mà bạn <strong>cần phải biết</strong> :</p>
<table>
<thead>
<tr>
<th>Ký tự đặc biệt</th>
<th>Mô tả</th>
</tr>
</thead>
<tbody>
<tr>
<td>\n</td>
<td>New Line</td>
</tr>
<tr>
<td>\r</td>
<td>Carriage return</td>
</tr>
<tr>
<td>\t</td>
<td>Tab</td>
</tr>
<tr>
<td>\b</td>
<td>Backspace</td>
</tr>
<tr>
<td>\f</td>
<td>Form Feed</td>
</tr>
</tbody>
</table>
<blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-15-08-13-Specialization.png"> Giải thích cụ thể từng cái : </b></summary>
<ul>
<li>
<p><code v-pre>\n</code> và <code v-pre>\r</code> có chung chức năng xuống dòng (<em>khuyến kích dùng <code v-pre>\n</code></em>), nhưng chúng có tý khác nhau, xem <a href="https://www.it-swarm-vi.com/vi/java/su-khac-biet-giua-cac-ky-tu-char-n-va-r-trong-java-la-gi/942391502/" target="_blank" rel="noopener noreferrer">tại đây<ExternalLinkIcon/></a></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Tôi tên là\nLê Tuấn Kiệt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* Output : Tôi tên là
Lê Tuấn Kiệt */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>\t</code> để cách khoảng lớn :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Sử dụng tab để\t cách khoảng lớn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//output : Sử dụng tab để   cách khoảng lớn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>\b</code> đặt ở đầu từ và cuối từ, để cho hiểu đó là một từ, như <code v-pre>\bKiet\b</code> là <code v-pre>Kiet</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"\bLê \b \b Tuấn \b \b Kiệt \b"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//output : Lê Tuấn Kiệt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>\f</code> xuống dòng nhưng không thụt vô đầu dòng :</p>
</li>
<li>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Tôi tên là \fLê Tuấn Kiệt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* Tôi tên là 
             Lê Tuấn Kiệt */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</details>
</blockquote>
<hr>
<h2 id="_2-tong-hop-cac-phuong-thuc-trong-string" tabindex="-1"><a class="header-anchor" href="#_2-tong-hop-cac-phuong-thuc-trong-string" aria-hidden="true">#</a> 2. Tổng hợp các phương thức trong <code v-pre>String</code></h2>
<table>
<thead>
<tr>
<th>Phương thức</th>
<th>Mô tả</th>
<th>Trả về</th>
<th>Ví dụ (<code v-pre>Name</code>=<code v-pre>Hello</code>)</th>
<th>Lưu ý</th>
</tr>
</thead>
<tbody>
<tr>
<td>charAt(<em>p</em>)<br></td>
<td>trả về <strong>chữ cái</strong> được chỉ định vị trí</td>
<td>char</td>
<td><code v-pre>Name.charAt[1]</code> <br>⇨ e</td>
<td></td>
</tr>
<tr>
<td>codePointAt(<em>p</em>)<br>codePointBefore(<em>p</em>)</td>
<td>trả về số bảng mã <code v-pre>Unicode</code></td>
<td>int</td>
<td><code v-pre>Name.codePointAt(0)</code> <br>⇨ 72<br><code v-pre>Name.codePointBefore(1)</code> <br>⇨ 72<br></td>
<td>⚠️ <code v-pre>codePointAt</code> bắt đầu bằng <em>0</em><br>⚠️ <code v-pre>codePointBefore</code> bắt đầu bằng <em>1</em></td>
</tr>
<tr>
<td>codePointCount(<em>a,b</em>)</td>
<td>trả về số lượng <code v-pre>Unicode</code> từ <em>a tới b</em></td>
<td>int</td>
<td><code v-pre>Name.codePointCount(0,3)</code> <br>⇨ 3</td>
<td></td>
</tr>
<tr>
<td>compareTo(x)<br>compareToIgnoreCase(x)</td>
<td>So sánh  2 chuỗi</td>
<td>int</td>
<td><code v-pre>Name.compareTo(&quot;Hello&quot;)</code> <br>⇨ 0<br><code v-pre>Name.compareToIgnoreCase(&quot;HELLO&quot;)</code> <br>⇨ 0</td>
<td>⚠️ Nếu đúng sẽ trả về <code v-pre>0</code>, sai sẽ trả về khác <code v-pre>0</code><br>⚠️ <code v-pre>compareToIgnoreCase</code> không phân biệt <em>hoa thường</em></td>
</tr>
<tr>
<td>equal(x)<br>equalIgnoreCase(x)</td>
<td>So sánh 2 chuỗi</td>
<td>boolean</td>
<td><code v-pre>Name.equal(&quot;Hello&quot;)</code> <br>⇨ true<br><code v-pre>Name.equalIgnoreCase(&quot;HELLO&quot;)</code> <br>⇨ true</td>
<td>⚠️ Nếu đúng sẽ trả về <code v-pre>true</code>, sai sẽ trả về khác <code v-pre>false</code><br>⚠️<code v-pre>equalIgnoreCase</code> không phân biệt <em>hoa thường</em></td>
</tr>
<tr>
<td>matches(x)</td>
<td>tìm kiếm theo biểu thức chính quy</td>
<td>boolean</td>
<td><code v-pre>Name.matches(&quot;He(.*)&quot;)</code><br>⇨ true</td>
<td>💡 Tìm hiểu biểu thức chính quy <a href="https://www.google.com/search?q=regular+expression&amp;oq=regular+expression&amp;aqs=chrome..69i57j69i60&amp;sourceid=chrome&amp;ie=UTF-8" target="_blank" rel="noopener noreferrer">tại đây<ExternalLinkIcon/></a><br>💡 Học hàm <code v-pre>regionMatches()</code> <a href="https://vietjack.com/java/string_regionmatches_trong_java.jsp" target="_blank" rel="noopener noreferrer">tại đây<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>concat(x)</td>
<td>nối 2 chuỗi</td>
<td>String</td>
<td><code v-pre>Name.concat(&quot;World&quot;)</code> <br>⇨ Hello World</td>
<td></td>
</tr>
<tr>
<td>toLowerCase()<br>toUpperCase()</td>
<td>Chuyển chuỗi <strong>in thường</strong><br>Chuyển chuỗi <strong>IN HOA</strong></td>
<td>String</td>
<td><code v-pre>Name.toLowerCase()</code><br>⇨ hello<br><code v-pre>Name.toUpperCase()</code><br>⇨ HELLO</td>
<td></td>
</tr>
<tr>
<td>contains(x)<br>contentEquals(x)</td>
<td>kiểm tra chuỗi có chứa ký tự <strong>x</strong><br>kiểm tra chuỗi chứa <em>chuỗi</em> <strong>x</strong></td>
<td>boolean</td>
<td><code v-pre>Name.contains(&quot;el&quot;)</code><br>⇨ true<br><br><code v-pre>Name.contentEquals(&quot;el&quot;)</code><br> ⇨ false<br><code v-pre>Name.contentEquals(&quot;Hello&quot;)</code><br> ⇨ true</td>
<td></td>
</tr>
<tr>
<td>startsWith(x)<br>endsWith(x)</td>
<td>kiểm rta chuỗi <strong>bắt đầu</strong> bằng chuỗi <strong>x</strong><br>kiểm tra chuỗi bắt đầu bằng chuỗi <strong>x</strong></td>
<td>boolean</td>
<td><code v-pre>Name.startsWith(&quot;He&quot;)</code><br> ⇨ true<br><code v-pre>Name.startsWith(&quot;llo&quot;)</code><br> ⇨ false<br><br><code v-pre>Name.endsWith(&quot;He&quot;)</code><br> ⇨ false<br><code v-pre>Name.endsWith(&quot;llo&quot;)</code><br> ⇨ true</td>
<td></td>
</tr>
<tr>
<td>hashCode(x)</td>
<td>trả về <strong>bảng băm</strong> của chuỗi <strong>x</strong></td>
<td>int</td>
<td><code v-pre>Name.hashCode()</code><br> ⇨ 69609650</td>
<td>💡 Tìm hiểu bảng băm <a href="https://vimentor.com/vi/lesson/ba-ng-bam-hash-table" target="_blank" rel="noopener noreferrer">tại đây<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>indexOf(x)<br>lastIndexOf(x)</td>
<td>trả về vị trí ký tự xuất hiện <strong>đầu tiên</strong> trong chuỗi <strong>x</strong><br>trả về vị trí ký tự xuất hiện <strong>cuồi cùng</strong> trong chuỗi <strong>x</strong></td>
<td>int</td>
<td><code v-pre>name.indexOf(&quot;l&quot;)</code><br> ⇨ 2 <br><code v-pre>name.lastIndexOf(&quot;l&quot;)</code><br>  ⇨ 3</td>
<td></td>
</tr>
<tr>
<td>isEmpty()<br>isBlank()</td>
<td>kiểm tra chuỗi rỗng</td>
<td>boolean</td>
<td><code v-pre>Name.isEmpty()</code><br> ⇨ false<br><code v-pre>&quot;&quot;.isEmpty</code><br> ⇨ true<br><br><code v-pre>&quot;   &quot;.isBlank()</code><br> ⇨ true</td>
<td>⚠️ <code v-pre>isBlank</code> kiểm tra chuỗi rỗng không tính <em>khoảng trắng</em></td>
</tr>
<tr>
<td>length(x)</td>
<td>trả về độ dài chuỗi</td>
<td>int</td>
<td><code v-pre>Name.length()</code><br> ⇨ 5</td>
<td></td>
</tr>
<tr>
<td>replace(x,y)<br>replaceFirst(x,y)<br>replaceAll(x,y)</td>
<td>trả về chuỗi mới  <strong>x</strong> thay bằng <strong>y</strong></td>
<td>String</td>
<td><code v-pre>Name.replace('l','p')</code><br> ⇨ Heppo<br><code v-pre>Name.replaceFirst(&quot;l&quot;,&quot;paa&quot;)</code> <br> ⇨ Heppalo<br><code v-pre>Name.replaceAll(&quot;llo&quot;,&quot;ppa&quot;)</code><br> ⇨ Heppa</td>
<td>⚠️ Đối số của<code v-pre>replace</code> là ký tự.<br>⚠️ Đối số của <code v-pre>replaceFirst</code> và <code v-pre>replaceAll</code> là chuỗi<br>⚠️  <code v-pre>replaceFirst</code> chỉ thay đổi chuỗi <strong>x</strong> đầu tiên.</td>
</tr>
<tr>
<td>split(x)</td>
<td>Chuyển <strong>chuỗi</strong> thành <strong>mảng chuỗi</strong> bằng nhận biết x</td>
<td>String[]</td>
<td><code v-pre>String [] ArrayName = Name.split(&quot;&quot;)</code><br> ⇨ ArrayName ={&quot;H&quot;,&quot;e&quot;,&quot;l&quot;,&quot;l&quot;,&quot;o&quot;}</td>
<td>💡 Bạn có thể thay thế chuỗi <strong>x</strong>, làm điểm tách chuỗi</td>
</tr>
<tr>
<td>subSequence(a,b)<br></td>
<td>Trả về chuỗi ký tự mới lấy từ chuỗi gốc vị trí <em>a tới b</em></td>
<td>CharSequence</td>
<td><code v-pre>CharSequence word</code><br><code v-pre>= Name.subSequence(0,2)</code><br> ⇨ word = &quot;He&quot;</td>
<td>🤔 Sự khác biệt giữa <code v-pre>String</code> và <code v-pre>CharSquence</code> <a href="https://www.it-swarm-vi.com/vi/java/su-khac-biet-chinh-xac-giua-charsequence-va-string-trong-java/1068529714/#:~:text=CharSequence%20l%C3%A0%20m%E1%BB%99t%20chu%E1%BB%97i%20c%C3%A1c,tr%C3%ACnh%20t%E1%BB%B1%20char%20kh%C3%A1c%20nhau." target="_blank" rel="noopener noreferrer">tại đây<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>subString(a,b)</td>
<td>Trả về chuỗi mới lấy từ chuỗi gốc vị trí <em>a tới b</em></td>
<td>String</td>
<td><code v-pre>String word</code><br><code v-pre>= Name.subString(0,2)</code><br>⇨ word = &quot;He&quot;</td>
<td>🤔 Sự khác biệt giữa <code v-pre>String</code> và <code v-pre>CharSquence</code> <a href="https://www.it-swarm-vi.com/vi/java/su-khac-biet-chinh-xac-giua-charsequence-va-string-trong-java/1068529714/#:~:text=CharSequence%20l%C3%A0%20m%E1%BB%99t%20chu%E1%BB%97i%20c%C3%A1c,tr%C3%ACnh%20t%E1%BB%B1%20char%20kh%C3%A1c%20nhau." target="_blank" rel="noopener noreferrer">tại đây<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>trim()</td>
<td>xoá <em>khoảng trắng</em> trong chuỗi</td>
<td>String</td>
<td><code v-pre>&quot;  Zen   &quot;.trim()</code><br>⇨ &quot;Zen&quot;</td>
<td></td>
</tr>
<tr>
<td>toCharArray()</td>
<td>Chuyển chuỗi thành mảng ký tự</td>
<td>char[]</td>
<td><code v-pre>char[] Array = name.toCharArray()</code><br>⇨ Array =  {H,e,l,l,o}</td>
<td></td>
</tr>
<tr>
<td>toString()<br>valueOf()</td>
<td>Chuyển đổi thành chuỗi</td>
<td>String</td>
<td><code v-pre>123.toString()</code><br>⇨ &quot;123&quot;<br><br><code v-pre>String.valueOf(123)</code><br>⇨ &quot;123&quot;<br><code v-pre>String.valueOf(null)</code><br>⇨ &quot;&quot;</td>
<td>⚠️ Nếu đối số là <code v-pre>null</code> thì <code v-pre>toString()</code> sẽ lỗi.</td>
</tr>
<tr>
<td>getBytes()</td>
<td>Mã hoá chuỗi</td>
<td>byte[]</td>
<td><code v-pre>byte[] encode = Name.getBytes()</code>⇨ byte = &quot;[B@2f0e140b&quot;</td>
<td></td>
</tr>
<tr>
<td>copyValueOf(x,a,b)</td>
<td>trả về chuỗi mới từ mảng ký tự <strong>x</strong> vị trí <em>a tới b</em></td>
<td>String</td>
<td><code v-pre>char[] str= {'h','e','l','l','o'}</code><br><code v-pre>String name = &quot;&quot;</code><br><br><code v-pre>name = name.copyValueOf(str)</code><br>⇨ name = &quot;Hello&quot;<br><code v-pre>name = name.copyValueOf(str,0,3)</code><br>⇨ name = &quot;hel&quot;</td>
<td>⚠️ Ta có thể 2 <strong>form</strong> và nếu copy toàn bộ thì không cần đối số <code v-pre>a</code> và <code v-pre>b</code></td>
</tr>
<tr>
<td>intern()</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>offsetByCodePoints()</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>🔙  <a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/8.Vonglap.md" target="_blank" rel="noopener noreferrer">Bài 8. Vòng lặp<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/10.Mang.md" target="_blank" rel="noopener noreferrer">Bài 10. Mảng<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


