<template><div><h1 id="vong-lap-muc-luc" tabindex="-1"><a class="header-anchor" href="#vong-lap-muc-luc" aria-hidden="true">#</a> Vòng lặp---------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<p>Cũng như bài <a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/7.Dieukien.md" target="_blank" rel="noopener noreferrer">Điều kiện<ExternalLinkIcon/></a>, thì đây là một vấn đề có trong mọi ngôn ngữ lập trình.</p>
<p>Dùng để làm một vấn đề gì đó lặp đi lặp lại, có các kiểu vòng lặp sau :</p>
<ul>
<li><code v-pre>while</code></li>
<li><code v-pre>do..while</code></li>
<li><code v-pre>for</code></li>
<li><code v-pre>for..Each</code></li>
</ul>
<hr>
<h2 id="_1-vong-lap-while" tabindex="-1"><a class="header-anchor" href="#_1-vong-lap-while" aria-hidden="true">#</a> 1. Vòng lặp <code v-pre>while</code></h2>
<p>Như mọi ngôn ngữ đây là vòng lặp lại lặp lại miễn điều kiện là <code v-pre>true</code>, sẽ thoát khi điều kiện là <code v-pre>false</code></p>
<p><strong>Ví dụ</strong> :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">//có này để dần dẫn cho điều kiện thành false</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : 0 1 2 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_2-vong-lap-do-while" tabindex="-1"><a class="header-anchor" href="#_2-vong-lap-do-while" aria-hidden="true">#</a> 2. Vòng lặp <code v-pre>do..while</code></h2>
<p>Đây là một biến thể của vòng lặp <code v-pre>while</code>, sẽ thực hiện trước một lần với lệnh <code v-pre>do</code> và sau đó kiểm tra điều kiện.</p>
<p><strong>Ví dụ</strong>:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> 
<span class="token keyword">do</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// output : 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_3-vong-lap-for" tabindex="-1"><a class="header-anchor" href="#_3-vong-lap-for" aria-hidden="true">#</a> 3. Vòng lặp <code v-pre>for</code></h2>
<p>Nó là một dạng vòng lặp ngắn gọn nhất,bao gồm 3 phần chính :</p>
<ul>
<li><code v-pre>Initaliztion</code> : <em>khởi tạo vòng lặp</em></li>
<li><code v-pre>Test Statement</code> : <em>điều kiện kiểm tra</em></li>
<li><code v-pre>Iteration Statement</code> : <em>bước nhảy của vòng lặp</em></li>
</ul>
<p><strong>Ví dụ</strong> :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> myArray <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : 4 5 7 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_4-vong-lap-for-each" tabindex="-1"><a class="header-anchor" href="#_4-vong-lap-for-each" aria-hidden="true">#</a> 4. Vòng lặp <code v-pre>for..Each</code></h2>
<p>Được sử dụng riêng để lặp ra các phần tử trong 1 <code v-pre>Array</code>, (<em>có thể dùng <code v-pre>for</code> như bình thường</em>)</p>
<p><strong>Ví dụ</strong> :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> myArray <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> index <span class="token operator">:</span> myArray<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : 5 3 2 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_5-đieu-khien-vong-lap" tabindex="-1"><a class="header-anchor" href="#_5-đieu-khien-vong-lap" aria-hidden="true">#</a> 5. Điều khiển vòng lặp</h2>
<p>Vậy ta tự hỏi thế này :</p>
<blockquote>
<p>🤔 Nếu trong một <code v-pre>array</code> có <strong>10</strong> phần tử, ta <code v-pre>for</code> từ <strong>0 tới 10</strong>, và ta muốn nó dừng tại 5 thì thế nào ?</p>
</blockquote>
<p>Đơn giản là ta có thể dùng <code v-pre>break</code> để thoát khỏi vòng lặp :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> array<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//output : 5 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>🤔 Nếu trong một <code v-pre>array</code> có <strong>10</strong> phần tử, ta <code v-pre>for</code> từ <strong>0 tới 10</strong>, và muốn tới 5 thì bỏ qua nó thì thể nào ?</p>
</blockquote>
<p>Đơn giản là ta có thể dùng <code v-pre>continue</code> để bỏ qua trường hợp đó :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> array<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//output : 5 3 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-gan-nhan-vong-lap" tabindex="-1"><a class="header-anchor" href="#_6-gan-nhan-vong-lap" aria-hidden="true">#</a> 6. Gắn nhãn vòng lặp</h2>
<p>Ta sẽ đúng tới <code v-pre>Label</code> để điều khiển vòng lặp một cách tốt nhất :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
loop<span class="token operator">:</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i in array<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">continue</span> loop<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//output : 5 3 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>🚀 Tức là nó sẽ đánh dấu vòng lặp đó là <code v-pre>loop</code>, còn bạn dùng <code v-pre>continue</code> và <code v-pre>break</code> lên chính vòng lặp đó.</p>
</blockquote>
<table>
<thead>
<tr>
<th>🔙  <a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/7.Dieukien.md" target="_blank" rel="noopener noreferrer">Bài 7. Điều kiện<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/9.Chuoi.md" target="_blank" rel="noopener noreferrer">Bài 9. Chuỗi<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


