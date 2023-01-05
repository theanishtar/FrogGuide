<template><div><h1 id="đieu-kien-muc-luc" tabindex="-1"><a class="header-anchor" href="#đieu-kien-muc-luc" aria-hidden="true">#</a> Điều kiện---------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<p>Trong các ngôn ngữ thì luôn luôn có cái này, mình sẽ không nhiều mà đi thẳng đến chi tiết</p>
<p>Có <strong>2</strong> loại câu điều kiện :</p>
<ul>
<li><code v-pre>if..else</code> : xem <a href="https://www.youtube.com/watch?v=h3fgxLlmnUQ" target="_blank" rel="noopener noreferrer">tại đây<ExternalLinkIcon/></a></li>
<li><code v-pre>switch..case</code> : xem <a href="https://www.youtube.com/watch?v=IgNvSHjWxfY" target="_blank" rel="noopener noreferrer">tại đây<ExternalLinkIcon/></a></li>
</ul>
<hr>
<h2 id="_1-lenh-if-else" tabindex="-1"><a class="header-anchor" href="#_1-lenh-if-else" aria-hidden="true">#</a> 1. Lệnh if..else</h2>
<p>Nó cũng giống như các ngôn ngữ khác thôi, <code v-pre>if</code> là nếu, <code v-pre>else if</code> là còn nếu, <code v-pre>else</code> là các trường hợp còn lại, cụ thể sau đây :</p>
<ul>
<li>Sử dụng <code v-pre>if</code> để xác định điều kiện <strong>đúng</strong> để thực thi</li>
<li>Sử dụng <code v-pre>else if</code> để xác định các điều <strong>đúng</strong> tiếp theo kiểm tra, sau khi <code v-pre>if</code> sai</li>
<li>Sử dụng <code v-pre>else</code> để xác định các điều kiện <strong>sai</strong></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> date <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> 
<span class="token keyword">if</span><span class="token punctuation">(</span>date <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Date của bạn là 2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>date <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Date của bạn là thứ 3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Date của bạn khác mọi cái trên"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : Date của bạn là 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>💡 Có 1 loại kiểu rút gọn của <code v-pre>if..else</code> là <strong>toán tử 3 ngôi</strong> (<em>có thể tham khảo</em>), có cú pháp :</p>
<blockquote>
<p>Biến <code v-pre>=</code> (điều kiện ) <code v-pre>?</code> Thực thi  <strong>true</strong> <code v-pre>:</code> Thực thi <strong>false</strong> <code v-pre>;</code></p>
</blockquote>
<p><strong>Dạng</strong> <code v-pre>if..else</code> :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> date <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>date <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Date là thứ 2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Date không phải là thứ 2"</span><span class="token punctuation">)</span>
<span class="token comment">// Output : Date là thứ 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Dạng</strong> <code v-pre>toán tử 3 ngôi</code> :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> date <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token punctuation">(</span>date <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">"Date là thứ 2"</span> <span class="token operator">:</span> <span class="token string">"Date là thứ 2"</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Output : Date là thứ 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<hr>
<h2 id="_2-lenh-switch-case" tabindex="-1"><a class="header-anchor" href="#_2-lenh-switch-case" aria-hidden="true">#</a> 2. Lệnh switch..case</h2>
<p>Nó cũng tương đương với <code v-pre>if..else</code>, nhưng nếu bạn đặt điều kiện chỉ so sánh với <strong>giá trị nguyên</strong> thì đây sẽ thích hợp cho bạn như sau;</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> date <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">switch</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token string">"Date là 1"</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span> <span class="token operator">:</span> <span class="token string">"Date là 2"</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">3</span> <span class="token operator">:</span> <span class="token string">"Date là 3"</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">4</span> <span class="token operator">:</span> <span class="token string">"Date là 4"</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token string">"Các Date còn lại"</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : Date là 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>🚀 Như bạn có thể thấy thì <code v-pre>switch..case</code> có những lưu ý sau :</p>
<ul>
<li>Các <code v-pre>case</code> là trường hợp của biến <code v-pre>date</code> và chỉ chấp nhận <strong>số nguyên</strong></li>
<li>Cuối <code v-pre>case</code> phải có <code v-pre>break</code> để thoát vòng điều kiện</li>
<li><code v-pre>default</code> tương ứng với <code v-pre>else</code> là các trường hợp còn lại</li>
<li>Có thể gộp nhiều <code v-pre>case</code> lại, như <code v-pre>case 1,2,3:</code></li>
</ul>
</blockquote>
<table>
<thead>
<tr>
<th>🔙  <a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/6.ToanTu.md" target="_blank" rel="noopener noreferrer">Bài 6. Toán tử<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/8.Vonglap.md" target="_blank" rel="noopener noreferrer">Bài 8. Vòng lặp<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


