<template><div><h1 id="file-handling-muc-luc" tabindex="-1"><a class="header-anchor" href="#file-handling-muc-luc" aria-hidden="true">#</a> File Handling--------------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<h2 id="_1-gioi-thieu" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu" aria-hidden="true">#</a> 1. Giới thiệu</h2>
<p>Lớp <code v-pre>File</code> nằm trong gói <code v-pre>java.io</code> cho phépta xử lý về file rất linh hoạt :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token class-name">File</span> myFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"kietdeptrai.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Các phương thức phổ biến của <code v-pre>File</code> :</p>
<table>
<thead>
<tr>
<th>Phương thức</th>
<th>Kiểu dữ liệu</th>
<th>Mô tả</th>
</tr>
</thead>
<tbody>
<tr>
<td>canRead()<br>canWrite()<br>exists()</td>
<td>Boolean</td>
<td>Kiểm tra file có <strong>đọc</strong> được không<br>Kiểm tra file có <strong>ghi</strong> được không<br>KIểm tra file có <strong>tồn tại</strong> không</td>
</tr>
<tr>
<td>createNewFile()<br>delete()</td>
<td>Boolean</td>
<td>Tạo một file trống<br>Xoá một file</td>
</tr>
<tr>
<td>write(x)</td>
<td></td>
<td>Ghi mộ file</td>
</tr>
<tr>
<td>close()</td>
<td></td>
<td>Đóng một file</td>
</tr>
<tr>
<td>getName()</td>
<td>String</td>
<td>Trả về tên của file</td>
</tr>
<tr>
<td>getAbsolutePath()</td>
<td>String</td>
<td>Trả về đường dẫn tuyệt đối của file</td>
</tr>
<tr>
<td>length()</td>
<td>Long</td>
<td>Trả về kích thước tệp (<em>tính bằng byte</em>)</td>
</tr>
<tr>
<td>list()</td>
<td>String[]</td>
<td>Trả về mảng các tệp trong thư mục</td>
</tr>
<tr>
<td>mkdir()</td>
<td>Boolean</td>
<td>Tạo thư mục</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="_2-tao-va-ghi-file" tabindex="-1"><a class="header-anchor" href="#_2-tao-va-ghi-file" aria-hidden="true">#</a> 2. Tạo và ghi file</h2>
<h3 id="su-dung-createnewfile-đe-tao-mot-file" tabindex="-1"><a class="header-anchor" href="#su-dung-createnewfile-đe-tao-mot-file" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-17-36-14-Professor Male.png" alt="Professor Male.png"> Sử dụng <code v-pre>createNewFile()</code> để tạo một file.</h3>
<blockquote>
<ul>
<li>Trả về <code v-pre>true</code> nếu tạo thành công</li>
<li>Trả về <code v-pre>false</code> nếu file tồn tại</li>
</ul>
</blockquote>
<p>Bạn nên sử dụng chung với <code v-pre>try..catch</code> như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">File</span> myFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"kietdeptrai.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>myFile<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"File đã tạo : "</span> <span class="token operator">+</span> myFile<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"File đã tồn tại"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Lỗi tạo file"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Output : File đã tạo : kietdeptrai.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/20-21-32-59-Ảnh chụp Màn hình 2021-02-20 lúc 21.32.55.png" alt="Ảnh chụp Màn hình 2021-02-20 lúc 21.32.55.png"></p>
<p>🔥 Sau khi tạo thành công các bạn có ngay file <code v-pre>kietdeptrai.txt</code></p>
<blockquote>
<p>⚠️ Mặc định nó sẽ tạo file đúng với thư mục ta đang code, nếu ta muốn tạo ở nơi khác, hãy dùng :</p>
<ul>
<li>Ký tự <code v-pre>\\</code> cho <code v-pre>Windows</code> ➨ <em>\Users\name\filename.txt</em></li>
<li>Ký tự <code v-pre>/</code> cho <code v-pre>Linux</code> và <code v-pre>MacOS</code> ➨ <em>/Users/name/filename.txt</em></li>
</ul>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">File</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"C:\\Users\\MyName\\filename.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Dành cho Windows</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="su-dung-write-đe-ghi-file" tabindex="-1"><a class="header-anchor" href="#su-dung-write-đe-ghi-file" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-17-36-14-Professor Male.png" alt="Professor Male.png"> Sử dụng <code v-pre>write()</code> để ghi file</h3>
<p>Sử dụng lớp <code v-pre>FileWrite</code> cùng với phương thức <code v-pre>write()</code> ta có thể ghi được trong file</p>
<blockquote>
<p>⚠️ Sau khi ghi xong ta phải đóng file lại bằng phương thức <code v-pre>close()</code></p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileWriter</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">FileWriter</span> myWriter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token string">"kietdeptrai.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            myWriter<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"Tôi là Kiệt đẹp trai đó nha !!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            myWriter<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Đã ghi file thành công"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Xảy ra lỗi khi ghi file"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//Output : Đã ghi file thành công</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Và sau đó mở file <code v-pre>kietdeptrai.txt</code> :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/20-21-56-45-Ảnh chụp Màn hình 2021-02-20 lúc 21.56.41.png" alt="Ảnh chụp Màn hình 2021-02-20 lúc 21.56.41.png"></p>
</blockquote>
<hr>
<h2 id="_3-đoc-file" tabindex="-1"><a class="header-anchor" href="#_3-đoc-file" aria-hidden="true">#</a> 3. Đọc file</h2>
<h3 id="su-dung-lop-scanner-đe-đoc-noi-dung-trong-file" tabindex="-1"><a class="header-anchor" href="#su-dung-lop-scanner-đe-đoc-noi-dung-trong-file" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-17-36-14-Professor Male.png" alt="Professor Male.png"> Sử dụng lớp <code v-pre>Scanner</code> để đọc nội dung trong file</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">File</span> myFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"kietdeptrai.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Scanner</span> myReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span>myFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>myReader<span class="token punctuation">.</span><span class="token function">hasNextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">String</span> data <span class="token operator">=</span> myReader<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Lỗi xảy ra khi đọc file"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//Output : Tôi là Kiệt đẹp trai đó nha !!!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Hàm sau đây :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>myReader<span class="token punctuation">.</span><span class="token function">hasNextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">String</span> data <span class="token operator">=</span> myReader<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bởi vì lớp <code v-pre>Scanner</code> kế thừa từ <code v-pre>Iterator</code> nên vậy, cọi lại <a href="https://github.com/Zenfection/Java/blob/master/Java%20Advaced/8.Iterator.md" target="_blank" rel="noopener noreferrer">Iterator<ExternalLinkIcon/></a></p>
<p>Nó có nghĩa là <code v-pre>myReader</code> đọc tới cuối dòng, Chuỗi data sẽ lưu từng dòng trong file rồi in ra đến hết.</p>
</blockquote>
<h3 id="cach-đe-hien-thi-moi-thong-tin-co-ban-cua-file" tabindex="-1"><a class="header-anchor" href="#cach-đe-hien-thi-moi-thong-tin-co-ban-cua-file" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-14-12-Language Learning.png" alt="Language Learningpng"> Cách để hiển thị mọi thông tin cơ bản của file</h3>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</summary>
<br>
<p>Sử dụng những phương thức đề cập ở trên như sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> myFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"kietdeptrai.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>myFile<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Tên file: "</span> <span class="token operator">+</span> myFile<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Đường dẫn file : "</span> <span class="token operator">+</span> myFile<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Có thể ghi : "</span> <span class="token operator">+</span> myFile<span class="token punctuation">.</span><span class="token function">canWrite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Có thể đọc : "</span> <span class="token operator">+</span> myFile<span class="token punctuation">.</span><span class="token function">canRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Kích thước file : "</span> <span class="token operator">+</span> myFile<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"File không tồn tại"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*Tên file: kietdeptrai.txt
  Đường dẫn file : /Users/zenfection/Desktop/Code/Java/kietdeptrai.txt
  Có thể ghi : true
  Có thể đọc : true
  Kích thước file : 40              */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<blockquote>
