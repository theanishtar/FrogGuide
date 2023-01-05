<template><div><h1 id="pham-vi-truy-cap-muc-luc" tabindex="-1"><a class="header-anchor" href="#pham-vi-truy-cap-muc-luc" aria-hidden="true">#</a> Phạm vi truy cập------------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<p>Trong tất cả mọi bài trước, bạn đã rất quen thuộc với <code v-pre>public</code> trong ví dụ sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>🔥 Là một từ khoá <code v-pre>access modifier</code> (<em>Phạm vi truy cập</em>), sử dụng để đặt các mức độ sử dụng cho <code v-pre>classes</code>, <code v-pre>attributes</code>, <code v-pre>methods</code> và <code v-pre>constructors</code>...</p>
</blockquote>
<p>Có 2 loại <code v-pre>Modifiers</code> :</p>
<ul>
<li><code v-pre>Access Modifiers</code> : <em>kiểm soát mức độ truy cập</em></li>
<li><code v-pre>Non-Access Modifiers</code> : <em>không kiểm soát nhưng cung cấp các chức năng khác</em></li>
</ul>
<hr>
<h2 id="_1-access-modifiers" tabindex="-1"><a class="header-anchor" href="#_1-access-modifiers" aria-hidden="true">#</a> 1. Access Modifiers</h2>
<p>🧚‍♂️ <strong>Đối với</strong> <code v-pre>classes</code>, bạn có thể sử dụng <code v-pre>public</code> và <code v-pre>default</code></p>
<table>
<thead>
<tr>
<th>Modifier</th>
<th>Mô tả</th>
<th>Lưu ý</th>
</tr>
</thead>
<tbody>
<tr>
<td>public</td>
<td><code v-pre>class</code> có thể được truy cập bởi bất kỳ <code v-pre>class</code> nào khác</td>
<td></td>
</tr>
<tr>
<td>default</td>
<td><code v-pre>class</code> chỉ được truy cập bởi <code v-pre>class</code> chung <code v-pre>package</code></td>
<td>💡 Tìm hiểu <code v-pre>package</code> tại bài <a href="https://github.com/Zenfection/Java/blob/master/Java%20OOP/3.Pkg%26Encapsulation.md" target="_blank" rel="noopener noreferrer">Package và Tính đóng gói<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<p>🧚‍♂️ <strong>Đối với</strong> <code v-pre>attributes</code>, <code v-pre>methods</code>, <code v-pre>constructors</code> bạn có thể sử dụng như sau:</p>
<table>
<thead>
<tr>
<th>Modifier</th>
<th>Mô tả</th>
<th>Lưu ý</th>
</tr>
</thead>
<tbody>
<tr>
<td>public</td>
<td><code v-pre>code</code> có thể truy cập cho tất cả <code v-pre>classes</code></td>
<td></td>
</tr>
<tr>
<td>private</td>
<td><code v-pre>code</code> chỉ có thể truy cập trong <code v-pre>class</code> đã khai báo (<em>xem bài</em>)</td>
<td></td>
</tr>
<tr>
<td>default</td>
<td><code v-pre>code</code> chỉ có thể truy cập trong cùng <code v-pre>package</code> (<em>xem package tại</em>)</td>
<td>💡Tìm hiểu <code v-pre>package</code> tại bài <a href="https://github.com/Zenfection/Java/blob/master/Java%20OOP/3.Pkg%26Encapsulation.md" target="_blank" rel="noopener noreferrer">Package và Tính đóng gói<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>protected</td>
<td><code v-pre>code</code> có thể truy cập trong cùng <code v-pre>package</code> và <code v-pre>subclasses</code> (<em>class con</em>).</td>
<td>💡 Tìm hiểu về kế thừa tại bài <a href="https://github.com/Zenfection/Java/blob/master/Java%20OOP/4.Inheritance%26Polymorphism.md" target="_blank" rel="noopener noreferrer">Tính kế thừa và Đa hình<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-05-59-Know How.png"> Cách hiểu đơn giản như sau:</b></summary>
<br>
<ul>
<li>
<p><code v-pre>public</code> là công khai truy cập được mọi nơi,</p>
</li>
<li>
<p><code v-pre>private</code> là riêng tư chỉ truy cập được trong khu vực nó khai báo</p>
</li>
<li>
<p><code v-pre>default</code> chỉ truy cập trong <code v-pre>package</code></p>
</li>
<li>
<p><code v-pre>protected</code> chỉ truy cập trong <code v-pre>package</code> và <code v-pre>class</code> con.</p>
</li>
</ul>
<p>==&gt; <code v-pre>public</code> &gt; <code v-pre>protected</code> &gt; <code v-pre>default</code> &gt; <code v-pre>private</code></p>
</details>
</blockquote>
<hr>
<h2 id="_2-non-access-modifiers" tabindex="-1"><a class="header-anchor" href="#_2-non-access-modifiers" aria-hidden="true">#</a> 2. Non-Access Modifiers</h2>
<p>🧚‍♂️ <strong>Đối với</strong> <code v-pre>classes</code>, bạn có thể sử dụng <code v-pre>final</code> và <code v-pre>abstract</code></p>
<table>
<thead>
<tr>
<th>Modifier</th>
<th>Mô tả</th>
<th>Lưu ý</th>
</tr>
</thead>
<tbody>
<tr>
<td>final</td>
<td><code v-pre>class</code> không thể thừa kế bởi các <code v-pre>classes</code> khác</td>
<td>💡 Tìm hiểu về kế thừa tại bài <a href="https://github.com/Zenfection/Java/blob/master/Java%20OOP/4.Inheritance%26Polymorphism.md" target="_blank" rel="noopener noreferrer">Tính kế thừa và Đa hình<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>abstract</td>
<td><code v-pre>class</code> không thể sử dụng để tạo <code v-pre>objects</code></td>
<td>⚠️ để truy cập một <code v-pre>class</code> <code v-pre>abstract</code> , nó phải kế thừa thì <code v-pre>class</code> khác</td>
</tr>
</tbody>
</table>
<p>🧚‍♂️ <strong>Đối với</strong> <code v-pre>attributes</code>, <code v-pre>methods</code>, <code v-pre>constructors</code> bạn có thể sử dụng như sau:</p>
<table>
<thead>
<tr>
<th>Modifier</th>
<th>Mô tả</th>
<th>Lưu ý</th>
</tr>
</thead>
<tbody>
<tr>
<td>final</td>
<td><code v-pre>Atrributes</code> và <code v-pre>methods</code> không để sửa đổi</td>
<td></td>
</tr>
<tr>
<td>static</td>
<td><code v-pre>Attributes</code> và <code v-pre>methods</code> thuộc về <code v-pre>class</code> chứ không phải <code v-pre>objects</code></td>
<td></td>
</tr>
<tr>
<td>abstract</td>
<td>chỉ có thể sử dụng trên một <code v-pre>abstract class</code> và <code v-pre>methods</code>.</td>
<td>⚠️ <code v-pre>methods</code> không có body, như <code v-pre>abstact void run();</code><br>body được cung cấp bởi <code v-pre>subclass</code> (được kế thừa)</td>
</tr>
<tr>
<td>transient</td>
<td><code v-pre>Attributes</code> và <code v-pre>Methods</code> có thể bỏ qua khi tuần tự hoá <code v-pre>object</code> chứa chúng</td>
<td></td>
</tr>
<tr>
<td>synchronized</td>
<td><code v-pre>Methods</code> chỉ có thể truy cập mỗi lần một <code v-pre>thread</code></td>
<td></td>
</tr>
<tr>
<td>volatile</td>
<td>Giá trị của <code v-pre>attribute</code> không được lưu trong <code v-pre>thread-locally</code>, và luôn đọc từ <code v-pre>main memory</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="giai-thich-cu-the-tung-modifier" tabindex="-1"><a class="header-anchor" href="#giai-thich-cu-the-tung-modifier" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png" alt="ithubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png">Giải thích cụ thể từng <code v-pre>modifier</code></h3>
<ul>
<li>
<details>
<summary><b>🤖 Final</b></summary>
<br>
<p>Nếu bạn không muốn bất kỳ chỉnh sửa nào thì khai báo <code v-pre>final</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-33-28-Ảnh chụp Màn hình 2021-02-02 lúc 14.33.22.png" alt="Ảnh chụp Màn hình 2021-02-02 lúc 14.33.22.png"></p>
<blockquote>
<p>💡 Sẽ gặp lỗi ngay nếu bạn cố thay đổi nó.</p>
</blockquote>
</details>
</li>
<li>
<details>
<summary><b>🤖 Static</b></summary>
<br>
<p>Nó có truy cập mà không cần tạo một <code v-pre>Object</code> của <code v-pre>class</code>, không như <code v-pre>public</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">myStatic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// tạo một method static</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Đây là static"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">myPublic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// tạo một method public</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Đây là Public"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">myStatic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">Demo</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      myObj<span class="token punctuation">.</span><span class="token function">myPublic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*Đây là static
  Đây là Public */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>🔥 Như bạn đã thấy thì khi khai báo <code v-pre>static</code> không cần thông qua <code v-pre>Object</code></p>
</blockquote>
</details>
</li>
<li>
<details>
<summary><b>🤖 Abstract</b></summary>
<br>
<p>Một phương thức trừu tượng (<code v-pre>abstract</code>) của một lớp trừu tượng và nó không có phần body, body được cung cấp từ <code v-pre>subclasses</code> như sau:</p>
</details>
</li>
</ul>
<table>
<thead>
<tr>
<th>🔙  <a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/1.GioiThieu.md" target="_blank" rel="noopener noreferrer">Bài 1. Giới thiệu<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20OOP/3.Pkg%26Encapsulation.md" target="_blank" rel="noopener noreferrer">Bài 3.Package và Tính đóng gói<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


