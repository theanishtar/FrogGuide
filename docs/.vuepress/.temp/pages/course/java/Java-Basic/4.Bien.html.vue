<template><div><h1 id="bien-muc-luc" tabindex="-1"><a class="header-anchor" href="#bien-muc-luc" aria-hidden="true">#</a> Biến---------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<p><strong>Variables</strong> (<em>Biến</em>) : là vùng chứa giá trị của dữ liệu</p>
<p>Trong <code v-pre>Java</code> có các biến cơ bản sau :</p>
<ul>
<li><code v-pre>String</code> (chuỗi) : <em>chứa văn bản như &quot;Kiệt đẹp trai&quot;</em></li>
<li><code v-pre>int</code> &amp; <code v-pre>long</code> (số nguyên) : <em>chứa số nguyên như 1,2,3...</em></li>
<li><code v-pre>float</code> &amp; <code v-pre>double</code> (số thực) : <em>chứa số thực như 2.343...</em></li>
<li><code v-pre>char</code> (Ký tự) : <em>chứa ký tự như a,b,c...</em></li>
<li><code v-pre>boolean</code> : <em>chứa 2 trạng thái là</em> <strong>true</strong> <em>và</em> <strong>false</strong></li>
</ul>
<hr>
<h2 id="_1-khoi-tao-bien" tabindex="-1"><a class="header-anchor" href="#_1-khoi-tao-bien" aria-hidden="true">#</a> 1 . Khởi tạo biến</h2>
<p>Ta có thể tạo một biến bằng cú pháp sau  :  <code v-pre>kiểu dữ liệu = giá trị</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> myNum <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> myFloatNum <span class="token operator">=</span> <span class="token number">5.32f</span><span class="token punctuation">;</span> <span class="token comment">// cuối có f</span>
<span class="token keyword">double</span> myDoubleNum <span class="token operator">=</span> <span class="token number">5.23d</span><span class="token punctuation">;</span> <span class="token comment">// cuối có d</span>
<span class="token keyword">char</span> myLetter <span class="token operator">=</span> <span class="token char">'K'</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> myBool <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> myName <span class="token operator">=</span> <span class="token string">"Lê Tuấn Kiệt"</span><span class="token punctuation">;</span> <span class="token comment">// String viết hoa</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"number = "</span> <span class="token operator">+</span> myNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"floatNumber = "</span> <span class="token operator">+</span> myFloatNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"DoubleNumber  = "</span> <span class="token operator">+</span> myDoubleNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"name = "</span> <span class="token operator">+</span> myName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Letter = "</span> <span class="token operator">+</span> myLetter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"bool = "</span> <span class="token operator">+</span> myBool<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-18-33-11-java-oop_5.png" title="" alt="java-oop_5.png" width="373"> 
<hr>
<h2 id="_2-quy-tac-đat-bien" tabindex="-1"><a class="header-anchor" href="#_2-quy-tac-đat-bien" aria-hidden="true">#</a> 2. Quy tắc đặt biến</h2>
<p>Bạn phải tuân thủ những quy tắc đặt biến sau đây :</p>
<ul>
<li><strong>Không</strong> bắt đầu bằng số</li>
<li><strong>Không</strong> có khoảng trắng (<em>sử dụng _ như bien_1</em>)</li>
<li><strong>Không</strong> chứa ký tự đặt biệt (<em>như #,+,-....</em>)</li>
<li><strong>Không</strong> trùng với <code v-pre>keyword</code> (<em>như if,for,class...</em>)</li>
</ul>
<p>Những quy tắt ngầm (<em>Không buộc nhưng làm theo cho có quy chuẩn</em>) :</p>
<ul>
<li>
<p>Viết tên hàm theo quy tắc <code v-pre>camelCase</code> : <em>nghĩa là chữ đầu viết thường, các chữ sau viết hoa chữ cái đầu</em>, như sau:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">tenHam</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">checkNguyenTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">char</span> <span class="token function">checkChuHoa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Viết hoa toàn bộ ghi đặt tên biến là hằng số và sử dụng <code v-pre>final</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">float</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14f</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">SOTUCHON</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<p>Nếu bạn không muốn chỉnh sửa biến đó về sau, cho nó là hằng số và chỉ được phép <em>đọc</em>, thì hãy dùng <code v-pre>final</code>:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
<span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">//hàm này sẽ lỗi vì PI không thể thay đổi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<hr>
<h2 id="_3-hien-thi-bien" tabindex="-1"><a class="header-anchor" href="#_3-hien-thi-bien" aria-hidden="true">#</a> 3. Hiển thị biến</h2>
<p>Sử dụng <code v-pre>System.out.println</code> để hiển thị ra màn hình, và để kết hợp đoạn văn bản và biến hãy sử dụng dấu <code v-pre>+</code> như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> firstName <span class="token operator">=</span> <span class="token string">"Lê"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> middleName <span class="token operator">=</span> <span class="token string">"Tuấn"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> lastName <span class="token operator">=</span> <span class="token string">"Kiệt"</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Tên tôi là : "</span> <span class="token operator">+</span> firstName <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> middleName <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> lastName<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/30-20-34-03-java-oop_6.png" alt="java-oop_6.png" width="345">
<blockquote>
<p>🔥 Như bạn đã thấy tôi đã tự động thêm chuỗi <code v-pre>&quot; &quot;</code> để tạo khoảng cách cho tên của tôi.</p>
</blockquote>
<p>Và bạn cũng có thể tính toán thẳng trong đó như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"a + b = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// output : a + b = 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>⚠️ Với những phép toán bạn phải bọc nó lại bằng dấu <code v-pre>()</code> nha.</p>
</blockquote>
<table>
<thead>
<tr>
<th>🔙  <a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/3.Cuphap.md" target="_blank" rel="noopener noreferrer">Bài 3.Cú pháp<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/5.Kieudulieu.md" target="_blank" rel="noopener noreferrer">Bài 5. Kiểu dữ liệu<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