<p>⚠️ Có nhiều <code v-pre>class</code> sẵn trong <code v-pre>Java API</code> để thao tác trên file như : <code v-pre>FileReader</code>, <code v-pre>BufferedReader</code>, <code v-pre>Files</code>, <code v-pre>Scanner</code>, <code v-pre>FileInputStream</code>, <code v-pre>FileWriter</code>, <code v-pre>BufferedWritter</code>, <code v-pre>FileOutputStream</code>...</p>
<p>Bạn hãy tự tìm hiểu và học nó, bởi vì nó không khó !!!</p>
</blockquote>
<hr>
<h2 id="_4-xoa-file" tabindex="-1"><a class="header-anchor" href="#_4-xoa-file" aria-hidden="true">#</a> 4. Xoá file</h2>
<h3 id="su-dung-phuong-thuc-delete-đe-xoa-file" tabindex="-1"><a class="header-anchor" href="#su-dung-phuong-thuc-delete-đe-xoa-file" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-17-36-14-Professor Male.png" alt="Professor Male.png"> Sử dụng phương thức <code v-pre>delete()</code> để xoá file</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span> 

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeleteFile</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token class-name">File</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"filename.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>myObj<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Xoá thành công file "</span> <span class="token operator">+</span> myObj<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Xoá file thất bại."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
<span class="token comment">//Output : Xoá thành công file filename.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bạn cũng có thể xoá cả thư mục bằng cách sau :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span> 

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeleteFolder</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token class-name">File</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"C:\\Users\\MyName\\Test"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>myObj<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Đã xoá thư mục "</span> <span class="token operator">+</span> myObj<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Xoá thư mục thất bại"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
<span class="token comment">//Output : Đã xoá thư mục Test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>⚠️ Nhưng phải thư mục trống mới xoá được nhé !!!</p>
</blockquote>
</div></template>


