<template><div><h1 id="methods-muc-luc" tabindex="-1"><a class="header-anchor" href="#methods-muc-luc" aria-hidden="true">#</a> Methods------------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<blockquote>
<p>💡 Chúng ta đã sử dụng rất nhiều <code v-pre>method</code> như <code v-pre>Math.pow(x,y)</code>, <code v-pre>Arrays.length</code>... vậy nó là gì ??</p>
</blockquote>
<p><strong><code v-pre>Methods</code></strong> (<em>phương thức</em>) : là những khối lệnh được thực thi khi ta gọi nó, chúng có một mục đích nhất định còn hay được gọi là <code v-pre>functions</code> (<em>hàm</em>).</p>
<blockquote>
<p>💡 Các <code v-pre>methods</code>như <code v-pre>pow(x,y)</code>, <code v-pre>length</code> được <code v-pre>Java</code> lập trình sẵn cho chúng ta chỉ cần gọi ra và dùng.</p>
<p>💡 Để dùng <code v-pre>methods</code> ta chỉ cần <code v-pre>.</code> sau một <code v-pre>Object</code>.</p>
<p>🤔 Tại sao chúng ta code <code v-pre>methods</code> hay <code v-pre>function</code> hàm làm chi ?  ta viết tất cả trong hàm <code v-pre>main</code> là được rồi</p>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</b></summary>
<ul>
<li>🧚‍♂️ Ta chỉ cần định dạng một lần và sử dụng về sau</li>
<li>🧚‍♂️ Ví dụ: ta code hàm <code v-pre>đi</code> cho con mèo, thì tay và chân đều đi, nếu thế ta cần code 2 lần nếu không sử dụng hàm</li>
</ul>
</details>
</blockquote>
<hr>
<h2 id="_1-tao-mot-methods" tabindex="-1"><a class="header-anchor" href="#_1-tao-mot-methods" aria-hidden="true">#</a> 1. Tạo một <code v-pre>methods</code></h2>
<p>Tạo 1 file <code v-pre>Demo.java</code> như sau :</p>
<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-11-04-22-java-oop_8.png" alt="java-oop_8.png" width="515">
<blockquote>
<p>⚠️ Khai báo <code v-pre>method</code> phải nằm trong một <code v-pre>class</code>.</p>
<p>Các định nghĩa sau :</p>
<ul>
<li><code v-pre>myMethods</code> là tên của <code v-pre>method</code> : <em>có thê thay đổi tuỳ bạn</em> (<strong>nhớ quy tắc <code v-pre>camelCase</code></strong>)</li>
<li><code v-pre>static</code> để khai báo nó thuộc <code v-pre>Main class</code> chứ không phải là <code v-pre>Object</code> của <code v-pre>Main clas</code> (<em>không cần hiểu lắm, sẽ hiểu trong phần sau</em>)</li>
<li><code v-pre>void</code> : không trả về giá trị nào (<em>sẽ tìm hiểu kỹ hơn về sau</em>)</li>
</ul>
<p>Gọi lại <code v-pre>myMethods</code> trong chính hàm <code v-pre>main</code> thì sẽ được thực thi. và ta có thể gọi nhiều lần như sau:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">myMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">myMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">myMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<hr>
<h2 id="_2-tham-so-va-đoi-so-trong-methods" tabindex="-1"><a class="header-anchor" href="#_2-tham-so-va-đoi-so-trong-methods" aria-hidden="true">#</a> 2. Tham số và đối số trong <code v-pre>Methods</code></h2>
<p><code v-pre>Parameters</code> (<em>tham số</em>) : được chỉ định sau tên <code v-pre>method</code> nằm trong <code v-pre>()</code>, có thể chỉ định nhiều đối số nếu bạn muốn cách nhau bởi dấu <code v-pre>;</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token class-name">String</span> fullName<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>fullName <span class="token operator">+</span> <span class="token string">" đẹp trai"</span> <span class="token operator">+</span> age <span class="token string">" tuổi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token string">"Kiệt"</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token string">"Zen"</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* output :
Kiệt đẹp trai 18 tuổi
Zen đẹp trai  20 tuổi */</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>🤔 Quá dễ đúng không nào :</p>
<ul>
<li><code v-pre>(String full,int age)</code> : gọi là <code v-pre>Parameters</code> (<em>tham số</em>)</li>
<li><code v-pre>(&quot;Kiệt&quot;,18)</code> và <code v-pre>(&quot;Zen&quot;,20)</code> : gọi là <code v-pre>Arguments</code> (<em>đối số</em>)</li>
</ul>
<p>⚠️ Tên tham số là <strong>độc lập</strong>, không liên quan tới bất kỳ tham số khác ở ngoài <code v-pre>Method</code>, nên bạn cứ đặt thoải mái không sợ trùng.</p>
</blockquote>
<hr>
<h2 id="_3-gia-tri-tra-ve-trong-method" tabindex="-1"><a class="header-anchor" href="#_3-gia-tri-tra-ve-trong-method" aria-hidden="true">#</a> 3. Giá trị trả về trong <code v-pre>method</code></h2>
<blockquote>
<p>🤔 Như đã để cập ở trên <code v-pre>void</code> có nghĩa không trả về cái gì ? Hãy xem ví dụ sau :</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">5</span> <span class="token operator">+</span> x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Outputs 8 (5 + 3)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>🔥 Bạn có thể sử dụng các từ khoá như <code v-pre>int</code>, <code v-pre>float</code>, <code v-pre>char</code>... nếu bạn muốn nó trả về giá đó, thay vì <code v-pre>void</code></p>
<p>⚠️ Nhưng tôi khuyết nghị bạn nên đặt biến để lưu trữ giá trị vừa gọi hàm để dễ Debug như sau:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> z <span class="token operator">=</span> <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Outputs 8 (5 + 3)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-11-24-06-Ảnh chụp Màn hình 2021-02-01 lúc 11.23.21.png" alt="Ảnh chụp Màn hình 2021-02-01 lúc 11.23.21.png"></p>
<p>🤪 Vậy là bạn có thể biết sau khi thoát khỏi hàm nó thành <code v-pre>8</code>, hãy làm cách này thay về cách trên cùng nhé !!!</p>
</blockquote>
<p>🧚‍♂️ Ta cũng có thể dùng dùng <code v-pre>if..else</code> hay <code v-pre>for</code> trong <code v-pre>Methods</code> một cách bình thường .</p>
<details>
<summary><b><img scr="![Exchange Ideas.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-14-17-17-Exchange%20Ideas.png)"> Tham khảo</b></summary>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
      <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">checkAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
              <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Bạn là thằng nhóc con dưới 18 tuổ"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> 
            <span class="token keyword">else</span><span class="token punctuation">{</span>
              <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Bạn trưởng thành rồi, nhưng vẫn nhóc con"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">checkAge</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Outputs :  Bạn trưởng thành rồi, nhưng vẫn nhóc con</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<hr>
<h2 id="_4-method-overloading" tabindex="-1"><a class="header-anchor" href="#_4-method-overloading" aria-hidden="true">#</a> 4. Method Overloading</h2>
<p>Được gọi là <strong>phương thức nạp chồng</strong> tức là nhiều <code v-pre>Methods</code> cùng tên nhau, khác kiểu dữ liệu, hãy theo dõi ví dụ sau:</p>
<ul>
<li>
<details>
<summary>🧚‍♂️ Không sử dụng Overloading</summary>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">plusMethodInt</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">plusMethodDouble</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">,</span> <span class="token keyword">double</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🔥 Khi ta muốn số trả về số thực ta phải dùng <code v-pre>plusMethodDouble</code> nếu muốn trả về số nguyên phải dùng <code v-pre>plusMethodInt</code>
🤪 Vậy ta cần phải nhớ quá nhiều hàm, gây khó cho ta</p>
</details>
</li>
<li>
<details>
<summary>🧚‍♂️ Sử dụng Overloading</summary>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">plusMethod</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 

<span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">plusMethod</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">,</span> <span class="token keyword">double</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🔥 Vậy là chúng ta chỉ cần sử dụng <code v-pre>plusMethod</code> và truyền vào số nguyên hay số thực đều được.</p>
</details>
</li>
</ul>
<blockquote>
<p>🚀 Khá dễ hiểu đúng không nào, <code v-pre>Overloading</code> chỉ có vậy thôi</p>
</blockquote>
<hr>
<h2 id="_5-pham-vi-bien-trong-method" tabindex="-1"><a class="header-anchor" href="#_5-pham-vi-bien-trong-method" aria-hidden="true">#</a> 5. Phạm vi biến trong <code v-pre>Method</code></h2>
<p>Trong <code v-pre>Java</code> biến chỉ có thể truy cập được trong phạm vi chúng được tạo gọi là <code v-pre>scope</code></p>
<ul>
<li>
<details>
<summary>Phạm vi <b>Method<b></summary>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// không thể sử dụng x ở đây</span>
      <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
      <span class="token comment">// có thể sử dụng x từ đây</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</li>
<li>
<details>
<summary>Phạm vi <b>Block</b></summary>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//không thể sử dụng x ở đây</span>
    <span class="token punctuation">{</span> <span class="token comment">//dấu trong ngoặc này là block</span>
      <span class="token comment">// Không thể sử dụng x ở đây</span>
      <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
      <span class="token comment">// Có thể sử dụng x</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
    <span class="token comment">// không thể sử dụng x ở đây</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>⚠️ Nó giống như việc bạn sử dụng <code v-pre>if</code>, <code v-pre>while</code>,<code v-pre>for</code>, các biến chỉ tồn tại trong khối mã đó thôi.</p>
</blockquote>
</details>
</li>
</ul>
<blockquote>
<p>🔥 Bạn đã hiểu rồi đúng không, và tuỳ trường hợp mà ta có thể sử dụng khác nhau, tất cả trường hợp trên gọi là <code v-pre>local variable</code> (<em>biến cục bộ</em>).</p>
<p>🤔 Nếu tôi muốn khai báo một biến mà có thể sử dụng ở bất cứ đâu thì ta phải làm gì ?</p>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời<b></summary>
<p>Ta có thể sử dụng <code v-pre>global variables</code> (<em>biến toàn cục</em>) thay vì <em>biến cục bộ</em> ở trên, như sau:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
   <span class="token keyword">static</span> <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">//khai báo toàn cục</span>
   <span class="token comment">//Sử dụng x bất kỳ đâu</span>
   <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>⚠️ Khai báo toàn cục ở dòng đầu tiên của <code v-pre>class</code> và thêm <code v-pre>static</code> vào trước khai báo.</p>
</blockquote>
</details>
</blockquote>
<hr>
<h2 id="_6-ham-đe-quy-recusrion" tabindex="-1"><a class="header-anchor" href="#_6-ham-đe-quy-recusrion" aria-hidden="true">#</a> 6. Hàm đệ quy (<code v-pre>recusrion</code>)</h2>
<p><code v-pre>Recusrion</code> (<em>Đệ quy</em>) : là một hàm đặc biệt, nó <strong>gọi lại chính nó</strong>, dùng để giải quyết những vấn đề phức tạp trở nên dễ hơn, ví dụ ảnh như sau:</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-12-45-30-b29.gif" alt="b29.gif"></p>
<blockquote>
<p>😭 Đệ quy rất khó để hiểu, và cách duy nhất để làm tốt nó là <code v-pre>Debug</code> và <code v-pre>test</code>.</p>
</blockquote>
<p>Để làm được đệ quy ta cần xác định :</p>
<ul>
<li>Điểm dừng của đệ quy</li>
<li>Quy luật lặp lại</li>
</ul>
<p>==&gt; Hãy đến với các ví dụ sau, hiểu hiểu hơn về đệ quy nhé</p>
<ul>
<li>
<details>
<summary>Dùng để quy <b>Tính tổng từ 1 tới n</b></summary>
<p>Cho file <code v-pre>Demo.java</code> như sau:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">sum1toN</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">int</span> result <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token function">sum1toN</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//nên sử dụng thêm biến để debug tốt</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">sum1toN</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//nên sử dụng thêm biến này để debug tốt</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : 15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>🧚‍♂️ Bạn có thể thấy nó hơi dài vì đã thêm biến <code v-pre>result</code>, nhưng bạn hãy làm thế để tốt cho việc <code v-pre>debug</code> nha.</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Giải thích</b></summary>
<ul>
<li>
<p><strong>B1</strong> : Xác định điềm dùng ⇨ 0, (<em>n sẽ chạy về tới 0 và dừng</em>)</p>
</li>
<li>
<p><strong>B2</strong> : Xác định quy luật ⇨ n + (n-1) + (n-2)...0 (<em>tới 0 là dừng</em>)</p>
</li>
</ul>
</details>
</details>
</li>
</ul>
<hr>
<ul>
<li>
<details>
<summary>Dùng đệ quy tính <b>giai thừa</b></summary>
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-15-39-giai-thua.png" title="" alt="giai-thua.png" width="300">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">int</span> result <span class="token operator">=</span> n <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//khai báo biến thêm để dễ debug</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//khai báo biến thêm đễ dễ debug</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//Output : 120</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Giải thích</b></summary>
<ul>
<li>
<p><strong>B1</strong> : Xác định điềm dùng ⇨ 1, (<em>n sẽ chạy về tới 1 và dừng</em>)</p>
</li>
<li>
<p><strong>B2</strong> : Xác định quy luật ⇨ n*(n-1)*...1 (<em>tới 1 là dừng</em>)</p>
</li>
</ul>
</details>
</details>
</li>
</ul>
<hr>
<ul>
<li>
<details>
<summary>Dùng đệ quy tính dãy <b>Fibonacci</b></summary>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-33-27-Ảnh chụp Màn hình 2021-02-01 lúc 13.33.16.png" alt="Ảnh chụp Màn hình 2021-02-01 lúc 13.33.16.png"></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> n <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//khai báo biến thêm đễ dễ debug </span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//khai báo biến thêm đễ dễ debug</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Output : 13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Giải thích</b></summary>
<ul>
<li>
<p><strong>B1</strong> : Xác định điềm dùng ⇨ vị trí n, (<em>chạy tới vị trí n trong dãy fibbonacci và dừng</em>)</p>
</li>
<li>
<p><strong>B2</strong> : Xác định quy luật ⇨ 1 1 2 3 5 8 13... (<em>vị trí 1 và 2 là 1, về sau là số sau bằng tổng 2 số trước</em>)</p>
</li>
</ul>
</details>
</li>
</ul>
<hr>
<blockquote>
<p>⚠️ Bản chất của <strong>đệ quy</strong> là cơ chế <code v-pre>Stack</code> (<em>ngăn xếp</em>)</p>
<p>🚀 Nó sẽ không khó khi bạn đặt thêm <strong>biến</strong> và có kỹ năng <code v-pre>Debug</code></p>
</blockquote>
<table>
<thead>
<tr>
<th>🔙   <a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/11.Math.md" target="_blank" rel="noopener noreferrer">Bài 11. Math Methods<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a> 🏠</th>
</tr>
</thead>
</table>
</div></template>


