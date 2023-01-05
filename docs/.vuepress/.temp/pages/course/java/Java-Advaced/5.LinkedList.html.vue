<template><div><h1 id="arraylist-muc-luc" tabindex="-1"><a class="header-anchor" href="#arraylist-muc-luc" aria-hidden="true">#</a> ArrayList--------------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<h2 id="_1-gioi-thieu" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu" aria-hidden="true">#</a> 1. Giới thiệu</h2>
<p><code v-pre>LinkedList</code> (<em>danh sách liên kết</em>) : là một danh sách gần giống với <code v-pre>ArrayList</code>, sự khác nhau sẽ nói ở bên dưới nhé :</p>
<blockquote>
<p>Sử dụng <code v-pre>LinkedList</code> trong gói <code v-pre>java.util.LinkedList</code> như sau :</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">LinkedList</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> animals <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cars<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"mèo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cars<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"chó"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cars<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"heo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cars<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"rắn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cars<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Output : [mèo,chó,heo,rắn]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>⚠️ <code v-pre>ArrayList</code> và <code v-pre>LinkedList</code> khác nhau về bản chất và mục đích sử dụng.</p>
</blockquote>
<hr>
<h2 id="_2-su-khac-nhau-arraylist-va-linkedlist" tabindex="-1"><a class="header-anchor" href="#_2-su-khac-nhau-arraylist-va-linkedlist" aria-hidden="true">#</a> 2. Sự khác nhau <code v-pre>ArrayList</code> và <code v-pre>LinkedList</code></h2>
<p><code v-pre>LinkedList</code> và <code v-pre>ArrayList</code> bản chất là một tập hợp có thể chứa nhiều <code v-pre>Object</code> cùng kiểu dữ liệu.</p>
<h3 id="ban-chat-cua-arraylist" tabindex="-1"><a class="header-anchor" href="#ban-chat-cua-arraylist" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-17-36-14-Professor Male.png" alt="Professor Male.png"> Bản chất của <code v-pre>ArrayList</code></h3>
<p>Thực chất <code v-pre>ArrayList</code> là một mảng thông thường (<em>mảng không tự co dãn được và phải khai báo số lượng trước khi sử dụng</em>).</p>
<blockquote>
<p>💡 Giả dụ <code v-pre>ArrayList</code> có thể chứa được <code v-pre>10 phần tử</code>, nhưng bạn lại thêm phần tử thứ <code v-pre>11</code> thì nó sẽ tự tạo ra một <code v-pre>ArrayList</code> mới có thể chứa được <code v-pre>20</code> tử và sao chép <code v-pre>ArrayList</code> cũ và xoá nó.</p>
</blockquote>
<br>
<h3 id="ban-chat-cua-linkedlist" tabindex="-1"><a class="header-anchor" href="#ban-chat-cua-linkedlist" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-17-36-14-Professor Male.png" alt="Professor Malepng"> Bản chất của <code v-pre>LinkedList</code></h3>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/09-23-23-22-train.png" alt="train.png"></p>
<p>Bạn cứ tưởng tượng mỗi một dữ liệu là <strong>1 đoàn tàu</strong>, và một một đoạn tàu liên kết với đoàn tàu phía sau nó.</p>
<blockquote>
<p>💡 Như hình trên, để thêm đoàn tàu số <code v-pre>7</code> thì, đoàn tàu số 6 sẽ tạo thêm một sợi dây xích nối vào đoàn tàu số <code v-pre>7</code>.</p>
</blockquote>
<br>
<h3 id="vay-ta-nen-su-dung-arraylist-hay-linkedlist" tabindex="-1"><a class="header-anchor" href="#vay-ta-nen-su-dung-arraylist-hay-linkedlist" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-14-12-Language Learning.png" alt="Language Learningpng"> Vậy ta nên sử dụng <code v-pre>ArrayList</code> hay <code v-pre>LinkedList</code>  ?</h3>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</summary>
<br>
<p>Tuỳ vào mục đích của bạn, nhưng tôi sẽ khuyến khích bạn như sau :</p>
<table>
<thead>
<tr>
<th>So sánh</th>
<th>ArrayList</th>
<th>LinkedList</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dữ liệu</td>
<td>nếu bạn muốn truy cập ngẫu nhiên bất kỳ phần tử nào</td>
<td>nếu bạn chỉ cần truy cập theo tuần tự, 1 rồi 2 rồi 3</td>
</tr>
<tr>
<td>Chỉnh sửa</td>
<td>nếu bạn ít chỉnh sửa</td>
<td>nếu bạn cần thêm bớt linh động</td>
</tr>
</tbody>
</table>
<blockquote>
<p>💡 Hãy tưởng tượng thế này nhé, trong một lớp học gồm 30 bạn, ta nên dùng ==&gt; <code v-pre>ArrayList</code>, vì nếu dùng <code v-pre>LinkedList</code> tìm thằng số 18 phải hỏi thằng số 1 là 2 đâu, 3 đâu, rồi tìm tới 17 xong mới ra được thằng 18.</p>
</blockquote>
</details>
<hr>
<h2 id="_3-phuong-thuc-linkedlist-pho-bien" tabindex="-1"><a class="header-anchor" href="#_3-phuong-thuc-linkedlist-pho-bien" aria-hidden="true">#</a> 3. Phương thức <code v-pre>LinkedList</code> phổ biến</h2>
<p>Trong nhiều trường hợp, <code v-pre>ArrayList</code> sẽ hiểu quả hơn trong việc truy cập ngẫu nhiên phần tử, nhưng <code v-pre>LinkedList</code> cũng hay lắm, nó có nhiều phương thức hỗ trợ :</p>
<table>
<thead>
<tr>
<th>Phương thức</th>
<th>Mổ tả</th>
</tr>
</thead>
<tbody>
<tr>
<td>addFirst()<br>addLast()</td>
<td>Thêm phần tử <strong><code v-pre>đầu</code></strong> danh sách<br>Thêm phần tử <strong><code v-pre>cuối</code></strong> danh sách</td>
</tr>
<tr>
<td>removeFirst()<br>removeLast()</td>
<td>Xoá phần tử <strong><code v-pre>đầu</code></strong> danh sách<br>Xoá phần tử <strong><code v-pre>cuối</code></strong> danh sách</td>
</tr>
<tr>
<td>getFirst()<br>getLast()</td>
<td>Lấy phần tử <strong><code v-pre>đầu</code></strong> danh sách<br>Lấy phần tử <strong><code v-pre>cuối</code></strong> danh sách</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>🔙  <a href="https://github.com/Zenfection/Java/blob/master/Java%20Advaced/4.ArrayList.md" target="_blank" rel="noopener noreferrer">Bài 4.ArrayList<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20Advaced/6.HashMap.md" target="_blank" rel="noopener noreferrer">Bài 6.HashMap<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


